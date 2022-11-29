const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

// When the button is clicked

var passwordOne = document.getElementById('passwordOne');
var passwordTwo = document.getElementById('passwordTwo');

//Make 2 random strings that are 15 digits long
let passwords = ["",""];
let passwordLength = 15
let numberOfPasswords = 2;

function getRandomCharacter() {
    let character = characters[Math.floor(Math.random() * characters.length)];
    return character;
}

for (i=0; i < 2; i++) {
    for (j=0; j < passwordLength; j++) {
        passwords[i] += getRandomCharacter()
    }
}

passwordOne.style.color = "#4ADF86";
passwordTwo.style.color = "#4ADF86";
passwordOne.textContent = passwords[0];
passwordTwo.textContent = passwords[1];


