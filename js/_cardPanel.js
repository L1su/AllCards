function cardPanel() {
    //                                                                     Dodawanie do ulubionych i usuwanie + localStorage
    //Tablica "ulubionych" kart (bedzie zapisana w local storage)
    let FavouriteCardsArray=[];

    //Akcje po kliku na DANY panel!
    document.querySelectorAll(".cardPanel__favIcon").forEach(FavoIcon => 
        FavoIcon.addEventListener("click", () => {
            let CardPanel = FavoIcon.closest(".cardPanel__panel");      //Pobieram dane panelu w którym była kliknieta ikona "ulubione"
            let FavoState = CardPanel.dataset.cardfavo;     //Odczytuje jaką wartości z panelu: data-cardfavo=  (1-ulubione | 0-nieulubione)
            let CardName = CardPanel.dataset.cardname;      //Odczytuje jaką wartości z panelu: data-cardname=  (NAZWA)
            let FavoResult;     //Zdefiniowany wynik po zmianie (z 0 na 1 I 1 na 0)

            //If sprawdzający czy dany panel ma w  data-cardfavo=  0 lub 1 i zapis do tablicy kart które lubimy
            if(FavoState == "1"){
                console.log("Usuwam: "+ CardName);
                //Usuwanie z tablicy elementu
                let DelCardArray = FavouriteCardsArray.indexOf(CardName);
                FavouriteCardsArray.splice(DelCardArray, 1);
                //Usuwanie po kliku ikony do panelu "Ulubionych"
                document.querySelector(".cardPanel__AllCardBox").prepend(CardPanel);
                //Było 1 więc po kliku jest 0
                FavoResult = "0";
            }
            else{
                FavouriteCardsArray.push(CardName);
                console.log("Dodaje: "+CardName);
                //Dodawanie po kliku ikony do panelu "Ulubionych"
                document.querySelector(".cardPanel__FavBox").prepend(CardPanel);
                //Było 0 wiec po kliku bedzie 0
                FavoResult = "1";
            }

            //Zapisanie stanu data-cardfavo= 
            CardPanel.dataset.cardfavo = FavoResult;
            //Zapis w localStorage ulubionych kart 
            localStorage.setItem("FavouriteCardsList", FavouriteCardsArray);
            //Usuwanie h4 z napisem "ulubione" gdy nie mamy żadnego ulubionego 
            CategoryFavo();
        })
    );

    
    //                                                              Odtwarzanie "ulubionych" kart z localStorage
    if(localStorage.getItem("FavouriteCardsList")){
        FavouriteCardsArray = localStorage.getItem("FavouriteCardsList").split(",");   //Tworzenie tablicy z danych w localStorage
        for(step = 0; step < FavouriteCardsArray.length; step++) {  //Pętla - licząca elementy w tablicy wyżej
            let singleElement = FavouriteCardsArray[step]  //Pobieranie pojedyncze 
            document.querySelector('.cardPanel__panel[data-cardname="'+singleElement+'"]').dataset.cardfavo = "1";      //Dodawanie do każdego elementu w local storage wartości 1

            let GetFavo = document.querySelectorAll('.cardPanel__panel[data-cardfavo="1"]');    //Pobieranie wszystkich elementów z data-cardfavo="1"
            document.querySelector('.cardPanel__FavBox').prepend(GetFavo[step]);    //Wyświetlenie wszystkich elmentów w zakładce ulubione
        }
    }
    else{
        localStorage.setItem("FavouriteCardsList", FavouriteCardsArray);
    }


    //                                                          Usuwanie h4 z napisem "ulubione" gdy nie mamy żadnego ulubionego 
    function CategoryFavo(){
        let NoFavorite = document.querySelectorAll('.cardPanel__panel[data-cardFavo="1"]').length;
        let CategoryFavo = document.querySelector(".cardPanel__category--favo")
        NoFavorite == 0 ? CategoryFavo.hidden = true  : CategoryFavo.hidden = false;
    }
    CategoryFavo();

}

