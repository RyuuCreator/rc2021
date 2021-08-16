/* FILTER SELECTION */

filterSelection("all");
function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("filterDiv");
    if (c == "all") c = "";
    for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
    }
}

function w3AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
    }
}

function w3RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
        arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
    }
    element.className = arr1.join(" ");
}

/* MENU EFFET ACTIVE */

$(document).ready(function() {
    $('.search-list').click(function() {
        alert( "Handler for .click() called." );
        $('.active').removeClass("active");
        $(this).addClass("active");
    });
    /* AJAX Load Content With No Page Refresh */
    // Set trigger and container variables
    var trigger = $('#nav a'),
        container = $('#content');
    
    // Fire on click
    trigger.on('click', function() {
    // Set $this for re-use. Set target from data attribute
        var $this = $(this),
            target = $this.data('target');       
        
        // Load target page into container
        container.load(target + '.php');
        
        // Stop normal link behavior
        return false;
    });
});

/* GALLERY ART & CREA */

jQuery(function($) {
    $(document).on('click', '.lightboxgallery-gallery-item', function(event) {
    event.preventDefault();
        $(this).lightboxgallery({
            showCounter: true,
            showTitle: true,
            showDescription: true
        });
    });
});

/* bouton "Vers le haut" */

jQuery(function(){
    $(function () {
        $(window).scroll(function () { //Fonction appelée quand on descend la page
            if ($(this).scrollTop() > 200 ) {  // Quand on est à 200pixels du haut de page,
                $('#scrollUp').css('right','10px'); // Replace à 10pixels de la droite l'image
            } else { 
                $('#scrollUp').removeAttr( 'style' ); // Enlève les attributs CSS affectés par javascript
            }
        });
    });
});
 