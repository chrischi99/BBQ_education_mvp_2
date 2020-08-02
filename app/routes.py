from app import app
from flask import request
import pymongo
client = pymongo.MongoClient("localhost")
db = client.IntelliC
import sys
import os
o_path = os.getcwd() # 返回当前工作目录
sys.path.append(o_path) # 添加自己指定的搜索路径
from models.user import User

@app.route('/' , methods = ["POST"])
def hello_world():
    return 'Hello, World!'

@app.route('/loginPage', methods = ["GET", "POST"])
def login():
    if request.method == 'POST':
        f_user = request.get_json()
        f_userMail = f_user['userMail']
        f_password = f_user['password']
        b_user = User.get_user(f_userMail, f_password)
    #     print(b_user.get_name())
    return 'xrw'

@app.route('/registerPage')
def two():
    return 'registerPage'

@app.route('/personalPage')
def three():
    return 'personalPage'

@app.route('/coursePage')
def four():
    return 'coursePage'

@app.route('/analysisPage')
def five():
    return 'analysisPage'

@app.route('/oneAssignmentPage')
def six():
    return 'oneAssignmentPage'

@app.route('/inst2StudentAssignmentsPage')
def seven():
    return 'inst2StudentAssignmentsPage'

@app.route('/manuAddAssignmentPage')
def eight():
    return 'manuAddAssignmentPage'

@app.route('/autoAddAssignmentPage')
def nine():
    return 'autoAddAssignmentPage'

# allQuestionsPage

# chooseQuestionPage

# editQuestionPage







