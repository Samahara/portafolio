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
  $('#sobre_mi').show("fast");
  $('.sobre_mi').addClass("sobre_mion");
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
  $('#infobbvaplan').show("slow");
  $('.bbvaplan').addClass("bbvaplanon");
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

$('.bbvaplan').click(gotoinfobbvaplan)

function gotoinfobbvaplan(e) {
  var option = event.target;
  console.log(option);
  $('#infotwitter').hide(300);
  $('#infofoodmap').hide(300);
  $('#infobbvaplan').show("slow");
  $('.twitter').removeClass("twitteron");
  $('.foodmap').removeClass("foodmapon");
  $('.bbvaplan').addClass("bbvaplanon");
}

$('.foodmap').click(gotosoinfofoodmap)

function gotosoinfofoodmap(e) {
  var option = event.target;
  console.log(option);
  $('#infotwitter').hide(300);
  $('#infobbvaplan').hide(300);
  $('#infofoodmap').show("slow");
  $('.twitter').removeClass("twitteron");
  $('.bbvaplan').removeClass("bbvaplanon");
  $('.foodmap').addClass("foodmapon");
}

$('.twitter').click(gotoinfotwitter)

function gotoinfotwitter(e) {
  var option = event.target;
  console.log(option);
  $('#infofoodmap').hide(300);
  $('#infobbvaplan').hide(300);
  $('#infotwitter').show("slow");
  $('.bbvaplan').removeClass("bbvaplanon");
  $('.foodmap').removeClass("foodmapon");
  $('.twitter').addClass("twitteron");
}
