// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails";
import "controllers";

$(function () {
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 50) {
      $(".header").addClass("active");
      $(".flex-wrapper").addClass("active");
    } else {
      $(".header").removeClass("active");
      $(".flex-wrapper").removeClass("active");
    }
  });
});
