const sendForm = ()=> {
    const errorMessage = 'Что-то пошло не так',
        loadedMessage = 'Загрука...',
        successMessage = 'Данные отправлены, мы с вами скоро свяжемся';

    const form = document.getElementById('form1');
    const form2 = document.getElementById('form2');
    const form3 = document.getElementById('form3');   
    const statusMessage = document.createElement('div');
    statusMessage.style.fontSize = '25px';
    statusMessage.style.color = '#fff';


    const dataPreparation = (form)=> {
        const valid = new Validator({
            selector: `#${form.id}`,
            pattern:{
                number: /^\+7\s[(]?\d{3}\)\s\d{3}-\d{2}-\d{2}$/
            },
            method:{
                'form1-name':[
                    ['notEmpty'],
                    ['pattern', 'name']
                ],
                'form2-name':[
                    ['notEmpty'],
                    ['pattern', 'name']
                ],
                'form3-name':[
                    ['notEmpty'],
                    ['pattern', 'name']
                ],
                'form1-email':[
                    ['notEmpty'],
                    ['pattern', 'email']
                ],
                'form2-email':[
                    ['notEmpty'],
                    ['pattern', 'email']
                ],
                'form3-email':[
                    ['notEmpty'],
                    ['pattern', 'email']
                ],
                'form1-phone':[
                    ['notEmpty'],
                    ['pattern', 'number']
                ],
                'form2-phone':[
                    ['notEmpty'],
                    ['pattern', 'number']
                ],
                'form3-phone':[
                    ['notEmpty'],
                    ['pattern', 'number']
                ],
            }
        });
        valid.init();
        form.addEventListener('submit', (event)=> {
            
            event.preventDefault();
            if(event.target.matches('form')){
                form.appendChild(statusMessage);
            }

            if(valid.error.size > 0){
                return event.preventDefault();
            } 

            const formData = new FormData(form);
            const body = {};

            formData.forEach((elem, key)=> {
                body[key] = elem;
            });;

            const hiddenMessage = (elem)=> {
                setTimeout(()=> {
                    elem.remove();
                }, 2000)
            }
        
            postData(body)
            .then((response)=> {
                if(response.status !== 200){
                    throw new Error(`status not defined: ${response.status}`)
                }
                statusMessage.textContent = successMessage
                hiddenMessage(statusMessage)
            })
            .catch((error)=> {
                statusMessage.style.color = 'red';
                statusMessage.textContent = errorMessage;
                console.error(error);
                hiddenMessage(statusMessage)
            })
            .finally(()=> {
                form.querySelectorAll('input').forEach((item)=> {
                    item.value = '';
                });
            })
        });
        
    };
    dataPreparation(form);
    dataPreparation(form2);
    dataPreparation(form3);
    
    const postData = (body)=> {
        statusMessage.textContent = loadedMessage;
        return fetch('./server.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
    };
};

export default sendForm