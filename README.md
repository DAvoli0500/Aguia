# Águia

Aplicação web com frontend em **React + Vite + Tailwind CSS** e backend em **Flask + SQLAlchemy**.

## Estrutura

```
.
├── frontend/     # SPA React (Vite)
├── backend/      # API Flask (app factory)
├── docs/         # Documentação, diagramas e decisões
├── .github/      # CI/CD
├── render.yaml   # Deploy da API no Render
└── frontend/vercel.json  # Deploy do site na Vercel
```

## Pré-requisitos

- Node.js 20+
- Python 3.11+

## Frontend

```bash
cd frontend
cp .env.example .env
npm install
npm run dev          # http://localhost:5173
```

Outros comandos:

```bash
npm run build        # build de produção em dist/
npm run preview      # pré-visualiza o build
npm test             # testes com Vitest
```

## Backend

```bash
cd backend
cp .env.example .env
python -m venv venv
source venv/bin/activate
pip install -r requirements-dev.txt   # inclui pytest
flask --app run.py db upgrade   # aplica as migrações
python run.py                   # http://localhost:5000
```

Endpoints iniciais:

- `GET /api/health`
- `GET /api/users`
- `POST /api/users` — `{ "name": "...", "email": "..." }`

Testes:

```bash
cd backend
pytest
```

## Deploy (plano gratuito)

Ordem recomendada: banco, API e depois o site.

1. **Supabase (banco):** crie o projeto e copie a connection string em
   *Project Settings > Database*, no modo **Session pooler** (o Render gratuito
   usa IPv4). Formato: `postgresql://postgres.<ref>:<senha>@<host>:5432/postgres?sslmode=require`.
2. **Render (API):** *New > Blueprint* apontando para este repositório; o
   `render.yaml` cria o serviço `aguia-api`. No painel, preencha `DATABASE_URL`
   (passo 1) e `CORS_ORIGINS` (URL do site na Vercel). O `SECRET_KEY` é gerado
   automaticamente e as migrações rodam a cada início.
3. **Vercel (site):** importe o repositório com *Root Directory* `frontend` e
   defina `VITE_API_URL` com `https://<seu-servico>.onrender.com/api`. O
   `vercel.json` já trata as rotas do React Router (`/sobre`, `/contato`).
4. Depois de ter o domínio final, atualize `og:url` em `frontend/index.html` e
   as URLs de `frontend/public/sitemap.xml` e `robots.txt` (hoje apontam para
   `https://aguia.vercel.app`).

> No plano gratuito do Render a API "dorme" após alguns minutos sem uso; a
> primeira requisição depois disso demora mais.

## Variáveis de ambiente

Cada camada tem seu próprio `.env.example`. Copie para `.env` e ajuste os valores.
Arquivos `.env` **não** são versionados.

## Licença

MIT — veja [LICENSE](LICENSE).
