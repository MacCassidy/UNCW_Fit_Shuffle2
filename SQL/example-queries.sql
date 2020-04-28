Accounts:

account_id INT NOT NULL UNIQUE AUTO_INCREMENT,
username VARCHAR(25) NOT NULL,
email VARCHAR(50) NOT NULL UNIQUE,
password VARCHAR(60) NOT NULL,
logged_in BOOLEAN NOT NULL,
age TINYINT NOT NULL check(age > 13 and age < 65),
height_in TINYINT NOT NULL CHECK(height_in >= 0 and height_in < 12),
height_ft TINYINT NOT NULL CHECK(height_ft >= 3 and height_ft <= 8),
gender VARCHAR(6) NOT NULL CHECK(gender IN ('male', 'female')),
timezone VARCHAR(36) NOT NULL CHECK(timezone IN ('America/New_York', 'America/Merida', 'America/Boise', 'America/Dawson', 'America/Anchorage', 'Pacific/Honolulu', 'America/Phoenix')),
exp_cardio VARCHAR(12) NOT NULL CHECK(exp_cardio IN ('beginner', 'novice', 'intermediate', 'experienced')),
exp_chest VARCHAR(12) NOT NULL CHECK(exp_chest IN ('beginner', 'novice', 'intermediate', 'experienced')),
exp_legs VARCHAR(12) NOT NULL CHECK(exp_legs IN ('beginner', 'novice', 'intermediate', 'experienced')),
exp_back VARCHAR(12) NOT NULL CHECK(exp_back IN ('beginner', 'novice', 'intermediate', 'experienced')),
exp_core VARCHAR(12) NOT NULL CHECK(exp_core IN ('beginner', 'novice', 'intermediate', 'experienced')),
exp_shoulders VARCHAR(12) NOT NULL CHECK(exp_shoulders IN ('beginner', 'novice', 'intermediate', 'experienced')),
exp_arms VARCHAR(12) NOT NULL CHECK(exp_arms IN ('beginner', 'novice', 'intermediate', 'experienced')),
password_change_code INT UNIQUE CHECK(password_change_code <= 10000000 and password_change_code >= 99999999),
created DECIMAL(16,6) NOT NULL,
last_activity DECIMAL(16,6) NOT NULL,
PRIMARY KEY(account_id)



Sessions:

session_id INT NOT NULL UNIQUE AUTO_INCREMENT,
account_id INT NOT NULL,
category VARCHAR(10) NOT NULL CHECK(category IN ('cardio', 'chest', 'legs', 'back', 'core', 'shoulders', 'arms', 'stretch')),
difficulty VARCHAR(12) NOT NULL CHECK(difficulty IN ('beginner', 'novice', 'intermediate', 'experienced')),
saved BOOLEAN NOT NULL DEFAULT 0,
completed BOOLEAN NOT NULL DEFAULT 0,
time_start DECIMAL(16,6) NOT NULL,
time_out DECIMAL(16,6) NOT NULL,
time_restart DECIMAL(16, 6),
time_stop DECIMAL(16, 6),
total_time DECIMAL(10,3),
timezone VARCHAR(20) NOT NULL CHECK(timezone IN ('America/New_York', 'America/Merida', 'America/Boise', 'America/Dawson', 'America/Anchorage', 'Pacific/Honolulu', 'America/Phoenix')),
previous_session INT NOT NULL DEFAULT 0,
created DECIMAL(16,6) NOT NULL,
PRIMARY KEY(session_id),
FOREIGN KEY(account_id) REFERENCES Accounts(account_id) ON DELETE CASCADE




Workouts:

