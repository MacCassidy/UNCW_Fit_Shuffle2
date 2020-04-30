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
});
