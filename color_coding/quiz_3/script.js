const rows = 8;
const cols = 19;

// 事前に指定する正解パターン（0と1の配列）
const correctPattern = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4,
    0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 4,
    0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 4,
    0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 4,
    0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 4,
    0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 4,
    0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
];

// 事前に指定するボタンのテキスト
const buttonTexts = [
    "", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18",
    "1", "H", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "He",
    "2", "Li", "Be", "", "", "", "", "", "", "", "", "", "", "B", "C", "N", "O", "F", "Ne",
    "3", "Na", "Mg", "", "", "", "", "", "", "", "", "", "", "Al", "Si", "P", "S", "Cl", "Ar",
    "4", "K", "Ca", "Sc", "Ti", "V", "Cr", "Mn", "Fe", "Co", "Ni", "Cu", "Zn", "Ga", "Ge", "As", "Se", "Br", "Kr",
    "5", "Rb", "Sr", "Y", "Zr", "Nb", "Mo", "Tc", "Ru", "Rh", "Pd", "Ag", "Cd", "In", "Sn", "Sb", "Te", "I", "Xe",
    "6", "Cs", "Ba", "ランタノイド", "Hf", "Ta", "W", "Re", "Os", "Ir", "Pt", "Au", "Hg", "Tl", "Pb", "Bi", "Po", "At", "Rn",
    "7", "Fr", "Ra", "アクチノイド", "Rf", "Db", "Sg", "Bh", "Hs", "Mt", "Ds", "Rg", "Cn", "Nh", "Fl", "Mc", "Lv", "Ts", "Og",
];

// クリック不可のボタン（インデックスを指定）
const disabledButtons = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
    19, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
    38, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
    57, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69,
    76,
    95,
    114,
    133,
];

// 文字色を変更するボタン（インデックスを指定）
const highlightedButtons = [
    20, 37, 39, 40, 51, 52, 53, 54, 55, 56, 58, 59, 70, 71, 72, 73, 74, 75,
    77, 78, 80, 81, 82, 83, 84, 85, 86, 87, 88, 93, 94, 97, 106, 109, 112, 116, 125, 126, 128, 146
];

