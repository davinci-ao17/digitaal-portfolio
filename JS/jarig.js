var birthYear = 2001;
var birthMonth = 3;
var birthDay = 9;

var date = new Date();
var cYear = date.getFullYear();
var cMonth = date.getMonth() + 1;
var cDay = date.getDate();
var age = 0;

console.log(birthYear + " - " + cYear);
console.log(birthMonth + " - " + cMonth);
console.log(birthDay + " - " + cDay);

if(birthMonth <= cMonth){
    console.log("passed month check");
    if(birthDay == cDay){
        console.log("passed day check");
        age = (cYear + 1) - birthYear;
    }else{
        age = cYear - birthYear;
    }
}else{
    age = cYear - birthYear;
}
document.getElementById("age").innerHTML = age.toString();