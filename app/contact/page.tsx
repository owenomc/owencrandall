"use client";

import React from "react";
import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-black px-6 py-12 font-mono">
      <section className="max-w-2xl mx-auto space-y-5">
        <header>
          <h1 className="text-4xl font-bold text-sky-800">Contact</h1>
          <p className="mt-2 text-md text-black">
            want to work together, ask a question, or just say hi?
          </p>
          <p className="mt-2 text-md text-black">
            message me here:
          </p>
        </header>

        <form
          action="https://formsubmit.co/owenmcrandall@gmail.com"
          method="POST"
          className="space-y-4"
        >
          {/* Prevent spam */}
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value="https://owencrandall.vercel.app/thanks" />

          <input
            type="text"
            name="name"
            placeholder="Your name"
            required
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
          <input
            type="email"
            name="email"
            placeholder="Your email"
            required
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
          <textarea
            name="message"
            placeholder="Your message"
            required
            rows={10}
            className="w-full p-3 border border-gray-300 rounded-lg"
          ></textarea>
          <button
            type="submit"
            className="cursor-pointer bg-sky-800 text-white px-6 py-3 rounded-lg hover:bg-sky-800"
          >
            Send Message
          </button>
        </form>

        <Link href="/" className="text-sky-800 underline block text-sm mt-4">
          ← Back to Portfolio
        </Link>
      </section>
    </main>
  );
}
