from marshmallow import Schema, fields, validate


class UserSchema(Schema):
    """Validação e serialização de usuários."""

    id = fields.Int(dump_only=True)
    name = fields.Str(required=True, validate=validate.Length(min=2, max=120))
    email = fields.Email(required=True)
    created_at = fields.DateTime(dump_only=True)
