function splash(time) {
  setTimeout(function () {
    $('#splashview').hide(300);
    $('#logohome').show("slow");
  }, time);
};

$('#enterbutton').click(gomainmenu)

function gomainmenu() {
  $('#logohome').hide("fast");
  $('#mainmenu').show("fast");
}

$('.contacto').click(gotocontact)

function gotocontact(e) {
  var option = event.target;
  console.log(option);
  $('#portafolio').hide(300);
  $('#sobre_mi').hide(300);
  $('#contacto').show("slow");
}

$('.portafolio').click(gotoportafolio)

function gotoportafolio(e) {
  var option = event.target;
  console.log(option);
  $('#sobre_mi').hide(300);
  $('#contacto').hide(300);
  $('#portafolio').show("slow")
}

$('.sobre_mi').click(gotosobremi)

function gotosobremi(e) {
  var option = event.target;
  console.log(option);
  $('#portafolio').hide(300);
  $('#contacto').hide(300);
  $('#sobre_mi').show("slow");
}
