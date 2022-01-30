const myTitle = document.getElementById("myTitle");
const myImage = document.getElementById("myImage");
const myInput = document.getElementById("myInput");
const myText = document.getElementById("myText");

let lokaties =
[
    {
        "titel":"Nachtwacht",
        "image":"imgtour/0.jpeg",
        "text":"Het werd in 1656 gebouwd als het ‘zeemagazijn’ van de Admiraliteit van Amsterdam, oftewel: een pakhuis vol scheepsmaterialen, maar in 1972 wordt het zeemagazijn een museum."
    },
    {
        "titel":"Library",
        "image":"imgtour/1.jpg",
        "text":"Tussen 2007 en 2011 heeft het museum een grootscheepse renovatie ondergaan. Daarbij werd de historische binnenplaats van een dak voorzien. Het ontwerp is geïnspireerd op de kompaslijnen van oude zeekaarten."
    },
    {
        "titel":"gallery of Honour",
        "image":"imgtour/2.jpg",
        "text":"Deze tentoonstelling met de naam ‘Republiek aan Zee’ belicht de innige, historische band van Nederland met de zee. Het verhaal wordt verteld aan de hand van 50 bijzondere objecten, waaronder veel topstukken uit de museumcollectie. De objecten komen uit de 17e en 18e eeuw, de periode dat Nederland een Republiek was."
    },
    {
        "titel":"Old Ship",
        "image":"imgtour/3.jpg",
        "text":"Willem van de Velde de Oude werd in Leiden geboren als de zoon van een Vlaamse schipper, Willem Willemszoon van de Velde. Hij raakte al op jonge leeftijd door het werk van zijn vader bekend met de scheepvaart. Het is onbekend wanneer hij precies met schilderen begon, maar begin jaren dertig van de zeventiende eeuw startte hij een schildersatelier in Amsterdam."
    },
    {
        "titel":"The Rubens Gallery",
        "image":"imgtour/4.jpg",
        "text":"De zeeslag bij Gibraltar tussen de Nederlandse en de Spaanse vloot, 25 april 1607, Cornelis Claesz van Wieringen (circa 1575 - 1633), olieverf op doek, 1622. [A.0724]"
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