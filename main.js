var allButtons = $(" #buttons > span ");

console.dir(allButtons.length);
for (let i = 0; i < allButtons.length; i++) {
  $(allButtons[i]).on("click", function(x) {
    var index = $(x.currentTarget).index();
    var p = index * -300;
    $("#images").css({
      transform: "translate(" + p + "px)"
    });
    n = index;
    allButtons
      .eq(n)
      .addClass("red")
      .siblings(".red")
      .removeClass("red");
  });
}

var n = 0;
var size = allButtons.length;
allButtons.eq(n % size).trigger("click");

var timeId = setInterval(() => {
  n += 1;
  allButtons.eq(n % size).trigger("click");
}, 1000);

$(".window").on("mouseenter", function() {
  window.clearInterval(timeId);
});
$(".window").on("mouseleave", function() {
  timeId = setInterval(() => {
    n += 1;
    allButtons.eq(n % size).trigger("click");
  }, 1000);
});
