from flask import Flask, render_template, redirect, url_for, request, session
from flask_mysqldb import MySQL
import datetime
import pytz
from datetime import datetime
from datetime import timedelta
import MySQLdb.cursors
import re
import bcrypt
import smtplib, ssl, certifi

app = Flask(__name__)

# Secret key for sessions
app.secret_key = 'my_key'

# Browser Caching turned off
app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 0

# MySql config
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'tempuser1'
app.config['MYSQL_PASSWORD'] = 'temppass1'
app.config['MYSQL_DB'] = 'tempdb1'
mysql = MySQL(app)


@app.route('/')
def index():
    cursor = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
    cursor.execute('SELECT * FROM temptable1 WHERE name = \'mac\'')
    account = cursor.fetchone()
    name = account['name']
    print(name)
    return redirect(url_for('gateway'))

@app.route('/gateway')
def gateway():
    return render_template('gateway.html')

@app.route('/homepage')
def homepage():
    return render_template('homepage.html')

@app.after_request
def add_header(r):
    """
    Add headers to both force latest IE rendering engine or Chrome Frame,
    and also to cache the rendered page for 10 minutes.
    """
    r.headers["Cache-Control"] = "no-cache, no-store, must-revalidate"
    r.headers["Pragma"] = "no-cache"
    r.headers["Expires"] = "0"
    r.headers['Cache-Control'] = 'public, max-age=0'
    return r

if __name__ == "__main__":
    app.run(debug = True)
