var Vars = {};
$(document).ready(function(){
// All Variables that will be commonly used***************************************************

// *************Gatway Nav Variables
  Vars.gateway_nav_login = $('.gateway-nav-login');
  Vars.gateway_login = $('#gateway-login');
  Vars.gateway_nav_register = $('.gateway-nav-register');
  Vars.gateway_register = $('#gateway-register');
  Vars.gateway_nav_forgot_password = $('.gateway-nav-forgot-password');
  Vars.gateway_forgot_password = $('#gateway-forgot-password');


// *************Gateway Form Container Variables
  Vars.gateway_login_form_container = $('.gateway-login-form-container');
  Vars.gateway_register_form_container = $('.gateway-register-form-container');
  Vars.gateway_forgot_password_form_container = $('.gateway-forgot-password-form-container');


// *************Gateway Login Form Variables
  Vars.login_form_email_input = $('#login-form-email-input');
  Vars.login_form_email_error_message = $('#login-form-email-error-message');
  // password input
  Vars.login_form_password_input = $('#login-form-password-input');
  Vars.login_form_password_error_message = $('#login-form-password-error-message');
  // button stuff
  Vars.gateway_login_form_button = $('.gateway-login-form-button');
  Vars.logged_in_error = $('#logged_in_error');
  Vars.hidden_loggin_form = $('.hidden_loggin_form'); //this is for the login submit page


// *************Gateway Register Form Variables
  Vars.register_form_username_input = $('#register-form-username-input');
  //email input
  Vars.register_form_email_error_message = $('#register-form-email-error-message');
  Vars.register_form_email_input = $('#register-form-email-input');
  // password input
  Vars.register_form_password_input = $('#register-form-password-input');
  Vars.password_hide = $('#password-hide');
  Vars.password_show = $('#password-show');
  Vars.register_form_password_input_eye_container = $('.register-form-password-input-eye-container');
  // age input
  Vars.register_form_age_input = $('#register-form-age-input');
  // height input
  Vars.register_form_height_ft_input = $('#register-form-height-ft-input');
  Vars.register_form_height_in_input = $('#register-form-height-in-input');
  // gender input
  Vars.gender_field = $("input[name='gender']");
  Vars.male_button = $('#male-button');
  Vars.male_button_container = $('.register-form-gender-input-male-button-container');
  Vars.female_button = $('#female-button');
  Vars.female_button_container = $('.register-form-gender-input-female-button-container');
  // timezone input
  Vars.timezone_buttons_container = $('.register-form-timezone-input-container');
  Vars.timezone_field = $("input[name='timezone']");
  Vars.eastern_time_button = $('#eastern-time-button');
  Vars.pacific_time_button = $('#pacific-time-button');
  Vars.alaska_time_button = $('#alaska-time-button');
  Vars.central_time_button = $('#central-time-button');
  Vars.mountain_time_button = $('#mountain-time-button');
  Vars.hawaii_time_button = $('#hawaii-time-button');
  // cardio input
  Vars.cardio_buttons_container = $('#experience-input-container-cardio');
  Vars.cardio_field = $("input[name='cardio-experience']");
  Vars.cardio_beginner_button = $('#cardio-button-beginner');
  Vars.cardio_novice_button = $('#cardio-button-novice');
  Vars.cardio_intermediate_button = $('#cardio-button-intermediate');
  Vars.cardio_experienced_button = $('#cardio-button-experienced');
  // chest input
  Vars.chest_buttons_container = $('#experience-input-container-chest');
  Vars.chest_field = $("input[name='chest-experience']");
  Vars.chest_beginner_button = $('#chest-button-beginner');
  Vars.chest_novice_button = $('#chest-button-novice');
  Vars.chest_intermediate_button = $('#chest-button-intermediate');
  Vars.chest_experienced_button = $('#chest-button-experienced');
  // legs input
  Vars.legs_buttons_container = $('#experience-input-container-legs');
  Vars.legs_field = $("input[name='legs-experience']");
  Vars.legs_beginner_button = $('#legs-button-beginner');
  Vars.legs_novice_button = $('#legs-button-novice');
  Vars.legs_intermediate_button = $('#legs-button-intermediate');
  Vars.legs_experienced_button = $('#legs-button-experienced');
  // back input
  Vars.back_buttons_container = $('#experience-input-container-back');
  Vars.back_field = $("input[name='back-experience']");
  Vars.back_beginner_button = $('#back-button-beginner');
  Vars.back_novice_button = $('#back-button-novice');
  Vars.back_intermediate_button = $('#back-button-intermediate');
  Vars.back_experienced_button = $('#back-button-experienced');
  // core input
  Vars.core_buttons_container = $('#experience-input-container-core');
  Vars.core_field = $("input[name='core-experience']");
  Vars.core_beginner_button = $('#core-button-beginner');
  Vars.core_novice_button = $('#core-button-novice');
  Vars.core_intermediate_button = $('#core-button-intermediate');
  Vars.core_experienced_button = $('#core-button-experienced');
  // shoulders input
  Vars.shoulders_buttons_container = $('#experience-input-container-shoulders');
  Vars.shoulders_field = $("input[name='shoulders-experience']");
  Vars.shoulders_beginner_button = $('#shoulders-button-beginner');
  Vars.shoulders_novice_button = $('#shoulders-button-novice');
  Vars.shoulders_intermediate_button = $('#shoulders-button-intermediate');
  Vars.shoulders_experienced_button = $('#shoulders-button-experienced');
  // arms input
  Vars.arms_buttons_container = $('#experience-input-container-arms');
  Vars.arms_field = $("input[name='arms-experience']");
  Vars.arms_beginner_button = $('#arms-button-beginner');
  Vars.arms_novice_button = $('#arms-button-novice');
  Vars.arms_intermediate_button = $('#arms-button-intermediate');
  Vars.arms_experienced_button = $('#arms-button-experienced');
  // button stuff
  Vars.gateway_register_form_container_button = $('.gateway-register-form-container-1-button');
  Vars.hidden_register_form = $('.hidden_register_form');




// *********************************************************************************** Initial Hover/Focus Events
  // 1. .gateway-nav-login:hover
  Vars.gateway_nav_login.hover(function(e){
    e.preventDefault();
    e.stopPropagation();
    $(this).css('cursor', 'pointer');
  }, function(e){
    e.preventDefault();
    e.stopPropagation();
    $(this).css('cursor', 'auto');
  });

  // 2. .gateway-nav-register:hover
  Vars.gateway_nav_register.hover(function(e){
    e.preventDefault();
    e.stopPropagation();
    $(this).css('cursor', 'pointer');
  }, function(e){
    e.preventDefault();
    e.stopPropagation();
    $(this).css('cursor', 'auto');
  });

  // 3. .gateway-nav-forgot-password:hover
  Vars.gateway_nav_forgot_password.hover(function(e){
    e.preventDefault();
    e.stopPropagation();
    $(this).css('cursor', 'pointer');
  }, function(e){
    e.preventDefault();
    e.stopPropagation();
    $(this).css('cursor', 'auto');
  });

  // 4. #login-form-email-input:focusin and focusout
  // Vars.login_form_email_input.focusin(function(e){
  //   e.preventDefault();
  //   e.stopPropagation();
  //   $(this).css('outline-style', 'groove');
  //   $(this).css('outline-width', '6px');
  //   $(this).css('outline-color', '#F5B649');
  // });
  // Vars.login_form_email_input.focusout(function(e){
  //   e.preventDefault();
  //   e.stopPropagation();
  //   $(this).css('outline-style', 'none');
  // });

  // 5 #login-form-password-input:focus
  // Vars.login_form_password_input.focusin(function(e){
  //   e.preventDefault();
  //   e.stopPropagation();
  //   $(this).css('outline-style', 'groove');
  //   $(this).css('outline-width', '6px');
  //   $(this).css('outline-color', '#F5B649');
  // });
  // Vars.login_form_password_input.focusout(function(e){
  //   e.preventDefault();
  //   e.stopPropagation();
  //   $(this).css('outline-style', 'none');
  // });

  // 6 .gateway-login-form-button:hover
  Vars.gateway_login_form_button.hover(function(e){
    e.preventDefault();
    e.stopPropagation();
    $(this).css('cursor', 'pointer');
  }, function(e){
    e.preventDefault();
    e.stopPropagation();
    $(this).css('cursor', 'auto');
  });

  // 7 #register-form-username-input:focus
  // Vars.register_form_username_input.focusin(function(e){
  //   e.preventDefault();
  //   e.stopPropagation();
  //   $(this).css('outline-style', 'groove');
  //   $(this).css('outline-width', '3px');
  //   $(this).css('outline-color', '#F5B649');
  // });
  // Vars.register_form_username_input.focusout(function(e){
  //   e.preventDefault();
  //   e.stopPropagation();
  //   $(this).css('outline-style', 'none');
  // });

  // 8 #register-form-email-input:focus
  // Vars.register_form_email_input.focusin(function(e){
  //   e.preventDefault();
  //   e.stopPropagation();
  //   $(this).css('outline-style', 'groove');
  //   $(this).css('outline-width', '3px');
  //   $(this).css('outline-color', '#F5B649');
  // });
  // Vars.register_form_email_input.focusout(function(e){
  //   e.preventDefault();
  //   e.stopPropagation();
  //   $(this).css('outline-style', 'none');
  // });

  // 9 #register-form-password-input:focus
  // Vars.register_form_password_input.focusin(function(e){
  //   e.preventDefault();
  //   e.stopPropagation();
  //   $(this).css('outline-style', 'groove');
  //   $(this).css('outline-width', '3px');
  //   $(this).css('outline-color', '#F5B649');
  // });
  // Vars.register_form_password_input.focusout(function(e){
  //   e.preventDefault();
  //   e.stopPropagation();
  //   $(this).css('outline-style', 'none');
  // });

  // 10 #password-show:hover
  Vars.password_show.hover(function(e){
    e.preventDefault();
    e.stopPropagation();
    $(this).css('cursor', 'pointer');
  }, function(e){
    e.preventDefault();
    e.stopPropagation();
    $(this).css('cursor', 'auto');
  });

  // 11 #password-hide:hover
  Vars.password_hide.hover(function(e){
    e.preventDefault();
    e.stopPropagation();
    $(this).css('cursor', 'pointer');
  }, function(e){
    e.preventDefault();
    e.stopPropagation();
    $(this).css('cursor', 'auto');
  });

  // 12 #register-form-age-input:focus
  // Vars.register_form_age_input.focusin(function(e){
  //   e.preventDefault();
  //   e.stopPropagation();
  //   $(this).css('outline-style', 'groove');
  //   $(this).css('outline-width', '3px');
  //   $(this).css('outline-color', '#F5B649');
  // });
  // Vars.register_form_age_input.focusout(function(e){
  //   e.preventDefault();
  //   e.stopPropagation();
  //   $(this).css('outline-style', 'none');
  // });

  // 13 #register-form-height-ft-input:focus
  // Vars.register_form_height_ft_input.focusin(function(e){
  //   e.preventDefault();
  //   e.stopPropagation();
  //   $(this).css('outline-style', 'groove');
  //   $(this).css('outline-width', '3px');
  //   $(this).css('outline-color', '#F5B649');
  // });
  // Vars.register_form_height_ft_input.focusout(function(e){
  //   e.preventDefault();
  //   e.stopPropagation();
  //   $(this).css('outline-style', 'none');
  // });

  // 14 #register-form-height-in-input:focus
  // Vars.register_form_height_in_input.focusin(function(e){
  //   e.preventDefault();
  //   e.stopPropagation();
  //   $(this).css('outline-style', 'groove');
  //   $(this).css('outline-width', '3px');
  //   $(this).css('outline-color', '#F5B649');
  // });
  // Vars.register_form_height_in_input.focusout(function(e){
  //   e.preventDefault();
  //   e.stopPropagation();
  //   $(this).css('outline-style', 'none');
  // });



  // ******************************************Add Main Event Listerns BELOW  SFSKFSJFKEVDLFNVFLDKNV*******************************************************************
  // ******************************************Add Main Event Listerns BELOW  SFSKFSJFKEVDLFNVFLDKNV*******************************************************************

// *********************************************************************************** Nav Event Listeners
  // Login Tab
  Vars.gateway_nav_login.on('click', function(e){
    e.preventDefault();
    e.stopPropagation();
    Vars.gateway_nav_register.css("pointer-events", "auto");
    Vars.gateway_nav_login.css("pointer-events", "none");
    Vars.gateway_nav_forgot_password.css("pointer-events", "auto");
    // change borders and font colors of other tabs
    Vars.gateway_nav_register.css("border-bottom", "3px solid #FFFFFF");
    Vars.gateway_register.css("color", "#B3B8BF");
    Vars.gateway_nav_login.css("border-bottom", "3px solid #1A7E79");
    Vars.gateway_login.css("color", "#107E79");
    Vars.gateway_nav_forgot_password.css("border-bottom", "3px solid #FFFFFF");
    Vars.gateway_forgot_password.css("color", "#B3B8BF");
    // hide all Other tab containers
    Vars.gateway_register_form_container.hide();
    Vars.gateway_forgot_password_form_container.hide();
    // reset login form stuff
    Vars.logged_in_error.hide();
    Vars.login_form_email_error_message.hide();
    Vars.login_form_email_input.val('');
    Vars.login_form_email_input.css('border', '1px solid #C3C3C3');
    Vars.login_form_password_error_message.hide();
    Vars.login_form_password_input.val('');
    Vars.login_form_password_input.css('border', '1px solid #C3C3C3');
    Vars.gateway_login_form_button.css('opacity', '0.4');
    Vars.gateway_login_form_button.css("pointer-events", "none");
    // show login form container
    Vars.gateway_login_form_container.show();
  });


  // Register Tab
  Vars.gateway_nav_register.on('click', function(e){
    e.preventDefault();
    e.stopPropagation();
    Vars.gateway_nav_login.css("pointer-events", "auto");
    Vars.gateway_nav_register.css("pointer-events", "none");
    Vars.gateway_nav_forgot_password.css("pointer-events", "auto");
    // change borders and font colors of other tabs
    Vars.gateway_nav_register.css("border-bottom", "3px solid #1A7E79");
    Vars.gateway_register.css("color", "#107E79");
    Vars.gateway_nav_login.css("border-bottom", "3px solid #FFFFFF");
    Vars.gateway_login.css("color", "#B3B8BF");
    Vars.gateway_nav_forgot_password.css("border-bottom", "3px solid #FFFFFF");
    Vars.gateway_forgot_password.css("color", "#B3B8BF");
    // hide all Other tab containers
    Vars.gateway_login_form_container.hide();
    Vars.gateway_forgot_password_form_container.hide();
    // show register form container
    Vars.gateway_register_form_container.show();
  });


  // Forgot Password Tab
  Vars.gateway_nav_forgot_password.on('click', function(e){
    e.preventDefault();
    e.stopPropagation();
    Vars.gateway_nav_login.css("pointer-events", "auto");
    Vars.gateway_nav_register.css("pointer-events", "auto");
    Vars.gateway_nav_forgot_password.css("pointer-events", "none");
    // change borders and font colors of other tabs
    Vars.gateway_nav_register.css("border-bottom", "3px solid #FFFFFF");
    Vars.gateway_register.css("color", "#B3B8BF");
    Vars.gateway_nav_login.css("border-bottom", "3px solid #FFFFFF");
    Vars.gateway_login.css("color", "#B3B8BF");
    Vars.gateway_nav_forgot_password.css("border-bottom", "3px solid #1A7E79");
    Vars.gateway_forgot_password.css("color", "#107E79");
    // hide all Other tab containers
    Vars.gateway_login_form_container.hide();
    Vars.gateway_register_form_container.hide();
    // show forgot password form container
    Vars.gateway_forgot_password_form_container.show();
  });



// *********************************************************************************** Login Form Event Listeners
  // Login Tab Email Input
  Vars.login_form_email_input.on('keyup', function(e) {
    e.preventDefault();
    e.stopPropagation();
    Vars.login_form_email_input.css('border', '1px solid #3D456A');
    Vars.logged_in_error.hide();
    Vars.login_form_email_error_message.hide();
    if (Vars.login_form_password_input.val() && Vars.login_form_email_input.val()) {
      Vars.gateway_login_form_button.css('opacity', '1');
      Vars.gateway_login_form_button.css('pointer-events', 'auto');
    } else if (Vars.login_form_email_input.val()){
      Vars.login_form_email_input.css('border', '1px solid #3D456A');
    } else {
      Vars.login_form_email_input.css('border', '1px solid #C3C3C3');
      Vars.gateway_login_form_button.css('opacity', '0.4');
      Vars.gateway_login_form_button.css('pointer-events', 'none');
    }
  });

  // Login Tab Password Input
  Vars.login_form_password_input.on('keyup', function(e) {
    e.preventDefault();
    e.stopPropagation();
    Vars.login_form_password_input.css('border', '1px solid #3D456A');
    Vars.logged_in_error.hide();
    Vars.login_form_password_error_message.hide();
    if (Vars.login_form_password_input.val() && Vars.login_form_email_input.val()) {
      Vars.gateway_login_form_button.css('opacity', '1');
      Vars.gateway_login_form_button.css('pointer-events', 'auto');
    } else if (Vars.login_form_password_input.val()){
      Vars.login_form_password_input.css('border', '1px solid #3D456A');
    } else {
      Vars.login_form_password_input.css('border', '1px solid #C3C3C3');
      Vars.gateway_login_form_button.css('opacity', '0.4');
      Vars.gateway_login_form_button.css('pointer-events', 'none');
    }
  });

  // Ajax Call for Login Tab
  Vars.gateway_login_form_button.on('click', function(e){
    e.stopPropagation();
    e.preventDefault();
    if (Vars.login_form_password_input.val() && Vars.login_form_email_input.val()) {
      // disable everything
      //>>>>>>>>>>>>>>>>>>>>>>>>>>>>> yeet YEET (Possible missing stuff: like disable stuff on other tabs)
      Vars.gateway_nav_login.css("pointer-events", "none");
      Vars.gateway_nav_register.css("pointer-events", "none");
      Vars.gateway_nav_forgot_password.css("pointer-events", "none");
      Vars.login_form_email_input.prop('disabled', true);
      Vars.login_form_password_input.prop('disabled', true);
      Vars.gateway_login_form_button.css("pointer-events", "none");
      // make ajax call
      $.ajax({
        data : {
            // Vars.login_form
            email : Vars.login_form_email_input.val(),
            password : Vars.login_form_password_input.val()
          },
          type : 'POST',
          url : '/login'
      }).done(function(data){
        if (data.error == 'missing data') {
          Vars.gateway_nav_login.css("pointer-events", "none");
          Vars.gateway_nav_register.css("pointer-events", "auto");
          Vars.gateway_nav_forgot_password.css("pointer-events", "auto");
          Vars.logged_in_error.hide();
          Vars.login_form_email_error_message.hide();
          Vars.login_form_email_input.prop('disabled', false);
          Vars.login_form_email_input.css('border', '1px solid #C3C3C3');
          Vars.login_form_email_input.val('');
          Vars.login_form_password_error_message.hide();
          Vars.login_form_password_input.prop('disabled', false);
          Vars.login_form_password_input.css('border', '1px solid #C3C3C3');
          Vars.login_form_password_input.val('');
          Vars.gateway_login_form_button.css("pointer-events", "none");
          Vars.gateway_login_form_button.css('opacity', '0.4');
        } else if (data.error == 'invalid email') {
          Vars.gateway_nav_login.css("pointer-events", "none");
          Vars.gateway_nav_register.css("pointer-events", "auto");
          Vars.gateway_nav_forgot_password.css("pointer-events", "auto");
          Vars.logged_in_error.hide();
          Vars.login_form_email_error_message.show();
          Vars.login_form_email_input.prop('disabled', false);
          Vars.login_form_email_input.css('border', '1px solid #FC0D1B');
          Vars.login_form_password_error_message.hide();
          Vars.login_form_password_input.prop('disabled', false);
          Vars.gateway_login_form_button.css("pointer-events", "none");
          Vars.gateway_login_form_button.css('opacity', '0.4');
        } else if (data.error == 'invalid password') {
          Vars.gateway_nav_login.css("pointer-events", "none");
          Vars.gateway_nav_register.css("pointer-events", "auto");
          Vars.gateway_nav_forgot_password.css("pointer-events", "auto");
          Vars.logged_in_error.hide();
          Vars.login_form_email_error_message.hide();
          Vars.login_form_email_input.prop('disabled', false);
          Vars.login_form_password_error_message.show();
          Vars.login_form_password_input.prop('disabled', false);
          Vars.login_form_password_input.css('border', '1px solid #FC0D1B');
          Vars.gateway_login_form_button.css("pointer-events", "none");
          Vars.gateway_login_form_button.css('opacity', '0.4');
        } else if (data.error == 'logged in') {
          Vars.gateway_nav_login.css("pointer-events", "none");
          Vars.gateway_nav_register.css("pointer-events", "auto");
          Vars.gateway_nav_forgot_password.css("pointer-events", "auto");
          Vars.logged_in_error.show();
          Vars.login_form_email_error_message.hide();
          Vars.login_form_email_input.prop('disabled', false);
          Vars.login_form_password_error_message.hide();
          Vars.login_form_password_input.prop('disabled', false);
          Vars.gateway_login_form_button.css("pointer-events", "auto");
        } else if (data.error == 'none') {
          Vars.gateway_nav_login.css("pointer-events", "none");
          Vars.gateway_nav_register.css("pointer-events", "auto");
          Vars.gateway_nav_forgot_password.css("pointer-events", "auto");
          Vars.logged_in_error.hide();
          Vars.login_form_email_error_message.hide();
          Vars.login_form_email_input.prop('disabled', false);
          Vars.login_form_email_input.css('border', '1px solid #C3C3C3');
          Vars.login_form_email_input.val('');
          Vars.login_form_password_error_message.hide();
          Vars.login_form_password_input.prop('disabled', false);
          Vars.login_form_password_input.css('border', '1px solid #C3C3C3');
          Vars.login_form_password_input.val('');
          Vars.gateway_login_form_button.css("pointer-events", "none");
          Vars.gateway_login_form_button.css('opacity', '0.4');
          Vars.hidden_loggin_form.submit();
        } else {
          Vars.gateway_nav_login.css("pointer-events", "none");
          Vars.gateway_nav_register.css("pointer-events", "auto");
          Vars.gateway_nav_forgot_password.css("pointer-events", "auto");
          Vars.logged_in_error.hide();
          Vars.login_form_email_error_message.hide();
          Vars.login_form_email_input.prop('disabled', false);
          Vars.login_form_email_input.css('border', '1px solid #C3C3C3');
          Vars.login_form_email_input.val('');
          Vars.login_form_password_error_message.hide();
          Vars.login_form_password_input.prop('disabled', false);
          Vars.login_form_password_input.css('border', '1px solid #C3C3C3');
          Vars.login_form_password_input.val('');
          Vars.gateway_login_form_button.css("pointer-events", "none");
          Vars.gateway_login_form_button.css('opacity', '0.4');
        }
      }).fail(function(jqXHR, textStatus, errorThrown){
        Vars.gateway_nav_login.css("pointer-events", "none");
        Vars.gateway_nav_register.css("pointer-events", "auto");
        Vars.gateway_nav_forgot_password.css("pointer-events", "auto");
        Vars.logged_in_error.hide();
        Vars.login_form_email_error_message.hide();
        Vars.login_form_email_input.prop('disabled', false);
        Vars.login_form_password_error_message.hide();
        Vars.login_form_password_input.prop('disabled', false);
        Vars.gateway_login_form_button.css("pointer-events", "auto");
      });
    }
  });





// *********************************************************************************** Register Form Event Listeners
  // Register Tab Username Input
  Vars.register_form_username_input.on('keyup', function(e) {
    e.preventDefault();
    e.stopPropagation();
    //change password back to hidden state
    Vars.password_hide.hide();
    Vars.password_show.show();
    Vars.register_form_password_input.attr("type","password");
    //check if all fields have values
    if ( Vars.register_form_username_input.val() && Vars.register_form_email_input.val() && Vars.register_form_password_input.val() && Vars.register_form_age_input.val() && Vars.register_form_height_ft_input.val() && Vars.register_form_height_in_input.val() && Vars.gender_field.is(":checked") && Vars.timezone_field.is(":checked") && Vars.cardio_field.is(":checked") && Vars.chest_field.is(":checked") && Vars.legs_field.is(":checked") && Vars.back_field.is(":checked") && Vars.core_field.is(":checked") && Vars.shoulders_field.is(":checked") && Vars.arms_field.is(":checked") ) {
      //change border in username input field incase it's not darkend
      $(this).css('border', '1px solid #3D456A');
      //change sign-up button properties
      Vars.gateway_register_form_container_button.css('opacity', '1');
      Vars.gateway_register_form_container_button.css("pointer-events", "auto");
    } else if ($(this).val()) {
      $(this).css('border', '1px solid #3D456A');
    } else {
      $(this).css('border', '1px solid #C3C3C3');
      Vars.gateway_register_form_container_button.css('opacity', '0.4');
      Vars.gateway_register_form_container_button.css("pointer-events", "none");
    }
  });


  // Register Tab Email Input
  Vars.register_form_email_input.on('keyup', function(e) {
    e.preventDefault();
    e.stopPropagation();
    // hide error message
    Vars.register_form_email_error_message.hide();
    //change password back to hidden state
    Vars.password_hide.hide();
    Vars.password_show.show();
    Vars.register_form_password_input.attr("type","password");
    // check if all fields have values
    if ( Vars.register_form_username_input.val() && Vars.register_form_email_input.val() && Vars.register_form_password_input.val() && Vars.register_form_age_input.val() && Vars.register_form_height_ft_input.val() && Vars.register_form_height_in_input.val() && Vars.gender_field.is(":checked") && Vars.timezone_field.is(":checked") && Vars.cardio_field.is(":checked") && Vars.chest_field.is(":checked") && Vars.legs_field.is(":checked") && Vars.back_field.is(":checked") && Vars.core_field.is(":checked") && Vars.shoulders_field.is(":checked") && Vars.arms_field.is(":checked") ) {
      //change border in email input field incase it's not darkend
      $(this).css('border', '1px solid #3D456A');
      //change sign-up button properties
      Vars.gateway_register_form_container_button.css('opacity', '1');
      Vars.gateway_register_form_container_button.css("pointer-events", "auto");
    } else if ($(this).val()) {
      $(this).css('border', '1px solid #3D456A');
    } else {
      $(this).css('border', '1px solid #C3C3C3');
      Vars.gateway_register_form_container_button.css('opacity', '0.4');
      Vars.gateway_register_form_container_button.css("pointer-events", "none");
    }
  });


  // Register Tab Password Input
  Vars.register_form_password_input.on('keyup', function(e) {
    e.preventDefault();
    e.stopPropagation();
    //change password back to hidden state
    Vars.password_hide.hide();
    Vars.password_show.show();
    Vars.register_form_password_input.attr("type","password");
    //check is all fields have values
    if ( Vars.register_form_username_input.val() && Vars.register_form_email_input.val() && Vars.register_form_password_input.val() && Vars.register_form_age_input.val() && Vars.register_form_height_ft_input.val() && Vars.register_form_height_in_input.val() && Vars.gender_field.is(":checked") && Vars.timezone_field.is(":checked") && Vars.cardio_field.is(":checked") && Vars.chest_field.is(":checked") && Vars.legs_field.is(":checked") && Vars.back_field.is(":checked") && Vars.core_field.is(":checked") && Vars.shoulders_field.is(":checked") && Vars.arms_field.is(":checked") ) {
      //change border in password input field and password eye button container borders incase it's not darkend
      $(this).css('border', '1px solid #3D456A');
      Vars.register_form_password_input_eye_container.css('border-top', '1px solid #3D456A');
      Vars.register_form_password_input_eye_container.css('border-right', '1px solid #3D456A');
      Vars.register_form_password_input_eye_container.css('border-bottom', '1px solid #3D456A');
      //change sign-up button properties
      Vars.gateway_register_form_container_button.css('opacity', '1');
      Vars.gateway_register_form_container_button.css("pointer-events", "auto");
    } else if ($(this).val()) {
      //Change Borders for password input and password show eye container
      $(this).css('border', '1px solid #3D456A');
      Vars.register_form_password_input_eye_container.css('border-top', '1px solid #3D456A');
      Vars.register_form_password_input_eye_container.css('border-right', '1px solid #3D456A');
      Vars.register_form_password_input_eye_container.css('border-bottom', '1px solid #3D456A');
    } else {
      //change borders
      $(this).css('border', '1px solid #C3C3C3');
      Vars.register_form_password_input_eye_container.css('border-top', '1px solid #C3C3C3');
      Vars.register_form_password_input_eye_container.css('border-right', '1px solid #C3C3C3');
      Vars.register_form_password_input_eye_container.css('border-bottom', '1px solid #C3C3C3');
      Vars.gateway_register_form_container_button.css('opacity', '0.4');
      Vars.gateway_register_form_container_button.css("pointer-events", "none");
    }
  });


  // Click on password-show
  Vars.password_show.on('click', function(e){
    e.preventDefault();
    e.stopPropagation();
    Vars.register_form_password_input.attr("type","text");
    $(this).hide();
    Vars.password_hide.show();
    Vars.register_form_password_input.focus();
  });

  // Click on password-hide
  Vars.password_hide.on('click', function(e){
    e.preventDefault();
    e.stopPropagation();
    Vars.register_form_password_input.attr("type","password");
    $(this).hide();
    Vars.password_show.show();
    Vars.register_form_password_input.focus();
  });


  // Register Tab Age Post-Input Function
  Vars.age_check = function(param){
    if ( Vars.register_form_username_input.val() && Vars.register_form_email_input.val() && Vars.register_form_password_input.val() && Vars.register_form_age_input.val() && Vars.register_form_height_ft_input.val() && Vars.register_form_height_in_input.val() && Vars.gender_field.is(":checked") && Vars.timezone_field.is(":checked") && Vars.cardio_field.is(":checked") && Vars.chest_field.is(":checked") && Vars.legs_field.is(":checked") && Vars.back_field.is(":checked") && Vars.core_field.is(":checked") && Vars.shoulders_field.is(":checked") && Vars.arms_field.is(":checked") ) {
      //change border in email input field incase it's not darkend
      Vars.register_form_age_input.css('border', '1px solid #3D456A');
      //change sign-up button properties
      Vars.gateway_register_form_container_button.css('opacity', '1');
      Vars.gateway_register_form_container_button.css("pointer-events", "auto");
    } else if (Vars.register_form_age_input.val()){
      Vars.register_form_age_input.css('border', '1px solid #3D456A');
    } else {
      Vars.register_form_age_input.css('border', '1px solid #C3C3C3');
      Vars.gateway_register_form_container_button.css('opacity', '0.4');
      Vars.gateway_register_form_container_button.css("pointer-events", "none");
    }
  }

  // Register Tab Age Input
  Vars.register_form_age_input.on("input", function(e){
    e.preventDefault();
    e.stopPropagation();
    let str = $(this).val();
    $(this).val(str.slice(0, str.length - 1));
    $(this).val(str);
    console.log("yayayyay");
    return false
  });

  // Vars.register_form_age_input.on('keydown', function(e){
  //   // e.preventDefault();
  //   // e.stopPropagation();
  //   return false;
  //   // var code = e.key;
  //   var str = '' + e.which;
  //   $(this).val(str);
  //   // console.log(e.key);
  //   return false;
  //   //change password back to hidden state
  //   Vars.password_hide.hide();
  //   Vars.password_show.show();
  //   Vars.register_form_password_input.attr("type","password");
  //   // key codes are digits 0-9 (48 = 0) in asc order
  //   var code;
  //   if (e.which !== undefined) {
  //     code = e.which;
  //   } else if (e.keyCode !== undefined) {
  //     code = e.keyCode;
  //   } else if (e.keyIdentifier !== undefined) {
  //     code = e.keyIdentifier;
  //   } else if (e.key !== undefined){
  //     code = e.key;
  //   }
  //   if (e.which == 48 || e.which == 49 || e.which == 50 || e.which == 51 || e.which == 52 || e.which == 53 || e.which == 54 || e.which == 55 || e.which == 56 || e.which == 57){
  //
  //
  //     if ($(this).val().length >= 2) {
  //       // console.log(">=2");
  //       Vars.age_check();
  //       return false
  //     } else if($(this).val().length == 1) {
  //       // console.log("one");
  //       let temp = parseInt("" + $(this).val() + String.fromCharCode(e.which));
  //       if (temp > 13 && temp < 65) {
  //         $(this).val(temp);
  //         Vars.age_check();
  //         return false;
  //       } else {
  //         Vars.age_check();
  //         return false
  //       }
  //     } else {
  //       // console.log("none");
  //       $(this).val(String.fromCharCode(e.which));
  //       Vars.age_check();
  //       return false
  //     }
  //
  //
  //
  //   } else {
  //     if(e.which == 8){
  //       // console.log("backspace");
  //       if($(this).val().length == 2){
  //          $(this).val($(this).val().slice(0, 1));
  //          Vars.age_check();
  //          return false;
  //       } else if ($(this).val().length == 1) {
  //         $(this).val('');
  //         Vars.age_check();
  //         return false
  //       } else {
  //         Vars.age_check();
  //         return false
  //       }
  //
  //     }
  //     Vars.age_check();
  //     return false
  //   }
  // });




  // Register Tab Height ft Post-Input Function
  // Vars.register_form_height_ft_input
  // Vars.height_ft_check = function(){
  //   if ( Vars.register_form_username_input.val() && Vars.register_form_email_input.val() && Vars.register_form_password_input.val() && Vars.register_form_age_input.val() && Vars.register_form_height_ft_input.val() && Vars.register_form_height_in_input.val() && Vars.gender_field.is(":checked") && Vars.timezone_field.is(":checked") && Vars.cardio_field.is(":checked") && Vars.chest_field.is(":checked") && Vars.legs_field.is(":checked") && Vars.back_field.is(":checked") && Vars.core_field.is(":checked") && Vars.shoulders_field.is(":checked") && Vars.arms_field.is(":checked") ) {
  //     //change border in email input field incase it's not darkend
  //     Vars.register_form_height_ft_input.css('border', '1px solid #3D456A');
  //     //change sign-up button properties
  //     Vars.gateway_register_form_container_button.css('opacity', '1');
  //     Vars.gateway_register_form_container_button.css("pointer-events", "auto");
  //   } else if (Vars.register_form_age_input.val()){
  //     Vars.register_form_age_input.css('border', '1px solid #3D456A');
  //   } else {
  //     Vars.register_form_age_input.css('border', '1px solid #C3C3C3');
  //     Vars.gateway_register_form_container_button.css('opacity', '0.4');
  //     Vars.gateway_register_form_container_button.css("pointer-events", "none");
  //   }
  // }
  // Register Tab Height ft Input

  // Register Tab Height in Post-Input Function


  // Vars.register_form_age_input.keyup(function(e){
  //   e.preventDefault();
  //   e.stopPropagation();
  //
  //
  // });


  // Vars.register_form_age_input.on('keyup', function(){





  // Register Tab Height ft Input
  // Register Tab Height in Input
  // Register Tab Gender Input
  // Register Tab Timezone Input
  // Register Tab Cardio Input
  // Register Tab Chest Input
  // Register Tab Legs Input
  // Register Tab Back Input
  // Register Tab Core Input
  // Register Tab Shoulders Input
  // Register Tab Arms Input
  // Register Ajax Call







});
// ********************************************************************************END of Document.ready();








