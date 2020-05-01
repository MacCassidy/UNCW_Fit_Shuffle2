$(document).ready(function(){
  $('#layout-logout-button-form').css('display', 'flex');
  $('#layout-logout-button-form').css('pointer-events', 'auto');
  $('#layout-logout-button').css('display', 'block');
  $('#layout-logout-button').css('pointer-events', 'auto');
  $('#layout-logout-button').on('click', function(e){
    e.preventDefault();
    e.stopPropagation();
    $('#layout-logout-button-form').submit()
  });

  $(input).click(function(){
    if($("input[name='category']").is(":checked") && $("input[name='experience-button']").is(":checked")){
      $('.homepage-body-conatiner-button-1').css('opacity', '1.0');
      $('.homepage-body-conatiner-button-1').css("pointer-events", "auto");
      // Vars.gateway_register_form_container_button.css('opacity', '0.4');
      // Vars.gateway_register_form_container_button.css("pointer-events", "none");
    } else {
      $('.homepage-body-conatiner-button-1').css('opacity', '0.4');
      $('.homepage-body-conatiner-button-1').css("pointer-events", "none");
    }
  });


  $('.homepage-body-conatiner-button-1').click(function(e){
    $('.sesh_form').submit();
  });
});
