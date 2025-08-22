"use client";

import { Button } from "@/components/ui/button";

export default function SearchButton({ onClick }: { onClick: () => void }) {
  return <Button onClick={onClick}>Search</Button>;
}
