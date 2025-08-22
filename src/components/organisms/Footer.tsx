"use client";

import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <footer className="bg-white border-t mt-6">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row items-center justify-end gap-4">
            © {new Date().getFullYear()} Pokémon App
        </div>
        <Separator className="my-4" />
        <p className="text-center text-xs text-gray-400">
          Built with Next.js, TypeScript & shadcn/ui
        </p>
      </div>
    </footer>
  );
}
