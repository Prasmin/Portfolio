"use client";
import Image from "next/image";
import { Button } from "@components/ui/button";

export default function Hero() {
  return (
    <section className=" relative flex flex-col items-center justify-center text-center py-16 bg-background overflow-hidden">
      {/* Stacked grid - single absolute container */}
      <div className="absolute  w-full h-full flex items-center justify-center">
        {[100, 90, 80, 70, 60, 50].map((size, i) => (
          <div
            key={i}
            className={`absolute border-2  border-gray-600 rounded-lg opacity-10 -z-${
              i + 1
            }`}
            style={{
              width: `${size}%`,
              height: `${size}%`,
            }}
          />
        ))}
      </div>

      {/* Content - no positioning needed */}
      <div className=" flex flex-col items-center justify-center text-center px-4">
        {/* Just need z-index here */}
        <div className="mb-6">
          <Image
            src="/prasmin profile.png"
            alt="Prashmin's profile picture"
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
          <Button asChild className="bg-blue-500 text-white hover:bg-blue-600">
            <a href="/contact" className="">
              Contact Me
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
