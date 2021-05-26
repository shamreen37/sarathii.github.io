$(window).scroll(function () {
  if ($(document).scrollTop() > 50) {
    $(".nav").addClass("affix");
    $(".navTrigger").addClass("affix-2");
    console.log("OK");
  } else {
    $(".nav").removeClass("affix");
    $(".navTrigger").removeClass("affix-2");
  }
});

$(".navTrigger").click(function () {
  $(this).toggleClass("active");
  console.log("Clicked menu");
  $("#mainListDiv").toggleClass("show_list");
  $("#mainListDiv").fadeIn();
});
