import { Button } from "@/components/atoms/button";

export default function SearchButton({ onClick, type }: { onClick?: () => void, type: "button" | "submit" | "reset" }) {
  return <Button type={type} onClick={onClick}>Search</Button>;
}
