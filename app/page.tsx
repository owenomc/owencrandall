"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-white text-black px-6 py-12 font-mono">
      <section className="max-w-3xl mx-auto space-y-10">
        {/* IMAGE */}
        <div className="flex items-center justify-start relative h-20 w-20">
          <Image
            src="/owenlogo.png"
            alt="Owen Logo"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* TITLE */}
        <header>
          <h1 className="text-4xl font-bold">HELLO, I&apos;M OWEN CRANDALL</h1>
          <p className="text-lg mt-2">
            I’m 20, from{" "}
            <a
              href="https://www.exploreminnesota.com/trip-planning/about-minnesota"
              className="text-lg mt-2 text-sky-800 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Minnesota
            </a>
          </p>
          <p className="text-lg mt-2">I’ve been building for 600+ days</p>
        </header>

        {/* ABOUT */}
        <section>
          <h2 className="text-xl font-semibold">ABOUT:</h2>
          <ul className="text-md list-disc list-inside space-y-1 text-black">
            <li>Major: B.S. in Computer Science </li>
            <li>Current role: App Developer Intern </li>
            <li>Goal Career: Software Engineer </li>
          </ul>
        </section>

        {/* ACHIEVEMENTS */}
        <section>
          <h2 className="text-xl font-semibold">A FEW ACHIEVEMENTS:</h2>
          <ul className="text-md list-disc list-inside space-y-1 text-black">
            <li>Built 10+ websites since high school </li>
            <li>Taught myself nextjs, vercel, databases, etc. </li>
            <li>Eagle scout - highest rank in boy scouts </li>
            <li>Bilingual - spanish </li>
            <li>Started college with 20+ credits </li>
          </ul>
        </section>

        {/* SIDE PROJECTS */}
        <section>
          <h2 className="text-xl font-semibold">CURRENT SIDE PROJECTS:</h2>
          <ul className="text-md list-disc list-inside text-black space-y-1">
            <li>
              <Link
                href="https://travlpacked.vercel.app"
                className="text-sky-800 underline"
              >
                travlpacked.vercel.app
              </Link>{" "}
              – AI travel packing and clothing
            </li>
            <li>
              <Link
                href="https://codecurse.com"
                className="text-sky-800 underline"
              >
                codecurse.com
              </Link>{" "}
              – Computer science course & toolkit
            </li>
            <li>
              <Link
                href="https://oyeahkgames.vercel.app"
                className="text-sky-800 underline"
              >
                oyeahkgames.vercel.app
              </Link>{" "}
              – Indie dev, still building (2 games in progress)
            </li>
            <li>
              <Link
                href="https://x.com/OOLgg_"
                className="text-sky-800 underline"
              >
                X.com/OOLgg_
              </Link>{" "}
              – Helping build a website for a community overwatch 2 league
            </li>
            <li>Bulldog Rocketry - Web Development Lead </li>
            <li>Growing my social media presence </li>
            <li>And more..</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">PAST PROJECTS:</h2>
          <ul className="text-md list-disc list-inside text-black space-y-1">
            <li>
              FlipFin – AI personal finance education, had too large of scope
              (may revist)
            </li>
            <li>
              GetFit & LinkedOut – 2 apps developed for software engineering
            </li>
            <li>
              Soul Theives – 3D soul catching game, school project I expanded on
            </li>
            <li>
              ShareStrides.com – online fitness platform, first solo startup &
              MVP, shutdown after market analysis
            </li>
            <li>And many more..</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">WHAT&apos;S MY DRIVE?:</h2>
          <p className="text-md text-black">
            I want to build things that solve real problems. I love creativity
            and passion.
          </p>
        </section>

        <details className="bg-sky-800 p-4 rounded-lg text-white hover:scale-105">
          <summary className="text-xl cursor-pointer text-white">
            HOW I STARTED
          </summary>
          <p className="mt-2 text-white">Playing with legos.</p>
          <p className="mt-2 text-white">
            Learned some HTML/CSS/JAVASCRIPT at the end of high school.{" "}
          </p>
          <p className="mt-2 text-white">
            Tried to make some 3D games. Gave up, and started web dev.
          </p>
          <p className="mt-2 text-white">Made some awful looking websites. </p>
        </details>

        <details className="bg-sky-800 p-4 rounded-lg text-white hover:scale-105">
          <summary className="text-xl cursor-pointer ">MY GOAL</summary>
          <p className="text-md mt-2 text-white">Building for users.</p>
          <p className="text-md mt-2 text-white ">
            Shipping production-ready software. Fast.{" "}
          </p>
          <p className="text-md mt-2 text-white">
            Following my dreams. And never giving up.
          </p>
        </details>

        <details className="bg-sky-800 p-4 rounded-lg text-white hover:scale-105">
          <summary className="text-xl cursor-pointer ">MY MOTIVATIONS</summary>
          <p className="text-md mt-2 text-white">Having too many ideas.</p>
          <p className="text-md mt-2 text-white">
            Fiancial independence and freedom.
          </p>
          <p className="text-md mt-2 text-white">
            Giving back to the community.
          </p>
        </details>

        <details className="bg-sky-800 p-4 rounded-lg text-white hover:scale-105">
          <summary className="text-xl cursor-pointer ">
            WHERE I SEE MYSELF IN 365 DAYS
          </summary>
          <p className="text-md  mt-2 text-white">
            Maybe living and working california or new york.{" "}
          </p>
          <p className="text-md mt-2 text-white">
            Leading, building & full of passion.{" "}
          </p>
          <p className="text-md mt-2 text-white">Working even harder. </p>
        </details>

        <section>
          <h2 className="text-xl font-semibold mb-4">HOBBIES:</h2>
          <ul className="list-disc list-inside space-y-1 text-black mb-4">
            <p className="text-lg font-semibold"> Sports</p>
            <li className="text-md">
              I run a bit + marathon + chasing a sub-17 5k
            </li>
            <li className="text-md">Ran a 4:39 1600m (mile) in HS </li>
            <li className="text-md">Bodyweight bench press</li>
            <li className="text-md">
              HS varsity in 3 sports - cross country, track & field, alpine
              skiing
            </li>
            <li className="text-md">
              Growing up I also played - baseball, soccer, tennis
            </li>
          </ul>
          <ul className="list-disc list-inside space-y-1 text-black">
            <p className="text-lg font-semibold"> Gaming</p>
            <li className="text-md">
              Rocket league - 2000+ hrs (solo queue to champ 2){" "}
            </li>
            <li className="text-md">
              Fortnite - 1500+ hrs (season 2 to season X){" "}
            </li>
            <li className="text-md">Apex legends - 500+ hrs (diamond) </li>
            <li className="text-md">
              Valorant - quit the game at 400+ hrs (gold){" "}
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">ARTICLES:</h2>
          <ul className="text-md list-disc list-inside text-black space-y-1">
            <li>
              Article I wrote –{" "}
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

        <nav className="text-lg flex space-x-4 text-sky-800 underline">
          <Link href="https://github.com/owenomc">GitHub</Link>
          <Link href="https://x.com/owencrandall">X</Link>
          <Link href="https://www.youtube.com/@owen_crandall">YouTube</Link>
          <Link href="https://www.tiktok.com/@owen_crandall">TikTok</Link>
        </nav>

        <footer className="border-t border-gray-800 pt-6 text-sm">
          <Link href="/contact">
            <button className="text-xl cursor-pointer space-x-4 bg-sky-800 p-4 rounded-lg text-white hover:scale-105">
              Contact
            </button>
          </Link>
          <p className="text-md mt-4 text-black">OWEN CRANDALL © 2025 </p>
        </footer>
      </section>
    </main>
  );
}
