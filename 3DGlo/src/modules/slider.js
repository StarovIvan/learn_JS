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

export default slider