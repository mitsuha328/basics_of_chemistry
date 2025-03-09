let wordList = [
    { name: "フッ化水素(フッ化水素酸)", formula: "HF", comment: "弱酸", check: 0 },
    { name: "塩化水素(塩酸)", formula: "HCl", comment: "強酸", check: 0 },
    { name: "ヨウ化水素(ヨウ化水素酸)", formula: "HI", comment: "強酸", check: 0 },
    { name: "次亜塩素酸", formula: "HCIO", comment: "", check: 0 },
    { name: "塩素酸", formula: "HCLO(3)", comment: "", check: 0 },
    { name: "酢酸", formula: "CH(3)COOH", comment: "弱酸", check: 0 },
    { name: "二酸化炭素", formula: "CO(2)", comment: "", check: 0 },
    { name: "炭酸", formula: "H(2)CO(3)", comment: "弱酸", check: 0 },
    { name: "一酸化窒素", formula: "NO", comment: "", check: 0 },
    { name: "二酸化窒素", formula: "NO(2)", comment: "", check: 0 },
    { name: "硝酸", formula: "HNO(3)", comment: "強酸", check: 0 },
    { name: "亜硝酸", formula: "HNO(2)", comment: "", check: 0 },
    { name: "十酸化四リン", formula: "P(4)O(10)", comment: "中酸", check: 0 },
    { name: "リン酸", formula: "H(3)PO(4)", comment: "", check: 0 },
    { name: "硫化水素", formula: "H(2)S", comment: "弱酸", check: 0 },
    { name: "二酸化硫黄", formula: "SO(2)", comment: "", check: 0 },
    { name: "三酸化硫黄", formula: "SO(3)", comment: "", check: 0 },
    { name: "硫酸", formula: "H(2)SO(4)", comment: "強酸", check: 0 },
    { name: "亜硫酸", formula: "H(2)SO(3)", comment: "", check: 0 },
]

let shuffledArray = [...wordList];
showList(shuffledArray);
let quizList = []
let QuestionList = []
let missList = []
practiceNote();


const quizContainer = document.getElementById('quiz-container');
const questionElement = document.getElementById('question');
const answerInput = document.getElementById('answer-input');
const replyElement = document.getElementById('reply');
const endElement = document.getElementById('end');
let currentQuestionIndex = 0;

const First = document.getElementsByClassName('first-class');
const Second = document.getElementsByClassName('second-class');

const finishButton = document.createElement('button');
document.getElementById('finish-btn').appendChild(finishButton);
finishButton.classList.add('button');
finishButton.textContent = '終了する';
finishButton.style.display = 'none';
let check_quiz = 0;

const endButton = document.createElement('button');
document.getElementById('end-btn').appendChild(endButton);
endButton.classList.add('button');
endButton.textContent = 'やめる';
endButton.style.display = 'none';
endButton.addEventListener('click', function () {
    endElement.textContent = `${count}問中${right}問正解!お疲れ様でした♪( ´▽｀)`;
    count = 0;
    right = 0;
    finishButton.style.display = 'block';
    endButton.style.display = 'none';
    submitButton.style.display = 'none';
    nextButton.style.display = 'none';
})


const shuffleButton = document.createElement('button');
document.getElementById('shuffle-btn').appendChild(shuffleButton);
shuffleButton.classList.add('shuffle-button');
shuffleButton.textContent = 'シャッフルする';
shuffleButton.addEventListener('click', function () {
    shuffledArray = shuffleArray(wordList);
    showList(shuffledArray);
    if (check_quiz === 1) {
        alert('内容が変更されたため、クイズを終了します。');
        resetQuiz();
    }
});

//シャッフルする
function shuffleArray(array) {
    const cloneArray = [...array];
    array.forEach((_, idx) => {
        const randomNum = Math.floor(Math.random() * (idx + 1));
        [cloneArray[idx], cloneArray[randomNum]] = [cloneArray[randomNum], cloneArray[idx]];
    });
    return cloneArray;
}


//リセットする
const resetButton = document.createElement('button');
document.getElementById('reset-btn').appendChild(resetButton);
resetButton.classList.add('shuffle-button');
resetButton.textContent = 'リセットする';
resetButton.addEventListener('click', function () {
    shuffledArray = [...wordList];
    showList(shuffledArray);
    if (check_quiz === 1) {
        alert('内容が変更されたため、クイズを終了します。');
        resetQuiz();
    }
});

