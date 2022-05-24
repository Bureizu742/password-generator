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

  var input = parseInt(prompt("Choose a lenght between 8 and 128"));


  if (input >= 8 && input <= 128) {
    // GOOD CODE GOES HERE
    var lowerInput = prompt("Use lowercase letters?");
    var upperInput = prompt("Use uppercase letters?");
    var numInput = prompt("Use numbers?");
    var specialInput = prompt("Use special characters?");


    if (
      lowerInput.toLowerCase === "yes" ||
      upperInput.toLowerCase === "yes" ||
      numInput.toLowerCase === "yes" ||
      specialInput.toLowerCase === "yes") {
      //continue
      
    } else {
      alert("Please select at least one character type.")
    } return;

  }
  else {
    alert("NOT COOL");
  } return generatePassword();

  return "";
}
