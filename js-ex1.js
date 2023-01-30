// constant Date
const d = new Date(); 

// variable for meny dish
let dish;

//pop up Date message
//alert('Today is: ' + d);

//Print today's meny on screen
document.getElementById("meny").innerHTML = getDish(d.getDay());

// Get tomorrow's meny
function getNextDish(){
    console.log("getNextDish");

    // Print next dish on screen
    document.getElementById("menyOptional").innerHTML=getDish(d.getDay() + 1);

}

//Suggest a dish for each weekday
function getDish(n) {
    console.log("getDish");

    switch (n) {
        case 0:
        dish = "Tofu-casserole";
        break;
        case 1:
        dish = "Spaghetti with soy protein sauce";
        break;
        case 2:
        dish = "Tuesday is pizza day";
        break;
        case 3:
        dish = "Tomato-lentil soup with chickpeas";
        break;
        case 4:
        dish = "Mac with ketchup and leftovers";
        break;
        case 5:
        dish = "Macaroni casserole with soy protein";
        break;
        case 6:
        dish = "Kidneybean soup with nachos";
    }

    console.log("case " + n + ": " + dish);
    return dish;
}


console.log('Javascript is fun');
