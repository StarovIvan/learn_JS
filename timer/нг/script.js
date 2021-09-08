'use strict';

const date = new Date();
const week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const hours = date.getHours();
const day = date.getDay();
const time = date.toLocaleTimeString();

let timesOfDay = function(){
    const createElem = document.createElement('div');
    const newYear = Date.parse('1 January 2022');
    let now = Date.now();
    let daysLeft = Math.floor(((((newYear - now) / 1000) / 60) / 60) / 24);

    let timeDay = function (){
        if(hours > 6 && hours < 11){
            return 'Доброе утро';
        } else if(hours > 11 && hours < 17){
            return 'Добрый день';
        } else if(hours > 17 && hours < 22){
            return 'Добрый вечер';
        } else{
            return 'Доброй ночи';
        }
    };
console.log(timeDay());
    createElem.innerHTML = `<p>${timeDay()}</p>
        <p>День недели: ${week[day]}</p>
        <p>Текущее время: ${time}</p>
        <p>До нового года осталось: ${daysLeft} дней</p>`;

    document.body.append(createElem);
};

timesOfDay();