//全てのカードを有効にする
const whiteButton = document.createElement('button');
document.getElementById('white-btn').appendChild(whiteButton);
whiteButton.classList.add('white-button');
whiteButton.textContent = '全てのカードを有効にする';
whiteButton.addEventListener('click', function () {
    for (let i = 0; i < wordList.length; i++) {
        wordList[i].check = 0;
    }
    changeCardleroad(wordList);
});

//全てのカードを無効にする
const blockButton = document.createElement('button');
document.getElementById('block-btn').appendChild(blockButton);
blockButton.classList.add('white-button');
blockButton.textContent = '全てのカードを無効にする';
blockButton.addEventListener('click', function () {
    for (let i = 0; i < wordList.length; i++) {
        wordList[i].check = 1;
    }
    changeCardleroad(wordList);
});


function showNextQuestion() {
    replyElement.textContent = '';
    comment.textContent = '';
    currentQuestionIndex++;
    if (currentQuestionIndex < QuestionList.length) {
        showQuestion();
    } else {
        endElement.textContent = `クイズ終了!${count}問中${right}問正解!お疲れ様でした♪( ´▽｀)`;
        count = 0;
        right = 0;
        submitButton.style.display = 'none';
        nextButton.style.display = 'none';
        startButton.style.display = 'none';
        finishButton.style.display = 'block';
        endButton.style.display = 'none';
        check_quiz = 0;
        shuffledArray = [...wordList];
    }
}


finishButton.addEventListener('click', function () {
    resetQuiz();
});

function resetQuiz() {
    currentQuestionIndex = 0;
    questionElement.textContent = '';
    endElement.textContent = '';
    quizContainer.style.display = 'none';
    startButton.style.display = 'block';
    nextButton.style.display = 'none';
    finishButton.style.display = 'none';
    answerInput.style.display = 'none';
    submitButton.style.display = 'none';
    replyElement.style.display = 'none';
    endButton.style.display = 'none';
    comment.style.display = 'none';
    miss = 0;
    check_quiz = 0;
    shuffledArray = [...wordList];
    quizList = [];
    QuestionList = [];
    practiceNote()
    showList(shuffledArray);
}

const submitButton = document.createElement('button');
document.getElementById('submit-btn').appendChild(submitButton);
submitButton.classList.add('button');
submitButton.textContent = '答え合わせ';
submitButton.style.display = 'none';

submitButton.addEventListener('click', Check);

const comment = document.getElementById('comment');
comment.style.display = 'none';


let count = 0;
let right = 0;
let miss = 0;
function Check() {
    const userAnswer = answerInput.value.trim().toLowerCase();
    const correctAnswer = QuestionList[currentQuestionIndex].formula.toLowerCase();
    replyElement.style.display = 'block';
    comment.style.display = 'block';

    if (userAnswer === correctAnswer) {
        replyElement.textContent = '正解!';
        submitButton.style.display = 'none';
        nextButton.style.display = 'block';
        if (miss == 0) {
            count += 1;
            right += 1;
        } else {
            miss = 0;
        }
    } else {
        replyElement.textContent = `不正解。正解は「${QuestionList[currentQuestionIndex].formula}」です。`;
        nextButton.style.display = 'block';
        if (miss == 0) {
            missList.push({
                name: QuestionList[currentQuestionIndex].name,
                formula: QuestionList[currentQuestionIndex].formula
            })
            miss = 1;
            count += 1;
        }
    }
    if (QuestionList[currentQuestionIndex].comment.length >= 1) {
        comment.textContent = `コメント：${QuestionList[currentQuestionIndex].comment}`
    }
};

const nextButton = document.createElement('button');
nextButton.textContent = '次の問題';
nextButton.classList.add('button');
nextButton.style.display = 'none';
nextButton.addEventListener('click', function () {
    submitButton.style.display = 'block';
    nextButton.style.display = 'none';
    miss = 0;
    showNextQuestion();
});
document.getElementById('next').appendChild(nextButton);
nextButton.classList.add('button');

function showQuestion() {
    const currentQuestion = QuestionList[currentQuestionIndex];
    questionElement.textContent = (`問題：${currentQuestion.name}`);
    answerInput.value = '';
}

