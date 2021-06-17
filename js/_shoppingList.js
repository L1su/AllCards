//Dodawanie elementów listy zakupów
document.querySelector(".shppList__inputAdd").addEventListener("change",()=>{
    let nameProd = document.querySelector(".shppList__inputAdd").value;
    document.querySelector(".shppList__boxAdd").insertAdjacentHTML("afterend", `
    <div class="shppList__row">
        <input type="checkbox" class="shppList__checkbx" >
        <input type="text" class="shppList__text" placeholder="Produkt" value="${nameProd}">
        <div class="shppList__line"><!--Linia skreslenia--></div>
   </div>
   `);
   document.querySelector(".shppList__inputAdd").value="";
   refreshList();
   SaveList();
   ListCheck();
   ReadListCheck();
})

//Usuwanie całej listy zakupów
document.querySelector(".shppList__inputButtonRmv").addEventListener("click",()=>{
    if (confirm('Czy na pewno chcesz usunąć listę zakupów?')) {
        document.querySelectorAll(".shppList__row").forEach((item,index)=>{
            localStorage.removeItem("shoppingList");
            localStorage.removeItem("shoppingListCheck");    //CheckBox
            item.remove();
            ListCheck();
        })
    }
})


//Usuwanie inputa gdy jest pusty
function refreshList() {   
    document.querySelectorAll(".shppList__text").forEach((item)=>{
        item.addEventListener("input",()=>{
            if(item.value == ""){
                item.closest(".shppList__row").remove();
            }
            SaveList();
            ListCheck();
        })
    })
}


//Tablica elementów z zapisem
function SaveList() {
    let getList = document.querySelectorAll(".shppList__text").length;
    let ValList = [];
    for(var i=0; i<getList; i++){
       ValList.push(document.querySelectorAll(".shppList__text")[i].value)
    }
    localStorage.setItem("shoppingList", ValList);
}


//Odtwarzanie elementów zapisanych
if(localStorage.getItem("shoppingList") != null){
    let readListStorage = localStorage.getItem("shoppingList").split(',').reverse();
    readListStorage.forEach((text)=>{
        document.querySelector(".shppList__boxAdd").insertAdjacentHTML("afterend", `
            <div class="shppList__row">
                <input type="checkbox" class="shppList__checkbx" >
                <input type="text" class="shppList__text" placeholder="Produkt" value="${text}">
                <div class="shppList__line"><!--Linia skreslenia--></div>
            </div>`);
            refreshList();
    });
}






//Checkbox - wczytywanie nowo dodanych rzeczy
ReadListCheck();
function ReadListCheck() {
    document.querySelectorAll(".shppList__checkbx").forEach((item,index)=>{
        item.addEventListener("change",()=>{
            ListCheck();
        })
    })
}


//Checkbox - zapis stanu faktycznego / zmian  na stronie do storage
function ListCheck() {
        let CheckBoxList =[];
        document.querySelectorAll(".shppList__checkbx").forEach((item,index)=>{
            CheckBoxList.push(item.checked);
            localStorage.setItem("shoppingListCheck",CheckBoxList);
        })
}

//Checkbox - odczyt danych z storage
ListControlCheck();
function ListControlCheck() {
    if(localStorage.getItem("shoppingListCheck") != null){
        LocalStrListChec = localStorage.getItem("shoppingListCheck").split(',');
        LocalStrListChec.forEach((status, index)=>{
            if(status === "true"){
                document.querySelectorAll(".shppList__checkbx")[index].click();
            }
        })
    }
}











