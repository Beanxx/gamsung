import os

from flask import Flask
from pymongo import MongoClient
from flask.cli import load_dotenv
from flask_cors import CORS

load_dotenv()
MONGODB_HOST = os.environ['MONGODB_HOST']
db = None
client = MongoClient(MONGODB_HOST)


def create_app(database_name='cafe'):
    app = Flask(__name__)
    CORS(app)

    global db
    db = client.get_database(database_name)

    from app.views import main
    app.register_blueprint(main.bp)

    return app
