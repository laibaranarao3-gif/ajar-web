'use client';

import { useState } from 'react';
import BSButton from '../components/BSButton';

export default function LoginPage(){
  const [number, setNumber] = useState(0);
  const [name, SetName] = useState('Laiba');
  
  const names = [ 'laiba', 'malaika', 'areeba', 'maryam', 'Tayyaba', 'Marsad', 'javeria' ];

  function btnClick(n: number){
    if(number < n){
      setNumber(number + 1);
    }
    else{
      setNumber(0);
    }
    SetName("Maryam");
    // console.log(number)
  }

  return (
    <main className="bg-white-800">
      <div>{ number }</div>
      
      {/* <p>{ names.map((newname) => {
        return <div>{newname}</div>
      }) }</p> */}

      <p>{names[number]}</p>

      <button onClick={() => btnClick(names.length - 1)} className="p-2 bg-red-800 text-white-800">Test</button>
    </main>
  );
}