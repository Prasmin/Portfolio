"use client";
import Image from "next/image";
import { Button } from "@components/ui/button"; // Adjust the import path based on your project structure

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-16 bg-background relative ">
      <div className="    grid grid-cols-4 gap-2 opacity-50  max-w-4xl ">
        <div className="border-2 border-indigo-600 h-50 w-50"></div>
        <div className="border-2 border-indigo-600 h-50 w-50"></div>
        <div className="border-2 border-indigo-600 h-50 w-50"></div>
        <div className="border-2 border-indigo-600 h-50 w-50"></div>
        <div className="border-2 border-indigo-600 h-50 w-50"></div>
        <div className="border-2 border-indigo-600 h-50 w-50"></div>
        <div className="border-2 border-indigo-600 h-50 w-50"></div>
        <div className="border-2 border-indigo-600 h-50 w-50"></div>
      </div>
      <div className="mb-6">
        <Image
          src="/prasmin profile.png" // Place your image in the public folder and name it profile.jpg
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
            href="/cv.pdf" // Place your CV in the public folder as cv.pdf
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2"
          >
            Download CV
          </a>
        </Button>

        <Button asChild className="bg-blue-500 text-white hover:bg-blue-600">
          <a href="/contact" className=" ">
            Contact Me
          </a>
        </Button>
      </div>
    </section>
  );
}
