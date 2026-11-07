# Arquitetura

## Visão geral

```
Navegador
  └── frontend (React + Vite)
        └── /api  ──proxy (dev)──>  backend (Flask)
                                      ├── routes/   (HTTP)
                                      ├── schemas/  (validação)
                                      ├── services/ (regras de negócio)
                                      └── models/   (SQLAlchemy)
                                            └── banco de dados
```

## Frontend

- **pages/**: telas ligadas a rotas.
- **components/layout/**: estrutura fixa (Header, Navbar, Footer).
- **components/ui/**: componentes reutilizáveis e sem regra de negócio.
- **services/**: única camada que conhece HTTP (`axios`).
- **context/**: estado global (tema, usuário).
- **hooks/**: lógica reutilizável com estado/efeitos.
- **routes/**: mapa de URLs para páginas.

## Backend

- **application factory** (`create_app`) permite instanciar o app com
  configurações diferentes (dev, testes, produção).
- **blueprints** isolam conjuntos de rotas por domínio.
- **services** concentram regras de negócio e não conhecem `request`.
- **schemas** validam entrada e serializam saída.
- **middlewares** tratam erros de forma padronizada.

## Formato de erro da API

```json
{
  "error": {
    "code": "validation_error",
    "message": "Dados inválidos.",
    "details": { "email": ["Not a valid email address."] }
  }
}
```
