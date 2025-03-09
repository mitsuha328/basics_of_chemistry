const rows = 8;
const cols = 19;

// 事前に指定する正解パターン（0と1の配列）
const correctPattern = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0
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
            btn.dataset.state = btn.dataset.state === "0" ? "1" : "0";
            btn.style.backgroundColor = btn.dataset.state === "1" ? "#f97791" : "white";
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