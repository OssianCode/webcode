console.log("js6");
console.log(Document);


/*Change heading1 text and colour*/
function changeHeader(){

    /*Get element heading1 from document */
    const myElem = document.getElementById('heading1');
    let cont = myElem.innerHTML;
    console.log(myElem);
    console.log(cont);

    cont = "Today is a good day";
    myElem.innerHTML = cont;
    console.log(cont);
    
    myElem.style.color = 'white';
    
}


/*Show current Date*/
function thisDay(){

    /*Get element heading1 from document */
    const myElem = document.getElementById('dateField');
    let cont = myElem.innerHTML;
    console.log(myElem);
    console.log(cont);

    let thisDay = new Date();

    cont = thisDay;
    myElem.innerHTML = cont;
    console.log(cont);
    
}

/*Show hidden paragraph */
function showParagraph(){

    /*Get element hiddenDiv */
    /*const myElem = document.getElementById('hiddenDiv');
    let cont = myElem.innerHTML;
    console.log(myElem);
    console.log(cont);

    myElem.style.visibility = 'visible';*/

    setVisibility("visible");

}

/*Hide paragraph */
function hideParagraph(){

    /*Get element hiddenDiv */
    /*const myElem = document.getElementById('hiddenDiv');
    let cont = myElem.innerHTML;
    console.log(myElem);
    console.log(cont);

    myElem.style.visibility = 'hidden';*/

    setVisibility("hidden");

}


/*Set visibility to div */
function setVisibility(visibility){

    /*Get element hiddenDiv */
    const myElem = document.getElementById('hiddenDiv');
    console.log("Set Visibility: " + visibility);
    myElem.style.visibility = visibility;
}


/*Change background colour */
function changeColour(){

    /*Get element hiddenDiv */
    const myElem = document.getElementById('myColour');
    const chosenColour = myElem.value;
    console.log("Chosen colour " + chosenColour);
    document.body.style.backgroundColor = chosenColour;

}
/*Listener for changeHeader-button */
const myButton = document.getElementById('changeHeader');
myButton.addEventListener('click', changeHeader);

/*Listener for showDate-button */
const myDateButton = document.getElementById('showDate');
myDateButton.addEventListener('click', thisDay);

/*Listener for hiddeHeader-heading */
const myHideHeader = document.getElementById('hideHeader');
myHideHeader.addEventListener('mouseover', showParagraph);
//myHideHeader.addEventListener('mouseover', setVisibility("visible"));

/*Listener for hiddeHeader-heading */
const myHideDiv = document.getElementById('hiddenDiv');
myHideDiv.addEventListener('mouseover', hideParagraph);
//myHideDiv.addEventListener('mouseover', setVisibility("hidden"));

/*Listener for change Colour */
const myColourChange = document.getElementById('myColour');
myColourChange.addEventListener('focusout', changeColour);


// Calculates area of a circle by input diabeter, returns area
function calculateAreaOfCircle(diameter){

    let area = (diameter/ 2)**2 * Math.PI; /* area = pi*r^2 */
    area = area.toFixed(2);
    
    console.log(area);

    return area;

}

calculateAreaOfCircle(3);

// Finds user input and calls calculateAreaOfCircle
function getInput(){

    const textField1 = document.getElementById('diam');
    const diameter = textField1.value;

    let result = calculateAreaOfCircle(diameter);

    const resElem = document.getElementById('bodyArea1');

    resElem.innerHTML = `Area of circle is: ${result}`; /* shift ´ = `*/

}


// Listener for calculate area-button
const myAreaButton = document.getElementById('calcArea');
myAreaButton.addEventListener('click', getInput);



// Add values to one variable, then print all
textValues = "Start: " + "hello!";
textValues += "<br><br>" + "Area: diameter = " + "5: " + calculateAreaOfCircle(5) ; 



/*textValues += "<br><br>" + "Sum values: 2 + 5 = " + sumTwoValues(2, 5);
textValues += "<br><br>" + "Sum values: 1 + 2 = " + sumValues(); 
textValues += "<br><br>" + "Triangle Area 4 by 6 = " + calculateTriangleArea(4, 6);
textValues += "<br><br>" + "Number 10 divided by 2 is " + divideWithTwo(10);
textValues += "<br><br>" + "Number 20 divided by 2 is " + divideWithTwo(20);
textValues += "<br><br>" + "Number 15 divided by 2 is " + divideWithTwo(15);
textValues += "<br><br>" + "Puppy Age 1.5 in human years is " + calculateDogAge(1.5);*/

/*addToList("first");
addToList("second");
addToList("third");*/


/*textValues += "<br><br>" + "Array[0] = " +  myList[0];
textValues += "<br><br>" + "Array[1] = " +  myList[1];
textValues += "<br><br>" + "Array[2] = " +  myList[2];
textValues += "<br><br>" + "";
textValues += "<br><br>" + "";
textValues += "<br><br>" + "";
textValues += "<br><br>" + "";
textValues += "<br><br>" + "";
textValues += "<br><br>" + "";
textValues += "<br><br>" + "";*/

// print all collected text
document.getElementById("bodyEve1").innerHTML = textValues;