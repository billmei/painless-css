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
  const $navbar = $('.navbar');
  const $navbarWrapper = $('.navbar-wrapper');
  $navbarWrapper.height($navbar.height() + 17);
  const distanceToAppearance = $navbar.offset().top;
  $(window).scroll(function() {
    $scrollTop = $(window).scrollTop();
    if ($scrollTop > distanceToAppearance) {
      $navbar.css({
        position: 'fixed',
        top: '0px',
      });
    } else {
      $navbar.css({
        position: 'absolute',
        top: '0px',
      });
    }
  });
}

function offsetAnchor() {
  if (location.hash.length !== 0) {
    window.scrollTo(window.scrollX, window.scrollY - 70);
  }
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

  $('.navbar-collapse a').on('click', function() {
    // Auto-close navbar when clicking on a link
    $('.navbar-collapse').collapse('hide');
  });
  $('a[href^="#"]').on('click', function() {
    // Jump to a few pixels above the target
    window.setTimeout(offsetAnchor, 0);
  })
});
window.setTimeout(offsetAnchor, 0);
