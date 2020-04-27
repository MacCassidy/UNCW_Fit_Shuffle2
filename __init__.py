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
from flask_apscheduler import APScheduler
import random
# import mysql.connector
# from apscheduler.schedulers.background import BackgroundScheduler


# scheduler = BackgroundScheduler()
# job = scheduler.add_job(test_job, 'interval', minutes=1)
# scheduler.start()


app = Flask(__name__)
# scheduler = APScheduler()
# scheduler.init_app(app)
# scheduler.add_job(id='Scheduled task', func = registertask, trigger='interval', seconds=7)
# scheduler.start()

# Browser Caching turned off
app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 0
app.config['SCHEDULER_API_ENABLED'] = True
# MySql config
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'tempuser1'
app.config['MYSQL_PASSWORD'] = 'Meenoo737!'
app.config['MYSQL_DB'] = 'tempdb1'
app.config['MYSQL_PORT'] = 3306
app.secret_key = 'my_key'
app.config['PERMANENT_SESSION_LIFETIME'] = timedelta(minutes = 20)
mysql = MySQL(app)
scheduler = APScheduler()
# mysql.connection.commit()
# cur.close()
scheduler.init_app(app)

#Session config
# app.config['PERMANENT_SESSION_LIFETIME'] = timedelta(minutes = 20)
# mysql = MySQL(app)
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
        print("made it to homepage")
        account_id = session['account_id']
        email = session['email']
        cursor = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
        cursor.execute("SELECT * FROM Accounts WHERE email = %(email)s and account_id = %(account_id)s", {'email': email, 'account_id': account_id})
        account = cursor.fetchone()
        email = account['email']
        username = account['username']
        cursor.close()
        cur_var = str(datetime.now() + timedelta(seconds=20))[:19]
        print(scheduler.add_job(id='Scheduledtask', func = registertask,  trigger='date', run_date=cur_var))
        # scheduler.start()
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
                        print('login route worked')
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



@app.route('/register', methods=['POST'])
def register():
    if 'username' in request.form and 'email' in request.form and 'password' in request.form and 'age' in request.form and 'height_ft' in request.form and 'height_in' in request.form and 'gender' in request.form and 'timezone' in request.form and 'exp_cardio' in request.form and 'exp_chest' in request.form and 'exp_legs' in request.form and 'exp_back' in request.form and 'exp_core' in request.form and 'exp_shoulders' in request.form and 'exp_arms' in request.form:
        username = request.form['username']
        email = request.form['email']
        password = request.form['password']
        age = request.form['age']
        height_ft = request.form['height_ft']
        height_in = request.form['height_in']
        gender = request.form['gender']
        timezone = request.form['timezone']
        exp_cardio = request.form['exp_cardio']
        exp_chest = request.form['exp_chest']
        exp_legs = request.form['exp_legs']
        exp_back = request.form['exp_back']
        exp_core = request.form['exp_core']
        exp_shoulders = request.form['exp_shoulders']
        exp_arms = request.form['exp_arms']
        if username and email and password and age and height_ft and height_in and gender and timezone and exp_cardio and exp_chest and exp_legs and exp_back and exp_core and exp_shoulders and exp_arms:
            cursor = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
            cursor.execute("SELECT * FROM Accounts WHERE email = %(email)s and account_id = %(account_id)s", {'email': email, 'account_id': account_id})

            # mysql.connection.commit()
            # cursor.close()
            # session.permanent = True
            # session['logged_in'] = True
            # session['email'] = account['email']
            # session['account_id'] = account['account_id']
        else:
            return jsonify({'error' : 'missing data'})
    else:
        return jsonify({'error' : 'missing data'})










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

# username VARCHAR(25) NOT NULL,
# email VARCHAR(50) NOT NULL UNIQUE,
# password VARCHAR(60) NOT NULL,
# logged_in BOOLEAN NOT NULL,
# age TINYINT NOT NULL check(age > 13 and age < 65),
# height_in TINYINT NOT NULL CHECK(height_in >= 0 and height_in < 12),
# height_ft TINYINT NOT NULL CHECK(height_ft >= 3 and height_ft <= 8),
# gender  NOT NULL CHECK(gender IN ('male', 'female')),
# timezone  NOT NULL CHECK(timezone IN ('America/New_York', 'America/Merida', 'America/Boise', 'America/Dawson', 'America/Anchorage', 'Pacific/Honolulu', 'America/Phoenix')),
# exp_cardio  NOT NULL CHECK(exp_cardio IN ('beginner', 'novice', 'intermediate', 'experienced')),
# exp_chest  NOT NULL CHECK(exp_chest IN ('beginner', 'novice', 'intermediate', 'experienced')),
# exp_legs  NOT NULL CHECK(exp_legs IN ('beginner', 'novice', 'intermediate', 'experienced')),
# exp_back VARCHAR(12) NOT NULL CHECK(exp_back IN ('beginner', 'novice', 'intermediate', 'experienced')),
# exp_core VARCHAR(12) NOT NULL CHECK(exp_core IN ('beginner', 'novice', 'intermediate', 'experienced')),
# exp_shoulders VARCHAR(12) NOT NULL CHECK(exp_shoulders IN ('beginner', 'novice', 'intermediate', 'experienced')),
# exp_arms VARCHAR(12) NOT NULL CHECK(exp_arms IN ('beginner', 'novice', 'intermediate', 'experienced')),
# password_change_code INT UNIQUE CHECK(password_change_code <= 10000000 and password_change_code >= 99999999),
# created DECIMAL(16,6) NOT NULL,
# last_activity DECIMAL(16,6) NOT NULL,



