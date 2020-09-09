import React, { useState } from 'react';

const App = ()=>{
let newtime = new Date().toLocaleTimeString();
const [ctime, setNtime]=useState(newtime);

const UpdateTime=()=>{
    newtime=new Date().toLocaleTimeString();
    setNtime(newtime);
}


    return(
    <>
    <h3>HY ! click to Update Time 🕥</h3>
   <h1 style={{color:'white',fontStyle:'italic'}}>🕥  {ctime}  🕥 </h1>
   <button onClick={UpdateTime} >Get New Time</button>
   <h4 >By Sandeep</h4>
    </>
    );
}
export default App;