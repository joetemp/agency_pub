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
    
    var testG = s.gradient("l(0, 0, 0, 1)rgba(0, 0, 0, 0)-rgba(0, 0, 0, 1):20-rgba(0, 0, 0, 0.8):80-rgba(0, 0, 0, 0)");
    var horizontalFade = s.rect(2.713, 42.8, 94.575, 118.01);

    horizontalFade.attr({
        fill: testG,
    });

    var verticalFade = s.rect(2.713, 3.1, 94.575, 197.5, 12.096)

    verticalFade.attr({
        fill: "none",
    });

    var bezel = s.rect(3.90, 4.67, 92.21, 194.37, 11.46) 

    bezel.attr({
        fill: "#000",
    });

    var display = s.rect(6.2, 23.8, 87.6, 156.4);

    display.attr({
        fill: "none",
        stroke: "#f33",
        strokeWidth: 0.25
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

    var cameraOuter = s.circle(36.125, 12.5, 1.7);

    cameraOuter.attr({
        fill: "none",
        stroke: "#f33",
        strokeWidth: 0.25
    });

    var cameraInner = s.circle(36.125, 12.5, 1);

    cameraInner.attr({
        fill: "none",
        stroke: "#f33",
        strokeWidth: 0.25
    });

    var speaker = s.rect(43.375, 12, 13.25, 1.25, 0.75);

    speaker.attr({
        fill: "none",
        stroke: "#f33",
        strokeWidth: 0.25
    });
