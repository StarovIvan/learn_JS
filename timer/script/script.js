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

        const slider = ()=> {
            const slider = document.querySelector('.portfolio-content'),
                slide = document.querySelectorAll('.portfolio-item'),
                btn = document.querySelectorAll('.portfolio-btn');
                
            let portfolioDots = document.querySelector('.portfolio-dots'),
                dot;
            let currentSlide = 0,
                interval;   


            // вывод на страницу точек с классом "dot"
            const renderDots = ()=> {
               for(let i = 0; i < slide.length; i++){
                portfolioDots.innerHTML += `<li class="dot"></li>`;
                slider.append(portfolioDots);
                }
                dot = portfolioDots.querySelectorAll('.dot');
                dot[0].classList.add('dot-active'); 
            };
            renderDots();


            const prevSlide = (item, index, strClass)=> {
                item[index].classList.remove(strClass);
            };

            const nextSlide = (item, index, strClass)=> {
                item[index].classList.add(strClass);
            };

            const autoPlaySlide = ()=> {
                slide[currentSlide].classList.remove('portfolio-item-active');
                prevSlide(slide, currentSlide ,'portfolio-item-active');
                prevSlide(dot, currentSlide ,'dot-active');

                currentSlide++;
                if(currentSlide >= slide.length){
                    currentSlide = 0 ;
                }
                slide[currentSlide].classList.add('portfolio-item-active');
                nextSlide(slide, currentSlide ,'portfolio-item-active');

                nextSlide(dot, currentSlide ,'dot-active');



            };

            const startSlide = (time = 1500)=> {
                interval = setInterval(autoPlaySlide, time);
            };
            
            
            const stopSlide = ()=> {
                clearInterval(interval);
            };

            slider.addEventListener('click', (event)=> {
                event.preventDefault();
                const target = event.target;

                prevSlide(slide, currentSlide ,'portfolio-item-active');
                prevSlide(dot, currentSlide ,'dot-active');
                
                if(target.matches('#arrow-right')){
                    currentSlide++;
                    if(currentSlide >= slide.length){
                        currentSlide = 0;
                    }

                } else if(target.matches('#arrow-left')){
                    currentSlide--;
                    if(currentSlide < 0){
                        currentSlide = slide.length - 1;
                    }
                } else if(target.matches('.dot')){
                    dot.forEach((elem, index)=> {
                        if(elem === target){
                            currentSlide = index; 
                        }
                    });
                }
                nextSlide(slide, currentSlide ,'portfolio-item-active');
                nextSlide(dot, currentSlide ,'dot-active');

            });

            slider.addEventListener('mouseover', (event)=> {
                if(event.target.matches('.portfolio-btn') ||
                event.target.matches('.dot'))  {
                    stopSlide();
                }
            });

            slider.addEventListener('mouseout', (event)=> {
                if(event.target.matches('.portfolio-btn') ||
                event.target.matches('.dot')){
                    startSlide();
                }
            });
            startSlide(1500);

        };
        slider();

        // замена фотографий
        const teams = ()=> {
            const commandPhoto = document.querySelectorAll('.command__photo');

            commandPhoto.forEach((item)=> {
                const initialPhoto = item.getAttribute('src');

                item.addEventListener('mouseenter' , (event)=> {
                    item.src = event.target.getAttribute('data-img');
                });
        
                item.addEventListener('mouseout' , ()=> {
                    item.src = initialPhoto;
                });

            });
        };
        teams();


        // калькулятор
        // запрет всего кроме цифр
        const banValuesCalculator = ()=> {
            const calcItem = document.querySelectorAll('.calc-item');
            calcItem.forEach((item)=> {
                item.addEventListener('input', ()=> {
                    item.value = item.value.replace(/\D/g , '');
                });
            });
        };
        banValuesCalculator();

        // БЛОК С ОБРАТНОЙ СВЯЗЬЮ
        const feedBack = ()=> {
            const footerFormInput = document.querySelector('.footer-form-input');
            footerFormInput.addEventListener('click', (event)=> {
                const target = event.target;
                if(target.matches('#form2-name') || target.matches('#form2-message')){

                    
                    target.addEventListener('blur', ()=> {
                        target.value = target.value.replace(/[^а-я\s\-]/ig, '');
                        target.value = target.value.replace(/^(\s+|\-+)+/g, '');
                        target.value = target.value.replace(/(\s+|\-+)+$/g, '');
                        target.value = target.value.replace(/\s+/ig, ' ');
                        target.value = target.value.replace(/\-+/ig, '-');

                        if(target.matches('#form2-name')){
                            target.value = target.value.replace(/( |^)[а-яёa-z]/g, function(x){ 
                            return x.toUpperCase(); });                   
                        }
                    });
                    
                } else if(target.matches('.form-email')){
                    target.addEventListener('blur', ()=> {
                        target.value = target.value.trim().replace(/[^a-z\@\-\_\.\~\*\']/ig, '');
                        target.value = target.value.replace(/^(\s+|\-+)+/g, '');
                        target.value = target.value.replace(/(\s+|\-+)+$/g, '');
                        target.value = target.value.replace(/\s+/ig, ' ');
                        target.value = target.value.replace(/\-{3,}/ig, '-');
                    });

                } else if(target.matches('.form-phone')){
                    target.addEventListener('blur', ()=> {
                        target.value = target.value.replace(/[^0-9\(\)\-]/ig, '');
                        target.value = target.value.replace(/^(\-+)+/g, '');
                        target.value = target.value.replace(/(\-+)+$/g, '');
                        target.value = target.value.replace(/\-+/ig, '-');
                    });
                }
            });
        };
        feedBack();

});
