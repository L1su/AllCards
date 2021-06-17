if (localStorage.getItem("Rules") === null) {
    document.body.insertAdjacentHTML("afterbegin", `
    <!--- --- --- FirstRun APP --- --- --->
    <div class="FirstRun FirstRun--open">
        <div class="FirstRun__slider">

            <div class="FirstRun__slide slide">
                <div class="slide__img slide__img--promocje"></div>
                <h2 class="slide__title">Korzystaj z promocji</h2>
                <div class="slide__desc">
                   Używaj wirtualnych kart lojalnościowych i korzystaj z promocji przygotowanych przez sklepy.
                </div>
            </div> 

            <!--<div class="FirstRun__slide slide">
                <div class="slide__img slide__img--uKarta"></div>
                <h2 class="slide__title">Dodaj swoje karty</h2>
                <div class="slide__desc">
                    <div>Dodaj twoje istniejące karty lojalnościowe.</div>
                    Pamiętaj, tylko ty masz dostęp do swoich kart!
                </div>
            </div>-->

            <div class="FirstRun__slide slide">
                <div class="slide__img slide__img--sLista"></div>
                <h2 class="slide__title">Lista zakupów</h2>
                <div class="slide__desc">
                    Twórz wygodne listy zakupów zawsze szybko dostępne!
                </div>
            </div>

            <div class="FirstRun__slide slide">
                <div class="slide__img slide__img--pomagaj"></div>
                <h2 class="slide__title">Pomagaj!</h2>
                <div class="slide__desc">
                       <div>Skanując karty wirtualne pomagasz! </div>
                       Punkty zgromadzone na kartach wybranych firm przekazujemy na cele dobroczynne!
                </div>
            </div>

            <div class="FirstRun__slide slide">
                <div class="slide__img slide__img--regulamin"></div>
                <h2 class="slide__title slide__title--rules">Regulamin</h2>
                <div class="slide__desc slide__desc--rules">
                    [Start]
                    <br>test<br>test<br>test<br>test<br>test<br>test<br>test<br>test<br>test<br>test<br>test<br>test<br>test<br>test<br>test
                    <br>test<br>test<br>test<br>test<br>test<br>test<br>test<br>test<br>test<br>test<br>test<br>test<br>test<br>test<br>test
                    <br>
                    [Koniec]
                </div>
                <a href="#" class="slide__acceptrul">Akceptuje zasady</a>
            </div>
        </div>

        <div class="FirstRun__nav">
        </div>
    </div>
    `);

    // Generowanie kropek
    let LengthElements = document.querySelectorAll(".FirstRun__slide").length;
    for (let step = 1; step < (LengthElements +1); step++) {
        document.querySelectorAll(".FirstRun__slide")[(step - 1)].id = 'slide'+step+'';
        document.querySelector(".FirstRun__nav").innerHTML += '<a href="#slide'+step+'" class="FirstRun__element">'+step+'</a>';
    }

    document.querySelector(".slide__acceptrul").addEventListener("click", () => {
        localStorage.setItem("Rules", true);
        document.querySelector(".FirstRun").classList.remove("FirstRun--open");
      });
}

