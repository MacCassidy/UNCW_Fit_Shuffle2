# This File is for scratch work just ignore it
# lower case all email inputs into DB
# refactor all routes (make sure the pass word change code and register code aren't there)

import datetime
import pytz
from datetime import datetime
from datetime import timedelta
import random
import time

# select account_id, username, email, logged_in, password_change_code, register_code, last_activity from Accounts;
# delete from Accounts where register_code > 1;
# delete from Accounts where password_change_code > 1;

# var = {'x': ''}
# if not var['3']:
#     print('ayy')

# var1 = datetime.utcnow()
# var2 = datetime.now()
# var3 = time.time()
# print(" ")
# print("var1:")
# print(var1)
# print(type(var1))
# print("datetime.utcnow() : " + str(var1.timestamp()))
# print(datetime.fromtimestamp(var1.timestamp()))
# 1588952726.160881
# print(" ")
# print(var2)
# print("var2:")
# print(type(var2))
# print("datetime.now() : " + str(var2.timestamp()))
# print(datetime.fromtimestamp(var2.timestamp()))
# 1588938326.160895
# print(" ")
# print("var3:")
# print(type(var3))
# print("time.time() : " + str(var3))
# 1588938326.1609

# print("\nDiff:")
# diff = ((datetime.now() - datetime.fromtimestamp(1588938326.1609)).total_seconds() / 60)
# print(diff)
# print(type(diff))


# cvar1 = datetime.utcnow()
# cvar2 = datetime.now()
# print(" ")
# print("datetime.utcnow()")
# print(cvar1)
# print(" ")
# print("datetime.now()")
# print(cvar2)
# print(" ")
# last_act = time.time()
# cur_var = str(datetime.now() + timedelta(seconds=1200))[:19]
# cur_var = str(datetime.now() + timedelta(seconds=1200))
# print(timedelta(seconds=1200))
# stg = ""
# print(stg.lower())
# if 0:
#     print('triigers')
# else:
#     print('yoyoyoyoyo')
@app.route('/login', methods=['POST'])
def login():
    if 'email' in request.form and 'password' in request.form:
        email = request.form['email']
        password = request.form['password']
        if password and email:
            try:
                email = email.lower()
                cursor = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
                cursor.execute("SELECT * FROM Accounts WHERE email = %(email)s", {'email': email})
                account = cursor.fetchone()
                if account:
                    byte_password = bytes(password, 'utf-8')
                    password_hashed = bytes(account['password'], 'utf-8')
                    if bcrypt.checkpw(byte_password, password_hashed):
                        pass
                        if account['register_code'] or account['password_change_code']:
                            return jsonify({'error' : 'current code'})
                        else:
                            last_act = account['last_activity']
                            logged_in = account['logged_in']
                            current_time = datetime.now()
                            last_act_datetime = datetime.fromtimestamp(last_act)
                            time_diff = ((current_time - last_act_datetime).total_seconds() / 60)
                            if (account['logged_in'] == 1 and time_diff > 20) or account['logged_in'] == 0:
                                current_timestamp = current_time.timestamp()
                                cursor.execute("UPDATE Accounts SET logged_in = 1, last_activity = " + str(current_timestamp) + " WHERE account_id = " + str(account['account_id']))
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
                                return jsonify({'error' : 'missing data'})
                    else:
                        cursor.close()
                        return jsonify({'error' : 'invalid password'})
                else:
                    cursor.close()
                    return jsonify({'error' : 'invalid email'})
            except Exception as e:
                print("****************/login exception (layer1)****************")
                print(e)
                return jsonify({'error' : 'missing data'})
        else:
            return jsonify({'error' : 'missing data'})
    else:
        return jsonify({'error' : 'missing data'})









@app.route('/register', methods=['POST'])
def register():
    if 'username' in request.form and 'email' in request.form and 'password' in request.form and 'age' in request.form and 'height_ft' in request.form and 'height_in' in request.form and 'gender' in request.form and 'timezone' in request.form and 'exp_cardio' in request.form and 'exp_chest' in request.form and 'exp_legs' in request.form and 'exp_back' in request.form and 'exp_core' in request.form and 'exp_shoulders' in request.form and 'exp_arms' in request.form:
        username = request.form['username']
        email = request.form['email']
        password = request.form['password']
        age = request.form['age']
        



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
