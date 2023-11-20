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

 
 // Function to submit the form
 $('#myForm').on('submit', function(event) {

   event.preventDefault();
   const text = $('#tweet-text').val();
   const $errMessage1 = $('.validation-message1');
   const $errMessage2 = $('.validation-message2');

   if (text === "" || text === null || text === " ") {
    $errMessage1.slideDown();
    $errMessage2.hide();
    return false; 
  } 

  if (text.length > 140) {
    $errMessage2.slideDown();
     $errMessage1.hide();
     return false; 
  }
  
  const tweet = $('#myForm').serialize();
     console.log($(this).serialize());

     $.post("/tweets", tweet).then($loadTweets) 
    .done(function () {
      $("#tweet-text").val("");
      $(".counter").val("140");
      renderTweets();
    })
    .fail(function (error) {
      alert(`ERROR: ${error}`);
    });
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

$(window).on("scroll", function () {
  if ($(window).scrollTop() === 0) {
    $("#button-fix").hide();
    $("nav").show();
    $("header").show();
  } else {
    $("#button-fix").show();
    $("nav").hide();
    $("header").hide();
  }
});

$("#button-fix").on("click", function () {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  $("nav").show();
  $("header").show();
  $("#myForm").show();
  $("#tweet-container").focus();
});


 $loadTweets();
 
});