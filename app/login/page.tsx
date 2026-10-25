"use client";
import { useState } from "react";

export default function HomePage(){
  const [counter, setCounter] = useState(0);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main className="p-8 bg-grey">
      <h1 className="text-black">Count {counter}</h1>
      <button onClick={() => {
        setCounter(counter + 1);
        console.log(counter);
      }} className="text-black">Increase</button>
      <button onClick={() => {
        setCounter(counter - 1);
        console.log(counter);
      }} className="text-black">Decrease</button>
      {/* showPassword ? "" : "" */}
      <input type={showPassword ? 'text': 'password' } className="placeholder-red-300 border border-red-400" placeholder="laiba@example.com"></input>
      <button className="bg-red-300 px-3 rounded" onClick={()=>{
        // console.log('Password show')
        setShowPassword(!showPassword);
        console.log(showPassword);
      }}>Eye</button>
    </main>
  )
}