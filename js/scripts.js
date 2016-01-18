$(document).ready(function() {

function factorial(value) {
  if(value === 0) {
    return 1;
  }
    return (value * factorial(value - 1));
}


  $('form#factorial').submit(function(event) {
    var value = parseInt($("input#number").val());
    var sum = (value * factorial(value - 1));
    event.preventDefault();

    if(sum > 0) {
      alert('Your sum is ' + sum);
    }
  });
});
