"use client";

import { Input } from "@/components/atoms/input";

export default function SearchInput({
  value,
  onChange,
}: {
  value: string;
  onChange: (val: string) => void;
}) {
  return (
    <Input
      placeholder="Enter Pokémon name..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="bg-white"
    />
  );
}
