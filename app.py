from flask import Flask, render_template, redirect, url_for, request, session, jsonify
from flask_mysqldb import MySQL
import datetime
import pytz
import time
from datetime import datetime
from datetime import timedelta
import MySQLdb.cursors
import re
import bcrypt
import smtplib, ssl, certifi
from validate_email import validate_email
from flask_apscheduler import APScheduler
import random
from nylas import APIClient

app = Flask(__name__)
# mac = 'mac mayneneee'
nylas = APIClient(
    '1yrhj5hcf36bptmveg1fugcdc',
    'mi8jyca4jz1s4jj0dx66zc0s',
    'kuJWN5GdP30THr9cBKzU8aPtKMc8Ar'
)

# Browser Caching turned off
app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 0
app.config['SCHEDULER_API_ENABLED'] = True
# MySql config
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'tempuser1'
app.config['MYSQL_PASSWORD'] = 'Meenoo737!'
app.config['MYSQL_DB'] = 'tempdb1'
app.config['MYSQL_PORT'] = 3306
app.config['PERMANENT_SESSION_LIFETIME'] = timedelta(minutes = 20)
# session encyption key
app.secret_key = 'my_key'
mysql = MySQL(app)
scheduler = APScheduler()
scheduler.init_app(app)

# Request Pre/Post processors*********************************************************************************************
@app.before_first_request
def before_first_request_func():
    scheduler.start()

@app.before_request
def before_request():
    session.modified = True

# Routes for WebPage Requests*********************************************************************************************
@app.route('/', methods=['GET'])
def index():
    # key_list = list(session.keys())
    # for key in key_list:
    #     session.pop(key)
    if 'logged_in' in session and not ('register_code' in session) and not ('password_change_code' in session):
        if session['logged_in'] == 1:
            return redirect(url_for('profile'))
    if 'register_code' in session:
        if session['register_code']:
            return redirect(url_for('registercode'))
    if 'password_change_code' in session:
        if session['password_change_code']:
            return redirect(url_for('passwordchange'))
    else:
        key_list = list(session.keys())
        for key in key_list:
            session.pop(key)
        return redirect(url_for('gateway'))

@app.route('/gateway', methods=['GET'])
def gateway():
    if 'logged_in' in session and not ('register_code' in session) and not ('password_change_code' in session):
        if session['logged_in'] == 1:
            return redirect(url_for('profile'))
    if 'register_code' in session:
        if session['register_code']:
            return redirect(url_for('registercode'))
    if 'password_change_code' in session:
        if session['password_change_code']:
            return redirect(url_for('passwordchange'))
    else:
        key_list = list(session.keys())
        for key in key_list:
            session.pop(key)
        return render_template('gateway.html')

