import { Input } from "@/components/atoms/input";
import { UseFormRegisterReturn } from "react-hook-form";

interface SearchInputProps {
  register?: UseFormRegisterReturn;
  placeholder?: string;
  className?: string;
}

export default function SearchInput({
  register,
  placeholder = "Enter Pokémon name...",
  className = "",
}: SearchInputProps) {
  return <Input {...register} placeholder={placeholder} className={`bg-white ${className}`} />;
}
