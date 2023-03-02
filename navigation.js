console.log("navigation");

console.log(pageName);


// print to right div
const element = document.getElementById("top-navigation");
const links = ["index.html", "games.html", "js-page.html", "javasc-page5.html", "javasc-page6.html", "javasc-page7.html", "javasc-page8.html" ];
const pagenames = ["Start", "Games", "Cooking inspiration", "Ex. 5", "Ex. 6", "Ex. 7", "Ex. 8"];


let aLink = document.createElement("a"); // create link
let node = document.createTextNode("a");

    for (let i=0; i < links.length; i++)
    {

        console.log("i: " + i + " " + pagenames[i] + " " + links[i]);

        aLink = document.createElement("a"); // create link
        node = document.createTextNode(pagenames[i]);

        aLink.setAttribute("href", links[i]);   

        if (pageName == links[i]){
            aLink.setAttribute("class", "active");
        }

        aLink.appendChild(node);
        element.appendChild(aLink);

    };




