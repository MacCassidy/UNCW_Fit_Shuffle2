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
  Vars.login_code_error = $('#login-code-error');
  Vars.hidden_loggin_form = $('.hidden_loggin_form'); //this is for the login submit page
  // Vars.login_code_error.hide();


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
  Vars.eastern_time_button_container = $('#eastern-time-button-container');
  Vars.eastern_time_button = $('#eastern-time-button');
  Vars.pacific_time_button_container = $('#pacific-time-button-container');
  Vars.pacific_time_button = $('#pacific-time-button');
  Vars.alaska_time_button_container = $('#alaska-time-button-container');
  Vars.alaska_time_button = $('#alaska-time-button');
  Vars.central_time_button_container = $('#central-time-button-container');
  Vars.central_time_button = $('#central-time-button');
  Vars.mountain_time_button_container = $('#mountain-time-button-container');
  Vars.mountain_time_button = $('#mountain-time-button');
  Vars.hawaii_time_button_container = $('#hawaii-time-button-container');
  Vars.hawaii_time_button = $('#hawaii-time-button');

  // cardio input
  Vars.cardio_buttons_container = $('#experience-input-container-cardio');
  Vars.cardio_field = $("input[name='cardio-experience']");
  Vars.cardio_button_container_beginner = $('#cardio-button-container-beginner');
  Vars.cardio_beginner_button = $('#cardio-button-beginner');
  Vars.cardio_button_container_novice = $('#cardio-button-container-novice');
  Vars.cardio_novice_button = $('#cardio-button-novice');
  Vars.cardio_button_container_intermediate = $('#cardio-button-container-intermediate');
  Vars.cardio_intermediate_button = $('#cardio-button-intermediate');
  Vars.cardio_button_container_experienced = $('#cardio-button-container-experienced');
  Vars.cardio_experienced_button = $('#cardio-button-experienced');
  // chest input
  Vars.chest_buttons_container = $('#experience-input-container-chest');
  Vars.chest_field = $("input[name='chest-experience']");
  Vars.chest_button_container_beginner = $('#chest-button-container-beginner');
  Vars.chest_beginner_button = $('#chest-button-beginner');
  Vars.chest_button_container_novice = $('#chest-button-container-novice');
  Vars.chest_novice_button = $('#chest-button-novice');
  Vars.chest_button_container_intermediate = $('#chest-button-container-intermediate');
  Vars.chest_intermediate_button = $('#chest-button-intermediate');
  Vars.chest_button_container_experienced = $('#chest-button-container-experienced');
  Vars.chest_experienced_button = $('#chest-button-experienced');
  // legs input
  Vars.legs_buttons_container = $('#experience-input-container-legs');
  Vars.legs_field = $("input[name='legs-experience']");
  Vars.legs_button_container_beginner = $('#legs-button-container-beginner');
  Vars.legs_beginner_button = $('#legs-button-beginner');
  Vars.legs_button_container_novice = $('#legs-button-container-novice');
  Vars.legs_novice_button = $('#legs-button-novice');
  Vars.legs_button_container_intermediate = $('#legs-button-container-intermediate');
  Vars.legs_intermediate_button = $('#legs-button-intermediate');
  Vars.legs_button_container_experienced = $('#legs-button-container-experienced');
  Vars.legs_experienced_button = $('#legs-button-experienced');
  // back input
  Vars.back_buttons_container = $('#experience-input-container-back');
  Vars.back_field = $("input[name='back-experience']");
  Vars.back_button_container_beginner = $('#back-button-container-beginner');
  Vars.back_beginner_button = $('#back-button-beginner');
  Vars.back_button_container_novice = $('#back-button-container-novice');
  Vars.back_novice_button = $('#back-button-novice');
  Vars.back_button_container_intermediate = $('#back-button-container-intermediate');
  Vars.back_intermediate_button = $('#back-button-intermediate');
  Vars.back_button_container_experienced = $('#back-button-container-experienced');
  Vars.back_experienced_button = $('#back-button-experienced');
  // core input
  Vars.core_buttons_container = $('#experience-input-container-core');
  Vars.core_field = $("input[name='core-experience']");
  Vars.core_button_container_beginner = $('#core-button-container-beginner');
  Vars.core_beginner_button = $('#core-button-beginner');
  Vars.core_button_container_novice = $('#core-button-container-novice');
  Vars.core_novice_button = $('#core-button-novice');
  Vars.core_button_container_intermediate = $('#core-button-container-intermediate');
  Vars.core_intermediate_button = $('#core-button-intermediate');
  Vars.core_button_container_experienced = $('#core-button-container-experienced');
  Vars.core_experienced_button = $('#core-button-experienced');
  // shoulders input
  Vars.shoulders_buttons_container = $('#experience-input-container-shoulders');
  Vars.shoulders_field = $("input[name='shoulders-experience']");
  Vars.shoulders_button_container_beginner = $('#shoulders-button-container-beginner');
  Vars.shoulders_beginner_button = $('#shoulders-button-beginner');
  Vars.shoulders_button_container_novice = $('#shoulders-button-container-novice');
  Vars.shoulders_novice_button = $('#shoulders-button-novice');
  Vars.shoulders_button_container_intermediate = $('#shoulders-button-container-intermediate');
  Vars.shoulders_intermediate_button = $('#shoulders-button-intermediate');
  Vars.shoulders_button_container_experienced = $('#shoulders-button-container-experienced');
  Vars.shoulders_experienced_button = $('#shoulders-button-experienced');
  // arms input
  Vars.arms_buttons_container = $('#experience-input-container-arms');
  Vars.arms_field = $("input[name='arms-experience']");
  Vars.arms_button_container_beginner = $('#arms-button-container-beginner');
  Vars.arms_beginner_button = $('#arms-button-beginner');
  Vars.arms_button_container_novice = $('#arms-button-container-novice');
  Vars.arms_novice_button = $('#arms-button-novice');
  Vars.arms_button_container_intermediate = $('#arms-button-container-intermediate');
  Vars.arms_intermediate_button = $('#arms-button-intermediate');
  Vars.arms_button_container_experienced = $('#arms-button-container-experienced');
  Vars.arms_experienced_button = $('#arms-button-experienced');
  // button stuff
  Vars.gateway_register_form_container_button = $('.gateway-register-form-container-1-button');
  Vars.hidden_register_form = $('.hidden_register_form');

// *************Gateway Reset Password Form Variables
  // Vars.gateway_forgot_password
  // Vars.gateway_forgot_password_form_container
  Vars.reset_password_email_input = $('#reset-password-email-input');
  Vars.reset_password_invalid_email = $('#reset-invalid-email');
  Vars.reset_password_button = $('.reset-password-button');
  Vars.hidden_passwordchange_form = $('.hidden_passwordchange_form');
  Vars.reset_password_logged_in_error = $('#reset-password-logged-in-error');
  Vars.reset_password_current_code_error = $('#reset-password-current-code-error');
  // Vars.reset_password_logged_in_error.hide();
  // Vars.reset_password_current_code_error.hide();
  // harambe

// *********************************************************************************** Initial Hover/Focus Events

  Vars.gateway_nav_login.hover(function(e){
    e.preventDefault();
    e.stopPropagation();
    $(this).css('cursor', 'pointer');
  }, function(e){
    e.preventDefault();
    e.stopPropagation();
    $(this).css('cursor', 'auto');
  });

  Vars.gateway_nav_register.hover(function(e){
    e.preventDefault();
    e.stopPropagation();
    $(this).css('cursor', 'pointer');
  }, function(e){
    e.preventDefault();
    e.stopPropagation();
    $(this).css('cursor', 'auto');
  });

  Vars.gateway_nav_forgot_password.hover(function(e){
    e.preventDefault();
    e.stopPropagation();
    $(this).css('cursor', 'pointer');
  }, function(e){
    e.preventDefault();
    e.stopPropagation();
    $(this).css('cursor', 'auto');
  });

  Vars.gateway_login_form_button.hover(function(e){
    e.preventDefault();
    e.stopPropagation();
    $(this).css('cursor', 'pointer');
  }, function(e){
    e.preventDefault();
    e.stopPropagation();
    $(this).css('cursor', 'auto');
  });

  Vars.password_show.hover(function(e){
    e.preventDefault();
    e.stopPropagation();
    $(this).css('cursor', 'pointer');
  }, function(e){
    e.preventDefault();
    e.stopPropagation();
    $(this).css('cursor', 'auto');
  });


  Vars.password_hide.hover(function(e){
    e.preventDefault();
    e.stopPropagation();
    $(this).css('cursor', 'pointer');
  }, function(e){
    e.preventDefault();
    e.stopPropagation();
    $(this).css('cursor', 'auto');
  });

  Vars.gateway_register_form_container_button.hover(function(e){
    e.preventDefault();
    e.stopPropagation();
    $(this).css('cursor', 'pointer');
  }, function(e){
    e.preventDefault();
    e.stopPropagation();
    $(this).css('cursor', 'auto');
  });

  Vars.reset_password_button.hover(function(e){
    e.stopPropagation();
    e.preventDefault();
    $(this).css('cursor', 'pointer');
  }, function(e){
    e.stopPropagation();
    e.preventDefault();
    $(this).css('cursor', 'auto');
  });

  // ******************************************Add Event Listerns BELOW *******************************************************************

