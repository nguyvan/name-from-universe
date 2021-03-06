const express = require('express');
const http = require('http');
const xlsx = require("xlsx");
const bodyParser = require('body-parser');
const path = require('path');
const dotenv = require('dotenv');
const stringSimilarity = require("string-similarity");
const AWS = require("aws-sdk");
const jsonParser = bodyParser.json()

dotenv.config()

let AWSConfig = {
    "region": process.env.REGION,
    "endpoint": process.env.ENDPOINT,
    "accessKeyId": process.env.ACCESSKEYID,
    "secretAccessKey": process.env.SECRETACCESSKEY
}

AWS.config.update(AWSConfig)

let docClient = new AWS.DynamoDB.DocumentClient();
const getNumberName = (req, res, next) => {
    let params = {
        TableName: "users",
        Key: {
            "id": "0"
        }
    };

    docClient.get(params, function(err, data) {
        if (err) {
            console.log("users::getNumberName::error - " + JSON.stringify(err, null, 2))
        }
        else {
            req.number_name = data.Item.number_name
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


app.get('/',function(req, res){
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
        console.log('Socket succesfully connected with id: ' + socket.id);
		socket.on("disconnect", function() {
            console.log('Socket succesfully disconnected with id: ' + socket.id);
        });
		socket.on('search', function(msg) {
            var params = {
                TableName: "users",
                Key: {
                    "id": "0"
                },
                UpdateExpression: "set number_name = :nn",
                ExpressionAttributeValues:{
                    ":nn": msg + 1,
                },
                ReturnValues:"UPDATED_NEW"
            };
            docClient.update(params, function(err, data) {
                if (err) {
                    console.error("Unable to update item. Error JSON:", JSON.stringify(err, null, 2));
                } else {
                    io.emit("disfuse", msg + 1);
                }
            });  
        });
	}
);

server.listen(process.env.PORT, function(){
    console.log(`Api up and running at: http://${process.env.HOST}:${process.env.PORT}`);
});

// const express = require('express');
// const xlsx = require("xlsx");
// const bodyParser = require('body-parser');
// const path = require('path');
// const dotenv = require('dotenv');
// const stringSimilarity = require("string-similarity");
// const jsonParser = bodyParser.json();

// const app = express();

// const workbook = xlsx.readFile('./build/data/liste_prénoms_arabo-musulmans.xlsx');
// const sheet_name_list = workbook.SheetNames;
// const listname = xlsx.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]], {header: 1}).map((items) => {
//     return items[0].trim()
// });

// dotenv.config()

// app.get('/',function(req,res){
//     res.sendFile(path.join(__dirname + '/index.html'));
// });

// app.post('/find', jsonParser, function(req, res){
//     let req_body = req.body;
//     let name = req_body.name;
//     if (listname.map((value)=>value.toLowerCase()).includes(name.toLowerCase())) {
//         return res.status(200).json({
//             success: true,
//             name: name
//         });
//     }
//     else {
//         let argstr = listname[0];
//         let max = stringSimilarity.compareTwoStrings(name.toLowerCase(), listname[0].toLowerCase());
//         listname.forEach((n) => {
//             if (stringSimilarity.compareTwoStrings(name.toLowerCase(), n.toLowerCase()) > max) {
//                 max = stringSimilarity.compareTwoStrings(name.toLowerCase(), n.toLowerCase())
//                 argstr = n
//             }
//         })

//         return res.status(200).json({
//             success: false,
//             name: argstr
//         });
//     }
// })


// //add the router
// app.use(express.static(__dirname));

// app.listen(process.env.PORT, function(){
//     console.log(`Api up and running at: http://${process.env.host}:${process.env.port}`);
// });