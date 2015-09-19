console.log("You'll see this if buttons is in theory working.");

var s1 = Snap("#vol_buttons");


var buttonGradient = s1.gradient("l(0, 0, 0, 1)#2f3336-#d3b7ba:10-#b3b7ba:90-#2f3336");

var volUpButton = s1.rect(-0.015, 43.1, 1.2, 15.7, 1, 1).attr({
    fill: buttonGradient
});

var volDownButton = s1.rect(-0.015, 62.1, 1.2, 15.7, 1, 1).attr({
    fill: buttonGradient
});
 
