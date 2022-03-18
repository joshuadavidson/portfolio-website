$(document).ready(function() {
  // enable fullpage.js
  $('#fullpage').fullpage({
    anchors: ['intro', 'about', 'skills', 'backend', 'frontend', 'contact'],
    scrollOverflow: true,
    fitToSection: false,
    animateAnchor: false,
    bigSectionsDestination: 'top',
  });
});