@app.route('/profile', methods=['GET'])
def profile():
    if 'logged_in' in session and not ('register_code' in session) and not ('password_change_code' in session):
        if session['logged_in'] == 1:
            account_id = session['account_id']
            email = session['email']
            cursor = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
            cursor.execute("SELECT * FROM Accounts WHERE email = %(email)s and account_id = %(account_id)s", {'email': email, 'account_id': account_id})
            account = cursor.fetchone()
            email = account['email']
            username = account['username']
            age = account['age']
            height_ft = account['height_ft']
            height_in = account['height_in']
            gender = account['gender']
            timezone = account['timezone']
            # 'America/New_York', 'America/Merida', 'America/Boise', 'America/Dawson', 'America/Anchorage', 'Pacific/Honolulu'
            if timezone == 'America/New_York':
                timezone = 'eastern'
            elif timezone == 'America/Dawson':
                timezone = 'pacific'
            elif timezone == 'America/Anchorage':
                timezone = 'alaska'
            elif timezone == 'America/Merida':
                timezone = 'central'
            elif timezone == 'America/Boise':
                timezone = 'mountain'
            elif timezone == 'Pacific/Honolulu':
                timezone = 'hawaii'
            cardio_exp = account['exp_cardio']
            chest_exp = account['exp_chest']
            legs_exp = account['exp_legs']
            back_exp = account['exp_back']
            core_exp = account['exp_core']
            shoulders_exp = account['exp_shoulders']
            arms_exp = account['exp_arms']
            unix_timestamp = str(datetime.now().timestamp())
            try:
                cursor.execute("UPDATE Accounts SET logged_in = 1, last_activity = " + unix_timestamp + " WHERE account_id = " + str(account['account_id']))
            except Exception as e:
                print("Update exception:")
                print(e)
            mysql.connection.commit()
            cursor.close()
            return render_template('profile.html', email=email, username=username, age=age, height_ft=height_ft, height_in=height_in, gender=gender, timezone=timezone, cardio_exp=cardio_exp, chest_exp=chest_exp, legs_exp=legs_exp, back_exp=back_exp, core_exp=core_exp, shoulders_exp=shoulders_exp, arms_exp=arms_exp)
    if 'register_code' in session:
        if session['register_code']:
            return redirect(url_for('registercode'))
    if 'password_change_code' in session:
        if session['password_change_code']:
            return redirect(url_for('passwordchange'))
    else:
        key_list = list(session.keys())
        for key in key_list:
            session.pop(key)
        return redirect(url_for('gateway'))


@app.route('/editprofile', methods=['GET'])
def editprofile():
    if 'logged_in' in session and not ('register_code' in session) and not ('password_change_code' in session):
        if session['logged_in'] == 1:
            account_id = session['account_id']
            email = session['email']
            cursor = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
            cursor.execute("SELECT * FROM Accounts WHERE email = %(email)s and account_id = %(account_id)s", {'email': email, 'account_id': account_id})
            account = cursor.fetchone()
            email = account['email']
            username = account['username']
            age = account['age']
            height_ft = account['height_ft']
            height_in = account['height_in']
            gender = account['gender']
            timezone = account['timezone']
            # 'America/New_York', 'America/Merida', 'America/Boise', 'America/Dawson', 'America/Anchorage', 'Pacific/Honolulu'
            if timezone == 'America/New_York':
                timezone = 'eastern'
            elif timezone == 'America/Dawson':
                timezone = 'pacific'
            elif timezone == 'America/Anchorage':
                timezone = 'alaska'
            elif timezone == 'America/Merida':
                timezone = 'central'
            elif timezone == 'America/Boise':
                timezone = 'mountain'
            elif timezone == 'Pacific/Honolulu':
                timezone = 'hawaii'
            cardio_exp = account['exp_cardio']
            chest_exp = account['exp_chest']
            legs_exp = account['exp_legs']
            back_exp = account['exp_back']
            core_exp = account['exp_core']
            shoulders_exp = account['exp_shoulders']
            arms_exp = account['exp_arms']
            unix_timestamp = str(datetime.now().timestamp())
            try:
                cursor.execute("UPDATE Accounts SET logged_in = 1, last_activity = " + unix_timestamp + " WHERE account_id = " + str(account['account_id']))
            except Exception as e:
                print("Update exception:")
                print(e)
            mysql.connection.commit()
            cursor.close()
            return render_template('editprofile.html', email=email, username=username, age=age, height_ft=height_ft, height_in=height_in, gender=gender, timezone=timezone, cardio_exp=cardio_exp, chest_exp=chest_exp, legs_exp=legs_exp, back_exp=back_exp, core_exp=core_exp, shoulders_exp=shoulders_exp, arms_exp=arms_exp)
    if 'register_code' in session:
        if session['register_code']:
            return redirect(url_for('registercode'))
    if 'password_change_code' in session:
        if session['password_change_code']:
            return redirect(url_for('passwordchange'))
    else:
        key_list = list(session.keys())
        for key in key_list:
            session.pop(key)
        return redirect(url_for('gateway'))

