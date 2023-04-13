import React from "react";
import SearchBar from "../components/SearchBar";
import Logo from "../components/Logo";

export default function SearchHeader() {
  return (
    <header className="w-full flex p-4 text-lg fixed bg-black z-10">
      <Logo />
      <SearchBar />
    </header>
  );
}
