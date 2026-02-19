import { getAllPosts } from "@/lib/api";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const page = parseInt(request.nextUrl.searchParams.get("page") || "1");

  const result = await getAllPosts(page);
  return NextResponse.json(result);
}
