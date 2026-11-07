'use client';

import { useState } from "react";

export default function Test(){
  const [students, setStudents] =useState([
  { id: 0, name: "Laiba", semester: 7 },
  { id: 1, name: "Mariam", semester: 6 },
  { id: 2, name: "Tayyaba", semester: 7 },
  { id: 3, name: "Areeba", semester: 6 },




  ])

  const promoteStudent = (index: number) => {
    console.log(index);
    setStudents((previuos) => previuos.map((student) => student.id == index ? {
      ...student, semester: student.semester + 1
    } : student ));
      
    
   

  }
  return (
    <main>
      { 
        students.map((student, index) => {
          return (<>
          <div className="border p-4 m-4">
            <h2>Student Roll no: { student.id }</h2>
            <h2>Student Name: {student.name } </h2>
             <h2>Student Semester: {student.semester } </h2> 
           
            <button
            onClick={ () => promoteStudent(index) }
             className="bg-blue-800 text-white px-3 py-2 mt-2"> Promote Student 

            </button>
              
          </div>
          </>)
        })
      }

    </main>

  );

}
