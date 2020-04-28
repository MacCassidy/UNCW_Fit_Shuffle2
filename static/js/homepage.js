$(document).ready(function(){
  $('#layout-logout-button-form').css('display', 'flex');
  $('#layout-logout-button-form').css('pointer-events', 'auto');
  // $('#layout-logout-button').css('display', 'auto');
  $('#layout-logout-button').css('display', 'block');
  $('#layout-logout-button').css('pointer-events', 'auto');
  $('#layout-logout-button').on('click', function(e){
    e.preventDefault();
    e.stopPropagation();
    $('#layout-logout-button-form').submit()
  });
  $('#apcheck-button').click(function(e){
    e.preventDefault();
    e.stopPropagation();
    $.ajax({
      data : {
          // Vars.login_form
          // email : Vars.login_form_email_input.val(),
          // password : Vars.login_form_password_input.val()
        },
        type : 'POST',
        url : '/apcheck'
    }).done(function(data){
        console.log(data.task0);
        $('#apcheck-output').text(data.task0);
    }).fail(function(jqXHR, textStatus, errorThrown){
      console.log("failed");
    });
  });

// console.log("homepage******************************");




});
