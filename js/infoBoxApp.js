//Info box nad aplikacja -  Admin Panel [FIREBASE]

let message = "";  //Treść wiadomości
let stan = 1;  // 1 - info | 2 - alert

    let infobox = document.querySelector(".infoboxApp");
    let addClass = stan == 1 ? "infoboxApp--info" : "infoboxApp--alert";

    infobox.classList.add(addClass);  
    infobox.innerHTML += message;

        //kasowanie boxu jeśli jest pusty 
    infobox.textContent == "" && infobox.remove();

