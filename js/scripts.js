$(document).ready(function() {

function factorial(value) {
  if(value === 0) {
    return 1;
  }
    return (value * factorial(value - 1));
}


  $('form#factorial').submit(function(event) {
    var value = parseInt($("input#number").val());
    event.preventDefault();

    console.log(value * factorial(value - 1));

  });
});
