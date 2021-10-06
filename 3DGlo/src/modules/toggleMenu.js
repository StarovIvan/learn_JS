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

export default toggleMenu