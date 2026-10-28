"use client";
import { useState } from "react";

export default function UserPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordfield, setPasswordfield] = useState(true);
  const [allfield, setAllfield] = useState(false);

  function changePassword(e: any) {
    const value = e.target.value;
    setPassword(value);
    setPasswordfield(value.length > 8);
  }

  return (
    <main>
      <input
        type="text"
        className="rounded border p-3 text-blue-300"
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
        }}
      />

      <input
        type="password"
        className="rounded border p-3 text-blue-300"
        value={password}
        onChange={(event) => changePassword(event)}
      />

      <div className="">
        {allfield ? (
          <p className="text-red-500">Both Fields are required</p>
        ) : (
          <s className="text-green-500">Both Fields are required</s>
        )}
      </div>
    </main>
  );
}