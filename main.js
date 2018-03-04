$(document).ready(function() {
  var $linkTags = $('link')

  $('#disable-stylesheets').on('click', function(e) {
    e.preventDefault();
    $.each($linkTags, function(i, sheet) {
      sheet.disabled = true;
    });

    $('stylesheets').show();
  });

  $('#enable-stylesheets').on('click', function(e) {
    e.preventDefault();
    $.each($linkTags, function(i, sheet) {
      sheet.disabled = false;
    });

    $('stylesheets').hide();
  });

});
