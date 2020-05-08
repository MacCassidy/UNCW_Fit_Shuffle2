# UNCW_Fit_Shuffle2
CSC 450 Final Project  
Team Dirty Devs

A mobile web fitness application.

## Local Server Setup
### Python Dependency Installations
[Intall Python](https://wiki.python.org/moin/BeginnersGuide/Download) and ensure pip is installed with it.

You may also want to follow this [guide for pip venv](https://packaging.python.org/guides/installing-using-pip-and-virtual-environments/) to setup a virtual environment to avoid affecting other python code and environments, but this is not required.  Currently our setup is not using pipenv to manage the package and dependencies, so you would need to use venv if you want to avoid affecting other Python or package versions.

Prior to running the `pip install` commands below, you may also want to run [`pip install wheel`](https://wheel.readthedocs.io/en/latest/installing.html) since some of the packages use wheel which allows you to avoid recompiling software every time during pip installs.  However, it is not required and will still complete package installs even if you see messages about wheel.

Run `pip install -r requirements.txt` from this directory.

### MySQL Database Setup
- [Install MySQL Server](https://dev.mysql.com/doc/refman/8.0/en/installing.html) and ensure it is running
- Run the following SQL queries and scripts from the MySQL server:
```sql
CREATE DATABASE tempdb1;
use tempdb1;
source \your\path\to\file\create_Tables.sql;
```