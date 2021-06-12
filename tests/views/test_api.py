import hashlib
import json

from tests.conftest import db


def test_회원가입(client):
    data = {
        'id': 'tester01',
        'pw': '1234',
        'place': '상수'
    }

    response = client.post(
        '/api/register',
        data=json.dumps(data)
    )

    assert response.status_code == 200

    user = db.users.find_one(
        {'id': 'tester01'},
        {'_id': False}
    )

    assert user['pw'] != '1234'
    pw_hash = hashlib.sha256('1234'.encode()).hexdigest()
    assert user['pw'] == pw_hash
