
const prompt=require("prompt-sync")({sigint:true}); 
function Palindrome(str) {

    for (var i = 0; i < str.length / 2; i++) {

        
        if (str[i] !== str[str.length - 1 - i]) {
            return "False";
        }
    }
    return "True";
}

const str = prompt('Enter your number - ');

var value = Palindrome(str);

console.log(value);