def registertask():
    with scheduler.app.app_context():
        # from app import app
        # print(mysql.connection)
        cursor = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
        if cursor:
            print("yea suuuuuuuuuuuuuuuuuuuuuuuuuuun")
    # cursor.close()
    # import mysql.connector

    # mydb = mysql.connector.connect(
    #   host="localhost",
    #   user="tempuser1",
    #   passwd="Meenoo737!",
    #   database="tempdb1",
    #   auth_plugin='mysql_native_password'
    # )
    # mycursor = mydb.cursor()
    #
    #
    #
    #
        username = "bingoooooooooooo"
        r1 = random.randint(0, 10000)
        email = "task" + str(r1) + "@mail.com"
        # colepassword
        password = '$2b$12$LaczxaUdSOiyRbC/jyRfkufezVXhoCllWfGVYRB4xyKOBQoC/jCMS'
        logged_in = '0'
        age = "15"
        height_ft = "5"
        height_in = "5"
        gender = "male"
        timezone = 'America/New_York'
        exp_cardio = 'novice'
        exp_chest = 'novice'
        exp_legs = 'novice'
        exp_back = 'novice'
        exp_core = 'novice'
        exp_shoulders = 'novice'
        exp_arms = 'novice'
        created = str(datetime.now().timestamp())
        last_activity = str(datetime.now().timestamp())
    # cursor = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
    # cursor.execute("SELECT * FROM Accounts WHERE email = %(email)s and account_id = %(account_id)s", {'email': email, 'account_id': account_id})
    # mycursor.execute("CREATE DATABASE mydatabase")
        cursor.execute("INSERT INTO Accounts (username,email,password,logged_in,age,height_ft,height_in,gender,timezone, exp_cardio, exp_chest, exp_legs, exp_back, exp_core, exp_shoulders, exp_arms, created, last_activity  ) VALUES (  %(username)s, %(email)s, %(password)s, %(logged_in)s, %(age)s, %(height_ft)s, %(height_in)s, %(gender)s, %(timezone)s, %(exp_cardio)s, %(exp_chest)s, %(exp_legs)s, %(exp_back)s, %(exp_core)s, %(exp_shoulders)s, %(exp_arms)s, %(created)s, %(last_activity)s )", {'username': username, 'email': email,  'password': password, 'logged_in': logged_in, 'age': age, 'height_ft': height_ft, 'height_in': height_in, 'gender': gender, 'timezone': timezone, 'exp_cardio':exp_cardio, 'exp_chest': exp_chest, 'exp_legs': exp_legs, 'exp_back': exp_back, 'exp_core': exp_core, 'exp_shoulders': exp_shoulders, 'exp_arms': exp_arms, 'created': created, 'last_activity': last_activity})
    # mydb.commit()
    # mydb.close()
        mysql.connection.commit()
        cursor.close()
    # {'username': username, 'email': email,  'password': password, 'logged_in': logged_in, 'age': age, 'height_ft': height_ft, 'height_in': height_in, 'gender': gender, 'timezone':
    # timezone, 'exp_cardio':exp_cardio, 'exp_chest': exp_chest, 'exp_legs': exp_legs, 'exp_back': exp_back, 'exp_core': exp_core, 'exp_shoulders': exp_shoulders, 'exp_arms': exp_arms}

if __name__ == "__main__":
    # scheduler = APScheduler()
    # scheduler.init_app(app)
    # scheduler.add_job(id='Scheduledtask', func = registertask,  trigger='interval', seconds=7)
    # scheduler.init_app(app)
    # scheduler.add_job(id='Scheduledtask', func = registertask,  trigger='interval', seconds=7)
    # scheduler.init_app(app)
    scheduler.start()
    app.run()
