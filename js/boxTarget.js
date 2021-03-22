//Pobranie całego wysuwanego BOXU
let BoxTarget = document.querySelector(".BoxTarget");


//Kliknięcie na liście kart otwiera box
document.querySelectorAll(".cardPanel__ImgBox, .cardPanel__TextBox").forEach(TargetPanel => {
    TargetPanel.addEventListener("click", () => {
        //      Działanie na karcie
        BoxTarget.classList.add("BoxTarget--active");
        document.querySelector(".BoxTarget__wrapper").scrollIntoView({
            behavior: 'smooth',
        });

        document.querySelector(".BoxTarget__slide--random").scrollIntoView({
            behavior: 'smooth',
        });


        //      Pobieranie danych
        //Nazwa karty
        let CardName = TargetPanel.closest(".cardPanel__panel").dataset.cardname;
        //Czy karta wspiera akcje
        let CardHelp = TargetPanel.closest(".cardPanel__panel").dataset.cardhelp;
        //Kodowanie kodu kreskowego
        let CardCoding = TargetPanel.closest(".cardPanel__panel").dataset.coding;


        //      Manipulacje na karcie
        //Wstrzyknięcie nazwy karty
        document.querySelector(".BoxTarget__title").innerHTML = CardName

        //Informacja czy karta wspiera organizacje
        let FirstDesc = document.querySelector(".BoxTarget__slide--random > .BoxTarget__descriptionCard");
        if(CardHelp == 1){
            FirstDesc.innerHTML="Używając tej karty wspierasz organizacje dobroczynne!";
            FirstDesc.classList.add("BoxTarget__descriptionCard--help");
            FirstDesc.classList.remove("BoxTarget__descriptionCard--NoHelp");
        }
        else{
            FirstDesc.innerHTML="Ta karta nie bierzę udziału w programie pomocy dobroczynnej";
            FirstDesc.classList.remove("BoxTarget__descriptionCard--help");
            FirstDesc.classList.add("BoxTarget__descriptionCard--NoHelp");
        }

        //Dodanie interakcji po kliku na link zgłoszenia bledu
        document.querySelector(".BoxTarget__button--report").addEventListener("click", (e)=> {
            document.querySelector(".BoxTarget__eventInfo").innerText="Problem z kartą został zgłoszony";
            setTimeout(()=>{document.querySelector(".BoxTarget__eventInfo").innerText="";}, 3000);
        })

    })
//KONIEC FUNKCJI
})




//Przycisk zamknij
document.querySelector(".BoxTarget__closeSymbol").addEventListener("click", ()=>{
    BoxTarget.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
    setTimeout( () => {
        BoxTarget.classList.remove("BoxTarget--active");
    }, 600);
})

//Efekt dotknięcia na boxie (zwijanie)
document.querySelector(".BoxTarget__slideBox").addEventListener("touchstart", () =>{
    BoxTarget.classList.add("BoxTarget--focus");
})

//Co zrobić gdy puścimy box
document.querySelector(".BoxTarget__slideBox").addEventListener("touchend", () =>{
    BoxTarget.classList.remove("BoxTarget--focus");

    if(BoxTarget.scrollTop < (screen.height/1.3) ){
        BoxTarget.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
        setTimeout( () => {
            BoxTarget.classList.remove("BoxTarget--active");
        }, 600);
    }
    else{
        BoxTarget.scrollTo({
            top: screen.height,
            behavior: 'smooth',
        });
    }
})



//KOD kreskowy
JsBarcode(".BoxTarget__barcodeSVG").init();
