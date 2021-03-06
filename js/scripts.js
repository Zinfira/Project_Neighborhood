// Business logic
  // 

function numberReplace(userNumber, nameInput) {
  var numArray = [];

  
  if (userNumber < 0) {
    return ("Please enter the positive number");
  } else  { 

    for (var i=0;  i <= userNumber;  i++) {
      var addString = i.toString();
      if (addString.includes("3") && (userNumber % 3 === 0)) {
        numArray.push(" Won't you be my neighbor, " + nameInput + "?");
      } else if (addString.includes("3")) {
        numArray.push(" Won't you be my neighbor?"); 
      } else if (addString.includes("2")) {
        numArray.push(" Boop!");
      } else if (addString.includes("1")) {
        numArray.push(" Beep!");
      } else {
      numArray.push(" "+i);
      console.log(numArray);
      }
    };
    return numArray;
  }
}

// flipped 
function flipIt(result) {
  var newLook = result.reverse();
  return newLook;
};


// UI logic
$(document).ready(function() {
  $("form#form1").submit(function(event) {
    event.preventDefault();
    var userNumber = $("input#numInput").val();
    var nameInput = $("input#name").val();
    var result = numberReplace(userNumber, nameInput);
    
    
    $("#result").text(result);
    $("#result").show();
    $("#reversed").show();
    $("#reversed-result").click(function() {
      var reversedOutput = flipIt(result)
      $("#result").text(reversedOutput);
    })
  });
});