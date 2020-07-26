# Importing packages models need

# -*- coding: utf-8 -*-
from flask import Flask
from flask.ext.bcrypt import Bcrypt as bcrypt
import pymongo
client = pymongo.MongoClient("localhost")
db = client.IntelliC
