"use client";

import { Button } from "@/components/atoms/button";

export default function SearchButton({ onClick }: { onClick: () => void }) {
  return <Button onClick={onClick}>Search</Button>;
}
