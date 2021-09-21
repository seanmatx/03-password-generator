// Assignment Code
var generateBtn = document.querySelector("#generate");
console.log (generateBtn);
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword(){
  var passwordLength = prompt("length of new password");
  console.log (passwordLength);
  if (passwordLength < 8 || passwordLength > 128){
    alert ("Password must be between 8 and 128 characters long.")
  }
  // return "hello";
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
