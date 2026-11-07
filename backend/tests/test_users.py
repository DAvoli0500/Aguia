def test_create_and_list_users(client):
    payload = {'name': 'Ana Silva', 'email': 'ANA@exemplo.com'}
    created = client.post('/api/users', json=payload)

    assert created.status_code == 201
    body = created.get_json()
    assert body['email'] == 'ana@exemplo.com'

    listed = client.get('/api/users')
    assert listed.status_code == 200
    assert len(listed.get_json()) == 1


def test_rejects_invalid_payload(client):
    response = client.post('/api/users', json={'name': 'A'})

    assert response.status_code == 422
    assert response.get_json()['error']['code'] == 'validation_error'


def test_rejects_duplicate_email(client):
    payload = {'name': 'Ana Silva', 'email': 'ana@exemplo.com'}
    client.post('/api/users', json=payload)

    response = client.post('/api/users', json=payload)

    assert response.status_code == 409
    assert response.get_json()['error']['code'] == 'email_already_exists'
