const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

// When the button is clicked

//Make 2 random strings that are 15 digits long
let randomPasswordOne;
let randomPassworkTwo;
let passwordLength = 15

function getRandomCharacter() {
    let character = characters[Math.floor(Math.random() * characters.length)];
    return character;
}
console.log(getRandomCharacter());

// for (i = 0); i < passwordLength.length(); i++ {
//     randomPasswordOne += 
// }

//output strings to fields
