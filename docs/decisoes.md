# Decisões de arquitetura

## 2026-11-06 — Application factory no Flask

**Contexto:** precisamos de configurações distintas para desenvolvimento,
testes e produção.

**Decisão:** usar `create_app(config_name)` em `backend/app/__init__.py` e
classes de configuração em `config.py`.

**Consequências:** facilita testes com banco em memória e evita estado global
no momento do import.

---

## 2026-11-06 — Validação com Marshmallow

**Contexto:** as rotas precisam validar payloads e serializar modelos.

**Decisão:** schemas em `backend/app/schemas/`, sem lógica de negócio.

**Consequências:** erros de validação retornam 422 com detalhes por campo.

---

## 2026-11-06 — Tailwind CSS com tokens

**Contexto:** consistência visual e suporte a tema claro/escuro.

**Decisão:** Tailwind para utilitários e variáveis CSS em `styles/tokens.css`
para cores base. Tema escuro via classe `dark` no `<html>`.

**Consequências:** o tema escuro segue a classe `dark`. As cores de marca
existem em `tailwind.config.js` e em `tokens.css`, e precisam ser mantidas em
sincronia ao trocar a identidade visual.

---

## 2026-11-06 — Deploy: Vercel + Render + Supabase (plano gratuito)

**Contexto:** o projeto precisa ir ao ar sem custo, mantendo a mesma stack dos
estudos (React + Vite, Flask, PostgreSQL).

**Decisão:** site estático na Vercel (`frontend/vercel.json`), API com
`gunicorn` no Render (`render.yaml`) e PostgreSQL no Supabase via
`DATABASE_URL`. SQLite continua como padrão apenas no desenvolvimento local.
Dependências de teste ficam em `requirements-dev.txt`.

**Consequências:** a API gratuita "dorme" por inatividade; `postgres://` é
convertido para `postgresql://` em `config.py`; a `SECRET_KEY` de produção
precisa ser definida no painel (o Render a gera automaticamente).

