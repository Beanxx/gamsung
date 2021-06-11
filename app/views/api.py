import datetime
import hashlib
import json

import jwt
from flask import Blueprint, jsonify, request
from app import db

bp = Blueprint(
    'api',
    __name__,
    url_prefix='/api'
)


@bp.route('/register', methods=['POST'])
def register():
    data = json.loads(request.data)
    print(data)
    id = data['id']
    pw = data['pw']
    place = data['place']

    pw_hash = hashlib.sha256(pw.encode()).hexdigest()
    db.users.insert_one({'id': id, 'pw': pw_hash, 'place': place})

    return jsonify({'result': 'success'})
