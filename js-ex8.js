console.log("js8");
let textValues;
textValues = "New Day: " + "Endless loop coming...!";


let b = 1;

while(b <= 5){

    console.log(b);
    b++;

}

for(let c = 10; c <= 15; c++){
    console.log(c);
}

const flowers = ['Rose', 'Lily', 'Sunflower', 'Tulip', 'Chrysantenium', 'Cherry blossom'];

for (const flower of flowers){
    console.log(flower);

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

    console.log("Syötetty teksti: " +  userTeksti);
    console.log("Tekstin pituus: " +  userTeksti.length);


    for (let i = 0; i < userTeksti.length; i++){

        //console.log("Kirjain i = " + i + ": "  + userTeksti.charAt(i));

        if (userTeksti.charAt(i) == "a" || userTeksti.charAt(i) == "A" ){
            countA ++;
            //console.log("for loopissa A löytyi " + i + ": "  + userTeksti.charAt(i));
        }

    }

    console.log("Aat syötetty for: " + countA);

    countA = 0;

    let h = 0;
    while(h < userTeksti.length){
        if (userTeksti.charAt(h) == "a" || userTeksti.charAt(h) == "A") {
            countA ++;
        }
        h++;
    }

    console.log("Aat syötetty while: " + countA);


    let palaute;

    if (countA == 0 ) {
        palaute = "Ei yhtään A-kirjainta.";
    } else {

        palaute = "Antamassasi tekstissä <br>" + userTeksti +  "<br>oli " + countA + " A-kirjainta.";
    }

    if (userTeksti.length == 0 ) {
        palaute = "Syötä tekstiä.";
    }
    
    document.getElementById('tulos').innerHTML = palaute;

}


const aNappi = document.getElementById('nappi');
aNappi.addEventListener('click', laskeA);


/*textValues += "<br><br>" + "Sum values: 1 + 2 = " + sumValues(); 
textValues += "<br><br>" + "Triangle Area 4 by 6 = " + calculateTriangleArea(4, 6);
textValues += "<br><br>" + "Number 10 divided by 2 is " + divideWithTwo(10);
textValues += "<br><br>" + "Number 20 divided by 2 is " + divideWithTwo(20);
textValues += "<br><br>" + "Number 15 divided by 2 is " + divideWithTwo(15);
textValues += "<br><br>" + "Puppy Age 1.5 in human years is " + calculateDogAge(1.5);*/



// print all collected text
document.getElementById("bodyLoop").innerHTML = textValues;