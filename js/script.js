    var s = Snap("#mysvg")

    var edgeGradient = s.gradient("l(0, 0, 0, 1)#68696e-#47484b"),
        edge = s.rect(0, 0, 100, 207.5, 14.64).attr({
            fill: edgeGradient
        });

    var group = s.group();
    group.append(s.rect(0, 0, 100, 207.5, 14.64).attr({fill: "white"}));

    var chargerCutout = s.rect(50 - (12 / 2), 207.5 - 0.4, 12, 1.25, 2.5).attr({fill: "black"}).appendTo(group);

    edge.attr({mask: group});

    /* 
    var edgeCorrectSize = s.rect(0, 0, 100, 207.5, 14.64).attr({
        stroke: "red",
        strokeWidth: 0.25,
        fill: "none"    
    }); */

    var squareTL = s.rect(0, 15.75, 1.3, 3).attr({
        fill: "rgba(0, 0, 0, 0.3)" 
    });

    /*
    var squareTLCorrectSize = s.rect(0, 15.75, 1.3, 3).attr({
        stroke: "red",
        strokeWidth: 0.25,
        fill: "none"
    });
    */

    
    var squareTR = s.rect(100 - 1.3, 15.75, 1.3, 3).attr({
        fill: "rgba(0, 0, 0, 0.3)" 
    });

    /*
    var squareTRCorrectSize = s.rect(100 - 1.3, 15.75, 1.3, 3).attr({
        stroke: "red",
        strokeWidth: 0.25,
        fill: "none"
    });
    */


    var squareBL = s.rect(0, 207.5 - 15.75 - 3, 1.3, 3).attr({
        fill: "rgba(0, 0, 0, 0.3)" 
    });

    /*
    var squareBLCorrectSize = s.rect(0, 207.5 - 15.75 - 3, 1.3, 3).attr({
        stroke: "red",
        strokeWidth: 0.25,
        fill: "none"
    });
    */

    var squareBR = s.rect(100 - 1.3, 207.5 - 15.75 - 3, 1.3, 3).attr({
        fill: "rgba(0, 0, 0, 0.3)" 
    });

    /*
    var squareBRCorrectSize = s.rect(100 - 1.3, 207.5 - 15.75 - 3, 1.3, 3).attr({
        stroke: "red",
        strokeWidth: 0.25,
        fill: "none"
    });
    */

    var faceFilter = s.filter(Snap.filter.shadow(0, 0, 1, "#fff", 1)),
        face = s.rect(1.3, 1.3, 97.4, 204.9, 13.32, 13.32).attr({
            class: "face",
            fill: "#080808",
            filter: faceFilter
        });

    /*  
    var faceCorrectSize = s.rect(1.3, 1.3, 97.4, 204.9, 13.32, 13.32).attr({
        stroke: "red", 
        strokeWidth: 0.25, 
        fill: "none"
    
        });
        */
    
    var glareGradient = s.gradient("l(0, 0, 1, 0.8)rgba(255, 255, 255, 0.18)-rgba(255, 255, 255, 0.09)"),
        glare = s.rect(2.1, 2.6, 95.8, 202.3, 12.096).attr({
            fill: glareGradient
        });

    /*
    var glareCorrectSize = s.rect(2.1, 2.6, 95.8, 202.3, 12.096).attr({
        stroke: "red",
        strokeWidth: 0.25,
        fill: "none"
    });
    */
    
    var horizontalFadeGradient = s.gradient("l(0, 0, 0, 1)rgba(0, 0, 0, 0)-rgba(0, 0, 0, 1):20-rgba(0, 0, 0, 0.8):80-rgba(0, 0, 0, 0)"),
        horizontalFade = s.rect(2.1, 1.3 + 1.3 + 2 + 20 + (158.3 / 2) - (118.01 / 2), 95.8, 118.01).attr({
            fill: horizontalFadeGradient 
    });

    /*
    var horizontalFadeCorrectSize = s.rect(2.1, 1.3 + 1.3 + 2 + 20 + (158.3 / 2) - (118.01 / 2), 95.8, 118.01).attr({
        stroke: "blue",
        strokeWidth: 0.25,
        fill: "none"
    });
    */

    var verticalFadeGradient = s.gradient("l(0, 0, 1, 0)rgba(0, 0, 0, 0)-rgba(0, 0, 0, 1):10-rgba(0, 0, 0, 0.8):90-rgba(0, 0, 0, 0)"),
        verticalFade = s.rect(2.1, 2.6, 95.8, 202.3, 12.096).attr({
            fill: verticalFadeGradient 
        });

    /*
    var verticalFadeCorrectSize = s.rect(2.1, 2.6, 95.8, 202.3, 12.096).attr({
        stroke: "blue",
        strokeWidth: 0.25,
        fill: "none"
    });
    */

    var bezel = s.rect(3.4, 4.6, 93.2, 198.3, 11.46).attr({
        fill: "#080808" 
    });

    /*
    var bezelCorrectSize = s.rect(3.4, 4.6, 93.2, 198.3, 11.46).attr({ 
        stroke: "red",
        strokeWidth: 0.25,
        fill: "none"
    });
    */

    var display = s.rect(6.2, 23.5, 87.6, 157).attr({
        fill: "#191919"
    });

    /*
    var displayCorrectSize = s.rect(1.3 + 0.8 + 1.3 + 2.6, 1.3 + 1.3 + 2 + 20, 88, 158.3).attr({
        stroke: "red",
        strokeWidth: 0.25,
        fill: "none"
    });
    */

    //var buttonOuter = s.circle(50, 190.85, 6.6).attr({
    var buttonOuter = s.circle(50, 194.2, 7.8).attr({
        fill: "#181818",
    });

    /*
    var buttonOuterCorrectSize = s.circle(50, 194.2, 7.8).attr({
        stroke: "red",
        strokeWidth: 0.25,
        fill: "none"
    });
    */

    var buttonMask = s.circle(50, 194.2, 7.8);
   
    var buttonGlareGradient = s.gradient("r(0.5, 0.5, 0.5)rgba(255, 255, 255, 0.35)-rgba(255, 255, 255, 0)");

    var buttonGlareR = s.circle(56, 191.85, 6.6).attr({
        fill: buttonGlareGradient,
    });

    var buttonGlareL = s.circle(43, 196.85, 6.6).attr({
        fill: buttonGlareGradient
    });

    var buttonGlareGroup = s.group(buttonGlareR, buttonGlareL).attr({
        clip: buttonMask
    });

    var buttonInner = s.circle(50, 194.2 , 6.9).attr({
        fill: "#080808"
    });

    /*
    var buttonInnerCorrectSize = s.circle(50, 194.2 , 6.9).attr({
        stroke: "red",
        strokeWidth: 0.25, 
        fill: "none"
    });
    */
    
    var cameraOuterGradient = s.gradient("r(0.75, 0.75, 0.65)#696969-#1f1f1f"),
        cameraOuter = s.circle(33.8, 12.875, 1.7).attr({
            fill: cameraOuterGradient,
        });

    /*
    var cameraOuterCorrectSize = s.circle(33.8, 12.875, 1.7).attr({
        stroke: "red",
        strokeWidth: 0.25,
        fill: "none"
    });
    */


    var cameraInnerGradient = s.gradient("r(0.25, 0.25, 0.6)#263B72-#0f141a"),
        cameraInner = s.circle(33.8, 12.875, 0.95).attr({
            fill: cameraInnerGradient
        });

    /*
    var cameraInnerCorrectSize = s.circle(33.8, 12.875, 0.95).attr({
        stroke: "red",
        strokeWidth: 0.25,
        fill: "none"
    });
    */

    var lensMask = s.circle(33.8, 12.875, 0.95).attr({
    });

    var blueGlare = s.circle(33.5, 11.5, 0.8).attr({
        fill: "#38508C" 
    });

    var whiteGlare = s.circle(32.9, 12.6, 0.225).attr({
        fill: "#6997BB"
    });

    var glareGroup = s.group(blueGlare, whiteGlare).attr({
        clip: lensMask
    });

    var sensor = s.circle(50, 1.3 + 1.3 + 2 + 1.3, 1.2).attr({
        fill: "rgba(255, 255, 255, 0.1)"
    });

    var speakerGradient = s.gradient("l(0, 0, 0, 1)#383838-#484848-#282828"),
        speaker = s.rect(1.3 + 0.8 + 1.3 + (93.2 / 2) - (15.5 / 2), 12.2, 15.5, 1.25, 0.75).attr({
        fill: speakerGradient
    });

    /*
    var speakerCorrectSize = s.rect(1.3 + 0.8 + 1.3 + (93.2 / 2) - (15.5 / 2), 12.2, 15.5, 1.25, 0.75).attr({
        stroke: "red",
        strokeWidth: 0.25, 
        fill: "none"
    });
    */

    var holes = s.circle(0.15, 0.15, 0.15).attr({
        fill: "#222"
    }).pattern(0, 0, 0.375, 0.375),
    speakerPattern = s.rect(1.3 + 0.8 + 1.3 + (93.2 / 2) - (15.5 / 2), 12.2, 15.5, 1.25, 0.75).attr({
        fill: holes
    });
