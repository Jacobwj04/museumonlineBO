const myTitle = document.getElementById("myTitle");
const myImage = document.getElementById("myImage");
const myInput = document.getElementById("myInput");
const myText = document.getElementById("myText");

let lokaties =
[
    {
        "titel":"Het gebouw",
        "image":"img/0.jpg",
        "text":"Het werd in 1656 gebouwd als het ‘zeemagazijn’ van de Admiraliteit van Amsterdam, oftewel: een pakhuis vol scheepsmaterialen, maar in 1972 wordt het zeemagazijn een museum."
    },
    {
        "titel":"Open Plein: Zeemagazijn en overkapping",
        "image":"img/1.jpg",
        "text":"Tussen 2007 en 2011 heeft het museum een grootscheepse renovatie ondergaan. Daarbij werd de historische binnenplaats van een dak voorzien. Het ontwerp is geïnspireerd op de kompaslijnen van oude zeekaarten."
    },
    {
        "titel":"Republiek aan Zee",
        "image":"img/2.jpg",
        "text":"Deze tentoonstelling met de naam ‘Republiek aan Zee’ belicht de innige, historische band van Nederland met de zee. Het verhaal wordt verteld aan de hand van 50 bijzondere objecten, waaronder veel topstukken uit de museumcollectie. De objecten komen uit de 17e en 18e eeuw, de periode dat Nederland een Republiek was."
    },
    {
        "titel":"Willem van de Velde de Oude",
        "image":"img/3.jpg",
        "text":"Willem van de Velde de Oude werd in Leiden geboren als de zoon van een Vlaamse schipper, Willem Willemszoon van de Velde. Hij raakte al op jonge leeftijd door het werk van zijn vader bekend met de scheepvaart. Het is onbekend wanneer hij precies met schilderen begon, maar begin jaren dertig van de zeventiende eeuw startte hij een schildersatelier in Amsterdam."
    },
    {
        "titel":"Zeeslag bij Gibraltar",
        "image":"img/4.jpg",
        "text":"De zeeslag bij Gibraltar tussen de Nederlandse en de Spaanse vloot, 25 april 1607, Cornelis Claesz van Wieringen (circa 1575 - 1633), olieverf op doek, 1622. [A.0724]"
    },
    {
        "titel":"Braziliaans landschap, Frans Post",
        "image":"img/5.jpg",
        "text":"Dit schilderij van de Nederlandse schilder Frans Post toont een idyllisch Braziliaans landschap. Zo’n 8 jaar lang woonde en werkte Post in Brazilië in opdracht van de gouverneur-generaal van Nederlands-Brazilië, graaf Johan Maurits van Nassau-Siegen. Deze vroeg Post om het land zo nauwkeurig mogelijk vast te leggen."
    },
    {
        "titel":"Republiek aan Zee: Zeeslag bij Gibraltar",
        "image":"img/6.jpg",
        "text":"De zeeslag bij Gibraltar tussen de Nederlandse en de Spaanse vloot, 25 april 1607, Cornelis Claesz van Wieringen (circa 1575 - 1633), olieverf op doek, 1622. [A.0724]"
    },
    {
        "titel":"Ooggetuigen met Kadir van Lohuizen",
        "image":"img/7.jpg",
        "text":"De tekst over het volgende kunstwerk is geschreven door Kadir van Lohuizen."
    },
    {
        "titel":"Republiek aan Zee: Dhr en mevr Sweers-Bloemaert",
        "image":"img/8.jpg",
        "text":"Deze twee portretten van het echtpaar Isaac Sweers en Constantia Bloemaert zijn een toonbeeld van de rijke burgerklasse in de Republiek. Isaac draagt een met goud- en zilverdraad gedecoreerde sjerp. Zijn linkerhand rust op zijn zwaard, in zijn rechterhand houdt hij een pistool. Constantia’s zijden jurk is met kostbaar kant afgezet en ze draagt parels aan haar oren, om haar hals en polsen. Een leuk detail: in de weerspiegeling van de ijzeren halsplaat van Isaac is een klein zelfportret van de schilder Luttichuijs te zien."
    },
    {
        "titel":"Penschilderijen met Caroline van der Elst",
        "image":"img/9.jpg",
        "text":"De tekst over de aankomende paar kunstwerken is geschreven door Caroline van der Elst."
    },
    {
        "titel":"Republiek aan Zee: Rede van Batavia",
        "image":"img/10.jpg",
        "text":"Dit schilderij toont de rede van Batavia, het huidige Jakarta in Indonesië, halverwege de zeventiende eeuw. Na het verwoesten van de Javaanse stad Jacatra sticht de Verenigde Oost-Indische Compagnie VOC hier in 1619 een nederzetting, als centrum voor haar Aziatische handelsnetwerk. Vanuit heel Azië worden langs verschillende zeeroutes goederen bijeengebracht, die driemaal per jaar met de retourvloot naar de Republiek worden verscheept."
    },
    {
        "titel":"Zeeschilders met Thijs van Leeuwen",
        "image":"img/11.jpg",
        "text":"De text over de aankomende paar kunstwerken is geschreven door Thijs van Leeuwen."
    },
    {
        "titel":"Republiek aan Zee: Michiel de Ruyter",
        "image":"img/12.jpg",
        "text":"Dit is een portret van de beroemdste Nederlandse admiraal uit de zeventiende eeuw: Michiel de Ruyter. Met de commandostaf in de hand staat hij afgebeeld als opperbevelhebber van de Nederlandse oorlogsvloot. De rode vlag draagt zijn familiewapen en rechtsonder is zijn vlaggeschip De Zeven Provinciën te zien, hevig verwikkeld in een gevecht op zee."
    },
    {
        "titel":"Willem van de Velde de Jonge met Jeroen van der Vliet",
        "image":"img/13.jpg",
        "text":"De tekst over het volgende kunstwerk is geschreven door Jeroen van der Vliet."
    },
    {
        "titel":"Republiek aan Zee: Gezicht op het IJ met s-Lands Zeemagazijn",
        "image":"img/14.jpg",
        "text":"Dit schilderij van Reinier Nooms toont een gedeelte van de Amsterdamse haven in 1664. Rechts op het doek is het zeemagazijn van de Admiraliteit van Amsterdam te zien, het huidige Scheepvaartmuseum."
    },
    {
        "titel":"Aan het Engelse Hof met Dominic Seldis",
        "image":"img/15.jpg",
        "text":"De tekst over de volgende twee kunstwerken is geschreven door Dominic Seldis."
    },
    {
        "titel":"Republiek aan Zee: Chinese Famille Noire",
        "image":"img/16.jpg",
        "text":"Dit porseleinen beeld van een staande Afrikaanse man is in China gemaakt, in opdracht van een Europeaan. In dit beeld komen allerlei Europese en Chinese aannames samen over mensen van een andere cultuur. De rode lippen, opengesperde ogen en de schaarse kleding zijn racistische kenmerken waarmee in Europa en China mensen van Afrikaanse herkomst werden weergegeven. De gouden oorringen en de zogenaamde ‘slavenband’ om zijn hals zijn onmiskenbaar verwijzingen naar de Europese slavenhandel."
    },
    {
        "titel":"Portret Admiraal van Kinsbergen",
        "image":"img/17.jpg",
        "text":"Geportretteerde Van Kinsbergen maakt voor het eerst naam als jonge officier tijdens de Slag bij de Doggersbank, een zeeslag tegen Engeland in 1781. Hoewel de slag onbetwist eindigt, wordt hij in Nederland als overwinning gevierd en Van Kinsbergen als held onthaald. Van Kinsbergen maakt een afwisselende loopbaan door die eerst begint in het leger en via de Admiraliteit van Amsterdam leidt tot een baan bij de Russische marine. Terug in de Republiek bepleit hij voor hervorming van de Nederlandse vloot. En als adviseur van de stadhouder weet hij enkele, kleinere, veranderingen door te voeren. Van Kinsbergen wordt later benoemd tot Graaf van Doggersbank en krijgt vele onderscheidingen."
    },
    {
        "titel":"Kalmtes, briesjes, stormen met Laura van der Blij",
        "image":"img/18.jpg",
        "text":"De tekst over de volgende paar kunstwerken is geschreven door Laura van der Blij."
    },
    {
        "titel":"Republiek aan Zee: De Secrete Macht",
        "image":"img/19.jpg",
        "text":"We zien de haven van Vlissingen in het jaar 1805. Links op de voorgrond staat bevelhebber VerHuell in gezelschap van een aantal marineofficieren. In de haven liggen tientallen kleine schepen. Opvallend detail is dat in de mast van het oorlogsschip dat voor de kerk ligt niet de Nederlandse vlag prijkt maar de Franse tricolore."
    },
    {
        "titel":"Aan de steiger: De Koningssloep",
        "image":"img/20.jpg",
        "text":"De Nederlandse Koningssloep werd tussen 1816 en 1818 gebouwd voor Koning Willem I op de Marinewerf in Rotterdam. De Koninklijke ‘Chaloupe’ zoals de sloep officieel heet is een soort gouden koets te water. De sloep past binnen de eeuwenoude traditie waarbij Europese monarchen met een roei- of zeiljacht deelnemen aan feestelijke gelegenheden te water. Dat gold zeker voor een maritieme natie als Nederland."
    },
    {
        "titel":"Aan de steiger: Christiaan Brunings",
        "image":"img/21.jpg",
        "text":"Je zou het op het eerste gezicht misschien niet vermoeden maar dit schip de Christiaan Brunings is in het jaar 1900 in Amsterdam gebouwd als ijsbreker. De sterk oplopende boeg heeft aan de voorzijde een diepgang van slechts 20 centimeter, wat helpt bij het breken van het ijs. Het schip beschikt nog altijd over een stoommachine die op steenkool wordt gestookt. Daarmee representeert dit schip ook het tijdperk van de stoomschepen waarvan er maar bijzonder weinig bewaard zijn gebleven."
    },
    {
        "titel":"Teaser Solebay wandtapijten",
        "image":"img/22.jpg",
        "text":"-"
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
