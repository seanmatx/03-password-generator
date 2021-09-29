// Variables of the different categories of characters in the password
var generateBtn = document.querySelector("#generate");
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lowerCase = "abcdefghijklmnopqrstuvwxyz"
var numbers = "0123456789"
var symbols = " !@#$%^&*()_-+=";

//  Variables of characters selected to be included in the password
var passwordUpperCase;
var passwordLowerCase;
var passwordNumbers;
var passwordSymbols;

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(){
  var password = "";
  var passwordLength = prompt("length of new password");
  console.log (passwordLength);
  if (passwordLength < 8 || passwordLength > 128) {
    alert ("Please enter a number between 8 - 128 indicating the length of your password")
    return;
  }
  passwordUpperCase=confirm ("Do you want any uppercase characters in your password?");
  passwordLowerCase=confirm ("Do you want any lowercase characters in your password?");
  passwordNumbers=confirm ("Do you want any numbers in your password?");
  passwordSymbols=confirm ("Would you like any symbols in your password?");


// possiblePassword = full range of characters based on submitted length; IF confirming what types of characters to included, randomizing the inclusion of at least one of those characters selected.
  let possiblePassword = "";
  if (passwordUpperCase){
    password+=upperCase[Math.floor(Math.random()*upperCase.length)];
    possiblePassword+= upperCase;

  }
    if (passwordLowerCase){
      password+=lowerCase[Math.floor(Math.random()*lowerCase.length)];
      possiblePassword+= lowerCase;
    }
      if (passwordNumbers){
        password+=numbers[Math.floor(Math.random()*numbers.length)];
        possiblePassword+= numbers;
    }
    if (passwordSymbols){
      password+=symbols[Math.floor(Math.random()*symbols.length)];
      possiblePassword+= symbols;
  }

  // taking true statement of uppercase, and selecting an uppercase character to add to password
  for(var i=password.length; i<passwordLength; i++){
    password+=possiblePassword[Math.floor(Math.random()*possiblePassword.length)];

  }
  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
