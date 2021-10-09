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

    const clearForm = ()=> {
        const form = popup.querySelectorAll('input');

        form.forEach((elem)=> {
            elem.value = '';
        })
    }


    popupBtn.forEach((elem)=> {
        elem.addEventListener('click', ()=> popup.style.display = 'block');
        elem.addEventListener('click', animationPopup);
    });

    popupClose.addEventListener('click', ()=> {
        popup.style.display = 'none';
        popupContent.style.top = '-62%';
    })

    popup.addEventListener('click', (event)=> {
        let target = event.target;
        if(target.classList.contains('popup-close')){
            popup.style.display = 'none';
            clearForm();
        } else {
            target = target.closest('.popup-content');
            if(!target){
                popup.style.display = 'none';
                clearForm();
            }
        }
    });
};

export default showBtn

