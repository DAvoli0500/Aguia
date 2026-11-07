from flask import Blueprint, jsonify

health_bp = Blueprint('health', __name__)


@health_bp.get('/health')
def health():
    """Verificação simples de disponibilidade da API."""
    return jsonify(status='ok', service='meu-site-api')
