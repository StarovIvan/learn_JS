window.addEventListener('DOMContentLoaded', function(){
    'use strict';


    let countTime = setInterval(
        
        function (){
            let dateStopTimer = '1 september 2022';
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


        // прокрутка к 1 секции

        const scrollBtn = document.querySelector('a');
            const scrollOne = (event)=> {
                event.preventDefault();
                document.querySelector('#service-block').scrollIntoView({
                    behavior: 'smooth',
                    block:'start'
                });
            };
        scrollBtn.addEventListener('click', scrollOne);
            
        const showMenu = ()=> {
            const menuBtn = document.querySelector('.menu'),
                menu = document.querySelector('menu'),
                closeBtn = document.querySelector('.close-btn'),
                menuItems = menu.querySelectorAll('ul>li');


            
            const menuHandler = ()=> {
                menu.classList.toggle('active-menu');

            };

            // плавная прокрутка
                const scrollBlock = (event)=> {
                    event.preventDefault();

                    const linkId = event.target.getAttribute('href').substr(1);
                    
                    document.getElementById(linkId).scrollIntoView({
                        behavior: 'smooth',
                        block:'start'
                    });
                    
                };


                menuBtn.addEventListener('click', menuHandler);

                closeBtn.addEventListener('click', menuHandler);

                menuItems.forEach((elem)=> {
                    elem.addEventListener('click', menuHandler);
                    elem.addEventListener('click', scrollBlock);
                });
                
        };
        showMenu();

        const popupContent = document.querySelector('.popup-content');
        popupContent.style.top = '-62%';
        let animationPopup = ()=> {
            let start = Date.now();
          
            if(document.documentElement.clientWidth > 768){
                let timer = setInterval(function() {
                let timePassed = Date.now() - start;
                            
                popupContent.style.top = timePassed / 20 + '%';
                    
                if (timePassed > 400) {
                    clearInterval(timer);
                    }
                    
                }, 10);
            } else {
                popupContent.style.top = '10%';
            }
            

        };
    
        const showBtn = ()=> {
            const popupBtn = document.querySelectorAll('.popup-btn'),
                popup = document.querySelector('.popup'),
                popupClose = document.querySelector('.popup-close');

                popupBtn.forEach((elem)=> {
                    elem.addEventListener('click', ()=> popup.style.display = 'block');
                    elem.addEventListener('click', animationPopup);
                });
                
                popupClose.addEventListener('click', ()=> popup.style.display = 'none');
                popupClose.addEventListener('click', ()=> popupContent.style.top = '-62%');

        };
        showBtn();
});
