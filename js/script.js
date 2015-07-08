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
            fill: "red"
        });

    var group = s.group();
    group.append(s.rect(edgeX, edgeY, edgeWidth, edgeHeight, edgeRx, edgeRy).attr({fill: "white"}));

    var chargerCutout = s.rect(50 - (12 / 2), 207.5 - 0.4, 12, 1.25, 2.5).attr({fill: "black"}).appendTo(group);

    edge.attr({mask: group});

    var stripeTop = s.rect(0, 15.8, edgeWidth, 3).attr({
        fill: "purple"
    });

    var stripeBottom = s.rect(0, edgeHeight - 3 - 15.8, edgeWidth,  3).attr({
        fill: "purple" 
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
            //fill: horFadeGradient 
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

    var vertFadeGradient = s.gradient("l(0, 0, 1, 0)rgba(0, 0, 0, 0)-rgba(0, 0, 0, 1):10-rgba(0, 0, 0, 0.8):90-rgba(0, 0, 0, 0)"),
        vertFade = s.rect(vertFadeX, vertFadeY, vertFadeWidth, vertFadeHeight, vertFadeRx, vertFadeRy).attr({
            //fill: vertFadeGradient 
            fill: "none"
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
        //fill: "#080808" 
        fill: "none"
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
        //fill: "#191919"
        fill: "none",
        stroke: "none", 
        strokeWidth: 0.5
            
    });

    var buttonX = (faceDiffX / 2 ) + (faceWidth / 2);
    var buttonY = ((faceDiffY / 2) + faceHeight) - ((faceHeight - displayHeight) / 4) - 0.25;
    var buttonOuterR = 7.8;

    var buttonOuter = s.circle(buttonX, buttonY, buttonOuterR).attr({
        //fill: "#181818",
        fill: "none"
    });

    var buttonMask = s.circle(buttonX, buttonY, buttonOuterR);
   
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

    var buttonInnerR = 7;

    var buttonInner = s.circle(buttonX, buttonY, buttonInnerR).attr({
        //fill: "#080808"
        fill: "none"
    });

    var cameraXOffset = -16;
    var cameraX = (faceDiffX / 2) + (faceWidth / 2) + cameraXOffset;
    var cameraY = (faceDiffY / 2) + ((faceHeight - displayHeight) / 4);
    var cameraOuterR = 1.7;
    
    var cameraOuterGradient = s.gradient("r(0.75, 0.75, 0.65)#696969-#1f1f1f"),
        cameraOuter = s.circle(cameraX, cameraY, cameraOuterR).attr({
            //fill: cameraOuterGradient,
            fill: "red"
        });

    var cameraInnerR = 1;

    var cameraInnerGradient = s.gradient("r(0.25, 0.25, 0.6)#263B72-#0f141a"),
        cameraInner = s.circle(cameraX, cameraY, cameraInnerR).attr({
            //fill: cameraInnerGradient
            fill: "yellow"
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

    var sensorR = 1.25;
    var sensorYOffset = -6.75;
    var sensorX = (faceDiffX / 2) + (faceWidth / 2);
    var sensorY = (faceDiffY / 2) + ((faceHeight - displayHeight) / 4) + sensorYOffset; 

    var sensor = s.circle(sensorX, sensorY, sensorR).attr({
        //fill: "rgba(255, 255, 255, 0.1)"
        fill: "blue"
    });

    var speakerWidth = 16;
    var speakerHeight = 1.6;
    var speakerX = (faceDiffX / 2) + (faceWidth / 2) - (speakerWidth / 2);
    var speakerY = (faceDiffY / 2) + ((faceHeight - displayHeight) / 4) - (speakerHeight / 2);

    var speakerGradient = s.gradient("l(0, 0, 0, 1)#383838-#484848-#282828"),
        speaker = s.rect(speakerX, speakerY, speakerWidth, speakerHeight, 0.75).attr({
        //fill: speakerGradient
        fill: "red"
    });

    var holes = s.circle(0.15, 0.1, 0.15).attr({
        fill: "#222"
    }).pattern(0, 0, 0.375, 0.375),
    speakerPattern = s.rect(1.3 + 0.8 + 1.3 + (93.2 / 2) - (15.5 / 2), 12.2, 15.5, 1.4, 0.75).attr({
        //fill: holes
        fill: "none"
    });
