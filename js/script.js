    var s = Snap("#mysvg")

    var edgeWidth = 100;
    var edgeHeight = 206;
    var edgeRx = 15;
    var edgeRy = 15;
    var edgeX = 0;
    var edgeY = 0;

    var edgeGradient = s.gradient("l(0, 0, 0, 1)#68696e-#47484b"),
        edge = s.rect(edgeX, edgeY, edgeWidth, edgeHeight, edgeRx, edgeRy).attr({
            //fill: edgeGradient
            fill: "none"
        });

    var group = s.group();
    group.append(s.rect(edgeX, edgeY, edgeWidth, edgeHeight, edgeRx, edgeRy).attr({fill: "white"}));

    var chargerCutout = s.rect(50 - (12 / 2), 207.5 - 0.4, 12, 1.25, 2.5).attr({fill: "black"}).appendTo(group);

    edge.attr({mask: group});

    var squareTL = s.rect(0, 15.75, 1.3, 3).attr({
        //fill: "rgba(0, 0, 0, 0.3)" 
        fill: "none"
    });
    
    var squareTR = s.rect(100 - 1.3, 15.75, 1.3, 3).attr({
        //fill: "rgba(0, 0, 0, 0.3)" 
        fill: "none"
    });

    var squareBL = s.rect(0, 207.5 - 15.75 - 3, 1.3, 3).attr({
        //fill: "rgba(0, 0, 0, 0.3)" 
        fill: "none"
    });

    var squareBR = s.rect(100 - 1.3, 207.5 - 15.75 - 3, 1.3, 3).attr({
        //fill: "rgba(0, 0, 0, 0.3)" 
        fill: "none"
    });

    var faceDiffX = 3.25;
    var faceDiffY = 2.75;
    var faceWidth = edgeWidth - faceDiffX;
    var faceHeight = edgeHeight - faceDiffY;
    var faceRx = 13.75;
    var faceRy = 13.75;
    var faceX = (edgeWidth - faceWidth) / 2;
    var faceY = (edgeHeight - faceHeight) / 2;

    var faceFilter = s.filter(Snap.filter.shadow(0, 0, 1, "#fff", 1)),
        face = s.rect(faceX, faceY, faceWidth, faceHeight, faceRx, faceRy).attr({
            //fill: "#080808",
            //filter: faceFilter
            fill: "none"
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
            //fill: glareGradient
            fill: "none"
        });
    
    var horFadeDiffX = 0;
    var horFadeDiffY = 80;
    var horFadeWidth = glareWidth - horFadeDiffX;
    var horFadeHeight = glareHeight - horFadeDiffY;
    var horFadeX = glareX + ((glareWidth - horFadeWidth) / 2);
    var horFadeY = glareY + ((glareHeight - horFadeHeight) / 2);
        
    var horFadeGradient = s.gradient("l(0, 0, 0, 1)rgba(0, 0, 0, 0)-rgba(0, 0, 0, 1):20-rgba(0, 0, 0, 0.8):80-rgba(0, 0, 0, 0)"),
        horFade = s.rect(horFadeX, horFadeY, horFadeWidth, horFadeHeight).attr({
            //fill: horizontalFadeGradient 
            fill: "none"
    });

    var vertFadeDiffX = 0;
    var vertFadeDiffY = 0;
    var vertFadeWidth = glareWidth - vertFadeDiffX;
    var vertFadeHeight = glareHeight - vertFadeDiffY;
    var vertFadeRx = glareRx;
    var vertFadeRy = glareRy;
    var vertFadeX = glareX + ((glareWidth - vertFadeWidth) / 2);
    var vertFadeY = glareY + ((glareHeight - vertFadeHeight) / 2);

    var verticalFadeGradient = s.gradient("l(0, 0, 1, 0)rgba(0, 0, 0, 0)-rgba(0, 0, 0, 1):10-rgba(0, 0, 0, 0.8):90-rgba(0, 0, 0, 0)"),
        verticalFade = s.rect(vertFadeX, vertFadeY, vertFadeWidth, vertFadeHeight, vertFadeRx, vertFadeRy).attr({
            //fill: verticalFadeGradient 
            fill: "none"
        });

    var bezel = s.rect(3.4, 4.6, 93.2, 198.3, 11.46).attr({
        //fill: "#080808" 
        fill: "none"
    });

    var display = s.rect(6.2, 23.5, 87.6, 157).attr({
        //fill: "#191919"
        fill: "none"
    });

    var buttonOuter = s.circle(50, 194.2, 7.8).attr({
        //fill: "#181818",
        fill: "none"
    });

    var buttonMask = s.circle(50, 194.2, 7.8);
   
    var buttonGlareGradient = s.gradient("r(0.5, 0.5, 0.5)rgba(255, 255, 255, 0.35)-rgba(255, 255, 255, 0)");

    var buttonGlareR = s.circle(56, 191.85, 6.6).attr({
        //fill: buttonGlareGradient,
        fill: "none"
    });

    var buttonGlareL = s.circle(43, 196.85, 6.6).attr({
        //fill: buttonGlareGradient
        fill: "none"
    });

    var buttonGlareGroup = s.group(buttonGlareR, buttonGlareL).attr({
        clip: buttonMask
    });

    var buttonInner = s.circle(50, 194.2 , 7).attr({
        //fill: "#080808"
        fill: "none"
    });
    
    var cameraOuterGradient = s.gradient("r(0.75, 0.75, 0.65)#696969-#1f1f1f"),
        cameraOuter = s.circle(33.8, 12.875, 1.7).attr({
            //fill: cameraOuterGradient,
            fill: "none"
        });

    var cameraInnerGradient = s.gradient("r(0.25, 0.25, 0.6)#263B72-#0f141a"),
        cameraInner = s.circle(33.8, 12.875, 0.95).attr({
            //fill: cameraInnerGradient
            fill: "none"
        });

    var lensMask = s.circle(33.8, 12.875, 0.95).attr({
    });

    var blueGlare = s.circle(33.5, 11.5, 0.8).attr({
        //fill: "#38508C" 
        fill: "none"
    });

    var whiteGlare = s.circle(32.9, 12.6, 0.225).attr({
        //fill: "#6997BB"
        fill: "none"
    });

    var glareGroup = s.group(blueGlare, whiteGlare).attr({
        clip: lensMask
    });

    var sensor = s.circle(50, 1.3 + 1.3 + 2 + 1.3, 1.2).attr({
        //fill: "rgba(255, 255, 255, 0.1)"
        fill: "none"
    });

    var speakerGradient = s.gradient("l(0, 0, 0, 1)#383838-#484848-#282828"),
        speaker = s.rect(1.3 + 0.8 + 1.3 + (93.2 / 2) - (15.5 / 2), 12.2, 15.5, 1.4, 0.75).attr({
        //fill: speakerGradient
        fill: "none"
    });

    var holes = s.circle(0.15, 0.1, 0.15).attr({
        fill: "#222"
    }).pattern(0, 0, 0.375, 0.375),
    speakerPattern = s.rect(1.3 + 0.8 + 1.3 + (93.2 / 2) - (15.5 / 2), 12.2, 15.5, 1.4, 0.75).attr({
        //fill: holes
        fill: "none"
    });
