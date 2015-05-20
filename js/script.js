$( document ).ready(function() {
    console.log("I'm ready!");

    var test = $( ".test" );
    var ui = $( ".ui" );

    test.on( "click", function() {
        console.log("Test has been clicked");
        ui.addClass( "out" );
    });

    var fuck = document.getElementById('fuck');

    var mc = new Hammer(fuck);

    mc.get('pan').set({ direction: Hammer.DIRECTION_ALL });

    mc.on("panleft panright panup pandown tap press", function(ev) {
        fuck.textContent = ev.type +" gesture detected.";
        console.log("stop touching me!"); 
    });

});
