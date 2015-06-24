    var s = Snap("#mysvg")

    var edgeGradient = s.gradient("L(0, 0, 0, 100)rgba(104, 105, 110, 1)-rgba(71, 72, 75, 1)"),
        edge = s.rect(0, 0, 100, 203.7, 14.64).attr({
            class: "edge",
            fill: edgeGradient
        });

    var faceFilter = s.filter(Snap.filter.shadow(0, 0, 1, "#a3a5aa", 0.9)),
        face = s.rect(1.5, 1.5, 97, 200.85, 13.32, 13.32).attr({
            class: "face",
            fill: "#000",
            filter: faceFilter
        });
    
    var glareGradient = s.gradient("L(0, 0, 0, 100)rgba(255, 255, 255, 0.15)-rgba(255, 255, 255, 0.075)"),
        glare = s.rect(2.713, 3.1, 94.575, 197.5, 12.096).attr({
            fill: glareGradient
        });
    
    var horizontalFadeGradient = s.gradient("l(0, 0, 0, 1)rgba(0, 0, 0, 0)-rgba(0, 0, 0, 1):20-rgba(0, 0, 0, 0.8):80-rgba(0, 0, 0, 0)"),
        horizontalFade = s.rect(2.713, 42.8, 94.575, 118.01).attr({
            fill: horizontalFadeGradient 
        });

    var verticalFadeGradient = s.gradient("l(0, 0, 1, 0)rgba(0, 0, 0, 0)-rgba(0, 0, 0, 1):10-rgba(0, 0, 0, 0.8):90-rgba(0, 0, 0, 0)"),
        verticalFade = s.rect(2.713, 3.1, 94.575, 197.5, 12.096).attr({
            fill: verticalFadeGradient 
        });

    var bezel = s.rect(3.90, 4.67, 92.21, 194.37, 11.46).attr({
        fill: "#000" 
    });

    var display = s.rect(6.2, 23.8, 87.6, 156.4);

    display.attr({
        fill: "#191919",
    });

    var buttonInner = s.circle(50, 190.85, 5.8);

    buttonInner.attr({
        fill: "none",
        stroke: "#f33",
        strokeWidth: 0.25
    });

    var buttonOuter = s.circle(50, 190.85, 6.6);
    
    buttonOuter.attr({
        fill: "none",
        stroke: "#f33",
        strokeWidth: 0.25
    });

    var cameraOuterGradient = s.gradient("r(0.8, 0.8, 0.75)#5b5b5b-#1f1f1f"),
        cameraOuter = s.circle(36.125, 12.5, 1.7).attr({
            fill: cameraOuterGradient
        });


    var cameraInnerGradient = s.gradient("r(0.25, 0.25, 0.6)#365292-#4f3996:20-#0f141a"),
        cameraInner = s.circle(36.125, 12.5, 1).attr({
            fill: cameraInnerGradient
        });

    var speaker = s.rect(43.375, 12, 13.25, 1.25, 0.75);

    speaker.attr({
        fill: "none",
        stroke: "#f33",
        strokeWidth: 0.25
    });