@app.route('/registercode', methods=['POST','GET'])
def registercode():
    if 'logged_in' in session and not ('register_code' in session) and not ('password_change_code' in session):
        if session['logged_in'] == 1:
            return redirect(url_for('profile'))
    if 'password_change_code' in session:
        if session['password_change_code']:
            return redirect(url_for('passwordchange'))
    if 'register_code' in session and 'email' in session and 'username' in session and session['logged_in'] == 0:
        try:
            cursor = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
            cursor.execute("SELECT * FROM Accounts WHERE email = %(email)s", {'email': session['email']})
            account = cursor.fetchone()
            if not account:
                key_list = list(session.keys())
                for key in key_list:
                    session.pop(key)
                cursor.close()
                return redirect(url_for('gateway'))
            else:
                cursor.close()
                return render_template('registercode.html', email=session['email'], username=session['username'])
        except:
            pass
        return render_template('registercode.html', email=session['email'], username=session['username'])
    else:
        key_list = list(session.keys())
        for key in key_list:
            session.pop(key)
        return redirect(url_for('gateway'))

# harambeyeet
@app.route('/passwordchange', methods=['POST','GET'])
def passwordchange():
    if 'logged_in' in session and not ('register_code' in session) and not ('password_change_code' in session):
        if session['logged_in'] == 1:
            return redirect(url_for('profile'))
    if 'register_code' in session:
        if session['register_code']:
            return redirect(url_for('registercode'))
    if 'password_change_code' in session and 'email' in session and session['logged_in'] == 0:
        pass
        # try:
        #     cursor = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
        #     cursor.execute("SELECT * FROM Accounts WHERE email = %(email)s", {'email': session['email']})
        #     account = cursor.fetchone()
        #     if not account:
        #         key_list = list(session.keys())
        #         for key in key_list:
        #             session.pop(key)
        #         cursor.close()
        #         return redirect(url_for('gateway'))
        #     else:
        #         cursor.close()
        #         return render_template('registercode.html', email=session['email'], username=session['username'])
        # except:
        #     pass
        # return render_template('registercode.html', email=session['email'], username=session['username'])
    else:
        key_list = list(session.keys())
        for key in key_list:
            session.pop(key)
        return redirect(url_for('gateway'))


# Routes to handle Ajax Requests*********************************************************************************************
@app.route('/login', methods=['POST'])
def login():
    if 'email' in request.form and 'password' in request.form:
        email = request.form['email']
        password = request.form['password']
        if password and email:
            cursor = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
            cursor.execute("SELECT * FROM Accounts WHERE email = %(email)s", {'email': email})
            account = cursor.fetchone()
            if account and (not account['register_code']):
                byte_password = bytes(password, 'utf-8')
                password_hashed = bytes(account['password'], 'utf-8')
                if bcrypt.checkpw(byte_password, password_hashed):
                    last_act = account['last_activity']
                    logged_in = account['logged_in']
                    current_time = datetime.now()
                    last_act_datetime = datetime.fromtimestamp(last_act)
                    time_diff = ((current_time - last_act_datetime).total_seconds() / 60)
                    if (account['logged_in'] == 1 and time_diff > 20) or account['logged_in'] == 0:
                        current_timestamp = current_time.timestamp()
                        cursor.execute("UPDATE Accounts SET logged_in = TRUE, last_activity = " + str(current_timestamp) + " WHERE account_id = " + str(account['account_id']))
                        mysql.connection.commit()
                        cursor.close()
                        session.permanent = True
                        session['logged_in'] = 1
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


