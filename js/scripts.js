var userPhrase = "";
var numLetterOnly = /[^0-9a-z]/gi;
var encryptedPhrase = "";
var colSize, regexTemp, userPhraseRowSplit;
var inputArray = [];


var encrypt = function(input){
  encryptedPhrase = (input.replace(numLetterOnly, '')).toLowerCase();     // takes out punctuation, spaces, and uppercase
  colSize = Math.ceil(Math.sqrt(input.length));
  regexTemp = new RegExp(".{1," + colSize + "}");
  userPhraseRowSplit = new RegExp(regexTemp.source, regexTemp.flags + "g");     // creates regex to split a word by rows
  inputArray = input.match(userPhraseRowSplit);         // outputs ["ba", "nd"]
  // encryptedPhrase = encryptedPhrase.splice(colSize, 0, " ")

}

$(function(){
  $("#user-input").submit(function(event){
    event.preventDefault();

    // romanNumeral = "";

    userPhrase = $("#userInput").val();

    encrypt(userPhrase);

    $("#result").empty().append(inputArray);
    // $("#result").empty().append(rowSize);

  });
});
