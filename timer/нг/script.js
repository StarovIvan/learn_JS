'use strict';

const timesOfDay = document.querySelector('.times_of_day'),
    dayOfWeek = document.querySelector('.day_of_week'),
    currentTime = document.querySelector('.current_time'),
    timeNewYear = document.querySelector('.time_new_year'),
    week = ['Воскресенье' , 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
    newYear = Date.parse('1 January 2022'),
    now = Date.now();

    let time = setInterval(function() {
        let date = new Date(),
            hours = date.getHours(),
            minutes = date.getMinutes(), 
            seconds = date.getSeconds(),
            day = date.getDay();


            let timeDay = function (){
                let timesOfDay = '';
                if(hours > 6 && hours < 10){
                    timesOfDay = 'Доброе утро';
                    return timesOfDay;
                } else if(hours > 10 && hours < 18){
                    timesOfDay = 'Добрый день';
                    return timesOfDay;
                } else if(hours > 18 && hours < 22){
                    timesOfDay = 'Добрый вечер';
                    return timesOfDay;
                } else {
                    timesOfDay = 'Доброй ночи';
                    return timesOfDay;
                }
            };

            let getDayOfNewYear = ()=> {
                let daysLeft = Math.floor(((((newYear - now) / 1000) / 60) / 60) / 24);
                return daysLeft;
            };

            if(seconds < 10){
                seconds = '0' + seconds ;
            }
            if(minutes < 10){
                minutes = '0' + minutes ;
            }
            if(hours < 10){
                hours = '0' + hours ;
            }
            
          

        timesOfDay.innerHTML = timeDay();
        dayOfWeek.innerHTML =  `Сегодня: ${week[day]}`;
        currentTime.innerHTML = (`Текущее время: ${hours}:${minutes}:${seconds} PM`);
        timeNewYear.innerHTML = `До нового года осталось: ${getDayOfNewYear()} дней`;
      }, 1000);
