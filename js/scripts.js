// 


function numberReplace(userNumber) {
  var numArray = [];
  
  for (var i=0; i <= userNumber; i++) {
    var addString = i.toString();
    if (addString.includes("3")) {
      numArray.push("Won't you be my neighbor?");
    } else if (addString.includes("2")) {
      numArray.push("Boop!");
    } else if (addString.includes("1")) {
      numArray.push("Beep!");
    } else {
    numArray.push(i);
    console.log(numArray);
    }
  };
  return numArray;

  

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