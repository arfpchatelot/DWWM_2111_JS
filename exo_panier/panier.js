function Calcul() {
    document.querySelector("#prixtot1").value = Number(document.querySelector("#qt1").value) * Number(document.querySelector("#pu1").value);
    document.querySelector("#prixtot2").value = Number(document.querySelector("#qt2").value) * Number(document.querySelector("#pu2").value);
    document.querySelector("#total").value = Number(document.querySelector("#prixtot1").value) + Number(document.querySelector("#prixtot2").value);

}

function control(_element_input) {
    let monControl = true;
    let chaine = _element_input.value;
    if (isNaN(chaine) && chaine.length>0) {

        alert(chaine + " : n'est pas valide");
        _element_input.value = "";
       _element_input.focus();
        monControl = false;
    }


    return monControl;
}
document.querySelectorAll("input[type=text]").forEach(item => { item.addEventListener("input", function (event) {  
    
    if( control(item)==true) 
    { 
        Calcul();
    } }) });



// document.querySelector("#qt1").addEventListener("blur", function () {
//     if (control("qt1") == true) {

//         Calcul();
//     }
// })