workout_id INT NOT NULL UNIQUE AUTO_INCREMENT,
workout_name VARCHAR(30) NOT NULL UNIQUE,
category VARCHAR(10) NOT NULL CHECK(category IN ('cardio', 'chest', 'legs', 'back', 'core', 'shoulders', 'arms', 'stretch')),
beginner_reps INT,
beginner_sets INT,
beginner_weight VARCHAR(20),
beginner_pace VARCHAR(20),
beginner_time_limit INT,
beginner_rest_period INT,
novice_reps INT,
novice_sets INT,
novice_weight VARCHAR(20),
novice_pace VARCHAR(20),
novice_time_limit INT,
novice_rest_period INT,
intermediate_reps INT,
intermediate_sets INT,
intermediate_weight VARCHAR(20),
intermediate_pace VARCHAR(20),
intermediate_time_limit INT,
intermediate_rest_period INT,
experienced_reps INT,
experienced_sets INT,
experienced_weight VARCHAR(20),
experienced_pace VARCHAR(20),
experienced_time_limit INT,
experienced_rest_period INT,
info VARCHAR(255),
video_file_name VARCHAR(40),
created DECIMAL(16,6) NOT NULL,
PRIMARY KEY(workout_id)



Sesh_Workout:

session_id INT NOT NULL,
workout_id INT NOT NULL,
order_num INT NOT NULL CHECK(order_num >= 4 and order_num <= 20),
completed BOOLEAN NOT NULL DEFAULT 0,
PRIMARY KEY(session_id, workout_id),
FOREIGN KEY(session_id) REFERENCES Sessions(session_id) ON DELETE CASCADE,
FOREIGN KEY(workout_id) REFERENCES Workouts(workout_id) ON DELETE CASCADE














-- Query Examples:

-- Some Queries we've already Implemented
SELECT * FROM Accounts WHERE email = 'arbitrary';
SELECT * FROM Accounts WHERE email = 'arbitrary' and account_id ='arbitrary';

-- Some basic Join Functions
-- gets all of the sessions of a certain user and displays them in Decending order, this will be changed
SELECT S.session_id, S.category, S.difficulty FROM Accounts as A NATURAL JOIN Sessions as S WHERE A.account_id = "Trivial account id" ORDER BY S.session_id DESC;
-- gets all of the workouts for a certain session (in order from first workout to last in the session)
SELECT W.workout_id, W.workout_name From Sessions as S, Sesh_Workout as SW, Workouts as W WHERE S.session_id = SW.session_id and SW.workout_id = W.workout_id and S.session_id = 'Arbitrary' and S.completed = True ORDER BY SW.order_num ASC;

-- Some aggregation queries
-- gets the most recent completed session for an account
SELECT MAX(S.session_id) as Last_completed_session From Accounts as A NATURAL JOIN Sessions as S WHERE A.account_id="arbitrary" and S.completed = True;
-- gets the count of cardio sessions for an account
SELECT COUNT(*) as cardio_session_count From Accounts as A NATURAL JOIN Sessions as S WHERE A.account_id = 'arbitrary' and S.category = 'cardio';
-- gets the number of completed sessions for each Account
SELECT A.account_id, COUNT(S.session_id) as completed_session_count FROM Accounts as A NATURAL JOIN Sessions as S WHERE S.completed = True GROUP BY A.account_id;

-- Nested Sub-Query For getting the count of workouts of each session of each user
Select A.account_id, COUNT(W1.workout_id) as workouts_count FROM Account as A, (SELECT * FROM Sessions as S, Sesh_Workout as SW, Workouts as W WHERE S.session_id = SW.session_id and SW.workout_id = W.workout_id and S.completed = True) as W1 WHERE W1.account_id = A.account_id GROUP BY A.account_id;


-- Modification Query
UPDATE Accounts SET logged_in = TRUE, last_activity = "New Time Stamp" WHERE account_id = "arbitrary";




CREATE VIEW current_user_view AS SELECT username,
email, age, height_in, height_ft, gender, timezone, exp_cardio, exp_chest,
exp_legs, exp_back, exp_core, exp_shoulders, exp_arms
FROM Accounts
WHERE email = 'example_email';



trigger before updating, make sure that a user is logged in
trigger if a user tries to log into an account is currently logged in
trigger trigger when sessoin or workout gets deleted that it gets deleted from Sesh_workouts
trigger for updates on sessions with times