const color1 = document.createElement("button");
const color2 = document.createElement("button");
const color3 = document.createElement("button");
const color4 = document.createElement("button");
document.getElementById("color1").appendChild(color1);
document.getElementById("color2").appendChild(color2);
document.getElementById("color3").appendChild(color3);
document.getElementById("color4").appendChild(color4);
color1.classList.add("color1")
color2.classList.add("color2")
color3.classList.add("color3")
color4.classList.add("color4")
color1.textContent = "アルカリ金属元素";
color2.textContent = "アルカリ土類金属元素";
color3.textContent = "ハロゲン";
color4.textContent = "貴ガス";
color1.dataset.state = "1";
color2.dataset.state = "0";
color3.dataset.state = "0";
color4.dataset.state = "0";
color1.addEventListener("click", () => {
    color1.dataset.state = color1.dataset.state === "0" ? "1" : "0";
    color1.style.backgroundColor = color1.dataset.state === "1" ? "rgb(149, 209, 228)" : "#c8dbe1";
    // 他のボタンの値が 1 だったら 0 にリセットし、背景色も変更
    if (color2.dataset.state === "1") {
        color2.dataset.state = "0";
        color2.style.backgroundColor = "#d8edd8";
    }
    if (color3.dataset.state === "1") {
        color3.dataset.state = "0";
        color3.style.backgroundColor = "#ebd4d4";
    }
    if (color4.dataset.state === "1") {
        color4.dataset.state = "0";
        color4.style.backgroundColor = "#fbfbf0";
    }
})
color2.addEventListener("click", () => {
    color2.dataset.state = color2.dataset.state === "0" ? "1" : "0";
    color2.style.backgroundColor = color2.dataset.state === "1" ? "lightgreen" : "#d8edd8";
    // 他のボタンの値が 1 だったら 0 にリセットし、背景色も変更
    if (color1.dataset.state === "1") {
        color1.dataset.state = "0";
        color1.style.backgroundColor = "#c8dbe1";
    }
    if (color3.dataset.state === "1") {
        color3.dataset.state = "0";
        color3.style.backgroundColor = "#ebd4d4";
    }
    if (color4.dataset.state === "1") {
        color4.dataset.state = "0";
        color4.style.backgroundColor = "#fbfbf0";
    }
})
color3.addEventListener("click", () => {
    color3.dataset.state = color3.dataset.state === "0" ? "1" : "0";
    color3.style.backgroundColor = color3.dataset.state === "1" ? "lightcoral" : "#ebd4d4";
    // 他のボタンの値が 1 だったら 0 にリセットし、背景色も変更
    if (color1.dataset.state === "1") {
        color1.dataset.state = "0";
        color1.style.backgroundColor = "#c8dbe1";
    }
    if (color2.dataset.state === "1") {
        color2.dataset.state = "0";
        color2.style.backgroundColor = "#d8edd8";
    }
    if (color4.dataset.state === "1") {
        color4.dataset.state = "0";
        color4.style.backgroundColor = "#fbfbf0";
    }
})
color4.addEventListener("click", () => {
    color4.dataset.state = color4.dataset.state === "0" ? "1" : "0";
    color4.style.backgroundColor = color4.dataset.state === "1" ? "rgb(252, 252, 153)" : "#fbfbf0";
    // 他のボタンの値が 1 だったら 0 にリセットし、背景色も変更
    if (color1.dataset.state === "1") {
        color1.dataset.state = "0";
        color1.style.backgroundColor = "#c8dbe1";
    }
    if (color2.dataset.state === "1") {
        color2.dataset.state = "0";
        color2.style.backgroundColor = "#d8edd8";
    }
    if (color3.dataset.state === "1") {
        color3.dataset.state = "0";
        color3.style.backgroundColor = "#ebd4d4";
    }
})

const buttonGrid = document.getElementById("buttonGrid");
const resultDisplay = document.getElementById("result");

let buttons = [];

for (let i = 0; i < rows * cols; i++) {
    const btn = document.createElement("button");
    btn.textContent = buttonTexts[i];
    btn.classList.add("button");
    btn.dataset.state = "0";

    if (btn.textContent.length > 5) {
        btn.style.fontSize = "10px";
    }

    if (disabledButtons.includes(i)) {
        btn.classList.add("disabled");
    }
    if (highlightedButtons.includes(i)) {
        btn.classList.add("highlight");
    }
    if (!disabledButtons.includes(i)) {
        btn.addEventListener("click", () => {
            if (color1.dataset.state === "1") {
                btn.dataset.state = "1";
                btn.style.backgroundColor = "lightblue";
            } else if (color2.dataset.state === "1") {
                btn.dataset.state = "2";
                btn.style.backgroundColor = "lightgreen";
            } else if (color3.dataset.state === "1") {
                btn.dataset.state = "3";
                btn.style.backgroundColor = "lightcoral";
            } else if (color4.dataset.state === "1") {
                btn.dataset.state = "4";
                btn.style.backgroundColor = "lightgoldenrodyellow";
            } else if (btn.dataset.state !== "0") {
                btn.dataset.state = "0";
                btn.style.backgroundColor = "white";
            }
            checkAnswer();
        });
    }

    buttons.push(btn);
    buttonGrid.appendChild(btn);
}

function checkAnswer() {
    const currentState = buttons.map(btn => Number(btn.dataset.state));
    if (JSON.stringify(currentState) === JSON.stringify(correctPattern)) {
        resultDisplay.textContent = "正解！";
    } else {
        resultDisplay.textContent = "";
    }
}

function goBack() {
    window.history.back(); // 戻るボタン
}