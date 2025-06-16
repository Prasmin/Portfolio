"use client";
import Image from "next/image";
import { Button } from "@components/ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <section className=" realtive min-h-screen flex items-center justify-center overflow-hidden ">
      {/* Stacked grid - single absolute container */}
      <div className=" absolute inset-0 flex items-center justify-center ">
        {[70, 60, 50, 40, 30].map((size, i) => (
          <div
            key={i}
            className=" absolute border-2  border-gray-900 rounded-lg opacity-10 "
            style={{
              width: `${size}%`,
              height: `${size}%`,
              transform: `rotate(${i * 15}deg)`,
            }}
          />
        ))}
      </div>

      {/* Content - no positioning needed */}
      <div className="  relative z-10 flex flex-col items-center justify-center text-center px-4">
        {/* Just need z-index here */}
        <div className="mb-6">
          <Image
            src="/prasmin profile.png"
            alt="Prashmin's profile picture"
            priority
            width={160}
            height={160}
            className="rounded-full border-1 border-blue-500 shadow-lg"
          />
        </div>
        <h1 className="text-4xl font-extrabold mb-2 text-blue-700">
          Software Developer
        </h1>
        <p className="mb-8 text-lg text-gray-600">
          Building modern web experiences with passion and precision.
        </p>
        <div className="flex gap-4 justify-center">
          <Button asChild variant="outline">
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2"
            >
              Download CV
            </a>
          </Button>
          <Button variant="default">
            <Link href="/contact">Contact Me</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
