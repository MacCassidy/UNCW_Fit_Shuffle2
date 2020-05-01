var Vars = {};
$(document).ready(function(){
  // Event Handlers ***********************************************************************************
  Vars.invalid_code = $('#invalid-code-quote');
  Vars.registercode_input = $('#registercode-input');
  Vars.registercode_bottom_button = $('.registercode-bottom-button');
  Vars.cancel_span = $('#cancel-span');

  // Event Handlers ***********************************************************************************
  Vars.registercode_bottom_button.hover(function(e){
    e.preventDefault();
    e.stopPropagation();
    $(this).css('cursor', 'pointer');
  }, function(e){
    e.preventDefault();
    e.stopPropagation();
    $(this).css('cursor', 'auto');
  });

  Vars.registercode_input.on('keyup', function(e) {
    e.preventDefault();
    e.stopPropagation();
    $(this).css('border', '1px solid #3D456A');
    Vars.invalid_code.hide();
    if ($(this).val()){
      Vars.registercode_bottom_button.css('opacity', '1');
      Vars.registercode_bottom_button.css('pointer-events', 'auto');
    } else {
      $(this).css('border', '1px solid #C3C3C3');
      Vars.registercode_bottom_button.css('opacity', '0.4');
      Vars.registercode_bottom_button.css('pointer-events', 'none');
    }
  });

  // Vars.cancel_span.click(function(e){
  //   e.preventDefault();
  //   e.stopPropagation();
  //   Vars.invalid_code.hide();
  //   Vars.registercode_input.css('border', '1px solid #C3C3C3');
  //   Vars.registercode_input.val();
  //   // Ajax
  //   $.ajax({
  //     data : {
  //         // registerconfirm
  //         register_code : '',
  //         status : 'canel'
  //       },
  //       type : 'POST',
  //       url : '/registerconfirm'
  //   }).done(function(data){
  //     console.log(".done()  data.error = " + data.error);
  //
  //   }).fail(function(jqXHR, textStatus, errorThrown){
  //     // console.log(".fail()  errorThrown = " + errorThrown);
  //     console.log(".fail()");
  //     // console.log(errorThrown);
  //   });
  //
  // });


});
