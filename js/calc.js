//declaration + initialisation de la variable accu (accumulateur) variable permetant de stocker les données et afficher.
var accu = document.getElementById('affichage');
accu.value = "";

//fonction affichage 'qui recupere les clicks de l'utilisateur'
function affichage(Val) {
    var result = document.getElementById(Val).value;
    accu.value += result;
    return accu.value;
}

//fontion de calcul
function calcul() {
    try {
        return accu.value = eval(accu.value);
    } catch (exception) {
        return accu.value = "syntaxe error";
    }

}

//fonction d'initialisation de la zone d'affichage
function init() {
    return accu.value = "";
}

//fonction plus ou moins 'signe plus ou moins'
function plusMoins() {
    return accu.value = -accu.value;
}

//racine carre
function sqrt() {
    return accu.value = Math.sqrt(accu.value);
}

//fonction suppression du dernier caractere 'fleche arriere'
function suppLastChar() {
    var result = accu.value.toString().substr(0, accu.value.length - 1);
    return accu.value = result;
}

document.addEventListener("keypress", function (e) {
    if (e.which == 13) {
        calcul();
    } else if (e.which == 8) {
        suppLastChar();
    } else {
        affichage(String.fromCharCode(e.charCode));
    }
});