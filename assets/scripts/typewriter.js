/*
    Name: Multi Functioning TypeWriter
    author: Kelvin Wijkniet
    version: 1.3
*/

/* Settings (you are allowed to edit these) */

//Use the More Than One Line possibility or use the Single Line possibility
var useMultipleLines = true;
//This line will be typed (ONLY USE THIS IF useMultipleLines IS SET TO FALSE)
var text = "This is a single line";
//These lines will be typed (ONLY USE THIS IF useMultipleLines IS SET TO TRUE)
var texts = ["Welcome to my online portfolio", "Take a look at the sidebar for other pages and information."];
//keep writing lines (TURN DoReverse TO TRUE WHILE USING THIS)
var doLoop = false;
//delete text after being typed (only for last line if useMultipleLines is true)
var doReverse = false;
//delay before removing the writen line
var removeDelay = 10;
//speed of removing written text
var removeSpeed = 40;
//The lower, the faster it will be typed
var typeSpeed = 60;
//blink effect symbol
var blinkEffect = "|";
//blink effect of the type writer
var blinkDelay = 350;

/* End of Settings */

/* EDITING OUTSIDE THE Settings CAN BREAK THE CODE */
var canWrite = true;
var reverse = false;
var rDelay = removeDelay;
var singleLineNormalInterval = null;
var singleLineReverseInterval = null;

function TypeWriterSettings(){
    if(!useMultipleLines && canWrite){
        if(!reverse){
            singleLineNormalInterval = setInterval(SingleLineNormal,typeSpeed);
        }else if(reverse && doReverse){
            singleLineReverseInterval = setInterval(SingleLineReverse,removeSpeed);
        }
    }else if(useMultipleLines && canWrite){
        if(!reverse){
            multipleLineNormalInterval = setInterval(multipleLineNormal,typeSpeed);
        }else if(reverse){
            multipleLineReverseInterval = setInterval(multipleLineReverse,removeSpeed);
        }
    }
}
TypeWriterSettings();

function displayText(text){
    var elem = document.getElementById("typeWriter");
    elem.innerHTML = text;
}


var singleLineIndex = 0;
function SingleLineNormal(){
    if(singleLineIndex < text.length && singleLineIndex >= 0){
        singleLineIndex++;
        displayText(text.substr(0,singleLineIndex));
    }else{
        if(rDelay == 0){
            rDelay = removeDelay;
            reverse = true;
            TypeWriterSettings();
            window.clearInterval(singleLineNormalInterval); 
        }else{
            rDelay--;
        }
    }
}

function SingleLineReverse(){
    if(singleLineIndex <= text.length && singleLineIndex >= 0){
        singleLineIndex--;
        displayText(text.substr(0,singleLineIndex));
    }else{
        if(doLoop){
            if(rDelay == 0){
                rDelay = removeDelay;
                reverse = false;
                TypeWriterSettings();
                singleLineIndex = 0;
                window.clearInterval(singleLineReverseInterval);
            }else{
                rDelay--;
            }
        }else{
            canWrite = false;
            window.clearInterval(singleLineReverseInterval);
        }
    }
}

var multipleLineIndex = 0;
var multipleLines = 0;
function multipleLineNormal(){
    if(texts.length > 0 && multipleLines < texts.length){
        if(texts[multipleLines].length > 0){
            if(multipleLineIndex <= texts[multipleLines].length && multipleLineIndex >= 0 && multipleLines < texts.length){
                multipleLineIndex++;
                displayText(texts[multipleLines].substr(0,multipleLineIndex));
            }else{
                if(multipleLines < texts.length){
                    if(rDelay == 0){
                        rDelay = removeDelay;
                        reverse = true;
                        TypeWriterSettings();
                        window.clearInterval(multipleLineNormalInterval); 
                    }else{
                        rDelay--;
                    }
                }else{
                    reverse = true;
                    TypeWriterSettings();
                    window.clearInterval(multipleLineNormalInterval); 
                }
                multipleLineIndex = texts[multipleLines].length;
            }
        }
    }
}

function multipleLineReverse(){
    if(texts.length > 0 && texts[multipleLines].length >= 0){
        if(multipleLines < texts.length - 1 && multipleLineIndex <= texts[multipleLines].length && multipleLineIndex >= 0){
            multipleLineIndex--;
            displayText(texts[multipleLines].substr(0,multipleLineIndex));
        }else{
            if(doReverse && texts[multipleLines].length > 0 && multipleLines >= texts.length - 1 && multipleLineIndex > 0){
                multipleLineIndex--;
                displayText(texts[multipleLines].substr(0,multipleLineIndex));
            }else{
                if(multipleLines < texts.length - 1){
                    if(rDelay == 0){
                        rDelay = removeDelay;
                        reverse = false;
                        multipleLineIndex = 0;
                        multipleLines++;
                        TypeWriterSettings();
                        window.clearInterval(multipleLineReverseInterval);
                    }else{
                        rDelay--;
                    }
                }else{
                    if(multipleLines >= texts.length - 1){
                        if(doLoop){
                            if(rDelay >= 0){
                                rDelay = removeDelay;
                                reverse = false;
                                multipleLineIndex = 0;
                                multipleLines = 0;
                            }else{
                                rDelay--;
                            }
                        }else{
                            canWrite = false;
                        }
                        TypeWriterSettings();
                        window.clearInterval(multipleLineReverseInterval);
                    }
                }
            }
        }
    }
}


var toggle = false;
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
setInterval(BlinkEffect,blinkDelay);