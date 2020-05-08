## UNCW_Fit_Shuffle2
CSC 450 Final Project  
A mobile web fitness application.

### Python Dependency Installations to Run Server Locally
[Intall Python](https://wiki.python.org/moin/BeginnersGuide/Download) and ensure pip is installed with it.

You may also want to follow this [guide for pip venv](https://packaging.python.org/guides/installing-using-pip-and-virtual-environments/) to setup a virtual environment to avoid affecting other python environments, but this is not required.  Currently our setup is not using pipenv to manage the package and dependencies, so you would need to use venv if you wanted to avoid affecting other Python or package versions.

Prior to running the `pip install` commands below, you may want to run [`pip install wheel`](https://wheel.readthedocs.io/en/latest/installing.html) since some of the packages use wheel which allows you to avoid recompiling software during installation.  However, it is not required and will still complete install even if you see wheel not found messages.

Run `pip install -r requirements.txt` or alternatively run the following commands:
`pip install flask flask-mysqldb flask_apscheduler pytz bcrypt validate_email certifi nylas`

### MySQL Database Setup for Running Server Locally
- [Install MySQL Server](https://dev.mysql.com/doc/refman/8.0/en/installing.html) and ensure it is running
- Run the following SQL queries and scripts from the MySQL server:
```sql
CREATE DATABASE tempdb1;
use tempdb1;
source \your\path\to\file\create_Tables.sql;
```