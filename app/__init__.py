import sys
import os
from flask import Flask
app = Flask(__name__)

import bcrypt
import pymongo
client = pymongo.MongoClient("localhost")
db = client.IntelliC

from app import routes
