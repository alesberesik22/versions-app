import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';

const columns = [
    { field: 'ID', headerName: 'ID', width: 150 },
    { field: 'VERSION_CONTROL_LABEL', headerName: 'VERSION_CONTROL_LABEL', width: 230 },
    { field: 'UPDATE_DATE', headerName: 'UPDATE_DATE', width: 200 },
    { field: 'APP_TYPE', headerName: 'APP_TYPE', width: 130 },
  ];
function Sam_app_version() {
    const [rows, setRows] = useState([]);
    const [isDataLoaded, setIsDataLoaded] = useState(false);
    useEffect(() => {
        axios.get("http://localhost:3001/mysql/SAM_SAM_APP_VERSION").then((res)=> {
            console.log(res.data);
            setRows(res.data.recordset);
        }).then(setIsDataLoaded(true));
    },[])
  return (
    <div className='table' style={{height:800, width:'100%'}}>
        {console.log("Rows",rows)}
        {isDataLoaded && <DataGrid rows={rows} columns={columns} pageSize={10} rowsPerPageOptions={[10]} getRowId={(row)=> row.ID}/>}
    </div>
  )
}

export default Sam_app_version