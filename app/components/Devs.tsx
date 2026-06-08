"use client";

import Image from "next/image";

const devs = [
  {
    name: "GitHub",
    url: "https://github.com/owenomc"
  },
  {
    name: "LeetCodes",
    url: "https://leetcode.com/u/Y8GLgKGoHs"
  },
  {
    name: "HackerRank",
    url: "https://www.hackerrank.com/owencrandall"
  },
  {
    name: "Whop",
    url: "https://whop.com/@owencrandall"
  },
];

export default function Devs() {
  return (
  <section>
    <h2 className="text-lg font-semibold">DEVELOPER PORTFOLIO</h2>
    <p className="text-sm text-gray-500 mb-3">
      Projects
    </p>

    <div className="flex gap-6 items-center flex-wrap">
      {devs.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-transform"
        >
          <Image
            src={`/devs/${social.name}.png`}
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