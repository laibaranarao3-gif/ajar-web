'use client';
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const FIXED_EMAIL = "laibaranarao3@gmail.com";

  const validName = fullName.trim().length >= 3;
  const validPassword = /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9\s])(?=.*\S).{8,}$/.test(password);
  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  function handleSubmit(e: any) {
    e.preventDefault();
    if (!validName) return alert("characters must be greater than 3");
    if (!emailValid) return alert("Write correct email");

    // Fixed email wala check
    if (email !== FIXED_EMAIL) {
      return alert(`laibaranarao3@gmail.com: ${FIXED_EMAIL}`);
    }

    if (!validPassword) return alert("Password me 1 Capital, 1 Number, 1 Symbol aur 8 characters");
    
    alert(`Registered!\nName: ${fullName}\nEmail: ${email}`);
    router.push("/dashboard");
  }

  return (
    <main className="flex min-h-screen bg-gradient-to-br from-blue-500 to-pink-600 items-center justify-center p-4">
      <form onSubmit={handleSubmit} className="grid w-full max-w-md gap-4 rounded-2xl bg-white p-6 shadow-xl sm:p-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-black-800">
            Create Account
          </h1>
        </div>

        <div className="grid gap-2">
          <label className="text-gray-900 text-left">Full Name</label>
          <input
            type="text"
            className="rounded border border-gray-900 p-3 outline-none placeholder:text-gray-600"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
          {fullName && !validName && <p className="text-red-500 text-sm">Name must be larger than three characters</p>}
        </div>

        <div className="grid gap-2">
          <label className="text-gray-900 text-left">Email</label>
          <input
            type="email"
            className="rounded border border-gray-900 p-3 outline-none placeholder:text-gray-600"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {email && !emailValid && <p className="text-red-500 text-sm">Write valid email</p>}
          {email && emailValid && email !== FIXED_EMAIL && <p className="text-red-500 text-sm">only {FIXED_EMAIL} use this</p>}
        </div>

        <div className="grid gap-2">
          <label className="text-gray-900 text-left">Password</label>
          <input
            type="password"
            className="rounded border border-gray-800 p-3 outline-none placeholder:text-gray-600"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {password && !validPassword && <p className="text-red-500 text-sm">8 char, 1 Capital, 1 Number, 1 Symbol</p>}
        </div>

        <button type="submit" className="mt-2 w-full rounded-lg bg-pink-800 p-3 font-bold text-white hover:bg-yellow-800">
          Register
        </button>
      </form>
    </main>
  );
}