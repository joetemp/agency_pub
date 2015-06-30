    var s = Snap("#mysvg")

    var edgeGradient = s.gradient("l(0, 0, 0, 1)#68696e-#47484b"),
        edge = s.rect(0, 0, 102, 204, 14.64).attr({
            class: "edge",
            // UNCOMMENT!
            //fill: edgeGradient
            fill: "none"
        });

    var group = s.group();
    group.append(s.rect(0, 0, 100, 204, 14.64).attr({fill: "white"}));

    var circle = s.rect(44, 203.6, 12, 1.25, 2.5).attr({fill: "black"}).appendTo(group);

    edge.attr({mask: group});

    var edgeCorrectSize = s.rect(0, 0, 100, 207.5, 14.64).attr({
        stroke: "red",
        strokeWidth: 0.25,
        fill: "none"    
    });

    var squareTL = s.rect(0, 14, 3, 3).attr({
        //fill: "rgba(0, 0, 0, 0.5)" 
        fill: "none"
    });

    
    var squareTR = s.rect(97, 14, 3, 3).attr({
        //fill: "rgba(0, 0, 0, 0.5)" 
        fill: "none"
    });


    var squareBL = s.rect(0, 186.7, 3, 3).attr({
        //fill: "rgba(0, 0, 0, 0.5)" 
        fill: "none"
    });

    var squareBR = s.rect(97, 186.7, 3, 3).attr({
        //fill: "rgba(0, 0, 0, 0.5)" 
        fill: "none"
    });


    var faceFilter = s.filter(Snap.filter.shadow(0, 0, 1, "#fff", 1)),
        face = s.rect(1.5, 1.5, 97, 201, 13.32, 13.32).attr({
            class: "face",
            //UNCOMMENT!
            //fill: "#000",
            fill: "none"
            // UNCOMMENT!
            //filter: faceFilter
        });

    var faceCorrectSize = s.rect(1.3, 1.3, 97.4, 204.8, 13.32, 13.32).attr({
        stroke: "red", 
        strokeWidth: 0.25, 
        fill: "none"
    
    });
    
    var glareGradient = s.gradient("l(0, 0, 1, 0.8)rgba(255, 255, 255, 0.18)-rgba(255, 255, 255, 0.09)"),
        glare = s.rect(2.713, 3.1, 94.575, 197.8, 12.096).attr({
            // UNCOMMENT!
            //fill: glareGradient
            fill: "none"
        });
    
    var horizontalFadeGradient = s.gradient("l(0, 0, 0, 1)rgba(0, 0, 0, 0)-rgba(0, 0, 0, 1):20-rgba(0, 0, 0, 0.8):80-rgba(0, 0, 0, 0)"),
        horizontalFade = s.rect(2.713, 43.1, 94.575, 118.01).attr({
            // UNCOMMENT!
            //fill: horizontalFadeGradient 
            fill: "none"
        });

    var verticalFadeGradient = s.gradient("l(0, 0, 1, 0)rgba(0, 0, 0, 0)-rgba(0, 0, 0, 1):10-rgba(0, 0, 0, 0.8):90-rgba(0, 0, 0, 0)"),
        verticalFade = s.rect(2.713, 3.1, 94.575, 197.8, 12.096).attr({
            // UNCOMMENT!
            //fill: verticalFadeGradient 
            fill: "none"
        });

    var bezel = s.rect(3.90, 4.67, 92.21, 194.67, 11.46).attr({
        // UNCOMMENT!
        //fill: "#000" 
        fill: "none"
    });

    var display = s.rect(6.2, 23.5, 87.6, 157);

    display.attr({
        // UNCOMMENT!
        //fill: "#191919",
        fill: "none"
    });

    //var buttonOuter = s.circle(50, 190.85, 6.6).attr({
    var buttonOuter = s.circle(50, 190.85, 6.6).attr({
        // UNCOMMENT!
        //fill: "#111",
        fill: "none"
    });

    var buttonMask = s.circle(50, 190.85, 6.6);
   
    var buttonGlareGradient = s.gradient("r(0.5, 0.5, 0.5)rgba(255, 255, 255, 0.35)-rgba(255, 255, 255, 0)");

    var buttonGlareR = s.circle(56, 191.85, 6.6).attr({
        //UNCOMMENT!
        //fill: buttonGlareGradient,
        fill: "none"
    });

    var buttonGlareL = s.circle(43, 196.85, 6.6).attr({
        //UNCOMMENT!
        //fill: buttonGlareGradient
        fill: "none"
    });

    var buttonGlareGroup = s.group(buttonGlareR, buttonGlareL).attr({
        clip: buttonMask
    });

    var buttonInner = s.circle(50, 190.85, 5.9);

    buttonInner.attr({
        //UNCOMMENT!
        //fill: "#000",
        fill: "none"
    });
    
    var cameraOuterGradient = s.gradient("r(0.75, 0.75, 0.65)#696969-#1f1f1f"),
        cameraOuter = s.circle(36.125, 12.5, 1.5).attr({
            //UNCOMMENT!
            //fill: cameraOuterGradient,
            fill: "none"
        });


    var cameraInnerGradient = s.gradient("r(0.25, 0.25, 0.6)#263B72-#0f141a"),
        cameraInner = s.circle(36.125, 12.5, 0.8).attr({
            //UNCOMMENT!
            //fill: cameraInnerGradient
            fill: "none"
        });

    var lensMask = s.circle(36.125, 12.5, 0.8).attr({
    });

    var blueGlare = s.circle(35.65, 11.5, 0.8).attr({
        //UNCOMMENT!
        //fill: "#38508C" 
        fill: "none"
    });

    var whiteGlare = s.circle(35.53, 12.6, 0.225).attr({
        //UNCOMMENT!
        //fill: "#6997BB"
        fill: "none"
    });

    var glareGroup = s.group(blueGlare, whiteGlare).attr({
        clip: lensMask
    });


    var speakerGradient = s.gradient("l(0, 0, 0, 1)#383838-#484848-#282828"),
        speaker = s.rect(43.375, 12, 13.25, 1.25, 0.75).attr({
        //UNCOMMENT!
        //fill: speakerGradient
        fill: "none"
    });

    var holes = s.circle(0.15, 0.15, 0.15).attr({
        fill: "#222"
    }).pattern(0, 0, 0.375, 0.375),
    speakerPattern = s.rect(43.375, 12, 13.25, 1.25, 0.75).attr({
        //UNCOMMENT!
        //fill: holes
        fill: "none"
    });
