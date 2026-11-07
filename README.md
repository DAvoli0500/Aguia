# Águia

Aplicação web com frontend em **React + Vite + Tailwind CSS** e backend em **Flask + SQLAlchemy**.

## Estrutura

```
.
├── frontend/     # SPA React (Vite)
├── backend/      # API Flask (app factory)
├── docs/         # Documentação, diagramas e decisões
└── .github/      # CI/CD
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
pip install -r requirements.txt
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

## Variáveis de ambiente

Cada camada tem seu próprio `.env.example`. Copie para `.env` e ajuste os valores.
Arquivos `.env` **não** são versionados.

## Licença

MIT — veja [LICENSE](LICENSE).
