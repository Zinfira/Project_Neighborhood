// 


function numberReplace(userNumber) {
  var numArray = [];
  for (var i=0; i <= userNumber; i++) {
    numArray.push(i);
  }
  return numArray;
  console.log(numArray);
}





//UI logic
$(document).ready(function() {
  $("form#form1").submit(function(event) {
    event.preventDefault();
    var userNumber = $("input#numInput").val();
    var result = numberReplace(userNumber);
    
    $("#result").text(result);
    $("#result").show();

    
  });
});