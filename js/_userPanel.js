//Profil (nazwa)
document.querySelector(".userSet__userName").addEventListener("input", function(){
    //this.value
    localStorage.setItem("userPanelName", this.value);
    if(this.value ==""){
        localStorage.removeItem("userPanelName");
    }
})

if(localStorage.getItem("userPanelName") != null){
    let LocalSrgName = localStorage.getItem("userPanelName");
    document.querySelector(".userSet__userName").value=LocalSrgName;
}


//Usuwanie plików lokalnych
document.querySelector(".userSet__link--clearLocalStrg").addEventListener("click",()=>{
        if (confirm("Czy na pewno chcesz usunąć wszystkie zapisane dane w aplikacji?")) {
        localStorage.clear();
        window.location.reload(true);
      }
})


//Share app
const shareButton = document.querySelector(".userSet__link--share");
shareButton .addEventListener("click", event => {
    if (navigator.share) {
      navigator
        .share({
          title: document.title,
          text: document.querySelector('meta[name="description"]').content,
          url: location.href
        })
        .then(() => {
          console.log("Udało się udostępnić ! :D");
        })
        .catch(error => {
          console.log("Coś poszło nie tak:", error);
        });
    } else {
      console.log("Twoja przeglądarka nie obsługuje tej funkcji :(");
      shareButton.innerText = "Twoja przeglądarka nie obsługuje tej funkcji";
    }
  });



//PWA DETECT 
function isInstalledPWA() {
    //iOS
    if(window.navigator.standalone) return true
  
    //Android
    if(window.matchMedia('(display-mode: standalone)').matches) return true
  
    //Gdy nie ma nic innego
    return false
}

if(isInstalledPWA() == true){
    document.querySelector(".userSet__link--addPwa").innerText="Korzystasz z aplikacji w trybie PWA";
}


//Dzwonek
document.querySelector(".userSet__infoBellIcon").addEventListener("click",()=>{
  document.querySelector(".userSet__infoInBell").classList.toggle("userSet__infoInBell--active");
})



//Alert dla PC
if(window.innerWidth>1280){
    console.log("A co tu robisz? ( ಠ ͜ʖಠ)")
    document.querySelector(".allertBox").style.display= "flex";
    document.querySelector(".allertBox__pcBrows").style.display= "block";

    document.querySelector(".allertBox__enterPc").addEventListener("click",()=>{
        document.querySelector(".allertBox").style.display= "none";
        console.log("Pamiętaj, że aplikacja jest dostosowana tylko pod urządzenia mobilne")
    })
}
