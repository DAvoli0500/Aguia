"""Registro central dos blueprints da API."""

from flask import Flask

from .health import health_bp
from .users import users_bp


def register_blueprints(app: Flask) -> None:
    app.register_blueprint(health_bp, url_prefix='/api')
    app.register_blueprint(users_bp, url_prefix='/api')
