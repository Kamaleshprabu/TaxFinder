const display= document.getElementById("display");
const nondisplay = document.getElementById("nondisplay");
const result = document.getElementById("result");

var btn = document.getElementById("btn");

function appendToDisplay(inputvalue){
    display.value += inputvalue;
}

function appendToNonDisplay(inputvalue){
    nondisplay.value += inputvalue;
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