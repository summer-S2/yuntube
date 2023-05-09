import React from "react";
import SearchBar from "../components/SearchBar";
import Logo from "../components/Logo";

export default function SearchHeader() {
  return (
    <header className="fixed w-full max-w-screen-xl flex p-4 text-lg bg-black z-10">
      <Logo />
      <SearchBar />
    </header>
  );
}