// $("input[name='gender']:checked").val()
// $("input[name='timezone']:checked").val()
// $("input[name='cardio-experience']:checked").val()
// $("input[name='chest-experience']:checked").val()
// $("input[name='legs-experience']:checked").val()
// $("input[name='back-experience']:checked").val()
// $("input[name='core-experience']:checked").val()
// $("input[name='shoulders-experience']:checked").val()
// $("input[name='arms-experience']:checked").val()









// SCRATCH WORK:

// $('#login-form-email-input').focus(function(){
//   $('#login-form-email-input').css('outline-style', 'groove');
//   $('#login-form-email-input').css('outline-width', '6px');
//   $('#login-form-email-input').css('outline-color', '#F5B649');
//
// });
//
//
// $('#login-form-email-input').mouseover(function(){
//   $('#login-form-email-input').css('cursor', 'pointer');
// });
//
// document.getElementById("male-button").checked
// $("input[name='gender']:checked").val() !== undefined
//
// $("input[name='gender']:checked")
// $("input[name='timezone']:checked")
// $("input[name='cardio-experience']:checked")
// $("input[name='chest-experience']:checked")
// $("input[name='legs-experience']:checked")
// $("input[name='back-experience']:checked")
// $("input[name='core-experience']:checked")
// $("input[name='shoulders-experience']:checked")
// $("input[name='arms-experience']:checked")
//
// $('#male-button').prop("checked");
// $("input[name='gender']").is(":checked");


