const element = document.getElementById("foo");
element.addEventListener("click", function() {
  alert("Clicked!");
});


$("#foo").on( "click", function() {
    console.log("Foo element clicked");
  });

  $("#foo").click(function() {
    console.log("Foo element clicked");
  });


  // specify the DOM node to reference using the document.getElementById method and put that reference in a variable
const div1 = document.getElementById("div-one");

// when div1 is clicked, run the function
div1.addEventListener("click", () => {
  console.log("You clicked on div 1.");
});


// create a function
const printMessage = () => {
    console.log("You clicked on div 2.");
  });
  
  // put a reference to the "div-two" element in a variable
  const div2 = document.getElementById("div-two");
  
  // when div2 is clicked, run the function
  div2.addEventListener('click', printMessage);

  document.addEventListener("dblclick", (event) => {
    console.log(event);
    // your code here
  });

  $("#btn").on('click', function() {
    console.log(this); //The this keyword is a reference to the button
  });
  
  $("#btn").on('click', () => {
    console.log(this); //The this keyword here refers to something else!
  });