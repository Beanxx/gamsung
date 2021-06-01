from flask import Blueprint, jsonify
from app import db

bp = Blueprint('main', __name__, url_prefix='/')


@bp.route('', methods=['GET'])
def index():
    # db document 값
    res = list(db.users.find({}, {'_id': False}))
    print(res)
    return jsonify(res)
