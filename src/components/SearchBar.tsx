type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
  resultCount: number;
};

export function SearchBar({ value, onChange, resultCount }: SearchBarProps) {
  return (
    <div className="flex w-full items-center gap-4">
      <label htmlFor="sigla-search" className="sr-only">
        Buscar sigla ou contexto
      </label>
      <input
        id="sigla-search"
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Ex.: EPNB, EPTG, Detran..."
        aria-label="Buscar sigla ou contexto"
        autoComplete="off"
        inputMode="search"
        className="min-w-0 flex-1 bg-transparent py-2 text-base text-slate-900 placeholder:text-slate-400 focus:outline-none"
      />
      <span className="shrink-0 text-xs font-medium tabular-nums text-slate-400" aria-live="polite">
        {resultCount}
      </span>
    </div>
  );
}