// var time_field = $("input[name='timezone']");
// $("input[name='timezone']:checked")
// var temp_var = $("input[name='gender']");
// $("input[name='gender']").prop("checked");
// $("input[name='gender']").is(":checked");


// console.log(getEventListeners(document.getElementsByClassName("gateway-nav-login")[0]));
// console.log(getEventListeners($('.gateway-nav-login').get(0)));
// $('.gateway-nav-login').get(0).data("events");
// console.log($('.gateway-nav-login').get(0).data("events"));
// console.log(jQuery._data( $('.gateway-nav-login').get(0), "events" ));
// jQuery._data( $('.gateway-nav-login').get(0), "events" );

// function printEvents(){
//   console.log(".gateway-nav-login");
//   console.log(jQuery._data( $('.gateway-nav-login').get(0), "events" ));
//   console.log(".gateway-nav-register");
//   console.log(jQuery._data( $('.gateway-nav-register').get(0), "events" ));
//   console.log(".gateway-nav-forgot-password");
//   console.log(jQuery._data( $('.gateway-nav-forgot-password').get(0), "events" ));
//   console.log(" ");
//
//   console.log("#login-form-email-input");
//   console.log(jQuery._data( $('#login-form-email-input'), "events" ));
//   console.log("#login-form-password-input");
//   console.log(jQuery._data( $('#login-form-password-input'), "events" ));
//   console.log(".gateway-login-form-button");
//   console.log(jQuery._data( $('.gateway-login-form-button').get(0), "events" ));
//   console.log(" ");
//
//   console.log("#register-form-username-input");
//   console.log(jQuery._data( $('#register-form-username-input'), "events" ));
//   console.log("#register-form-email-input");
//   console.log(jQuery._data( $('#register-form-email-input'), "events" ));
//   console.log("#register-form-password-input");
//   console.log(jQuery._data( $('#register-form-password-input'), "events" ));
//   console.log("#password-show");
//   console.log(jQuery._data( $('#password-show'), "events" ));
//   console.log("#password-hide");
//   console.log(jQuery._data( $('#password-hide'), "events" ));
//   console.log("#register-form-age-input");
//   console.log(jQuery._data( $('#register-form-age-input'), "events" ));
//   console.log(".gateway-register-form-container-1-button");
//   console.log(jQuery._data( $('.gateway-register-form-container-1-button').get(0), "events" ));
// }


