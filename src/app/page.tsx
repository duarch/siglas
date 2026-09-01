"use client";

import { useEffect, useMemo, useState } from "react";
import { SearchBar } from "@/components/SearchBar";
import { AcronymGrid } from "@/components/AcronymGrid";
import acronyms from "@/data/acronyms.df.json";
import { searchAcronyms } from "@/lib/search";
import type { AcronymItem } from "@/types/acronym";

const acronymList = acronyms as AcronymItem[];

export default function Home() {
  const [query, setQuery] = useState("");
  const [openSigla, setOpenSigla] = useState<string | null>(null);

  const filteredAcronyms = useMemo(
    () => searchAcronyms(query, acronymList),
    [query],
  );

  useEffect(() => {
    if (!openSigla) {
      return;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpenSigla(null);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [openSigla]);

  function handleQueryChange(value: string) {
    setQuery(value);
    setOpenSigla(null);
  }

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <nav className="sticky top-0 z-10 flex min-h-16 items-center gap-4 bg-white/95 px-4 shadow-sm backdrop-blur sm:px-6">
        <span className="hidden text-sm font-black tracking-tight text-slate-900 sm:block">SIGLAS DF</span>
        <div className="mx-auto flex w-full max-w-3xl items-center rounded-full bg-slate-100 px-5">
          <SearchBar
            value={query}
            onChange={handleQueryChange}
            resultCount={filteredAcronyms.length}
          />
        </div>
      </nav>
      <section className="min-h-[calc(100vh-4rem)]">
        <AcronymGrid
          items={filteredAcronyms}
          query={query}
          openSigla={openSigla}
          onToggle={(sigla) => setOpenSigla((current) => current === sigla ? null : sigla)}
        />
      </section>
    </main>
  );
}
