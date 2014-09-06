$(function() {

  /* Add animations on elements */
  $('#logo').addClass('animated bounceInLeft');
  $('ul.menu-icons-container li').addClass('animated bounceInDown');

  $(".typing").typed({
      strings: [
        "Hi^500 I'm Axle",
        "Hi I'm Alexandre, ^500 \n a software engineer",
        "I create ^500 web, mobile apps ^500 \n and other stuff",
        "Oh, ^200 by the way ^300 \n I'm available for hire."
      ],
      typeSpeed: 50,
      //backDelay: 500, //500
      callback: function(){ animateHome(); }
  });

  function animateHome () {
    /* Add animations on elements */
    $('.one .profile-pic').addClass('animated tada');
  }

  /* Add animations on elements when scrolling */
  $(window).scroll(function(event) {
    // no animations for small screens
    if ($(window).width() > 568){
      handleAnimationWhenVisible("#motivationals .unit", "fadeInLeftRight");
      handleAnimationWhenVisible("#focus-points ul li", "fadeInLeftRight");
      handleAnimationWhenVisible("#technos .logo", "fadeInUp");
      handleAnimationWhenVisible("div.trnstn ul li.unit", "fadeInLeftRight");
    }
  });

  /* headroom plugin config */
  $("header").headroom({
   "tolerance": 5,
    "offset": 205,
    "classes": {
      "initial": "animated-header",
      "pinned": "slideDown",
      "unpinned": "slideUp"
    }
  });

  /* transition behaviour */
  $("div.icon").click(function(e){
    var positionFromTop = [];
    var transitionPosition = $(this).position().top;
    var scrollPosition = null;

    e.preventDefault();
    $(".page").each(function(index){
      positionFromTop.push($(this).position().top);
    });
    scrollPosition = findNextPage(transitionPosition, positionFromTop);
    smoothScrollTo(scrollPosition);
  });

  function findNextPage(transitionPosition, allPagesPosition){
    var nextIndexPagePosition = null;

    $.each(allPagesPosition, function(index,value){
      if (transitionPosition < value) {
        nextIndexPagePosition = index;
        return false;
      };
    });
    return allPagesPosition[nextIndexPagePosition];
  };

  function smoothScrollTo(position){
    $("html, body").animate(
      { scrollTop: position - 20 },
      { duration: 750 }
    );
  };

  function handleAnimationWhenVisible(selector,animation) {
    $(selector).each(function(i, el) {
      var el = $(el);
      if (el.visible(true)) {
        el.addClass("animated");
        if (animation === 'fadeInUp') {
          el.addClass("fadeInUp");
        }
        else if (animation === 'fadeInLeftRight') {
          if (el.hasClass("left")) {
            el.addClass("fadeInLeft");
          }
          if (el.hasClass("right")) {
            el.addClass("fadeInRight");
          }
          if (el.hasClass("bnce")) {
            el.addClass("bounceIn");
          }
        }
      }
    });
  }

});