$(document).ready(function(){
  // Vars for Nav Bar Event Listeners
  var loginTabActive = false;
  var registerTabActive = true;
  var forgotPasswordTabActive = true;

  // Event Listeners for Nav Bar
    //Login Tab
    $('.gateway-nav-login').on('click', function(){
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
        $('.gateway-nav-register').hover(function() {
          $(this).css('cursor','pointer');
        }, function() {
          $(this).css('cursor','auto');
        });
        $('.gateway-nav-login').hover(function() {
          $(this).css('cursor','auto');
        }, function() {
          $(this).css('cursor','auto');
        });
        $('.gateway-nav-forgot-password').hover(function() {
          $(this).css('cursor','pointer');
        }, function() {
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
        $('.gateway-login-form-button').css('opacity', '0.6');
        $('.gateway-login-form-button').hover(function() {
          $(this).css('cursor','auto');
        }, function(){
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
    $('.gateway-nav-register').on('click', function(){
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
        $('.gateway-nav-register').hover(function() {
          $(this).css('cursor','auto');
        }, function() {
          $(this).css('cursor','auto');
        });
        $('.gateway-nav-login').hover(function() {
          $(this).css('cursor','pointer');
        }, function() {
          $(this).css('cursor','auto');
        });
        $('.gateway-nav-forgot-password').hover(function() {
          $(this).css('cursor','pointer');
        }, function() {
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


  // *************************************


  //Login Tab Event Listeners
    // Login Tab Event vars
    var loginButtonActive = false;
    //Key Press in Email input field
    $('#login-form-email-input').on('keyup', function() {
      $('#logged_in_error').hide();
      $('#login-form-email-input').css('border', '1px solid #C3C3C3');
      $('#login-form-email-error-message').hide();
      if($('#login-form-email-input').val()){
        $('#login-form-email-input').css('border', '1px solid #3D456A');
      }
      if ($('#login-form-password-input').val() && $('#login-form-email-input').val()) {
        $('.gateway-login-form-button').css('opacity', '1');
        loginButtonActive = true;
        $('.gateway-login-form-button').hover(function() {
          $(this).css('cursor','pointer');
        }, function() {
          $(this).css('cursor','auto');
        });
      }
      if (!$('#login-form-email-input').val()){
        $('#login-form-email-input').css('border', '1px solid #C3C3C3');
        $('.gateway-login-form-button').css('opacity', '0.6');
        loginButtonActive = false;
        $('.gateway-login-form-button').hover(function() {
          $(this).css('cursor','auto');
        }, function(){
          $(this).css('cursor','auto');
        });
      }
    });

    //Key Press in Email input field
    $('#login-form-password-input').on('keyup', function() {
      $('#logged_in_error').hide();
      $('#login-form-password-input').css('border', '1px solid #C3C3C3');
      $('#login-form-password-error-message').hide();
      if($('#login-form-password-input').val()){
        $('#login-form-password-input').css('border', '1px solid #3D456A');
      }
      if ($('#login-form-password-input').val() && $('#login-form-email-input').val()) {
        $('.gateway-login-form-button').css('opacity', '1');
        loginButtonActive = true;
        $('.gateway-login-form-button').hover(function() {
          $(this).css('cursor','pointer');
        }, function() {
          $(this).css('cursor','auto');
        });
      }
      if (!$('#login-form-password-input').val()){
        $('#login-form-password-input').css('border', '1px solid #C3C3C3');
        $('.gateway-login-form-button').css('opacity', '0.6');
        loginButtonActive = false;
        $('.gateway-login-form-button').hover(function() {
          $(this).css('cursor','auto');
        }, function(){
          $(this).css('cursor','auto');
        });
      }
    });

    //Ajax Calls for loggin
    $('.gateway-login-form-button').on('click', function(event){
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
            $('.gateway-login-form-button').css('opacity', '0.6');
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
            $('.gateway-login-form-button').css('opacity', '0.6');
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
            $('.gateway-login-form-button').css('opacity', '0.6');
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
          $('.gateway-login-form-button').css('opacity', '0.6');
          $('.gateway-login-form-button').hover(function() {
            $(this).css('cursor','auto');
          }, function(){
            $(this).css('cursor','auto');
          });
        });
      }
    });

// $('#login-form-email-input').prop("disabled", true);







});
