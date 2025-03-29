import { NextApiRequest, NextApiResponse } from "next";
import { getItems } from "@/app/lib/data";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const username = "testing";
  const data = await getItems(username);
  return Response.json(data);
}
