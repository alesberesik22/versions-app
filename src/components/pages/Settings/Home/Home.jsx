import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './Home.css';

function Home() {
    const [samAppMySQL, setSamAppMySQL] = useState([]);
    const [samPrfMySQL, setSamPrfMySQL] = useState([]);
    const [mySQLIP, setMySQLIP] = useState("");
    const [oracleIP, setOracleIP] = useState("");

    useEffect(() => {
        axios.get("http://localhost:3001/mysql/SAM_SAM_APP_VERSION").then((res)=> {
            setSamAppMySQL(res.data.recordset);
        });
        axios.get("http://localhost:3001/mysql/SAM_SAM_PRF_VERSION").then((res)=>{
            setSamPrfMySQL(res.data.recordset);
        })
        axios.get("http://localhost:3001/getmysqlconfig").then((res)=>{
            setMySQLIP(res.data.server);
        })
    },[])

  return (
    <div className='home'>
        <div className='db'>
            <h1>MySQL: <span>{mySQLIP}</span></h1>
            <div className='title'>
                <h3>SAM_SAM_APP_VERSION</h3>
                <h3>SAM_SAM_PRF_VERSION</h3>
                <h3>test</h3>
            </div>
            <div className='text'>
                {samAppMySQL.sort((a,b)=> a.ID > b.ID ? -1 : 1).slice(0,1).map((item, i) => <h3 key={i}>{item.ID}</h3>)}
                {samPrfMySQL.sort((a,b)=> a.ID > b.ID ? -1 : 1).slice(0,1).map((item, i) => <h3 key={i}>{item.ID}</h3>)}
                <h3>test2</h3>
            </div>
        </div>
        <div className='db'>
            <h1>Oracle DB IP</h1>
            <div className='title'>
                <h3>SAM_SAM_APP_VERSION</h3>
                <h3>SAM_SAM_PRF_VERSION</h3>
                <h3>test</h3>
            </div>
            <div className='text'>
                <h3>test2</h3>
                <h3>test2</h3>
                <h3>test2</h3>
            </div>
        </div>
    </div>
  )
}

export default Home