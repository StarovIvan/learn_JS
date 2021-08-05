'use strict';

const number = 334523;
let shortLine = '     Lorem ipsum dolor sit amet.      ';
let longLine = '      Lorem ipsum dolor sit amet consectetur adipisicing elit.     ';

const show = function (num){

    if(num === Number(num)){
        return 'Это число';
    } else if(num === String(num)){
        let width = num.trim().length;

        if(width > 30){
            return 'больше 30';
        } else if(width < 30) {
            return 'меньше 30';
        }
    }
};
console.log(show(number));
console.log(show(shortLine));
console.log(show(longLine));