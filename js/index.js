window.onload = function () {

    /*randomisation des photos dans le slide acceuil*/
    function getRandom(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    /*selection de img slide*/
    var slide1Elt = document.getElementById("slide1");
    var slide2Elt = document.getElementById("slide2");
    var slide3Elt = document.getElementById("slide3");

    var slide1Random = getRandom(1, 10);
    var slide2Random = getRandom(1, 10);
    var slide3Random = getRandom(1, 10);

    /*test que les 3 photo randomisée ne soient pas identique*/
    while (slide1Random == slide2Random || slide1Random == slide3Random || slide2Random == slide3Random) {
        slide1Random = getRandom(1, 10);
        slide2Random = getRandom(1, 10);
        slide3Random = getRandom(1, 10);
    }

    slide1Elt.src = "img/photo-rand-slide/img-" + slide1Random + ".jpg";
    slide2Elt.src = "img/photo-rand-slide/img-" + slide2Random + ".jpg";
    slide3Elt.src = "img/photo-rand-slide/img-" + slide3Random + ".jpg";


    //controle fonctionnement random different à chaque F5
    console.log(slide1Random + ',' + slide2Random + ',' + slide3Random);
}