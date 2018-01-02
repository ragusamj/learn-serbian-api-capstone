


$(document).ready(function(){

$('#term').focus(function(){
  var full = $("#poster").has("img").length ? true : false;
  if(full === false){
     $('#poster').empty();
  }
});

var getPoster = function(){

    var film = $('#term').val();

     if(film === ''){

        $('#poster').html("<h2 class='loading'>Ha! We haven't forgotten to validate the form! Please enter something.</h2>");

     } else {

        $('#poster').html("<h2 class='loading'>Your definition is on its way!</h2>");

        $.getJSON("http://glosbe.com/gapi/translate?from=eng&dest=eng&format=json&phrase=hello&pretty=true" + film + "?callback=?", function(json) {
           if (json !== "Nothing found."){
                 $('#poster').html('<h2 class="loading">Well, gee whiz! We found you a definition, skip!</h2><img id="thePoster" src=' + json[0].posters[0].image.url + ' />');
              } else {
                 $.getJSON("http://glosbe.com/gapi/translate?from=eng&dest=eng&format=json&phrase=hello&pretty=true" + "?callback=?", function(json) {
                    console.log(json);
                    $('#poster').html('<h2 class="loading">Nothing found.</h2><img id="thePoster" src=' + json[0].posters[0].image.url + ' />');
                 });
              }
         });
