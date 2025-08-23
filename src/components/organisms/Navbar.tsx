"use client";
import { Routes } from "@/constant/routes";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="border-b bg-white">
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        <Link href={Routes.Public.HOME} className="text-xl font-bold text-blue-600">
          Pokémon App
        </Link>
      </div>
    </nav>
  );
}
