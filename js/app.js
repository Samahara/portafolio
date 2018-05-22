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
  $('.sobre_mi').removeClass("sobre_mion");
  $('.portafolio').removeClass("portafolioon");
  $('.contacto').addClass("contactoon");
}

$('.portafolio').click(gotoportafolio)

function gotoportafolio(e) {
  var option = event.target;
  console.log(option);
  $('#sobre_mi').hide(300);
  $('#contacto').hide(300);
  $('#portafolio').show("slow")
  $('.contacto').removeClass("contactoon");
  $('.sobre_mi').removeClass("sobre_mion");
  $('.portafolio').addClass("portafolioon");
}

$('.sobre_mi').click(gotosobremi)

function gotosobremi(e) {
  var option = event.target;
  console.log(option);
  $('#portafolio').hide(300);
  $('#contacto').hide(300);
  $('#sobre_mi').show("slow");
  $('.contacto').removeClass("contactoon");
  $('.portafolio').removeClass("portafolioon");
  $('.sobre_mi').addClass("sobre_mion");
}