@app.route('/logout', methods=['POST', 'GET'])
def logout():
    if 'logged_in' in session:
        account_id = session['account_id']
        email = session['email']
        cursor = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
        cursor.execute("UPDATE Accounts SET logged_in = 0, last_activity = %(last_activity)s WHERE email = %(email)s", {'email': email, 'last_activity': datetime.now().timestamp()})
        mysql.connection.commit()
        cursor.close()
        key_list = list(session.keys())
        for key in key_list:
            session.pop(key)
        return redirect(url_for('gateway'))
    else:
        key_list = list(session.keys())
        for key in key_list:
            session.pop(key)
        return redirect(url_for('gateway'))


@app.route('/register', methods=['POST'])
def register():
    if 'username' in request.form and 'email' in request.form and 'password' in request.form and 'age' in request.form and 'height_ft' in request.form and 'height_in' in request.form and 'gender' in request.form and 'timezone' in request.form and 'exp_cardio' in request.form and 'exp_chest' in request.form and 'exp_legs' in request.form and 'exp_back' in request.form and 'exp_core' in request.form and 'exp_shoulders' in request.form and 'exp_arms' in request.form:
        username = request.form['username']
        email = request.form['email']
        password = request.form['password']
        if password:
            password = password.encode()
            hashed_pass = bcrypt.hashpw(password, bcrypt.gensalt()).decode()
            password = hashed_pass
        else:
            return jsonify({'error' : 'missing data'})
        logged_in = 0
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
        register_code = random.randint(1000, 9999)
        created = str(datetime.now().timestamp())
        last_activity = str(datetime.now().timestamp())
        if username and email and hashed_pass and age and height_ft and height_in and gender and timezone and exp_cardio and exp_chest and exp_legs and exp_back and exp_core and exp_shoulders and exp_arms:
            cursor = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
            cursor.execute("SELECT * FROM Accounts WHERE email = %(email)s", {'email': email})
            existing_account = cursor.fetchone()
            if existing_account:
                cursor.close()
                return jsonify({'error' : 'invalid email'})
            else:
                cursor.execute("INSERT INTO Accounts (username,email,password,logged_in,age,height_ft,height_in,gender,timezone, exp_cardio, exp_chest, exp_legs, exp_back, exp_core, exp_shoulders, exp_arms, register_code, created, last_activity  ) VALUES (  %(username)s, %(email)s, %(password)s, %(logged_in)s, %(age)s, %(height_ft)s, %(height_in)s, %(gender)s, %(timezone)s, %(exp_cardio)s, %(exp_chest)s, %(exp_legs)s, %(exp_back)s, %(exp_core)s, %(exp_shoulders)s, %(exp_arms)s, %(register_code)s, %(created)s, %(last_activity)s )", {'username': username, 'email': email,  'password': password, 'logged_in': logged_in, 'age': age, 'height_ft': height_ft, 'height_in': height_in, 'gender': gender, 'timezone': timezone, 'exp_cardio':exp_cardio, 'exp_chest': exp_chest, 'exp_legs': exp_legs, 'exp_back': exp_back, 'exp_core': exp_core, 'exp_shoulders': exp_shoulders, 'exp_arms': exp_arms, 'created': created, 'register_code': register_code, 'last_activity': last_activity})
                mysql.connection.commit()
                cursor.execute("SELECT * from Accounts WHERE email = %(email)s", {'email': email})
                account = cursor.fetchone()
                if not account:
                    cursor.close()
                    return jsonify({'error' : 'missing data'})
                else:
                    cursor.close()
                    session.permanent = True
                    session['logged_in'] = 0
                    session['email'] = account['email']
                    session['account_id'] = account['account_id']
                    session['register_code'] = account['register_code']
                    reg_code = account['register_code']
                    session['username'] = account['username']
                    rec_email = account['email']
                    created_stamp = account['created']
                    try:
                        draft = nylas.drafts.create()
                        draft.subject = "UNCW fit shuffle app"
                        draft.body = "Thanks for signing up {name}! Here is your 4-digit registeration code: {code}".format( name = username, code= reg_code)
                        draft.to = [{'name': username, 'email': email}]
                        draft.send()
                    except:
                        pass
                    cur_var = str(datetime.now() + timedelta(seconds=1200))[:19]
                    sched_id = 'Registertask-' + account['email']
                    scheduler.add_job(name="RegisterTask", id=sched_id, func = registercheck,  trigger='date', run_date=cur_var, kwargs = { 'u_id': str(account['account_id']), 'email': str(account['email']), 'created': str(created_stamp), 'code': str(account['register_code'])} )
                    return jsonify({'error' : 'none'})
        else:

            return jsonify({'error' : 'missing data'})
    else:
        return jsonify({'error' : 'missing data'})

