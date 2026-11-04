'use client';
import{ useState, useEffect, useRef } from "react";

export default function HomePage(){
  const[email, setEmail] = useState('');
const[password, setPassword] = useState('');
const[counter, setCounter] = useState(3);
function login(){
  if(!email.includes("@")){
    alert("Email Wrong");
  }
  else if(password.length < 8){
    alert("password must b 8 digits");
  }
  else{
    alert("Login Successful");
  }
}
const nameRef = useRef<HTMLInputElement>(null);
useEffect(()=>{
  console.log(nameRef.current?.value)
})



  return(
    <main className="min-h-screen bg-pink-200 flex items-center justify-center">
      <div className="grid gap-4 justify center">
      <h1 className="text-amber-300 font-bold">Admin Login</h1>
   <input type="text"placeholder="Email" onChange={(e) => setEmail(e.target.value)}  className=" text-purple-500 bg-green-200 rounded border border-blue-800 p-2"></input>
      <input type="password"placeholder="Password" onChange={(e) => setPassword(e.target.value)}className=" text-purple-700 bg-green-200 rounded border border-blue-800 p-2 " ></input>   
      
<button onClick={login} className="bg-orange-300 text-grey-300 rounded rounded-4 roun p-2">Login</button>
<p className="text-amber-300 bg-amber-900"> { counter }</p>
<button onClick={ () => setCounter(counter+1)} className="bg-pink-300 text-grey-400 rounded rounded-4 p-2 border border-blue-800 w-full">Add</button>
</div>
    </main>
  )
}