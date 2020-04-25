from flask import Flask, render_template, redirect, url_for, request, session, jsonify
from flask_mysqldb import MySQL
import datetime
import pytz
from datetime import datetime
from datetime import timedelta
import MySQLdb.cursors
import re
import bcrypt
import smtplib, ssl, certifi
from validate_email import validate_email

app = Flask(__name__)

# Browser Caching turned off
app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 0

# MySql config
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'tempuser1'
app.config['MYSQL_PASSWORD'] = 'Meenoo737!'
app.config['MYSQL_DB'] = 'tempdb1'
app.config['MYSQL_PORT'] = 3306
mysql = MySQL(app)
# mysql.connection.commit()
# cur.close()

#Session config
app.secret_key = 'my_key'
app.config['PERMANENT_SESSION_LIFETIME'] = timedelta(minutes = 20)
# app.config['SESSION_COOKIE_SECURE'] = True
# flask.session.modified = True
# flask.session.permanent = True
# SESSION_COOKIE_HTTPONLY
# Browsers will not allow JavaScript access to cookies marked as “HTTP only” for security.
# Default: True

@app.before_request
def before_request():
    session.modified = True

@app.route('/')
def index():
    if 'logged_in' in session:
        return redirect(url_for('homepage'))
    else:
        return redirect(url_for('gateway'))

@app.route('/gateway')
def gateway():
    if 'logged_in' in session:
        return redirect(url_for('homepage'))
    else:
        return render_template('gateway.html')

@app.route('/homepage')
def homepage():
    if 'logged_in' in session:
        account_id = session['account_id']
        email = session['email']
        cursor = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
        cursor.execute("SELECT * FROM Accounts WHERE email = %(email)s and account_id = %(account_id)s", {'email': email, 'account_id': account_id})
        account = cursor.fetchone()
        email = account['email']
        username = account['username']
        cursor.close()
        return render_template('homepage.html', email=email, username=username)
    else:
        return redirect(url_for('gateway'))

@app.route('/login', methods=['POST'])
def login():
    if 'email' in request.form and 'password' in request.form:
        email = request.form['email']
        password = request.form['password']
        if password and email:
            cursor = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
            cursor.execute("SELECT * FROM Accounts WHERE email = %(email)s", {'email': email})
            account = cursor.fetchone()
            if account:
                byte_password = bytes(password, 'utf-8')
                password_hashed = bytes(account['password'], 'utf-8')
                if bcrypt.checkpw(byte_password, password_hashed):
                    last_act = account['last_activity']
                    logged_in = account['logged_in']
                    current_time_utc = datetime.utcnow()
                    converted_last_act = datetime.fromtimestamp(last_act)
                    time_diff = ((current_time_utc - converted_last_act).total_seconds() / 60)
                    if (account['logged_in'] == 1 and time_diff > 20) or account['logged_in'] == 0:
                        lasterrr_act = datetime.timestamp(current_time_utc)
                        cursor.execute("UPDATE Accounts SET logged_in = TRUE, last_activity = " + str(lasterrr_act) + " WHERE account_id = " + str(account['account_id']))
                        print(lasterrr_act)
                        mysql.connection.commit()
                        cursor.close()
                        session.permanent = True
                        session['logged_in'] = True
                        session['email'] = account['email']
                        session['account_id'] = account['account_id']
                        return jsonify({'error' : 'none'})
                    elif (account['logged_in'] == 1 and time_diff <= 20):
                        cursor.close()
                        return jsonify({'error' : 'logged in'})
                else:
                    cursor.close()
                    return jsonify({'error' : 'invalid password'})
            else:
                cursor.close()
                return jsonify({'error' : 'invalid email'})
        else:
            return jsonify({'error' : 'missing data'})
    else:
        return jsonify({'error' : 'missing data'})

@app.route('/logout', methods=['POST'])
def logout():
    if 'logged_in' in session:
        account_id = session['account_id']
        email = session['email']
        cursor = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
        cursor.execute("UPDATE Accounts SET logged_in = False, last_activity = " + str(datetime.timestamp(datetime.utcnow())) + " WHERE account_id = " + str(account_id))
        mysql.connection.commit()
        cursor.close()
        key_list = list(session.keys())
        for key in key_list:
            session.pop(key)
        return redirect(url_for('gateway'))
    else:
        return redirect(url_for('gateway'))


# @app.route('/register', methods=['POST'])
# def register():
#     username = request.form['username']
#     email = request.form['email']
#     password = request.form['password']
#     age = request.form['age']
#     height_ft = request.form['age']
# @app.route('/logout', methods=['POST'])
# def logout():
#     return redirect(url_for('gateway'))










# @app.after_request
# def add_header(r):
#     """
#     Add headers to both force latest IE rendering engine or Chrome Frame,
#     and also to cache the rendered page for 10 minutes.
#     """
#     r.headers["Cache-Control"] = "no-cache, no-store, must-revalidate"
#     r.headers["Pragma"] = "no-cache"
#     r.headers["Expires"] = "0"
#     r.headers['Cache-Control'] = 'public, max-age=0'
#     return r

if __name__ == "__main__":
    # app.run(debug = True)
    # app.run(host="localhost", port=8000, debug=True)
    app.run()