// function printEvents(){
//   console.log(".gateway-nav-login");
//   console.log(jQuery._data( $('.gateway-nav-login').get(0), "events" ));
//   console.log(".gateway-nav-register");
//   console.log(jQuery._data( $('.gateway-nav-register').get(0), "events" ));
//   console.log(".gateway-nav-forgot-password");
//   console.log(jQuery._data( $('.gateway-nav-forgot-password').get(0), "events" ));
//   console.log(" ");
//
//   console.log("#login-form-email-input");
//   console.log(jQuery._data( $('#login-form-email-input'), "events" ));
//   console.log("#login-form-password-input");
//   console.log(jQuery._data( $('#login-form-password-input'), "events" ));
//   console.log(".gateway-login-form-button");
//   console.log(jQuery._data( $('.gateway-login-form-button').get(0), "events" ));
//   console.log(" ");
//
//   console.log("#register-form-username-input");
//   console.log(jQuery._data( $('#register-form-username-input'), "events" ));
//   console.log("#register-form-email-input");
//   console.log(jQuery._data( $('#register-form-email-input'), "events" ));
//   console.log("#register-form-password-input");
//   console.log(jQuery._data( $('#register-form-password-input'), "events" ));
//   console.log("#password-show");
//   console.log(jQuery._data( $('#password-show'), "events" ));
//   console.log("#password-hide");
//   console.log(jQuery._data( $('#password-hide'), "events" ));
//   console.log("#register-form-age-input");
//   console.log(jQuery._data( $('#register-form-age-input'), "events" ));
//   console.log(".gateway-register-form-container-1-button");
//   console.log(jQuery._data( $('.gateway-register-form-container-1-button').get(0), "events" ));
// }
