function boxTarget() {
    
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

            //Kodowanie karty
            document.querySelector(".BoxTarget__barcodeSVG").setAttribute("jsbarcode-format",CardCoding);

            //Dodanie interakcji po kliku na link zgłoszenia bledu
            let ReportText =`Funkcja jeszcze nie działa!`
            document.querySelector(".BoxTarget__button--report").addEventListener("click", (e)=> {
                document.querySelector(".BoxTarget__eventInfo").innerText=ReportText;
                setTimeout(()=>{document.querySelector(".BoxTarget__eventInfo").innerText="";}, 3000);
            })

            

            //ENGINE
            let docRef = db.collection("Karty").doc(CardName);
            let CardNumber;

            docRef.get().then((doc) => {
                if (doc.exists) {
                    function GetCard() {
                        let CardData = doc.data();
                        let CardLngth = CardData.Karty.length
                        let CardRandom = Math.floor(Math.random() * CardLngth);    
                        CardNumber = CardData.Karty[CardRandom];
                        //Wczytywanie numer karty z bazy danych
                        document.querySelector(".BoxTarget__barcodeSVG").setAttribute("jsbarcode-value",CardNumber);
                        document.querySelector(".BoxTarget__numberCard").setAttribute("value",CardNumber);
                        //Wczytywanie Kodu lub Błędu
                        try {
                            JsBarcode(".BoxTarget__barcodeSVG").init();
                            document.querySelector(".BoxTarget__slide--random .BoxTarget__barcode").classList.remove("BoxTarget__barcode--error");
                        }
                        catch(err) {
                            document.querySelector(".BoxTarget__slide--random .BoxTarget__barcode").classList.add("BoxTarget__barcode--error");
                        }
                    }
                    GetCard();

                    //Obsługa przycisku odśwież!
                    document.querySelector(".BoxTarget__button--refresh").addEventListener("click",()=>{
                        GetCard();
                        let RefreshCounter = parseInt(localStorage.getItem("RefreshLimit"));
                        localStorage.setItem("RefreshLimit", ++RefreshCounter);
                       
                        RefreshLimiter (RefreshCounter);
                        
                    })

                }
            })
            //End ENGINE
           
        })
    //KONIEC FUNKCJI
    })
    




    //Limiter odświeżeń kart
    const ActualDay = new Date().getDate();
    let ActualDayLocal = localStorage.getItem("ActualDayRemember");
    if(ActualDay != ActualDayLocal){
        //Reset jeśli już jest kolejny dzień
        localStorage.setItem("ActualDayRemember", ActualDay);
        localStorage.setItem("RefreshLimit", 0);
    }
    
    //Licznik ods. kart
    function RefreshLimiter (RefrCounter) {
        //console.log(RefrCounter);
        if(RefrCounter==10){
            document.querySelector(".BoxTarget__eventInfo").insertAdjacentHTML("afterbegin", `Odświeżyłeś dziś karty juz ${RefrCounter} razy. Cieszymy się, że podoba Ci się nasz projekt :)`);
            setTimeout(()=>{document.querySelector(".BoxTarget__eventInfo").innerHTML="";}, 10000);
        }
        else if(RefrCounter==20){
            document.querySelector(".BoxTarget__eventInfo").insertAdjacentHTML("afterbegin", `Odświeżyłeś dziś karty juz ${RefrCounter} razy. Pamiętaj, że możesz <a href="https://buycoffee.to/l1su">wesprzeć nasz projekt</a>, projekt funkcjonuje tylko dzięki darczyńcom :)`);
            setTimeout(()=>{document.querySelector(".BoxTarget__eventInfo").innerHTML="";}, 15000);
        }
        else if(RefrCounter==30){
            document.querySelector(".BoxTarget__eventInfo").insertAdjacentHTML("afterbegin", `Odświeżyłeś dziś karty juz ${RefrCounter} razy. Pamiętaj, że możesz <a href="https://buycoffee.to/l1su">wesprzeć nasz projekt</a> , projekt funkcjonuje tylko dzięki darczyńcom :)`);
            setTimeout(()=>{document.querySelector(".BoxTarget__eventInfo").innerHTML="";}, 15000);
        }
        else if(RefrCounter>=40){
            setTimeout(()=>{document.querySelector(".BoxTarget__eventInfo").innerHTML=`WOW ale pędzisz, dziś juz ponad ${RefrCounter} razy używałeś wirtualnych kart.
            <a href="https://buycoffee.to/l1su">Wesprzyj nasz projekt</a> jeśli doceniasz naszą aplikacje oraz prace, dziękujemy!`;}, 8000);
        }
    }

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
    try {
        JsBarcode(".BoxTarget__barcodeSVG").init();
      }
    catch(err) {
        console.log("xd");
    }

}
