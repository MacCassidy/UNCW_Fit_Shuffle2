$(document).ready(function(){
  // This set's the width/height to the window of a phone screen, so nothing is hidden under peripheral mobile browser toolbars
  var window_height = window.innerHeight;
  var window_width = window.innerWidth;
  $('body').css('height', (parseInt(window_height) + 'px'));
  $('body').css('width', (parseInt(window_width) + 'px'));
  // Log out event hanlder
  $('#layout-logout-button').click(function(e){
    e.stopPropagation();
    e.preventDefault();
    $('#layout-logout-button-form').submit();
  });
});
