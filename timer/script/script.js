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

        function maskPhone(selector, masked = '+7 (___) ___-__-__') {
            const elems = document.querySelectorAll(selector);
        
            function mask(event) {
                const keyCode = event.keyCode;
                const template = masked,
                    def = template.replace(/\D/g, ""),
                    val = this.value.replace(/\D/g, "");
                let i = 0,
                    newValue = template.replace(/[_\d]/g, function (a) {
                        return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
                    });
                i = newValue.indexOf("_");
                if (i != -1) {
                    newValue = newValue.slice(0, i);
                }
                let reg = template.substr(0, this.value.length).replace(/_+/g,
                    function (a) {
                        return "\\d{1," + a.length + "}";
                    }).replace(/[+()]/g, "\\$&");
                reg = new RegExp("^" + reg + "$");
                if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) {
                    this.value = newValue;
                }
                if (event.type == "blur" && this.value.length < 5) {
                    this.value = "";
                }
        
            }
        
            for (const elem of elems) {
                elem.addEventListener("input", mask);
                elem.addEventListener("focus", mask);
                elem.addEventListener("blur", mask);
            }
            
        }

        const helper = {
            replaces: {
                enlargerLetters: function(str){
                    return str.replace(/( |^)[а-яёa-z]/g, function(x) {return x.toUpperCase();});
                },
                spaceMinDelete: function(str){
                    return str.replace(/^(\s+|\-+)+|(\s+|\-+)+$/g, '');
                },
                spaceDelete: function(str){
                    return str.replace(/(\s+)+/g, ' ');
                },
                minusDelete: function(str){
                    return str.replace(/(\-+)+/g, '-');
                }
            },
            checks: {
                onlyCyrillic: function(str){
                    return /[а-яё\s\B]/i.test(str);
                },

                onlyEmail: function(str){
                    return /[a-z\@\-\_\.\~\*\']/i.test(str);
                },

                onlyNumber: function(str){
                    return /[0-9\B\-]/i.test(str);
                }
            },
        };
        
        // БЛОК С ОБРАТНОЙ СВЯЗЬЮ
        const feedBack = ()=> {
            // ввод имени
            const nameValidity = (selector)=> {
                document.querySelectorAll(selector).forEach((item)=>{
                    item.addEventListener('keydown', (event)=> {
                        if(!helper.checks.onlyCyrillic(event.key) || event.key === 'b' || event.key === 'B'){
                            return event.preventDefault();
                        }
                    });

                    item.addEventListener('blur', (event)=> {
                        event.target.value = helper.replaces.enlargerLetters(event.target.value);
                        event.target.value = helper.replaces.minusDelete(event.target.value);
                        event.target.value = helper.replaces.spaceDelete(event.target.value);
                        event.target.value = helper.replaces.spaceMinDelete(event.target.value);
                    });
                });
            };
            // ввод email
            const emailValidity = (selector)=> {
                document.querySelectorAll(selector).forEach((item)=> {
                    item.addEventListener('keydown', (event)=> {
                        if(!helper.checks.onlyEmail(event.key) || event.key === 'b' || event.key === 'B'){
                            return event.preventDefault();
                        }
                    });

                    item.addEventListener('blur', (event)=> {
                        event.target.value = helper.replaces.spaceMinDelete(event.target.value);
                        event.target.value = helper.replaces.minusDelete(event.target.value);
                    });
                });
            };

            // сообщение в блоке "ваше сообщение"
            const yourMessage = document.querySelector('input[placeholder="Ваше сообщение"]');
            yourMessage.addEventListener('keydown', (event)=> {
                if(!helper.checks.onlyCyrillic(event.key) || event.key === 'b' || event.key === 'B'){
                    return event.preventDefault();
                }
            });

            yourMessage.addEventListener('blur', (event)=> {
                event.target.value = helper.replaces.minusDelete(event.target.value);
                event.target.value = helper.replaces.spaceDelete(event.target.value);
                event.target.value = helper.replaces.spaceMinDelete(event.target.value);
            });
            
            // калькулятор
            document.querySelectorAll('.calc-item').forEach((item)=> {
                item.addEventListener('keydown', (event)=> {
                    if(!(/[0-9\B]/g.test(event.key)) || event.key === 'b' || event.key === 'B'){
                        return event.preventDefault();
                    }
                });
            });

            maskPhone('input[name="user_phone"]');
            nameValidity('input[placeholder="Ваше имя"]');
            emailValidity('input[type="email"]');
        };
        feedBack();

        // калькулятор
        const calculated = (price = 100)=> {
            const calcBlock = document.querySelector('.calc-block'),
                calcType = document.querySelector('.calc-type'),
                calcSquare = document.querySelector('.calc-square'),
                calcCount = document.querySelector('.calc-count'),
                calcDay = document.querySelector('.calc-day'),
                totalValue = document.getElementById('total');
                const countSum = ()=> {
                    let total = 0;
                    let countValue = 1;
                    let dayValue = 1;
                    let typeValue = +calcType.options[calcType.selectedIndex].value,
                        squareValue = +calcSquare.value;

                    if(calcCount.value > 1){
                        countValue += (calcCount.value - 1) / 10;
                    }

                    if(calcDay.value && calcDay.value < 5){
                        dayValue *= 2;
                    } else if(calcDay.value && calcDay.value < 10){
                        dayValue *= 1.5;
                    }

                    
                    if(typeValue && squareValue){
                        total = price * typeValue * squareValue * countValue * dayValue;
                    } else {
                        total = 0;
                    }
                    totalValue.textContent = Math.floor(total);
                };

                calcBlock.addEventListener('change', (event)=> {
                    const target = event.target;
                    if(target.matches('select') || target.matches('input')){
                        countSum();
                    }
                });
        };
        calculated(200);

        const sendForm = ()=> {
            const errorMessage = 'Что-то пошло не так',
                loadedMessage = 'Загрука...',
                successMessage = 'Данные отправлены, мы с вами скоро свяжемся';
        
            const form = document.getElementById('form1');
            const form2 = document.getElementById('form2');
            const form3 = document.getElementById('form3');   
            const statusMessage = document.createElement('div');
            statusMessage.style.fontSize = '25px';
            // очистка полей ввода
            const dataPreparation = (form)=> {
                const valid = new Validator({
                    selector: `#${form.id}`,
                    pattern:{},
                    method:{
                        'form1-email':[
                            ['notEmpty'],
                            ['pattern', 'email']
                        ],
                        'form1-name':[
                            ['notEmpty'],
                            ['pattern', 'name']
                        ],
                        'form2-email':[
                            ['notEmpty'],
                            ['pattern', 'email']
                        ],
                        'form2-name':[
                            ['notEmpty'],
                            ['pattern', 'name']
                        ],
                        'form2-message':[
                            ['notEmpty'],
                            ['pattern', 'message']
                        ],
                        'form3-email':[
                            ['notEmpty'],
                            ['pattern', 'email']
                        ],
                        'form3-name':[
                            ['notEmpty'],
                            ['pattern', 'name']
                        ],
                    }
                });
                valid.init();
        
                form.addEventListener('submit', (event)=> {
                    
                    event.preventDefault();
                    if(event.target.matches('#form1')){
                        form.appendChild(statusMessage);
                    }
                    let inputValidate = valid.error.size;
                    if(inputValidate > 0){
                        return event.preventDefault();
                    }
        
                    const formData = new FormData(form);
                    const body = {};
        
                    
        
                    formData.forEach((elem, key)=> {
                        body[key] = elem;
                    });
        
                    const successfulDispatch = ()=> {
                        statusMessage.textContent = successMessage
                        form.querySelectorAll('input').forEach((item)=> {
                            item.value = '';
                        });
                    }
        
                    const errorOutput = (error)=> {
                        statusMessage.style.color = 'red';
                        statusMessage.textContent = errorMessage;
                        console.log(error);
                    }
        
                    postData(body)
                        .then(successfulDispatch)
                        .catch(errorOutput)
                });
                
            };
            dataPreparation(form);
            dataPreparation(form2);
            dataPreparation(form3);
            
        
            const postData = (body)=> {
        
                return new Promise((resolve, reject) => {
                    const request = new XMLHttpRequest();
                
                    request.addEventListener('readystatechange', ()=> {
                    statusMessage.textContent = loadedMessage;
                    
                    if(request.readyState !== 4){
                        return;
                    }
                    if(request.status === 200){
                        resolve();
        
                    } else{
                        reject(request.status);
                    }
        
                    });
                    request.open('POST', './server.php');
                    request.setRequestHeader('Content-Type', 'application/json');
                    request.send(JSON.stringify(body));
                })
                
            };
        };
        sendForm();
});