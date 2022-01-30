const mytitle = document.getElementById("mytitle");
const myimage = document.getElementById("myimage");
const myinput = document.getElementById("myinput");

let directionButtons = {
  "noord": document.getElementById('knopNoord'),
  "oost": document.getElementById('knopOost'),
  "zuid":  document.getElementById('knopZuid'),
  "west": document.getElementById('knopWest')
}

let current_index = 0;

let lokaties =[ // array
    { // 0 = object
        "titel":"plaats 0",
        "image":"imgtour/img1.jpeg",
        "directions": {
            "west": 2,
            "oost": 4
        }
    },
    {  //1 = object 
        "titel":"plaats 1",
        "image":"imgtour/img2.jpg",
        "directions": { // object
            "oost": 1,
            "zuid": 3
        }

    },
    {
        "titel":"plaats 2",
        "image":"imgtour/img3.jpg",
        "directions": { // object
            "noord": 2
            
        }
    },
    {
        "titel":"plaats 3",
        "image":"imgtour/img4.jpg",
        "directions": { // object
            "zuid": 5,
            "west": 1
            
        }
    },
    {
        "titel":"plaats 4",
        "image":"imgtour/img5.jpg",
        "directions": { // object
            "noord": 4
            
        }
    }
]

//mytitle.innerHTML = "dit is gevoegd door java";
//myimage.src = "img/1.jpg";

function show(index){
  mytitle.innerHTML = lokaties[index].titel;
  myimage.src = lokaties[index].image;
  current_index = index;

  //knoppen opnieuw berekenen
  updateDirections();
}

function updateDirections(){

  let possible = lokaties[current_index].directions;

  let possible_keys = Object.keys(possible);

  console.log(possible);
  console.log(possible_keys);

  let button_keys = Object.keys(directionButtons);
  console.log(button_keys);

  for(const key of button_keys){
      directionButtons[key].style.visibility = "hidden";
  }

  for(const key of possible_keys){
      directionButtons[key].style.visibility = 'visible';
  }

}

function getinput(){
  show(myinput.value);
  console.log(myinput.value);
  myinput.value = "";
  myinput.focus();
}

function goDirection(direction){
  let punt_index = lokaties[current_index].directions[direction];
  show(punt_index)
}
