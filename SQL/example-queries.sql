
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
