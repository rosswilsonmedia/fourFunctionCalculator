var storedValue="0";
var currentValue="0";
var currentOP="";
var display=document.getElementById('display');

function press(key){
    if((key=='.' && currentValue.indexOf('.')==-1) || key!='.'){
        if(currentValue!='0'){
            currentValue=currentValue+key;
        } else {
            currentValue=key.toString();
        }
        display.innerHTML=currentValue;
    }
}

function setOP(op){
    if(currentValue!="0"){
        storedValue=currentValue;
        currentValue="0";
    }
    currentOP=op;
}

function calculate(){
    switch(currentOP){
        case '+':
            storedValue=parseFloat(storedValue) + parseFloat(currentValue);
            break;
        case '-':
            storedValue=storedValue-currentValue;
            break;
        case '*':
            storedValue=storedValue*currentValue;
            break;
        case '/':
            if(currentValue=='0'){
                storedValue='Error';
            } else {
                storedValue=storedValue/currentValue;
            }
            break;
        default:
            storedValue=0;
    }
    display.innerHTML=storedValue;
    currentValue="0";
    currentOP="";
}


function clr(){
    storedValue="0";
    currentValue="0";
    currentOP="";
    display.innerHTML=0;
}