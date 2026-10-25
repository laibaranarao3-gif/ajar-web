"use client"
import { useState } from "react";

export default function HomePage(){
  const [counter, setCounter] = useState(0);

  return (
    <main className="p-8 bg-white">
      <h1 className="text-black">Count {counter}</h1>
      <button onClick={() => {
        setCounter(counter + 1);
        console.log(counter);
      }} className="text-black">Increase</button>
      <button onClick={() => {
        setCounter(counter - 1);
        console.log(counter);
      }} className="text-black">Decrease</button>

      <input type="text" placeholder="Password" className="placeholder-white" />
    </main>
  );
}