const answerNode = document.querySelector('.answer');
const historyNode = document.querySelector('.history');

let a = '';
let b = '';
let sign = '';
let finish = false;

const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.']
const action = ['+', '-', '*', '/']


document.querySelector('.buttons').addEventListener('click', event => {
    // pressed clear all
    if (event.target.classList.contains('clear')) {
        let a = '';
        let b = '';
        let sign = '';
        let finish = false;
        answerNode.textContent = '';
        historyNode.textContent = '';
    };

    if (!event.target.classList.contains('btn')) return;

    answerNode.textContent = '';
    
    // get pressed button
    const key = event.target.textContent;


    if (digits.includes(key)) {
        if (b === '' && sign === '') {
            a += key;
            answerNode.textContent = a;
        } else if (a !== '' && b !== '' && finish) {
            b = key;
            finish = false; 
            answerNode.textContent = b;

        } else {
            b += key;
            answerNode.textContent = b;
        }
        console.log(a, b, sign);
    };

    // get 
    if (action.includes(key)) {
        sign = key;
        console.log(sign);
        answerNode.textContent = sign;
    };

    // solve 
    if (key === '=') {
        if (b === '') b = a;

        switch(sign) {
            case '+':
                a = (+a) + (+b);
                break;

            case '-':
                a = (+a) - (+b);
                break;

            case '*':
                a = (+a) * (+b);
                break;
                
            case '/':
                if (b == '0') {
                    a = '';
                    b = ''; 
                    sign = '';
                    answerNode.innerText = 'error';
                    return;
                } else {
                    a = (+a) / (+b);
                }
                break;
        }
        finish = true;
        answerNode.textContent = a;
    }
});