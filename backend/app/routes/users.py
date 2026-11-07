from flask import Blueprint, jsonify, request
from marshmallow import ValidationError

from ..schemas.user import UserSchema
from ..services import user_service
from ..services.user_service import EmailAlreadyExistsError
from ..utils.responses import error_response

users_bp = Blueprint('users', __name__)

user_schema = UserSchema()
users_schema = UserSchema(many=True)


@users_bp.get('/users')
def list_users():
    return jsonify(users_schema.dump(user_service.list_users()))


@users_bp.post('/users')
def create_user():
    try:
        data = user_schema.load(request.get_json(silent=True) or {})
    except ValidationError as error:
        return error_response(
            'Dados inválidos.',
            code='validation_error',
            status=422,
            details=error.messages,
        )

    try:
        user = user_service.create_user(data)
    except EmailAlreadyExistsError:
        return error_response(
            'Já existe um usuário com este e-mail.',
            code='email_already_exists',
            status=409,
        )

    return jsonify(user_schema.dump(user)), 201
