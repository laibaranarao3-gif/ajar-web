'use client';
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import CustomButton from "./components/CustomButton";

export default function () {
  const [fullname, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [counter, setCounter] = useState(0);
  const [students, setStudents] = useState([
    "Ayesha", "Maryam", "Tayyaba", "Laiba"
  ]);
  const [aStudent, setAStudent] = useState('');

  const validName = fullname.trim().length >= 3;
  const validPassword =
    /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const nameRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    nameRef.current?.focus();
  }, []);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    alert(`Name: ${fullname} Email: ${email}`);
  };

  const addToArray = () => {
    if (aStudent.trim() === "") {
      alert("Please write something");
      return;
    }
    setStudents([...students, aStudent]);
    setAStudent('');
  };

  const removeArray = (n: number) => {
    setStudents((previous) => previous.filter((student, i) => i !== n));
  };

  return (
    <main className="flex min-h-screen bg-gradient-to-br from-indigo-700 to-purple-800 items-center justify-center p-4 gap-4">

      {/* LEFT WALA CARD */}
      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl sm:p-8">
        <input
          type="text"
          value={aStudent}
          className="border border-gray-800 text-gray-800 rounded"
          onChange={(e) => setAStudent(e.target.value)}
        />
        <button onClick={addToArray} className="bg-gray-800 text-white px-3 mb-3">Add</button>
        {
          students.map((student, index) => {
            return (
              <div key={index} className="flex gap-2">
                <p className="text-gray-900">{student}</p>
                <button onClick={() => removeArray(index)} className="bg-gray-800 text-white px-2">X</button>
              </div>
            );
          })
        }
      </div>

      {/* RIGHT WALA CARD - SIR WALA */}
      <form onSubmit={handleSubmit} className="grid w-full max-w-md gap-4 rounded-2xl bg-white p-6 shadow-xl sm:p-8">
        <h1 className="text-center text-2xl font-bold">Create Account</h1>

        <label>Full Name</label>
        <input
          ref={nameRef}
          type="text"
          value={fullname}
          placeholder="Full Name"
          onChange={(e) => setFullName(e.target.value)}
          className="border border-gray-800 text-gray-800 rounded p-3"
        />
        {!validName && <p className="text-red-500 text-sm">Name must be Three Characters</p>}

        <label>Email</label>
        <input
          type="email"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          className="border border-gray-800 text-gray-800 rounded p-3"
        />
        {!validPassword && <p className="text-red-500 text-sm">Name must be 8 Characters</p>}

        <label>Password</label>
        <input
          type="password"
          value={password}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          className="border border-gray-800 text-gray-800 rounded p-3"
        />

        <CustomButton />
        <button type="submit" className="bg-gray-800 text-white p-3 rounded-full">Register</button>
        <Link href="/dashboard">Go to Dashboard</Link>
      </form>

    </main>
  );
}