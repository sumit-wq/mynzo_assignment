import React, { ChangeEvent, KeyboardEvent, useState, useEffect } from "react";
import useDebounce from "../../hooks/useDebounce";
import "./searchbar.css";

interface ISearchBar {
  onSearch: (arg: string) => void;
}

const SearchBar = ({ onSearch }: ISearchBar) => {
  const [query, setQuery] = useState("");
  const debouncedValue = useDebounce<string>(query, 800);

  useEffect(() => {
    handleSearch();
  }, [debouncedValue]);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSearch = () => {
    if (query.trim().length > 0) {
      onSearch(query);
    }
  };

  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        placeholder="Search"
      />
      <button onClick={handleSearch}>Search</button>
    </>
  );
};

export default SearchBar;
