-- workout: Push Ups
INSERT INTO Workouts(workout_name,
                     category,
                     beginner_reps,
                     beginner_sets,
                     beginner_weight,
                     beginner_pace,
                     beginner_time_limit,
                     beginner_rest_period,
                     novice_reps,
                     novice_sets,
                     novice_weight,
                     novice_pace,
                     novice_time_limit,
                     novice_rest_period,
                     intermediate_reps,
                     intermediate_sets,
                     intermediate_weight,
                     intermediate_pace,
                     intermediate_time_limit,
                     intermediate_rest_period,
                     experienced_reps,
                     experienced_sets,
                     experienced_weight,
                     experienced_pace,
                     experienced_time_limit,
                     experienced_rest_period,
                     info,
                     video_file_name,
                     created) VALUES
                     ('Push Ups',
                      'chest',
                      5,
                      3,
                      Null,
                      Null,
                      720,
                      180,

                      10,
                      3,
                      Null,
                      Null,
                      600,
                      120,

                      20,
                      3,
                      Null,
                      Null,
                      420,
                      90,

                      30,
                      3,
                      Null,
                      Null,
                      420,
                      60,
                      'Push Up info value',
                      'static/video/push-ups.png'
);
