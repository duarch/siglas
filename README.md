# Siglas Brasília-DF

## Visão geral

MVP minimalista de busca reativa para siglas e contextos de Brasília-DF. Os dados permanecem em JSON versionado no próprio repositório, sem backend ou banco de dados.

## Como rodar

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000` no computador ou `http://<IP-da-sua-rede>:3000` no celular. O servidor já é iniciado em `0.0.0.0` para aceitar conexões da rede local.

## Estrutura

- `src/app`: página, layout e estilos globais
- `src/components`: barra de busca, grid, cards e estado vazio
- `src/data/acronyms.df.json`: catálogo local de siglas
- `src/lib`: normalização e busca fuzzy
- `src/types`: tipos TypeScript

## Busca e ranking

A busca é reativa, case-insensitive e accent-insensitive. O ranking prioriza match exato de sigla, prefixo de sigla, ocorrências em nome/tags/aliases e, por fim, aproximação fuzzy baseada em distância de Levenshtein. O fuzzy aceita pequenas diferenças de digitação sem introduzir dependências.

Os cards mostram somente a sigla. Ao clicar, os detalhes são expandidos no próprio grid.

## Próximos passos

- curadoria e revisão de fontes oficiais
- filtros por categoria e região
- testes automatizados de normalização e ranking
- favoritos e histórico de buscas
- paginação ou virtualização para um catálogo maior

## Implementação original

Implementação clean-room, escrita do zero, sem copiar código de repositórios externos ou materiais GPL.
