
function rechercheNombre(_couleur, _data) {
	let nbCouleur = 0;
	for (let i = 0; i < _data.length; i++) {
		if (_data[i] == _couleur) {
			nbCouleur++;
		}
		
	}
	return nbCouleur;
}
let xhr = new XMLHttpRequest();
xhr.open("GET", "exercice.json", true);
xhr.responseType = "json";
xhr.send();
xhr.onload = function () {
	//Si le statut HTTP n'est pas 200...
	if (xhr.status != 200) {
		//...On affiche le statut et le message correspondant
		alert("Erreur " + xhr.status + " : " + xhr.statusText);
		//Si le statut HTTP est 200, on affiche la réponse
	} else {
		let donnees = xhr.response;
	    let tabCouleurs = donnees[0].results; //on extrait le tableau de données couleurs 
		let listCouleurs = [...new Set(tabCouleurs)]; // on va recréer un autre tableau sans doublon pour avoir la liste des couleurs. 
		console.log(listCouleurs);

		let tabNbCouleur = [];

for (let i = 0; i < listCouleurs.length; i++) { //On remplie un tableau avec la fréquence d'apparition de chaque couleur dans l'ordre des couleurs apparaissant dansle tableau liste des couleurs. 
let frequence = rechercheNombre(listCouleurs[i], tabCouleurs);
	tabNbCouleur.push(frequence);
	
}
console.log(tabNbCouleur);
document.querySelector("#couleurMax").addEventListener( "click", function () { //algorithme de recherche du maximum
	let positionMax = 0;
	let ValeurMaximal = tabNbCouleur[0];
	for (let i = 0; i < tabNbCouleur.length; i++)
	{		
			if (tabNbCouleur[i] > ValeurMaximal) 
			{
				ValeurMaximal = tabNbCouleur[i];
				positionMax = i;
			}
	}
  document.querySelector("#validationSummary").innerHTML="<p>Le nombre de votes maximal est: <span style='color:orange'> " + ValeurMaximal + "</span> Il correspond à la couleur : <span style='color:orange'>" +listCouleurs[positionMax] + " </span> dans le tableau des choix possibles </b>";});

}

	
}