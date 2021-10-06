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

export default tabs