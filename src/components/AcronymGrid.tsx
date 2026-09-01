import type { AcronymItem } from "@/types/acronym";
import { AcronymCard } from "@/components/AcronymCard";
import { EmptyState } from "@/components/EmptyState";

type AcronymGridProps = {
  items: AcronymItem[];
  query: string;
  openSigla: string | null;
  onToggle: (sigla: string) => void;
};

export function AcronymGrid({ items, query, openSigla, onToggle }: AcronymGridProps) {
  if (!items.length) {
    return <EmptyState query={query} />;
  }

  return (
    <ul className="grid min-h-[calc(100vh-4rem)] grid-cols-[repeat(auto-fill,minmax(10rem,1fr))] items-start gap-0">
      {items.map((acronym) => (
        <li key={acronym.sigla} className="h-full transition-all duration-200 ease-out">
          <AcronymCard
            acronym={acronym}
            isOpen={openSigla === acronym.sigla}
            onToggle={() => onToggle(acronym.sigla)}
          />
        </li>
      ))}
    </ul>
  );
}
