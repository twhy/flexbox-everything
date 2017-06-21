window.addEventListener('DOMContentLoaded', function() {
  var $header = document.querySelector('.header');
  var $toggle = document.querySelector('.nav-toggle');
  $toggle.addEventListener('click', function(e) {
    e.preventDefault();
    e.currentTarget.classList.toggle('open');
  });
});