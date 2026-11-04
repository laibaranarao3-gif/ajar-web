'use client';

import {useState} from "react";

export default function loginPage(){
  const [email,setemail]=useState('');
  const [password,setpassword]=useState('');
  // cost [Validemail=]
  return(
<main className="min-h-screen flex items-center justify-center">
  <div className="gap-3 justify-center">
    <h1 className="text-blue-200 Admin login"></h1>
    <input placeholder="email"  items-center justify-center  onChange={e=> setemail ( e.target.value)}></input>
    <br></br>
    <input placeholder="password" items-center justify-center onChange={e=> setpassword (e.target.value)}></input>
    <br></br>
    <button className="bg-red text-blue p-2" onClick={()=> console.log (email,password)}>login</button>



  </div>
</main>
  );
}