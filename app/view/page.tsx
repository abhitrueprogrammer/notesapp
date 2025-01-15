"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import NoteCard from '@/app/components/notecard'; // Adjust the path if needed

export default function View() {
  const [notes, setNotes] = useState<
    { title: string; description: string; content: string; date: string }[]
  >([]);

  useEffect(() => {
    const storedNotes = localStorage.getItem("notes");

    if (storedNotes) {
      // Parse the notes if available
      setNotes(JSON.parse(storedNotes));
    }
  }, []);

  return (
    <div>
      <div className="text-3xl text-center font-bold text-gray-800 tracking-tight leading-tight py-4 mb-6 border-b border-gray-300">
        Notes
      </div>
      <div>
        {notes.length > 0 ? (
          notes.map((note, index) => (
            <NoteCard
              key={index}
              title={note.title}
              description={note.description}
              content={note.content}
              date={note.date}
            />
          ))
        ) : (
          <p className="text-center text-gray-600">No notes found</p>
        )}
      </div>
      <div className="flex">
        <button className="border border-black bg-yellow-500 mr-5 text-white">
          <Link href="/">Go to home</Link>
        </button>{" "}
        <button className="border border-black bg-yellow-500 text-white">
          <a href="/create">Go to Create</a>
        </button>
      </div>
    </div>
  );
}
