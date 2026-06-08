"use client";

import Image from "next/image";
import Link from "next/link";

import Skills from "@/app/components/Skills";
import Socials from "@/app/components/Socials";
import Devs from "@/app/components/Devs";

export default function Page() {
  const education = [
    {
      school: "University of Minnesota Duluth",
      degree: "B.S. Computer Science",
      date: "2023 – 2026",
      description:
        "ABET Accredited • Artificial Intelligence, Computer Security, Database Systems, Operating Systems, Software Engineering, Mobile UX Design, and Automata & Formal Languages.",
    },
  ];

  const projects = [
    {
      name: "K'Boys Kare",
      tagline: "Nonprofit",
      href: "https://kboyskare.com",
      image: "/projects/kboyskare.png",
      description:
        "Developed and maintained nonprofit web experiences supporting outreach and fundraising.",
    },
    {
      name: "Wealtho",
      tagline: "AI Personal Finance Platform",
      href: "https://wealtho.app",
      image: "/projects/wealtho.png",
      description:
        "Building a gamified finance platform designed to help users improve financial habits through AI-powered insights.",
    },
    {
      name: "BridgeAds",
      tagline: "Infrastructure Sponsorship Marketplace",
      href: "https://bridgeads-test.vercel.app",
      image: "/projects/bridgeads.png",
      description:
        "A marketplace connecting sponsors with infrastructure and community projects.",
    },
  ];

  const experience = [
    {
      company: "Shyne Bright Services LLC",
      role: "Software Engineer",
      date: "June 2025 – Jan 2026",
      description:
        "Built authentication, dashboards, ride scheduling systems, user profiles, and transportation workflows.",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* HERO */}
        <section className="py-24">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* IMAGE LEFT */}
            <Image
              src="/profileLAX.jpg"
              alt="Owen Crandall"
              width={164}
              height={164}
              className="rounded-full object-cover border border-gray-300"
            />

            {/* TEXT RIGHT */}
            <div>
              <h1 className="mt-4 text-6xl md:text-7xl font-black text-slate-900">
                Owen Crandall
              </h1>
              <p className="mt-4 text-2xl text-slate-600 max-w-2xl leading-relaxed">
                Software Engineer • Minneapolis, MN
              </p>{" "}
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section className="py-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-8">About</h2>
          <p className="max-w-4xl text-lg text-slate-600 leading-9">
            Computer Science graduate and software engineer with experience
            building startups, AI-powered products, mobile applications, and
            full-stack web platforms. I enjoy taking ideas from concept to
            production, designing intuitive user experiences, and developing
            scalable systems that solve real-world problems. My work
            concentrates on creating products people genuinely enjoy using.
          </p>
          {/* QUICK LINKS */}
          <section className="py-12 grid md:grid-cols-2 gap-8">
            <div className="border border-gray-300 rounded-3xl p-8">
              <Devs />
            </div>

            <div className="border border-gray-300 rounded-3xl p-8">
              <Socials />
            </div>
          </section>{" "}
          <p className="text-xl text-slate-600 max-w-2xl leading-relaxed">
            <Link
              href="/OwenCrandallResume2026.pdf"
              target="_blank"
              className="text-lg border border-gray-300 px-6 py-3 text-black rounded-xl font-medium transition"
            >
              Resume
            </Link>{" "}
          </p>
        </section>

        {/* EDUCATION */}
        <section className="py-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-12">Education</h2>

          <div className="space-y-8">
            {education.map((edu) => (
              <div
                key={edu.school}
                className="border border-gray-300 rounded-3xl p-8"
              >
                <div className="flex flex-col md:flex-row md:justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">
                      {edu.degree}
                    </h3>

                    <p className="text-slate-500 mt-1">{edu.school}</p>
                  </div>

                  <p className="text-slate-500 mt-2 md:mt-0">{edu.date}</p>
                </div>

                <p className="mt-6 text-slate-600 leading-8">
                  {edu.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <div className="border border-gray-300 rounded-3xl p-8">
          <Skills />
        </div>

        {/* EXPERIENCE */}
        <section className="py-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-12">
            Experience
          </h2>

          <div className="space-y-8">
            {experience.map((job) => (
              <div
                key={job.company}
                className="border border-gray-300 rounded-3xl p-8"
              >
                <div className="flex flex-col md:flex-row md:justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">
                      {job.role}
                    </h3>

                    <p className="text-slate-500 mt-1">{job.company}</p>
                  </div>

                  <p className="text-slate-500 mt-2 md:mt-0">{job.date}</p>
                </div>

                <p className="mt-6 text-slate-600 leading-8">
                  {job.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section className="py-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-12">
            Featured Projects
          </h2>

          <div className="grid gap-10">
            {projects.map((project) => (
              <Link
                key={project.name}
                href={project.href}
                target="_blank"
                className="group"
              >
                <div className="border border-gray-300 rounded-3xl overflow-hidden transition">
                  <div className="aspect-video bg-slate-100 overflow-hidden">
                    <iframe
                      src={project.href}
                      title={project.name}
                      className="w-full h-full"
                      loading="lazy"
                    />
                  </div>

                  <div className="p-8">
                    <h3 className="text-3xl font-bold text-slate-900">
                      {project.name}
                    </h3>

                    <p className="text-slate-500 font-medium mt-2">
                      {project.tagline}
                    </p>

                    <p className="mt-4 text-slate-600 leading-8">
                      {project.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
        {/* FOOTER */}
        <section className="py-24 text-center border-t">
          <h2 className="text-5xl font-bold text-slate-900">
            Let&apos;s Build Something
          </h2>

          <p className="text-slate-600 mt-4">
            Open to software engineering opportunities, startups, and ambitious
            projects.
          </p>

          <a
            href="https://mail.google.com/mail/?view=cm&to=owenmcrandall@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-8 text-xl font-semibold text-blue-600 hover:underline"
          >
            owenmcrandall@gmail.com
          </a>
        </section>
      </div>
    </main>
  );
}
