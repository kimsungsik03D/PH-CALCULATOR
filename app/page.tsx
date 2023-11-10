import Image from "next/image";
import "./globals.css";
import { Bill } from "@/components";

export default function Home() {
  return (
    <main className="container">
      <Bill shop="A" />
      <Bill shop="B" />
      {/* <Bill /> */}
    </main>
  );
}
