$(document).ready(function(){
  // Vars for Nav Bar Event Listeners*****************************************************
  var loginTabActive = false;
  var registerTabActive = true;
  var forgotPasswordTabActive = true;

  // Event Listeners for Nav Bar **********************************************************
    //Login Tab
    $('.gateway-nav-login').on('click', function(e){
      e.stopPropagation();
      if(loginTabActive){
        //Change Active Vars for Tabs
        registerTabActive = true;
        loginTabActive = false;
        forgotPasswordTabActive = true;
        // Disable Event Listeners for other Tabs
        $('.gateway-nav-register').css("pointer-events", "auto");
        $('.gateway-nav-login').css("pointer-events", "none");
        $('.gateway-nav-forgot-password').css("pointer-events", "auto");
        // Change Cursor hovers for other tabs
        $('.gateway-nav-register').hover(function(e1) {
          e1.stopPropagation();
          $(this).css('cursor','pointer');
        }, function(e1) {
          e1.stopPropagation();
          $(this).css('cursor','auto');
        });
        $('.gateway-nav-login').hover(function(e1) {
          e1.stopPropagation();
          $(this).css('cursor','auto');
        }, function(e1) {
          e1.stopPropagation();
          $(this).css('cursor','auto');
        });
        $('.gateway-nav-forgot-password').hover(function(e1) {
          e1.stopPropagation();
          $(this).css('cursor','pointer');
        }, function(e1) {
          e1.stopPropagation();
          $(this).css('cursor','auto');
        });
        // Change borders and font colors of other tabs
        $('.gateway-nav-register').css("border-bottom", "3px solid #FFFFFF");
        $('#gateway-register').css("color", "#B3B8BF");
        $('.gateway-nav-login').css("border-bottom", "3px solid #1A7E79");
        $('#gateway-login').css("color", "#107E79");
        $('.gateway-nav-forgot-password').css("border-bottom", "3px solid #FFFFFF");
        $('#gateway-forgot-password').css("color", "#B3B8BF");
        //Hide all Other tab containers
        $('.gateway-register-form-container').hide();
        $('.gateway-forgot-password-form-container').hide()        
          // Missing stuff here *****
        // Reset everything that could have previously been in the Login container
        loginButtonActive = false
        $('.gateway-login-form-button').css("pointer-events", "auto");
        $('#login-form-email-input').prop("disabled", false);
        $('#login-form-password-input').prop("disabled", false);
        $('#login-form-email-input').val('');
        $('#login-form-password-input').val('');
        $('#login-form-email-input').css('border', '1px solid #C3C3C3');
        $('#login-form-password-input').css('border', '1px solid #C3C3C3');
        $('.gateway-login-form-button').css('opacity', '0.4');
        $('.gateway-login-form-button').hover(function(e1) {
          e1.stopPropagation();
          $(this).css('cursor','auto');
        }, function(e1){
          e1.stopPropagation();
          $(this).css('cursor','auto');
        });
        $('#logged_in_error').hide();
        $('#login-form-email-error-message').hide();
        $('#login-form-password-error-message').hide();
        // Show Login Container
        $('.gateway-login-form-container').show();
        // Reset everything in other tabs
          //missing area
      }
    });

    //Register Tab
    $('.gateway-nav-register').on('click', function(e){
      e.stopPropagation();
      if(registerTabActive){
        //Change Active Vars for Tabs
        registerTabActive = false;
        loginTabActive = true;
        forgotPasswordTabActive = true;
        // Disable Event Listeners for other Tabs
        $('.gateway-nav-register').css("pointer-events", "none");
        $('.gateway-nav-login').css("pointer-events", "auto");
        $('.gateway-nav-forgot-password').css("pointer-events", "auto");
        // Change Cursor hovers for other tabs
        $('.gateway-nav-register').hover(function(e1) {
          e1.stopPropagation();
          $(this).css('cursor','auto');
        }, function(e1) {
          e1.stopPropagation();
          $(this).css('cursor','auto');
        });
        $('.gateway-nav-login').hover(function(e1) {
          e1.stopPropagation();
          $(this).css('cursor','pointer');
        }, function(e1) {
          e1.stopPropagation();
          $(this).css('cursor','auto');
        });
        $('.gateway-nav-forgot-password').hover(function(e1) {
          e1.stopPropagation();
          $(this).css('cursor','pointer');
        }, function(e1) {
          e1.stopPropagation();
          $(this).css('cursor','auto');
        });
        // Change borders and font colors of other tabs
        $('.gateway-nav-register').css("border-bottom", "3px solid #1A7E79");
        $('#gateway-register').css("color", "#107E79");
        $('.gateway-nav-login').css("border-bottom", "3px solid #FFFFFF");
        $('#gateway-login').css("color", "#B3B8BF");
        $('.gateway-nav-forgot-password').css("border-bottom", "3px solid #FFFFFF");
        $('#gateway-forgot-password').css("color", "#B3B8BF");
        //Hide all Other tab containers
        $('.gateway-login-form-container').hide();
        $('.gateway-forgot-password-form-container').hide()
          // Missing stuff here *****
        // Reset everything that could have previously been in the register container
          //missing area ****
        // Show Register Container
        $('.gateway-register-form-container').show();
        // Reset everything in other tabs
          //missing area
      }
    });
    //Fogot Password Tab
    //missing
  // NAV bar event Listeners ^^^^^^^****************************************************************************************************












  //Login Tab Event Listeners ***********************************************************************************
    // Login Tab Event vars
    var loginButtonActive = false;
    //Key Press in Email input field
    $('#login-form-email-input').on('keyup', function(e) {
      e.stopPropagation();
      $('#logged_in_error').hide();
      $('#login-form-email-input').css('border', '1px solid #C3C3C3');
      $('#login-form-email-error-message').hide();
      if($('#login-form-email-input').val()){
        $('#login-form-email-input').css('border', '1px solid #3D456A');
      }
      if ($('#login-form-password-input').val() && $('#login-form-email-input').val()) {
        $('.gateway-login-form-button').css('opacity', '1');
        loginButtonActive = true;
        $('.gateway-login-form-button').hover(function(e1) {
          e1.stopPropagation();
          $(this).css('cursor','pointer');
        }, function(e1) {
          e1.stopPropagation();
          $(this).css('cursor','auto');
        });
      }
      if (!$('#login-form-email-input').val()){
        $('#login-form-email-input').css('border', '1px solid #C3C3C3');
        $('.gateway-login-form-button').css('opacity', '0.4');
        loginButtonActive = false;
        $('.gateway-login-form-button').hover(function(e1) {
          e1.stopPropagation();
          $(this).css('cursor','auto');
        }, function(e1){
          e1.stopPropagation();
          $(this).css('cursor','auto');
        });
      }
    });

    //Key Press in password input field
    $('#login-form-password-input').on('keyup', function(e) {
      e.stopPropagation();
      $('#logged_in_error').hide();
      $('#login-form-password-input').css('border', '1px solid #C3C3C3');
      $('#login-form-password-error-message').hide();
      if($('#login-form-password-input').val()){
        $('#login-form-password-input').css('border', '1px solid #3D456A');
      }
      if ($('#login-form-password-input').val() && $('#login-form-email-input').val()) {
        $('.gateway-login-form-button').css('opacity', '1');
        loginButtonActive = true;
        $('.gateway-login-form-button').hover(function(e1) {
          e1.stopPropagation();
          $(this).css('cursor','pointer');
        }, function(e1) {
          e1.stopPropagation();
          $(this).css('cursor','auto');
        });
      }
      if (!$('#login-form-password-input').val()){
        $('#login-form-password-input').css('border', '1px solid #C3C3C3');
        $('.gateway-login-form-button').css('opacity', '0.4');
        loginButtonActive = false;
        $('.gateway-login-form-button').hover(function(e1) {
          e1.stopPropagation();
          $(this).css('cursor','auto');
        }, function(e1){
          e1.stopPropagation();
          $(this).css('cursor','auto');
        });
      }
    });

    //Ajax Calls for loggin TAB
    $('.gateway-login-form-button').on('click', function(e){
      e.stopPropagation();
      if (loginButtonActive) {
        loginButtonActive = false;
        $('.gateway-login-form-button').css("pointer-events", "none");
        $('#login-form-email-input').prop("disabled", true);
        $('#login-form-password-input').prop("disabled", true);
        $.ajax({
          data : {
              email : $('#login-form-email-input').val(),
              password : $('#login-form-password-input').val()
            },
            type : 'POST',
            url : '/login'
        }).done(function(data){
          if(data.error == 'missing data'){
            $('.gateway-login-form-button').css("pointer-events", "auto");
            $('#login-form-email-input').prop("disabled", false);
            $('#login-form-password-input').prop("disabled", false);
            $('#login-form-email-input').val('');
            $('#login-form-password-input').val('');
            $('#login-form-email-input').css('border', '1px solid #C3C3C3');
            $('#login-form-password-input').css('border', '1px solid #C3C3C3');
            $('.gateway-login-form-button').css('opacity', '0.4');
            $('.gateway-login-form-button').hover(function() {
              $(this).css('cursor','auto');
            }, function(){
              $(this).css('cursor','auto');
            });
          }
          else if(data.error == 'invalid email'){
            $('.gateway-login-form-button').css("pointer-events", "auto");
            $('#login-form-email-input').prop("disabled", false);
            $('#login-form-password-input').prop("disabled", false);
            // $('#login-form-email-input').val('');
            // $('#login-form-password-input').val('');
            $('#login-form-email-input').css('border', '1px solid #FC0D1B');
            $('#login-form-email-error-message').show();
            // $('#login-form-password-input').css('border', '1px solid #C3C3C3');
            $('.gateway-login-form-button').css('opacity', '0.4');
            $('.gateway-login-form-button').hover(function() {
              $(this).css('cursor','auto');
            }, function(){
              $(this).css('cursor','auto');
            });
          }
          else if(data.error == 'invalid password'){
            $('.gateway-login-form-button').css("pointer-events", "auto");
            $('#login-form-email-input').prop("disabled", false);
            $('#login-form-password-input').prop("disabled", false);
            $('#login-form-password-input').css('border', '1px solid #FC0D1B');
            $('#login-form-password-error-message').show();
            $('.gateway-login-form-button').css('opacity', '0.4');
            $('.gateway-login-form-button').hover(function() {
              $(this).css('cursor','auto');
            }, function(){
              $(this).css('cursor','auto');
            });
          }
          else if(data.error == 'logged in'){
            $('.gateway-login-form-button').css("pointer-events", "auto");
            $('#login-form-email-input').prop("disabled", false);
            $('#login-form-password-input').prop("disabled", false);
            $('#logged_in_error').show();
            loginButtonActive = true;
          }
          else if(data.error == 'none'){
            $('.hidden_loggin_form').submit();
          }
          // console.log(data);
        }).fail(function(jqXHR, textStatus, errorThrown){
          $('.gateway-login-form-button').css("pointer-events", "auto");
          $('#login-form-email-input').prop("disabled", false);
          $('#login-form-password-input').prop("disabled", false);
          $('#login-form-email-input').val('');
          $('#login-form-password-input').val('');
          $('#login-form-email-input').css('border', '1px solid #C3C3C3');
          $('#login-form-password-input').css('border', '1px solid #C3C3C3');
          $('.gateway-login-form-button').css('opacity', '0.4');
          $('.gateway-login-form-button').hover(function() {
            $(this).css('cursor','auto');
          }, function(){
            $(this).css('cursor','auto');
          });
        });
      }
    });
  //Login Tab Event Listeners ^^^^^^^^^^^^^^^^^^***********************************************************************************











  //Register Tab Event Listeners **************************************************************************************************

    // Register Tab event listeners
    var registerButtonActive = false;

    // Key Press on Username
    $('#register-form-username-input').on('keyup', function() {
      //change password back to hidden state
      $('#password-hide').hide();
      $('#password-show').show();
      $('#register-form-password-input').attr("type","password");
      // check if all fields have values
      if ( $('#register-form-username-input').val() && $('#register-form-email-input').val() && $('#register-form-password-input').val() && $('#register-form-age-input').val() && $('#register-form-height-ft-input').val() && $('#register-form-height-in-input').val() && ($("input[name='gender']:checked").val() !== undefined) && ($("input[name='timezone']:checked").val() !== undefined) && ($("input[name='cardio-experience']:checked").val() !== undefined) && ($("input[name='chest-experience']:checked").val() !== undefined) && ($("input[name='legs-experience']:checked").val() !== undefined) && ($("input[name='back-experience']:checked").val() !== undefined) && ($("input[name='core-experience']:checked").val() !== undefined) && ($("input[name='shoulders-experience']:checked").val() !== undefined) && ($("input[name='arms-experience']:checked").val() !== undefined) ) {
        //activate registerButtonActive
        registerButtonActive = true;
        //change border in username input field incase it's not darkend
        $('#register-form-username-input').css('border', '1px solid #3D456A');
        //change sign-up button properties
        $('.gateway-register-form-container-1-button').css('opacity', '1');
        $('.gateway-register-form-container-1-button').css("pointer-events", "auto");
        $('.gateway-register-form-container-1-button').hover(function() {
          $(this).css('cursor','pointer');
        }, function() {
          $(this).css('cursor','auto');
        });
        //probably missing stuff here
      }
      else if($('#register-form-username-input').val()){
        $('#register-form-username-input').css('border', '1px solid #3D456A');
      }
      else if(!$('#register-form-username-input').val()){
        registerButtonActive = false;
        $('#register-form-username-input').css('border', '1px solid #C3C3C3');
        $('.gateway-register-form-container-1-button').css('opacity', '0.4');
        $('.gateway-register-form-container-1-button').css("pointer-events", "auto");
        $('.gateway-register-form-container-1-button').hover(function() {
          $(this).css('cursor','auto');
        }, function() {
          $(this).css('cursor','auto');
        });
      }
    });

    // Key Press on email
    $('#register-form-email-input').on('keyup', function() {
      $('#register-form-email-error-message').hide();
      //change password back to hidden state
      $('#password-hide').hide();
      $('#password-show').show();
      $('#register-form-password-input').attr("type","password");
      //check if all fields have values
      if ( $('#register-form-username-input').val() && $('#register-form-email-input').val() && $('#register-form-password-input').val() && $('#register-form-age-input').val() && $('#register-form-height-ft-input').val() && $('#register-form-height-in-input').val() && ($("input[name='gender']:checked").val() !== undefined) && ($("input[name='timezone']:checked").val() !== undefined) && ($("input[name='cardio-experience']:checked").val() !== undefined) && ($("input[name='chest-experience']:checked").val() !== undefined) && ($("input[name='legs-experience']:checked").val() !== undefined) && ($("input[name='back-experience']:checked").val() !== undefined) && ($("input[name='core-experience']:checked").val() !== undefined) && ($("input[name='shoulders-experience']:checked").val() !== undefined) && ($("input[name='arms-experience']:checked").val() !== undefined) ) {
        //activate registerButtonActive
        registerButtonActive = true;
        //change border in email input field incase it's not darkend
        $('#register-form-email-inputs').css('border', '1px solid #3D456A');
        //change sign-up button properties
        $('.gateway-register-form-container-1-button').css('opacity', '1');
        $('.gateway-register-form-container-1-button').css("pointer-events", "auto");
        $('.gateway-register-form-container-1-button').hover(function() {
          $(this).css('cursor','pointer');
        }, function() {
          $(this).css('cursor','auto');
        });
        //Hide register email input error message if it's shown
        $('#register-form-email-error-message').hide();
        //probably missing stuff here
      }
      else if($('#register-form-email-input').val()){
        $('#register-form-email-input').css('border', '1px solid #3D456A');
      }
      else if(!$('#register-form-email-input').val()){
        registerButtonActive = false;
        $('#register-form-email-input').css('border', '1px solid #C3C3C3');
        $('.gateway-register-form-container-1-button').css('opacity', '0.4');
        $('.gateway-register-form-container-1-button').css("pointer-events", "auto");
        $('.gateway-register-form-container-1-button').hover(function() {
          $(this).css('cursor','auto');
        }, function() {
          $(this).css('cursor','auto');
        });
      }
    });

    //Key press on password
    $('#register-form-password-input').on('keyup', function() {
      //change password back to hidden state
      $('#password-hide').hide();
      $('#password-show').show();
      $('#register-form-password-input').attr("type","password");
      //check is all fields have values
      if( $('#register-form-username-input').val() && $('#register-form-email-input').val() && $('#register-form-password-input').val() && $('#register-form-age-input').val() && $('#register-form-height-ft-input').val() && $('#register-form-height-in-input').val() && ($("input[name='gender']:checked").val() !== undefined) && ($("input[name='timezone']:checked").val() !== undefined) && ($("input[name='cardio-experience']:checked").val() !== undefined) && ($("input[name='chest-experience']:checked").val() !== undefined) && ($("input[name='legs-experience']:checked").val() !== undefined) && ($("input[name='back-experience']:checked").val() !== undefined) && ($("input[name='core-experience']:checked").val() !== undefined) && ($("input[name='shoulders-experience']:checked").val() !== undefined) && ($("input[name='arms-experience']:checked").val() !== undefined) ){
        //activate registerButtonActive
        registerButtonActive = true;
        //change border in password input field and password eye button container borders incase it's not darkend
        $('#register-form-password-input').css('border', '1px solid #3D456A');
        $('.register-form-password-input-eye-container').css('border-top', '1px solid #3D456A');
        $('.register-form-password-input-eye-container').css('border-right', '1px solid #3D456A');
        $('.register-form-password-input-eye-container').css('border-bottom', '1px solid #3D456A');
        //change sign-up button properties
        $('.gateway-register-form-container-1-button').css('opacity', '1');
        $('.gateway-register-form-container-1-button').css("pointer-events", "auto");
        $('.gateway-register-form-container-1-button').hover(function() {
          $(this).css('cursor','pointer');
        }, function() {
          $(this).css('cursor','auto');
        });
        //probably missing stuff here
      }
      else if($('#register-form-password-input').val()){
        //Change Borders for password input and password show eye container
        $('#register-form-password-input').css('border', '1px solid #3D456A');
        $('.register-form-password-input-eye-container').css('border-top', '1px solid #3D456A');
        $('.register-form-password-input-eye-container').css('border-right', '1px solid #3D456A');
        $('.register-form-password-input-eye-container').css('border-bottom', '1px solid #3D456A');
      }
      else if(!$('#register-form-password-input').val()){
        //deactivate registerButtonActive
        registerButtonActive = false;
        //change borders
        $('#register-form-password-input').css('border', '1px solid #C3C3C3');
        $('.register-form-password-input-eye-container').css('border-top', '1px solid #C3C3C3');
        $('.register-form-password-input-eye-container').css('border-right', '1px solid #C3C3C3');
        $('.register-form-password-input-eye-container').css('border-bottom', '1px solid #C3C3C3');
        //reset button stuff
        $('.gateway-register-form-container-1-button').css('opacity', '0.4');
        $('.gateway-register-form-container-1-button').css("pointer-events", "auto");
        $('.gateway-register-form-container-1-button').hover(function() {
          $(this).css('cursor','auto');
        }, function() {
          $(this).css('cursor','auto');
        });
      }
    });

    //Click on password-show
    $('#password-show').on('click', function(){
      $('#register-form-password-input').attr("type","text");
      $('#password-show').hide();
      $('#password-hide').show();
      $('#register-form-password-input').focus();
    });

    //Click on password-hide
    $('#password-hide').on('click', function(){
      $('#register-form-password-input').attr("type","password");
      $('#password-hide').hide();
      $('#password-show').show();
      $('#register-form-password-input').focus();
    });

    //Key Press on Age input
    $('#register-form-age-input').on('keyup', function(){
      console.log($('#register-form-age-input').val());
      // var lastChar = myString[myString.length -1];
      // var lastChar = yeet
      $('#register-form-age-error-message').hide();
      //change password back to hidden state
      $('#password-hide').hide();
      $('#password-show').show();
      $('#register-form-password-input').attr("type","password");
      //check is all fields have values
      if( $('#register-form-username-input').val() && $('#register-form-email-input').val() && $('#register-form-password-input').val() && $('#register-form-age-input').val() && $('#register-form-height-ft-input').val() && $('#register-form-height-in-input').val() && ($("input[name='gender']:checked").val() !== undefined) && ($("input[name='timezone']:checked").val() !== undefined) && ($("input[name='cardio-experience']:checked").val() !== undefined) && ($("input[name='chest-experience']:checked").val() !== undefined) && ($("input[name='legs-experience']:checked").val() !== undefined) && ($("input[name='back-experience']:checked").val() !== undefined) && ($("input[name='core-experience']:checked").val() !== undefined) && ($("input[name='shoulders-experience']:checked").val() !== undefined) && ($("input[name='arms-experience']:checked").val() !== undefined) ){
        //activate registerButtonActive
        registerButtonActive = true;
        //change border in age input field
        $('#register-form-age-input').css('border', '1px solid #3D456A');
        //change sign-up button properties
        $('.gateway-register-form-container-1-button').css('opacity', '1');
        $('.gateway-register-form-container-1-button').css("pointer-events", "auto");
        $('.gateway-register-form-container-1-button').hover(function() {
          $(this).css('cursor','pointer');
        }, function() {
          $(this).css('cursor','auto');
        });
        //probably some missing stuff
      }
      else if($('#register-form-age-input').val()){
        $('#register-form-age-input').css('border', '1px solid #3D456A');
      }
      else if(!$('#register-form-age-input').val()){
        registerButtonActive = false;
        //border reset
        $('#register-form-age-input').css('border', '1px solid #C3C3C3');
        //reset button stuff
        $('.gateway-register-form-container-1-button').css('opacity', '0.4');
        $('.gateway-register-form-container-1-button').css("pointer-events", "auto");
        $('.gateway-register-form-container-1-button').hover(function() {
          $(this).css('cursor','auto');
        }, function() {
          $(this).css('cursor','auto');
        });
      }
    });

    //Focus out of age
    $('#register-form-age-input').on('focusout', function(){
      if($('#register-form-age-input').val()){
        console.log('yoyoyoyooyyooyoyooyoy');
      }
      // if($('#register-form-age-input').val() >= 14 && $('#register-form-age-input').val() <= 64){
      //
      // }
      // console.log('ay');
    });





});
