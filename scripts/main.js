var main = function () {
  $('.hamburger-container').click(function() {
    $('nav').toggleClass('shift');
    $('body').toggleClass('shift');
  });
};


$(document).ready(main);