@app.route('/registerconfirm', methods=['POST'])
def registerconfirm():
    if 'register_code' in request.form and 'register_code' in session and 'status' in request.form and 'email' in session and 'account_id' in session:
        if request.form['status'] == 'cancel':
            try:
                email = session['email']
                cursor = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
                cursor.execute("DELETE From Accounts WHERE email = %(email)s", {'email': email})
                mysql.connection.commit()
                cursor.close()
                # scheduler.remove_job("Registertask-" + email)
                key_list = list(session.keys())
                for key in key_list:
                    session.pop(key)
                return jsonify({'error' : 'canceled'})
            except Exception as e:
                print(e)
                key_list = list(session.keys())
                for key in key_list:
                    session.pop(key)
                return jsonify({'error' : 'missing data'})
        elif request.form['status'] == 'confirm':
            try:
                now = str(datetime.now().timestamp())
                email = session['email']
                account_id = session['account_id']
                code = request.form['register_code']
                cursor = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
                cursor.execute("SELECT * FROM Accounts WHERE account_id = %(u_id)s and email = %(email)s and register_code = %(code)s", {'u_id': account_id, 'email': email, 'code': code})
                account = cursor.fetchone()
                if account:
                    print('if account block')
                    cursor.execute("UPDATE Accounts Set register_code = Null,  logged_in = 1, last_activity = %(now)s Where account_id = %(u_id)s and email = %(email)s and register_code = %(code)s", {'now': now, 'u_id': account_id, 'email': email, 'code': code})
                    mysql.connection.commit()
                    cursor.close()
                    session['logged_in'] = 1
                    session.pop('register_code')
                    return jsonify({'error' : 'confirmed'})
                else:
                    return jsonify({'error' : 'invalid code'})
            except Exception as e:
                print(e)
                return jsonify({'error': 'missing data'})
        else:
            return jsonify({'error': 'missing data'})
    else:
        return jsonify({'error': 'missing data'})

