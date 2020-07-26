from flask import Flask
app = Flask(__name__)

from flask.ext.bcrypt import Bcrypt
bcrypt = Bcrypt(app)

import pymongo
client = pymongo.MongoClient("localhost")
db = client.IntelliC

from app import routes
