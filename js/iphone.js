var s = Snap("#iphone")

var edgeWidth = 100;
var edgeHeight = 206;
var edgeRx = 15;
var edgeRy = 15;
var edgeX = 0;
var edgeY = 0;

var edgeGradient = s.gradient("l(0, 0, 0, 1)#45494C-#313538"),
    edge = s.rect(edgeX, edgeY, edgeWidth, edgeHeight, edgeRx, edgeRy).attr({
        fill: edgeGradient
    });

var group = s.group();
group.append(s.rect(edgeX, edgeY, edgeWidth, edgeHeight, edgeRx, edgeRy).attr({fill: "white"}));


var chargerCutout = s.rect(50 - (12 / 2), 206 - (0.8 / 2.25), 12, 0.8, 3).attr({fill: "black"}).appendTo(group);
var headphoneJack = s.rect(18, 206 - (0.8 / 2.25), 4.5, (0.8 / 2), 3).attr({fill: "black"}).appendTo(group);
var volUpCutout = s.rect(-(0.8 / 2), 43, 0.8, 15.9, 2).attr({fill: "black"}).appendTo(group);
var volDownCutout = s.rect(-(0.8 / 2), 62, 0.8, 15.9, 2).attr({fill: "black"}).appendTo(group);
var powerCutout = s.rect(100 - (0.8 / 2), 43, 0.8, 15.9, 2).attr({fill: "black"}).appendTo(group);

edge.attr({mask: group});

var edgeGlareDiffX = 1;
var edgeGlareDiffY = 0.75;
var edgeGlareWidth = edgeWidth - edgeGlareDiffX;
var edgeGlareHeight = edgeHeight - edgeGlareDiffY;
var edgeGlareRx = 14.7;
var edgeGlareRy = 14.7;
var edgeGlareX = (edgeWidth - edgeGlareWidth) / 2;
var edgeGlareY = (edgeHeight - edgeGlareHeight) / 2;

var edgeGlareBlur = s.filter(Snap.filter.blur(0.25, 0.25)), 
    edgeGlare = s.rect(edgeGlareX, edgeGlareY, edgeGlareWidth, edgeGlareHeight, edgeGlareRx, edgeGlareRy).attr({
    fill: "rgba(255, 255, 255, 0.65)",
    filter: edgeGlareBlur
});

var stripeHeight = 3;
var stripeOffset = 15.8;
var stripeColor = "rgba(0, 0, 0, 0.2)";

var stripeTop = s.rect(0, stripeOffset, edgeWidth, stripeHeight).attr({
    fill: stripeColor
});

var stripeBottom = s.rect(0, edgeHeight - 3 - 15.8, edgeWidth,  3).attr({
    fill: stripeColor 
});

var faceDiffX = 3.25;
var faceDiffY = 2.75;
var faceWidth = edgeWidth - faceDiffX;
var faceHeight = edgeHeight - faceDiffY;
var faceRx = 13.75;
var faceRy = 13.75;
var faceX = (edgeWidth - faceWidth) / 2;
var faceY = (edgeHeight - faceHeight) / 2;

var face = s.rect(faceX, faceY, faceWidth, faceHeight, faceRx, faceRy).attr({
        fill: "#080808"
        
    });

var faceOutlineDiffX = 1;
var faceOutlineDiffY = 1;
var faceOutlineWidth = faceWidth - faceOutlineDiffX;
var faceOutlineHeight = faceHeight - faceOutlineDiffY;
var faceOutlineRx = 13.75;
var faceOutlineRy = 13.75;
var faceOutlineX = (faceDiffX / 2) + ((faceWidth - faceOutlineWidth) / 2);
var faceOutlineY = (faceDiffY / 2) + ((faceHeight - faceOutlineHeight) / 2);

var faceOutline = s.rect(faceOutlineX, faceOutlineY, faceOutlineWidth, faceOutlineHeight, faceOutlineRx, faceOutlineRy).attr({
    fill: "none", 
    stroke: "rgba(255, 255, 255, 0.125)", 
    strokeWidth: 0.2
});

var glareDiffX = 2;
var glareDiffY = 4;
var glareWidth = faceWidth - glareDiffX;
var glareHeight = faceHeight - glareDiffY;
var glareRx = 12;
var glareRy = 12;
var glareX = faceX + ((faceWidth - glareWidth) / 2);
var glareY = faceY + ((faceHeight - glareHeight) / 2);

