// Prompt for length between 8 and 128
// prompt for upper, lower, numbers, and symbols
// validate responses and ensure one character type is selected
// generate password based on criteria
// display in alert

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword());

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Instructor Provided Template: Anthony Cooper
function generatePassword() {
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var uppercase = lowercase.toUpperCase();
  var numbers = "0123456789";
  var special = "#$%&()*+,-./:;<=>?";

  var lengthInput = parseInt(prompt("Choose a length between 8 and 128"));


  if (lengthInput >= 8 && lengthInput <= 128) {
    var lowerConfirm = confirm("Use lowercase letters?");
    var upperConfirm = confirm("Use uppercase letters?");
    var numConfirm = confirm("Use numbers?");
    var specialConfirm = confirm("Use special characters?");
    var passwordCharacters = "";

    if (
      !lowerConfirm &&
      !upperConfirm &&
      !numConfirm &&
      !specialConfirm) {
      alert("Please select at least one character type.");

    } else if (
      lowerConfirm ||
      upperConfirm ||
      numConfirm ||
      specialConfirm) {

      //continue generator
      console.log("continue please");
    }

  } else {
    alert("Please enter a valid length.");
  } generatePassword();

  return "";
}
