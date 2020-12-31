let WidthSlide = document.querySelector(".FirstRun__boards").offsetWidth;
let FRBoards =  document.querySelector(".FirstRun__boards");
let LengthElements = document.querySelectorAll(".FRboard").length;
let SizeElements = document.querySelector(".FRboard").offsetWidth;

//jeśli rozmiar okna się zmienia wczytaj nową szerokość slajdu
window.addEventListener('resize',function() {
    WidthSlide = FRBoards.offsetWidth;
    SizeElements = document.querySelector(".FRboard").offsetWidth;
    //console.log(WidthSlide);
    return WidthSlide, SizeElements;
});



// Generowanie kropek
for (let step = 0; step < LengthElements; step++) {
    //console.log(step);
    //console.log(step * WidthSlide);
    // document.querySelectorAll(".FRboard")[step].id ='slide'+step+'';
    //document.querySelector(".FirstRun__nav").innerHTML += '  <a class="FirstRun__element" href="#slide'+step+'" data-slide="'+step+'">'+step * WidthSlide+'</div>  ,';
    document.querySelector(".FirstRun__nav").innerHTML += '  <a class="FirstRun__element" onclick="move('+step * WidthSlide+')" data-slide="'+step+'">'+step * WidthSlide+'</div>  ,';
}



document.querySelector(".FirstRun__element").classList.add('mega');

function move(distans){
    document.querySelector(".FirstRun__boards").scrollTo(distans, 0);
}





//wczytaj polożenie slajdu   - potrzebne do zaznaczenia kropki która jest obecnie odpalona
FRBoards.addEventListener("scroll", function() {
    //console.log(FRBoards.scrollLeft);
    //console.log('a[data-slide="'+parseInt(FRBoards.scrollLeft / SizeElements)+'"]')
    if((FRBoards.scrollLeft / SizeElements)!=0){
        document.querySelector('a[data-slide="'+parseInt((FRBoards.scrollLeft / SizeElements)-1)+'"]').classList.remove('mega');
    }
    document.querySelector('a[data-slide="'+parseInt(FRBoards.scrollLeft / SizeElements)+'"]').classList.add('mega');
    if((FRBoards.scrollLeft / SizeElements)!= (LengthElements-1)){
        document.querySelector('a[data-slide="'+parseInt((FRBoards.scrollLeft / SizeElements)+1)+'"]').classList.remove('mega');
    }
});



//DO POPRAWY:
//Generowanie kropek nawet po zmianie rozdzielczosci: tworze elmenty, potem na podstawie (wielkosci jednego slajdu * liczba w data-slaid) robie przesuniecia
//które działaja dynamicznie mimo zmian zabawy rozdzielczoscia 

//Optymalizacja kodu!
