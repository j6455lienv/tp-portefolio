//gestion des images realisation.html
for (var i = 1; i <= 12; i++) {
    var divElt = document.createElement("div");
    divElt.className = "col-sm-12 col-md-6 col-lg-4 imgpf";

    var aElt = document.createElement("a");
    aElt.href = '../img/album-photo/img' + i + '.jpg';

    var imgElt = document.createElement("img");
    imgElt.className = "img-responsive";
    imgElt.src = '../img/album-photo/img' + i + '.jpg';

    document.getElementById("affichage-img").appendChild(divElt).appendChild(aElt).appendChild(imgElt);
}