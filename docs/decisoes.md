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
