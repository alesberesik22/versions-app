var express = require("express");
const sql = require('mssql');
const bodyParser = require('body-parser');
const cors = require('cors');
var app = express();

app.use(cors());
// parse application/json
app.use(bodyParser.json());

var result
var result2

var mysqlConfig = {
    server: "",
    port: 1433,
    user: "",
    password: "",
    database: "",
    options: {
        encrypt:false,
        enableArithAbort: true,
    },
    connectionTimeout:150000,
    pool: {
        max:10,
        min:0,
        idleTimeoutMillis:30000,
    },
};

var oracleConfig = {
    server: "",
    port: 1433,
    user: "",
    password: "",
    database: "",
    options: {
        encrypt:false,
        enableArithAbort: true,
    },
    connectionTimeout:150000,
    pool: {
        max:10,
        min:0,
        idleTimeoutMillis:30000,
    },
};

sql.on('error', err => {
    console.log(err.message);
})

async function getDBUserAsyncFunctio(config,query1,query2) {
    try {
        let pool = await sql.connect(config);
        result = await pool.request().query(query1);
        result2 = await pool.request().query(query2);
    } catch (error) {
        console.log(error.message)
        sql.close();
    }
}

app.get("/mysql/SAM_SAM_APP_VERSION", (req,res) => {
    getDBUserAsyncFunctio(mysqlConfig,"SELECT TOP 15 * FROM SAM_SAM_APP.dbo.AML_APP_VERSIONS ORDER BY UPDATE_DATE DESC",
    "SELECT TOP 15 * FROM SAM_SAM_PRF.dbo.AML_PROFILES_VERSIONS ORDER BY UPDATE_DATE DESC");
    res.send(result);
    console.log("****************RESULT****************")
    console.log(result);
})

app.get("/mysql/SAM_SAM_PRF_VERSION", (req,res) => {
    getDBUserAsyncFunctio(mysqlConfig,"SELECT TOP 15 * FROM SAM_SAM_APP.dbo.AML_APP_VERSIONS ORDER BY UPDATE_DATE DESC",
    "SELECT TOP 15 * FROM SAM_SAM_PRF.dbo.AML_PROFILES_VERSIONS ORDER BY UPDATE_DATE DESC");
    res.send(result2);
    console.log("****************RESULT2****************")
    console.log(result2);
})

app.get("/getmysqlconfig",(req,res)=> {
    res.send(mysqlConfig);
})

app.get("/getoracleconfig", (req,res)=> {
    res.send(oracleConfig);
})

app.post('/mysqlconfig', (req,res) => {
    mysqlConfig = req.body;
    console.log(mysqlConfig);
})

app.post('/oracleconfig', (req,res) => {
    oracleConfig = req.body;
    console.log(oracleConfig);
})

app.listen(3001,()=>{
    console.log('running on port 3001');
})