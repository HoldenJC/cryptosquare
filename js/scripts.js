var userPhrase = "";
var regex = /[^0-9a-z]/gi;
var encryptedPhrase = "";

var encrypt = function(input){
  encryptedPhrase = (input.replace(regex, '')).toLowerCase();     // takes out punctuation, spaces, and uppercase
  rowSize = Math.ceil(Math.sqrt(input.length));
}

$(function(){
  $("#user-input").submit(function(event){
    event.preventDefault();

    // romanNumeral = "";

    userPhrase = $("#userInput").val();

    encrypt(userPhrase);

    // $("#result").empty().append(encryptedPhrase);
    $("#result").empty().append(rowSize);

  });
});
