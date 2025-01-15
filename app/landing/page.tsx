"use client";
import React from "react";
import notes from "../../public/notes.png";
import Image from "next/image";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6">
      <h1 className="text-6xl font-bold text-gray-800 mb-4 text-left">
        Notes App
      </h1>
      <div className="mx-auto flex flex-row items-center">
        {/* Left Section */}
        <div className="flex-1 pl-10 relative">
          <p className="text-5xl text-black mb-6 font-bold relative">
            <span className="relative">
              Create and manage your notes effortlessly
              <span className="absolute -bottom-1 left-0 w-full h-2 bg-yellow-300 -z-10"></span>
            </span>
            <br />
            <span className="relative">
              with a user-friendly interface.
              <span className="absolute -bottom-1 left-0 w-full h-2 bg-pink-200 -z-10"></span>
            </span>
            <br />
            Keep your thoughts, ideas, and plans all in one place.
          </p>
          <p className="text-2xl text-gray-600 mb-6">
            Organize your life with the power of notes.
          </p>
          <div className="space-x-4">
            <Link
              href="/create"
              className="inline-block bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
            >
              Create New Notes
            </Link>
            <Link
              href="/view"
              className="inline-block bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
            >
              View Notes
            </Link>
          </div>
        </div>

        <div className="flex-1 pl-32">
          <div className="relative">
            <Image
              src={notes}
              alt="Illustration"
              className="max-w-full h-auto"
            />

            <div className="absolute top-[-20px] right-[-10px] w-20 h-20 border-4 border-dashed border-blue-500 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
