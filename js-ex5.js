console.log("js5");

let thisDay = new Date();
let counter = 0;
let clicksCount = 0;
let textValues;
let myList = [];    
console.log(thisDay);

function sumValues() {
    let sum = 1 + 2;
    console.log("1 + 2 = " + sum);

    return sum;
};

sumValues();

function sumTwoValues(a, b) {
    let sum = a + b;
    console.log(a + " + " + b + " = " + sum);
    return sum;

};

sumTwoValues(2, 5);

function increaseCounter() {

    counter ++;
    console.log(counter);
    return counter;

}

increaseCounter();
increaseCounter();
increaseCounter();
increaseCounter();

function calculateTriangleArea(triangleHeight, triangleWidth) {
    let triangleArea = triangleHeight * triangleWidth / 2.
    console.log("Triangle Area " + triangleHeight + " by " + triangleWidth + " = " + triangleArea);
    return triangleArea;

};

function divideWithTwo(userNumber) {
    let division = userNumber / 2.
    console.log("Number " + userNumber + " divided by 2 is " + division);
    return division;

};

function calculateDogAge(puppyAge){
    let dogAge = puppyAge * 7;
    console.log("Puppy Age " + puppyAge + " in human years is " + dogAge);
    return dogAge;
};

function addToList(txt){

    myList.push(txt);
    console.log(myList);
    //return myList;

};


function countClicks() {

    clicksCount ++;
    console.log("Clicks: " + clicksCount);

    const myElem = document.getElementById('conterH1');
    let cont = myElem.innerHTML;
    console.log("my elem: " + cont);

    myElem.innerHTML = "Button clicked " + clicksCount + " times";

    return clicksCount;


}


const myClickButton = document.getElementById('countClick');
myClickButton.addEventListener('click', countClicks);


    // Add values to one variable, then print all
    textValues = "Counter value: " + increaseCounter();
    textValues += "<br><br>" + "Sum values: 2 + 5 = " + sumTwoValues(2, 5);
    textValues += "<br><br>" + "Sum values: 1 + 2 = " + sumValues(); 
    textValues += "<br><br>" + "Triangle Area 4 by 6 = " + calculateTriangleArea(4, 6);
    textValues += "<br><br>" + "Number 10 divided by 2 is " + divideWithTwo(10);
    textValues += "<br><br>" + "Number 20 divided by 2 is " + divideWithTwo(20);
    textValues += "<br><br>" + "Number 15 divided by 2 is " + divideWithTwo(15);
    textValues += "<br><br>" + "Puppy Age 1.5 in human years is " + calculateDogAge(1.5);

    addToList("first");
    addToList("second");
    addToList("third");


    textValues += "<br><br>" + "Array[0] = " +  myList[0];
    textValues += "<br><br>" + "Array[1] = " +  myList[1];
    textValues += "<br><br>" + "Array[2] = " +  myList[2];
    /*textValues += "<br><br>" + "";
    textValues += "<br><br>" + "";
    textValues += "<br><br>" + "";
    textValues += "<br><br>" + "";
    textValues += "<br><br>" + "";
    textValues += "<br><br>" + "";
    textValues += "<br><br>" + "";*/

    // print all collected text
    document.getElementById("bodyFunc1").innerHTML = textValues;


/*
//Print text from functions to html page
//function print(){
    document.getElementById("bodyFunc1").innerHTML = "Counter value: " + increaseCounter();
    document.getElementById("bodyFunc1").innerHTML += "<br> <br> Sum values: 2 + 5 = " + sumTwoValues(2, 5);
    document.getElementById("bodyFunc1").innerHTML += "Sum values: 1 + 2 = " + sumValues();
    document.getElementById("bodyFunc1").innerHTML = "Triangle Area 4 by 6 = " + calculateTriangleArea(4, 6);
    document.getElementById("bodyFunc1").innerHTML = "Number 10 divided by 2 is " + divideWithTwo(10);
    document.getElementById("bodyFunc1").innerHTML = "Number 20 divided by 2 is " + divideWithTwo(20);
    document.getElementById("bodyFunc1").innerHTML = "Number 15 divided by 2 is " + divideWithTwo(15);
    document.getElementById("bodyFunc1").innerHTML = "Puppy Age 1.5 in human years is " + calculateDogAge(1.5);
    document.getElementById("bodyFunc1").innerHTML = "teksti " + "<br>" + "juttu " + "<br><br>" + "kolmas";
    //};
    */

