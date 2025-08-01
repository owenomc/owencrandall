"use client";

import React from "react";
import Link from "next/link";

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-white text-black px-6 py-12 font-mono">
      <section className="max-w-3xl mx-auto space-y-10">
        <header>
          <h1 className="text-4xl font-bold">HELLO, I&apos;M OWEN CRANDALL</h1>
          <p className="text-lg mt-2">
              i’m 20, from {" "}
              <a
                href="https://www.exploreminnesota.com/trip-planning/about-minnesota"
                className="text-lg mt-2 text-sky-800 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                minnesota
              </a>
            </p>
          <p className="text-lg mt-2">i’ve been building for 600+ days</p>
        </header>

        <section>
          <h2 className="text-xl font-semibold">A FEW ACHIEVEMENTS:</h2>
          <ul className="list-disc list-inside space-y-1 text-black">
            <li>built 10+ websites since high school </li>
            <li>taught myself nextjs, vercel, databases, etc. </li>
            <li>summer intern as an app dev, helped ship </li>
            <li>website development club lead </li>
            <li>eagle scout - highest rank in boy scouts </li>
            <li>bilingual - spanish </li>
            <li>started college with 20+ credits </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">CURRENT PROJECTS:</h2>
          <ul className="list-disc list-inside text-black space-y-1">
            <li>TravlPacked.com – AI travel checklist and clothing</li>
            <li>OYEAHK GAMES – indie dev, still building</li>
            <li>Growing my social media presence</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">PAST PROJECTS:</h2>
          <ul className="list-disc list-inside text-black space-y-1">
            <li>
              ShareStrides.com – online fitness platform, first solo startup
            </li>
            <li>FlipFin – AI personal finance education - too large of scope</li>
            <li>Soul Theives – 3D soul catching game, school project i expanded on</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">WHAT&apos;S MY DRIVE?:</h2>
          <p className="text-black">
            i want to build things that solve real problems. i love creativity
            and passion.
          </p>
        </section>

        <details className="bg-sky-800 p-4 rounded-lg text-white hover:scale-101">
          <summary className="cursor-pointer font-semibold text-white">
            HOW I STARTED
          </summary>
          <p className="mt-2 text-white">playing with legos.</p>
          <p className="mt-2 text-white">
            learned some HTML/CSS/JAVASCRIPT at the end of high school.{" "}
          </p>
          <p className="mt-2 text-white">
            tried to make some 3D games. gave up, and started web dev.
          </p>
          <p className="mt-2 text-white">made some awful looking websites. </p>
        </details>

        <details className="bg-sky-800 p-4 rounded-lg text-white hover:scale-101">
          <summary className="cursor-pointer font-semibold">MY GOAL</summary>
          <p className="mt-2 text-white">building a product with users.</p>
          <p className="mt-2 text-white">
            following my dreams. and never giving up.
          </p>
        </details>

        <details className="bg-sky-800 p-4 rounded-lg text-white hover:scale-101">
          <summary className="cursor-pointer font-semibold">
            MY MOTIVATIONS
          </summary>
          <p className="mt-2 text-white">having too many ideas.</p>
          <p className="mt-2 text-white">fiancial independence and freedom.</p>
          <p className="mt-2 text-white">giving back to the community.</p>
        </details>

        <details className="bg-sky-800 p-4 rounded-lg text-white hover:scale-101">
          <summary className="cursor-pointer font-semibold">
            WHERE I SEE MYSELF IN 365 DAYS
          </summary>
          <p className="mt-2 text-white">
            maybe living and working california or new york.{" "}
          </p>
          <p className="mt-2 text-white">
            leading, building & full of passion.{" "}
          </p>
          <p className="mt-2 text-white">working even harder. </p>
        </details>

        <section>
          <h2 className="text-xl font-semibold">HOBBIES:</h2>
          <ul className="list-disc list-inside space-y-1 text-black mt-2">
            Sports
            <li>ran a marathon + chasing a sub-17 5k</li>
            <li>ran a 4:39 1600m (mile) in hs </li>
            <li>bodyweight bench press</li>
            <li>
              hs varsity in 3 sports - cross country, track & field, alpine skiing
            </li>
            <li>growing up i played - baseball, soccer, tennis</li>
          </ul>
          <ul className="list-disc list-inside space-y-1 text-black mt-2">
            Gaming
            <li>rocket league - solo to champ 2 - 2000+ hrs</li>
            <li>fortnite - 1500+ hrs (season 2 to season X)</li>
            <li>apex legends - 500+ hrs diamond </li>
            <li>valorant - quit the game at 400+ hrs (gold) </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">ARTICLES:</h2>
          <ul className="list-disc list-inside text-black space-y-1">
            <li>
              article i wrote –{" "}
              <a
                href="https://medium.com/@owencrandall/a-guide-to-website-development-540a1b3285c3"
                className="text-sky-800 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                A Guide To Website Development
              </a>
            </li>
          </ul>
        </section>

        
        <nav className="flex space-x-4 text-sky-800 underline">
          <Link href="https://github.com/owenomc">GitHub</Link>
          <Link href="https://x.com/owencrandall">X</Link>
          <Link href="https://www.youtube.com/@owen_crandall">YouTube</Link>
          <Link href="https://www.tiktok.com/@owen_crandall">TikTok</Link>
        </nav>

        <footer className="border-t border-gray-800 pt-6 text-sm">
          <Link href="/contact">
            <button className="cursor-pointer space-x-4 bg-sky-800 p-4 rounded-lg text-white hover:scale-101">
              Contact
            </button>
          </Link>
          <p className="mt-4 text-black">OWEN CRANDALL © 2025 </p>
        </footer>
      </section>
    </main>
  );
}
