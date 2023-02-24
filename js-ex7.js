console.log("js7");
console.log(Document);
let textValues;
let happy = true;
let thisDay = new Date().getDay();


textValues = "Start: " + "Hello from space!";

// Test happy and weekday
if (happy == true) {
    textValues += "<br><br>" + "Happy is " + happy;
    textValues += "<br><br>" + "Yes, you are happy!";

}
happy = false;

if (happy != true){
    textValues += "<br><br>" + "Happy is " + happy;
    textValues += "<br><br>" + "Sorry to see you unhappy";

}

textValues += "<br><br>" + "The Day is " + thisDay;
if (thisDay == 5){

    textValues += "<br><br>" + "Have a nice Friday!";
}

if (thisDay > 3){

    textValues += "<br><br>" + "Happy end of the week";
}
if (thisDay < 4){

    textValues += "<br><br>" + "Wish you strength into week start";
}

if (thisDay == 6 || thisDay == 0){

    textValues += "<br><br>" + "Have a fun weekend!";
}

if (happy == false && thisDay > 3){

    textValues += "<br><br>" + "Hope you feel better soon, since it's almost weekend!";
}
// End of happy and weekday


function checkUserNumber(userQuess){

    // random number 0-10
    let randomNumb = Math.floor(Math.random() * 10) + 1
    let text;

    console.log("User quess: " + userQuess + " Random number: " + randomNumb);

    if (userQuess == randomNumb ){
        text = "Yes, you quessed righ!";

    }
    else if (userQuess > randomNumb ){

        if (userQuess > 10){
            text = "You quessed WAY too high";
        }
        else{
            text = "You quessed too high this time";
        }


    }
    else {

        if (userQuess < 0){
            text = "You quessed WAY too low";
        }
        else{
            text = "Your quess was too low";
        }

    }

    console.log(text);

    return text;

}

//test calls

checkUserNumber(1);
checkUserNumber(2);
checkUserNumber(3);
checkUserNumber(4);
checkUserNumber(1);
checkUserNumber(2);
checkUserNumber(3);
checkUserNumber(4);


function checkCondition(){
    let animalCount = 2;
    if (animalCount < 5) {
        console.log("Good amount of animals");
    }
}


function checkManyConditions(size){
    if (size < 5){
        console.log("Tiny");
    }    
    else if (size < 10){
        console.log("Small");
    }
    else if (size < 15){
        console.log("Medium");
    }    
    else if (size < 20){
        console.log("Large");
    }
    else if (size => 20){
        console.log("Huge");
    }
}

function analyseCharacter(character) {

    switch(character){
        case 'a': 
            console.log("Alpha");
            break;
        case 'b': 
            console.log("Beta");
            break;
        case 'c': 
            console.log("Celsius");
            break;
        case 'd': 
            console.log("Gamma"); 
            break;
        default: 
            console.log("N/A");           
    }

}
function animalFeedback(animal) {

    switch(animal){
        case 'dog': 
            console.log("Best friend");
            break;
        case 'cat': 
            console.log("Highly independent");
            break;
        case 'bird': 
            console.log("Can learn to speak");
            break;
        case 'snake': 
            console.log("Bit scary"); 
            break;
        default: 
            console.log("Animal not recognized");           
    }

}

function shouldILeave(hours, minutes){
    
    let palaute;

    if (hours == 8 && minutes <= 5) {
        palaute = "You should leave now, bus is coming";

    } else if (hours < 8){
        palaute = "Relax, bus is not coming yet";
    }
    else {
        palaute = "You are already late, so wait for the next bus";
    }

    return palaute;
}

checkCondition();
checkManyConditions(12);
checkManyConditions(3);
checkManyConditions(16);

analyseCharacter("a");
analyseCharacter("c");
analyseCharacter("b");
analyseCharacter("f");


animalFeedback("snake");
animalFeedback("cat");
animalFeedback("dog");
animalFeedback("birdiee");


console.log(shouldILeave(8, 4));
console.log(shouldILeave(8, 6));
console.log(shouldILeave(7, 50));

function getInput(){

    const numberField1 = document.getElementById('quessedNumber');
    const userQuess = numberField1.value;

    let result = checkUserNumber(userQuess);

    document.getElementById('bodyCond1').innerHTML = result ;

}

const myNumberButton = document.getElementById('quessNumber');
myNumberButton.addEventListener('click', getInput);



/*textValues += "<br><br>" + "Sum values: 1 + 2 = " + sumValues(); 
textValues += "<br><br>" + "Triangle Area 4 by 6 = " + calculateTriangleArea(4, 6);
textValues += "<br><br>" + "Number 10 divided by 2 is " + divideWithTwo(10);
textValues += "<br><br>" + "Number 20 divided by 2 is " + divideWithTwo(20);
textValues += "<br><br>" + "Number 15 divided by 2 is " + divideWithTwo(15);
textValues += "<br><br>" + "Puppy Age 1.5 in human years is " + calculateDogAge(1.5);*/



// print all collected text
document.getElementById("bodyCond").innerHTML = textValues;