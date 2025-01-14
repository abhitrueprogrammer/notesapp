"use client";
import React, { useEffect, useState } from "react";

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
    </div>
  );
}

interface NoteCardProps {
  title: string;
  description: string;
  content: string;
  date: string;
}

export function NoteCard({ title, description, content, date }: NoteCardProps) {
  return (
    <div className=" mx-20 my-10 bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
      {/* Title */}
      <div className="bg-blue-500 text-white px-4 py-2">
        <h2 className="text-lg font-semibold">{title}</h2>
      </div>

      {/* Description */}
      <div className="p-4">
        <p className="text-gray-600 mb-2">{description}</p>
        {/* Content */}
        <p className="text-gray-700 text-sm break-words whitespace-normal w-full">
          {content}
        </p>{" "}
      </div>

      {/* Footer with Date */}
      <div className="px-4 py-2 bg-gray-100 text-right">
        <span className="text-sm text-gray-500">{date}</span>
      </div>
    </div>
  );
}
