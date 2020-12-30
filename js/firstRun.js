//document.querySelector(".FirstRun__boards").offsetWidth;
//window.addEventListener("resize");
//document.querySelector(".FirstRun__boards").scrollLeft;

let WidthSlide = document.querySelector(".FirstRun__boards").offsetWidth;
let FRBoards =  document.querySelector(".FirstRun__boards");

//jeśli rozmiar okna się zmienia wczytaj nową szerokość slajdu
window.addEventListener('resize',function() {
    WidthSlide = FRBoards.offsetWidth;
    console.log(WidthSlide);
    return WidthSlide;
});





//wczytaj polożenie slajdu
FRBoards.addEventListener("scroll", function() {
    console.log(FRBoards.scrollLeft);
});


