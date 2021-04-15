let dateNow;
$(document).ready(function(){
  var now = new Date();
  var nowDay = now.getDate();
  var nowMonth = now.getMonth() + 1;
  var nowYear = now.getFullYear();
  dateNow = (nowYear + "-" + "0" + nowMonth + "-" + nowDay );
  $("#time-picker").attr("min" , dateNow);
  $("#time-picker").attr("value" , dateNow);
});
$( "#calculate" ).click(function() {
    var date = new Date($('#time-picker').val());
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    var timePicked = ([month, day, year].join("/"))
    var now = new Date();
    var nowDay = now.getDate();
    var nowMonth = now.getMonth() + 1;
    var nowYear = now.getFullYear();
    var timeNow = [nowMonth, nowDay, nowYear].join("/");
    var millisBetween;
  function daysdifference(firstDate, secondDate){

    var startDay = new Date(firstDate);

    var endDay = new Date(secondDate);


    millisBetween = startDay.getTime() - endDay.getTime();
    var days = millisBetween / (1000 * 3600 * 24);

    var daysLeft = Math.round(Math.abs(days));
    var hoursLeft = daysLeft * 24;
    var minutsLeft = daysLeft * 1440;
    var h1 = $("#days");
    var h2 = $("#hour");
    h1.text(daysLeft +" days left");
    h2.text(hoursLeft +" hours left");
    h1.css("visibility","visible");
    h2.css("visibility","visible");
    console.log("its left " + daysLeft + " days or " + hoursLeft + " hours " + " or " + minutsLeft + " minuts.")

  }
  daysdifference(timeNow, timePicked)
});
var randomNames;
const background = $("#background");
$(document).ready(function(){
  randomNames = [
    "forest","water","animal","city","thunder","simple","rain","nature","romantic","food","events","sky","interiors","Street Photography","Technology","Travel"
  ]
  var color = ["#fff","#000"];
  var chooseRandomName = randomNames[Math.floor(Math.random() * randomNames.length)];
  var chooseRandomcolor = color[Math.floor(Math.random() * color.length)];
  console.log(chooseRandomName)
  console.log(chooseRandomcolor)
  let url = `url(https://source.unsplash.com/1600x900/?${chooseRandomName})`
  background.css("background-image",url)
  $("h1").css("color",chooseRandomcolor)
  $("p").css("color",chooseRandomcolor)
  $("h2").css("color",chooseRandomcolor)
});
$(".dropdown-item").click(function(){
  var id = this.id;
  console.log(id)
  let url = `url(https://source.unsplash.com/1600x900/?${id})`;
  background.css("background-image",url)
})
if ($(window).width() < 1000) {
  $("h1").css("font-size","3em")
  $("p").css("font-size","1.3em")
  $("h2").css("font-size","1.3em")


}




