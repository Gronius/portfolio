$(document).ready(function () {
  //sticky header
  $(window).scroll(function () {
    if ($(this).scrollTop() > 1) {
      $('.header-area').addClass('sticky');
    } else {
      $('.header-area').removeClass('sticky');
    }

    // Update the active section in the header
    updateActiveSection();
  });

  $('.menu a').click(function (e) {
    e.preventDefault();

    let target = $(this).attr('href');

    if ($(target).hasClass('active-section')) {
      return;
    }

    if (target === '#home') {
      $('html, body').animate(
        {
          scrollTop: 0,
        },
        500,
      );
    } else {
      let offset = $(target).offset().top - 40;

      $('html, body').animate(
        {
          scrollTop: offset,
        },
        500,
      );
    }

    $('.menu a').removeClass('active');
    $(this).addClass('active');
  });

  //Content revealing js
  ScrollReveal({
    distance: '30px',
    duration: 2000,
    delay: 200,
  });

  ScrollReveal().reveal('.header a, .profile-photo, .about-content, .skills', {
    origin: 'left',
  });
  ScrollReveal().reveal(
    '.header nav, .profile-text, .about-skills, .practiceskills',
    {
      origin: 'right',
    },
  );
  ScrollReveal().reveal('.project-title, .title, .contact-title', {
    origin: 'top',
  });
  ScrollReveal().reveal('.projects, .social', {
    origin: 'bottom',
  });
  // hamb
  let hamb = document.querySelector('.hamb');
  let navMenu = document.querySelector('.menu');

  hamb.addEventListener('click', mobileMenu);

  function mobileMenu() {
    hamb.classList.toggle('active');
    navMenu.classList.toggle('active');
  }

  const navLink = document.querySelectorAll('.title-nav');

  navLink.forEach(n => n.addEventListener('click', closeMenu));

  function closeMenu() {
    hamb.classList.remove('active');
    navMenu.classList.remove('active');
  }

});

function updateActiveSection() {
  let scrollPosition = $(window).scrollTop();

  // Checking if scroll position is at the top of the page
  if (scrollPosition === 0) {
    $(".header  a").removeClass("active");
    $(".header a[href='#home']").addClass("active");
    return;
  }

  // Iterate through each section and update the active class in the header
  $("section").each(function () {
    let target = $(this).attr("id");
    let offset = $(this).offset().top;
    let height = $(this).outerHeight();

    if (
      scrollPosition >= offset - 40 &&
      scrollPosition < offset + height - 40
    ) {
      $(".header a").removeClass("active");
      $(".header a[href='#" + target + "']").addClass("active");
    }
  });
}
