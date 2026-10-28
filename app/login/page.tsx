'use client';
import { useState } from "react";
import BSButton from "../components/BSButton";
import Link from "next/link";

export default function(){
  return (
    <main className="min-h-screen bg-gray-200">
      <h1 className="mb-6 text-3xl font-bold text-gray-900">
        Admin Portal
      </h1>
      <nav className="flex flex-wrap gap-4">
        <Link href="/dashboard">Go to Dashboard</Link>
        <Link href="/professors">Go to Professors</Link>
        <Link href="/donors">Go to Donors</Link>
      </nav>
      <BSButton label="login"></BSButton>
    </main>
  );
}