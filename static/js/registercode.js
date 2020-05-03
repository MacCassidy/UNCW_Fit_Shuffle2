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

  Vars.cancel_span.click(function(e){
    Vars.cancel_span.css('pointer-events', 'none');
    Vars.registercode_bottom_button.css('opacity', '0.4');
    Vars.registercode_bottom_button.css('pointer-events', 'none');
    e.preventDefault();
    e.stopPropagation();
    Vars.invalid_code.hide();
    Vars.registercode_input.css('border', '1px solid #C3C3C3');
    Vars.registercode_input.prop('disabled', 'true');
    // Ajax
    $.ajax({
      data : {
          // registerconfirm
          register_code : ' ',
          status : 'cancel'
        },
        type : 'POST',
        url : '/registerconfirm'
    }).done(function(data){
      if (data.error == 'missing data') {
          Vars.cancel_span.css('pointer-events', 'auto');
          Vars.registercode_bottom_button.css('opacity', '0.4');
          Vars.registercode_bottom_button.css('pointer-events', 'none');
          Vars.registercode_input.val('');
          Vars.registercode_input.prop('disabled', 'false');
        } else if (data.error == 'invalid code'){
          Vars.invalid_code.show();
          Vars.cancel_span.css('pointer-events', 'auto');
          Vars.registercode_bottom_button.css('opacity', '0.4');
          Vars.registercode_bottom_button.css('pointer-events', 'none');
          Vars.registercode_input.css('border', '1px solid #FC0D1B;');
          Vars.registercode_input.prop('disabled', 'false');
        } else if (data.error == 'canceled'){
          $('.registercode-form').submit();
        // console.log(data.error);
        // console.log(".done()  data.error = " + data.error);
      } else {
        Vars.cancel_span.css('pointer-events', 'auto');
        Vars.registercode_bottom_button.css('opacity', '0.4');
        Vars.registercode_bottom_button.css('pointer-events', 'none');
        Vars.registercode_input.val('');
        Vars.registercode_input.prop('disabled', 'false');
      }
    }).fail(function(jqXHR, textStatus, errorThrown){
      Vars.cancel_span.css('pointer-events', 'auto');
      Vars.registercode_bottom_button.css('opacity', '0.4');
      Vars.registercode_bottom_button.css('pointer-events', 'none');
      Vars.registercode_input.val('');
      Vars.registercode_input.prop('disabled', 'false');
    });
  });


  Vars.registercode_bottom_button.click(function(e){
    Vars.cancel_span.css('pointer-events', 'none');
    Vars.registercode_bottom_button.css('opacity', '0.4');
    Vars.registercode_bottom_button.css('pointer-events', 'none');
    e.preventDefault();
    e.stopPropagation();
    Vars.invalid_code.hide();
    Vars.registercode_input.css('border', '1px solid #C3C3C3');
    Vars.registercode_input.prop('disabled', 'true');
    // Vars.registercode_input.prop('disabled', 'false');
    if (Vars.registercode_input.val()){
      $.ajax({
        data : {
            // registerconfirm
            register_code : Vars.registercode_input.val(),
            status : 'confirm'
          },
          type : 'POST',
          url : '/registerconfirm'
      }).done(function(data){
        if(data.error == 'missing data'){
          Vars.cancel_span.css('pointer-events', 'auto');
          Vars.registercode_bottom_button.css('opacity', '0.4');
          Vars.registercode_bottom_button.css('pointer-events', 'none');
          Vars.registercode_input.val('');
          Vars.registercode_input.prop('disabled', 'false');
        } else if (data.error == 'invalid code'){
          Vars.invalid_code.show();
          Vars.cancel_span.css('pointer-events', 'auto');
          Vars.registercode_bottom_button.css('opacity', '0.4');
          Vars.registercode_bottom_button.css('pointer-events', 'none');
          Vars.registercode_input.css('border', '1px solid #FC0D1B;');
          Vars.registercode_input.prop('disabled', 'false');
        } else if (data.error == 'confirmed'){
          $('.registercode-form').submit();
        } else {
          Vars.cancel_span.css('pointer-events', 'auto');
          Vars.registercode_bottom_button.css('opacity', '0.4');
          Vars.registercode_bottom_button.css('pointer-events', 'none');
          Vars.registercode_input.val('');
          Vars.registercode_input.prop('disabled', 'false');
        }
      }).fail(function(jqXHR, textStatus, errorThrown){
        Vars.cancel_span.css('pointer-events', 'auto');
        Vars.registercode_bottom_button.css('opacity', '0.4');
        Vars.registercode_bottom_button.css('pointer-events', 'none');
        Vars.registercode_input.val('');
        Vars.registercode_input.prop('disabled', 'false');
      });
    }
  });


});
