"use client";

import Image from "next/image";

const skills = [
  "typescript",
  "react",
  "nextjs",
  "nodejs",
  "firebase",
  "python",
];

export default function Skills() {
  return (
    <section>
      <h2 className="text-lg font-semibold">SKILLS</h2>
      <p className="text-sm text-gray-500 mb-3">Coding languages and tools</p>

      <div className="overflow-hidden">
        <div className="flex gap-10 animate-marquee items-center">
          {[0, 1].flatMap((loopIndex) =>
            skills.map((skill, skillIndex) => (
              <Image
                key={`${loopIndex}-${skill}-${skillIndex}`}
                src={`/skills/${skill}.png`}
                alt={skill}
                width={40}
                height={40}
                className="transition"
              />
            )),
          )}
        </div>
      </div>
    </section>
  );
}
