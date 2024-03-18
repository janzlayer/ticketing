from flask import Flask, render_template, request, jsonify, session, redirect
from functools import wraps
import requests


app = Flask(__name__)
app.secret_key = b'O\x92\xe9\x89\x8ag\x90\xb5\x86`\xeb\x10\x81^/\x80'

# Decorator
def login_required(f):
    @wraps(f)
    def wrap(*args, **kwargs):
        if 'logged_in' in session:
            return f(*args, **kwargs)
        else:
            return redirect('/')
    return wrap
    


def start_session(user):
    session['logged_in'] = True
    session['user'] = user["userdata"]
    return jsonify(user), 200

@app.route('/')
def loginForm():
    if 'logged_in' in session:
        if session['logged_in']:
            return redirect('/dashboard')
    return render_template('login.html')

@app.route('/dashboard')
@login_required
def dashboard():
    return render_template('user-dashboard.html')

@app.route('/admin-dashboard')
@login_required
def admin_dashboard():
    return render_template('admin-dashboard.html')



@app.route('/<string:component>')
@login_required
def departmentComponent(component):
    if component in ['create.html','view.html']:
        return render_template('ticket/' + component)
    return render_template('department/' + component)


@app.route('/users')
def viewUsers():
    return render_template('view.html')

 
@app.route('/login', methods=["POST"])
def login():
    response = requests.post('http://172.20.238.198:5000/api/login',json={"email":request.form['email'],"password":request.form['password']}).json()

    if response["status"] == "200":
        start_session(response)
        return redirect('/dashboard')
    elif response["status"] == "401":

        return jsonify(response)

@app.route('/signout')
def signout():
    session.clear()
    return redirect('/')