var glareGradient = s.gradient("l(0, 0, 1, 0.8)rgba(255, 255, 255, 0.18)-rgba(255, 255, 255, 0.09)"),
    glare = s.rect(glareX, glareY, glareWidth, glareHeight, glareRx, glareRy).attr({
        fill: glareGradient
    });

var horFadeDiffX = 0;
var horFadeDiffY = 80;
var horFadeWidth = glareWidth - horFadeDiffX;
var horFadeHeight = glareHeight - horFadeDiffY;
var horFadeX = glareX + ((glareWidth - horFadeWidth) / 2);
var horFadeY = glareY + ((glareHeight - horFadeHeight) / 2);
    
var horFadeGradient = s.gradient("l(0, 0, 0, 1)rgba(8, 8, 8, 0)-rgba(8, 8, 8, 1):20-rgba(8, 8, 8, 0.8):80-rgba(8, 8, 8, 0)"),
    horFade = s.rect(horFadeX, horFadeY, horFadeWidth, horFadeHeight).attr({
        fill: horFadeGradient 
});

var vertFadeDiffX = 0;
var vertFadeDiffY = 0;
var vertFadeWidth = glareWidth - vertFadeDiffX;
var vertFadeHeight = glareHeight - vertFadeDiffY;
var vertFadeRx = glareRx;
var vertFadeRy = glareRy;
var vertFadeX = glareX + ((glareWidth - vertFadeWidth) / 2);
var vertFadeY = glareY + ((glareHeight - vertFadeHeight) / 2);

var vertFadeGradient = s.gradient("l(0, 0, 1, 0)rgba(8, 8, 8, 0)-rgba(8, 8, 8, 1):10-rgba(8, 8, 8, 0.8):90-rgba(8, 8, 8, 0)"),
    vertFade = s.rect(vertFadeX, vertFadeY, vertFadeWidth, vertFadeHeight, vertFadeRx, vertFadeRy).attr({
        fill: vertFadeGradient 
    });

var bezelDiffX = 2.25;
var bezelDiffY = 2;
var bezelWidth = glareWidth - bezelDiffX;
var bezelHeight = glareHeight - bezelDiffY;
var bezelRx = 11.5;
var bezelRy = 13.25;
var bezelX = glareX + ((glareWidth - bezelWidth) / 2);
var bezelY = glareY + ((glareHeight - bezelHeight) / 2);

var bezel = s.rect(bezelX, bezelY, bezelWidth, bezelHeight, bezelRx, bezelRy).attr({
    fill: "#080808" 
});

var displayDiffX = 4.5;
var displayDiffY = 40.75;
var displayWidth = bezelWidth - displayDiffX;
var displayHeight = bezelHeight - displayDiffY;
var displayRx = 0;
var displayRy = 0;
var displayX = bezelX + ((bezelWidth - displayWidth) / 2);
var displayY = bezelY + ((bezelHeight - displayHeight) / 2);

var display = s.rect(displayX, displayY, displayWidth, displayHeight).attr({
    fill: "#222", 
    stroke: "#0e0e0e", 
    strokeWidth: 0.5
        
});

var buttonX = (faceDiffX / 2 ) + (faceWidth / 2);
var buttonY = ((faceDiffY / 2) + faceHeight) - ((faceHeight - displayHeight) / 4) - 0.25;
var buttonOuterR = 7.8;

var buttonOuter = s.circle(buttonX, buttonY, buttonOuterR).attr({
    fill: "#181818",
    //fill: "none"
});

var buttonMask = s.circle(buttonX, buttonY, buttonOuterR);

var buttonGlareGradient = s.gradient("r(0.5, 0.58, 0.5)rgba(255, 255, 255, 0.45)-rgba(255, 255, 255, 0)");

var buttonGlareR = s.circle(56.55, 191.5, 8.5).attr({
    fill: buttonGlareGradient
    //fill: "none"
    //fill: "red"
});

var buttonGlareL = s.circle(43, 196.85, 7.5).attr({
    fill: buttonGlareGradient
    //fill: "red"
});

var buttonGlareGroup = s.group(buttonGlareR, buttonGlareL).attr({
    clip: buttonMask
});

