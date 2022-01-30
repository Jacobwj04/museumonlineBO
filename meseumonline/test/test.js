const mytitle = document.getElementById("mytitle");
const myimage = document.getElementById("myimage");
const myinput = document.getElementById("myinput");


let current_index = 0;

let lokaties =[ // array
    { // 0 = object
        "titel":"plaats 0",
        "image":"imgtour/img1.jpeg",
        "text":"de kamerwaar de nacht wacht in staat"
    },
    {  //1 = object 
        "titel":"plaats 1",
        "image":"imgtour/img2.jpg"
    },
    {
        "titel":"plaats 2",
        "image":"imgtour/img3.jpg"
    },
    {
        "titel":"plaats 3",
        "image":"imgtour/img4.jpg"
    },
    {
        "titel":"plaats 4",
        "image":"imgtour/img5.jpg"
    }
]

//mytitle.innerHTML = "dit is gevoegd door java";
//myimage.src = "img/1.jpg";

function show(index){
  mytitle.innerHTML = lokaties[index].titel;
  myimage.src = lokaties[index].image;
}
function getinput(){
  show(myinput.value);
  console.log(myinput.value);
  myinput.value = "";
  myinput.focus();
}
