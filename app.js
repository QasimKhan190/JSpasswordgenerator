function Password(length) {
    let digits = "0123456789";
    let letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let symbols = "!@#$%^&*()_+{}[]<>?/";
    let password = "";
    
    let includeLetters = document.getElementById('myCheckbox1').checked;
    let includeSymbols = document.getElementById('myCheckbox2').checked;
    let includeNumbers = document.getElementById('myCheckbox3').checked;
    
    let characters = "";
    if (includeNumbers){
        characters += digits;   
    }
    if (includeLetters){
        characters += letters;
    }
    if (includeSymbols){
        characters += symbols;
    }
    
    if (characters.length === 0) {
        return "Select at least one option";
    }
    
    for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }
    
    return password;
}

function updatePassword() {
    let rangeValue = document.getElementById("r").value;
    document.getElementById("h").innerText = rangeValue;
    let password = Password(rangeValue);
    document.getElementById("output").innerText = password;
}

function cb() {
    document.getElementById('myCheckbox1').addEventListener('change', updatePassword);
    document.getElementById('myCheckbox2').addEventListener('change', updatePassword);
    document.getElementById('myCheckbox3').addEventListener('change', updatePassword);
}

document.addEventListener("DOMContentLoaded", cb);


function copy() {
    let passwordText = document.getElementById("output").innerText;
    if (passwordText && passwordText !== "Select at least one option") {
        navigator.clipboard.writeText(passwordText).then(() => {
            alert("Password copied to clipboard!");
        }).catch(err => {
            console.error("Failed to copy: ", err);
        });
    }
}