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
