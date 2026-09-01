import type { AcronymItem } from "@/types/acronym";
import { normalizeText } from "@/lib/normalize";

type RankedAcronym = {
  item: AcronymItem;
  score: number;
};

function levenshteinDistance(source: string, target: string): number {
  const previous = Array.from({ length: target.length + 1 }, (_, index) => index);

  for (let row = 1; row <= source.length; row += 1) {
    let diagonal = previous[0];
    previous[0] = row;

    for (let column = 1; column <= target.length; column += 1) {
      const above = previous[column];
      const cost = source[row - 1] === target[column - 1] ? 0 : 1;
      previous[column] = Math.min(
        previous[column] + 1,
        previous[column - 1] + 1,
        diagonal + cost,
      );
      diagonal = above;
    }
  }

  return previous[target.length];
}

function fuzzyScore(query: string, text: string): number {
  if (text.includes(query)) {
    return 0;
  }

  const words = text.split(/\s+/).filter(Boolean);
  const distance = Math.min(
    ...words.map((word) => levenshteinDistance(query, word)),
  );
  const similarity = distance / Math.max(query.length, 1);

  return similarity <= 0.55 ? similarity : Number.POSITIVE_INFINITY;
}

export function searchAcronyms(
  query: string,
  acronyms: AcronymItem[],
): AcronymItem[] {
  const normalizedQuery = normalizeText(query);

  if (!normalizedQuery) {
    return [...acronyms].sort((a, b) => a.sigla.localeCompare(b.sigla));
  }

  const ranked = acronyms
    .map((item) => {
      const sigla = normalizeText(item.sigla);
      const searchableFields = [
        normalizeText(item.nome),
        normalizeText(item.regiao),
        ...item.regioes.map((regiao) => normalizeText(regiao)),
        ...item.tags.map(normalizeText),
        ...item.aliases.map(normalizeText),
      ];
      const haystack = [sigla, ...searchableFields].join(" ").trim();

      let score = Number.POSITIVE_INFINITY;

      if (sigla === normalizedQuery) {
        score = 0;
      } else if (sigla.startsWith(normalizedQuery)) {
        score = 1;
      } else if (haystack.includes(normalizedQuery)) {
        score = 2;
      } else {
        const fuzzy = Math.min(
          fuzzyScore(normalizedQuery, sigla),
          ...searchableFields.map((field) => fuzzyScore(normalizedQuery, field)),
        );
        if (Number.isFinite(fuzzy)) {
          score = 3 + fuzzy;
        }
      }

      if (!Number.isFinite(score)) {
        return null;
      }

      return { item, score } satisfies RankedAcronym;
    })
    .filter((entry): entry is RankedAcronym => entry !== null)
    .sort((a, b) => {
      if (a.score !== b.score) {
        return a.score - b.score;
      }

      return a.item.sigla.localeCompare(b.item.sigla);
    })
    .map(({ item }) => item);

  return ranked;
}
