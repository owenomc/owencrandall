"use client";

import React from "react";
import Link from "next/link";

export default function ThanksPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white font-mono text-black px-4 text-center space-y-6">
      <h1 className="text-2xl">
        Thanks for reaching out! <br />
        I’ll get back to you soon.
      </h1>

      <Link href="/">
        <button className="cursor-pointer bg-sky-800 px-6 py-3 rounded-lg text-white hover:bg-sky-800 transition">
          Home
        </button>
      </Link>
    </main>
  );
}
