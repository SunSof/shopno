import "./styles.scss";
import "./hamburger.scss";
import "./hello.scss";
import "./about.scss";
import "./services.scss";
import "./services-card.scss";
import "./team-card.scss";
import "./say.scss";
import "./contacts.scss";
import "./follow.scss";
import "./say-slider.scss";
import "./mixins.scss";
var banner = $(".b-card--bg1-hov")
var button = $("button")

// handle click and add class
$(".js-open").on("click", function(){
  banner.addClass("alt")
})

// handle click and remove class
$(".js-close").on("click", function(){
  banner.removeClass("alt")
})