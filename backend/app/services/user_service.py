from ..extensions import db
from ..models.user import User


class EmailAlreadyExistsError(Exception):
    """Levantada quando o e-mail informado já está cadastrado."""


def list_users() -> list[User]:
    return User.query.order_by(User.id).all()


def create_user(data: dict) -> User:
    email = data['email'].strip().lower()

    if User.query.filter_by(email=email).first():
        raise EmailAlreadyExistsError(email)

    user = User(name=data['name'].strip(), email=email)
    db.session.add(user)
    db.session.commit()
    return user
