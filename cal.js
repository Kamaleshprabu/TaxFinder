const display= document.getElementById("display");
const nondisplay = document.getElementById("nondisplay");
const result = document.getElementById("result");

var btn = document.getElementById("btn");

var str
var strLen

function appendToDisplay(inputvalue){
    display.value += inputvalue;
}

function appendToNonDisplay(inputvalue){
    nondisplay.value += inputvalue;
    str = nondisplay.value
    strLen = str.length
}

function clearDisplay(){
    display.value = "";
    nondisplay.value = "";
    result.value = "";
}

function calculate(){
    try{
        result.value = eval(nondisplay.value);
    }
    catch(error){
        result.value = "ERROR";
    }
}


function twoFunction(event){
    var input = event.target.textContent;

    if (input == 'Pow'){
        appendToNonDisplay("**");
        appendToDisplay('^');
    }
    else if(input == 'x'){
        appendToNonDisplay('*');
        appendToDisplay(input);
    }
    else if(input == 'π'){
        appendToNonDisplay('3.14159265359')
        appendToDisplay(input);
    }
    else if(input == 'e'){
        appendToNonDisplay('2.7182818285')
        appendToDisplay(input);
    }
    else{
        appendToNonDisplay(input);
        appendToDisplay(input);
    }
}

let mode_btn = document.getElementById("themeIcon") 
mode_btn.onclick = function(){
    document.body.classList.toggle("darkTheme")
    if(document.body.classList.contains("darkTheme")){
        mode_btn.innerHTML = `<i class="fa-solid fa-moon">`
        document.getElementById("themeName").textContent = "DARK THEME"
        document.getElementById("themeName").style.color = "aliceblue"
    }
    else{
        mode_btn.innerHTML = `<i class="fa-solid fa-sun">`
        document.getElementById("themeName").textContent = "LIGHT THEME"
        document.getElementById("themeName").style.color = "black"
    }
}

function show(){
    document.getElementById("aboutDetails").style.display = "flex"
}

function notShow(){
    document.getElementById("aboutDetails").style.display = "none"
}

function help(){
    document.getElementById("htu").style.display = "flex"
}

function closeHelp(){
    document.getElementById("htu").style.display = "none"
}