

var tabMois= ['janvier','février', 'mars', 'avril', 'mai', 'juin' , 'juillet', 'aout', 'septembre', 'octobre', 'novembre', 'decembre' ];

function afficherMois() {
let opt=document.createElement("option");
opt.textContent="mois";
opt.value=""; 
document.querySelector("#mois").appendChild(opt);
for (let i = 0; i < tabMois.length; i++) {
    

    
}
}

afficherMois();