-- password: mypassword
INSERT INTO Accounts (username,
                      email,
                      password,
                      logged_in,
                      age,
                      height_in,
                      height_ft,
                      gender,
                      timezone,
                      exp_cardio,
                      exp_chest,
                      exp_legs,
                      exp_back,
                      exp_core,
                      exp_shoulders,
                      exp_arms,
                      created,
                      last_activity) VALUES
                     ('Mac',
                      'mac_cassidy@ymail.com',
                      '$2b$12$KwrYAhmoaHzexKqFExP.wuGbOwqxfziRCOijBqqRm3PA05E1.QLhm',
                      FALSE,
                      24,
                      7,
                      5,
                      'male',
                      'America/New_York',
                      'beginner',
                      'intermediate',
                      'intermediate',
                      'novice',
                      'novice',
                      'intermediate',
                      'experienced',
                      1585211987.176413,
                      1585411905.674891
);
-- password: password
INSERT INTO Accounts (username,
                      email,
                      password,
                      logged_in,
                      age,
                      height_in,
                      height_ft,
                      gender,
                      timezone,
                      exp_cardio,
                      exp_chest,
                      exp_legs,
                      exp_back,
                      exp_core,
                      exp_shoulders,
                      exp_arms,
                      created,
                      last_activity) VALUES
                      ('Evan',
                       'jonnyapple1001@gmail.com',
                       '$2b$12$QUFP2gB.N1y0RDLt.qD.8.VPJqyOIwV1zXpGtkcCo7TOldJnUD5n6',
                       False,
                       22,
                       9,
                       5,
                       'male',
                       'America/Merida',
                       'beginner',
                       'intermediate',
                       'novice',
                       'intermediate',
                       'beginner',
                       'novice',
                       'novice',
                       1585311977.176413,
                       1585419905.674891
);
-- password: colepassword
INSERT INTO Accounts (username,
                      email,
                      password,
                      logged_in,
                      age,
                      height_in,
                      height_ft,
                      gender,
                      timezone,
                      exp_cardio,
                      exp_chest,
                      exp_legs,
                      exp_back,
                      exp_core,
                      exp_shoulders,
                      exp_arms,
                      created,
                      last_activity) VALUES
                      ('Cole',
                       'cole@gmail.com',
                       '$2b$12$LaczxaUdSOiyRbC/jyRfkufezVXhoCllWfGVYRB4xyKOBQoC/jCMS',
                        FALSE,
                        20,
                        10,
                        4,
                        'female',
                        'America/Dawson',
                        'intermediate',
                        'beginner',
                        'novice',
                        'beginner',
                        'intermediate',
                        'beginner',
                        'beginner',
                        1585743137.280153,
                        1585743147.283449
);
-- password: maithempassword
INSERT INTO Accounts (username,
                      email,
                      password,
                      logged_in,
                      age,
                      height_in,
                      height_ft,
                      gender,
                      timezone,
                      exp_cardio,
                      exp_chest,
                      exp_legs,
                      exp_back,
                      exp_core,
                      exp_shoulders,
                      exp_arms,
                      created,
                      last_activity) VALUES
                      ('Maithem',
                       'Maithem@gmail.com',
                       '$2b$12$ElokCJUbrC5AHxZ/pA7W1O2kKiDVazC7/0/7LZ3KuKS4SphlPDY0.',
                       FALSE,
                       22,
                       7,
                       5,
                       'male',
                       'America/Boise',
                       'experienced',
                       'experienced',
                       'experienced',
                       'experienced',
                       'experienced',
                       'experienced',
                       'experienced',
                       1585743425.310356,
                       1585743435.314027
);
-- workout: Push Ups
-- INSERT INTO Workouts(workout_name,
--                      category,
--                      beginner_reps,
--                      beginner_sets,
--                      beginner_weight,
--                      beginner_pace,
--                      beginner_time_limit,
--                      beginner_rest_period,
--                      novice_reps,
--                      novice_sets,
--                      novice_weight,
--                      novice_pace,
--                      novice_time_limit,
--                      novice_rest_period,
--                      intermediate_reps,
--                      intermediate_sets,
--                      intermediate_weight,
--                      intermediate_pace,
--                      intermediate_time_limit,
--                      intermediate_rest_period,
--                      experienced_reps,
--                      experienced_sets,
--                      experienced_weight,
--                      experienced_pace,
--                      experienced_time_limit,
--                      experienced_rest_period,
--                      info,
--                      video_file_name,
--                      created) VALUES
--                      ('Push Ups',
--                       'chest',
--                       5,
--                       3,
--                       Null,
--                       Null,
--                       720,
--                       180,
--
--                       10,
--                       3,
--                       Null,
--                       Null,
--                       600,
--                       120,
--
--                       20,
--                       3,
--                       Null,
--                       Null,
--                       420,
--                       90,
--
--                       30,
--                       3,
--                       Null,
--                       Null,
--                       420,
--                       60,
--                       'Push Up info value',
--                       'static/video/push-ups.png'
-- );
-- workout: Bench Press
-- UNFINISHED************************************
-- INSERT INTO Workouts(workout_name,
--                      category,
--                      beginner_reps,
--                      beginner_sets,
--                      beginner_weight,
--                      beginner_pace,
--                      beginner_time_limit,
--                      beginner_rest_period,
--                      novice_reps,
--                      novice_sets,
--                      novice_weight,
--                      novice_pace,
--                      novice_time_limit,
--                      novice_rest_period,
--                      intermediate_reps,
--                      intermediate_sets,
--                      intermediate_weight,
--                      intermediate_pace,
--                      intermediate_time_limit,
--                      intermediate_rest_period,
--                      experienced_reps,
--                      experienced_sets,
--                      experienced_weight,
--                      experienced_pace,
--                      experienced_time_limit,
--                      experienced_rest_period,
--                      info,
--                      video_file_name,
--                      created) VALUES
--                      ('Bench Press',
--                       'chest',
--                       5,
--                       3,
--                       '20 Lbs',
--                       Null,
--                       720,
--                       180,
--
--                       10,
--                       3,
--                       Null,
--                       Null,
--                       600,
--                       120,
--
--                       20,
--                       3,
--                       Null,
--                       Null,
--                       420,
--                       90,
--
--                       30,
--                       3,
--                       Null,
--                       Null,
--                       420,
--                       60,
--                       'Push Up info value',
--                       'static/video/push-ups.m4v'
-- );
