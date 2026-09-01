type EmptyStateProps = {
  query: string;
};

export function EmptyState({ query }: EmptyStateProps) {
  return (
    <div className="flex min-h-64 flex-col items-center justify-center rounded-3xl border border-dashed border-slate-200 bg-slate-50 px-6 py-12 text-center shadow-sm">
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-2xl text-emerald-700">
        🔎
      </div>
      <h2 className="text-xl font-semibold text-slate-800">
        Nenhuma sigla encontrada
      </h2>
      <p className="mt-2 max-w-md text-sm leading-6 text-slate-600">
        {query.trim()
          ? `Não encontramos resultados para “${query}”. Tente outra sigla, nome ou palavra-chave.`
          : "Comece digitando para explorar termos e contextos de Brasília-DF."}
      </p>
    </div>
  );
}
