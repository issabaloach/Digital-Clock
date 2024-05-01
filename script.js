
var hours = document.getElementById("hours");
var minutes = document.getElementById("minutes")
var seconds = document.getElementById("seconds")
var day = document.getElementById("day")
var date = document.getElementById("date")
var AM = document.getElementById("meridium")

var week = ["Sunday" , "Monday" , "Tuesday", "Wednesday", "Thursday" , "Friday" , "Saturday"]

setInterval(function(){
    var currentDate = new Date ()
    var currentHour = currentDate.getHours();
    var currentDay = currentDate.getDay();
    var options = { day: 'numeric', month: 'long', year: 'numeric' };

   hours.innerText = (currentHour % 12 || 12).toString().padStart(2, "0");
   minutes.innerText = currentDate.getMinutes().toString().padStart(2, "0");
   seconds.innerText = currentDate.getSeconds().toString().padStart(2, "0");
   day.innerText = week[currentDay];
   date.innerText = currentDate.toLocaleDateString('en-US', options);

   if(currentHour < 12){
       AM.innerText = "AM";
   } else {
       AM.innerText = "PM";
   }
}, 1000)