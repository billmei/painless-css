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

function stickyNav() {
  const $contentStart = $('#why-learn');
  const $navdesktop = $('#navdesktop');
  const $navmobile = $('#navmobile');
  const distanceToAppearance = $contentStart.offset().top;
  $(window).scroll(function() {
    if ($(window).scrollTop() > distanceToAppearance) {
      $navdesktop.css({
        position: 'fixed',
        top: '0px',
      });
      $navmobile.css({
        display: 'block', // .d-lg-none has !important which overrides this.
      });
    } else {
      $navdesktop.css({
        position: 'absolute',
        top: '0px',
      });
      $navmobile.css({
        display: 'none',
      });
    }
  });
}

$(document).ready(function() {
  var $linkTags = $('link');
  stickyNav();

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
  $('.officeHours').attr('href', 'mai' + `lto:${deobfuscatedEmail()}?subject=${encodeURIComponent('Hi Bill! I’m interested in Painless CSS office hours.')}`);
  $('.officeHours').on('mouseenter', function(e) {
    $(this).text(deobfuscatedEmail());
  });
});
