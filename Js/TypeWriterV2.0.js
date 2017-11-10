/* TypeWriter */

var testTypeWriter = function(){
    console.log("You're ready to use the TypeWriter!");
}

var text = "";
var blinkEffect = "|";

var typeSpeed = 0;
var removeSpeed = 0;
var doReverseDelay = 0;
var blinkSpeed = 0;

var doReverse = false;
var returnFinnish = false;
var hasSettings = false;
var isDone = false;
var reverse = false;
var toggle = false;

var settings = [];

var write = null;
var writeNormal = null;
var writeReverse = null;

var writeCount = 0;
var writeDelay = 0;

var TypeWriterSettings = function(settings){
    for(var i in settings){
        if(i == "typeSpeed"){
            typeSpeed = settings[i];
        }
        if(i == "removeSpeed"){
            removeSpeed = settings[i];
        }
        if(i == "doReverse"){
            doReverse = settings[i];
        }
        if(i == "doReverseDelay"){
            doReverseDelay = settings[i];
        }
        if(i == "returnFinnish"){
            returnFinnish = settings[i];
        }
        if(i == "blinkEffect"){
            blinkEffect = settings[i];
        }
        if(i == "blinkSpeed"){
            blinkSpeed = settings[i];
        }
    }
    if(typeSpeed > 0 && removeSpeed > 0 && blinkSpeed > 0){
        hasSettings = true;
        setInterval(BlinkEffect,400);
    }
}

var checkTypeWriter = function(){
    if(returnFinnish){
        return isDone;
    }else{
        return false;
    }
}

var WriteLine = function(text2){
    writeCount = 0;
    isDone = false;
    text = text2;
    if(!hasSettings || text.length <= 0){
        alert("Settings not complete");
        return;
    }
    if(doReverse){
        if(doReverseDelay > 0){
            writeNormal = setInterval(WriteNormal,typeSpeed);
        }else{
            alert("Settings not complete");
            return;
        }
    }else{
        write = setInterval(Write,typeSpeed);
    }
}

function displayText(toDisplay){
    var elem = document.getElementById("typeWriter");
    elem.innerHTML = toDisplay;
}

function Write(){
    if(writeCount <= text.length){
        writeCount++;
        displayText(text.substr(0,writeCount));
    }else{
        isDone = true;
        clearInterval(write);
    }
}

function WriteNormal(){
    if(writeCount <= text.length && !reverse){
        writeCount++;
        displayText(text.substr(0,writeCount));
    }else{
        writeReverse = setInterval(WriteReverse,removeSpeed);
        reverse = true;
    }
}


function WriteReverse(){
    writeDelay++;
    clearInterval(writeNormal);
    if(writeDelay >= doReverseDelay){
         if(writeCount >= 0 && reverse){
            writeCount--;
            displayText(text.substr(0,writeCount));
        }else{
            isDone = true;
            reverse = false;
            clearInterval(writeReverse);
            writeDelay = 0;
        }
    }
}

function BlinkEffect(){
    var elem = document.getElementById("typeWriterEffect");
    elem.innerHTML = blinkEffect;
    if(toggle){
        elem.style.opacity = 0;
        toggle = false;
    }else{
        elem.style.opacity = 1;
        toggle = true;
    }
}