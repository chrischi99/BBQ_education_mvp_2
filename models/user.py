# User Data Structure & Methods
from ./__init__ import db, pd, bcrypt

class User(db.Model):

    # __init__(register)
    def __init__(self, uType, name, email, password):
        self.type = uType
        self.name = name
        self.email = email
        self.password = User.hashed_password(password)
        self.assignment = []
        self.course = []

    @staticmethod
    def hashed_password(password):
        return bcrypt.generate_password_hash(password).decode("utf-8")

    @staticmethod
    def get_user_with_email_and_password(email, password):
        user = User.query.filter_by(email=email).first()
        if user and bcrypt.check_password_hash(user.password, password):
            return user
        return None
