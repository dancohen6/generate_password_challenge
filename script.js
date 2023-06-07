var generateBtn = document.querySelector("#generate");

// SET VARIABLES FOR ALL POSSIBLE CHARACTERS //
var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '{', '}', '[', ']', '|', '\\', ':', ';', '<', '>', ',', '.', '?', '/'];

function getUserInput(){
    var amount = +prompt('Please provide an amount.');
    // INPUT MUST BE GREATER THAN OR EQUAL TO 8 AND LESS THAN OR EQUAL TO 128 //
    if (amount >=8 && amount <=128) {
    var includeLowercase = confirm('Click OK to include lowercase letters.')
    var includeUppercase = confirm('Click OK to include uppercase letters.')
    var includeNumbers = confirm('Click OK to include numbers.')
    var includeSpecial = confirm('Click OK to include special characters.')

    return [amount, includeLowercase, includeUppercase, includeNumbers, includeSpecial];
    } else {
        alert('Please re-enter a number that is between 8 and 128.');
        getUserInput();
    }
}

function generatePassword() {
    // FUNCTION WITHIN A FUNCTION. [X] IS REFERENCING ARRAY IN THE getUserInput FUNCTION//
    var choices = getUserInput();
    var pass = '';
    var charAmount = choices[0];
    var includeLowercase = choices[1];
    var includeUppercase = choices[2];
    var includeNumbers = choices[3];
    var includeSpecial = choices[4];
    var allPossibleChars = [];

    if (includeLowercase) {
        allPossibleChars = allPossibleChars.concat(lowercase);
    }

    if (includeUppercase) {
        allPossibleChars = allPossibleChars.concat(uppercase);
    }

    if (includeNumbers) {
        allPossibleChars = allPossibleChars.concat(numbers);
    }

    if (includeSpecial) {
        allPossibleChars = allPossibleChars.concat(specialCharacters);
    }

    // START FOR LOOP AT '0,' AND FOR AS LONG AS COUNTER IS LESS THAN NUMBER INPUT BY USER, CONTINUE TO RUN //
    for (var count = 0; count < charAmount; count++) {
        // GRAB RANDOM CHARACTER FROM allPossibleChars ARRAY //
        var randomNum = Math.random();
        // RANDOMNUM MULTIPLIED BY ALLPOSSIBLECHARS, THEN .FLOOR WILL ROUND DOWN TO NEAREST WHOLE NUMBER //
        var randomIndex = Math.floor(randomNum * allPossibleChars.length);
        var randomChar = allPossibleChars[randomIndex];

        pass += randomChar;
    }

    return pass;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);