// *********************************************************************************** Nav Event Listeners
  // Login Tab
  Vars.gateway_nav_login.on('click', function(e){
    e.preventDefault();
    e.stopPropagation();
    // Reset Tabs
    Vars.gateway_nav_register.css("pointer-events", "auto");
    Vars.gateway_nav_login.css("pointer-events", "none");
    Vars.gateway_nav_forgot_password.css("pointer-events", "auto");
    // Change borders and font colors of other tabs
    Vars.gateway_nav_register.css("border-bottom", "3px solid #FFFFFF");
    Vars.gateway_register.css("color", "#B3B8BF");
    Vars.gateway_nav_login.css("border-bottom", "3px solid #1A7E79");
    Vars.gateway_login.css("color", "#107E79");
    Vars.gateway_nav_forgot_password.css("border-bottom", "3px solid #FFFFFF");
    Vars.gateway_forgot_password.css("color", "#B3B8BF");
    // Hide Other Forms
    Vars.gateway_register_form_container.hide();
    Vars.gateway_forgot_password_form_container.hide();
    // Reset Login form
    Vars.logged_in_error.hide();
    Vars.login_code_error.hide();
    Vars.login_form_email_error_message.hide();
    Vars.login_form_email_input.prop('disabled', false);
    Vars.login_form_email_input.val('');
    Vars.login_form_email_input.css('border', '1px solid #C3C3C3');
    Vars.login_form_password_error_message.hide();
    Vars.login_form_password_input.prop('disabled', false);
    Vars.login_form_password_input.val('');
    Vars.login_form_password_input.css('border', '1px solid #C3C3C3');
    Vars.gateway_login_form_button.css('opacity', '0.4');
    Vars.gateway_login_form_button.css("pointer-events", "none");
    // Show Login Form
    Vars.gateway_login_form_container.show();
    // Reset Register Form
    $('.gateway-register-form-container-1-top-outer').scrollTop(0);
    Vars.register_form_username_input.prop('disabled', false);
    Vars.register_form_email_input.prop('disabled', false);
    Vars.register_form_password_input.prop('disabled', false);
    Vars.password_show.css("pointer-events", "auto");
    Vars.password_hide.css("pointer-events", "auto");
    Vars.register_form_age_input.prop('disabled', false);
    Vars.register_form_height_ft_input.prop('disabled', false);
    Vars.register_form_height_in_input.prop('disabled', false);
    Vars.male_button.prop('disabled', false);
    Vars.female_button.prop('disabled', false);
    Vars.eastern_time_button.prop('disabled', false);
    Vars.pacific_time_button.prop('disabled', false);
    Vars.alaska_time_button.prop('disabled', false);
    Vars.central_time_button.prop('disabled', false);
    Vars.mountain_time_button.prop('disabled', false);
    Vars.hawaii_time_button.prop('disabled', false);
    Vars.cardio_beginner_button.prop('disabled', false);
    Vars.cardio_novice_button.prop('disabled', false);
    Vars.cardio_intermediate_button.prop('disabled', false);
    Vars.cardio_experienced_button.prop('disabled', false);
    Vars.chest_beginner_button.prop('disabled', false);
    Vars.chest_novice_button.prop('disabled', false);
    Vars.chest_intermediate_button.prop('disabled', false);
    Vars.chest_experienced_button.prop('disabled', false);
    Vars.legs_beginner_button.prop('disabled', false);
    Vars.legs_novice_button.prop('disabled', false);
    Vars.legs_intermediate_button.prop('disabled', false);
    Vars.legs_experienced_button.prop('disabled', false);
    Vars.back_beginner_button.prop('disabled', false);
    Vars.back_novice_button.prop('disabled', false);
    Vars.back_intermediate_button.prop('disabled', false);
    Vars.back_experienced_button.prop('disabled', false);
    Vars.core_beginner_button.prop('disabled', false);
    Vars.core_novice_button.prop('disabled', false);
    Vars.core_intermediate_button.prop('disabled', false);
    Vars.core_experienced_button.prop('disabled', false);
    Vars.shoulders_beginner_button.prop('disabled', false);
    Vars.shoulders_novice_button.prop('disabled', false);
    Vars.shoulders_intermediate_button.prop('disabled', false);
    Vars.shoulders_experienced_button.prop('disabled', false);
    Vars.arms_beginner_button.prop('disabled', false);
    Vars.arms_novice_button.prop('disabled', false);
    Vars.arms_intermediate_button.prop('disabled', false);
    Vars.arms_experienced_button.prop('disabled', false);
    Vars.gateway_register_form_container_button.css('opacity', '0.4');
    Vars.gateway_register_form_container_button.css("pointer-events", "none");
    Vars.register_form_username_input.val('');
    Vars.register_form_username_input.css('border', '1px solid #C3C3C3');
    Vars.register_form_email_error_message.hide();
    Vars.register_form_email_input.val('');
    Vars.register_form_email_input.css('border', '1px solid #C3C3C3');
    Vars.register_form_password_input.val('');
    Vars.register_form_password_input.css('border', '1px solid #C3C3C3');
    Vars.register_form_password_input_eye_container.css('border-top', '1px solid #C3C3C3');
    Vars.register_form_password_input_eye_container.css('border-right', '1px solid #C3C3C3');
    Vars.register_form_password_input_eye_container.css('border-bottom', '1px solid #C3C3C3');
    Vars.password_hide.hide();
    Vars.password_show.show();
    Vars.register_form_password_input.attr("type","password");
    Vars.register_form_age_input.val('');
    Vars.register_form_age_input.css('border', '1px solid #C3C3C3');
    Vars.register_form_height_ft_input.val('');
    Vars.register_form_height_ft_input.css('border', '1px solid #C3C3C3');
    Vars.register_form_height_in_input.val('');
    Vars.register_form_height_in_input.css('border', '1px solid #C3C3C3');
    Vars.male_button.prop('checked', false);
    Vars.male_button_container.css('border', '1px solid #C3C3C3');
    Vars.female_button.prop('checked', false);
    Vars.female_button_container.css('border', '1px solid #C3C3C3');
    Vars.timezone_buttons_container.css('border', '1px solid #C3C3C3');
    Vars.eastern_time_button.prop('checked', false);
    Vars.eastern_time_button_container.css('border', '1px solid #C3C3C3');
    Vars.pacific_time_button.prop('checked', false);
    Vars.pacific_time_button_container.css('border', '1px solid #C3C3C3');
    Vars.alaska_time_button.prop('checked', false);
    Vars.alaska_time_button_container.css('border', '1px solid #C3C3C3');
    Vars.central_time_button.prop('checked', false);
    Vars.central_time_button_container.css('border', '1px solid #C3C3C3');
    Vars.mountain_time_button.prop('checked', false);
    Vars.mountain_time_button_container.css('border', '1px solid #C3C3C3');
    Vars.hawaii_time_button.prop('checked', false);
    Vars.hawaii_time_button_container.css('border', '1px solid #C3C3C3');
    Vars.cardio_buttons_container.css('border', '1px solid #C3C3C3');
    Vars.cardio_beginner_button.prop('checked', false);
    Vars.cardio_button_container_beginner.css('border', '1px solid #C3C3C3');
    Vars.cardio_novice_button.prop('checked', false);
    Vars.cardio_button_container_novice.css('border', '1px solid #C3C3C3');
    Vars.cardio_intermediate_button.prop('checked', false);
    Vars.cardio_button_container_intermediate.css('border', '1px solid #C3C3C3');
    Vars.cardio_experienced_button.prop('checked', false);
    Vars.cardio_button_container_experienced.css('border', '1px solid #C3C3C3');
    Vars.chest_buttons_container.css('border', '1px solid #C3C3C3');
    Vars.chest_beginner_button.prop('checked', false);
    Vars.chest_button_container_beginner.css('border', '1px solid #C3C3C3');
    Vars.chest_novice_button.prop('checked', false);
    Vars.chest_button_container_novice.css('border', '1px solid #C3C3C3');
    Vars.chest_intermediate_button.prop('checked', false);
    Vars.chest_button_container_intermediate.css('border', '1px solid #C3C3C3');
    Vars.chest_experienced_button.prop('checked', false);
    Vars.chest_button_container_experienced.css('border', '1px solid #C3C3C3');
    Vars.legs_buttons_container.css('border', '1px solid #C3C3C3');
    Vars.legs_beginner_button.prop('checked', false);
    Vars.legs_button_container_beginner.css('border', '1px solid #C3C3C3');
    Vars.legs_novice_button.prop('checked', false);
    Vars.legs_button_container_novice.css('border', '1px solid #C3C3C3');
    Vars.legs_intermediate_button.prop('checked', false);
    Vars.legs_button_container_intermediate.css('border', '1px solid #C3C3C3');
    Vars.legs_experienced_button.prop('checked', false);
    Vars.legs_button_container_experienced.css('border', '1px solid #C3C3C3');
    Vars.back_buttons_container.css('border', '1px solid #C3C3C3');
    Vars.back_beginner_button.prop('checked', false);
    Vars.back_button_container_beginner.css('border', '1px solid #C3C3C3');
    Vars.back_novice_button.prop('checked', false);
    Vars.back_button_container_novice.css('border', '1px solid #C3C3C3');
    Vars.back_intermediate_button.prop('checked', false);
    Vars.back_button_container_intermediate.css('border', '1px solid #C3C3C3');
    Vars.back_experienced_button.prop('checked', false);
    Vars.back_button_container_experienced.css('border', '1px solid #C3C3C3');
    Vars.core_buttons_container.css('border', '1px solid #C3C3C3');
    Vars.core_beginner_button.prop('checked', false);
    Vars.core_button_container_beginner.css('border', '1px solid #C3C3C3');
    Vars.core_novice_button.prop('checked', false);
    Vars.core_button_container_novice.css('border', '1px solid #C3C3C3');
    Vars.core_intermediate_button.prop('checked', false);
    Vars.core_button_container_intermediate.css('border', '1px solid #C3C3C3');
    Vars.core_experienced_button.prop('checked', false);
    Vars.core_button_container_experienced.css('border', '1px solid #C3C3C3');
    Vars.shoulders_buttons_container.css('border', '1px solid #C3C3C3');
    Vars.shoulders_beginner_button.prop('checked', false);
    Vars.shoulders_button_container_beginner.css('border', '1px solid #C3C3C3');
    Vars.shoulders_novice_button.prop('checked', false);
    Vars.shoulders_button_container_novice.css('border', '1px solid #C3C3C3');
    Vars.shoulders_intermediate_button.prop('checked', false);
    Vars.shoulders_button_container_intermediate.css('border', '1px solid #C3C3C3');
    Vars.shoulders_experienced_button.prop('checked', false);
    Vars.shoulders_button_container_experienced.css('border', '1px solid #C3C3C3');
    Vars.arms_buttons_container.css('border', '1px solid #C3C3C3');
    Vars.arms_beginner_button.prop('checked', false);
    Vars.arms_button_container_beginner.css('border', '1px solid #C3C3C3');
    Vars.arms_novice_button.prop('checked', false);
    Vars.arms_button_container_novice.css('border', '1px solid #C3C3C3');
    Vars.arms_intermediate_button.prop('checked', false);
    Vars.arms_button_container_intermediate.css('border', '1px solid #C3C3C3');
    Vars.arms_experienced_button.prop('checked', false);
    Vars.arms_button_container_experienced.css('border', '1px solid #C3C3C3');
    // Reset Forgot Password Form
    Vars.reset_password_email_input.val('');
    Vars.reset_password_email_input.css('border', '1px solid #C3C3C3');
    Vars.reset_password_invalid_email.hide();
    Vars.reset_password_button.css('opacity', '0.4');
    Vars.reset_password_button.css("pointer-events", "none");
    Vars.reset_password_logged_in_error.hide();
    Vars.reset_password_current_code_error.hide();
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
    // Reset Register Form
    $('.gateway-register-form-container-1-top-outer').scrollTop(0);
    Vars.register_form_username_input.prop('disabled', false);
    Vars.register_form_email_input.prop('disabled', false);
    Vars.register_form_password_input.prop('disabled', false);
    Vars.password_show.css("pointer-events", "auto");
    Vars.password_hide.css("pointer-events", "auto");
    Vars.register_form_age_input.prop('disabled', false);
    Vars.register_form_height_ft_input.prop('disabled', false);
    Vars.register_form_height_in_input.prop('disabled', false);
    Vars.male_button.prop('disabled', false);
    Vars.female_button.prop('disabled', false);
    Vars.eastern_time_button.prop('disabled', false);
    Vars.pacific_time_button.prop('disabled', false);
    Vars.alaska_time_button.prop('disabled', false);
    Vars.central_time_button.prop('disabled', false);
    Vars.mountain_time_button.prop('disabled', false);
    Vars.hawaii_time_button.prop('disabled', false);
    Vars.cardio_beginner_button.prop('disabled', false);
    Vars.cardio_novice_button.prop('disabled', false);
    Vars.cardio_intermediate_button.prop('disabled', false);
    Vars.cardio_experienced_button.prop('disabled', false);
    Vars.chest_beginner_button.prop('disabled', false);
    Vars.chest_novice_button.prop('disabled', false);
    Vars.chest_intermediate_button.prop('disabled', false);
    Vars.chest_experienced_button.prop('disabled', false);
    Vars.legs_beginner_button.prop('disabled', false);
    Vars.legs_novice_button.prop('disabled', false);
    Vars.legs_intermediate_button.prop('disabled', false);
    Vars.legs_experienced_button.prop('disabled', false);
    Vars.back_beginner_button.prop('disabled', false);
    Vars.back_novice_button.prop('disabled', false);
    Vars.back_intermediate_button.prop('disabled', false);
    Vars.back_experienced_button.prop('disabled', false);
    Vars.core_beginner_button.prop('disabled', false);
    Vars.core_novice_button.prop('disabled', false);
    Vars.core_intermediate_button.prop('disabled', false);
    Vars.core_experienced_button.prop('disabled', false);
    Vars.shoulders_beginner_button.prop('disabled', false);
    Vars.shoulders_novice_button.prop('disabled', false);
    Vars.shoulders_intermediate_button.prop('disabled', false);
    Vars.shoulders_experienced_button.prop('disabled', false);
    Vars.arms_beginner_button.prop('disabled', false);
    Vars.arms_novice_button.prop('disabled', false);
    Vars.arms_intermediate_button.prop('disabled', false);
    Vars.arms_experienced_button.prop('disabled', false);
    Vars.gateway_register_form_container_button.css('opacity', '0.4');
    Vars.gateway_register_form_container_button.css("pointer-events", "none");
    Vars.register_form_username_input.val('');
    Vars.register_form_username_input.css('border', '1px solid #C3C3C3');
    Vars.register_form_email_error_message.hide();
    Vars.register_form_email_input.val('');
    Vars.register_form_email_input.css('border', '1px solid #C3C3C3');
    Vars.register_form_password_input.val('');
    Vars.register_form_password_input.css('border', '1px solid #C3C3C3');
    Vars.register_form_password_input_eye_container.css('border-top', '1px solid #C3C3C3');
    Vars.register_form_password_input_eye_container.css('border-right', '1px solid #C3C3C3');
    Vars.register_form_password_input_eye_container.css('border-bottom', '1px solid #C3C3C3');
    Vars.password_hide.hide();
    Vars.password_show.show();
    Vars.register_form_password_input.attr("type","password");
    Vars.register_form_age_input.val('');
    Vars.register_form_age_input.css('border', '1px solid #C3C3C3');
    Vars.register_form_height_ft_input.val('');
    Vars.register_form_height_ft_input.css('border', '1px solid #C3C3C3');
    Vars.register_form_height_in_input.val('');
    Vars.register_form_height_in_input.css('border', '1px solid #C3C3C3');
    Vars.male_button.prop('checked', false);
    Vars.male_button_container.css('border', '1px solid #C3C3C3');
    Vars.female_button.prop('checked', false);
    Vars.female_button_container.css('border', '1px solid #C3C3C3');
    Vars.timezone_buttons_container.css('border', '1px solid #C3C3C3');
    Vars.eastern_time_button.prop('checked', false);
    Vars.eastern_time_button_container.css('border', '1px solid #C3C3C3');
    Vars.pacific_time_button.prop('checked', false);
    Vars.pacific_time_button_container.css('border', '1px solid #C3C3C3');
    Vars.alaska_time_button.prop('checked', false);
    Vars.alaska_time_button_container.css('border', '1px solid #C3C3C3');
    Vars.central_time_button.prop('checked', false);
    Vars.central_time_button_container.css('border', '1px solid #C3C3C3');
    Vars.mountain_time_button.prop('checked', false);
    Vars.mountain_time_button_container.css('border', '1px solid #C3C3C3');
    Vars.hawaii_time_button.prop('checked', false);
    Vars.hawaii_time_button_container.css('border', '1px solid #C3C3C3');
    Vars.cardio_buttons_container.css('border', '1px solid #C3C3C3');
    Vars.cardio_beginner_button.prop('checked', false);
    Vars.cardio_button_container_beginner.css('border', '1px solid #C3C3C3');
    Vars.cardio_novice_button.prop('checked', false);
    Vars.cardio_button_container_novice.css('border', '1px solid #C3C3C3');
    Vars.cardio_intermediate_button.prop('checked', false);
    Vars.cardio_button_container_intermediate.css('border', '1px solid #C3C3C3');
    Vars.cardio_experienced_button.prop('checked', false);
    Vars.cardio_button_container_experienced.css('border', '1px solid #C3C3C3');
    Vars.chest_buttons_container.css('border', '1px solid #C3C3C3');
    Vars.chest_beginner_button.prop('checked', false);
    Vars.chest_button_container_beginner.css('border', '1px solid #C3C3C3');
    Vars.chest_novice_button.prop('checked', false);
    Vars.chest_button_container_novice.css('border', '1px solid #C3C3C3');
    Vars.chest_intermediate_button.prop('checked', false);
    Vars.chest_button_container_intermediate.css('border', '1px solid #C3C3C3');
    Vars.chest_experienced_button.prop('checked', false);
    Vars.chest_button_container_experienced.css('border', '1px solid #C3C3C3');
    Vars.legs_buttons_container.css('border', '1px solid #C3C3C3');
    Vars.legs_beginner_button.prop('checked', false);
    Vars.legs_button_container_beginner.css('border', '1px solid #C3C3C3');
    Vars.legs_novice_button.prop('checked', false);
    Vars.legs_button_container_novice.css('border', '1px solid #C3C3C3');
    Vars.legs_intermediate_button.prop('checked', false);
    Vars.legs_button_container_intermediate.css('border', '1px solid #C3C3C3');
    Vars.legs_experienced_button.prop('checked', false);
    Vars.legs_button_container_experienced.css('border', '1px solid #C3C3C3');
    Vars.back_buttons_container.css('border', '1px solid #C3C3C3');
    Vars.back_beginner_button.prop('checked', false);
    Vars.back_button_container_beginner.css('border', '1px solid #C3C3C3');
    Vars.back_novice_button.prop('checked', false);
    Vars.back_button_container_novice.css('border', '1px solid #C3C3C3');
    Vars.back_intermediate_button.prop('checked', false);
    Vars.back_button_container_intermediate.css('border', '1px solid #C3C3C3');
    Vars.back_experienced_button.prop('checked', false);
    Vars.back_button_container_experienced.css('border', '1px solid #C3C3C3');
    Vars.core_buttons_container.css('border', '1px solid #C3C3C3');
    Vars.core_beginner_button.prop('checked', false);
    Vars.core_button_container_beginner.css('border', '1px solid #C3C3C3');
    Vars.core_novice_button.prop('checked', false);
    Vars.core_button_container_novice.css('border', '1px solid #C3C3C3');
    Vars.core_intermediate_button.prop('checked', false);
    Vars.core_button_container_intermediate.css('border', '1px solid #C3C3C3');
    Vars.core_experienced_button.prop('checked', false);
    Vars.core_button_container_experienced.css('border', '1px solid #C3C3C3');
    Vars.shoulders_buttons_container.css('border', '1px solid #C3C3C3');
    Vars.shoulders_beginner_button.prop('checked', false);
    Vars.shoulders_button_container_beginner.css('border', '1px solid #C3C3C3');
    Vars.shoulders_novice_button.prop('checked', false);
    Vars.shoulders_button_container_novice.css('border', '1px solid #C3C3C3');
    Vars.shoulders_intermediate_button.prop('checked', false);
    Vars.shoulders_button_container_intermediate.css('border', '1px solid #C3C3C3');
    Vars.shoulders_experienced_button.prop('checked', false);
    Vars.shoulders_button_container_experienced.css('border', '1px solid #C3C3C3');
    Vars.arms_buttons_container.css('border', '1px solid #C3C3C3');
    Vars.arms_beginner_button.prop('checked', false);
    Vars.arms_button_container_beginner.css('border', '1px solid #C3C3C3');
    Vars.arms_novice_button.prop('checked', false);
    Vars.arms_button_container_novice.css('border', '1px solid #C3C3C3');
    Vars.arms_intermediate_button.prop('checked', false);
    Vars.arms_button_container_intermediate.css('border', '1px solid #C3C3C3');
    Vars.arms_experienced_button.prop('checked', false);
    Vars.arms_button_container_experienced.css('border', '1px solid #C3C3C3');
    // show register form container
    Vars.gateway_register_form_container.show();
    // Reset Login Form
    Vars.logged_in_error.hide();
    Vars.login_code_error.hide();
    Vars.login_form_email_error_message.hide();
    Vars.login_form_email_input.prop('disabled', false);
    Vars.login_form_email_input.val('');
    Vars.login_form_email_input.css('border', '1px solid #C3C3C3');
    Vars.login_form_password_error_message.hide();
    Vars.login_form_password_input.prop('disabled', false);
    Vars.login_form_password_input.val('');
    Vars.login_form_password_input.css('border', '1px solid #C3C3C3');
    Vars.gateway_login_form_button.css('opacity', '0.4');
    Vars.gateway_login_form_button.css("pointer-events", "none");
    //Reset Reset Password Form
    Vars.reset_password_email_input.val('');
    Vars.reset_password_email_input.css('border', '1px solid #C3C3C3');
    Vars.reset_password_invalid_email.hide();
    Vars.reset_password_button.css('opacity', '0.4');
    Vars.reset_password_button.css("pointer-events", "none");
    Vars.reset_password_logged_in_error.hide();
    Vars.reset_password_current_code_error.hide();
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
    // Reset Reset Password Form
    Vars.reset_password_email_input.val('');
    Vars.reset_password_email_input.css('border', '1px solid #C3C3C3');
    Vars.reset_password_invalid_email.hide();
    Vars.reset_password_button.css('opacity', '0.4');
    Vars.reset_password_button.css("pointer-events", "none");
    Vars.reset_password_logged_in_error.hide();
    Vars.reset_password_current_code_error.hide();
    // show forgot password form container
    Vars.gateway_forgot_password_form_container.show();
    // Reset Register Form
    $('.gateway-register-form-container-1-top-outer').scrollTop(0);
    Vars.register_form_username_input.prop('disabled', false);
    Vars.register_form_email_input.prop('disabled', false);
    Vars.register_form_password_input.prop('disabled', false);
    Vars.password_show.css("pointer-events", "auto");
    Vars.password_hide.css("pointer-events", "auto");
    Vars.register_form_age_input.prop('disabled', false);
    Vars.register_form_height_ft_input.prop('disabled', false);
    Vars.register_form_height_in_input.prop('disabled', false);
    Vars.male_button.prop('disabled', false);
    Vars.female_button.prop('disabled', false);
    Vars.eastern_time_button.prop('disabled', false);
    Vars.pacific_time_button.prop('disabled', false);
    Vars.alaska_time_button.prop('disabled', false);
    Vars.central_time_button.prop('disabled', false);
    Vars.mountain_time_button.prop('disabled', false);
    Vars.hawaii_time_button.prop('disabled', false);
    Vars.cardio_beginner_button.prop('disabled', false);
    Vars.cardio_novice_button.prop('disabled', false);
    Vars.cardio_intermediate_button.prop('disabled', false);
    Vars.cardio_experienced_button.prop('disabled', false);
    Vars.chest_beginner_button.prop('disabled', false);
    Vars.chest_novice_button.prop('disabled', false);
    Vars.chest_intermediate_button.prop('disabled', false);
    Vars.chest_experienced_button.prop('disabled', false);
    Vars.legs_beginner_button.prop('disabled', false);
    Vars.legs_novice_button.prop('disabled', false);
    Vars.legs_intermediate_button.prop('disabled', false);
    Vars.legs_experienced_button.prop('disabled', false);
    Vars.back_beginner_button.prop('disabled', false);
    Vars.back_novice_button.prop('disabled', false);
    Vars.back_intermediate_button.prop('disabled', false);
    Vars.back_experienced_button.prop('disabled', false);
    Vars.core_beginner_button.prop('disabled', false);
    Vars.core_novice_button.prop('disabled', false);
    Vars.core_intermediate_button.prop('disabled', false);
    Vars.core_experienced_button.prop('disabled', false);
    Vars.shoulders_beginner_button.prop('disabled', false);
    Vars.shoulders_novice_button.prop('disabled', false);
    Vars.shoulders_intermediate_button.prop('disabled', false);
    Vars.shoulders_experienced_button.prop('disabled', false);
    Vars.arms_beginner_button.prop('disabled', false);
    Vars.arms_novice_button.prop('disabled', false);
    Vars.arms_intermediate_button.prop('disabled', false);
    Vars.arms_experienced_button.prop('disabled', false);
    Vars.gateway_register_form_container_button.css('opacity', '0.4');
    Vars.gateway_register_form_container_button.css("pointer-events", "none");
    Vars.register_form_username_input.val('');
    Vars.register_form_username_input.css('border', '1px solid #C3C3C3');
    Vars.register_form_email_error_message.hide();
    Vars.register_form_email_input.val('');
    Vars.register_form_email_input.css('border', '1px solid #C3C3C3');
    Vars.register_form_password_input.val('');
    Vars.register_form_password_input.css('border', '1px solid #C3C3C3');
    Vars.register_form_password_input_eye_container.css('border-top', '1px solid #C3C3C3');
    Vars.register_form_password_input_eye_container.css('border-right', '1px solid #C3C3C3');
    Vars.register_form_password_input_eye_container.css('border-bottom', '1px solid #C3C3C3');
    Vars.password_hide.hide();
    Vars.password_show.show();
    Vars.register_form_password_input.attr("type","password");
    Vars.register_form_age_input.val('');
    Vars.register_form_age_input.css('border', '1px solid #C3C3C3');
    Vars.register_form_height_ft_input.val('');
    Vars.register_form_height_ft_input.css('border', '1px solid #C3C3C3');
    Vars.register_form_height_in_input.val('');
    Vars.register_form_height_in_input.css('border', '1px solid #C3C3C3');
    Vars.male_button.prop('checked', false);
    Vars.male_button_container.css('border', '1px solid #C3C3C3');
    Vars.female_button.prop('checked', false);
    Vars.female_button_container.css('border', '1px solid #C3C3C3');
    Vars.timezone_buttons_container.css('border', '1px solid #C3C3C3');
    Vars.eastern_time_button.prop('checked', false);
    Vars.eastern_time_button_container.css('border', '1px solid #C3C3C3');
    Vars.pacific_time_button.prop('checked', false);
    Vars.pacific_time_button_container.css('border', '1px solid #C3C3C3');
    Vars.alaska_time_button.prop('checked', false);
    Vars.alaska_time_button_container.css('border', '1px solid #C3C3C3');
    Vars.central_time_button.prop('checked', false);
    Vars.central_time_button_container.css('border', '1px solid #C3C3C3');
    Vars.mountain_time_button.prop('checked', false);
    Vars.mountain_time_button_container.css('border', '1px solid #C3C3C3');
    Vars.hawaii_time_button.prop('checked', false);
    Vars.hawaii_time_button_container.css('border', '1px solid #C3C3C3');
    Vars.cardio_buttons_container.css('border', '1px solid #C3C3C3');
    Vars.cardio_beginner_button.prop('checked', false);
    Vars.cardio_button_container_beginner.css('border', '1px solid #C3C3C3');
    Vars.cardio_novice_button.prop('checked', false);
    Vars.cardio_button_container_novice.css('border', '1px solid #C3C3C3');
    Vars.cardio_intermediate_button.prop('checked', false);
    Vars.cardio_button_container_intermediate.css('border', '1px solid #C3C3C3');
    Vars.cardio_experienced_button.prop('checked', false);
    Vars.cardio_button_container_experienced.css('border', '1px solid #C3C3C3');
    Vars.chest_buttons_container.css('border', '1px solid #C3C3C3');
    Vars.chest_beginner_button.prop('checked', false);
    Vars.chest_button_container_beginner.css('border', '1px solid #C3C3C3');
    Vars.chest_novice_button.prop('checked', false);
    Vars.chest_button_container_novice.css('border', '1px solid #C3C3C3');
    Vars.chest_intermediate_button.prop('checked', false);
    Vars.chest_button_container_intermediate.css('border', '1px solid #C3C3C3');
    Vars.chest_experienced_button.prop('checked', false);
    Vars.chest_button_container_experienced.css('border', '1px solid #C3C3C3');
    Vars.legs_buttons_container.css('border', '1px solid #C3C3C3');
    Vars.legs_beginner_button.prop('checked', false);
    Vars.legs_button_container_beginner.css('border', '1px solid #C3C3C3');
    Vars.legs_novice_button.prop('checked', false);
    Vars.legs_button_container_novice.css('border', '1px solid #C3C3C3');
    Vars.legs_intermediate_button.prop('checked', false);
    Vars.legs_button_container_intermediate.css('border', '1px solid #C3C3C3');
    Vars.legs_experienced_button.prop('checked', false);
    Vars.legs_button_container_experienced.css('border', '1px solid #C3C3C3');
    Vars.back_buttons_container.css('border', '1px solid #C3C3C3');
    Vars.back_beginner_button.prop('checked', false);
    Vars.back_button_container_beginner.css('border', '1px solid #C3C3C3');
    Vars.back_novice_button.prop('checked', false);
    Vars.back_button_container_novice.css('border', '1px solid #C3C3C3');
    Vars.back_intermediate_button.prop('checked', false);
    Vars.back_button_container_intermediate.css('border', '1px solid #C3C3C3');
    Vars.back_experienced_button.prop('checked', false);
    Vars.back_button_container_experienced.css('border', '1px solid #C3C3C3');
    Vars.core_buttons_container.css('border', '1px solid #C3C3C3');
    Vars.core_beginner_button.prop('checked', false);
    Vars.core_button_container_beginner.css('border', '1px solid #C3C3C3');
    Vars.core_novice_button.prop('checked', false);
    Vars.core_button_container_novice.css('border', '1px solid #C3C3C3');
    Vars.core_intermediate_button.prop('checked', false);
    Vars.core_button_container_intermediate.css('border', '1px solid #C3C3C3');
    Vars.core_experienced_button.prop('checked', false);
    Vars.core_button_container_experienced.css('border', '1px solid #C3C3C3');
    Vars.shoulders_buttons_container.css('border', '1px solid #C3C3C3');
    Vars.shoulders_beginner_button.prop('checked', false);
    Vars.shoulders_button_container_beginner.css('border', '1px solid #C3C3C3');
    Vars.shoulders_novice_button.prop('checked', false);
    Vars.shoulders_button_container_novice.css('border', '1px solid #C3C3C3');
    Vars.shoulders_intermediate_button.prop('checked', false);
    Vars.shoulders_button_container_intermediate.css('border', '1px solid #C3C3C3');
    Vars.shoulders_experienced_button.prop('checked', false);
    Vars.shoulders_button_container_experienced.css('border', '1px solid #C3C3C3');
    Vars.arms_buttons_container.css('border', '1px solid #C3C3C3');
    Vars.arms_beginner_button.prop('checked', false);
    Vars.arms_button_container_beginner.css('border', '1px solid #C3C3C3');
    Vars.arms_novice_button.prop('checked', false);
    Vars.arms_button_container_novice.css('border', '1px solid #C3C3C3');
    Vars.arms_intermediate_button.prop('checked', false);
    Vars.arms_button_container_intermediate.css('border', '1px solid #C3C3C3');
    Vars.arms_experienced_button.prop('checked', false);
    Vars.arms_button_container_experienced.css('border', '1px solid #C3C3C3');
    // Reset Login Form
    Vars.logged_in_error.hide();
    Vars.login_code_error.hide();
    Vars.login_form_email_error_message.hide();
    Vars.login_form_email_input.prop('disabled', false);
    Vars.login_form_email_input.val('');
    Vars.login_form_email_input.css('border', '1px solid #C3C3C3');
    Vars.login_form_password_error_message.hide();
    Vars.login_form_password_input.prop('disabled', false);
    Vars.login_form_password_input.val('');
    Vars.login_form_password_input.css('border', '1px solid #C3C3C3');
    Vars.gateway_login_form_button.css('opacity', '0.4');
    Vars.gateway_login_form_button.css("pointer-events", "none");
  });



