let thumb = document.querySelector(".thumb"),
    themeNum = document.querySelectorAll(".themeNum"),
    screen = document.querySelector(".screen"),
    solve = document.querySelector(".solve"),
    reset = document.querySelector(".reset"),
    del = document.querySelector(".del"),
    num = document.querySelectorAll(".num");

// ////////////// THEME
let root = document.querySelector(":root");
originalColor = () => {
    for (let j = 0; j < num.length; j++) {
        num[j].style.color = "#444b5a";
        solve.style.color = "#ffffff";
    }
};

originalColor();

newColor = (colorCodes) => {
    let colorName = [
        "mainBg",
        "keypadBg",
        "inputBg",
        "key",
        "keyShadow",
        "keySolve",
        "keySolveShadow",
        "keyNum",
        "keyNumShadow",
        "text",
    ];
    for (let j = 0; j < colorName.length; j++) {
        root.style.setProperty(`--` + colorName[j], colorCodes[j]);
    }
};

// THEME 1
themeNum[0].onclick = () => {
    thumb.className = `thumb theme1`;
    let colorCodes = [
        "#3a4764",
        "#232c43",
        "#182034",
        "#637097",
        "#404e72",
        "#d03f2f",
        "#93261a",
        "#eae3dc",
        "#b4a597",
        "#ffffff",
    ];
    newColor(colorCodes);
    originalColor();
};

// THEME 2
themeNum[1].onclick = () => {
    thumb.className = `thumb theme2`;
    let colorCodes = [
        "#e6e6e6",
        "#d1cccc",
        "#ededed",
        "#377f86",
        "#1b5f65",
        "#ca5502",
        "#893901",
        "#e5e4e1",
        "#a69d91",
        "#35352c",
    ];
    newColor(colorCodes);
    for (let j = 0; j < num.length; j++) {
        num[j].style.color = "#35352c";
    }
    originalColor();
};

// THEME 3
themeNum[2].onclick = () => {
    thumb.className = `thumb theme3`;
    let colorCodes = [
        "#160628",
        "#1d0934",
        "#1d0934",
        "#58077d",
        "#bc15f4",
        "#00e0d1",
        "#6cf9f2",
        "#341c4f",
        "#871c9c",
        "#ffe53d",
    ];
    newColor(colorCodes);
    for (let j = 0; j < num.length; j++) {
        num[j].style.color = "#ffe53d";
        solve.style.color = "#1b2428";
    }
};

// ////////////// CALCULATOR
noVal = () => {
    screen.value = "";
};

// reset
reset.addEventListener("click", noVal);

// del
del.onclick = () => {
    screen.value = screen.value.slice(0, -1);
};

// ////////////// CALCULATIONS
for (let i = 0; i < num.length; i++) {
    // input
    num[i].onclick = () => {
        screen.value += num[i].innerHTML;

        doubleSign = [
            "x/",
            "xx",
            "x+",
            "x-",
            "//",
            "/x",
            "/+",
            "/-",
            "+/",
            "+x",
            "++",
            "+-",
            "-/",
            "-x",
            "-+",
            "--",
        ];

        correctSign = [
            "/",
            "x",
            "+",
            "-",
            "/",
            "x",
            "+",
            "-",
            "/",
            "x",
            "+",
            "-",
            "/",
            "x",
            "+",
            "-",
        ];

        for (let j = 0; j < doubleSign.length; j++) {
            screen.value = screen.value.replaceAll(doubleSign[j], correctSign[j]);
        }
    };

    // solution
    solve.onclick = () => {
        wrongVal = ["/", "x", "+", "-", "."];
        if (screen.value == wrongVal[i]) {
            noVal();
        }

        replacement = screen.value.replaceAll("x", "*");
        replacement = replacement.replaceAll(",", "");
        screen.value = eval(replacement).toLocaleString();
    };
}