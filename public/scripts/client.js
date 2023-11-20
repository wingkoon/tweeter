/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {

  // Display the time passed since a tweet
 const timeStamp = function(timestamp) {
   return timeago.format(timestamp); 
 };


 const renderTweets = function(tweets) {
   // loops through tweets
   for (const tweet of tweets) {
     $('#tweets-container').prepend(createTweetElement(tweet));
   }
 }

 // Define an escape function to safely escape HTML content
 const escape = function(str) {
   let div = document.createElement("div");
   div.appendChild(document.createTextNode(str));
   return div.innerHTML;
 };


 const createTweetElement = function(tweet) {
   const $tweet = $(`
     <article>
       <header class="tweet-article-header">
         <div class="header-content">
           <img src="${(tweet.user.avatars)}" alt="Author's Image" class="author-image">
           <h4 class="name">${(tweet.user.name)}</h4>
         </div>
         <h4 class="username">${(tweet.user.handle)}</h4>
       </header>
       <p class="text">${escape(tweet.content.text)}</p>
       <footer>
       <p class="timeStamp">${timeStamp(tweet.created_at)}</p>
       <div class="icon">
         <i class="fa-solid fa-flag"></i>
         <i class="fa-solid fa-retweet"></i>
         <i class="fa-solid fa-heart"></i>
       </div>
       </footer>
     </article>
   `);

   return $tweet;
 };

 // Function for form validation
 const validateForm = function() {
   const message = $('#tweet-text').val();
   const $errMessage1 = $('.validation-message1');
   const $errMessage2 = $('.validation-message2');

   if (message === "" || message === null){
     $errMessage1.slideDown();
     $errMessage2.hide();
     return false; // Return false to prevent form submission
   } 
   if (message.length > 140) {
     $errMessage2.slideDown();
     $errMessage1.hide();
     return false; 
   }

   $errMessage1.hide();
   $errMessage2.hide();
 
   return true; // Return true if validation is successful
 }

 // Function to submit the form
 $('#myForm').on('submit', function(event) {

   event.preventDefault();
   
   if (validateForm()) {
     // Serialize the form data
     const tweet = $('#myForm').serialize();
     console.log($(this).serialize());

     $.post("/tweets", tweet).then($loadTweets)      
     
     $("#tweet-text").val(" "); // clear the text after submitting the form
     $(".new-tweet .counter").text(140); // reset the counter to 140 chars after submitting the form
     
   }
 });

 // Function to load tweets
 const $loadTweets = function(tweet) {      
   $.ajax({
     url: '/tweets',
     method: 'GET',
   })
   .then(renderTweets)
   .catch(error => console.log("Error: ", error)); 
 }

 $("#nav-right").click(function () {
  $("#myForm").toggle();
});

/*
$(window).on("scroll", function () {
  if ($(window).scrollTop() === 0) {
    $("#button-fix").hide();
    $("nav").show();
    $("header").togo();
    $("#myForm").hide();
    $("#tweet-container").show();
  } else {
    $("#button-fix").show();
    $("nav").show();
    $("header").show();
    $("#myForm").show();
    $("#tweet-container").show();
  }
});

  $("#button-fix").on("click", function () {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  $("nav").show();
  $("header").show();
  $("#myForm").show();
  $("#tweet-container").show();
});
*/

 $loadTweets();
 
});