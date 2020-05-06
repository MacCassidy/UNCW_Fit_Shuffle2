var Vars = {};
$(document).ready(function(){
  Vars.current_username = $('#user-data').data("username");
  Vars.current_age = $('#user-data').data("age").toString();
  Vars.current_height_ft = $('#user-data').data("height-ft").toString();
  Vars.current_height_in = $('#user-data').data("height-in").toString();
  Vars.current_gender = $('#user-data').data("gender");
  Vars.current_timezone = $('#user-data').data("timezone");
  Vars.current_cardio_exp = $('#user-data').data("cardio-exp");
  Vars.current_chest_exp = $('#user-data').data("chest-exp");
  Vars.current_legs_exp = $('#user-data').data("legs-exp");
  Vars.current_back_exp = $('#user-data').data("back-exp");
  Vars.current_core_exp = $('#user-data').data("core-exp");
  Vars.current_shoulders_exp = $('#user-data').data("shoulders-exp");
  Vars.current_arms_exp = $('#user-data').data("arms-exp");
  Vars.logout_button_form = $('#layout-logout-button-form');
  Vars.logout_button = $('#layout-logout-button');
  Vars.edit_profile_button = $('.profile-body-conatiner-button');
  Vars.change_password_button = $('#change-pass-button');
  Vars.profile_form = $('#hidden_profile_form');
  Vars.username_input = $('#username-input');
  Vars.age_input = $('#age-input');

  Vars.logout_button_form.css('display', 'flex');
  Vars.logout_button_form.css('pointer-events', 'auto');
  Vars.logout_button.css('display', 'block');
  Vars.logout_button.css('pointer-events', 'auto');
  Vars.logout_button.on('click', function(e){
    e.preventDefault();
    e.stopPropagation();
    Vars.logout_button_form.submit()
  });

  Vars.username_input.val(Vars.current_username);
  Vars.age_input.val(Vars.current_age);
  // console.log(Vars.current_username);
  // console.log(Vars.current_age);
  // console.log(Vars.current_height_ft);
  // console.log(Vars.current_height_in);
  // console.log(Vars.current_gender);
  // console.log(Vars.current_timezone);
  // console.log(Vars.current_cardio_exp);
  // console.log(Vars.current_chest_exp);
  // console.log(Vars.current_legs_exp);
  // console.log(Vars.current_back_exp);
  // console.log(Vars.current_core_exp);
  // console.log(Vars.current_shoulders_exp);
  // console.log(Vars.current_arms_exp);
});
