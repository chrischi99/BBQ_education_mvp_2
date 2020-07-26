from app import app

@app.route('/')
def hello_world():
    return 'Hello, World!'

@app.route('/loginPage')
def one():
    return 'loginPage'

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







