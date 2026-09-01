# Publicar no GitHub Pages

## Passos para publicar a aplicação:

### 1. Criar repositório no GitHub
- Acesse [github.com/new](https://github.com/new)
- Nome do repositório: `siglas`
- Descrição: "Siglas Brasília-DF - Busca interativa de acronyms da capital"
- Selecione "Public" (para que funcione com GitHub Pages)
- **NÃO** inicialize com README, .gitignore ou license (já temos)
- Clique em "Create repository"

### 2. Adicionar remote e fazer push
```bash
# Dentro do diretório do projeto
git remote add origin https://github.com/SEU_USUARIO/siglas.git
git branch -M main
git push -u origin main
```

### 3. Configurar GitHub Pages
- Vá até **Settings** do repositório
- Navegue para **Pages** (na barra lateral)
- Em "Source", selecione **GitHub Actions**
- Salve as configurações

### 4. Deploy automático
O workflow `.github/workflows/deploy.yml` rodará automaticamente:
- Quando fizer push para `main`
- Compilará o projeto
- Publicará os arquivos estáticos no branch `gh-pages`
- A aplicação estará disponível em: `https://SEU_USUARIO.github.io/siglas`

## Verificar o status do deploy
- Vá até a aba **Actions** do repositório
- Você verá o workflow "Deploy to GitHub Pages" em execução
- Quando terminar (✓), a aplicação estará live

## URL da aplicação
Após o primeiro deploy, acesse: `https://SEU_USUARIO.github.io/siglas`

## Atualizações futuras
Basta fazer commit e push para `main`:
```bash
git add .
git commit -m "suas mudanças"
git push
```

O workflow será acionado automaticamente e a aplicação será atualizada!

---

**Resumo da stack:**
- Next.js 16.3.3 com exportação estática
- React 19.2.8
- Tailwind CSS 4
- TypeScript 5
- 206 siglas de Brasília-DF no dataset JSON
- Busca reativa com fuzzy matching
- Interface minimalista

