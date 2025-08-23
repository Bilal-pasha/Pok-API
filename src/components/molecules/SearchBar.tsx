import { useForm } from "react-hook-form";
import SearchInput from "../atoms/SearchInput";
import SearchButton from "../atoms/SearchButton";

type FormValues = { name: string };

interface SearchBarProps {
  onSearch: (name: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const { register, handleSubmit } = useForm<FormValues>({
    defaultValues: { name: "" },
  });

  const submitHandler = handleSubmit((data) => {
    onSearch(data.name);
  });

  return (
    <form onSubmit={submitHandler} className="flex gap-2">
      <SearchInput register={register("name")} />
      <SearchButton type="submit" />
    </form>
  );
}
