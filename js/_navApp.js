//Pobieranie wszystkich linków w menu
let LinksMenu =  document.querySelectorAll('.navApp__link');

//Ustawienia liku nr2 (karty) jako aktywny
document.querySelectorAll('.navApp__link')[1].classList.add("navApp__link--active");

//Wykrywanie kliku na link
document.querySelectorAll(".navApp__link").forEach(clink => {
    clink.addEventListener("click", event => {
        //Wczytanie elemntu data-* z menu
        let dataLink = clink.dataset.link;
        //Pętla czyszcząca klasy
        for (i = 0; i < LinksMenu.length; i++) {
            document.querySelectorAll('.navApp__link')[i].classList.remove("navApp__link--active");
            document.querySelectorAll('.LElements__section')[i].classList.remove("LElements__section--active");
          }

        //Aktywowanie danej sekcji
        document.querySelector('section[data-target='+ clink.dataset.link +']').classList.add("LElements__section--active");
        //Aktywowanie danego linku w menu
        clink.classList.add("navApp__link--active");
    })
  })