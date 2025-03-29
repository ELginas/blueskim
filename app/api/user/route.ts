import { getItems } from "@/app/lib/data";

export async function GET() {
  const username = "testing";
  const data = await getItems(username);
  return Response.json(data);
}
