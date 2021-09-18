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

            
        const toggleMenu = ()=> {
            const menuBtn = document.querySelector('.menu'),
                menu = document.querySelector('menu'),
                closeBtn = document.querySelector('.close-btn');


                menuBtn.addEventListener('click', (event)=> {
                    let target = event.target;
                        target = target.closest('.menu');
                    if(target){
                        menu.classList.add('active-menu');
                    }    
                });

                menu.addEventListener('click', (event)=> {
                    let target = event.target;
                    if(target === closeBtn){
                        menu.classList.remove('active-menu');
                    } else {
                        target = target.closest('a');
                        if(target){
                            menu.classList.remove('active-menu');
                        }
                    }

                });
                
        };
        toggleMenu();

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

                popup.addEventListener('click', (event)=> {
                    let target = event.target;
                    if(target.classList.contains('popup-close')){
                        popup.style.display = 'none';
                    } else {
                        target = target.closest('.popup-content');
                        if(!target){
                            popup.style.display = 'none';
                        }
                    }
                });

        };
        showBtn();

        const tabs = ()=> {
            const tabHeader = document.querySelector('.service-header'),
            tab = tabHeader.querySelectorAll('.service-header-tab'),
            serviceTab = document.querySelectorAll('.service-tab');

            const toggleTabContent = (index)=> {
                for(let i = 0; i < serviceTab.length; i++){
                    if(index === i){
                        tab[i].classList.add('active');
                        serviceTab[i].classList.remove('d-none');
                    } else {
                        tab[i].classList.remove('active');
                        serviceTab[i].classList.add('d-none');
                    }
                }
            };

            tabHeader.addEventListener('click', (event)=> {
                let target = event.target;
                target = target.closest('.service-header-tab');
                if(target){
                    tab.forEach((item, index)=> {
                        if(item === target){
                            toggleTabContent(index);
                        }
                    });
                }
            });
        };
        tabs();
});
