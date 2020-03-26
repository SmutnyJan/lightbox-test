let gallery;
let bigGallery;
let init = function() {
    let elements = document.getElementsByClassName("gallery");
    for(i = 0; i < elements.length; i++) {
        elements[i].addEventListener("click", funkce);
    }
    gallery = document.querySelectorAll(".gallery img");
}
let funkce = function(e) {
    e.preventDefault();
    //e.target.src = src velkého obrázku (v případě kliknutí na 02.jpg by to byl 02.jpg v images-big)
}
window.addEventListener("load", init);