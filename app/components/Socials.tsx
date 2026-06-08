"use client";

import Image from "next/image";

const socials = [
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/owen-crandall",
  },
  {
    name: "Twitter",
    url: "https://x.com/owencrandall",
  },
  {
    name: "Instagram",
    url: "https://instagram.com/owenomc",
  },
  {
    name: "YouTube",
    url: "https://youtube.com/@owenomc",
  },
  {
    name: "TikTok",
    url: "https://tiktok.com/@owenomc",
  },
];

export default function Socials() {
  return (
  <section>
    <h2 className="text-lg font-semibold">SOCIALS</h2>
    <p className="text-sm text-gray-500 mb-3">
      Personal Brand: 1k+ followers
    </p>

    <div className="flex gap-6 items-center flex-wrap">
      {socials.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-transform"
        >
          <Image
            src={`/socials/${social.name}.png`}
            alt={social.name}
            width={40}
            height={40}
          />
        </a>
      ))}
    </div>
  </section>
);
}