var Vars = {};
$(document).ready(function(){
  Vars.logout_button_form = $('#layout-logout-button-form');
  Vars.logout_button = $('#layout-logout-button');
  Vars.edit_profile_button = $('.profile-body-conatiner-button');
  Vars.change_password_button = $('#change-pass-button');
  Vars.edit_profile_form = $('#hidden_edit_profile_form');
  Vars.change_password_form = $('#hidden_change_password_form');

  Vars.logout_button_form.css('display', 'flex');
  Vars.logout_button_form.css('pointer-events', 'auto');
  Vars.logout_button.css('display', 'block');
  Vars.logout_button.css('pointer-events', 'auto');
  // Vars.logout_button.on('click', function(e){
  //   e.preventDefault();
  //   e.stopPropagation();
  //   Vars.logout_button_form.submit()
  // });

  Vars.edit_profile_button.click(function(e){
    e.stopPropagation();
    e.preventDefault();
    Vars.edit_profile_button.css('pointer-events', 'none');
    Vars.logout_button.prop('disabled', true);
    Vars.change_password_button.prop('disabled', true);
    Vars.edit_profile_form.submit();
  });
  // $(input).click(function(){
  //   if($("input[name='category']").is(":checked") && $("input[name='experience-button']").is(":checked")){
  //     $('.homepage-body-conatiner-button-1').css('opacity', '1.0');
  //     $('.homepage-body-conatiner-button-1').css("pointer-events", "auto");
  //     // Vars.gateway_register_form_container_button.css('opacity', '0.4');
  //     // Vars.gateway_register_form_container_button.css("pointer-events", "none");
  //   } else {
  //     $('.homepage-body-conatiner-button-1').css('opacity', '0.4');
  //     $('.homepage-body-conatiner-button-1').css("pointer-events", "none");
  //   }
  // });
  //
  //
  // $('.homepage-body-conatiner-button-1').click(function(e){
  //   $('.sesh_form').submit();
  // });
});
