const boxes = document.querySelectorAll('.fr');
let player1 = '';
let player2 = '';
player1_wins = localStorage.getItem('player1_wins');
player2_wins = localStorage.getItem('player2_wins');

localStorage.setItem(`player1_wins`, (player1_wins == "NaN" || "null") ? (0) : player1_wins);
localStorage.setItem(`player2_wins`, (player2_wins == "NaN" || "null") ? (0) : player2_wins);

console.log(localStorage)

const possibilities = ['012', '345', '678', '036', '147', '258', '048', '246'];
let state = 1;
let a = [1, 2, 3]

function names(one = 'Player 1', two = 'Player 2') {

}

function popup(x) {
    let popup = document.createElement('div');
    let popup_text = document.createElement('div');
    let popup_button = document.createElement('button');

    popup_text.classList.add('text');
    popup_button.classList.add('button');
    popup.classList.add('popup');

    popup_text.innerHTML = x;
    popup_button.innerHTML = 'OK';

    document.body.appendChild(popup);
    popup.append(popup_text);
    popup.append(popup_button);

    popup_button.onclick = () => {
        popup.style.display = 'none';
        window.history.go(0);
    }
}



function logic(x, z) {


    // console.log('0' + 1);

    for (let i = 0; i < 8; i++) {
        if (x.includes(possibilities[i][0]) && x.includes(possibilities[i][1]) && x.includes(possibilities[i][2])) {
            // console.log(z);
            z = parseInt((z == "NaN" || "null") ? (0) : z) + 1;
            localStorage.setItem(`player${state}_wins`, z);
            z = localStorage.getItem(`player${state}_wins`);
            popup(`Player ${state} wins <br>Scores: <span style='--player:#999900'>${localStorage.getItem(`player1_wins`)}</span> - <span style='--player:#009999'>${localStorage.getItem(`player2_wins`)}</span>`);
            boxes.forEach((element) => {
                element.style.pointerEvents = 'none';
            })
        }
    }
    if (player1.length + player2.length >= 9) {
        popup(`Draw!!! <br>Scores: <span style='--player:#999900'>${localStorage.getItem(`player1_wins`)}</span> - <span style='--player:#009999'>${localStorage.getItem(`player2_wins`)}</span>`)
    }
}

boxes.forEach((element) => {
    element.addEventListener('click', function () {
        console.log(localStorage);
        if ((element.innerHTML == '')) {
            if (state == 1) {
                element.style.color = '#ffff00';
                element.innerHTML = 'X';
                player1 += element.getAttribute('number');
                logic(player1, player1_wins);
                state = 2;
            }
            else if (state == 2) {
                element.style.color = '#00ffff';
                element.innerHTML = 'O';
                player2 += element.getAttribute('number');
                logic(player2, player2_wins);
                state = 1;
            }
        }
    })
})

