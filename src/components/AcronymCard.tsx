import type { AcronymItem } from "@/types/acronym";

type AcronymCardProps = {
  acronym: AcronymItem;
  isOpen: boolean;
  onToggle: () => void;
};

export function AcronymCard({ acronym, isOpen, onToggle }: AcronymCardProps) {
  return (
    <article className={`group bg-white transition-colors duration-200 ${isOpen ? "fixed inset-0 z-50 h-dvh w-screen" : "relative aspect-square min-w-40 hover:bg-emerald-50/60"}`}>
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className={`flex h-full w-full items-center justify-center px-4 py-8 text-center focus:outline-none focus-visible:bg-emerald-100 ${isOpen ? "pointer-events-none" : ""}`}
      >
        <h2 className="text-3xl font-black tracking-tight text-slate-900 transition-transform duration-200 group-hover:scale-105">
          {acronym.sigla}
        </h2>
      </button>
      <div className={`absolute inset-0 z-10 grid transition-[opacity,transform] duration-300 ${isOpen ? "scale-100 opacity-100" : "pointer-events-none scale-95 opacity-0"}`}>
        <div className="overflow-hidden">
          <div className="flex h-full flex-col items-center justify-center overflow-y-auto bg-emerald-50 px-5 py-6 text-center">
            <button
              type="button"
              onClick={onToggle}
              aria-label={`Fechar detalhes de ${acronym.sigla}`}
              className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white text-2xl leading-none text-slate-600 shadow-sm transition-colors hover:bg-slate-100 focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-200"
            >
              <span aria-hidden="true">&times;</span>
            </button>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-700">{acronym.categoria}</p>
            <div className="mt-2 flex flex-wrap justify-center gap-2 text-[10px] font-medium uppercase tracking-[0.12em] text-slate-600">
              {acronym.regioes.map((regiao) => (
                <span key={`${acronym.sigla}-${regiao}`} className="rounded-full border border-emerald-200 bg-white/70 px-2.5 py-1">
                  {regiao}
                </span>
              ))}
            </div>
            <h2 className="mt-4 text-6xl font-black tracking-tight text-slate-900 sm:text-8xl">{acronym.sigla}</h2>
            <p className="mt-3 text-base font-semibold text-slate-800">{acronym.nome}</p>
            <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-slate-600">{acronym.descricao_curta}</p>
            <p className="mt-4 text-xs text-slate-500"><span className="font-medium text-slate-600">Fonte:</span> {acronym.fonte}</p>
          </div>
        </div>
      </div>
    </article>
  );
}
