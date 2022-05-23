import React, { useState } from 'react'
import Input from '../Input.jsx/Input'
import axios from 'axios'

import './Settings.css';

function Settings() {
    const [DBIP, setDBIP] = useState("");
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [DBName, setDBName] = useState("");
    
    const [oracleDBIP, setOracleDBIP] = useState("");
    const [oracleUserName, setOracleUserName] = useState("");
    const [oraclePassword, setOraclePassword] = useState("");
    const [oracleDBName, setOracleDBName] = useState("");

const handleSubmit = (e) => {
    e.preventDefault();
    if(e.target.id === "MySQL")
    {
        const data = {
            server: DBIP,
            port: 1433,
            user: userName,
            password: password,
            database: DBName,
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
        }
        console.log(data);
        axios.post("http://localhost:3001/mysqlconfig",data).then(()=> console.log("Data has been sent")).catch(err=>{console.error(err)});
    }
    if(e.target.id === "ORACLE")
    {
        const data = {
            server: oracleDBIP,
            port: 1521,
            user: oracleUserName,
            password: oraclePassword,
            database: oracleDBName,
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
        }
        axios.post("http://localhost:3001/oracleconfig",data).then(()=> console.log("Data has been sent")).catch(err=>{console.error(err)});
    }
}

  return (
      <div className='settings'>
          <div className='DB'>
            <form id='MySQL' onSubmit={handleSubmit}>
                <h1>MySQL</h1>
                <input placeholder="Database IP address" onChange={e => setDBIP(e.target.value)}/>
                <input placeholder="User name" onChange={e => setUserName(e.target.value)}/>
                <input placeholder="Password" onChange={e => setPassword(e.target.value)}/>
                <input placeholder="Database name" onChange={e => setDBName(e.target.value)}/>
                <button className='fade'>Save settings</button>
            </form>
        </div>
        <div className='DB'>
            <form id='ORACLE' onSubmit={handleSubmit}>
                <h1>Oracle</h1>
                <input placeholder="Database IP address" onChange={e => setOracleDBIP(e.target.value)}/>
                <input placeholder="User name" onChange={e => setOracleUserName(e.target.value)}/>
                <input placeholder="Password" onChange={e => setOraclePassword(e.target.value)}/>
                <input placeholder="Database name" onChange={e => setOracleDBName(e.target.value)}/>
                <button className='fade'>Save settings</button>
            </form>
        </div>
      </div>
  )
}

export default Settings