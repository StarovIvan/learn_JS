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

export default teams