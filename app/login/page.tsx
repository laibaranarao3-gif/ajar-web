'use client';

import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Validation
  const validName = fullName.trim().length >= 3;
  const validPassword = /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9\s]).{8,}$/.test(password);
  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const isFormValid = validName && emailValid && validPassword;

  return (
    <main className="flex min-h-screen bg-gradient-to-br from-indigo-700 to-purple-800 items-center justify-center p-4">
      <form className="grid w-full max-w-md gap-4 rounded-2xl bg-white p-6 shadow-xl sm:p-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800">
            Create Account
          </h1>
        </div>

        
        <div className="grid gap-2">
          <label htmlFor="fullname" className="text-gray-900 text-left font-medium">Full Name</label>
          <input
            id="fullname"
            type="text"
            className="rounded border border-gray-900 p-3 outline-none text-gray-900 placeholder:text-gray-500"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          {fullName.length > 0 && fullName.length < 3 && (
            <p className="text-red-800 text-sm">Name must be at least 3 characters</p>
          )}
        </div>

        
        <div className="grid gap-2">
          <label htmlFor="email" className="text-gray-900 text-left font-medium">Email</label>
          <input
            id="email"
            type="email"
            className="rounded border border-gray-900 p-3 outline-none text-gray-900 placeholder:text-gray-500"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {email.length > 0 && !emailValid && (
            <p className="text-red-800 text-sm">Please enter a valid Email</p>
          )}
        </div>

        
        <div className="grid gap-2">
          <label htmlFor="password" className="text-gray-900 text-left font-medium">Password</label>
          <input
            id="password"
            type="password"
            className="rounded border border-gray-900 p-3 outline-none text-gray-900 placeholder:text-gray-500"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {password.length > 0 && !validPassword ? (
            <p className="text-red-800 text-sm">
              Password must contain:
              <br />• At least 8 characters
              <br />• 1 uppercase letter (A-Z)
              <br />• 1 number (0-9)
              <br />• 1 special character (!@#$%)
            </p>
          ) : password.length > 0 && validPassword ? (
            <p className="text-green-700 text-sm font-bold">Password Validated ✓</p>
          ) : null}
        </div>

        <Link href="/dashboard">
          <button
            disabled={!isFormValid}
            type="button"
            className="w-full px-5 mt-4 py-3 text-white rounded-xl bg-gray-800 hover:bg-black disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            Register
          </button>
        </Link>
      </form>
    </main>
  );
}