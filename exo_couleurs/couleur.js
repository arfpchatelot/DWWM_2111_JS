function getColor() 
{
 let chainecouleur="#"+document.querySelector("#rouge").value + document.querySelector("#vert").value + document.querySelector("#bleu").value;
document.body.setAttribute("style","background-color:"+chainecouleur ); 
//document.body.style.backgroundColor()
}
let btnrouge= document.querySelector("#btnrouge");

btnrouge.addEventListener("click", function () {

    document.querySelector("#rouge").value="ff";
    document.querySelector("#vert").value="00";
    document.querySelector("#bleu").value="00";
    getColor();

});