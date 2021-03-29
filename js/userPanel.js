//Profil (nazwa i avatar)
document.querySelector(".userSet__inputName").addEventListener("input",()=>{
    let UserName = document.querySelector(".userSet__inputName").value;
    localStorage.setItem("userPanelName", UserName);
    document.querySelector(".userSet__avatar").setAttribute("src",`https://avatars.dicebear.com/api/bottts/${UserName}.svg?w=70&h=70&mouthChance=0&textureChance=0`);

    if(UserName == ""){
        localStorage.removeItem("userPanelName");
        document.querySelector(".userSet__avatar").setAttribute("src",`https://avatars.dicebear.com/api/bottts/USR.svg?w=70&h=70&mouthChance=0&textureChance=0`);
    }
})

if(localStorage.getItem("userPanelName") != null){
    let LocalSrgName = localStorage.getItem("userPanelName");
    document.querySelector(".userSet__inputName").value=LocalSrgName;
    document.querySelector(".userSet__avatar").setAttribute("src",`https://avatars.dicebear.com/api/bottts/${LocalSrgName}.svg?w=70&h=70&mouthChance=0&textureChance=0`);
}