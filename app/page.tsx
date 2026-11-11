'use client';

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

type Student = {
  id: number,
  name: string,
  semster: number,
}

export default function homepage(){
  const [students, setStudents] = useState<Student[]>([
    { id: 1, name: "Ayesha", semster: 7 },
    { id: 2, name: "Laiba", semster: 7 },
    { id: 3, name: "Tayyaba", semster: 7 },
  ]);

  const [name, setName] = useState("");
  const [search, setSearch] = useState("");
  const router = useRouter();

  const addStudent = () => {
    if (name.trim() === "") return;
    const newStudent: Student = {
      id: students.length + 1,
      name: name,
      semster: 7
    };
    setStudents([...students, newStudent]);
    setName("");
  };

  const deleteStudent = (id: number) => {
    setStudents((previous) =>
      previous.filter((student) => student.id !== id)
    );
  }

  const redirectToDashboard = () => {
    router.push('/dashboard');
  }

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(search.toLowerCase())
  );

  return(
    <main className="max-w-2xl bg-white mx-auto p-8">
      <h1 className="text-3xl font-bold text-gray-800">Student Management</h1>

      <div className="flex gap-4 mb-4 mt-4">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 flex-1 text-gray-800"
          placeholder="Add Students"
        />
        <button className="bg-blue-600 text-white px-4" onClick={addStudent}>
          Add
        </button>
        <button className="bg-blue-600 text-white px-4" onClick={redirectToDashboard}>
          Redirect
        </button>
      </div>

      <div className="flex gap-4 mb-4">
        <input
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          className="border p-2 flex-1 text-gray-800"
          placeholder="Search Students"
        />
      </div>

      {filteredStudents.map((student) => (
        <div key={student.id} className="flex gap-2 mb-2 justify-between items-center p-2">
          <Link className="font-bold text-blue-800" href={`/students/${student.id}`}>
            Show Students
          </Link>
          <p className="text-gray-700">{student.name}</p>
          <button
            onClick={() => deleteStudent(student.id)}
            className="bg-red-600 text-white px-4 py-1"
          >
            Remove
          </button>
        </div>
      ))}
    </main>
  )
}