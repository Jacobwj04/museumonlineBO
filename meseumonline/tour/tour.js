const myTitle = document.getElementById("myTitle");
const myImage = document.getElementById("myImage");
const myInput = document.getElementById("myInput");
const myText = document.getElementById("myText");

let lokaties =
[
    {
        "titel":"Nachtwacht",
        "image":"imgtour/0.jpeg"  
    },
    {
        "titel":"Library",
        "image":"imgtour/1.jpg"
        
    },
    {
        "titel":"gallery of Honour",
        "image":"imgtour/2.jpg"
    },
    {
        "titel":"Old Ship",
        "image":"imgtour/3.jpg"
    },
    {
        "titel":"The Rubens Gallery",
        "image":"imgtour/4.jpg"
    }  
]

//myTitle.innerHTML = "dit is door het script toegevoegd";
//myImage.src = "img/1.jpg";

function show(index){
    myTitle.innerHTML = lokaties[index].titel;
    myImage.src = lokaties[index].image;
    myText.innerHTML = lokaties[index].text;
}

function getInput(){
    show(myInput.value);
    //console.log(myInput.value)
    myInput.value = "";
    myInput.focus();
}

show(0)