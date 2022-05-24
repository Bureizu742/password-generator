// Assignment Code
// Add event listener to generate button
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword)

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Instructor Provided Template: Anthony Cooper
function generatePassword() {
  
  //strings containing the characters to be used to later construct the password
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var uppercase = lowercase.toUpperCase();
  var numbers = "0123456789";
  var special = "#$%&()*+,-./:;<=>?";

  //accepts desired password length
  var lengthInput = parseInt(prompt("Choose a length between 8 and 128"));

  //length input check (else is on line 146)
  if (lengthInput >= 8 && lengthInput <= 128) {
    var lowerConfirm = confirm("Use lowercase letters?");
    var upperConfirm = confirm("Use uppercase letters?");
    var numConfirm = confirm("Use numbers?");
    var specialConfirm = confirm("Use special characters?");
    var passCharAccepted = "";

    //0 confirms check
    if (
      !lowerConfirm &&
      !upperConfirm &&
      !numConfirm &&
      !specialConfirm) {
      alert("Please select at least one character type.");
      return generatePassword();
    }

    //4 confirms
    else if (
      lowerConfirm &&
      upperConfirm &&
      numConfirm &&
      specialConfirm) {
      passCharAccepted = lowercase.concat(uppercase, numbers, special);
    }

    //3 confirms
    else if (
      lowerConfirm &&
      upperConfirm &&
      numConfirm &&
      !specialConfirm) {
      passCharAccepted = lowercase.concat(uppercase, numbers);
    } else if (
      lowerConfirm &&
      upperConfirm &&
      !numConfirm &&
      specialConfirm) {
      passCharAccepted = lowercase.concat(uppercase, special);
    } else if (
      lowerConfirm &&
      !upperConfirm &&
      numConfirm &&
      specialConfirm) {
      passCharAccepted = lowercase.concat(numbers, special);
    } else if (
      !lowerConfirm &&
      upperConfirm &&
      numConfirm &&
      specialConfirm) {
      passCharAccepted = uppercase.concat(numbers, special);
    }

    //2 confirms
    else if (
      lowerConfirm &&
      upperConfirm &&
      !numConfirm &&
      !specialConfirm) {
      passCharAccepted = lowercase.concat(uppercase);
    } else if (
      !lowerConfirm &&
      upperConfirm &&
      numConfirm &&
      !specialConfirm) {
      passCharAccepted = uppercase.concat(numbers);
    } else if (
      !lowerConfirm &&
      !upperConfirm &&
      numConfirm &&
      specialConfirm) {
      passCharAccepted = numbers.concat(special);
    } else if (
      lowerConfirm &&
      !upperConfirm &&
      !numConfirm &&
      specialConfirm) {
      passCharAccepted = lowercase.concat(special);
    }

    //1 confirm
    else if (
      lowerConfirm &&
      !upperConfirm &&
      !numConfirm &&
      !specialConfirm) {
      passCharAccepted = lowercase;
    } else if (
      !lowerConfirm &&
      upperConfirm &&
      !numConfirm &&
      !specialConfirm) {
      passCharAccepted = uppercase;
    } else if (
      !lowerConfirm &&
      !upperConfirm &&
      numConfirm &&
      !specialConfirm) {
      passCharAccepted = numbers;
    } else if (
      !lowerConfirm &&
      !upperConfirm &&
      !numConfirm &&
      specialConfirm) {
      passCharAccepted = special;
    }

    //final password container
    var finalPassword = [];

    //randomizes characters within accepted character sets
    for (var i = 0; i < lengthInput; i++) {
      var randomCharacters = passCharAccepted[Math.floor(Math.random() * passCharAccepted.length)];
      finalPassword.push(randomCharacters);
    } 
    //outputs the final password, allowing it to be used outside the generatePassword function
    return finalPassword.join("");
  
  }
  //returns to the top of the function if an invalid length was input
  else {
    alert("Please enter a valid length.");
    return generatePassword();
  }
}