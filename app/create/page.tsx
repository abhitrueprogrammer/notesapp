"use client";
import React, { useState } from "react";

export default function Create() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const notes = JSON.parse(localStorage.getItem("notes")) || [];
    const newNote = { title, description, content, date };
    notes.push(newNote);
    localStorage.setItem("notes", JSON.stringify(notes));
    setTitle("");
    setDescription("");
    setContent("");
    setDate("");
    alert("Note added successfully!");
  };

  return (
    <div className="flex flex-col items-center px-4">
      <div className="flex flex-col justify-center">
        <h1 className="text-6xl">Create Notes</h1>
        <br />
      </div>
      <hr />
      <br />
      <form onSubmit={handleSubmit} className="w-full max-w-xl">
        <div className="flex flex-col">
          <h3 className="text-3xl">Title</h3>
          <br />
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border border-black w-full h-10 p-2"
          />
        </div>
        <br />
        <br />
        <div className="flex flex-col">
          <h3 className="text-3xl">Description</h3>
          <br />
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border border-black w-full h-10 p-2"
          />
        </div>
        <br />
        <br />
        <div className="flex flex-col">
          <h3 className="text-3xl">Content</h3>
          <br />
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="border border-black w-full h-24 p-2"
          ></textarea>
        </div>
        <br />
        <br />
        <div className="flex flex-col">
          <h3 className="text-3xl">Date</h3>
          <br />
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="border border-black w-full h-10 p-2"
          />
        </div>
        <br />
        <br />
        <input
          type="submit"
          value="Create Note"
          className="bg-blue-600 text-white border border-black rounded-sm px-4 py-2 w-full"
        />
      </form>
      <div className='flex'>
      <button className='border border-black bg-yellow-500 mr-5 text-white'><a href='/'>Go to home</a></button>  <button className='border border-black bg-yellow-500 text-white'><a href='/view'>Go to View</a></button>
    </div>
    </div>
  );
}
