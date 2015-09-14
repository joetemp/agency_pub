console.log("You'll see this if buttons is in theory working.");

var s1 = Snap("#vol_buttons");

var volUpButton = s1.rect(-0.015, 43.2, 1.2, 15.5, 1, 1).attr({
    fill: "red"
});

var volDownButton = s1.rect(-0.015, 62.2, 1.2, 15.5, 1, 1).attr({
    fill: "red"
});
 
