# select account_id, username, email, logged_in, password_change_code, register_code, last_activity from Accounts;
# delete from Accounts where register_code > 1;
# delete from Accounts where password_change_code > 1;


import datetime
import pytz
from datetime import datetime
from datetime import timedelta
import random
import time

# current_time_utc = datetime.utcnow()
# converted_last_act = datetime.fromtimestamp(last_act)
# time_diff = ((current_time_utc - converted_last_act).total_seconds() / 60)
# if (account['logged_in'] == 1 and time_diff > 20) or account['logged_in'] == 0:
# var2 = datetime.fromtimestamp(last_act)
# print(datetime.utcnow())


var1 = datetime.utcnow()
var2 = datetime.now()
var3 = time.time()
print(" ")
print("var1:")
print(var1)
print(type(var1))
print("datetime.utcnow() : " + str(var1.timestamp()))
print(datetime.fromtimestamp(var1.timestamp()))
# 1588952726.160881
print(" ")
print(var2)
print("var2:")
print(type(var2))
print("datetime.now() : " + str(var2.timestamp()))
print(datetime.fromtimestamp(var2.timestamp()))
# 1588938326.160895
print(" ")
print("var3:")
print(type(var3))
print("time.time() : " + str(var3))
# 1588938326.1609

print("\nDiff:")
diff = ((datetime.now() - datetime.fromtimestamp(1588938326.1609)).total_seconds() / 60)
print(diff)
print(type(diff))
# datetime.fromtimestamp(1588938326.1609)
# diff = ((datetime.now() - datetime.fromtimestamp(1588938326.1609)).total_seconds() / 60)
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
# print(datetime.fromtimestamp(var1.timestamp()))
# print(datetime.fromtimestamp(var2.timestamp()))
# print(converted_last_act)

# cur_var = str(datetime.now() + timedelta(seconds=1200))[:19]
# cur_var = str(datetime.now() + timedelta(seconds=1200))
# print(timedelta(seconds=1200))

# last_act = account['last_activity']
# logged_in = account['logged_in']
# current_time_utc = datetime.utcnow()
# converted_last_act = datetime.fromtimestamp(last_act)
# time_diff = ((current_time_utc - converted_last_act).total_seconds() / 60)
# if (account['logged_in'] == 1 and time_diff > 20) or account['logged_in'] == 0:


# cur_var = str(datetime.now() + timedelta(seconds=1200))[:19]
# sched_id = 'Registertask-' + account['email']
# scheduler.add_job(name="RegisterTask", id=sched_id, func = registercheck,  trigger='date', run_date=cur_var, kwargs = { 'u_id': str(account['account_id']), 'email': str(account['email']), 'created': str(created_stamp), 'code': str(account['register_code'])} )
# return jsonify({'error' : 'none'})
