console.log("js8");
let textValues;
textValues = "New Day: " + "Endless loop coming...!";


let b = 1;
/*
while(b <= 5){
    console.log(b);
    b++;
}*/

/*
for(let c = 10; c <= 15; c++){
    console.log(c);
}*/

const flowers = ['Rose', 'Lily', 'Sunflower', 'Tulip', 'Chrysantenium', 'Cherry blossom'];
for (const flower of flowers){
    //console.log(flower);
    textValues += "<br><br>" + "Flower = " +  flower;
}

b  = 0;
do  {
    b ++;
} while (b < 10);
console.log("b: " + b);

function laskeA(){
    const tekstiElem = document.getElementById('teksti');
    const userTeksti = tekstiElem.value;
    let countA = 0;
    console.log("User input: " +  userTeksti);
    console.log("Lenght of the text: " +  userTeksti.length);

    for (let i = 0; i < userTeksti.length; i++){
        //console.log("Kirjain i = " + i + ": "  + userTeksti.charAt(i));
        if (userTeksti.charAt(i) == "a" || userTeksti.charAt(i) == "A" ){
            countA ++;
            //console.log("for loopissa A löytyi " + i + ": "  + userTeksti.charAt(i));
        }
    }

    console.log("Counted A's in for-loop: " + countA);
    countA = 0;
    let h = 0;
    while(h < userTeksti.length){
        if (userTeksti.charAt(h) == "a" || userTeksti.charAt(h) == "A") {
            countA ++;
        }
        h++;
    }

    console.log("Counted A's in a while-loop: " + countA);
    let palaute;

    if (countA == 0 ) {
        palaute = "No A-letters.";
    } else {
        palaute = "Your input <br>" + userTeksti +  "<br>had " + countA + " A-letters.";
    }

    if (userTeksti.length == 0 ) {
        palaute = "Write something.";
    }

    document.getElementById('tulos').innerHTML = palaute;
}

// Print numbers starting from inserted number to 0
function countdown(){
    const elementNumber = document.getElementById('countdownNumber');
    let userNumber = elementNumber.value;
    console.log("Inserted number: " +  userNumber);
    let resultText = "";

    //Check if inserted number is too large and set it to 10
    if (userNumber > 20) {
        resultText += "Too large number. Starting countdown from 10";
        userNumber = 10;
    }
    // Or if inserted number is too small
    else if (userNumber <= 0) {
        resultText += "Too small number. Starting countdown from 10";
        userNumber = 10;
    }

    //Construct countdown text
    for (let countDown = userNumber; countDown >= 0; countDown--){
        resultText += "<br>" + countDown;
    }

    //print countdown text
    document.getElementById('countdown').innerHTML = resultText;

}

function clearA() {
    //clear tulos text
    document.getElementById('tulos').innerHTML = "How many A's?";
}

function clearCountdown() {
    //clear countdown text
    document.getElementById('countdown').innerHTML = "";
}
function clearBank() {
    //clear countdown text
    document.getElementById('bankDeposit').innerHTML = "";
}

function calculateDeposit(){

    // fetch user input
    // deposit sum
    const depositElem = document.getElementById('depositNumber');
    const userDeposit = depositElem.value;

    // annual interest
    const interestElem = document.getElementById('interestNumber');
    const userInterest = interestElem.value;

    // years to deposit
    const yearsElem = document.getElementById('yearsNumber');
    let userYears = yearsElem.value;

    console.log("userDeposit: " +  userDeposit);
    console.log("userInterest: " +  userInterest);
    console.log("userYears: " +  userYears);

    // empty old data
    document.getElementById('bankDeposit').innerHTML = "";

   
    let year = 1;
    let deposit = 1;
    let result = "";

    if (userYears > 20) {
        userYears = 20;
        result += "Too large number. Counting for 20 years <br>";
    }

    // begin table
    //result += "<table><tr><th>Year</th><th>Deposit</th></tr>"; 

    const table = document.createElement("table"); // create table element
    let row = document.createElement("tr"); // create header row
    let rcell; // introduce td

    let hcell = document.createElement("th"); // first header
    let node = document.createTextNode("Year");
    hcell.appendChild(node);
    row.appendChild(hcell);   
    
    hcell = document.createElement("th"); // second header
    node = document.createTextNode("Deposit"); // insert text node
    hcell.appendChild(node); // insert node to header cell
    row.appendChild(hcell); // insert header cell to header row  

    table.appendChild(row); // insert header row to table


    // print lines to table
    for(i = 1;i <= userYears; i++){

        year = i;
        deposit = userDeposit * Math.pow(1 + userInterest/100, i);

        // CREATE tr ROW
        row = document.createElement("tr"); // create row

        // YEAR
        rcell = document.createElement("td"); // first td
        node = document.createTextNode(year); // value node
        rcell.appendChild(node); // add node to td
        row.appendChild(rcell); // add td to tr   

        // DEPOSIT
        rcell = document.createElement("td"); // first td
        node = document.createTextNode(deposit.toFixed(2)); // value node
        rcell.appendChild(node); // add node to td
        row.appendChild(rcell); // add td to tr   

        // Add ROW to table
        table.appendChild(row);

        //year
        //deposit.toFixed(2)
        //result += "<tr><td>" + year + "</td><td>" + deposit.toFixed(2) + "</td></tr>";
    }

    // print table to right div
    const element = document.getElementById("bankDeposit");
    element.appendChild(table);

    // end table
    //result += "</table>";

    // print results
    //document.getElementById('bankDeposit').innerHTML = result;

}


const aNappi = document.getElementById('nappi');
aNappi.addEventListener('click', laskeA);


const countdownButton = document.getElementById('startCountdown');
countdownButton.addEventListener('click', countdown);


const clearButton = document.getElementById('clear');
clearButton.addEventListener('click', clearA);

const clearButton2 = document.getElementById('clear2');
clearButton2.addEventListener('click', clearCountdown);

const clearButton3 = document.getElementById('clearBank');
clearButton3.addEventListener('click', clearBank);

const calculateDepositButton = document.getElementById('calculate');
calculateDepositButton.addEventListener('click', calculateDeposit);

/*textValues += "<br><br>" + "Sum values: 1 + 2 = " + sumValues(); 
textValues += "<br><br>" + "Triangle Area 4 by 6 = " + calculateTriangleArea(4, 6);
textValues += "<br><br>" + "Number 10 divided by 2 is " + divideWithTwo(10);
textValues += "<br><br>" + "Number 20 divided by 2 is " + divideWithTwo(20);
textValues += "<br><br>" + "Number 15 divided by 2 is " + divideWithTwo(15);
textValues += "<br><br>" + "Puppy Age 1.5 in human years is " + calculateDogAge(1.5);*/



// print all collected text
document.getElementById("bodyLoop").innerHTML = textValues;