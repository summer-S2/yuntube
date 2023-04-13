import React from "react";
import SearchBar from "../components/SearchBar";
import Logo from "../components/Logo";

export default function SearchHeader() {
  return (
    <header className="w-full flex p-4 text-lg mb-4">
      <Logo />
      <SearchBar />
    </header>
  );
}
