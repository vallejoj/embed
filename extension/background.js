$(document).ready(function() {
  $('*').click(function() {
    var idd = $(this).attr('id');
    var classdiv = $(this).attr('class');
    alert('ID is: ' + idd + '\n Class: ' + classdiv);
    //request and then send back
  });
});