@app.route('/resetpassword', methods=['POST'])
def resetpassword():
    if 'email' in request.form:
        email = request.form['email']
        try:
            cursor = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
            cursor.execute("Select * From Accounts Where email = %(email)s", {'email': email})
            account = cursor.fetchone()
            if account:
                # harambeyeet
                # make session data right
                # set password_change_code in session
                # password_change_code = random.randint(1000,9999)
                # new_last_activity = str(datetime.now().timestamp())
                # draft = nylas.drafts.create()
                # draft.subject = "UNCW fit shuffle app"
                # draft.body = "Thanks for signing up {name}! Here is your 4-digit registeration code: {code}".format( name = username, code= reg_code)
                # draft.to = [{'name': username, 'email': email}]
                # draft.send()
                username = account['username']
                email = account['email']
                last_act = account['last_activity']
                logged_in = account['logged_in']
                current_time = datetime.now()
                converted_last_act = datetime.fromtimestamp(last_act)
                time_diff = ((current_time - converted_last_act).total_seconds() / 60)
                if account['register_code'] or account['password_change_code']:
                    cursor.close()
                    return jsonify({'error': 'current code'})
                elif (account['logged_in'] == 1 and time_diff > 20) or account['logged_in'] == 0:
                    # harambeyeet
                    # do all the stuff w emailing and sheduler
                    # change logged_in to false
                    try:
                        # **harambeyeet here is where you need to be**
                        password_change_code = random.randint(1000,9999)
                        draft = nylas.drafts.create()
                        draft.subject = "Password Reset UNCW Fit Shuffle"
                        draft.body = "Hello {name}. Thanks for using UNCW Fit Shuffle! Here is your 4-digit password reset code: {code}".format( name = username, code= password_change_code)
                        draft.to = [{'name': username, 'email': email}]
                        draft.send()
                        cur_var = str(datetime.now() + timedelta(seconds=1200))[:19]
                        sched_id = 'PasswordResetTask-' + account['email']
                        scheduler.add_job(name="PasswordResetTask", id=sched_id, func = passwordresetcheck,  trigger='date', run_date=cur_var, kwargs = { 'u_id': str(account['account_id']), 'email': str(account['email']), 'code': str(account['password_change_code'])} )
                        return jsonify({'error' : 'none'})
                    except Exception as e:
                        print('Reset Password Exception (layer2):')
                        print(e)
                        cursor.close()
                        return jsonify({'error': 'missing data'})

                elif account['logged_in'] == 1 and time_diff <= 20:
                    return jsonify({'error': 'logged_in'})
                    cursor.close()
                else:
                    cursor.close()
                    return jsonify({'error': 'missing data'})

            else:
                # mysql.connection.commit()
                cursor.close()
                return jsonify({'error': 'invalid email'})
        except Exception as e:
            print('Reset Password Exception (layer1):')
            print(e)
            return jsonify({'error': 'missing data'})
    else:
        return jsonify({'error': 'missing data'})




# created_stamp = account['created']
# try:
#     draft = nylas.drafts.create()
#     draft.subject = "UNCW fit shuffle app"
#     draft.body = "Thanks for signing up {name}! Here is your 4-digit registeration code: {code}".format( name = username, code= reg_code)
#     draft.to = [{'name': username, 'email': email}]
#     draft.send()
# except:
#     pass
# cur_var = str(datetime.now() + timedelta(seconds=1200))[:19]
# sched_id = 'Registertask-' + account['email']
# scheduler.add_job(name="RegisterTask", id=sched_id, func = registercheck,  trigger='date', run_date=cur_var, kwargs = { 'u_id': str(account['account_id']), 'email': str(account['email']), 'created': str(created_stamp), 'code': str(account['register_code'])} )
# return jsonify({'error' : 'none'})


# last_act = account['last_activity']
# logged_in = account['logged_in']
# current_time_utc = datetime.utcnow()
# converted_last_act = datetime.fromtimestamp(last_act)
# time_diff = ((current_time_utc - converted_last_act).total_seconds() / 60)
# if (account['logged_in'] == 1 and time_diff > 20) or account['logged_in'] == 0:
# cake



# SCHEDULER Tasks*************************************************************************************************************
def registercheck(**kwargs):
    with scheduler.app.app_context():
        print(type(kwargs['u_id']))
        if kwargs['u_id'] and kwargs['u_id'] and kwargs['created'] and kwargs['code']:
            try:
                cursor = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
                a = kwargs['u_id']
                b = kwargs['email']
                c = kwargs['code']
                d = kwargs['created']
                cursor.execute("SELECT * FROM Accounts WHERE account_id = %(u_id)s and email = %(email)s and created = %(created)s and register_code = %(code)s", {'u_id': a, 'email': b, 'created': d, 'code': c})
                account = cursor.fetchone()
                if account['register_code']:
                    cursor.execute("DELETE FROM Accounts WHERE account_id = %(u_id)s and email = %(email)s and register_code = %(code)s", {'u_id': a, 'email': b, 'code': c})
                    mysql.connection.commit()
                    cursor.close()
                else:
                    cursor.close()
            except Exception as exc:
                print("**************RegisterCheck Task Error**************")
                print(str(exc))


if __name__ == "__main__":
    app.run()
