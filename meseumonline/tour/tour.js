const myTitle = document.getElementById("myTitle");
const myImage = document.getElementById("myImage");
const myInput = document.getElementById("myInput");
const myText = document.getElementById("myText");

let lokaties =
[
    {
        "titel":"Ingang",
        "image":"imgtour/0.JPG",
        "text":"Met Willem I als nieuwe koning vanaf 1813, verhuisde het museum als 'Rijks Museum' samen met de uit Den Haag afkomstige nationale prentencollectie naar het Trippenhuis, een 17de-eeuws stadspaleis aan de Kloveniersburgwal. Tot ongenoegen van de directeur werden vervolgens allerlei andere collecties elders ondergebracht. Voorwerpen uit de klassieke oudheid gingen naar een nieuw Museum van Oudheden in Leiden en voorwerpen en kunstnijverheid werden aan het inmiddels in Den Haag opgerichte Kabinet van Zeldzaamheden toegewezen. In Haarlem kwam in 1838 in Paviljoen Welgelegen een apart museum voor moderne, 19de-eeuwse kunst. In tegenstelling tot in de Napoleontijd, kreeg het Rijks Museum weinig grote werken."
    },
    {
        "titel":"Nachtwacht",
        "image":"imgtour/1.jpeg",
        "text":"Rembrandts beroemdste en grootste schilderij werd gemaakt voor de Kloveniersdoelen. Dit was een van de drie hoofdkwartieren van de Amsterdamse schutterij, de burgerwacht van de stad. Rembrandt was de eerste die op een schuttersstuk alle figuren in actie weergaf. De kapitein, in het zwart, geeft zijn luitenant opdracht dat de compagnie moet gaan marcheren. De schutters stellen zich op. Met behulp van licht vestigde Rembrandt de aandacht op belangrijke details, zoals het handgebaar van de kapitein en het kleine meisje op de voorgrond. Zij is de mascotte van de schutters. De naam Nachtwacht is pas veel later ontstaan, toen men dacht dat het om een nachtelijk tafereel ging."
    },
    {
        "titel":"Bibliotheek",
        "image":"imgtour/2.jpg",
        "text":"De Rijksmuseum Research Library is een van de belangrijkste kunstbibliotheken ter wereld. Catalogi van veilingen en tentoonstellingen, handels- en collectiecatalogi, maar ook boeken, tijdschriften en jaarverslagen met betrekking tot de museumcollecties worden sinds 1885 onafgebroken verzameld"
        
    },
    {
        "titel":"Gallery of Honour",
        "image":"imgtour/3.jpg",
        "text":"De bedreigde zwaan, Jan Asselijn ca. 1650'In dit grootse landschap met de machtige waterval gaan de kleine figuurtjes bijna geheel verloren. De knoestige bomen, de kale takken en het ruisende water beheersen het beeld. Heel het drama van ontstaan en vergaan in de natuur wordt erin voelbaar. Als een baken van rust steekt de kerktoren boven alles uit.",
    },
    {
        "titel":"Willim Rex",
        "image":"imgtour/4.jpg",
        "text":"Dit model laat zien hoe een Nederlands oorlogsschip er aan het eind van de 17de eeuw uitzag. Het model is gebouwd op de Vlissingse werf waar ook echte oorlogsschepen van stapel liepen.Deze waren wel ruim twaalf keer zo groot. Dit schip heeft 74 kanonnen aan boord.Het pronkmodel stond opgesteld in de vergaderzaal van de Zeeuwse Admiraliteit in Middelburg."
    },
    {
        "titel":"Alte Pinakothek",
        "image":"imgtour/5.jpg",
        "text":"De energiegerelateerde renovatiewerkzaamheden in de Alte Pinakothek die vierenhalf jaar geleden zijn gestart, zijn inmiddels afgerond. Op 3 juli 2018 zijn alle dertien kamers op de bovenverdieping volledig toegankelijk. Ter gelegenheid van de voltooiing van de renovatie en om deze gelegenheid te vieren, heeft het Rijksmuseum Vermeers Brieflezende vrouw in blauw aan München in bruikleen gegeven",
        

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