let changeconfirm = 0;
const changeA_B_Button = document.createElement('button');
document.getElementById('changeA_B').appendChild(changeA_B_Button);
changeA_B_Button.textContent = '物質名->化学式';
changeA_B_Button.classList.add('changebtnA_B');
changeA_B_Button.style.display = 'none';
changeA_B_Button.addEventListener('click', function () {
    changeconfirm = 0;
    start();
})
const changeB_A_Button = document.createElement('button');
document.getElementById('changeB_A').appendChild(changeB_A_Button);
changeB_A_Button.textContent = '化学式->物質名';
changeB_A_Button.classList.add('changebtnB_A');
changeB_A_Button.style.display = 'none';
changeB_A_Button.addEventListener('click', function () {
    changeconfirm = 1;
    start();
})

const ChangeText = document.getElementById('changetext');
ChangeText.textContent = '問題形式を選択してください。'
ChangeText.style.display = 'none';

const startButton = document.createElement('button');
startButton.textContent = 'スタート';
startButton.classList.add('start-btn');
answerInput.style.display = 'none';
startButton.addEventListener('click', function () {
    ChangeText.style.display = 'block';
    startButton.style.display = 'none';
    changeA_B_Button.style.display = 'block';
    changeB_A_Button.style.display = 'block';
})
function start() {
    ChangeText.style.display = 'none';
    changeA_B_Button.style.display = 'none';
    changeB_A_Button.style.display = 'none';
    missList = [];
    if (changeconfirm === 0) {
        for (let i = 0; i < shuffledArray.length; i++) {
            if (shuffledArray[i].check === 0) {
                let Question = { name: shuffledArray[i].name, formula: shuffledArray[i].formula, comment: shuffledArray[i].comment }
                QuestionList.push(Question);
            }
        }
    } else {
        for (let i = 0; i < shuffledArray.length; i++) {
            if (shuffledArray[i].check === 0) {
                let Question = { name: shuffledArray[i].formula, formula: shuffledArray[i].name, comment: shuffledArray[i].comment }
                QuestionList.push(Question);
            }
        }
    }

    if (QuestionList.length > 0) {
        for (let i = 0; i < shuffledArray.length; i++) {
            let newItem = { name: shuffledArray[i].formula, formula: '×', check: shuffledArray[i].check };
            quizList.push(newItem);
        }
        showList(quizList);
        startButton.style.display = 'none';
        quizContainer.style.display = 'block';
        nextButton.style.display = 'none';
        submitButton.style.display = 'block';
        answerInput.style.display = 'block';
        endButton.style.display = 'block';
        check_quiz = 1;


        showQuestion();
    } else {
        startButton.style.display = 'none';
        questionElement.textContent = '出題できるクイズがありません。'
        finishButton.style.display = 'block';
    }
};

document.getElementById('start').appendChild(startButton);




function showList(List) {
    let memo1_element = document.getElementById('memo_1');
    let memo2_element = document.getElementById('memo_2')

    memo1_element.innerHTML = '';
    memo2_element.innerHTML = '';

    for (const item of List) {
        let ja_element = document.createElement('p');
        ja_element.classList.add('word_card');

        let cleanBase = (assignUniqueID(`${item.formula}`).replace(/\s+/g, '_'));
        let cleanname = (`${cleanBase}-name`)
        let cleanformula = (`${cleanBase}-formula`);
        ja_element.innerHTML = `<button id=btn-${cleanname} class="btn">${item.name}</button>`;
        memo1_element.prepend(ja_element);

        let eg_element = document.createElement('p');
        eg_element.id = assignUniqueID(item.formula);
        eg_element.classList.add('word_card')

        eg_element.innerHTML = `<button id=btn-${cleanformula} class="btn">${item.formula}</button>`;
        memo2_element.prepend(eg_element);
    }

    changeCardleroad(List);
}

addEventListener('contextmenu', function (event) {
    event.preventDefault();
    let str = event.target.id;
    let name_id = 0;
    let formula_id = 0;
    if (str.endsWith('-name')) {
        name_id = str;
        formula_id = str.slice(0, -5) + '-formula';
    } else if (str.endsWith('-formula')) {
        formula_id = str;
        name_id = str.slice(0, -8) + '-name';
    } else { }

    const name_text = document.getElementById(name_id).textContent;
    const formula_text = document.getElementById(formula_id).textContent;
    change(name_id, formula_id, name_text, formula_text)
})


