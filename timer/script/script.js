window.addEventListener('DOMContentLoaded', function(){
    'use strict';


    let countTime = setInterval(
        
        function (){
            let dateStopTimer = '9 september 2021';
            let timerHours = document.getElementById('timer-hours'),   
            timerMinutes = document.getElementById('timer-minutes'),
            timerSeconds = document.getElementById('timer-seconds');


            function getTimeRemaining(){
                let dateStop = new Date(dateStopTimer).getTime(),
                dateNow = new Date().getTime(),
                timeRemaining = (dateStop - dateNow) / 1000,
                seconds = Math.floor(timeRemaining % 60),
                minutes = Math.floor((timeRemaining / 60) % 60),
                hours = Math.floor(timeRemaining / 60 / 60);
                return {seconds, minutes, hours};
            }

                let timer = getTimeRemaining();
                
                if(timer.seconds < 10){
                    timerSeconds.textContent = '0' + timer.seconds;
                } else{
                  timerSeconds.textContent = timer.seconds;
                }

                if(timer.minutes < 10){
                    timerMinutes.textContent = '0' + timer.minutes;
                }else{
                   timerMinutes.textContent = timer.minutes; 
                }


                if(timer.hours < 10){
                    timerHours.textContent = '0' + timer.hours;
                }else{
                    timerHours.textContent = timer.hours;      
                }

                

                
                if(timer.seconds < 0 && timer.minutes < 0 && timer.hours < 0){
                    window.clearTimeout(countTime);
                    timerHours.textContent = '00';
                    timerMinutes.textContent = '00';
                    timerSeconds.textContent = '00';

                }

        }, 1000);
    
});