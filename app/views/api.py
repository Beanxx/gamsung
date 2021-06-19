import datetime
import hashlib
import json

import jwt
from flask import Blueprint, jsonify, request
from app import db, JWT_SECRET

bp = Blueprint(
    'api',
    __name__,
    url_prefix='/api'
)


@bp.route('/register', methods=['POST'])
def register():
    data = json.loads(request.data)
    id = data['id']
    pw = data['pw']
    place = data['place']

    pw_hash = hashlib.sha256(pw.encode()).hexdigest()
    db.users.insert_one({'id': id, 'pw': pw_hash, 'place': place})

    return jsonify({'result': 'success'})


@bp.route('/login', methods=['POST'])
def login():
    login_data = json.loads(request.data)
    login_id = login_data['email']
    pw = login_data['password']

    pw_hash = hashlib.sha256(pw.encode()).hexdigest()
    user = db.users.find_one({'id': login_id, 'pw': pw_hash}, {'_id': False})

    if user:
        expiration_time = datetime.timedelta(hours=1)
        payload = {
            'id': login_id,
            'exp': datetime.datetime.utcnow() + expiration_time
        }
        token = jwt.encode(payload, JWT_SECRET)
        return jsonify({'result': 'success', 'user': user, 'token': token})
    else:
        return jsonify({'result': 'failed', 'msg': '로그인에 실패했습니다.'})
