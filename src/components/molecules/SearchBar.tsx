"use client";

import SearchInput from "../atoms/SearchInput";
import SearchButton from "../atoms/SearchButton";

export default function SearchBar({
  value,
  onChange,
  onSearch,
}: {
  value: string;
  onChange: (val: string) => void;
  onSearch: () => void;
}) {
  return (
    <div className="flex gap-2">
      <SearchInput value={value} onChange={onChange} />
      <SearchButton onClick={onSearch} />
    </div>
  );
}
