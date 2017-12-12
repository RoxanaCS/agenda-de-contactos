
$(document).ready(function(){

  $('.bnt-agregar').click(function(){
    var comment = $('.input-contacto').val();
    var phone = $('.input-telefono').val();
    $('input-contacto').val("");
    $('input-telefono').val("");
    var cont = $('#cont');
    cont.append('<div><p>' + comment + phone + '</p><i class= "fa fa-trash trash"></i></i></div>');
  })

})
