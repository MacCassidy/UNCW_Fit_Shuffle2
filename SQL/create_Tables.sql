use tempdb1;
SET FOREIGN_KEY_CHECKS=0;
drop table IF EXISTS Accounts;
SET FOREIGN_KEY_CHECKS=1;
CREATE TABLE Accounts (account_id INT NOT NULL UNIQUE AUTO_INCREMENT,
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
                      register_code INT CHECK(register_code >= 1000 and register_code <= 9999),
                      password_change_code INT CHECK(password_change_code >= 1000 and password_change_code <= 9999),
                      created DECIMAL(16,6) NOT NULL,
                      last_activity DECIMAL(16,6) NOT NULL,
                      PRIMARY KEY(account_id)
) ENGINE=INNODB;
SET FOREIGN_KEY_CHECKS=0;
drop table IF EXISTS Sessions;
SET FOREIGN_KEY_CHECKS=1;
CREATE TABLE Sessions(session_id INT NOT NULL UNIQUE AUTO_INCREMENT,
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
) ENGINE=INNODB;
SET FOREIGN_KEY_CHECKS=0;
drop table IF EXISTS Workouts;
SET FOREIGN_KEY_CHECKS=1;
CREATE TABLE Workouts(workout_id INT NOT NULL UNIQUE AUTO_INCREMENT,
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
) ENGINE=INNODB;
SET FOREIGN_KEY_CHECKS=0;
drop table IF EXISTS Sesh_Workout;
SET FOREIGN_KEY_CHECKS=1;
CREATE TABLE Sesh_Workout(session_id INT NOT NULL,
                          workout_id INT NOT NULL,
                          order_num INT NOT NULL CHECK(order_num >= 4 and order_num <= 20),
                          completed BOOLEAN NOT NULL DEFAULT 0,
                          PRIMARY KEY(session_id, workout_id),
                          FOREIGN KEY(session_id) REFERENCES Sessions(session_id) ON DELETE CASCADE,
                          FOREIGN KEY(workout_id) REFERENCES Workouts(workout_id) ON DELETE CASCADE
) ENGINE=INNODB;
