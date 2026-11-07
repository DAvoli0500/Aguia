from typing import Any

from flask import jsonify


def error_response(
    message: str,
    code: str = 'error',
    status: int = 400,
    details: Any | None = None,
):
    """Monta uma resposta de erro padronizada.

    Formato: {"error": {"code": ..., "message": ..., "details": ...}}
    """
    payload = {'error': {'code': code, 'message': message}}
    if details is not None:
        payload['error']['details'] = details
    return jsonify(payload), status
