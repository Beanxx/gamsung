import os

from flask import Flask
from pymongo import MongoClient
from flask.cli import load_dotenv
from flask_cors import CORS

load_dotenv()
MONGODB_IP = os.environ['MONGODB_IP']
MONGODB_PORT = os.environ['MONGODB_PORT']
db = None
client = MongoClient(MONGODB_IP, int(MONGODB_PORT))


def create_app(database_name='sparta'):
    app = Flask(__name__)
    CORS(app)

    global db
    db = client.get_database(database_name)

    from views import main
    app.register_blueprint(main.bp)

    return app
