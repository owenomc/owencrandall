"use client";

import Image from "next/image";

const skills = [
  "typescript/typescript-original",
  "javascript/javascript-original",
  "react/react-original",
  "nextjs/nextjs-original",
  "nodejs/nodejs-original",
  "firebase/firebase-plain",
  "postgresql/postgresql-original",
  "python/python-original",
];

export default function Skills() {
  return (
    <section>
      <h2 className="text-md font-semibold mb-3">TECHNICAL SKILLS</h2>

      <div className="overflow-hidden">
        <div className="flex gap-10 animate-marquee items-center">
          {[0, 1].flatMap((loopIndex) =>
            skills.map((icon, skillIndex) => (
              <Image
                key={`${loopIndex}-${icon}-${skillIndex}`}
                src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${icon}.svg`}
                alt={icon}
                width={64}
                height={64}
                className="transition bg-black"
              />
            ))
          )}
        </div>
      </div>
    </section>
  );
}