function assignUniqueID(baseID) {
    let newID = baseID + '-1';
    let counter = 1;

    while (document.getElementById(newID)) {
        newID = baseID + '-' + counter;
        counter++;
    }

    return newID;
}


function change(Japanese_id, English_id, Japanese_text, English_text) {
    for (let i = 0; i < wordList.length; i++) {
        if (wordList[i].name === Japanese_text && wordList[i].formula === English_text) {
            const jaButton = document.getElementById(Japanese_id);
            const enButton = document.getElementById(English_id);
            if (wordList[i].check === 0) {
                wordList[i].check = 1;
                if (jaButton && enButton) {
                    jaButton.style.border = '8px double #003342';
                    jaButton.style.backgroundColor = '#88898a';
                    enButton.style.border = '8px double #003342';
                    enButton.style.backgroundColor = '#88898a';
                }
            } else {
                wordList[i].check = 0;
                if (jaButton && enButton) {
                    jaButton.style.border = '8px double #0090bb';
                    jaButton.style.backgroundColor = '';
                    enButton.style.border = '8px double #0090bb';
                    enButton.style.backgroundColor = '';
                }
            }
            break;
        }
    }
}


function changeCardleroad(list) {
    const existingIDs = new Set();
    function assignUniqueID_roadver(baseID) {
        let counter = 1;
        let newID = `${baseID}-${counter}`;
        while (existingIDs.has(newID)) {
            counter++;
            newID = `${baseID}-${counter}`;
        }
        existingIDs.add(newID);
        return newID;
    }
    for (let i = 0; i < list.length; i++) {
        const clean = assignUniqueID_roadver(list[i].formula.replace(/\s+/g, '_'));
        const jaButton = document.getElementById(`btn-${clean}-name`);
        const enButton = document.getElementById(`btn-${clean}-formula`);
        if (list[i].check === 1) {
            if (jaButton && enButton) {
                jaButton.style.border = '8px double #003342';
                jaButton.style.backgroundColor = '#88898a';
                enButton.style.border = '8px double #003342';
                enButton.style.backgroundColor = '#88898a';
            }
        } else {
            if (jaButton && enButton) {
                jaButton.style.border = '8px double #0090bb';
                jaButton.style.backgroundColor = '';
                enButton.style.border = '8px double #0090bb';
                enButton.style.backgroundColor = '';
            }
        }
    }
}






function practiceNote() {
    const Text = document.getElementById('text');
    Text.textContent = '練習ノートにはクイズで間違えた問題が表示されます。'
    Text.style.display = 'none';
    const container = document.getElementById('container');
    const template = document.getElementById('flame-template').content;
    if (missList.length == 0) {
        container.style.display = 'none';
        Text.style.display = 'block';
    } else {

        container.style.display = 'block';

        container.innerHTML = '';

        // div要素を生成してコンテナに追加する関数
        function createDiv(index) {
            // テンプレートを複製
            const clone = document.importNode(template, true);

            // 複製した要素にインデックスを設定
            const div = clone.querySelector('.flame');
            div.id = `flame-card-${index}`;

            const prcWord = clone.querySelector('.prc_word');
            prcWord.id = `practice-word-${index}`;
            prcWord.innerHTML = `${missList[index].name}:${missList[index].formula}`;

            const inputWord = clone.querySelector('.image');
            inputWord.id = `word-${index}`;
            inputWord.placeholder = missList[index].formula;

            const searchBtn = clone.querySelector('.check');
            searchBtn.dataset.index = index;
            searchBtn.id = `search-btn-${index}`;

            const form = clone.querySelector('form');
            form.onsubmit = function (event) {
                showCard(event, index);
            };

            // コンテナに追加
            container.appendChild(clone);

            function showCard(event, index) {
                event.preventDefault();
                if (inputWord.value === missList[index].formula) {
                    inputWord.value = '';
                } else { }
            }
        }


        for (let i = 0; i < missList.length; i++) {
            createDiv(i)
        }
    }
}

function goBack() {
    window.history.back(); // 戻るボタン
}