var buttonInnerR = 7;

var buttonInner = s.circle(buttonX, buttonY, buttonInnerR).attr({
    fill: "#080808"
    //fill: "none"
});

var cameraXOffset = -16;
var cameraX = (faceDiffX / 2) + (faceWidth / 2) + cameraXOffset;
var cameraY = (faceDiffY / 2) + ((faceHeight - displayHeight) / 4);
var cameraOuterR = 1.7;

var cameraOuterGradient = s.gradient("r(0.75, 0.75, 0.65)#797979-#1f1f1f"),
    cameraOuter = s.circle(cameraX, cameraY, cameraOuterR).attr({
        fill: cameraOuterGradient
    });


var lensShadowBlur = s.filter(Snap.filter.blur(0.05, 0.05)),
    lensShadow = s.circle(cameraX - 0.05, cameraY - 0.05, 1.1).attr({
    fill: "rgba(0, 0, 0, 0.6)",
    filter: lensShadowBlur
});

var cameraInnerR = 0.9;

var cameraInnerGradient = s.gradient("r(0.6, 0.6, 0.8)#0f141a-#263b72"),
    cameraInner = s.circle(cameraX, cameraY, cameraInnerR).attr({
        fill: "#0f141a"
    });

var lensMask = s.circle(cameraX, cameraY, cameraInnerR).attr({
});


var lensGlareBlur = s.filter(Snap.filter.blur(0.09, 0.09)), 
    bigGlare = s.circle(cameraX - 0.5, cameraY - 1.3, 1).attr({
    //fill: "#38508C" 
    fill: "rgba(94, 147, 212, 0.7)", 
    filter: lensGlareBlur
});

var bigGlare1 = s.circle(cameraX + 0.5, cameraY + 1.3, 1).attr({
    fill: "rgba(94, 147, 212, 0.5)", 
    filter: lensGlareBlur
});

var smallGlare = s.circle(cameraX - 0.7, cameraY + 0.25, 0.25).attr({
    fill: "rgba(94, 147, 212, 1)", 
    filter: lensGlareBlur
});

var smallGlare1 = s.circle(cameraX + 0.7, cameraY - 0.25, 0.25).attr({
    fill: "rgba(94, 147, 212, 0.8)", 
    filter: lensGlareBlur
});

var glareGroup = s.group(bigGlare, bigGlare1,  smallGlare, smallGlare1).attr({
    clip: lensMask
});

var sensorR = 1.25;
var sensorYOffset = -6.75;
var sensorX = (faceDiffX / 2) + (faceWidth / 2);
var sensorY = (faceDiffY / 2) + ((faceHeight - displayHeight) / 4) + sensorYOffset; 

var sensor = s.circle(sensorX, sensorY, sensorR).attr({
    fill: "rgba(255, 255, 255, 0.1)"
});

var speakerWidth = 16;
var speakerHeight = 1.6;
var speakerX = (faceDiffX / 2) + (faceWidth / 2) - (speakerWidth / 2);
var speakerY = (faceDiffY / 2) + ((faceHeight - displayHeight) / 4) - (speakerHeight / 2);

var speakerGradient = s.gradient("l(0, 0, 0, 1)#383838-#484848-#282828"),
    speaker = s.rect(speakerX, speakerY, speakerWidth, speakerHeight, 0.75).attr({
    fill: speakerGradient
});

var holes = s.circle(0.15, 0.1, 0.15).attr({
    fill: "#222"
}).pattern(0, 0, 0.4, 0.4),
speakerPattern = s.rect(speakerX, speakerY, speakerWidth, speakerHeight, 0.75).attr({
    fill: holes
});

var s1 = Snap("#vol_buttons");


var buttonGradient = s1.gradient("l(0, 0, 0, 1)#2f3336-#d3b7ba:10-#b3b7ba:90-#2f3336");

var volUpButton = s1.rect(-0.015, 43.1, 1.2, 15.7, 1, 1).attr({
    fill: buttonGradient
});

var volDownButton = s1.rect(-0.015, 62.1, 1.2, 15.7, 1, 1).attr({
    fill: buttonGradient
});

var s2 = Snap("#power_button");

var powerButton = s2.rect(98.812, 43.1, 1.2, 15.7, 1, 1).attr({
    fill: buttonGradient                                                                                                                            
});
