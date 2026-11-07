"""Ponto de entrada da aplicação: cria e configura o app Flask."""

from flask import Flask

from .config import get_config
from .extensions import cors, db, migrate
from .middlewares.errors import register_error_handlers
from .routes import register_blueprints


def create_app(config_name: str | None = None) -> Flask:
    """Application factory.

    Recebe o nome do ambiente (development, testing, production) e devolve
    uma instância configurada do Flask.
    """
    app = Flask(__name__)
    app.config.from_object(get_config(config_name))

    db.init_app(app)
    migrate.init_app(app, db)
    cors.init_app(
        app,
        resources={r'/api/*': {'origins': app.config['CORS_ORIGINS']}},
    )

    register_blueprints(app)
    register_error_handlers(app)

    # Importa os modelos para que o SQLAlchemy os registre no metadata.
    from . import models  # noqa: F401

    return app
