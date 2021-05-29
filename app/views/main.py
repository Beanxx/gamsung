from flask import Blueprint, jsonify
from app import db

bp = Blueprint('main', __name__, url_prefix='/')


@bp.route('', methods=['GET'])
def index():
    # db document 값
    # [{'group': 3, 'member': 'yongsu, misol, soomin, soobin', 'project': 'gamsung cafe'}]
    res = list(db.gamsung.find({}, {'_id': False}))
    print(res)
    return jsonify(res)
