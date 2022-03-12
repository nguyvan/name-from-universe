const express = require('express');
const http = require('http');
const xlsx = require("xlsx");
const bodyParser = require('body-parser');
const path = require('path');
const dotenv = require('dotenv');
const sqlite3 = require('sqlite3');
const stringSimilarity = require("string-similarity");

const jsonParser = bodyParser.json();

const db = new sqlite3.Database("./server.db", (error) => {
    if (error) {
        console.log('Could not connect to database', error)
    } else {
        console.log('Connected to database')
    }
})

const getNumberName = (req, res, next) => {
    db.get("SELECT number_name FROM username", (error, result) => {
        if (error) {
            return res.status(200).json({
                success: false,
                error: error
            });
        }
        else {
            req.number_name = result.number_name
            return next()
        }
    })
}

const app = express();
const server = http.createServer(app);
var io = require("socket.io")(server);

const workbook = xlsx.readFile('./build/data/liste_prénoms_arabo-musulmans.xlsx');
const sheet_name_list = workbook.SheetNames;
const listname = xlsx.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]], {header: 1}).map((items) => {
    return items[0].trim()
});

dotenv.config()

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/number', getNumberName, function(req, res) {
    res.status(200).json({
        success: true,
        number: req.number_name
    });
})

app.post('/find', jsonParser, function(req, res){
    let req_body = req.body;
    let name = req_body.name;
    if (listname.map((value)=>value.toLowerCase()).includes(name.toLowerCase())) {
        return res.status(200).json({
            success: true,
            name: name
        });
    }
    else {
        let argstr = listname[0];
        let max = stringSimilarity.compareTwoStrings(name.toLowerCase(), listname[0].toLowerCase());
        listname.forEach((n) => {
            if (stringSimilarity.compareTwoStrings(name.toLowerCase(), n.toLowerCase()) > max) {
                max = stringSimilarity.compareTwoStrings(name.toLowerCase(), n.toLowerCase())
                argstr = n
            }
        })
        
        return res.status(200).json({
            success: false,
            name: argstr
        });
    }
})


//add the router
app.use(express.static(__dirname));

io.on("connection", function(socket)
	{
        console.log('Socket succesfully connected with id: '+socket.id);
		socket.on("disconnect", function() {
            console.log('Socket succesfully disconnected with id: ' + socket.id);
        });
		socket.on('search', function(msg) {
            let sql = `UPDATE username
                       SET number_name = ?`;
            db.run(sql, [msg + 1], function(err) {
                if (err) {
                    return console.error(err.message);
                }
                else {
                    io.emit("disfuse", msg + 1);
                }
            })
        });
	}
);

server.listen(process.env.PORT, function(){
    console.log(`Api up and running at: http://${process.env.HOST}:${process.env.PORT}`);
});