// *********************************************************************************** Login Form Event Listeners
  // Login Tab Email Input
  Vars.login_form_email_input.on('keyup', function(e) {
    e.preventDefault();
    e.stopPropagation();
    Vars.login_form_email_input.css('border', '1px solid #3D456A');
    Vars.logged_in_error.hide();
    Vars.login_code_error.hide();
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
    Vars.login_code_error.hide();
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
      Vars.login_code_error.hide();
      Vars.logged_in_error.hide();
      Vars.login_form_email_error_message.hide();
      Vars.login_form_password_error_message.hide();
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
          Vars.login_form_email_input.prop('disabled', false);
          Vars.login_form_email_input.css('border', '1px solid #C3C3C3');
          Vars.login_form_email_input.val('');
          Vars.login_form_password_input.prop('disabled', false);
          Vars.login_form_password_input.css('border', '1px solid #C3C3C3');
          Vars.login_form_password_input.val('');
          Vars.gateway_login_form_button.css("pointer-events", "none");
          Vars.gateway_login_form_button.css('opacity', '0.4');
          alert('Server request failed for some reason, refresh the page or try again later.');
        } else if (data.error == 'invalid email') {
          Vars.gateway_nav_login.css("pointer-events", "none");
          Vars.gateway_nav_register.css("pointer-events", "auto");
          Vars.gateway_nav_forgot_password.css("pointer-events", "auto");
          Vars.login_form_email_error_message.show();
          Vars.login_form_email_input.prop('disabled', false);
          Vars.login_form_email_input.css('border', '1px solid #FC0D1B');
          Vars.login_form_password_input.prop('disabled', false);
          Vars.gateway_login_form_button.css("pointer-events", "none");
          Vars.gateway_login_form_button.css('opacity', '0.4');
        } else if (data.error == 'invalid password') {
          Vars.gateway_nav_login.css("pointer-events", "none");
          Vars.gateway_nav_register.css("pointer-events", "auto");
          Vars.gateway_nav_forgot_password.css("pointer-events", "auto");
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
          Vars.login_form_email_input.css('border', '1px solid #FC0D1B');
          Vars.login_form_email_input.prop('disabled', false);
          Vars.login_form_password_input.prop('disabled', false);
          Vars.gateway_login_form_button.css("pointer-events", "none");
          Vars.gateway_login_form_button.css('opacity', '0.4');
        } else if (data.error == 'current code') {
          Vars.gateway_nav_login.css("pointer-events", "none");
          Vars.gateway_nav_register.css("pointer-events", "auto");
          Vars.gateway_nav_forgot_password.css("pointer-events", "auto");
          Vars.login_code_error.show();
          Vars.login_form_email_input.css('border', '1px solid #FC0D1B');
          Vars.login_form_email_input.prop('disabled', false);
          Vars.login_form_password_input.prop('disabled', false);
          Vars.gateway_login_form_button.css("pointer-events", "none");
          Vars.gateway_login_form_button.css('opacity', '0.4');
        } else if (data.error == 'none') {
          Vars.hidden_loggin_form.submit();
          Vars.gateway_nav_login.css("pointer-events", "none");
          Vars.gateway_nav_register.css("pointer-events", "auto");
          Vars.gateway_nav_forgot_password.css("pointer-events", "auto");
          Vars.login_form_email_input.prop('disabled', false);
          Vars.login_form_email_input.css('border', '1px solid #C3C3C3');
          Vars.login_form_email_input.val('');
          Vars.login_form_password_input.prop('disabled', false);
          Vars.login_form_password_input.css('border', '1px solid #C3C3C3');
          Vars.login_form_password_input.val('');
          Vars.gateway_login_form_button.css("pointer-events", "none");
          Vars.gateway_login_form_button.css('opacity', '0.4');
        } else {
          Vars.gateway_nav_login.css("pointer-events", "none");
          Vars.gateway_nav_register.css("pointer-events", "auto");
          Vars.gateway_nav_forgot_password.css("pointer-events", "auto");
          Vars.login_form_email_input.prop('disabled', false);
          Vars.login_form_email_input.css('border', '1px solid #C3C3C3');
          Vars.login_form_email_input.val('');
          Vars.login_form_password_input.prop('disabled', false);
          Vars.login_form_password_input.css('border', '1px solid #C3C3C3');
          Vars.login_form_password_input.val('');
          Vars.gateway_login_form_button.css("pointer-events", "none");
          Vars.gateway_login_form_button.css('opacity', '0.4');
          alert('Server request failed for some reason, refresh the page or try again later.');
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
        alert('Server request failed for some reason, refresh the page or try again later.');
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
    Vars.password_hide.hide();
    Vars.password_show.show();
    Vars.register_form_password_input.attr("type","password");
    let numbers = /^[0-9]+$/;
    let str = $(this).val();
    if (str.match(numbers)){
      if (str.length > 2){
        $(this).val(str.slice(0, str.length - 1));
        Vars.age_check();
      } else if(str.length == 2 && (parseInt(str) < 14 || parseInt(str) > 65) ){
        $(this).val(str.slice(0, str.length - 1));
        Vars.age_check();
      } else {
        $(this).val(str);
        Vars.age_check();
      }
    } else {
      $(this).val('');
      Vars.age_check();
    }
  });

  // Register Tab Age Input Focus OUT
  Vars.register_form_age_input.focusout(function(e){
    e.preventDefault();
    e.stopPropagation();
    let val = $(this).val();
    if(val < 10 || val > 65){
      $(this).val('');
      Vars.age_check();
    }
  });

  // Register Tab Height ft Post-Input Function
  Vars.height_ft_check = function(param){
    if ( Vars.register_form_username_input.val() && Vars.register_form_email_input.val() && Vars.register_form_password_input.val() && Vars.register_form_age_input.val() && Vars.register_form_height_ft_input.val() && Vars.register_form_height_in_input.val() && Vars.gender_field.is(":checked") && Vars.timezone_field.is(":checked") && Vars.cardio_field.is(":checked") && Vars.chest_field.is(":checked") && Vars.legs_field.is(":checked") && Vars.back_field.is(":checked") && Vars.core_field.is(":checked") && Vars.shoulders_field.is(":checked") && Vars.arms_field.is(":checked") ) {
      //change border in email input field incase it's not darkend
      Vars.register_form_height_ft_input.css('border', '1px solid #3D456A');
      //change sign-up button properties
      Vars.gateway_register_form_container_button.css('opacity', '1');
      Vars.gateway_register_form_container_button.css("pointer-events", "auto");
    } else if (Vars.register_form_height_ft_input.val()){
      Vars.register_form_height_ft_input.css('border', '1px solid #3D456A');
    } else {
      Vars.register_form_height_ft_input.css('border', '1px solid #C3C3C3');
      Vars.gateway_register_form_container_button.css('opacity', '0.4');
      Vars.gateway_register_form_container_button.css("pointer-events", "none");
    }
  }

  // Register Tab Height ft Input
  Vars.register_form_height_ft_input.on("input", function(e){
    e.preventDefault();
    e.stopPropagation();
    Vars.password_hide.hide();
    Vars.password_show.show();
    Vars.register_form_password_input.attr("type","password");
    let numbers = /^[0-9]+$/;
    let str = $(this).val();
    if (str.match(numbers)){
      if (str.length > 1){
        $(this).val(str.slice(0, str.length - 1));
        Vars.height_ft_check();
      } else if(str.length == 1 && (parseInt(str) < 3 || parseInt(str) > 8)){
        $(this).val('');
        Vars.height_ft_check();
      } else {
        $(this).val(str);
        Vars.height_ft_check();
      }
    } else {
      $(this).val('');
      Vars.height_ft_check();
    }
  });


  // Register Tab Height in Post-Input Function
  Vars.register_form_height_in_input
  Vars.height_in_check = function(param){
    if ( Vars.register_form_username_input.val() && Vars.register_form_email_input.val() && Vars.register_form_password_input.val() && Vars.register_form_age_input.val() && Vars.register_form_height_ft_input.val() && Vars.register_form_height_in_input.val() && Vars.gender_field.is(":checked") && Vars.timezone_field.is(":checked") && Vars.cardio_field.is(":checked") && Vars.chest_field.is(":checked") && Vars.legs_field.is(":checked") && Vars.back_field.is(":checked") && Vars.core_field.is(":checked") && Vars.shoulders_field.is(":checked") && Vars.arms_field.is(":checked") ) {
      //change border in email input field incase it's not darkend
      Vars.register_form_height_in_input.css('border', '1px solid #3D456A');
      //change sign-up button properties
      Vars.gateway_register_form_container_button.css('opacity', '1');
      Vars.gateway_register_form_container_button.css("pointer-events", "auto");
    } else if (Vars.register_form_height_in_input.val()){
      Vars.register_form_height_in_input.css('border', '1px solid #3D456A');
    } else {
      Vars.register_form_height_in_input.css('border', '1px solid #C3C3C3');
      Vars.gateway_register_form_container_button.css('opacity', '0.4');
      Vars.gateway_register_form_container_button.css("pointer-events", "none");
    }
  }

  // Register Tab Height in Input
  Vars.register_form_height_in_input.on("input", function(e){
    e.preventDefault();
    e.stopPropagation();
    Vars.password_hide.hide();
    Vars.password_show.show();
    Vars.register_form_password_input.attr("type","password");
    let numbers = /^[0-9]+$/;
    let str = $(this).val();
    if (str.match(numbers)){
      if (str.length > 2){
        $(this).val(str.slice(0, str.length - 1));
        Vars.height_in_check();
      } else if(str.length == 2 && (parseInt(str) > 11  || str.charAt(0) == "0")){
        $(this).val(str.slice(0, str.length - 1));
        Vars.height_in_check();
      } else {
        $(this).val(str);
        Vars.height_in_check();
      }
    } else {
      $(this).val('');
      Vars.height_in_check();
    }
  });

  // Register Tab Gender Male Button Click
  Vars.male_button.click(function(e){
    e.stopPropagation();
    Vars.password_hide.hide();
    Vars.password_show.show();
    Vars.register_form_password_input.attr("type","password");
    if ( Vars.register_form_username_input.val() && Vars.register_form_email_input.val() && Vars.register_form_password_input.val() && Vars.register_form_age_input.val() && Vars.register_form_height_ft_input.val() && Vars.register_form_height_in_input.val() && Vars.gender_field.is(":checked") && Vars.timezone_field.is(":checked") && Vars.cardio_field.is(":checked") && Vars.chest_field.is(":checked") && Vars.legs_field.is(":checked") && Vars.back_field.is(":checked") && Vars.core_field.is(":checked") && Vars.shoulders_field.is(":checked") && Vars.arms_field.is(":checked") ) {
      Vars.female_button_container.css('border', '1px solid #C3C3C3');
      Vars.male_button_container.css('border', '1px solid #3D456A');
      Vars.gateway_register_form_container_button.css('opacity', '1');
      Vars.gateway_register_form_container_button.css("pointer-events", "auto");
    } else if (Vars.male_button.is(":checked")){
      Vars.female_button_container.css('border', '1px solid #C3C3C3');
      Vars.male_button_container.css('border', '1px solid #3D456A');
    } else {
      Vars.female_button_container.css('border', '1px solid #C3C3C3');
      Vars.male_button_container.css('border', '1px solid #C3C3C3');
      Vars.gateway_register_form_container_button.css('opacity', '0.4');
      Vars.gateway_register_form_container_button.css("pointer-events", "none");
    }
  });

  // Register Tab Gender Female Button Click
  Vars.female_button.click(function(e){
    e.stopPropagation();
    Vars.password_hide.hide();
    Vars.password_show.show();
    Vars.register_form_password_input.attr("type","password");
    if ( Vars.register_form_username_input.val() && Vars.register_form_email_input.val() && Vars.register_form_password_input.val() && Vars.register_form_age_input.val() && Vars.register_form_height_ft_input.val() && Vars.register_form_height_in_input.val() && Vars.gender_field.is(":checked") && Vars.timezone_field.is(":checked") && Vars.cardio_field.is(":checked") && Vars.chest_field.is(":checked") && Vars.legs_field.is(":checked") && Vars.back_field.is(":checked") && Vars.core_field.is(":checked") && Vars.shoulders_field.is(":checked") && Vars.arms_field.is(":checked") ) {
      Vars.male_button_container.css('border', '1px solid #C3C3C3');
      Vars.female_button_container.css('border', '1px solid #3D456A');
      Vars.gateway_register_form_container_button.css('opacity', '1');
      Vars.gateway_register_form_container_button.css("pointer-events", "auto");
    } else if (Vars.female_button.is(":checked")){
      Vars.male_button_container.css('border', '1px solid #C3C3C3');
      Vars.female_button_container.css('border', '1px solid #3D456A');
    } else {
      Vars.male_button_container.css('border', '1px solid #C3C3C3');
      Vars.female_button_container.css('border', '1px solid #C3C3C3');
      Vars.gateway_register_form_container_button.css('opacity', '0.4');
      Vars.gateway_register_form_container_button.css("pointer-events", "none");
    }
  });

  // Register Tab Timezone Eastern Button Click
  Vars.eastern_time_button.click(function(e){
    e.stopPropagation();
    Vars.password_hide.hide();
    Vars.password_show.show();
    Vars.register_form_password_input.attr("type","password");
    if ( Vars.register_form_username_input.val() && Vars.register_form_email_input.val() && Vars.register_form_password_input.val() && Vars.register_form_age_input.val() && Vars.register_form_height_ft_input.val() && Vars.register_form_height_in_input.val() && Vars.gender_field.is(":checked") && Vars.timezone_field.is(":checked") && Vars.cardio_field.is(":checked") && Vars.chest_field.is(":checked") && Vars.legs_field.is(":checked") && Vars.back_field.is(":checked") && Vars.core_field.is(":checked") && Vars.shoulders_field.is(":checked") && Vars.arms_field.is(":checked") ) {
      Vars.timezone_buttons_container.css('border', '1px solid #3D456A');
      Vars.eastern_time_button_container.css('border', '1px solid #3D456A');
      Vars.pacific_time_button_container.css('border', '1px solid #C3C3C3');
      Vars.alaska_time_button_container.css('border', '1px solid #C3C3C3');
      Vars.central_time_button_container.css('border', '1px solid #C3C3C3');
      Vars.mountain_time_button_container.css('border', '1px solid #C3C3C3');
      Vars.hawaii_time_button_container.css('border', '1px solid #C3C3C3');
      Vars.gateway_register_form_container_button.css('opacity', '1');
      Vars.gateway_register_form_container_button.css("pointer-events", "auto");
    } else if (Vars.eastern_time_button.is(":checked")){
      Vars.timezone_buttons_container.css('border', '1px solid #3D456A');
      Vars.eastern_time_button_container.css('border', '1px solid #3D456A');
      Vars.pacific_time_button_container.css('border', '1px solid #C3C3C3');
      Vars.alaska_time_button_container.css('border', '1px solid #C3C3C3');
      Vars.central_time_button_container.css('border', '1px solid #C3C3C3');
      Vars.mountain_time_button_container.css('border', '1px solid #C3C3C3');
      Vars.hawaii_time_button_container.css('border', '1px solid #C3C3C3');
    } else {
      Vars.eastern_time_button.prop('checked', false);
      Vars.pacific_time_button.prop('checked', false);
      Vars.alaska_time_button.prop('checked', false);
      Vars.central_time_button.prop('checked', false);
      Vars.mountain_time_button.prop('checked', false);
      Vars.hawaii_time_button.prop('checked', false);
      Vars.timezone_buttons_container.css('border', '1px solid #C3C3C3');
      Vars.eastern_time_button_container.css('border', '1px solid #C3C3C3');
      Vars.pacific_time_button_container.css('border', '1px solid #C3C3C3');
      Vars.alaska_time_button_container.css('border', '1px solid #C3C3C3');
      Vars.central_time_button_container.css('border', '1px solid #C3C3C3');
      Vars.mountain_time_button_container.css('border', '1px solid #C3C3C3');
      Vars.hawaii_time_button_container.css('border', '1px solid #C3C3C3');
      Vars.gateway_register_form_container_button.css('opacity', '0.4');
      Vars.gateway_register_form_container_button.css("pointer-events", "none");
    }
  });

  // Register Tab Timezone Pacific Button Click
  Vars.pacific_time_button.click(function(e){
    e.stopPropagation();
    Vars.password_hide.hide();
    Vars.password_show.show();
    Vars.register_form_password_input.attr("type","password");
    if ( Vars.register_form_username_input.val() && Vars.register_form_email_input.val() && Vars.register_form_password_input.val() && Vars.register_form_age_input.val() && Vars.register_form_height_ft_input.val() && Vars.register_form_height_in_input.val() && Vars.gender_field.is(":checked") && Vars.timezone_field.is(":checked") && Vars.cardio_field.is(":checked") && Vars.chest_field.is(":checked") && Vars.legs_field.is(":checked") && Vars.back_field.is(":checked") && Vars.core_field.is(":checked") && Vars.shoulders_field.is(":checked") && Vars.arms_field.is(":checked") ) {
      Vars.timezone_buttons_container.css('border', '1px solid #3D456A');
      Vars.pacific_time_button_container.css('border', '1px solid #3D456A');
      Vars.eastern_time_button_container.css('border', '1px solid #C3C3C3');
      Vars.alaska_time_button_container.css('border', '1px solid #C3C3C3');
      Vars.central_time_button_container.css('border', '1px solid #C3C3C3');
      Vars.mountain_time_button_container.css('border', '1px solid #C3C3C3');
      Vars.hawaii_time_button_container.css('border', '1px solid #C3C3C3');
      Vars.gateway_register_form_container_button.css('opacity', '1');
      Vars.gateway_register_form_container_button.css("pointer-events", "auto");
    } else if (Vars.pacific_time_button.is(":checked")){
      Vars.timezone_buttons_container.css('border', '1px solid #3D456A');
      Vars.pacific_time_button_container.css('border', '1px solid #3D456A');
      Vars.eastern_time_button_container.css('border', '1px solid #C3C3C3');
      Vars.alaska_time_button_container.css('border', '1px solid #C3C3C3');
      Vars.central_time_button_container.css('border', '1px solid #C3C3C3');
      Vars.mountain_time_button_container.css('border', '1px solid #C3C3C3');
      Vars.hawaii_time_button_container.css('border', '1px solid #C3C3C3');
    } else {
      Vars.eastern_time_button.prop('checked', false);
      Vars.pacific_time_button.prop('checked', false);
      Vars.alaska_time_button.prop('checked', false);
      Vars.central_time_button.prop('checked', false);
      Vars.mountain_time_button.prop('checked', false);
      Vars.hawaii_time_button.prop('checked', false);
      Vars.timezone_buttons_container.css('border', '1px solid #C3C3C3');
      Vars.eastern_time_button_container.css('border', '1px solid #C3C3C3');
      Vars.pacific_time_button_container.css('border', '1px solid #C3C3C3');
      Vars.alaska_time_button_container.css('border', '1px solid #C3C3C3');
      Vars.central_time_button_container.css('border', '1px solid #C3C3C3');
      Vars.mountain_time_button_container.css('border', '1px solid #C3C3C3');
      Vars.hawaii_time_button_container.css('border', '1px solid #C3C3C3');
      Vars.gateway_register_form_container_button.css('opacity', '0.4');
      Vars.gateway_register_form_container_button.css("pointer-events", "none");
    }
  });


  // Register Tab Timezone Alaska Button Click
  Vars.alaska_time_button.click(function(e){
    e.stopPropagation();
    Vars.password_hide.hide();
    Vars.password_show.show();
    Vars.register_form_password_input.attr("type","password");
    if ( Vars.register_form_username_input.val() && Vars.register_form_email_input.val() && Vars.register_form_password_input.val() && Vars.register_form_age_input.val() && Vars.register_form_height_ft_input.val() && Vars.register_form_height_in_input.val() && Vars.gender_field.is(":checked") && Vars.timezone_field.is(":checked") && Vars.cardio_field.is(":checked") && Vars.chest_field.is(":checked") && Vars.legs_field.is(":checked") && Vars.back_field.is(":checked") && Vars.core_field.is(":checked") && Vars.shoulders_field.is(":checked") && Vars.arms_field.is(":checked") ) {
      Vars.timezone_buttons_container.css('border', '1px solid #3D456A');
      Vars.alaska_time_button_container.css('border', '1px solid #3D456A');
      Vars.pacific_time_button_container.css('border', '1px solid #C3C3C3');
      Vars.eastern_time_button_container.css('border', '1px solid #C3C3C3');
      Vars.central_time_button_container.css('border', '1px solid #C3C3C3');
      Vars.mountain_time_button_container.css('border', '1px solid #C3C3C3');
      Vars.hawaii_time_button_container.css('border', '1px solid #C3C3C3');
      Vars.gateway_register_form_container_button.css('opacity', '1');
      Vars.gateway_register_form_container_button.css("pointer-events", "auto");
    } else if (Vars.alaska_time_button.is(":checked")){
      Vars.timezone_buttons_container.css('border', '1px solid #3D456A');
      Vars.alaska_time_button_container.css('border', '1px solid #3D456A');
      Vars.pacific_time_button_container.css('border', '1px solid #C3C3C3');
      Vars.eastern_time_button_container.css('border', '1px solid #C3C3C3');
      Vars.central_time_button_container.css('border', '1px solid #C3C3C3');
      Vars.mountain_time_button_container.css('border', '1px solid #C3C3C3');
      Vars.hawaii_time_button_container.css('border', '1px solid #C3C3C3');
    } else {
      Vars.eastern_time_button.prop('checked', false);
      Vars.pacific_time_button.prop('checked', false);
      Vars.alaska_time_button.prop('checked', false);
      Vars.central_time_button.prop('checked', false);
      Vars.mountain_time_button.prop('checked', false);
      Vars.hawaii_time_button.prop('checked', false);
      Vars.timezone_buttons_container.css('border', '1px solid #C3C3C3');
      Vars.eastern_time_button_container.css('border', '1px solid #C3C3C3');
      Vars.pacific_time_button_container.css('border', '1px solid #C3C3C3');
      Vars.alaska_time_button_container.css('border', '1px solid #C3C3C3');
      Vars.central_time_button_container.css('border', '1px solid #C3C3C3');
      Vars.mountain_time_button_container.css('border', '1px solid #C3C3C3');
      Vars.hawaii_time_button_container.css('border', '1px solid #C3C3C3');
      Vars.gateway_register_form_container_button.css('opacity', '0.4');
      Vars.gateway_register_form_container_button.css("pointer-events", "none");
    }
  });


  // Register Tab Timezone Central Button Click
  Vars.central_time_button.click(function(e){
    e.stopPropagation();
    Vars.password_hide.hide();
    Vars.password_show.show();
    Vars.register_form_password_input.attr("type","password");
    if ( Vars.register_form_username_input.val() && Vars.register_form_email_input.val() && Vars.register_form_password_input.val() && Vars.register_form_age_input.val() && Vars.register_form_height_ft_input.val() && Vars.register_form_height_in_input.val() && Vars.gender_field.is(":checked") && Vars.timezone_field.is(":checked") && Vars.cardio_field.is(":checked") && Vars.chest_field.is(":checked") && Vars.legs_field.is(":checked") && Vars.back_field.is(":checked") && Vars.core_field.is(":checked") && Vars.shoulders_field.is(":checked") && Vars.arms_field.is(":checked") ) {
      Vars.timezone_buttons_container.css('border', '1px solid #3D456A');
      Vars.central_time_button_container.css('border', '1px solid #3D456A');
      Vars.pacific_time_button_container.css('border', '1px solid #C3C3C3');
      Vars.eastern_time_button_container.css('border', '1px solid #C3C3C3');
      Vars.alaska_time_button_container.css('border', '1px solid #C3C3C3');
      Vars.mountain_time_button_container.css('border', '1px solid #C3C3C3');
      Vars.hawaii_time_button_container.css('border', '1px solid #C3C3C3');
      Vars.gateway_register_form_container_button.css('opacity', '1');
      Vars.gateway_register_form_container_button.css("pointer-events", "auto");
    } else if (Vars.central_time_button.is(":checked")){
      Vars.timezone_buttons_container.css('border', '1px solid #3D456A');
      Vars.central_time_button_container.css('border', '1px solid #3D456A');
      Vars.pacific_time_button_container.css('border', '1px solid #C3C3C3');
      Vars.eastern_time_button_container.css('border', '1px solid #C3C3C3');
      Vars.alaska_time_button_container.css('border', '1px solid #C3C3C3');
      Vars.mountain_time_button_container.css('border', '1px solid #C3C3C3');
      Vars.hawaii_time_button_container.css('border', '1px solid #C3C3C3');
    } else {
      Vars.eastern_time_button.prop('checked', false);
      Vars.pacific_time_button.prop('checked', false);
      Vars.alaska_time_button.prop('checked', false);
      Vars.central_time_button.prop('checked', false);
      Vars.mountain_time_button.prop('checked', false);
      Vars.hawaii_time_button.prop('checked', false);
      Vars.timezone_buttons_container.css('border', '1px solid #C3C3C3');
      Vars.eastern_time_button_container.css('border', '1px solid #C3C3C3');
      Vars.pacific_time_button_container.css('border', '1px solid #C3C3C3');
      Vars.alaska_time_button_container.css('border', '1px solid #C3C3C3');
      Vars.central_time_button_container.css('border', '1px solid #C3C3C3');
      Vars.mountain_time_button_container.css('border', '1px solid #C3C3C3');
      Vars.hawaii_time_button_container.css('border', '1px solid #C3C3C3');
      Vars.gateway_register_form_container_button.css('opacity', '0.4');
      Vars.gateway_register_form_container_button.css("pointer-events", "none");
    }
  });


  // Register Tab Timezone Mountain Button Click
  Vars.mountain_time_button.click(function(e){
    e.stopPropagation();
    Vars.password_hide.hide();
    Vars.password_show.show();
    Vars.register_form_password_input.attr("type","password");
    if ( Vars.register_form_username_input.val() && Vars.register_form_email_input.val() && Vars.register_form_password_input.val() && Vars.register_form_age_input.val() && Vars.register_form_height_ft_input.val() && Vars.register_form_height_in_input.val() && Vars.gender_field.is(":checked") && Vars.timezone_field.is(":checked") && Vars.cardio_field.is(":checked") && Vars.chest_field.is(":checked") && Vars.legs_field.is(":checked") && Vars.back_field.is(":checked") && Vars.core_field.is(":checked") && Vars.shoulders_field.is(":checked") && Vars.arms_field.is(":checked") ) {
      Vars.timezone_buttons_container.css('border', '1px solid #3D456A');
      Vars.mountain_time_button_container.css('border', '1px solid #3D456A');
      Vars.pacific_time_button_container.css('border', '1px solid #C3C3C3');
      Vars.eastern_time_button_container.css('border', '1px solid #C3C3C3');
      Vars.alaska_time_button_container.css('border', '1px solid #C3C3C3');
      Vars.central_time_button_container.css('border', '1px solid #C3C3C3');
      Vars.hawaii_time_button_container.css('border', '1px solid #C3C3C3');
      Vars.gateway_register_form_container_button.css('opacity', '1');
      Vars.gateway_register_form_container_button.css("pointer-events", "auto");
    } else if (Vars.mountain_time_button.is(":checked")){
      Vars.timezone_buttons_container.css('border', '1px solid #3D456A');
      Vars.mountain_time_button_container.css('border', '1px solid #3D456A');
      Vars.pacific_time_button_container.css('border', '1px solid #C3C3C3');
      Vars.eastern_time_button_container.css('border', '1px solid #C3C3C3');
      Vars.alaska_time_button_container.css('border', '1px solid #C3C3C3');
      Vars.central_time_button_container.css('border', '1px solid #C3C3C3');
      Vars.hawaii_time_button_container.css('border', '1px solid #C3C3C3');
    } else {
      Vars.eastern_time_button.prop('checked', false);
      Vars.pacific_time_button.prop('checked', false);
      Vars.alaska_time_button.prop('checked', false);
      Vars.central_time_button.prop('checked', false);
      Vars.mountain_time_button.prop('checked', false);
      Vars.hawaii_time_button.prop('checked', false);
      Vars.timezone_buttons_container.css('border', '1px solid #C3C3C3');
      Vars.eastern_time_button_container.css('border', '1px solid #C3C3C3');
      Vars.pacific_time_button_container.css('border', '1px solid #C3C3C3');
      Vars.alaska_time_button_container.css('border', '1px solid #C3C3C3');
      Vars.central_time_button_container.css('border', '1px solid #C3C3C3');
      Vars.mountain_time_button_container.css('border', '1px solid #C3C3C3');
      Vars.hawaii_time_button_container.css('border', '1px solid #C3C3C3');
      Vars.gateway_register_form_container_button.css('opacity', '0.4');
      Vars.gateway_register_form_container_button.css("pointer-events", "none");
    }
  });


  // Register Tab Timezone Hawaii Button Click
  Vars.hawaii_time_button.click(function(e){
    e.stopPropagation();
    Vars.password_hide.hide();
    Vars.password_show.show();
    Vars.register_form_password_input.attr("type","password");
    if ( Vars.register_form_username_input.val() && Vars.register_form_email_input.val() && Vars.register_form_password_input.val() && Vars.register_form_age_input.val() && Vars.register_form_height_ft_input.val() && Vars.register_form_height_in_input.val() && Vars.gender_field.is(":checked") && Vars.timezone_field.is(":checked") && Vars.cardio_field.is(":checked") && Vars.chest_field.is(":checked") && Vars.legs_field.is(":checked") && Vars.back_field.is(":checked") && Vars.core_field.is(":checked") && Vars.shoulders_field.is(":checked") && Vars.arms_field.is(":checked") ) {
      Vars.timezone_buttons_container.css('border', '1px solid #3D456A');
      Vars.hawaii_time_button_container.css('border', '1px solid #3D456A');
      Vars.pacific_time_button_container.css('border', '1px solid #C3C3C3');
      Vars.eastern_time_button_container.css('border', '1px solid #C3C3C3');
      Vars.alaska_time_button_container.css('border', '1px solid #C3C3C3');
      Vars.central_time_button_container.css('border', '1px solid #C3C3C3');
      Vars.mountain_time_button_container.css('border', '1px solid #C3C3C3');
      Vars.gateway_register_form_container_button.css('opacity', '1');
      Vars.gateway_register_form_container_button.css("pointer-events", "auto");
    } else if (Vars.hawaii_time_button.is(":checked")){
      Vars.timezone_buttons_container.css('border', '1px solid #3D456A');
      Vars.hawaii_time_button_container.css('border', '1px solid #3D456A');
      Vars.pacific_time_button_container.css('border', '1px solid #C3C3C3');
      Vars.eastern_time_button_container.css('border', '1px solid #C3C3C3');
      Vars.alaska_time_button_container.css('border', '1px solid #C3C3C3');
      Vars.central_time_button_container.css('border', '1px solid #C3C3C3');
      Vars.mountain_time_button_container.css('border', '1px solid #C3C3C3');
    } else {
      Vars.eastern_time_button.prop('checked', false);
      Vars.pacific_time_button.prop('checked', false);
      Vars.alaska_time_button.prop('checked', false);
      Vars.central_time_button.prop('checked', false);
      Vars.mountain_time_button.prop('checked', false);
      Vars.hawaii_time_button.prop('checked', false);
      Vars.timezone_buttons_container.css('border', '1px solid #C3C3C3');
      Vars.eastern_time_button_container.css('border', '1px solid #C3C3C3');
      Vars.pacific_time_button_container.css('border', '1px solid #C3C3C3');
      Vars.alaska_time_button_container.css('border', '1px solid #C3C3C3');
      Vars.central_time_button_container.css('border', '1px solid #C3C3C3');
      Vars.mountain_time_button_container.css('border', '1px solid #C3C3C3');
      Vars.hawaii_time_button_container.css('border', '1px solid #C3C3C3');
      Vars.gateway_register_form_container_button.css('opacity', '0.4');
      Vars.gateway_register_form_container_button.css("pointer-events", "none");
    }
  });

  // Register Tab Cardio Beginner Button Click
  Vars.cardio_beginner_button.click(function(e){
    e.stopPropagation();
    Vars.password_hide.hide();
    Vars.password_show.show();
    Vars.register_form_password_input.attr("type","password");
    if ( Vars.register_form_username_input.val() && Vars.register_form_email_input.val() && Vars.register_form_password_input.val() && Vars.register_form_age_input.val() && Vars.register_form_height_ft_input.val() && Vars.register_form_height_in_input.val() && Vars.gender_field.is(":checked") && Vars.timezone_field.is(":checked") && Vars.cardio_field.is(":checked") && Vars.chest_field.is(":checked") && Vars.legs_field.is(":checked") && Vars.back_field.is(":checked") && Vars.core_field.is(":checked") && Vars.shoulders_field.is(":checked") && Vars.arms_field.is(":checked") ) {
      Vars.cardio_buttons_container.css('border', '1px solid #3D456A');
      Vars.cardio_button_container_beginner.css('border', '1px solid #3D456A');
      Vars.cardio_button_container_novice.css('border', '1px solid #C3C3C3');
      Vars.cardio_button_container_intermediate.css('border', '1px solid #C3C3C3');
      Vars.cardio_button_container_experienced.css('border', '1px solid #C3C3C3');
      Vars.gateway_register_form_container_button.css('opacity', '1');
      Vars.gateway_register_form_container_button.css("pointer-events", "auto");
    } else if (Vars.cardio_beginner_button.is(":checked")){
      Vars.cardio_buttons_container.css('border', '1px solid #3D456A');
      Vars.cardio_button_container_beginner.css('border', '1px solid #3D456A');
      Vars.cardio_button_container_novice.css('border', '1px solid #C3C3C3');
      Vars.cardio_button_container_intermediate.css('border', '1px solid #C3C3C3');
      Vars.cardio_button_container_experienced.css('border', '1px solid #C3C3C3');
    } else {
      Vars.cardio_beginner_button.prop('checked', false);
      Vars.cardio_novice_button.prop('checked', false);
      Vars.cardio_intermediate_button.prop('checked', false);
      Vars.cardio_experienced_button.prop('checked', false);
      Vars.cardio_buttons_container.css('border', '1px solid #C3C3C3');
      Vars.cardio_button_container_beginner.css('border', '1px solid #C3C3C3');
      Vars.cardio_button_container_novice.css('border', '1px solid #C3C3C3');
      Vars.cardio_button_container_intermediate.css('border', '1px solid #C3C3C3');
      Vars.cardio_button_container_experienced.css('border', '1px solid #C3C3C3');
      Vars.gateway_register_form_container_button.css('opacity', '0.4');
      Vars.gateway_register_form_container_button.css("pointer-events", "none");
    }
  });

  // Register Tab Cardio Novice Button Click
  Vars.cardio_novice_button.click(function(e){
    e.stopPropagation();
    Vars.password_hide.hide();
    Vars.password_show.show();
    Vars.register_form_password_input.attr("type","password");
    if ( Vars.register_form_username_input.val() && Vars.register_form_email_input.val() && Vars.register_form_password_input.val() && Vars.register_form_age_input.val() && Vars.register_form_height_ft_input.val() && Vars.register_form_height_in_input.val() && Vars.gender_field.is(":checked") && Vars.timezone_field.is(":checked") && Vars.cardio_field.is(":checked") && Vars.chest_field.is(":checked") && Vars.legs_field.is(":checked") && Vars.back_field.is(":checked") && Vars.core_field.is(":checked") && Vars.shoulders_field.is(":checked") && Vars.arms_field.is(":checked") ) {
      Vars.cardio_buttons_container.css('border', '1px solid #3D456A');
      Vars.cardio_button_container_novice.css('border', '1px solid #3D456A');
      Vars.cardio_button_container_beginner.css('border', '1px solid #C3C3C3');
      Vars.cardio_button_container_intermediate.css('border', '1px solid #C3C3C3');
      Vars.cardio_button_container_experienced.css('border', '1px solid #C3C3C3');
      Vars.gateway_register_form_container_button.css('opacity', '1');
      Vars.gateway_register_form_container_button.css("pointer-events", "auto");
    } else if (Vars.cardio_novice_button.is(":checked")){
      Vars.cardio_buttons_container.css('border', '1px solid #3D456A');
      Vars.cardio_button_container_novice.css('border', '1px solid #3D456A');
      Vars.cardio_button_container_beginner.css('border', '1px solid #C3C3C3');
      Vars.cardio_button_container_intermediate.css('border', '1px solid #C3C3C3');
      Vars.cardio_button_container_experienced.css('border', '1px solid #C3C3C3');
    } else {
      Vars.cardio_beginner_button.prop('checked', false);
      Vars.cardio_novice_button.prop('checked', false);
      Vars.cardio_intermediate_button.prop('checked', false);
      Vars.cardio_experienced_button.prop('checked', false);
      Vars.cardio_buttons_container.css('border', '1px solid #C3C3C3');
      Vars.cardio_button_container_beginner.css('border', '1px solid #C3C3C3');
      Vars.cardio_button_container_novice.css('border', '1px solid #C3C3C3');
      Vars.cardio_button_container_intermediate.css('border', '1px solid #C3C3C3');
      Vars.cardio_button_container_experienced.css('border', '1px solid #C3C3C3');
      Vars.gateway_register_form_container_button.css('opacity', '0.4');
      Vars.gateway_register_form_container_button.css("pointer-events", "none");
    }
  });

  // Register Tab Cardio Intermediate Button Click
  Vars.cardio_intermediate_button.click(function(e){
    e.stopPropagation();
    Vars.password_hide.hide();
    Vars.password_show.show();
    Vars.register_form_password_input.attr("type","password");
    if ( Vars.register_form_username_input.val() && Vars.register_form_email_input.val() && Vars.register_form_password_input.val() && Vars.register_form_age_input.val() && Vars.register_form_height_ft_input.val() && Vars.register_form_height_in_input.val() && Vars.gender_field.is(":checked") && Vars.timezone_field.is(":checked") && Vars.cardio_field.is(":checked") && Vars.chest_field.is(":checked") && Vars.legs_field.is(":checked") && Vars.back_field.is(":checked") && Vars.core_field.is(":checked") && Vars.shoulders_field.is(":checked") && Vars.arms_field.is(":checked") ) {
      Vars.cardio_buttons_container.css('border', '1px solid #3D456A');
      Vars.cardio_button_container_intermediate.css('border', '1px solid #3D456A');
      Vars.cardio_button_container_novice.css('border', '1px solid #C3C3C3');
      Vars.cardio_button_container_beginner.css('border', '1px solid #C3C3C3');
      Vars.cardio_button_container_experienced.css('border', '1px solid #C3C3C3');
      Vars.gateway_register_form_container_button.css('opacity', '1');
      Vars.gateway_register_form_container_button.css("pointer-events", "auto");
    } else if (Vars.cardio_intermediate_button.is(":checked")){
      Vars.cardio_buttons_container.css('border', '1px solid #3D456A');
      Vars.cardio_button_container_intermediate.css('border', '1px solid #3D456A');
      Vars.cardio_button_container_novice.css('border', '1px solid #C3C3C3');
      Vars.cardio_button_container_beginner.css('border', '1px solid #C3C3C3');
      Vars.cardio_button_container_experienced.css('border', '1px solid #C3C3C3');
    } else {
      Vars.cardio_beginner_button.prop('checked', false);
      Vars.cardio_novice_button.prop('checked', false);
      Vars.cardio_intermediate_button.prop('checked', false);
      Vars.cardio_experienced_button.prop('checked', false);
      Vars.cardio_buttons_container.css('border', '1px solid #C3C3C3');
      Vars.cardio_button_container_beginner.css('border', '1px solid #C3C3C3');
      Vars.cardio_button_container_novice.css('border', '1px solid #C3C3C3');
      Vars.cardio_button_container_intermediate.css('border', '1px solid #C3C3C3');
      Vars.cardio_button_container_experienced.css('border', '1px solid #C3C3C3');
      Vars.gateway_register_form_container_button.css('opacity', '0.4');
      Vars.gateway_register_form_container_button.css("pointer-events", "none");
    }
  });

  // Register Tab Cardio Experienced Button Click
  Vars.cardio_experienced_button.click(function(e){
    e.stopPropagation();
    Vars.password_hide.hide();
    Vars.password_show.show();
    Vars.register_form_password_input.attr("type","password");
    if ( Vars.register_form_username_input.val() && Vars.register_form_email_input.val() && Vars.register_form_password_input.val() && Vars.register_form_age_input.val() && Vars.register_form_height_ft_input.val() && Vars.register_form_height_in_input.val() && Vars.gender_field.is(":checked") && Vars.timezone_field.is(":checked") && Vars.cardio_field.is(":checked") && Vars.chest_field.is(":checked") && Vars.legs_field.is(":checked") && Vars.back_field.is(":checked") && Vars.core_field.is(":checked") && Vars.shoulders_field.is(":checked") && Vars.arms_field.is(":checked") ) {
      Vars.cardio_buttons_container.css('border', '1px solid #3D456A');
      Vars.cardio_button_container_experienced.css('border', '1px solid #3D456A');
      Vars.cardio_button_container_intermediate.css('border', '1px solid #C3C3C3');
      Vars.cardio_button_container_novice.css('border', '1px solid #C3C3C3');
      Vars.cardio_button_container_beginner.css('border', '1px solid #C3C3C3');
      Vars.gateway_register_form_container_button.css('opacity', '1');
      Vars.gateway_register_form_container_button.css("pointer-events", "auto");
    } else if (Vars.cardio_experienced_button.is(":checked")){
      Vars.cardio_buttons_container.css('border', '1px solid #3D456A');
      Vars.cardio_button_container_experienced.css('border', '1px solid #3D456A');
      Vars.cardio_button_container_intermediate.css('border', '1px solid #C3C3C3');
      Vars.cardio_button_container_novice.css('border', '1px solid #C3C3C3');
      Vars.cardio_button_container_beginner.css('border', '1px solid #C3C3C3');
    } else {
      Vars.cardio_beginner_button.prop('checked', false);
      Vars.cardio_novice_button.prop('checked', false);
      Vars.cardio_intermediate_button.prop('checked', false);
      Vars.cardio_experienced_button.prop('checked', false);
      Vars.cardio_buttons_container.css('border', '1px solid #C3C3C3');
      Vars.cardio_button_container_beginner.css('border', '1px solid #C3C3C3');
      Vars.cardio_button_container_novice.css('border', '1px solid #C3C3C3');
      Vars.cardio_button_container_intermediate.css('border', '1px solid #C3C3C3');
      Vars.cardio_button_container_experienced.css('border', '1px solid #C3C3C3');
      Vars.gateway_register_form_container_button.css('opacity', '0.4');
      Vars.gateway_register_form_container_button.css("pointer-events", "none");
    }
  });

  // Register Tab Chest Beginner Button Click
  Vars.chest_beginner_button.click(function(e){
    e.stopPropagation();
    Vars.password_hide.hide();
    Vars.password_show.show();
    Vars.register_form_password_input.attr("type","password");
    if ( Vars.register_form_username_input.val() && Vars.register_form_email_input.val() && Vars.register_form_password_input.val() && Vars.register_form_age_input.val() && Vars.register_form_height_ft_input.val() && Vars.register_form_height_in_input.val() && Vars.gender_field.is(":checked") && Vars.timezone_field.is(":checked") && Vars.cardio_field.is(":checked") && Vars.chest_field.is(":checked") && Vars.legs_field.is(":checked") && Vars.back_field.is(":checked") && Vars.core_field.is(":checked") && Vars.shoulders_field.is(":checked") && Vars.arms_field.is(":checked") ) {
      Vars.chest_buttons_container.css('border', '1px solid #3D456A');
      Vars.chest_button_container_beginner.css('border', '1px solid #3D456A');
      Vars.chest_button_container_novice.css('border', '1px solid #C3C3C3');
      Vars.chest_button_container_intermediate.css('border', '1px solid #C3C3C3');
      Vars.chest_button_container_experienced.css('border', '1px solid #C3C3C3');
      Vars.gateway_register_form_container_button.css('opacity', '1');
      Vars.gateway_register_form_container_button.css("pointer-events", "auto");
    } else if (Vars.chest_beginner_button.is(":checked")) {
      Vars.chest_buttons_container.css('border', '1px solid #3D456A');
      Vars.chest_button_container_beginner.css('border', '1px solid #3D456A');
      Vars.chest_button_container_novice.css('border', '1px solid #C3C3C3');
      Vars.chest_button_container_intermediate.css('border', '1px solid #C3C3C3');
      Vars.chest_button_container_experienced.css('border', '1px solid #C3C3C3');
    } else {
      Vars.chest_beginner_button.prop('checked', false);
      Vars.chest_novice_button.prop('checked', false);
      Vars.chest_intermediate_button.prop('checked', false);
      Vars.chest_experienced_button.prop('checked', false);
      Vars.chest_buttons_container.css('border', '1px solid #C3C3C3');
      Vars.chest_button_container_beginner.css('border', '1px solid #C3C3C3');
      Vars.chest_button_container_novice.css('border', '1px solid #C3C3C3');
      Vars.chest_button_container_intermediate.css('border', '1px solid #C3C3C3');
      Vars.chest_button_container_experienced.css('border', '1px solid #C3C3C3');
      Vars.gateway_register_form_container_button.css('opacity', '0.4');
      Vars.gateway_register_form_container_button.css("pointer-events", "none");
    }
  });

  // Register Tab Chest Novice Button Click
  Vars.chest_novice_button.click(function(e){
    e.stopPropagation();
    Vars.password_hide.hide();
    Vars.password_show.show();
    Vars.register_form_password_input.attr("type","password");
    if ( Vars.register_form_username_input.val() && Vars.register_form_email_input.val() && Vars.register_form_password_input.val() && Vars.register_form_age_input.val() && Vars.register_form_height_ft_input.val() && Vars.register_form_height_in_input.val() && Vars.gender_field.is(":checked") && Vars.timezone_field.is(":checked") && Vars.cardio_field.is(":checked") && Vars.chest_field.is(":checked") && Vars.legs_field.is(":checked") && Vars.back_field.is(":checked") && Vars.core_field.is(":checked") && Vars.shoulders_field.is(":checked") && Vars.arms_field.is(":checked") ) {
      Vars.chest_buttons_container.css('border', '1px solid #3D456A');
      Vars.chest_button_container_novice.css('border', '1px solid #3D456A');
      Vars.chest_button_container_beginner.css('border', '1px solid #C3C3C3');
      Vars.chest_button_container_intermediate.css('border', '1px solid #C3C3C3');
      Vars.chest_button_container_experienced.css('border', '1px solid #C3C3C3');
      Vars.gateway_register_form_container_button.css('opacity', '1');
      Vars.gateway_register_form_container_button.css("pointer-events", "auto");
    } else if (Vars.chest_novice_button.is(":checked")) {
      Vars.chest_buttons_container.css('border', '1px solid #3D456A');
      Vars.chest_button_container_novice.css('border', '1px solid #3D456A');
      Vars.chest_button_container_beginner.css('border', '1px solid #C3C3C3');
      Vars.chest_button_container_intermediate.css('border', '1px solid #C3C3C3');
      Vars.chest_button_container_experienced.css('border', '1px solid #C3C3C3');
    } else {
      Vars.chest_beginner_button.prop('checked', false);
      Vars.chest_novice_button.prop('checked', false);
      Vars.chest_intermediate_button.prop('checked', false);
      Vars.chest_experienced_button.prop('checked', false);
      Vars.chest_buttons_container.css('border', '1px solid #C3C3C3');
      Vars.chest_button_container_beginner.css('border', '1px solid #C3C3C3');
      Vars.chest_button_container_novice.css('border', '1px solid #C3C3C3');
      Vars.chest_button_container_intermediate.css('border', '1px solid #C3C3C3');
      Vars.chest_button_container_experienced.css('border', '1px solid #C3C3C3');
      Vars.gateway_register_form_container_button.css('opacity', '0.4');
      Vars.gateway_register_form_container_button.css("pointer-events", "none");
    }
  });

  // Register Tab Chest Intermediate Button Click
  Vars.chest_intermediate_button.click(function(e){
    e.stopPropagation();
    Vars.password_hide.hide();
    Vars.password_show.show();
    Vars.register_form_password_input.attr("type","password");
    if ( Vars.register_form_username_input.val() && Vars.register_form_email_input.val() && Vars.register_form_password_input.val() && Vars.register_form_age_input.val() && Vars.register_form_height_ft_input.val() && Vars.register_form_height_in_input.val() && Vars.gender_field.is(":checked") && Vars.timezone_field.is(":checked") && Vars.cardio_field.is(":checked") && Vars.chest_field.is(":checked") && Vars.legs_field.is(":checked") && Vars.back_field.is(":checked") && Vars.core_field.is(":checked") && Vars.shoulders_field.is(":checked") && Vars.arms_field.is(":checked") ) {
      Vars.chest_buttons_container.css('border', '1px solid #3D456A');
      Vars.chest_button_container_intermediate.css('border', '1px solid #3D456A');
      Vars.chest_button_container_beginner.css('border', '1px solid #C3C3C3');
      Vars.chest_button_container_novice.css('border', '1px solid #C3C3C3');
      Vars.chest_button_container_experienced.css('border', '1px solid #C3C3C3');
      Vars.gateway_register_form_container_button.css('opacity', '1');
      Vars.gateway_register_form_container_button.css("pointer-events", "auto");
    } else if (Vars.chest_intermediate_button.is(":checked")) {
      Vars.chest_buttons_container.css('border', '1px solid #3D456A');
      Vars.chest_button_container_intermediate.css('border', '1px solid #3D456A');
      Vars.chest_button_container_beginner.css('border', '1px solid #C3C3C3');
      Vars.chest_button_container_novice.css('border', '1px solid #C3C3C3');
      Vars.chest_button_container_experienced.css('border', '1px solid #C3C3C3');
    } else {
      Vars.chest_beginner_button.prop('checked', false);
      Vars.chest_novice_button.prop('checked', false);
      Vars.chest_intermediate_button.prop('checked', false);
      Vars.chest_experienced_button.prop('checked', false);
      Vars.chest_buttons_container.css('border', '1px solid #C3C3C3');
      Vars.chest_button_container_beginner.css('border', '1px solid #C3C3C3');
      Vars.chest_button_container_novice.css('border', '1px solid #C3C3C3');
      Vars.chest_button_container_intermediate.css('border', '1px solid #C3C3C3');
      Vars.chest_button_container_experienced.css('border', '1px solid #C3C3C3');
      Vars.gateway_register_form_container_button.css('opacity', '0.4');
      Vars.gateway_register_form_container_button.css("pointer-events", "none");
    }
  });


  // Register Tab Chest Experienced Button Click
  Vars.chest_experienced_button.click(function(e){
    e.stopPropagation();
    Vars.password_hide.hide();
    Vars.password_show.show();
    Vars.register_form_password_input.attr("type","password");
    if ( Vars.register_form_username_input.val() && Vars.register_form_email_input.val() && Vars.register_form_password_input.val() && Vars.register_form_age_input.val() && Vars.register_form_height_ft_input.val() && Vars.register_form_height_in_input.val() && Vars.gender_field.is(":checked") && Vars.timezone_field.is(":checked") && Vars.cardio_field.is(":checked") && Vars.chest_field.is(":checked") && Vars.legs_field.is(":checked") && Vars.back_field.is(":checked") && Vars.core_field.is(":checked") && Vars.shoulders_field.is(":checked") && Vars.arms_field.is(":checked") ) {
      Vars.chest_buttons_container.css('border', '1px solid #3D456A');
      Vars.chest_button_container_experienced.css('border', '1px solid #3D456A');
      Vars.chest_button_container_beginner.css('border', '1px solid #C3C3C3');
      Vars.chest_button_container_novice.css('border', '1px solid #C3C3C3');
      Vars.chest_button_container_intermediate.css('border', '1px solid #C3C3C3');
      Vars.gateway_register_form_container_button.css('opacity', '1');
      Vars.gateway_register_form_container_button.css("pointer-events", "auto");
    } else if (Vars.chest_experienced_button.is(":checked")) {
      Vars.chest_buttons_container.css('border', '1px solid #3D456A');
      Vars.chest_button_container_experienced.css('border', '1px solid #3D456A');
      Vars.chest_button_container_beginner.css('border', '1px solid #C3C3C3');
      Vars.chest_button_container_novice.css('border', '1px solid #C3C3C3');
      Vars.chest_button_container_intermediate.css('border', '1px solid #C3C3C3');
    } else {
      Vars.chest_beginner_button.prop('checked', false);
      Vars.chest_novice_button.prop('checked', false);
      Vars.chest_intermediate_button.prop('checked', false);
      Vars.chest_experienced_button.prop('checked', false);
      Vars.chest_buttons_container.css('border', '1px solid #C3C3C3');
      Vars.chest_button_container_beginner.css('border', '1px solid #C3C3C3');
      Vars.chest_button_container_novice.css('border', '1px solid #C3C3C3');
      Vars.chest_button_container_intermediate.css('border', '1px solid #C3C3C3');
      Vars.chest_button_container_experienced.css('border', '1px solid #C3C3C3');
      Vars.gateway_register_form_container_button.css('opacity', '0.4');
      Vars.gateway_register_form_container_button.css("pointer-events", "none");
    }
  });


  // Register Tab Legs Beginner Button Click
  Vars.legs_beginner_button.click(function(e){
    e.stopPropagation();
    Vars.password_hide.hide();
    Vars.password_show.show();
    Vars.register_form_password_input.attr("type","password");
    if ( Vars.register_form_username_input.val() && Vars.register_form_email_input.val() && Vars.register_form_password_input.val() && Vars.register_form_age_input.val() && Vars.register_form_height_ft_input.val() && Vars.register_form_height_in_input.val() && Vars.gender_field.is(":checked") && Vars.timezone_field.is(":checked") && Vars.cardio_field.is(":checked") && Vars.chest_field.is(":checked") && Vars.legs_field.is(":checked") && Vars.back_field.is(":checked") && Vars.core_field.is(":checked") && Vars.shoulders_field.is(":checked") && Vars.arms_field.is(":checked") ) {
      Vars.legs_buttons_container.css('border', '1px solid #3D456A');
      Vars.legs_button_container_beginner.css('border', '1px solid #3D456A');
      Vars.legs_button_container_novice.css('border', '1px solid #C3C3C3');
      Vars.legs_button_container_intermediate.css('border', '1px solid #C3C3C3');
      Vars.legs_button_container_experienced.css('border', '1px solid #C3C3C3');
      Vars.gateway_register_form_container_button.css('opacity', '1');
      Vars.gateway_register_form_container_button.css("pointer-events", "auto");
    } else if (Vars.legs_beginner_button.is(":checked")) {
      Vars.legs_buttons_container.css('border', '1px solid #3D456A');
      Vars.legs_button_container_beginner.css('border', '1px solid #3D456A');
      Vars.legs_button_container_novice.css('border', '1px solid #C3C3C3');
      Vars.legs_button_container_intermediate.css('border', '1px solid #C3C3C3');
      Vars.legs_button_container_experienced.css('border', '1px solid #C3C3C3');
    } else {
      Vars.legs_novice_button.prop('checked', false);
      Vars.legs_beginner_button.prop('checked', false);
      Vars.legs_intermediate_button.prop('checked', false);
      Vars.legs_experienced_button.prop('checked', false);
      Vars.legs_buttons_container.css('border', '1px solid #C3C3C3');
      Vars.legs_button_container_beginner.css('border', '1px solid #C3C3C3');
      Vars.legs_button_container_novice.css('border', '1px solid #C3C3C3');
      Vars.legs_button_container_intermediate.css('border', '1px solid #C3C3C3');
      Vars.legs_button_container_experienced.css('border', '1px solid #C3C3C3');
      Vars.gateway_register_form_container_button.css('opacity', '0.4');
      Vars.gateway_register_form_container_button.css("pointer-events", "none");
    }
  });

  // Register Tab Legs Novice Button Click
  Vars.legs_novice_button.click(function(e){
    e.stopPropagation();
    Vars.password_hide.hide();
    Vars.password_show.show();
    Vars.register_form_password_input.attr("type","password");
    if ( Vars.register_form_username_input.val() && Vars.register_form_email_input.val() && Vars.register_form_password_input.val() && Vars.register_form_age_input.val() && Vars.register_form_height_ft_input.val() && Vars.register_form_height_in_input.val() && Vars.gender_field.is(":checked") && Vars.timezone_field.is(":checked") && Vars.cardio_field.is(":checked") && Vars.chest_field.is(":checked") && Vars.legs_field.is(":checked") && Vars.back_field.is(":checked") && Vars.core_field.is(":checked") && Vars.shoulders_field.is(":checked") && Vars.arms_field.is(":checked") ) {
      Vars.legs_buttons_container.css('border', '1px solid #3D456A');
      Vars.legs_button_container_novice.css('border', '1px solid #3D456A');
      Vars.legs_button_container_beginner.css('border', '1px solid #C3C3C3');
      Vars.legs_button_container_intermediate.css('border', '1px solid #C3C3C3');
      Vars.legs_button_container_experienced.css('border', '1px solid #C3C3C3');
      Vars.gateway_register_form_container_button.css('opacity', '1');
      Vars.gateway_register_form_container_button.css("pointer-events", "auto");
    } else if (Vars.legs_novice_button.is(":checked")) {
      Vars.legs_buttons_container.css('border', '1px solid #3D456A');
      Vars.legs_button_container_novice.css('border', '1px solid #3D456A');
      Vars.legs_button_container_beginner.css('border', '1px solid #C3C3C3');
      Vars.legs_button_container_intermediate.css('border', '1px solid #C3C3C3');
      Vars.legs_button_container_experienced.css('border', '1px solid #C3C3C3');
    } else {
      Vars.legs_novice_button.prop('checked', false);
      Vars.legs_beginner_button.prop('checked', false);
      Vars.legs_intermediate_button.prop('checked', false);
      Vars.legs_experienced_button.prop('checked', false);
      Vars.legs_buttons_container.css('border', '1px solid #C3C3C3');
      Vars.legs_button_container_beginner.css('border', '1px solid #C3C3C3');
      Vars.legs_button_container_novice.css('border', '1px solid #C3C3C3');
      Vars.legs_button_container_intermediate.css('border', '1px solid #C3C3C3');
      Vars.legs_button_container_experienced.css('border', '1px solid #C3C3C3');
      Vars.gateway_register_form_container_button.css('opacity', '0.4');
      Vars.gateway_register_form_container_button.css("pointer-events", "none");
    }
  });

  // Register Tab Legs Intermediate Button Click
  Vars.legs_intermediate_button.click(function(e){
    e.stopPropagation();
    Vars.password_hide.hide();
    Vars.password_show.show();
    Vars.register_form_password_input.attr("type","password");
    if ( Vars.register_form_username_input.val() && Vars.register_form_email_input.val() && Vars.register_form_password_input.val() && Vars.register_form_age_input.val() && Vars.register_form_height_ft_input.val() && Vars.register_form_height_in_input.val() && Vars.gender_field.is(":checked") && Vars.timezone_field.is(":checked") && Vars.cardio_field.is(":checked") && Vars.chest_field.is(":checked") && Vars.legs_field.is(":checked") && Vars.back_field.is(":checked") && Vars.core_field.is(":checked") && Vars.shoulders_field.is(":checked") && Vars.arms_field.is(":checked") ) {
      Vars.legs_buttons_container.css('border', '1px solid #3D456A');
      Vars.legs_button_container_intermediate.css('border', '1px solid #3D456A');
      Vars.legs_button_container_beginner.css('border', '1px solid #C3C3C3');
      Vars.legs_button_container_novice.css('border', '1px solid #C3C3C3');
      Vars.legs_button_container_experienced.css('border', '1px solid #C3C3C3');
      Vars.gateway_register_form_container_button.css('opacity', '1');
      Vars.gateway_register_form_container_button.css("pointer-events", "auto");
    } else if (Vars.legs_intermediate_button.is(":checked")) {
      Vars.legs_buttons_container.css('border', '1px solid #3D456A');
      Vars.legs_button_container_intermediate.css('border', '1px solid #3D456A');
      Vars.legs_button_container_beginner.css('border', '1px solid #C3C3C3');
      Vars.legs_button_container_novice.css('border', '1px solid #C3C3C3');
      Vars.legs_button_container_experienced.css('border', '1px solid #C3C3C3');
    } else {
      Vars.legs_novice_button.prop('checked', false);
      Vars.legs_beginner_button.prop('checked', false);
      Vars.legs_intermediate_button.prop('checked', false);
      Vars.legs_experienced_button.prop('checked', false);
      Vars.legs_buttons_container.css('border', '1px solid #C3C3C3');
      Vars.legs_button_container_beginner.css('border', '1px solid #C3C3C3');
      Vars.legs_button_container_novice.css('border', '1px solid #C3C3C3');
      Vars.legs_button_container_intermediate.css('border', '1px solid #C3C3C3');
      Vars.legs_button_container_experienced.css('border', '1px solid #C3C3C3');
      Vars.gateway_register_form_container_button.css('opacity', '0.4');
      Vars.gateway_register_form_container_button.css("pointer-events", "none");
    }
  });

  // Register Tab Legs Experienced Button Click
  Vars.legs_experienced_button.click(function(e){
    e.stopPropagation();
    Vars.password_hide.hide();
    Vars.password_show.show();
    Vars.register_form_password_input.attr("type","password");
    if ( Vars.register_form_username_input.val() && Vars.register_form_email_input.val() && Vars.register_form_password_input.val() && Vars.register_form_age_input.val() && Vars.register_form_height_ft_input.val() && Vars.register_form_height_in_input.val() && Vars.gender_field.is(":checked") && Vars.timezone_field.is(":checked") && Vars.cardio_field.is(":checked") && Vars.chest_field.is(":checked") && Vars.legs_field.is(":checked") && Vars.back_field.is(":checked") && Vars.core_field.is(":checked") && Vars.shoulders_field.is(":checked") && Vars.arms_field.is(":checked") ) {
      Vars.legs_buttons_container.css('border', '1px solid #3D456A');
      Vars.legs_button_container_experienced.css('border', '1px solid #3D456A');
      Vars.legs_button_container_beginner.css('border', '1px solid #C3C3C3');
      Vars.legs_button_container_novice.css('border', '1px solid #C3C3C3');
      Vars.legs_button_container_intermediate.css('border', '1px solid #C3C3C3');
      Vars.gateway_register_form_container_button.css('opacity', '1');
      Vars.gateway_register_form_container_button.css("pointer-events", "auto");
    } else if (Vars.legs_experienced_button.is(":checked")) {
      Vars.legs_buttons_container.css('border', '1px solid #3D456A');
      Vars.legs_button_container_experienced.css('border', '1px solid #3D456A');
      Vars.legs_button_container_beginner.css('border', '1px solid #C3C3C3');
      Vars.legs_button_container_novice.css('border', '1px solid #C3C3C3');
      Vars.legs_button_container_intermediate.css('border', '1px solid #C3C3C3');
    } else {
      Vars.legs_novice_button.prop('checked', false);
      Vars.legs_beginner_button.prop('checked', false);
      Vars.legs_intermediate_button.prop('checked', false);
      Vars.legs_experienced_button.prop('checked', false);
      Vars.legs_buttons_container.css('border', '1px solid #C3C3C3');
      Vars.legs_button_container_beginner.css('border', '1px solid #C3C3C3');
      Vars.legs_button_container_novice.css('border', '1px solid #C3C3C3');
      Vars.legs_button_container_intermediate.css('border', '1px solid #C3C3C3');
      Vars.legs_button_container_experienced.css('border', '1px solid #C3C3C3');
      Vars.gateway_register_form_container_button.css('opacity', '0.4');
      Vars.gateway_register_form_container_button.css("pointer-events", "none");
    }
  });


  // Register Tab Back Beginner Button Click
  Vars.back_beginner_button.click(function(e){
    e.stopPropagation();
    Vars.password_hide.hide();
    Vars.password_show.show();
    Vars.register_form_password_input.attr("type","password");
    if ( Vars.register_form_username_input.val() && Vars.register_form_email_input.val() && Vars.register_form_password_input.val() && Vars.register_form_age_input.val() && Vars.register_form_height_ft_input.val() && Vars.register_form_height_in_input.val() && Vars.gender_field.is(":checked") && Vars.timezone_field.is(":checked") && Vars.cardio_field.is(":checked") && Vars.chest_field.is(":checked") && Vars.legs_field.is(":checked") && Vars.back_field.is(":checked") && Vars.core_field.is(":checked") && Vars.shoulders_field.is(":checked") && Vars.arms_field.is(":checked") ) {
      Vars.back_buttons_container.css('border', '1px solid #3D456A');
      Vars.back_button_container_beginner.css('border', '1px solid #3D456A');
      Vars.back_button_container_novice.css('border', '1px solid #C3C3C3');
      Vars.back_button_container_intermediate.css('border', '1px solid #C3C3C3');
      Vars.back_button_container_experienced.css('border', '1px solid #C3C3C3');
      Vars.gateway_register_form_container_button.css('opacity', '1');
      Vars.gateway_register_form_container_button.css("pointer-events", "auto");
    } else if (Vars.back_beginner_button.is(":checked")) {
      Vars.back_buttons_container.css('border', '1px solid #3D456A');
      Vars.back_button_container_beginner.css('border', '1px solid #3D456A');
      Vars.back_button_container_novice.css('border', '1px solid #C3C3C3');
      Vars.back_button_container_intermediate.css('border', '1px solid #C3C3C3');
      Vars.back_button_container_experienced.css('border', '1px solid #C3C3C3');
    } else {
      Vars.back_beginner_button.prop('checked', false);
      Vars.back_novice_button.prop('checked', false);
      Vars.back_intermediate_button.prop('checked', false);
      Vars.back_experienced_button.prop('checked', false);
      Vars.back_buttons_container.css('border', '1px solid #C3C3C3');
      Vars.back_button_container_beginner.css('border', '1px solid #C3C3C3');
      Vars.back_button_container_novice.css('border', '1px solid #C3C3C3');
      Vars.back_button_container_intermediate.css('border', '1px solid #C3C3C3');
      Vars.back_button_container_experienced.css('border', '1px solid #C3C3C3');
      Vars.gateway_register_form_container_button.css('opacity', '0.4');
      Vars.gateway_register_form_container_button.css("pointer-events", "none");
    }
  });

  // Register Tab Back Novice Button Click
  Vars.back_novice_button.click(function(e){
    e.stopPropagation();
    Vars.password_hide.hide();
    Vars.password_show.show();
    Vars.register_form_password_input.attr("type","password");
    if ( Vars.register_form_username_input.val() && Vars.register_form_email_input.val() && Vars.register_form_password_input.val() && Vars.register_form_age_input.val() && Vars.register_form_height_ft_input.val() && Vars.register_form_height_in_input.val() && Vars.gender_field.is(":checked") && Vars.timezone_field.is(":checked") && Vars.cardio_field.is(":checked") && Vars.chest_field.is(":checked") && Vars.legs_field.is(":checked") && Vars.back_field.is(":checked") && Vars.core_field.is(":checked") && Vars.shoulders_field.is(":checked") && Vars.arms_field.is(":checked") ) {
      Vars.back_buttons_container.css('border', '1px solid #3D456A');
      Vars.back_button_container_novice.css('border', '1px solid #3D456A');
      Vars.back_button_container_beginner.css('border', '1px solid #C3C3C3');
      Vars.back_button_container_intermediate.css('border', '1px solid #C3C3C3');
      Vars.back_button_container_experienced.css('border', '1px solid #C3C3C3');
      Vars.gateway_register_form_container_button.css('opacity', '1');
      Vars.gateway_register_form_container_button.css("pointer-events", "auto");
    } else if (Vars.back_novice_button.is(":checked")) {
      Vars.back_buttons_container.css('border', '1px solid #3D456A');
      Vars.back_button_container_novice.css('border', '1px solid #3D456A');
      Vars.back_button_container_beginner.css('border', '1px solid #C3C3C3');
      Vars.back_button_container_intermediate.css('border', '1px solid #C3C3C3');
      Vars.back_button_container_experienced.css('border', '1px solid #C3C3C3');
    } else {
      Vars.back_beginner_button.prop('checked', false);
      Vars.back_novice_button.prop('checked', false);
      Vars.back_intermediate_button.prop('checked', false);
      Vars.back_experienced_button.prop('checked', false);
      Vars.back_buttons_container.css('border', '1px solid #C3C3C3');
      Vars.back_button_container_beginner.css('border', '1px solid #C3C3C3');
      Vars.back_button_container_novice.css('border', '1px solid #C3C3C3');
      Vars.back_button_container_intermediate.css('border', '1px solid #C3C3C3');
      Vars.back_button_container_experienced.css('border', '1px solid #C3C3C3');
      Vars.gateway_register_form_container_button.css('opacity', '0.4');
      Vars.gateway_register_form_container_button.css("pointer-events", "none");
    }
  });


  // Register Tab Back Intermediate Button Click
  Vars.back_intermediate_button.click(function(e){
    e.stopPropagation();
    Vars.password_hide.hide();
    Vars.password_show.show();
    Vars.register_form_password_input.attr("type","password");
    if ( Vars.register_form_username_input.val() && Vars.register_form_email_input.val() && Vars.register_form_password_input.val() && Vars.register_form_age_input.val() && Vars.register_form_height_ft_input.val() && Vars.register_form_height_in_input.val() && Vars.gender_field.is(":checked") && Vars.timezone_field.is(":checked") && Vars.cardio_field.is(":checked") && Vars.chest_field.is(":checked") && Vars.legs_field.is(":checked") && Vars.back_field.is(":checked") && Vars.core_field.is(":checked") && Vars.shoulders_field.is(":checked") && Vars.arms_field.is(":checked") ) {
      Vars.back_buttons_container.css('border', '1px solid #3D456A');
      Vars.back_button_container_intermediate.css('border', '1px solid #3D456A');
      Vars.back_button_container_beginner.css('border', '1px solid #C3C3C3');
      Vars.back_button_container_novice.css('border', '1px solid #C3C3C3');
      Vars.back_button_container_experienced.css('border', '1px solid #C3C3C3');
      Vars.gateway_register_form_container_button.css('opacity', '1');
      Vars.gateway_register_form_container_button.css("pointer-events", "auto");
    } else if (Vars.back_intermediate_button.is(":checked")) {
      Vars.back_buttons_container.css('border', '1px solid #3D456A');
      Vars.back_button_container_intermediate.css('border', '1px solid #3D456A');
      Vars.back_button_container_beginner.css('border', '1px solid #C3C3C3');
      Vars.back_button_container_novice.css('border', '1px solid #C3C3C3');
      Vars.back_button_container_experienced.css('border', '1px solid #C3C3C3');
    } else {
      Vars.back_beginner_button.prop('checked', false);
      Vars.back_novice_button.prop('checked', false);
      Vars.back_intermediate_button.prop('checked', false);
      Vars.back_experienced_button.prop('checked', false);
      Vars.back_buttons_container.css('border', '1px solid #C3C3C3');
      Vars.back_button_container_beginner.css('border', '1px solid #C3C3C3');
      Vars.back_button_container_novice.css('border', '1px solid #C3C3C3');
      Vars.back_button_container_intermediate.css('border', '1px solid #C3C3C3');
      Vars.back_button_container_experienced.css('border', '1px solid #C3C3C3');
      Vars.gateway_register_form_container_button.css('opacity', '0.4');
      Vars.gateway_register_form_container_button.css("pointer-events", "none");
    }
  });


  // Register Tab Back Experienced Button Click
  Vars.back_experienced_button.click(function(e){
    e.stopPropagation();
    Vars.password_hide.hide();
    Vars.password_show.show();
    Vars.register_form_password_input.attr("type","password");
    if ( Vars.register_form_username_input.val() && Vars.register_form_email_input.val() && Vars.register_form_password_input.val() && Vars.register_form_age_input.val() && Vars.register_form_height_ft_input.val() && Vars.register_form_height_in_input.val() && Vars.gender_field.is(":checked") && Vars.timezone_field.is(":checked") && Vars.cardio_field.is(":checked") && Vars.chest_field.is(":checked") && Vars.legs_field.is(":checked") && Vars.back_field.is(":checked") && Vars.core_field.is(":checked") && Vars.shoulders_field.is(":checked") && Vars.arms_field.is(":checked") ) {
      Vars.back_buttons_container.css('border', '1px solid #3D456A');
      Vars.back_button_container_experienced.css('border', '1px solid #3D456A');
      Vars.back_button_container_beginner.css('border', '1px solid #C3C3C3');
      Vars.back_button_container_novice.css('border', '1px solid #C3C3C3');
      Vars.back_button_container_intermediate.css('border', '1px solid #C3C3C3');
      Vars.gateway_register_form_container_button.css('opacity', '1');
      Vars.gateway_register_form_container_button.css("pointer-events", "auto");
    } else if (Vars.back_experienced_button.is(":checked")) {
      Vars.back_buttons_container.css('border', '1px solid #3D456A');
      Vars.back_button_container_experienced.css('border', '1px solid #3D456A');
      Vars.back_button_container_beginner.css('border', '1px solid #C3C3C3');
      Vars.back_button_container_novice.css('border', '1px solid #C3C3C3');
      Vars.back_button_container_intermediate.css('border', '1px solid #C3C3C3');
    } else {
      Vars.back_beginner_button.prop('checked', false);
      Vars.back_novice_button.prop('checked', false);
      Vars.back_intermediate_button.prop('checked', false);
      Vars.back_experienced_button.prop('checked', false);
      Vars.back_buttons_container.css('border', '1px solid #C3C3C3');
      Vars.back_button_container_beginner.css('border', '1px solid #C3C3C3');
      Vars.back_button_container_novice.css('border', '1px solid #C3C3C3');
      Vars.back_button_container_intermediate.css('border', '1px solid #C3C3C3');
      Vars.back_button_container_experienced.css('border', '1px solid #C3C3C3');
      Vars.gateway_register_form_container_button.css('opacity', '0.4');
      Vars.gateway_register_form_container_button.css("pointer-events", "none");
    }
  });

  // Register Tab Core Beginner Button Click
  Vars.core_beginner_button.click(function(e){
    e.stopPropagation();
    Vars.password_hide.hide();
    Vars.password_show.show();
    Vars.register_form_password_input.attr("type","password");
    if ( Vars.register_form_username_input.val() && Vars.register_form_email_input.val() && Vars.register_form_password_input.val() && Vars.register_form_age_input.val() && Vars.register_form_height_ft_input.val() && Vars.register_form_height_in_input.val() && Vars.gender_field.is(":checked") && Vars.timezone_field.is(":checked") && Vars.cardio_field.is(":checked") && Vars.chest_field.is(":checked") && Vars.legs_field.is(":checked") && Vars.back_field.is(":checked") && Vars.core_field.is(":checked") && Vars.shoulders_field.is(":checked") && Vars.arms_field.is(":checked") ) {
      Vars.core_buttons_container.css('border', '1px solid #3D456A');
      Vars.core_button_container_beginner.css('border', '1px solid #3D456A');
      Vars.core_button_container_experienced.css('border', '1px solid #C3C3C3');
      Vars.core_button_container_novice.css('border', '1px solid #C3C3C3');
      Vars.core_button_container_intermediate.css('border', '1px solid #C3C3C3');
      Vars.gateway_register_form_container_button.css('opacity', '1');
      Vars.gateway_register_form_container_button.css("pointer-events", "auto");
    } else if (Vars.core_beginner_button.is(":checked")) {
      Vars.core_buttons_container.css('border', '1px solid #3D456A');
      Vars.core_button_container_beginner.css('border', '1px solid #3D456A');
      Vars.core_button_container_experienced.css('border', '1px solid #C3C3C3');
      Vars.core_button_container_novice.css('border', '1px solid #C3C3C3');
      Vars.core_button_container_intermediate.css('border', '1px solid #C3C3C3');
    } else {
      Vars.core_beginner_button.prop('checked', false);
      Vars.core_novice_button.prop('checked', false);
      Vars.core_intermediate_button.prop('checked', false);
      Vars.core_experienced_button.prop('checked', false);
      Vars.core_buttons_container.css('border', '1px solid #C3C3C3');
      Vars.core_button_container_beginner.css('border', '1px solid #C3C3C3');
      Vars.core_button_container_novice.css('border', '1px solid #C3C3C3');
      Vars.core_button_container_intermediate.css('border', '1px solid #C3C3C3');
      Vars.core_button_container_experienced.css('border', '1px solid #C3C3C3');
      Vars.gateway_register_form_container_button.css('opacity', '0.4');
      Vars.gateway_register_form_container_button.css("pointer-events", "none");
    }
  });

  // Register Tab Core Novice Button Click
  Vars.core_novice_button.click(function(e){
    e.stopPropagation();
    Vars.password_hide.hide();
    Vars.password_show.show();
    Vars.register_form_password_input.attr("type","password");
    if ( Vars.register_form_username_input.val() && Vars.register_form_email_input.val() && Vars.register_form_password_input.val() && Vars.register_form_age_input.val() && Vars.register_form_height_ft_input.val() && Vars.register_form_height_in_input.val() && Vars.gender_field.is(":checked") && Vars.timezone_field.is(":checked") && Vars.cardio_field.is(":checked") && Vars.chest_field.is(":checked") && Vars.legs_field.is(":checked") && Vars.back_field.is(":checked") && Vars.core_field.is(":checked") && Vars.shoulders_field.is(":checked") && Vars.arms_field.is(":checked") ) {
      Vars.core_buttons_container.css('border', '1px solid #3D456A');
      Vars.core_button_container_novice.css('border', '1px solid #3D456A');
      Vars.core_button_container_experienced.css('border', '1px solid #C3C3C3');
      Vars.core_button_container_beginner.css('border', '1px solid #C3C3C3');
      Vars.core_button_container_intermediate.css('border', '1px solid #C3C3C3');
      Vars.gateway_register_form_container_button.css('opacity', '1');
      Vars.gateway_register_form_container_button.css("pointer-events", "auto");
    } else if (Vars.core_novice_button.is(":checked")) {
      Vars.core_buttons_container.css('border', '1px solid #3D456A');
      Vars.core_button_container_novice.css('border', '1px solid #3D456A');
      Vars.core_button_container_experienced.css('border', '1px solid #C3C3C3');
      Vars.core_button_container_beginner.css('border', '1px solid #C3C3C3');
      Vars.core_button_container_intermediate.css('border', '1px solid #C3C3C3');
    } else {
      Vars.core_beginner_button.prop('checked', false);
      Vars.core_novice_button.prop('checked', false);
      Vars.core_intermediate_button.prop('checked', false);
      Vars.core_experienced_button.prop('checked', false);
      Vars.core_buttons_container.css('border', '1px solid #C3C3C3');
      Vars.core_button_container_beginner.css('border', '1px solid #C3C3C3');
      Vars.core_button_container_novice.css('border', '1px solid #C3C3C3');
      Vars.core_button_container_intermediate.css('border', '1px solid #C3C3C3');
      Vars.core_button_container_experienced.css('border', '1px solid #C3C3C3');
      Vars.gateway_register_form_container_button.css('opacity', '0.4');
      Vars.gateway_register_form_container_button.css("pointer-events", "none");
    }
  });

  // Register Tab Core Intermediate Button Click
  Vars.core_intermediate_button.click(function(e){
    e.stopPropagation();
    Vars.password_hide.hide();
    Vars.password_show.show();
    Vars.register_form_password_input.attr("type","password");
    if ( Vars.register_form_username_input.val() && Vars.register_form_email_input.val() && Vars.register_form_password_input.val() && Vars.register_form_age_input.val() && Vars.register_form_height_ft_input.val() && Vars.register_form_height_in_input.val() && Vars.gender_field.is(":checked") && Vars.timezone_field.is(":checked") && Vars.cardio_field.is(":checked") && Vars.chest_field.is(":checked") && Vars.legs_field.is(":checked") && Vars.back_field.is(":checked") && Vars.core_field.is(":checked") && Vars.shoulders_field.is(":checked") && Vars.arms_field.is(":checked") ) {
      Vars.core_buttons_container.css('border', '1px solid #3D456A');
      Vars.core_button_container_intermediate.css('border', '1px solid #3D456A');
      Vars.core_button_container_novice.css('border', '1px solid #C3C3C3');
      Vars.core_button_container_experienced.css('border', '1px solid #C3C3C3');
      Vars.core_button_container_beginner.css('border', '1px solid #C3C3C3');
      Vars.gateway_register_form_container_button.css('opacity', '1');
      Vars.gateway_register_form_container_button.css("pointer-events", "auto");
    } else if (Vars.core_intermediate_button.is(":checked")) {
      Vars.core_buttons_container.css('border', '1px solid #3D456A');
      Vars.core_button_container_intermediate.css('border', '1px solid #3D456A');
      Vars.core_button_container_novice.css('border', '1px solid #C3C3C3');
      Vars.core_button_container_experienced.css('border', '1px solid #C3C3C3');
      Vars.core_button_container_beginner.css('border', '1px solid #C3C3C3');
    } else {
      Vars.core_beginner_button.prop('checked', false);
      Vars.core_novice_button.prop('checked', false);
      Vars.core_intermediate_button.prop('checked', false);
      Vars.core_experienced_button.prop('checked', false);
      Vars.core_buttons_container.css('border', '1px solid #C3C3C3');
      Vars.core_button_container_beginner.css('border', '1px solid #C3C3C3');
      Vars.core_button_container_novice.css('border', '1px solid #C3C3C3');
      Vars.core_button_container_intermediate.css('border', '1px solid #C3C3C3');
      Vars.core_button_container_experienced.css('border', '1px solid #C3C3C3');
      Vars.gateway_register_form_container_button.css('opacity', '0.4');
      Vars.gateway_register_form_container_button.css("pointer-events", "none");
    }
  });


  // Register Tab Core Experienced Button Click
  Vars.core_experienced_button.click(function(e){
    e.stopPropagation(e);
    Vars.password_hide.hide();
    Vars.password_show.show();
    Vars.register_form_password_input.attr("type","password");
    if ( Vars.register_form_username_input.val() && Vars.register_form_email_input.val() && Vars.register_form_password_input.val() && Vars.register_form_age_input.val() && Vars.register_form_height_ft_input.val() && Vars.register_form_height_in_input.val() && Vars.gender_field.is(":checked") && Vars.timezone_field.is(":checked") && Vars.cardio_field.is(":checked") && Vars.chest_field.is(":checked") && Vars.legs_field.is(":checked") && Vars.back_field.is(":checked") && Vars.core_field.is(":checked") && Vars.shoulders_field.is(":checked") && Vars.arms_field.is(":checked") ) {
      Vars.core_buttons_container.css('border', '1px solid #3D456A');
      Vars.core_button_container_experienced.css('border', '1px solid #3D456A');
      Vars.core_button_container_novice.css('border', '1px solid #C3C3C3');
      Vars.core_button_container_beginner.css('border', '1px solid #C3C3C3');
      Vars.core_button_container_intermediate.css('border', '1px solid #C3C3C3');
      Vars.gateway_register_form_container_button.css('opacity', '1');
      Vars.gateway_register_form_container_button.css("pointer-events", "auto");
    } else if (Vars.core_experienced_button.is(":checked")) {
      Vars.core_buttons_container.css('border', '1px solid #3D456A');
      Vars.core_button_container_intermediate.css('border', '1px solid #3D456A');
      Vars.core_button_container_experienced.css('border', '1px solid #C3C3C3');
      Vars.core_button_container_beginner.css('border', '1px solid #C3C3C3');
      Vars.core_button_container_novice.css('border', '1px solid #C3C3C3');
    } else {
      Vars.core_beginner_button.prop('checked', false);
      Vars.core_novice_button.prop('checked', false);
      Vars.core_intermediate_button.prop('checked', false);
      Vars.core_experienced_button.prop('checked', false);
      Vars.core_buttons_container.css('border', '1px solid #C3C3C3');
      Vars.core_button_container_beginner.css('border', '1px solid #C3C3C3');
      Vars.core_button_container_novice.css('border', '1px solid #C3C3C3');
      Vars.core_button_container_intermediate.css('border', '1px solid #C3C3C3');
      Vars.core_button_container_experienced.css('border', '1px solid #C3C3C3');
      Vars.gateway_register_form_container_button.css('opacity', '0.4');
      Vars.gateway_register_form_container_button.css("pointer-events", "none");
    }
  });


  // Register Tab Shoulders Beginner Button Click
  Vars.shoulders_beginner_button.click(function(e){
    e.stopPropagation(e);
    Vars.password_hide.hide();
    Vars.password_show.show();
    Vars.register_form_password_input.attr("type","password");
    if ( Vars.register_form_username_input.val() && Vars.register_form_email_input.val() && Vars.register_form_password_input.val() && Vars.register_form_age_input.val() && Vars.register_form_height_ft_input.val() && Vars.register_form_height_in_input.val() && Vars.gender_field.is(":checked") && Vars.timezone_field.is(":checked") && Vars.cardio_field.is(":checked") && Vars.chest_field.is(":checked") && Vars.legs_field.is(":checked") && Vars.back_field.is(":checked") && Vars.core_field.is(":checked") && Vars.shoulders_field.is(":checked") && Vars.arms_field.is(":checked") ) {
      Vars.shoulders_buttons_container.css('border', '1px solid #3D456A');
      Vars.shoulders_button_container_beginner.css('border', '1px solid #3D456A');
      Vars.shoulders_button_container_novice.css('border', '1px solid #C3C3C3');
      Vars.shoulders_button_container_intermediate.css('border', '1px solid #C3C3C3');
      Vars.shoulders_button_container_experienced.css('border', '1px solid #C3C3C3');
      Vars.gateway_register_form_container_button.css('opacity', '1');
      Vars.gateway_register_form_container_button.css("pointer-events", "auto");
    } else if (Vars.shoulders_beginner_button.is(":checked")) {
      Vars.shoulders_buttons_container.css('border', '1px solid #3D456A');
      Vars.shoulders_button_container_beginner.css('border', '1px solid #3D456A');
      Vars.shoulders_button_container_novice.css('border', '1px solid #C3C3C3');
      Vars.shoulders_button_container_intermediate.css('border', '1px solid #C3C3C3');
      Vars.shoulders_button_container_experienced.css('border', '1px solid #C3C3C3');
    } else {
      Vars.shoulders_beginner_button.prop('checked', false);
      Vars.shoulders_novice_button.prop('checked', false);
      Vars.shoulders_intermediate_button.prop('checked', false);
      Vars.shoulders_experienced_button.prop('checked', false);
      Vars.shoulders_buttons_container.css('border', '1px solid #C3C3C3');
      Vars.shoulders_button_container_beginner.css('border', '1px solid #C3C3C3');
      Vars.shoulders_button_container_novice.css('border', '1px solid #C3C3C3');
      Vars.shoulders_button_container_intermediate.css('border', '1px solid #C3C3C3');
      Vars.shoulders_button_container_experienced.css('border', '1px solid #C3C3C3');
      Vars.gateway_register_form_container_button.css('opacity', '0.4');
      Vars.gateway_register_form_container_button.css("pointer-events", "none");
    }
  });

  // Register Tab Shoulders Novice Button Click
  Vars.shoulders_novice_button.click(function(e){
    e.stopPropagation(e);
    Vars.password_hide.hide();
    Vars.password_show.show();
    Vars.register_form_password_input.attr("type","password");
    if ( Vars.register_form_username_input.val() && Vars.register_form_email_input.val() && Vars.register_form_password_input.val() && Vars.register_form_age_input.val() && Vars.register_form_height_ft_input.val() && Vars.register_form_height_in_input.val() && Vars.gender_field.is(":checked") && Vars.timezone_field.is(":checked") && Vars.cardio_field.is(":checked") && Vars.chest_field.is(":checked") && Vars.legs_field.is(":checked") && Vars.back_field.is(":checked") && Vars.core_field.is(":checked") && Vars.shoulders_field.is(":checked") && Vars.arms_field.is(":checked") ) {
      Vars.shoulders_buttons_container.css('border', '1px solid #3D456A');
      Vars.shoulders_button_container_novice.css('border', '1px solid #3D456A');
      Vars.shoulders_button_container_beginner.css('border', '1px solid #C3C3C3');
      Vars.shoulders_button_container_intermediate.css('border', '1px solid #C3C3C3');
      Vars.shoulders_button_container_experienced.css('border', '1px solid #C3C3C3');
      Vars.gateway_register_form_container_button.css('opacity', '1');
      Vars.gateway_register_form_container_button.css("pointer-events", "auto");
    } else if (Vars.shoulders_novice_button.is(":checked")) {
      Vars.shoulders_buttons_container.css('border', '1px solid #3D456A');
      Vars.shoulders_button_container_novice.css('border', '1px solid #3D456A');
      Vars.shoulders_button_container_beginner.css('border', '1px solid #C3C3C3');
      Vars.shoulders_button_container_intermediate.css('border', '1px solid #C3C3C3');
      Vars.shoulders_button_container_experienced.css('border', '1px solid #C3C3C3');
    } else {
      Vars.shoulders_beginner_button.prop('checked', false);
      Vars.shoulders_novice_button.prop('checked', false);
      Vars.shoulders_intermediate_button.prop('checked', false);
      Vars.shoulders_experienced_button.prop('checked', false);
      Vars.shoulders_buttons_container.css('border', '1px solid #C3C3C3');
      Vars.shoulders_button_container_beginner.css('border', '1px solid #C3C3C3');
      Vars.shoulders_button_container_novice.css('border', '1px solid #C3C3C3');
      Vars.shoulders_button_container_intermediate.css('border', '1px solid #C3C3C3');
      Vars.shoulders_button_container_experienced.css('border', '1px solid #C3C3C3');
      Vars.gateway_register_form_container_button.css('opacity', '0.4');
      Vars.gateway_register_form_container_button.css("pointer-events", "none");
    }
  });


  // Register Tab Shoulders Intermediate Button Click
  Vars.shoulders_intermediate_button.click(function(e){
    e.stopPropagation(e);
    Vars.password_hide.hide();
    Vars.password_show.show();
    Vars.register_form_password_input.attr("type","password");
    if ( Vars.register_form_username_input.val() && Vars.register_form_email_input.val() && Vars.register_form_password_input.val() && Vars.register_form_age_input.val() && Vars.register_form_height_ft_input.val() && Vars.register_form_height_in_input.val() && Vars.gender_field.is(":checked") && Vars.timezone_field.is(":checked") && Vars.cardio_field.is(":checked") && Vars.chest_field.is(":checked") && Vars.legs_field.is(":checked") && Vars.back_field.is(":checked") && Vars.core_field.is(":checked") && Vars.shoulders_field.is(":checked") && Vars.arms_field.is(":checked") ) {
      Vars.shoulders_buttons_container.css('border', '1px solid #3D456A');
      Vars.shoulders_button_container_intermediate.css('border', '1px solid #3D456A');
      Vars.shoulders_button_container_novice.css('border', '1px solid #C3C3C3');
      Vars.shoulders_button_container_beginner.css('border', '1px solid #C3C3C3');
      Vars.shoulders_button_container_experienced.css('border', '1px solid #C3C3C3');
      Vars.gateway_register_form_container_button.css('opacity', '1');
      Vars.gateway_register_form_container_button.css("pointer-events", "auto");
    } else if (Vars.shoulders_intermediate_button.is(":checked")) {
      Vars.shoulders_buttons_container.css('border', '1px solid #3D456A');
      Vars.shoulders_button_container_intermediate.css('border', '1px solid #3D456A');
      Vars.shoulders_button_container_novice.css('border', '1px solid #C3C3C3');
      Vars.shoulders_button_container_beginner.css('border', '1px solid #C3C3C3');
      Vars.shoulders_button_container_experienced.css('border', '1px solid #C3C3C3');
    } else {
      Vars.shoulders_beginner_button.prop('checked', false);
      Vars.shoulders_novice_button.prop('checked', false);
      Vars.shoulders_intermediate_button.prop('checked', false);
      Vars.shoulders_experienced_button.prop('checked', false);
      Vars.shoulders_buttons_container.css('border', '1px solid #C3C3C3');
      Vars.shoulders_button_container_beginner.css('border', '1px solid #C3C3C3');
      Vars.shoulders_button_container_novice.css('border', '1px solid #C3C3C3');
      Vars.shoulders_button_container_intermediate.css('border', '1px solid #C3C3C3');
      Vars.shoulders_button_container_experienced.css('border', '1px solid #C3C3C3');
      Vars.gateway_register_form_container_button.css('opacity', '0.4');
      Vars.gateway_register_form_container_button.css("pointer-events", "none");
    }
  });

  // Register Tab Shoulders Experienced Button Click
  Vars.shoulders_experienced_button.click(function(e){
    e.stopPropagation(e);
    Vars.password_hide.hide();
    Vars.password_show.show();
    Vars.register_form_password_input.attr("type","password");
    if ( Vars.register_form_username_input.val() && Vars.register_form_email_input.val() && Vars.register_form_password_input.val() && Vars.register_form_age_input.val() && Vars.register_form_height_ft_input.val() && Vars.register_form_height_in_input.val() && Vars.gender_field.is(":checked") && Vars.timezone_field.is(":checked") && Vars.cardio_field.is(":checked") && Vars.chest_field.is(":checked") && Vars.legs_field.is(":checked") && Vars.back_field.is(":checked") && Vars.core_field.is(":checked") && Vars.shoulders_field.is(":checked") && Vars.arms_field.is(":checked") ) {
      Vars.shoulders_buttons_container.css('border', '1px solid #3D456A');
      Vars.shoulders_button_container_experienced.css('border', '1px solid #3D456A');
      Vars.shoulders_button_container_novice.css('border', '1px solid #C3C3C3');
      Vars.shoulders_button_container_beginner.css('border', '1px solid #C3C3C3');
      Vars.shoulders_button_container_intermediate.css('border', '1px solid #C3C3C3');
      Vars.gateway_register_form_container_button.css('opacity', '1');
      Vars.gateway_register_form_container_button.css("pointer-events", "auto");
    } else if (Vars.shoulders_experienced_button.is(":checked")) {
      Vars.shoulders_buttons_container.css('border', '1px solid #3D456A');
      Vars.shoulders_button_container_experienced.css('border', '1px solid #3D456A');
      Vars.shoulders_button_container_novice.css('border', '1px solid #C3C3C3');
      Vars.shoulders_button_container_beginner.css('border', '1px solid #C3C3C3');
      Vars.shoulders_button_container_intermediate.css('border', '1px solid #C3C3C3');
    } else {
      Vars.shoulders_beginner_button.prop('checked', false);
      Vars.shoulders_novice_button.prop('checked', false);
      Vars.shoulders_intermediate_button.prop('checked', false);
      Vars.shoulders_experienced_button.prop('checked', false);
      Vars.shoulders_buttons_container.css('border', '1px solid #C3C3C3');
      Vars.shoulders_button_container_beginner.css('border', '1px solid #C3C3C3');
      Vars.shoulders_button_container_novice.css('border', '1px solid #C3C3C3');
      Vars.shoulders_button_container_intermediate.css('border', '1px solid #C3C3C3');
      Vars.shoulders_button_container_experienced.css('border', '1px solid #C3C3C3');
      Vars.gateway_register_form_container_button.css('opacity', '0.4');
      Vars.gateway_register_form_container_button.css("pointer-events", "none");
    }
  });


  // Register Tab Arms Beginner Button Click
  Vars.arms_beginner_button.click(function(e){
    e.stopPropagation();
    Vars.password_hide.hide();
    Vars.password_show.show();
    Vars.register_form_password_input.attr("type","password");
    if ( Vars.register_form_username_input.val() && Vars.register_form_email_input.val() && Vars.register_form_password_input.val() && Vars.register_form_age_input.val() && Vars.register_form_height_ft_input.val() && Vars.register_form_height_in_input.val() && Vars.gender_field.is(":checked") && Vars.timezone_field.is(":checked") && Vars.cardio_field.is(":checked") && Vars.chest_field.is(":checked") && Vars.legs_field.is(":checked") && Vars.back_field.is(":checked") && Vars.core_field.is(":checked") && Vars.shoulders_field.is(":checked") && Vars.arms_field.is(":checked") ) {
      Vars.arms_buttons_container.css('border', '1px solid #3D456A');
      Vars.arms_button_container_beginner.css('border', '1px solid #3D456A');
      Vars.arms_button_container_novice.css('border', '1px solid #C3C3C3');
      Vars.arms_button_container_intermediate.css('border', '1px solid #C3C3C3');
      Vars.arms_button_container_experienced.css('border', '1px solid #C3C3C3');
      Vars.gateway_register_form_container_button.css('opacity', '1');
      Vars.gateway_register_form_container_button.css("pointer-events", "auto");
    } else if (Vars.arms_beginner_button.is(":checked")) {
      Vars.arms_buttons_container.css('border', '1px solid #3D456A');
      Vars.arms_button_container_beginner.css('border', '1px solid #3D456A');
      Vars.arms_button_container_novice.css('border', '1px solid #C3C3C3');
      Vars.arms_button_container_intermediate.css('border', '1px solid #C3C3C3');
      Vars.arms_button_container_experienced.css('border', '1px solid #C3C3C3');
    } else {
      Vars.arms_beginner_button.prop('checked', false);
      Vars.arms_novice_button.prop('checked', false);
      Vars.arms_intermediate_button.prop('checked', false);
      Vars.arms_experienced_button.prop('checked', false);
      Vars.arms_buttons_container.css('border', '1px solid #C3C3C3');
      Vars.arms_button_container_beginner.css('border', '1px solid #C3C3C3');
      Vars.arms_button_container_novice.css('border', '1px solid #C3C3C3');
      Vars.arms_button_container_intermediate.css('border', '1px solid #C3C3C3');
      Vars.arms_button_container_experienced.css('border', '1px solid #C3C3C3');
      Vars.gateway_register_form_container_button.css('opacity', '0.4');
      Vars.gateway_register_form_container_button.css("pointer-events", "none");
    }
  });

  // Register Tab Arms Novice Button Click
  Vars.arms_novice_button.click(function(e){
    e.stopPropagation();
    Vars.password_hide.hide();
    Vars.password_show.show();
    Vars.register_form_password_input.attr("type","password");
    if ( Vars.register_form_username_input.val() && Vars.register_form_email_input.val() && Vars.register_form_password_input.val() && Vars.register_form_age_input.val() && Vars.register_form_height_ft_input.val() && Vars.register_form_height_in_input.val() && Vars.gender_field.is(":checked") && Vars.timezone_field.is(":checked") && Vars.cardio_field.is(":checked") && Vars.chest_field.is(":checked") && Vars.legs_field.is(":checked") && Vars.back_field.is(":checked") && Vars.core_field.is(":checked") && Vars.shoulders_field.is(":checked") && Vars.arms_field.is(":checked") ) {
      Vars.arms_buttons_container.css('border', '1px solid #3D456A');
      Vars.arms_button_container_novice.css('border', '1px solid #3D456A');
      Vars.arms_button_container_beginner.css('border', '1px solid #C3C3C3');
      Vars.arms_button_container_intermediate.css('border', '1px solid #C3C3C3');
      Vars.arms_button_container_experienced.css('border', '1px solid #C3C3C3');
      Vars.gateway_register_form_container_button.css('opacity', '1');
      Vars.gateway_register_form_container_button.css("pointer-events", "auto");
    } else if (Vars.arms_novice_button.is(":checked")) {
      Vars.arms_buttons_container.css('border', '1px solid #3D456A');
      Vars.arms_button_container_novice.css('border', '1px solid #3D456A');
      Vars.arms_button_container_beginner.css('border', '1px solid #C3C3C3');
      Vars.arms_button_container_intermediate.css('border', '1px solid #C3C3C3');
      Vars.arms_button_container_experienced.css('border', '1px solid #C3C3C3');
    } else {
      Vars.arms_beginner_button.prop('checked', false);
      Vars.arms_novice_button.prop('checked', false);
      Vars.arms_intermediate_button.prop('checked', false);
      Vars.arms_experienced_button.prop('checked', false);
      Vars.arms_buttons_container.css('border', '1px solid #C3C3C3');
      Vars.arms_button_container_beginner.css('border', '1px solid #C3C3C3');
      Vars.arms_button_container_novice.css('border', '1px solid #C3C3C3');
      Vars.arms_button_container_intermediate.css('border', '1px solid #C3C3C3');
      Vars.arms_button_container_experienced.css('border', '1px solid #C3C3C3');
      Vars.gateway_register_form_container_button.css('opacity', '0.4');
      Vars.gateway_register_form_container_button.css("pointer-events", "none");
    }
  });


  // Register Tab Arms Intermediate Button Click
  Vars.arms_intermediate_button.click(function(e){
    e.stopPropagation();
    Vars.password_hide.hide();
    Vars.password_show.show();
    Vars.register_form_password_input.attr("type","password");
    if ( Vars.register_form_username_input.val() && Vars.register_form_email_input.val() && Vars.register_form_password_input.val() && Vars.register_form_age_input.val() && Vars.register_form_height_ft_input.val() && Vars.register_form_height_in_input.val() && Vars.gender_field.is(":checked") && Vars.timezone_field.is(":checked") && Vars.cardio_field.is(":checked") && Vars.chest_field.is(":checked") && Vars.legs_field.is(":checked") && Vars.back_field.is(":checked") && Vars.core_field.is(":checked") && Vars.shoulders_field.is(":checked") && Vars.arms_field.is(":checked") ) {
      Vars.arms_buttons_container.css('border', '1px solid #3D456A');
      Vars.arms_button_container_intermediate.css('border', '1px solid #3D456A');
      Vars.arms_button_container_beginner.css('border', '1px solid #C3C3C3');
      Vars.arms_button_container_novice.css('border', '1px solid #C3C3C3');
      Vars.arms_button_container_experienced.css('border', '1px solid #C3C3C3');
      Vars.gateway_register_form_container_button.css('opacity', '1');
      Vars.gateway_register_form_container_button.css("pointer-events", "auto");
    } else if (Vars.arms_intermediate_button.is(":checked")) {
      Vars.arms_buttons_container.css('border', '1px solid #3D456A');
      Vars.arms_button_container_intermediate.css('border', '1px solid #3D456A');
      Vars.arms_button_container_beginner.css('border', '1px solid #C3C3C3');
      Vars.arms_button_container_novice.css('border', '1px solid #C3C3C3');
      Vars.arms_button_container_experienced.css('border', '1px solid #C3C3C3');
    } else {
      Vars.arms_beginner_button.prop('checked', false);
      Vars.arms_novice_button.prop('checked', false);
      Vars.arms_intermediate_button.prop('checked', false);
      Vars.arms_experienced_button.prop('checked', false);
      Vars.arms_buttons_container.css('border', '1px solid #C3C3C3');
      Vars.arms_button_container_beginner.css('border', '1px solid #C3C3C3');
      Vars.arms_button_container_novice.css('border', '1px solid #C3C3C3');
      Vars.arms_button_container_intermediate.css('border', '1px solid #C3C3C3');
      Vars.arms_button_container_experienced.css('border', '1px solid #C3C3C3');
      Vars.gateway_register_form_container_button.css('opacity', '0.4');
      Vars.gateway_register_form_container_button.css("pointer-events", "none");
    }
  });


  // Register Tab Arms Experienced Button Click
  Vars.arms_experienced_button.click(function(e){
    e.stopPropagation();
    Vars.password_hide.hide();
    Vars.password_show.show();
    Vars.register_form_password_input.attr("type","password");
    if ( Vars.register_form_username_input.val() && Vars.register_form_email_input.val() && Vars.register_form_password_input.val() && Vars.register_form_age_input.val() && Vars.register_form_height_ft_input.val() && Vars.register_form_height_in_input.val() && Vars.gender_field.is(":checked") && Vars.timezone_field.is(":checked") && Vars.cardio_field.is(":checked") && Vars.chest_field.is(":checked") && Vars.legs_field.is(":checked") && Vars.back_field.is(":checked") && Vars.core_field.is(":checked") && Vars.shoulders_field.is(":checked") && Vars.arms_field.is(":checked") ) {
      Vars.arms_buttons_container.css('border', '1px solid #3D456A');
      Vars.arms_button_container_experienced.css('border', '1px solid #3D456A');
      Vars.arms_button_container_beginner.css('border', '1px solid #C3C3C3');
      Vars.arms_button_container_novice.css('border', '1px solid #C3C3C3');
      Vars.arms_button_container_intermediate.css('border', '1px solid #C3C3C3');
      Vars.gateway_register_form_container_button.css('opacity', '1');
      Vars.gateway_register_form_container_button.css("pointer-events", "auto");
    } else if (Vars.arms_experienced_button.is(":checked")) {
      Vars.arms_buttons_container.css('border', '1px solid #3D456A');
      Vars.arms_button_container_experienced.css('border', '1px solid #3D456A');
      Vars.arms_button_container_beginner.css('border', '1px solid #C3C3C3');
      Vars.arms_button_container_novice.css('border', '1px solid #C3C3C3');
      Vars.arms_button_container_intermediate.css('border', '1px solid #C3C3C3');
    } else {
      Vars.arms_beginner_button.prop('checked', false);
      Vars.arms_novice_button.prop('checked', false);
      Vars.arms_intermediate_button.prop('checked', false);
      Vars.arms_experienced_button.prop('checked', false);
      Vars.arms_buttons_container.css('border', '1px solid #C3C3C3');
      Vars.arms_button_container_beginner.css('border', '1px solid #C3C3C3');
      Vars.arms_button_container_novice.css('border', '1px solid #C3C3C3');
      Vars.arms_button_container_intermediate.css('border', '1px solid #C3C3C3');
      Vars.arms_button_container_experienced.css('border', '1px solid #C3C3C3');
      Vars.gateway_register_form_container_button.css('opacity', '0.4');
      Vars.gateway_register_form_container_button.css("pointer-events", "none");

    }
  });


  // Register Ajax Call
  Vars.gateway_register_form_container_button.click(function(e){
    e.stopPropagation();
    e.preventDefault();
    Vars.password_hide.hide();
    Vars.password_show.show();
    Vars.register_form_password_input.attr("type","password");
    // return false;
    if ( Vars.register_form_username_input.val() && Vars.register_form_email_input.val() && Vars.register_form_password_input.val() && Vars.register_form_age_input.val() && Vars.register_form_height_ft_input.val() && Vars.register_form_height_in_input.val() && Vars.gender_field.is(":checked") && Vars.timezone_field.is(":checked") && Vars.cardio_field.is(":checked") && Vars.chest_field.is(":checked") && Vars.legs_field.is(":checked") && Vars.back_field.is(":checked") && Vars.core_field.is(":checked") && Vars.shoulders_field.is(":checked") && Vars.arms_field.is(":checked") ) {
      // disable everything
      Vars.gateway_nav_login.css("pointer-events", "none");
      Vars.gateway_nav_register.css("pointer-events", "none");
      Vars.gateway_nav_forgot_password.css("pointer-events", "none");
      Vars.register_form_username_input.prop('disabled', true);
      Vars.register_form_email_input.prop('disabled', true);
      Vars.register_form_password_input.prop('disabled', true);
      Vars.password_show.css("pointer-events", "none");
      Vars.password_hide.css("pointer-events", "none");
      Vars.register_form_age_input.prop('disabled', true);
      Vars.register_form_height_ft_input.prop('disabled', true);
      Vars.register_form_height_in_input.prop('disabled', true);
      Vars.male_button.prop('disabled', true);
      Vars.female_button.prop('disabled', true);
      Vars.eastern_time_button.prop('disabled', true);
      Vars.pacific_time_button.prop('disabled', true);
      Vars.alaska_time_button.prop('disabled', true);
      Vars.central_time_button.prop('disabled', true);
      Vars.mountain_time_button.prop('disabled', true);
      Vars.hawaii_time_button.prop('disabled', true);
      Vars.cardio_beginner_button.prop('disabled', true);
      Vars.cardio_novice_button.prop('disabled', true);
      Vars.cardio_intermediate_button.prop('disabled', true);
      Vars.cardio_experienced_button.prop('disabled', true);
      Vars.chest_beginner_button.prop('disabled', true);
      Vars.chest_novice_button.prop('disabled', true);
      Vars.chest_intermediate_button.prop('disabled', true);
      Vars.chest_experienced_button.prop('disabled', true);
      Vars.legs_beginner_button.prop('disabled', true);
      Vars.legs_novice_button.prop('disabled', true);
      Vars.legs_intermediate_button.prop('disabled', true);
      Vars.legs_experienced_button.prop('disabled', true);
      Vars.back_beginner_button.prop('disabled', true);
      Vars.back_novice_button.prop('disabled', true);
      Vars.back_intermediate_button.prop('disabled', true);
      Vars.back_experienced_button.prop('disabled', true);
      Vars.core_beginner_button.prop('disabled', true);
      Vars.core_novice_button.prop('disabled', true);
      Vars.core_intermediate_button.prop('disabled', true);
      Vars.core_experienced_button.prop('disabled', true);
      Vars.shoulders_beginner_button.prop('disabled', true);
      Vars.shoulders_novice_button.prop('disabled', true);
      Vars.shoulders_intermediate_button.prop('disabled', true);
      Vars.shoulders_experienced_button.prop('disabled', true);
      Vars.arms_beginner_button.prop('disabled', true);
      Vars.arms_novice_button.prop('disabled', true);
      Vars.arms_intermediate_button.prop('disabled', true);
      Vars.arms_experienced_button.prop('disabled', true);
      Vars.gateway_register_form_container_button.css("pointer-events", "none");
      // make ajax call here
      $.ajax({
        data : {
            // Vars.login_form
            username : Vars.register_form_username_input.val(),
            email : Vars.register_form_email_input.val(),
            password : Vars.register_form_password_input.val(),
            age : Vars.register_form_age_input.val(),
            height_ft : Vars.register_form_height_ft_input.val(),
            height_in : Vars.register_form_height_in_input.val(),
            gender : $("input[name='gender']:checked").val(),
            timezone : $("input[name='timezone']:checked").val(),
            exp_cardio : $("input[name='cardio-experience']:checked").val(),
            exp_chest : $("input[name='chest-experience']:checked").val(),
            exp_legs : $("input[name='legs-experience']:checked").val(),
            exp_back : $("input[name='back-experience']:checked").val(),
            exp_core : $("input[name='core-experience']:checked").val(),
            exp_shoulders : $("input[name='shoulders-experience']:checked").val(),
            exp_arms : $("input[name='arms-experience']:checked").val()
          },
          type : 'POST',
          url : '/register'
      }).done(function(data){
        if(data.error == 'missing data') {
          $('.gateway-register-form-container-1-top-outer').scrollTop(0);
          Vars.gateway_nav_login.css("pointer-events", "auto");
          Vars.gateway_nav_register.css("pointer-events", "none");
          Vars.gateway_nav_forgot_password.css("pointer-events", "auto");
          Vars.register_form_username_input.prop('disabled', false);
          Vars.register_form_email_input.prop('disabled', false);
          Vars.register_form_password_input.prop('disabled', false);
          Vars.password_show.css("pointer-events", "auto");
          Vars.password_hide.css("pointer-events", "auto");
          Vars.register_form_age_input.prop('disabled', false);
          Vars.register_form_height_ft_input.prop('disabled', false);
          Vars.register_form_height_in_input.prop('disabled', false);
          Vars.male_button.prop('disabled', false);
          Vars.female_button.prop('disabled', false);
          Vars.eastern_time_button.prop('disabled', false);
          Vars.pacific_time_button.prop('disabled', false);
          Vars.alaska_time_button.prop('disabled', false);
          Vars.central_time_button.prop('disabled', false);
          Vars.mountain_time_button.prop('disabled', false);
          Vars.hawaii_time_button.prop('disabled', false);
          Vars.cardio_beginner_button.prop('disabled', false);
          Vars.cardio_novice_button.prop('disabled', false);
          Vars.cardio_intermediate_button.prop('disabled', false);
          Vars.cardio_experienced_button.prop('disabled', false);
          Vars.chest_beginner_button.prop('disabled', false);
          Vars.chest_novice_button.prop('disabled', false);
          Vars.chest_intermediate_button.prop('disabled', false);
          Vars.chest_experienced_button.prop('disabled', false);
          Vars.legs_beginner_button.prop('disabled', false);
          Vars.legs_novice_button.prop('disabled', false);
          Vars.legs_intermediate_button.prop('disabled', false);
          Vars.legs_experienced_button.prop('disabled', false);
          Vars.back_beginner_button.prop('disabled', false);
          Vars.back_novice_button.prop('disabled', false);
          Vars.back_intermediate_button.prop('disabled', false);
          Vars.back_experienced_button.prop('disabled', false);
          Vars.core_beginner_button.prop('disabled', false);
          Vars.core_novice_button.prop('disabled', false);
          Vars.core_intermediate_button.prop('disabled', false);
          Vars.core_experienced_button.prop('disabled', false);
          Vars.shoulders_beginner_button.prop('disabled', false);
          Vars.shoulders_novice_button.prop('disabled', false);
          Vars.shoulders_intermediate_button.prop('disabled', false);
          Vars.shoulders_experienced_button.prop('disabled', false);
          Vars.arms_beginner_button.prop('disabled', false);
          Vars.arms_novice_button.prop('disabled', false);
          Vars.arms_intermediate_button.prop('disabled', false);
          Vars.arms_experienced_button.prop('disabled', false);
          Vars.gateway_register_form_container_button.css('opacity', '0.4');
          Vars.gateway_register_form_container_button.css("pointer-events", "none");
          Vars.register_form_username_input.val('');
          Vars.register_form_username_input.css('border', '1px solid #C3C3C3');
          Vars.register_form_email_error_message.hide();
          Vars.register_form_email_input.val('');
          Vars.register_form_email_input.css('border', '1px solid #C3C3C3');
          Vars.register_form_password_input.val('');
          Vars.register_form_password_input.css('border', '1px solid #C3C3C3');
          Vars.register_form_password_input_eye_container.css('border-top', '1px solid #C3C3C3');
          Vars.register_form_password_input_eye_container.css('border-right', '1px solid #C3C3C3');
          Vars.register_form_password_input_eye_container.css('border-bottom', '1px solid #C3C3C3');
          Vars.password_hide.hide();
          Vars.password_show.show();
          Vars.register_form_password_input.attr("type","password");
          Vars.register_form_age_input.val('');
          Vars.register_form_age_input.css('border-bottom', '1px solid #C3C3C3');
          Vars.register_form_height_ft_input.val('');
          Vars.register_form_height_ft_input.css('border-bottom', '1px solid #C3C3C3');
          Vars.register_form_height_in_input.val('');
          Vars.register_form_height_in_input.css('border-bottom', '1px solid #C3C3C3');
          Vars.male_button.prop('checked', false);
          Vars.male_button_container.css('border-bottom', '1px solid #C3C3C3');
          Vars.female_button.prop('checked', false);
          Vars.female_button_container.css('border-bottom', '1px solid #C3C3C3');
          Vars.timezone_buttons_container.css('border-bottom', '1px solid #C3C3C3');
          Vars.eastern_time_button.prop('checked', false);
          Vars.eastern_time_button_container.css('border-bottom', '1px solid #C3C3C3');
          Vars.pacific_time_button.prop('checked', false);
          Vars.pacific_time_button_container.css('border-bottom', '1px solid #C3C3C3');
          Vars.alaska_time_button.prop('checked', false);
          Vars.alaska_time_button_container.css('border-bottom', '1px solid #C3C3C3');
          Vars.central_time_button.prop('checked', false);
          Vars.central_time_button_container.css('border-bottom', '1px solid #C3C3C3');
          Vars.mountain_time_button.prop('checked', false);
          Vars.mountain_time_button_container.css('border-bottom', '1px solid #C3C3C3');
          Vars.hawaii_time_button.prop('checked', false);
          Vars.hawaii_time_button_container.css('border-bottom', '1px solid #C3C3C3');
          Vars.cardio_buttons_container.css('border-bottom', '1px solid #C3C3C3');
          Vars.cardio_beginner_button.prop('checked', false);
          Vars.cardio_button_container_beginner.css('border-bottom', '1px solid #C3C3C3');
          Vars.cardio_novice_button.prop('checked', false);
          Vars.cardio_button_container_novice.css('border-bottom', '1px solid #C3C3C3');
          Vars.cardio_intermediate_button.prop('checked', false);
          Vars.cardio_button_container_intermediate.css('border-bottom', '1px solid #C3C3C3');
          Vars.cardio_experienced_button.prop('checked', false);
          Vars.cardio_button_container_experienced.css('border-bottom', '1px solid #C3C3C3');
          Vars.chest_buttons_container.css('border-bottom', '1px solid #C3C3C3');
          Vars.chest_beginner_button.prop('checked', false);
          Vars.chest_button_container_beginner.css('border-bottom', '1px solid #C3C3C3');
          Vars.chest_novice_button.prop('checked', false);
          Vars.chest_button_container_novice.css('border-bottom', '1px solid #C3C3C3');
          Vars.chest_intermediate_button.prop('checked', false);
          Vars.chest_button_container_intermediate.css('border-bottom', '1px solid #C3C3C3');
          Vars.chest_experienced_button.prop('checked', false);
          Vars.chest_button_container_experienced.css('border-bottom', '1px solid #C3C3C3');
          Vars.legs_buttons_container.css('border-bottom', '1px solid #C3C3C3');
          Vars.legs_beginner_button.prop('checked', false);
          Vars.legs_button_container_beginner.css('border-bottom', '1px solid #C3C3C3');
          Vars.legs_novice_button.prop('checked', false);
          Vars.legs_button_container_novice.css('border-bottom', '1px solid #C3C3C3');
          Vars.legs_intermediate_button.prop('checked', false);
          Vars.legs_button_container_intermediate.css('border-bottom', '1px solid #C3C3C3');
          Vars.legs_experienced_button.prop('checked', false);
          Vars.legs_button_container_experienced.css('border-bottom', '1px solid #C3C3C3');
          Vars.back_buttons_container.css('border-bottom', '1px solid #C3C3C3');
          Vars.back_beginner_button.prop('checked', false);
          Vars.back_button_container_beginner.css('border-bottom', '1px solid #C3C3C3');
          Vars.back_novice_button.prop('checked', false);
          Vars.back_button_container_novice.css('border-bottom', '1px solid #C3C3C3');
          Vars.back_intermediate_button.prop('checked', false);
          Vars.back_button_container_intermediate.css('border-bottom', '1px solid #C3C3C3');
          Vars.back_experienced_button.prop('checked', false);
          Vars.back_button_container_experienced.css('border-bottom', '1px solid #C3C3C3');
          Vars.core_buttons_container.css('border-bottom', '1px solid #C3C3C3');
          Vars.core_beginner_button.prop('checked', false);
          Vars.core_button_container_beginner.css('border-bottom', '1px solid #C3C3C3');
          Vars.core_novice_button.prop('checked', false);
          Vars.core_button_container_novice.css('border-bottom', '1px solid #C3C3C3');
          Vars.core_intermediate_button.prop('checked', false);
          Vars.core_button_container_intermediate.css('border-bottom', '1px solid #C3C3C3');
          Vars.core_experienced_button.prop('checked', false);
          Vars.core_button_container_experienced.css('border-bottom', '1px solid #C3C3C3');
          Vars.shoulders_buttons_container.css('border-bottom', '1px solid #C3C3C3');
          Vars.shoulders_beginner_button.prop('checked', false);
          Vars.shoulders_button_container_beginner.css('border-bottom', '1px solid #C3C3C3');
          Vars.shoulders_novice_button.prop('checked', false);
          Vars.shoulders_button_container_novice.css('border-bottom', '1px solid #C3C3C3');
          Vars.shoulders_intermediate_button.prop('checked', false);
          Vars.shoulders_button_container_intermediate.css('border-bottom', '1px solid #C3C3C3');
          Vars.shoulders_experienced_button.prop('checked', false);
          Vars.shoulders_button_container_experienced.css('border-bottom', '1px solid #C3C3C3');
          Vars.arms_buttons_container.css('border-bottom', '1px solid #C3C3C3');
          Vars.arms_beginner_button.prop('checked', false);
          Vars.arms_button_container_beginner.css('border-bottom', '1px solid #C3C3C3');
          Vars.arms_novice_button.prop('checked', false);
          Vars.arms_button_container_novice.css('border-bottom', '1px solid #C3C3C3');
          Vars.arms_intermediate_button.prop('checked', false);
          Vars.arms_button_container_intermediate.css('border-bottom', '1px solid #C3C3C3');
          Vars.arms_experienced_button.prop('checked', false);
          Vars.arms_button_container_experienced.css('border-bottom', '1px solid #C3C3C3');
          alert('Server request failed for some reason, refresh the page or try again later.');
        } else if(data.error == 'invalid email') {
          $('.gateway-register-form-container-1-top-outer').scrollTop(0);
          Vars.gateway_nav_login.css("pointer-events", "auto");
          Vars.gateway_nav_register.css("pointer-events", "none");
          Vars.gateway_nav_forgot_password.css("pointer-events", "auto");
          Vars.register_form_username_input.prop('disabled', false);
          Vars.register_form_email_input.prop('disabled', false);
          Vars.register_form_password_input.prop('disabled', false);
          Vars.password_show.css("pointer-events", "auto");
          Vars.password_hide.css("pointer-events", "auto");
          Vars.register_form_age_input.prop('disabled', false);
          Vars.register_form_height_ft_input.prop('disabled', false);
          Vars.register_form_height_in_input.prop('disabled', false);
          Vars.male_button.prop('disabled', false);
          Vars.female_button.prop('disabled', false);
          Vars.eastern_time_button.prop('disabled', false);
          Vars.pacific_time_button.prop('disabled', false);
          Vars.alaska_time_button.prop('disabled', false);
          Vars.central_time_button.prop('disabled', false);
          Vars.mountain_time_button.prop('disabled', false);
          Vars.hawaii_time_button.prop('disabled', false);
          Vars.cardio_beginner_button.prop('disabled', false);
          Vars.cardio_novice_button.prop('disabled', false);
          Vars.cardio_intermediate_button.prop('disabled', false);
          Vars.cardio_experienced_button.prop('disabled', false);
          Vars.chest_beginner_button.prop('disabled', false);
          Vars.chest_novice_button.prop('disabled', false);
          Vars.chest_intermediate_button.prop('disabled', false);
          Vars.chest_experienced_button.prop('disabled', false);
          Vars.legs_beginner_button.prop('disabled', false);
          Vars.legs_novice_button.prop('disabled', false);
          Vars.legs_intermediate_button.prop('disabled', false);
          Vars.legs_experienced_button.prop('disabled', false);
          Vars.back_beginner_button.prop('disabled', false);
          Vars.back_novice_button.prop('disabled', false);
          Vars.back_intermediate_button.prop('disabled', false);
          Vars.back_experienced_button.prop('disabled', false);
          Vars.core_beginner_button.prop('disabled', false);
          Vars.core_novice_button.prop('disabled', false);
          Vars.core_intermediate_button.prop('disabled', false);
          Vars.core_experienced_button.prop('disabled', false);
          Vars.shoulders_beginner_button.prop('disabled', false);
          Vars.shoulders_novice_button.prop('disabled', false);
          Vars.shoulders_intermediate_button.prop('disabled', false);
          Vars.shoulders_experienced_button.prop('disabled', false);
          Vars.arms_beginner_button.prop('disabled', false);
          Vars.arms_novice_button.prop('disabled', false);
          Vars.arms_intermediate_button.prop('disabled', false);
          Vars.arms_experienced_button.prop('disabled', false);
          Vars.gateway_register_form_container_button.css('opacity', '0.4');
          Vars.gateway_register_form_container_button.css("pointer-events", "none");
          Vars.register_form_email_input.css('border', '1px solid #FC0D1B');
          Vars.register_form_email_error_message.show();
        } else if(data.error == 'none') {
          // $('.gateway-register-form-container-1-top-outer').scrollTop(0);
          Vars.gateway_nav_login.css("pointer-events", "none");
          Vars.gateway_nav_register.css("pointer-events", "auto");
          Vars.gateway_nav_forgot_password.css("pointer-events", "auto");
          Vars.register_form_username_input.prop('disabled', false);
          Vars.register_form_email_input.prop('disabled', false);
          Vars.register_form_password_input.prop('disabled', false);
          Vars.password_show.css("pointer-events", "auto");
          Vars.password_hide.css("pointer-events", "auto");
          Vars.register_form_age_input.prop('disabled', false);
          Vars.register_form_height_ft_input.prop('disabled', false);
          Vars.register_form_height_in_input.prop('disabled', false);
          Vars.male_button.prop('disabled', false);
          Vars.female_button.prop('disabled', false);
          Vars.eastern_time_button.prop('disabled', false);
          Vars.pacific_time_button.prop('disabled', false);
          Vars.alaska_time_button.prop('disabled', false);
          Vars.central_time_button.prop('disabled', false);
          Vars.mountain_time_button.prop('disabled', false);
          Vars.hawaii_time_button.prop('disabled', false);
          Vars.cardio_beginner_button.prop('disabled', false);
          Vars.cardio_novice_button.prop('disabled', false);
          Vars.cardio_intermediate_button.prop('disabled', false);
          Vars.cardio_experienced_button.prop('disabled', false);
          Vars.chest_beginner_button.prop('disabled', false);
          Vars.chest_novice_button.prop('disabled', false);
          Vars.chest_intermediate_button.prop('disabled', false);
          Vars.chest_experienced_button.prop('disabled', false);
          Vars.legs_beginner_button.prop('disabled', false);
          Vars.legs_novice_button.prop('disabled', false);
          Vars.legs_intermediate_button.prop('disabled', false);
          Vars.legs_experienced_button.prop('disabled', false);
          Vars.back_beginner_button.prop('disabled', false);
          Vars.back_novice_button.prop('disabled', false);
          Vars.back_intermediate_button.prop('disabled', false);
          Vars.back_experienced_button.prop('disabled', false);
          Vars.core_beginner_button.prop('disabled', false);
          Vars.core_novice_button.prop('disabled', false);
          Vars.core_intermediate_button.prop('disabled', false);
          Vars.core_experienced_button.prop('disabled', false);
          Vars.shoulders_beginner_button.prop('disabled', false);
          Vars.shoulders_novice_button.prop('disabled', false);
          Vars.shoulders_intermediate_button.prop('disabled', false);
          Vars.shoulders_experienced_button.prop('disabled', false);
          Vars.arms_beginner_button.prop('disabled', false);
          Vars.arms_novice_button.prop('disabled', false);
          Vars.arms_intermediate_button.prop('disabled', false);
          Vars.arms_experienced_button.prop('disabled', false);
          Vars.gateway_register_form_container_button.css('opacity', '0.4');
          Vars.gateway_register_form_container_button.css("pointer-events", "none");
          Vars.register_form_username_input.val('');
          Vars.register_form_username_input.css('border', '1px solid #C3C3C3');
          Vars.register_form_email_error_message.hide();
          Vars.register_form_email_input.val('');
          Vars.register_form_email_input.css('border', '1px solid #C3C3C3');
          Vars.register_form_password_input.val('');
          Vars.register_form_password_input.css('border', '1px solid #C3C3C3');
          Vars.register_form_password_input_eye_container.css('border-top', '1px solid #C3C3C3');
          Vars.register_form_password_input_eye_container.css('border-right', '1px solid #C3C3C3');
          Vars.register_form_password_input_eye_container.css('border-bottom', '1px solid #C3C3C3');
          Vars.password_hide.hide();
          Vars.password_show.show();
          Vars.register_form_password_input.attr("type","password");
          Vars.register_form_age_input.val('');
          Vars.register_form_age_input.css('border-bottom', '1px solid #C3C3C3');
          Vars.register_form_height_ft_input.val('');
          Vars.register_form_height_ft_input.css('border-bottom', '1px solid #C3C3C3');
          Vars.register_form_height_in_input.val('');
          Vars.register_form_height_in_input.css('border-bottom', '1px solid #C3C3C3');
          Vars.male_button.prop('checked', false);
          Vars.male_button_container.css('border-bottom', '1px solid #C3C3C3');
          Vars.female_button.prop('checked', false);
          Vars.female_button_container.css('border-bottom', '1px solid #C3C3C3');
          Vars.timezone_buttons_container.css('border-bottom', '1px solid #C3C3C3');
          Vars.eastern_time_button.prop('checked', false);
          Vars.eastern_time_button_container.css('border-bottom', '1px solid #C3C3C3');
          Vars.pacific_time_button.prop('checked', false);
          Vars.pacific_time_button_container.css('border-bottom', '1px solid #C3C3C3');
          Vars.alaska_time_button.prop('checked', false);
          Vars.alaska_time_button_container.css('border-bottom', '1px solid #C3C3C3');
          Vars.central_time_button.prop('checked', false);
          Vars.central_time_button_container.css('border-bottom', '1px solid #C3C3C3');
          Vars.mountain_time_button.prop('checked', false);
          Vars.mountain_time_button_container.css('border-bottom', '1px solid #C3C3C3');
          Vars.hawaii_time_button.prop('checked', false);
          Vars.hawaii_time_button_container.css('border-bottom', '1px solid #C3C3C3');
          Vars.cardio_buttons_container.css('border-bottom', '1px solid #C3C3C3');
          Vars.cardio_beginner_button.prop('checked', false);
          Vars.cardio_button_container_beginner.css('border-bottom', '1px solid #C3C3C3');
          Vars.cardio_novice_button.prop('checked', false);
          Vars.cardio_button_container_novice.css('border-bottom', '1px solid #C3C3C3');
          Vars.cardio_intermediate_button.prop('checked', false);
          Vars.cardio_button_container_intermediate.css('border-bottom', '1px solid #C3C3C3');
          Vars.cardio_experienced_button.prop('checked', false);
          Vars.cardio_button_container_experienced.css('border-bottom', '1px solid #C3C3C3');
          Vars.chest_buttons_container.css('border-bottom', '1px solid #C3C3C3');
          Vars.chest_beginner_button.prop('checked', false);
          Vars.chest_button_container_beginner.css('border-bottom', '1px solid #C3C3C3');
          Vars.chest_novice_button.prop('checked', false);
          Vars.chest_button_container_novice.css('border-bottom', '1px solid #C3C3C3');
          Vars.chest_intermediate_button.prop('checked', false);
          Vars.chest_button_container_intermediate.css('border-bottom', '1px solid #C3C3C3');
          Vars.chest_experienced_button.prop('checked', false);
          Vars.chest_button_container_experienced.css('border-bottom', '1px solid #C3C3C3');
          Vars.legs_buttons_container.css('border-bottom', '1px solid #C3C3C3');
          Vars.legs_beginner_button.prop('checked', false);
          Vars.legs_button_container_beginner.css('border-bottom', '1px solid #C3C3C3');
          Vars.legs_novice_button.prop('checked', false);
          Vars.legs_button_container_novice.css('border-bottom', '1px solid #C3C3C3');
          Vars.legs_intermediate_button.prop('checked', false);
          Vars.legs_button_container_intermediate.css('border-bottom', '1px solid #C3C3C3');
          Vars.legs_experienced_button.prop('checked', false);
          Vars.legs_button_container_experienced.css('border-bottom', '1px solid #C3C3C3');
          Vars.back_buttons_container.css('border-bottom', '1px solid #C3C3C3');
          Vars.back_beginner_button.prop('checked', false);
          Vars.back_button_container_beginner.css('border-bottom', '1px solid #C3C3C3');
          Vars.back_novice_button.prop('checked', false);
          Vars.back_button_container_novice.css('border-bottom', '1px solid #C3C3C3');
          Vars.back_intermediate_button.prop('checked', false);
          Vars.back_button_container_intermediate.css('border-bottom', '1px solid #C3C3C3');
          Vars.back_experienced_button.prop('checked', false);
          Vars.back_button_container_experienced.css('border-bottom', '1px solid #C3C3C3');
          Vars.core_buttons_container.css('border-bottom', '1px solid #C3C3C3');
          Vars.core_beginner_button.prop('checked', false);
          Vars.core_button_container_beginner.css('border-bottom', '1px solid #C3C3C3');
          Vars.core_novice_button.prop('checked', false);
          Vars.core_button_container_novice.css('border-bottom', '1px solid #C3C3C3');
          Vars.core_intermediate_button.prop('checked', false);
          Vars.core_button_container_intermediate.css('border-bottom', '1px solid #C3C3C3');
          Vars.core_experienced_button.prop('checked', false);
          Vars.core_button_container_experienced.css('border-bottom', '1px solid #C3C3C3');
          Vars.shoulders_buttons_container.css('border-bottom', '1px solid #C3C3C3');
          Vars.shoulders_beginner_button.prop('checked', false);
          Vars.shoulders_button_container_beginner.css('border-bottom', '1px solid #C3C3C3');
          Vars.shoulders_novice_button.prop('checked', false);
          Vars.shoulders_button_container_novice.css('border-bottom', '1px solid #C3C3C3');
          Vars.shoulders_intermediate_button.prop('checked', false);
          Vars.shoulders_button_container_intermediate.css('border-bottom', '1px solid #C3C3C3');
          Vars.shoulders_experienced_button.prop('checked', false);
          Vars.shoulders_button_container_experienced.css('border-bottom', '1px solid #C3C3C3');
          Vars.arms_buttons_container.css('border-bottom', '1px solid #C3C3C3');
          Vars.arms_beginner_button.prop('checked', false);
          Vars.arms_button_container_beginner.css('border-bottom', '1px solid #C3C3C3');
          Vars.arms_novice_button.prop('checked', false);
          Vars.arms_button_container_novice.css('border-bottom', '1px solid #C3C3C3');
          Vars.arms_intermediate_button.prop('checked', false);
          Vars.arms_button_container_intermediate.css('border-bottom', '1px solid #C3C3C3');
          Vars.arms_experienced_button.prop('checked', false);
          Vars.arms_button_container_experienced.css('border-bottom', '1px solid #C3C3C3');
          Vars.gateway_nav_register.css("border-bottom", "3px solid #FFFFFF");
          Vars.gateway_register.css("color", "#B3B8BF");
          Vars.gateway_nav_login.css("border-bottom", "3px solid #1A7E79");
          Vars.gateway_login.css("color", "#107E79");
          Vars.gateway_nav_forgot_password.css("border-bottom", "3px solid #FFFFFF");
          Vars.gateway_forgot_password.css("color", "#B3B8BF");
          // Hide Other Forms
          $('.gateway-register-form-container-1-top-outer').scrollTop(0);
          Vars.gateway_register_form_container.hide();
          Vars.gateway_forgot_password_form_container.hide();
          // Reset Login form
          Vars.logged_in_error.hide();
          Vars.login_form_email_error_message.hide();
          Vars.login_form_email_input.prop('disabled', false);
          Vars.login_form_email_input.val('');
          Vars.login_form_email_input.css('border', '1px solid #C3C3C3');
          Vars.login_form_password_error_message.hide();
          Vars.login_form_password_input.prop('disabled', false);
          Vars.login_form_password_input.val('');
          Vars.login_form_password_input.css('border', '1px solid #C3C3C3');
          Vars.gateway_login_form_button.css('opacity', '0.4');
          Vars.gateway_login_form_button.css("pointer-events", "none");
          Vars.gateway_login_form_container.show();
          Vars.hidden_register_form.submit();
        } else {
          // harambe
          $('.gateway-register-form-container-1-top-outer').scrollTop(0);
          Vars.gateway_nav_login.css("pointer-events", "auto");
          Vars.gateway_nav_register.css("pointer-events", "none");
          Vars.gateway_nav_forgot_password.css("pointer-events", "auto");
          Vars.register_form_username_input.prop('disabled', false);
          Vars.register_form_email_input.prop('disabled', false);
          Vars.register_form_password_input.prop('disabled', false);
          Vars.password_show.css("pointer-events", "auto");
          Vars.password_hide.css("pointer-events", "auto");
          Vars.register_form_age_input.prop('disabled', false);
          Vars.register_form_height_ft_input.prop('disabled', false);
          Vars.register_form_height_in_input.prop('disabled', false);
          Vars.male_button.prop('disabled', false);
          Vars.female_button.prop('disabled', false);
          Vars.eastern_time_button.prop('disabled', false);
          Vars.pacific_time_button.prop('disabled', false);
          Vars.alaska_time_button.prop('disabled', false);
          Vars.central_time_button.prop('disabled', false);
          Vars.mountain_time_button.prop('disabled', false);
          Vars.hawaii_time_button.prop('disabled', false);
          Vars.cardio_beginner_button.prop('disabled', false);
          Vars.cardio_novice_button.prop('disabled', false);
          Vars.cardio_intermediate_button.prop('disabled', false);
          Vars.cardio_experienced_button.prop('disabled', false);
          Vars.chest_beginner_button.prop('disabled', false);
          Vars.chest_novice_button.prop('disabled', false);
          Vars.chest_intermediate_button.prop('disabled', false);
          Vars.chest_experienced_button.prop('disabled', false);
          Vars.legs_beginner_button.prop('disabled', false);
          Vars.legs_novice_button.prop('disabled', false);
          Vars.legs_intermediate_button.prop('disabled', false);
          Vars.legs_experienced_button.prop('disabled', false);
          Vars.back_beginner_button.prop('disabled', false);
          Vars.back_novice_button.prop('disabled', false);
          Vars.back_intermediate_button.prop('disabled', false);
          Vars.back_experienced_button.prop('disabled', false);
          Vars.core_beginner_button.prop('disabled', false);
          Vars.core_novice_button.prop('disabled', false);
          Vars.core_intermediate_button.prop('disabled', false);
          Vars.core_experienced_button.prop('disabled', false);
          Vars.shoulders_beginner_button.prop('disabled', false);
          Vars.shoulders_novice_button.prop('disabled', false);
          Vars.shoulders_intermediate_button.prop('disabled', false);
          Vars.shoulders_experienced_button.prop('disabled', false);
          Vars.arms_beginner_button.prop('disabled', false);
          Vars.arms_novice_button.prop('disabled', false);
          Vars.arms_intermediate_button.prop('disabled', false);
          Vars.arms_experienced_button.prop('disabled', false);
          Vars.gateway_register_form_container_button.css('opacity', '0.4');
          Vars.gateway_register_form_container_button.css("pointer-events", "none");
          Vars.register_form_username_input.val('');
          Vars.register_form_username_input.css('border', '1px solid #C3C3C3');
          Vars.register_form_email_error_message.hide();
          Vars.register_form_email_input.val('');
          Vars.register_form_email_input.css('border', '1px solid #C3C3C3');
          Vars.register_form_password_input.val('');
          Vars.register_form_password_input.css('border', '1px solid #C3C3C3');
          Vars.register_form_password_input_eye_container.css('border-top', '1px solid #C3C3C3');
          Vars.register_form_password_input_eye_container.css('border-right', '1px solid #C3C3C3');
          Vars.register_form_password_input_eye_container.css('border-bottom', '1px solid #C3C3C3');
          Vars.password_hide.hide();
          Vars.password_show.show();
          Vars.register_form_password_input.attr("type","password");
          Vars.register_form_age_input.val('');
          Vars.register_form_age_input.css('border-bottom', '1px solid #C3C3C3');
          Vars.register_form_height_ft_input.val('');
          Vars.register_form_height_ft_input.css('border-bottom', '1px solid #C3C3C3');
          Vars.register_form_height_in_input.val('');
          Vars.register_form_height_in_input.css('border-bottom', '1px solid #C3C3C3');
          Vars.male_button.prop('checked', false);
          Vars.male_button_container.css('border-bottom', '1px solid #C3C3C3');
          Vars.female_button.prop('checked', false);
          Vars.female_button_container.css('border-bottom', '1px solid #C3C3C3');
          Vars.timezone_buttons_container.css('border-bottom', '1px solid #C3C3C3');
          Vars.eastern_time_button.prop('checked', false);
          Vars.eastern_time_button_container.css('border-bottom', '1px solid #C3C3C3');
          Vars.pacific_time_button.prop('checked', false);
          Vars.pacific_time_button_container.css('border-bottom', '1px solid #C3C3C3');
          Vars.alaska_time_button.prop('checked', false);
          Vars.alaska_time_button_container.css('border-bottom', '1px solid #C3C3C3');
          Vars.central_time_button.prop('checked', false);
          Vars.central_time_button_container.css('border-bottom', '1px solid #C3C3C3');
          Vars.mountain_time_button.prop('checked', false);
          Vars.mountain_time_button_container.css('border-bottom', '1px solid #C3C3C3');
          Vars.hawaii_time_button.prop('checked', false);
          Vars.hawaii_time_button_container.css('border-bottom', '1px solid #C3C3C3');
          Vars.cardio_buttons_container.css('border-bottom', '1px solid #C3C3C3');
          Vars.cardio_beginner_button.prop('checked', false);
          Vars.cardio_button_container_beginner.css('border-bottom', '1px solid #C3C3C3');
          Vars.cardio_novice_button.prop('checked', false);
          Vars.cardio_button_container_novice.css('border-bottom', '1px solid #C3C3C3');
          Vars.cardio_intermediate_button.prop('checked', false);
          Vars.cardio_button_container_intermediate.css('border-bottom', '1px solid #C3C3C3');
          Vars.cardio_experienced_button.prop('checked', false);
          Vars.cardio_button_container_experienced.css('border-bottom', '1px solid #C3C3C3');
          Vars.chest_buttons_container.css('border-bottom', '1px solid #C3C3C3');
          Vars.chest_beginner_button.prop('checked', false);
          Vars.chest_button_container_beginner.css('border-bottom', '1px solid #C3C3C3');
          Vars.chest_novice_button.prop('checked', false);
          Vars.chest_button_container_novice.css('border-bottom', '1px solid #C3C3C3');
          Vars.chest_intermediate_button.prop('checked', false);
          Vars.chest_button_container_intermediate.css('border-bottom', '1px solid #C3C3C3');
          Vars.chest_experienced_button.prop('checked', false);
          Vars.chest_button_container_experienced.css('border-bottom', '1px solid #C3C3C3');
          Vars.legs_buttons_container.css('border-bottom', '1px solid #C3C3C3');
          Vars.legs_beginner_button.prop('checked', false);
          Vars.legs_button_container_beginner.css('border-bottom', '1px solid #C3C3C3');
          Vars.legs_novice_button.prop('checked', false);
          Vars.legs_button_container_novice.css('border-bottom', '1px solid #C3C3C3');
          Vars.legs_intermediate_button.prop('checked', false);
          Vars.legs_button_container_intermediate.css('border-bottom', '1px solid #C3C3C3');
          Vars.legs_experienced_button.prop('checked', false);
          Vars.legs_button_container_experienced.css('border-bottom', '1px solid #C3C3C3');
          Vars.back_buttons_container.css('border-bottom', '1px solid #C3C3C3');
          Vars.back_beginner_button.prop('checked', false);
          Vars.back_button_container_beginner.css('border-bottom', '1px solid #C3C3C3');
          Vars.back_novice_button.prop('checked', false);
          Vars.back_button_container_novice.css('border-bottom', '1px solid #C3C3C3');
          Vars.back_intermediate_button.prop('checked', false);
          Vars.back_button_container_intermediate.css('border-bottom', '1px solid #C3C3C3');
          Vars.back_experienced_button.prop('checked', false);
          Vars.back_button_container_experienced.css('border-bottom', '1px solid #C3C3C3');
          Vars.core_buttons_container.css('border-bottom', '1px solid #C3C3C3');
          Vars.core_beginner_button.prop('checked', false);
          Vars.core_button_container_beginner.css('border-bottom', '1px solid #C3C3C3');
          Vars.core_novice_button.prop('checked', false);
          Vars.core_button_container_novice.css('border-bottom', '1px solid #C3C3C3');
          Vars.core_intermediate_button.prop('checked', false);
          Vars.core_button_container_intermediate.css('border-bottom', '1px solid #C3C3C3');
          Vars.core_experienced_button.prop('checked', false);
          Vars.core_button_container_experienced.css('border-bottom', '1px solid #C3C3C3');
          Vars.shoulders_buttons_container.css('border-bottom', '1px solid #C3C3C3');
          Vars.shoulders_beginner_button.prop('checked', false);
          Vars.shoulders_button_container_beginner.css('border-bottom', '1px solid #C3C3C3');
          Vars.shoulders_novice_button.prop('checked', false);
          Vars.shoulders_button_container_novice.css('border-bottom', '1px solid #C3C3C3');
          Vars.shoulders_intermediate_button.prop('checked', false);
          Vars.shoulders_button_container_intermediate.css('border-bottom', '1px solid #C3C3C3');
          Vars.shoulders_experienced_button.prop('checked', false);
          Vars.shoulders_button_container_experienced.css('border-bottom', '1px solid #C3C3C3');
          Vars.arms_buttons_container.css('border-bottom', '1px solid #C3C3C3');
          Vars.arms_beginner_button.prop('checked', false);
          Vars.arms_button_container_beginner.css('border-bottom', '1px solid #C3C3C3');
          Vars.arms_novice_button.prop('checked', false);
          Vars.arms_button_container_novice.css('border-bottom', '1px solid #C3C3C3');
          Vars.arms_intermediate_button.prop('checked', false);
          Vars.arms_button_container_intermediate.css('border-bottom', '1px solid #C3C3C3');
          Vars.arms_experienced_button.prop('checked', false);
          Vars.arms_button_container_experienced.css('border-bottom', '1px solid #C3C3C3');
          alert('Server request failed for some reason, refresh the page or try again later.');
        }
      }).fail(function(jqXHR, textStatus, errorThrown){
        Vars.gateway_nav_login.css("pointer-events", "auto");
        Vars.gateway_nav_register.css("pointer-events", "none");
        Vars.gateway_nav_forgot_password.css("pointer-events", "auto");
        Vars.register_form_username_input.prop('disabled', false);
        Vars.register_form_email_input.prop('disabled', false);
        Vars.register_form_password_input.prop('disabled', false);
        Vars.password_show.css("pointer-events", "auto");
        Vars.password_hide.css("pointer-events", "auto");
        Vars.register_form_age_input.prop('disabled', false);
        Vars.register_form_height_ft_input.prop('disabled', false);
        Vars.register_form_height_in_input.prop('disabled', false);
        Vars.male_button.prop('disabled', false);
        Vars.female_button.prop('disabled', false);
        Vars.eastern_time_button.prop('disabled', false);
        Vars.pacific_time_button.prop('disabled', false);
        Vars.alaska_time_button.prop('disabled', false);
        Vars.central_time_button.prop('disabled', false);
        Vars.mountain_time_button.prop('disabled', false);
        Vars.hawaii_time_button.prop('disabled', false);
        Vars.cardio_beginner_button.prop('disabled', false);
        Vars.cardio_novice_button.prop('disabled', false);
        Vars.cardio_intermediate_button.prop('disabled', false);
        Vars.cardio_experienced_button.prop('disabled', false);
        Vars.chest_beginner_button.prop('disabled', false);
        Vars.chest_novice_button.prop('disabled', false);
        Vars.chest_intermediate_button.prop('disabled', false);
        Vars.chest_experienced_button.prop('disabled', false);
        Vars.legs_beginner_button.prop('disabled', false);
        Vars.legs_novice_button.prop('disabled', false);
        Vars.legs_intermediate_button.prop('disabled', false);
        Vars.legs_experienced_button.prop('disabled', false);
        Vars.back_beginner_button.prop('disabled', false);
        Vars.back_novice_button.prop('disabled', false);
        Vars.back_intermediate_button.prop('disabled', false);
        Vars.back_experienced_button.prop('disabled', false);
        Vars.core_beginner_button.prop('disabled', false);
        Vars.core_novice_button.prop('disabled', false);
        Vars.core_intermediate_button.prop('disabled', false);
        Vars.core_experienced_button.prop('disabled', false);
        Vars.shoulders_beginner_button.prop('disabled', false);
        Vars.shoulders_novice_button.prop('disabled', false);
        Vars.shoulders_intermediate_button.prop('disabled', false);
        Vars.shoulders_experienced_button.prop('disabled', false);
        Vars.arms_beginner_button.prop('disabled', false);
        Vars.arms_novice_button.prop('disabled', false);
        Vars.arms_intermediate_button.prop('disabled', false);
        Vars.arms_experienced_button.prop('disabled', false);
        alert('Server request failed for some reason, refresh the page or try again later.');
      });
    }
  });





