const answerNode = document.querySelector('.answer');
const historyNode = document.querySelector('.history');

let a = '';
let b = '';
let sign = '';
let finish = false;

const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.']
const action = ['+', '-', '*', '/']

window.addEventListener('keydown', event => {
    answerNode.value = '';
    
    // get pressed button
    const key = event.key;


    if (digits.includes(key)) {
        if (b === '' && sign === '') {
            a += key;
            answerNode.value = a;
        } else if (a !== '' && b !== '' && finish) {
            b = key;
            finish = false; 
            answerNode.value = b;

        } else {
            b += key;
            answerNode.value = b;
        }
        console.log(a, b, sign);
    };

    // get 
    if (action.includes(key)) {
        sign = key;
        console.log(sign);
        answerNode.value = sign;
    };

    if (key == '%') {
        a = a/100;
        sign = '*';
        answerNode.value = '%';
        // if (b !== '') {
        //     a = a * b;
        // } 
        // answerNode.value = round(a);
        return;
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
                    answerNode.value = 'error';
                    return;
                } else {
                    a = (+a) / (+b);
                }
                break;
        }
        finish = true;
        answerNode.value = round(a);
    }

    if (key == 'Backspace') {
        
        if (b === '' || finish) {
            a = String(a);
            a = a.substring(0, a.length-1);
            answerNode.value = round(a);
            return;
        }

        b = b.substring(0, b.length-1);
        answerNode.value = round(b);
        
    };

    if (event.target.classList.contains('plus-minus')) {
        if (b === '' || finish) {
            a = -a;
            answerNode.value = round(a);
            return;
        }
        b = -b;
        answerNode.value = round(b);  
    };

});

document.querySelector('.buttons').addEventListener('click', event => {
    // pressed clear all
    if (event.target.classList.contains('clear')) {
        a = '';
        b = '';
        sign = '';
        finish = false;
        answerNode.value = '';
        historyNode.textContent = '';
    };

    if (!event.target.classList.contains('btn')) return;

    answerNode.value = '';
    
    // get pressed button
    const key = event.target.textContent;


    if (digits.includes(key)) {
        if (b === '' && sign === '') {
            a += key;
            answerNode.value = a;
        } else if (a !== '' && b !== '' && finish) {
            b = key;
            finish = false; 
            answerNode.value = b;

        } else {
            b += key;
            answerNode.value = b;
        }
        console.log(a, b, sign);
    };

    // get 
    if (action.includes(key)) {
        sign = key;
        console.log(sign);
        answerNode.value = sign;
    };

    if (event.target.classList.contains('percent')) {
        a = a/100;
        sign = '*';
        answerNode.value = '%';
        // if (b !== '') {
        //     a = a * b;
        // } 
        // answerNode.value = round(a);
        return;
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
                    answerNode.value = 'error';
                    return;
                } else {
                    a = (+a) / (+b);
                }
                break;
        }
        finish = true;
        answerNode.value = round(a);
    }

    if (event.target.classList.contains('unmod')) {
        
        if (b === '' || finish) {
            a = String(a);
            a = a.substring(0, a.length-1);
            answerNode.value = round(a);
            return;
        }

        b = b.substring(0, b.length-1);
        answerNode.value = round(b);
        
    };

    if (event.target.classList.contains('plus-minus')) {
        if (b === '' || finish) {
            a = -a;
            answerNode.value = round(a);
            return;
        }
        b = -b;
        answerNode.value = round(b);  
    };

});

function round(num, decimalPlaces = 4) {
    num = Math.round(num + "e" + decimalPlaces);
    return String(Number(num + "e" + -decimalPlaces));
};