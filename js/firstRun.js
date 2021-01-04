let LengthElements = document.querySelectorAll(".FirstRun__slide").length;

// Generowanie kropek
for (let step = 1; step < (LengthElements +1); step++) {
    document.querySelectorAll(".FirstRun__slide")[(step - 1)].id = 'slide'+step+'';
    document.querySelector(".FirstRun__nav").innerHTML += '<a href="#slide'+step+'" class="FirstRun__element">'+step+'</a>';
}


let RulesAccep = localStorage.getItem("rules");
let FirstRunBox = document.querySelector(".FirstRun");
let RulesAccButton = document.querySelector(".slide__acceptrul");

//LocalStorage zasady
if(RulesAccep  == null){
    FirstRunBox.classList.add("FirstRun--open");
}


RulesAccButton.addEventListener("click", function() {
    localStorage.setItem("rules", true);
    FirstRunBox.classList.remove("FirstRun--open");
  });


