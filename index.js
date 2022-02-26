const express = require('express');
const xlsx = require("xlsx");
const bodyParser = require('body-parser');
const path = require('path');
const dotenv = require('dotenv');
const stringSimilarity = require("string-similarity");
const jsonParser = bodyParser.json();

const app = express();

const workbook = xlsx.readFile('./build/data/liste_prénoms_arabo-musulmans.xlsx');
const sheet_name_list = workbook.SheetNames;
const listname = xlsx.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]], {header: 1}).map((items) => {
    return items[0].trim()
});

dotenv.config()

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname + '/index.html'));
});

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

app.listen(process.env.port, function(){
    console.log(`Api up and running at: http://${process.env.host}:${process.env.port}`);
});

