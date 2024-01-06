"use client";
import { NextResponse } from "next/server";
import React from "react";
import { useState } from "react";
import axios from "axios";

const Blog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  async function dummy() {
    const data = await axios.get("/api/hello");
    console.log(data.data);
  }
  dummy();
  console.log(title, content);
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const sendData = await axios.post("/api/blog", {
        title: title,
        content: content,
      });
      console.log(sendData);
    } catch (error) {
      console.log(error);
    }

    // axios.post("localhos");
  }
  return (
    <div className="container mt-4">
      <h2>Blog Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label for="blogTitle">Blog Title</label>
          <input
            type="text"
            className="form-control"
            id="blogTitle"
            placeholder="Enter blog title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label for="blogContent">Blog Content</label>
          <textarea
            className="form-control"
            id="blogContent"
            rows="8"
            placeholder="Enter blog content"
            value={content}
            onChange={(e) => {
              setContent(e.target.value);
            }}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Blog;
