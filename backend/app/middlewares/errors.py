from flask import Flask
from werkzeug.exceptions import HTTPException

from ..utils.responses import error_response


def register_error_handlers(app: Flask) -> None:
    """Padroniza as respostas de erro da API em JSON."""

    @app.errorhandler(HTTPException)
    def handle_http_error(error: HTTPException):
        return error_response(
            error.description,
            code=error.name.lower().replace(' ', '_'),
            status=error.code or 500,
        )

    @app.errorhandler(Exception)
    def handle_unexpected_error(error: Exception):
        if (
            app.config.get('PROPAGATE_EXCEPTIONS')
            or app.testing
            or app.debug
        ):
            raise error

        app.logger.exception('Erro não tratado', exc_info=error)
        return error_response(
            'Erro interno do servidor.',
            code='internal_error',
            status=500,
        )
