let WidthSlide = document.querySelector(".FirstRun__boards").offsetWidth;
let FRBoards =  document.querySelector(".FirstRun__boards");
let LengthElements = document.querySelectorAll(".FRboard").length;
let SizeElements = document.querySelector(".FRboard").offsetWidth;

//jeśli rozmiar okna się zmienia wczytaj nową szerokość slajdu
window.addEventListener('resize',function() {
    WidthSlide = FRBoards.offsetWidth;
    console.log(WidthSlide);
    return WidthSlide;
});




for (let step = 0; step < LengthElements; step++) {
    console.log(step);
    console.log(step * WidthSlide);
   // document.querySelectorAll(".FRboard")[step].id ='slide'+step+'';
    document.querySelector(".FirstRun__nav").innerHTML += '  <a class="FirstRun__element" href="#slide'+step+'" data-slide="'+step+'">'+step * WidthSlide+'</div>  ,';
}

//wczytaj polożenie slajdu   - potrzebne do zaznaczenia kropki która jest obecnie odpalona
FRBoards.addEventListener("scroll", function() {
    //console.log(FRBoards.scrollLeft);
    console.log('a[data-slide="'+parseInt(FRBoards.scrollLeft / SizeElements)+'"]')
    document.querySelector('a[data-slide="'+parseInt(FRBoards.scrollLeft / SizeElements)+'"]').style.color = 'red';
});

// Dodać: wczytywanie ilosci slajdów i twoerzenie listy A href = #target z godnoe z iloscia slajdów 

//dodawanie classy gdy nie ma local storage - pojawianie sie INTRA