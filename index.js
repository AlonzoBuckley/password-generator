const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let password = document.getElementById("recent-password");
let prevPassword = document.getElementById("previous-password")
let last2Passwords = [];
let generatePassword = "";



function generate(){
    let generatedPassword = "";
    for (let i = 0; i < 15; i++){
        let index = Math.floor(Math.random() * characters.length);
        let generatedChar = characters[index];
        generatedPassword += generatedChar;
    }
    
    let newPassword = generatedPassword;
    addPassword(newPassword);
    
}

function addPassword(randomPass) {
    if (last2Passwords.length === 0){
        last2Passwords.push(randomPass);
        password.textContent = last2Passwords[0]
    }
    else if (last2Passwords.length === 1){
        last2Passwords.unshift(randomPass);
        password.textContent = last2Passwords[0]
        prevPassword.textContent = last2Passwords[1]
        console.log(prevPassword.textContent)    
    }
    else{
        last2Passwords.pop();
        last2Passwords.unshift(randomPass);
        password.textContent = last2Passwords[0]
        prevPassword.textContent = last2Passwords[1]  
        console.log(last2Passwords) 
    }
    
}


