// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function (){
  // Your code that interacts with the DOM goes here
  var displayTime = document.querySelector("#currentDay");
  var rightNow = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
  displayTime.textContent = rightNow;
//currentTime => rightNow ---make sure to change them
    
//TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
// saveBtn click listener 
    $(".saveBtn").on("click", function () {
        // Get nearby values of the description in JQuery
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        // Save text in local storage
        localStorage.setItem(time, text);
    });

    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?

//   currentTime ==> currentHour
// timeTracker ==> hourTracker
function timeTracker() {
//for the current amount of hours.
var currentTime = dayjs().hour();
//blockTime ==> blockHour
//loop over time blocks
$(".time-block").each(function () {
var blockTime = parseInt($(this).attr("id").split("hour")[1]);

//checking the time; is it past, present, or future?
if (blockTime < currentTime) {
  $(this).addClass("past");

} else if (blockTime === currentTime) {
  $(this).removeClass("past");
  $(this).addClass("present");

} else {
  $(this).removeClass("past");
  $(this).removeClass("present");
  $(this).addClass("future");
}
});
}
timeTracker();

//loop over time blocks display data from local storage
//displayData ==> displayText
function displayData() {
  $(".time-block").each(function (){
    var blockTime = $(this).attr("id");
    $(this).children(".description").val(localStorage.getItem(blockTime));
  });
}
displayData();

// $(function () {
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.
  });