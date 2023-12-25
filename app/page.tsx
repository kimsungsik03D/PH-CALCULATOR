import Image from "next/image";
import "./globals.css";
import { Bill } from "@/components";
import { redirect } from "next/navigation";

export default function Home() {
  redirect("/renewal");
  return (
    <main className="container">
      <Bill shop="A" />
      <Bill shop="B" />
      {/* <Bill /> */}
    </main>
  );
}
