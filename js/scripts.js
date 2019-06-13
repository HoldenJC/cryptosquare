var userPhrase, formattedInput, encryptedPhrase = "";
var numLetterOnly = /[^0-9a-z]/gi;
var colSize, rowSize, regexTemp, userPhraseRowSplit;
var inputArray = [];

var encrypt = function(input){
  formattedInput = (input.replace(numLetterOnly, '')).toLowerCase();     // takes out punctuation, spaces, and uppercase
  colSize = Math.ceil(Math.sqrt(formattedInput.length));
  rowSize = colSize;
  regexTemp = new RegExp(".{1," + colSize + "}");
  userPhraseRowSplit = new RegExp(regexTemp.source, regexTemp.flags + "g");     // creates regex to split a word by rows
  inputArray = formattedInput.match(userPhraseRowSplit);         // outputs ["ba", "nd"]
  scramble(inputArray);
  spacing(encryptedPhrase);
}

var scramble = function(array) {
  for (col = 0; col < rowSize; col++){
    for (row = 0; row < array.length; row++){
      encryptedPhrase += array[row].charAt(col);
    }
  }
}

var spacing = function(string) {
  var spacingArray = string.split("");
  for (var i = 5; i < spacingArray.length; i += 6){
    spacingArray.splice(i, 0, " ");
  }
  encryptedPhrase = spacingArray.join("");
}

$(function(){
  $("#user-input").submit(function(event){
    event.preventDefault();
    encryptedPhrase = "";

    userPhrase = $("#userInput").val();

    encrypt(userPhrase);
    $("#result").empty().append(encryptedPhrase);
  });
});
