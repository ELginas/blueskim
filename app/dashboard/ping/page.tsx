import { ping } from "@/app/lib/data";

export default async function Ping() {
  await ping();

  return (
    <section>
      <span>Ping</span>
    </section>
  );
}
