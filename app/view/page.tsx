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
  const [currentNoteIndex, setCurrentNoteIndex] = useState(0); // Track the current note index
  const handleNext = () => {
    if (currentNoteIndex < notes.length - 1) {
      setCurrentNoteIndex(currentNoteIndex + 1);
    }
  };

  // Navigate to the previous note
  const handlePrevious = () => {
    if (currentNoteIndex > 0) {
      setCurrentNoteIndex(currentNoteIndex - 1);
    }
  };
  return (
    <div>
      <div className="text-3xl text-center font-bold text-gray-800 tracking-tight leading-tight py-4 mb-6 border-b border-gray-300">
        Notes
      </div>
      <div className="flex justify-between mb-6">
        <button
          onClick={handlePrevious}
          disabled={currentNoteIndex === 0} // Disable if on the first note
          className={`px-4 py-2 bg-blue-500 text-white rounded-md ${
            currentNoteIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          Previous
        </button>

        <button
          onClick={handleNext}
          disabled={currentNoteIndex === notes.length - 1} // Disable if on the last note
          className={`px-4 py-2 bg-blue-500 text-white rounded-md ${
            currentNoteIndex === notes.length - 1
              ? "opacity-50 cursor-not-allowed"
              : ""
          }`}
        >
          Next
        </button>
      </div>

      {notes.length > 0 ? (
        <div>
          {/* Display the current note */}
          <NoteCard
            title={notes[currentNoteIndex].title}
            description={notes[currentNoteIndex].description}
            content={notes[currentNoteIndex].content}
            date={notes[currentNoteIndex].date}
          />

          {/* Previous and Next buttons */}
        </div>
      ) : (
        <p className="text-center text-gray-600">No notes found</p>
      )}
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
    <div className=" mx-20 bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
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
