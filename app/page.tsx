"use client";

import React from "react";
import Link from "next/link";
import Skills from "@/app/components/Skills";
import Image from "next/image";

export default function PortfolioPage() {
  const birthDate = new Date("2005-06-02");
  const today = new Date();
  const age =
    today.getFullYear() -
    birthDate.getFullYear() -
    (today <
    new Date(today.getFullYear(), birthDate.getMonth(), birthDate.getDate())
      ? 1
      : 0);

  const links = [
    {
      href: "https://github.com/owenomc",
      src: "/icons/github.png",
      alt: "GitHub",
    },
    {
      href: "https://www.linkedin.com/in/owen-crandall",
      src: "/icons/linkedin.png",
      alt: "LinkedIn",
    },
    {
      href: "https://X.com/owencrandall",
      src: "/icons/twitter.png",
      alt: "X",
    },
    {
      href: "https://mail.google.com/mail/?view=cm&to=owenmcrandall@gmail.com",
      src: "/icons/email.png",
      alt: "Email",
    },
    {
      href: "/OwenCrandallResume2026.pdf", // <-- PDF link
      src: "/icons/resume.png", // icon for resume
      alt: "Resume",
    },
  ];

  const work = [
    {
      name: "Shyne Bright Services LCC",
      href: "https://shynebrightsv.com",
      tagline: "Summer 2025 - Present",
      description:
        "Early-stage medical transportation startup. Built full-stack web systems including authentication, user profiles, and ride-sharing flows from Figma designs.",
      video: "https://shynebrightsv.com", // embed link or demo video URL
      github: "",
    },
  ];

  const hobbies = [
    {
      images: ["/images/rl.png"],
      description: "Rocket League - Champ 2",
    },
    {
      images: ["/images/Start-Line_Overhead_Garry-Bjorklund-Half-Marathon.jpg"],
      description: "Runner - Granda's Marathon 2025",
    },
    {
      images: ["/images/apexlegends.jpg"],
      description: "Apex Legends - Diamond",
    },
  ];

  const projects = [
    {
      name: "Jarvis 0.1",
      href: "https://travelpacked.vercel.app",
      tagline: "Facial Recoginition and Detection",
      description:
        "Real-time voice + vision assistant with TensorFlow-powered facial recognition and object detection. Optimized for low-latency inference in the browser",
      video: "https://travelpacked.vercel.app", // embed link or demo video URL
      github: "",
    },
    {
      name: "UPDATE",
      href: "https://tryupdate.app",
      tagline: "Speed Networking",
      description:
        "Full-stack platform with Stripe subscriptions, email automation, and user analytics. Researched monetization, legal setup, and distribution.",
      video: "https://tryupdate.app", // embed link or demo video URL
      github: "",
    },
    {
      name: "Wealtho",
      href: "https://wealtho.app",
      tagline: "Personal Finance AI",
      description:
        "Personal finance platform replacing spreadsheets. Includes budgeting, modular income inputs, and insights calculations with API integrations.",
      video: "https://wealtho.app", // embed link or demo video URL
      github: "",
    },
    {
      name: "SKYJUMP",
      href: "https://oyeahkgames.vercel.app",
      tagline: "Indie Climbing Game",
      description:
        "Open-source Godot 3D climbing game. Designed menus, UI, hitboxes, free assets, and fun level design.",
      video: "https://oyeahkgames.vercel.app", // embed link or demo video URL
      github: "",
    },
  ];

  const leaders = [
    {
      images: ["/images/EagleBadge.jpg"],
      description: "Eagle Scout",
    },
    {
      images: ["/images/MNOrbitRefined.webp"],
      description: "Website Development Lead – Bulldog Rocketry Club",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-black px-6 py-12">
      <section className="max-w-4xl mx-auto space-y-6 items-center">
        {/* HEADER */}
        <header className="flex items-center space-x-4">
          {/* Profile Picture */}
          <div className="w-20 h-20 relative rounded-full overflow-hidden">
            <Image
              src="/profile.jpg"
              alt="Owen Crandall Image"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          {/* Name and Info */}
          <div className="space-y-1">
            <h1 className="text-4xl font-bold tracking-tight">OWEN CRANDALL</h1>
            <p className="text-sm">
              AI Software Engineer | Open to Remote Roles{" "}
            </p>
            <p className="text-sm">{age} · Minneapolis, MN</p>
          </div>{" "}
        </header>

        {/* EDUCATION */}
        <section>
          <h2 className="text-md font-semibold mb-4">EDUCATION</h2>
          <p className="text-sm font-semibold">
            B.S. Computer Science — University of Minnesota
          </p>
          <p className="text-sm mb-4">
            Graduating Spring 2026 · ABET Accredited
          </p>
          <p className="text-sm mb-4">
            <span className="font-bold">Coursework:</span> Automate and Formal
            Languages, Software Analysis, Software Engineering, Database
            Management Systems, Computer Security, Operating Systems, Vectors
            and Matrices
          </p>
        </section>

        {/* SKILLS */}
        <Skills />

        {/* EXPERIENCE */}
        <section>
          <h2 className="text-md font-semibold mb-4">EXPERIENCE</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {work.map((work) => (
              <div key={work.name} className="transition-shadow">
                <div className="flex justify-between items-center mb-2">
                  <Link
                    href={work.href}
                    target="_blank"
                    className="text-sky-800 font-semibold hover:underline"
                  >
                    {work.name}
                  </Link>
                  <span className="text-sm">{work.tagline}</span>
                </div>
                <p className="mb-2">{work.description}</p>
                <div className="aspect-video w-full">
                  <iframe
                    src={work.video}
                    className="w-full h-full"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section>
          <h2 className="text-md font-semibold mb-2">PROJECTS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <div key={project.name} className="p-4 transition-shadow">
                <div className="flex justify-between items-center mb-2">
                  <Link
                    href={project.href}
                    target="_blank"
                    className="text-sky-800 font-semibold hover:underline"
                  >
                    {project.name}
                  </Link>
                  <span className="text-gray-600 text-sm">
                    {project.tagline}
                  </span>
                </div>
                <p className="mb-2">{project.description}</p>
                <div className="aspect-video w-full">
                  <iframe
                    src={project.video}
                    className="w-full h-full rounded-md"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* HOBBIES */}
        <section>
          <h2 className="text-md font-semibold mb-4">HOBBIES</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 p-6 gap-6">
            {hobbies.map((entry, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-items-center"
              >
                <p className="text-sm text-center mb-4">{entry.description}</p>
                {entry.images.map((src, j) => (
                  <Image
                    key={j}
                    src={src}
                    alt="Badge"
                    width={126}
                    height={126}
                    className="rounded-md"
                  />
                ))}
              </div>
            ))}
          </div>
        </section>

        {/* LEADERSHIP */}
        <section>
          <h2 className="text-md font-semibold mb-4">LEADERSHIP</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 p-6 gap-6">
            {leaders.map((entry, i) => (
              <div key={i} className="flex flex-col items-center">
                <p className="text-sm text-center mb-4">{entry.description}</p>
                {entry.images.map((src, j) => (
                  <Image
                    key={j}
                    src={src}
                    alt="Badge"
                    width={64}
                    height={64}
                    className="rounded-md"
                  />
                ))}
              </div>
            ))}
          </div>
        </section>

        {/* FOOTER */}
        <footer className="border-t border-gray-300 pt-6 text-sm">
          <div className="flex items-center gap-2 pt-2 text-sm">
            {links.map((link, i) => (
              <div key={link.href} className="flex items-center gap-2">
                <Link
                  href={link.href}
                  target="_blank"
                  className="hover:opacity-80"
                >
                  <Image src={link.src} alt={link.alt} width={36} height={36} />
                </Link>
                {/* Add X separator if not the last item */}
                {i !== links.length - 1 && (
                  <span className="text-gray-400">×</span>
                )}
              </div>
            ))}
          </div>
        </footer>
      </section>
    </main>
  );
}
