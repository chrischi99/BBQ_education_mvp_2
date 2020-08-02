# User Data Structure & Methods
import sys
import os
import bcrypt
import pymongo
client = pymongo.MongoClient("localhost")
db = client.IntelliC

class User(object):

    # __init__(register)
    def __init__(self, uType, name, email, password):
        self.type = uType
        self.name = name
        self.email = email
        self.password = User.hashed_password(password)
        self.assignment = []
        self.course = []

    def get_name(self):
        return self.name

    @staticmethod
    def hashed_password(password):
        return bcrypt.generate_password_hash(password).decode("utf-8")

    @staticmethod
    def get_user(email, password):
        user = db.users.find({"user_name": email})
        user = user.next()
        if user and bcrypt.check_password_hash(user.password, password):
            return user
        return None