// *********************************************************************************** Reset Password Form Event Listeners
  // Reset Password Email Input
  Vars.reset_password_email_input.on('keyup', function(e) {
    e.preventDefault();
    e.stopPropagation();
    Vars.reset_password_invalid_email.hide();
    Vars.reset_password_logged_in_error.hide();
    Vars.reset_password_current_code_error.hide();
    Vars.reset_password_email_input.css('border', '1px solid #3D456A');
    if (Vars.reset_password_email_input.val()) {
      Vars.reset_password_button.css('opacity', '1');
      Vars.reset_password_button.css('pointer-events', 'auto');
    } else {
      Vars.reset_password_email_input.css('border', '1px solid #C3C3C3');
      Vars.reset_password_button.css('opacity', '0.4');
      Vars.reset_password_button.css('pointer-events', 'none');
    }
  });

  // Reset Password button click
  Vars.reset_password_button.click(function(e){
    e.stopPropagation();
    e.preventDefault();
    // harambeyeet harambe
    if (Vars.reset_password_email_input.val()){
      Vars.gateway_nav_login.css('pointer-events', 'none');
      Vars.gateway_nav_register.css('pointer-events', 'none');
      Vars.reset_password_invalid_email.hide();
      Vars.reset_password_logged_in_error.hide();
      Vars.reset_password_current_code_error.hide();
      Vars.reset_password_button.css('pointer-events', 'none');
      Vars.reset_password_email_input.prop('disabled', true);
      $.ajax({
          data : {
            email : Vars.reset_password_email_input.val()
          },
          type : 'POST',
          url : '/resetpassword'
      }).done(function(data){
        if (data.error == 'missing data') {
          Vars.gateway_nav_login.css('pointer-events', 'auto');
          Vars.gateway_nav_register.css('pointer-events', 'auto');
          Vars.reset_password_button.css('opacity', '0.4');
          Vars.reset_password_button.css('pointer-events', 'none');
          Vars.reset_password_email_input.prop('disabled', false);
          Vars.reset_password_email_input.val('');
          Vars.reset_password_email_input.css('border', '1px solid #C3C3C3');
          alert('Server request failed for some reason, refresh the page or try again later.');
        } else if (data.error == 'current code') {
          Vars.gateway_nav_login.css('pointer-events', 'auto');
          Vars.gateway_nav_register.css('pointer-events', 'auto');
          Vars.reset_password_email_input.css('border', '1px solid #FC0D1B');
          Vars.reset_password_current_code_error.show();
          Vars.reset_password_button.css('opacity', '0.4');
          Vars.reset_password_button.css('pointer-events', 'none');
          Vars.reset_password_email_input.prop('disabled', false);
        } else if (data.error == 'invalid email') {
          Vars.gateway_nav_login.css('pointer-events', 'auto');
          Vars.gateway_nav_register.css('pointer-events', 'auto');
          Vars.reset_password_invalid_email.show();
          Vars.reset_password_email_input.css('border', '1px solid #FC0D1B');
          Vars.reset_password_button.css('opacity', '0.4');
          Vars.reset_password_button.css('pointer-events', 'none');
          Vars.reset_password_email_input.prop('disabled', false);
        } else if (data.error == 'none') {
          // harambeyeet
          Vars.hidden_passwordchange_form.submit();
          Vars.gateway_nav_login.css('pointer-events', 'auto');
          Vars.gateway_nav_register.css('pointer-events', 'auto');
          Vars.reset_password_invalid_email.hide();
          Vars.reset_password_button.css('pointer-events', 'auto');
          Vars.reset_password_email_input.prop('disabled', false);
          Vars.reset_password_email_input.css('border', '1px solid #3D456A');
          Vars.reset_password_email_input.focus();
        } else if (data.error == 'logged_in') {
          Vars.gateway_nav_login.css('pointer-events', 'auto');
          Vars.gateway_nav_register.css('pointer-events', 'auto');
          Vars.reset_password_logged_in_error.show();
          Vars.reset_password_button.css('opacity', '0.4');
          Vars.reset_password_button.css('pointer-events', 'none');
          Vars.reset_password_email_input.prop('disabled', false);
          Vars.reset_password_email_input.css('border', '1px solid #FC0D1B');
        } else {
          Vars.gateway_nav_login.css('pointer-events', 'auto');
          Vars.gateway_nav_register.css('pointer-events', 'auto');
          Vars.reset_password_invalid_email.hide();
          Vars.reset_password_button.css('opacity', '0.4');
          Vars.reset_password_button.css('pointer-events', 'none');
          Vars.reset_password_email_input.prop('disabled', false);
          Vars.reset_password_email_input.val('');
          Vars.reset_password_email_input.css('border', '1px solid #C3C3C3');
          alert('Server request failed for some reason, refresh the page or try again later.');
        }
      }).fail(function(jqXHR, textStatus, errorThrown){
        Vars.gateway_nav_login.css('pointer-events', 'auto');
        Vars.gateway_nav_register.css('pointer-events', 'auto');
        Vars.reset_password_invalid_email.hide();
        Vars.reset_password_button.css('opacity', '0.4');
        Vars.reset_password_button.css('pointer-events', 'none');
        Vars.reset_password_email_input.prop('disabled', false);
        Vars.reset_password_email_input.val('');
        Vars.reset_password_email_input.css('border', '1px solid #C3C3C3');
        alert('Server request failed for some reason, refresh the page or try again later.');
      });

    }

  });


  // Vars.gateway_nav_login = $('.gateway-nav-login');
  // Vars.gateway_login = $('#gateway-login');
  // Vars.gateway_nav_register = $('.gateway-nav-register');
  // Vars.gateway_register = $('#gateway-register');
  // Vars.gateway_nav_forgot_password = $('.gateway-nav-forgot-password');
  // Vars.gateway_forgot_password = $('#gateway-forgot-password');
  //
  //
  // // *************Gateway Form Container Variables
  // Vars.gateway_login_form_container = $('.gateway-login-form-container');
  // Vars.gateway_register_form_container = $('.gateway-register-form-container');
  // Vars.gateway_forgot_password_form_container = $('.gateway-forgot-password-form-container');


  // harambe yeet harambeyeet
  // Vars.reset_password_email_input = $('#reset-password-email-input');
  // Vars.reset_password_invalid_email = $('#reset-invalid-email');
  // Vars.reset_password_button = $('.reset-password-button');
  // Vars.hidden_passwordchange_form = $('.hidden_passwordchange_form');






  // ***********************************************************************************THESE BLOW ARE TEMPORARY FOR TESTING PURPOSES***********************************************************************************
  // harambeyeet
  Vars.fillForm = function(email){
    Vars.register_form_username_input.val("boy wizard")
    Vars.register_form_email_input.val("maccassidyboywizard@gmail.com")
    Vars.register_form_password_input.val("pass")
    Vars.register_form_age_input.val(55)
    Vars.register_form_height_ft_input.val(5)
    Vars.register_form_height_in_input.val(5)
    Vars.male_button.prop("checked", true);
    Vars.eastern_time_button.prop("checked", true);
    Vars.cardio_novice_button.prop("checked", true);
    Vars.chest_novice_button.prop("checked", true);
    Vars.legs_novice_button.prop("checked", true);
    Vars.back_novice_button.prop("checked", true);
    Vars.core_novice_button.prop("checked", true);
    Vars.shoulders_novice_button.prop("checked", true);
    Vars.arms_novice_button.prop("checked", true);
    Vars.gateway_register_form_container_button.css('opacity', '1');
    Vars.gateway_register_form_container_button.css("pointer-events", "auto");
    Vars.gateway_register_form_container_button.click();
  }



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
//   console.log(".-button");
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
