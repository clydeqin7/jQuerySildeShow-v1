var allButtons = $(" #buttons > span ");

for (let i = 0; i < allButtons.length; i++) {
  $(allButtons[i]).on("click", function(x) {
    var index = $(x.currentTarget).index();
    var p = index * -300;
    $("#images").css({
      transform: "translate(" + p + "px)"
    });
    n = index;
    activeButton(allButtons.eq(n));
  });
}


var n = 0;
var size = allButtons.length;
allButtons.eq(n % size).trigger("click");
var timeId = setTimer()

$(".window").on("mouseenter", function() {
  window.clearInterval(timeId)
})
$(".window").on("mouseleave", function() {
  timeId = setTimer()
})

/* funciton */
function activeButton($button) {
  $button
    .addClass("red")
    .siblings(".red")
    .removeClass("red");
}
function setTimer() {
  return setInterval(() => {
    n += 1;
    allButtons.eq(n % size).trigger("click");
  }, 1000);
}