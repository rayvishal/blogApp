import { NextRequest, NextResponse } from "next/server.js";
import { Blog } from "../../model/model.js";
// import mongoose from "mongoose";
export async function GET(request) {
  // const blog = await Blog.insertOne({
  //   title: "hello vikram",
  // });
  const blog = await Blog.find();

  return NextResponse.json(blog);
}

// export async function HEAD(request) {}

export async function POST(request) {
  const res = await request.json();
  await Blog.create(res);
  return NextResponse.json(res);
}

// export async function PUT(request) {

// }

export async function DELETE(request) {}

// export async function PATCH(request) {}
