// 
function range(start, end) {
  return Array(end - start + 1).fill().map((_, idx) => start + idx)
}
var result = range(9, 18); // [9, 10, 11, 12, 13, 14, 15, 16, 17, 18]
console.log(result);



//UI logic
$(document).ready(function() {
  $("form#form1").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("input#numInput").val());
    var result = range(start,end);
    if (result) {
      $(".result").text(result);
    }
  });
});