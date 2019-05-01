const deobfuscatedEmail = () => {
  const email = [
    'bi',
    'll@',
    'b',
    'il',
    'lme',
    'i.n',
    'et'
  ];
  let result = '';
  for (let i = 0; i < email.length; i++) {
    result += email[i];
  }
  return result;
};

$(document).ready(function() {
  var $linkTags = $('link');

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

  $('.accordion-toggle').click(function() {
    $(this).toggleClass('expanded').next('.accordion-content').slideToggle('fast');
  });

  $('.expand-all').click(function() {
    $('.accordion-content').slideDown();
    $(this).hide();
    $('.collapse-all').show();
    $('.accordion-toggle').removeClass('expanded');
    $('.accordion-toggle').addClass('expanded');
  })

  $('.collapse-all').click(function() {
    $('.accordion-content').slideUp();
    $(this).hide();
    $('.expand-all').show();
    $('.accordion-toggle').addClass('expanded');
    $('.accordion-toggle').removeClass('expanded');
  })

  $('.emailLink').attr('href', 'mai' + `lto:${deobfuscatedEmail()}`);
});
