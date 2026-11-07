"""Configurações por ambiente."""

import os
from pathlib import Path

from dotenv import load_dotenv

BASE_DIR = Path(__file__).resolve().parent.parent
load_dotenv(BASE_DIR / '.env')


def normalize_database_url(url: str) -> str:
    """Ajusta a URL do banco para o formato aceito pelo SQLAlchemy.

    Alguns provedores entregam ``postgres://...``, esquema que o SQLAlchemy 2
    não reconhece; ele espera ``postgresql://...``.
    """
    if url.startswith('postgres://'):
        return 'postgresql://' + url[len('postgres://'):]
    return url


class Config:
    SECRET_KEY = os.getenv('SECRET_KEY', 'dev-change-me')
    SQLALCHEMY_DATABASE_URI = normalize_database_url(
        os.getenv('DATABASE_URL', f'sqlite:///{BASE_DIR / "app.db"}')
    )
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    # Reabre conexões que o servidor (ex.: Supabase) tenha derrubado por inatividade.
    SQLALCHEMY_ENGINE_OPTIONS = {'pool_pre_ping': True}
    JSON_SORT_KEYS = False
    CORS_ORIGINS = [
        origin.strip()
        for origin in os.getenv('CORS_ORIGINS', 'http://localhost:5173').split(',')
        if origin.strip()
    ]


class DevelopmentConfig(Config):
    DEBUG = True


class TestingConfig(Config):
    TESTING = True
    SQLALCHEMY_DATABASE_URI = 'sqlite:///:memory:'
    CORS_ORIGINS = ['*']


class ProductionConfig(Config):
    DEBUG = False


config_by_name = {
    'development': DevelopmentConfig,
    'testing': TestingConfig,
    'production': ProductionConfig,
}


def get_config(name: str | None = None):
    """Resolve a classe de configuração pelo nome do ambiente."""
    env = name or os.getenv('FLASK_ENV', 'development')
    return config_by_name.get(env, DevelopmentConfig)
