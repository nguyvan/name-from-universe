"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });

const express = __importDefault(require('express'));
const xlsx = __importDefault(require("xlsx"));
const bodyParser = __importDefault(require('body-parser'));
const path = __importDefault(require('path'));
const dotenv = __importDefault(require('dotenv'));
const stringSimilarity = __importDefault(require("string-similarity"));
const jsonParser = bodyParser.default.json();

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

