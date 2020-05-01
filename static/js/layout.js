$(document).ready(function(){
  var window_height = window.innerHeight;
  // console.log(window_height);
  var window_width = window.innerWidth;
  // console.log(window_width);
  $('body').css('height', (parseInt(window_height) + 'px'));
  $('body').css('width', (parseInt(window_width) + 'px'));
});
