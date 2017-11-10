var talker = document.getElementById("talker");
var menu = document.getElementById("menu");
var speechBubble = document.getElementById("speechBubble");
var aboutMe = document.getElementById("AboutMe");
var education = document.getElementById("Education");
var job = document.getElementById("job");

var fadeInInt = null;
var checkifDone = null

function animTalker(){
    talker.style.right = '0px';
    setTimeout(startTalking, 1000);
}
setTimeout(animTalker, 10);

function startTalking(){
    FadeIn(speechBubble);
    WriteLine(texts[i]);
    checkifDone = setInterval(checkIfDone,10);
}

var i = 0;
var hasEnded = false;
var texts = [
	"Welcome to Kelvin's Digital Profile!",
	"I am your personal assistence.",
	"Where would you like to go?",
];

TypeWriterSettings(settings={
	'typeSpeed': 100,
	'removeSpeed': 50,
	'doReverse': true,
	'doReverseDelay': 30,
	'returnFinnish': true,
	'blinkEffect': "|",
	'blinkSpeed': 75,
});

function checkIfDone(){
	if(checkTypeWriter() && !hasEnded){
		if(texts[i+1] != null && (i+1) < (texts.length-1)){
			i++;
			WriteLine(texts[i]);   
		}else if((i+1) == (texts.length-1)){
			TypeWriterSettings(settings={
				'doReverse': false,
			});
			i++;
			WriteLine(texts[i]);
			hasEnded = true;
            setTimeout(showMenu, 750);
            clearInterval(checkifDone);
		}
	}
}

function showMenu(){
    menu.style.display ="block";
    FadeIn(menu);
}

function FadeIn(element) {
    var op = 0;
    element.style.display = 'block';
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        element.style.opacity = op;
        op += 0.01;
    }, 10);
}

var Home = function(){
    if(aboutMe.style.transform != "scale(0)"){
        aboutMe.style.transform = "scale(0)";
    }
    if(education.style.transform != "scale(0)"){
        education.style.transform = "scale(0)";
    }
    if(job.style.transform != "scale(0)"){
        job.style.transform = "scale(0)";
    }
    setTimeout(function(){
        menu.style.opacity = 1;
        speechBubble.style.opacity = 1;
        talker.style.opacity = 1;
    }, 300);
}

var AboutMe = function(){
    aboutMe.style.display = "block";
    setTimeout(function(){
        aboutMe.style.transform = "scale(1)";
    }, 10);
    setTimeout(function(){
        menu.style.opacity = 0;
        speechBubble.style.opacity = 0;
        talker.style.opacity = 0;
    }, 200);
}

var Education = function(){
    education.style.display = "block";
    setTimeout(function(){
        education.style.transform = "scale(1)";
    }, 10);
    setTimeout(function(){
        menu.style.opacity = 0;
        speechBubble.style.opacity = 0;
        talker.style.opacity = 0;
    }, 200);
}

var Job = function(){
    job.style.display = "block";
    setTimeout(function(){
        job.style.transform = "scale(1)";
    }, 10);
    setTimeout(function(){
        menu.style.opacity = 0;
        speechBubble.style.opacity = 0;
        talker.style.opacity = 0;
    }, 200);
}