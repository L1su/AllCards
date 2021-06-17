//  Wczytanie list kart i ustawień -  Admin Panel [FIREBASE]
const db = firebase.firestore();
db.collection("Karty").orderBy("Nazwa", "asc").get().then((querySnapshot) => {
    document.querySelector(".cardPanel__loading").remove();
    querySnapshot.forEach((doc) => {
        let CardName = doc.id;
        let CardSeting = doc.data();
        //console.log(CardName);
        //console.log(CardSeting);

        document.querySelector(".cardPanel__AllCardBox").insertAdjacentHTML("beforeend", `
        <div class="cardPanel__panel" data-cardname="${CardName}" data-coding="${CardSeting.Kodowanie}" data-cardhelp="${CardSeting.Pomoc}" data-cardfavo="0">
            <div class="cardPanel__ImgBox">
                <div class="cardPanel__icon"></div>
                <img src="img/brands/PayBack.webp" alt="" class="cardPanel__logo" >
            </div>
            <div class="cardPanel__TextBox">
                <h4 class="cardPanel__title">${CardName}</h4>
                <span class="cardPanel__storeList">${CardSeting.Sklepy}</span>
            </div>
            <div class="cardPanel__FavBox"> 
                <div class="cardPanel__favIcon"></div>
            </div>
        </div>
        `);
    });
    cardPanel();
    boxTarget();
})
.catch((error) => {
    document.querySelector(".cardPanel__loading").insertAdjacentHTML("afterbegin",`Błąd ładowania kart
    <div>Sprawdź połączenie z internetem oraz zresetuj aplikacje</div>`);
});




//  Info box nad aplikacja -  Admin Panel [FIREBASE]
const TopBox = db.collection("Aplikacja").doc("TopBox");
TopBox.get().then((doc) => {
    //console.log(doc.data().Typ);
    //console.log(doc.data().Tresc);
    let message = doc.data().Tresc;  //Treść wiadomości
    let stan = doc.data().Typ;  //Typ alertu (styl)

    let infobox = document.querySelector(".infoboxApp");

    infobox.classList.add(`infoboxApp--alert${stan}`);  
    infobox.innerHTML = message;

    //kasowanie boxu jeśli jest pusty 
    message == "" && infobox.remove();
}).catch((error) => {
    console.log("Problem z TopBox", error);
});




//   MiddleBox w środku aplikacji -  Admin Panel [FIREBASE]
const MiddleBox = db.collection("Aplikacja").doc("MiddleBox");
MiddleBox.get().then((doc) => {
    //console.log(doc.data().Tytul);
    //console.log(doc.data().Tresc);

    let infoBoxTitle = doc.data().Tytul;      //Tytuł InfoBoxa
    let infoBoxText = doc.data().Tresc;     //Opis InfoBoxa
    let infoBoxEleTitle = document.querySelector(".cardPanel__panel--infoBox .cardPanel__title");
    let infoBoxEleText = document.querySelector(".cardPanel__panel--infoBox .cardPanel__storeList")
    infoBoxEleTitle.innerHTML += infoBoxTitle;
    infoBoxEleText .innerHTML += infoBoxText;
    (infoBoxText != "" || infoBoxTitle != "") && document.querySelector(".cardPanel__panel--infoBox").classList.add("cardPanel__panel--infoBoxActive");

}).catch((error) => {
    console.log("Problem z MiddleBox", error);
});


//   MiddleBox w środku aplikacji -  Admin Panel [FIREBASE]
const Bell = db.collection("Aplikacja").doc("Bell");
Bell.get().then((doc) => {
    let LastUpdate = doc.data().Tresc.slice(-5);  //Liczba odpowiada za ilość punktów wyświetlanych
    //console.log(LastUpdate);
    LastUpdate.forEach((item, index)=>{
        //console.log(item)
        document.querySelector(".userSet__infoInBellTitle").insertAdjacentHTML("afterend", `
        <div class="userSet__infoInBellUpdate">
        ${item}
        </div>
    `);
    })

}).catch((error) => {
    document.querySelector(".userSet__infoInBellTitle").insertAdjacentHTML("afterend", `
    <div class="userSet__infoInBellUpdate">
    Błąd ładowania, odśwież stronę 
    </div>
`);
});





//TESTY













