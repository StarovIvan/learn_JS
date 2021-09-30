'use strict';
class Validator {
    constructor({selector, pattern = {}, method}){
        this.form = document.querySelector(selector);
        this.pattern = pattern;
        this.method = method;
        this.elementsForm = [...this.form.elements].filter((item)=> {
            return item.tagName.toLowerCase() !== 'button' && item.type !== 'button';
        });
        this.error = new Set();
    }

    init(){
        this.appplyStyle();
        this.setPattern();
        this.elementsForm.forEach((elem)=> {
            elem.addEventListener('change', this.checkIt.bind(this));
        });
        this.form.addEventListener('submit', (event)=> {
            this.elementsForm.forEach((elem)=> {
                this.checkIt({target: elem});
            });
            if(this.error.size){
                event.preventDefault();
            }
            // event.preventDefault();
            
        });
    }

    isValid(elem){
        const validatorMethod = {
            notEmpty(elem){
                if(elem.value.trim() === ''){
                    return false;
                }
                return true;
            },
            
            pattern(elem, pattern){
                return pattern.test(elem.value);
            }
        };
        
        
        const method = this.method[elem.id];
        if(method){
            return method.every((item)=> {
                return validatorMethod[item[0]](elem, this.pattern[item[1]]);
            });
        }
        return true;
        
    }

    checkIt(event){
        const target = event.target;
        if(this.isValid(target)){
            this.showSuccess(target);
            this.error.delete(target);
        } else {
            this.showError(target);
            this.error.add(target);
        }
    }

    showError(elem){
        elem.classList.remove('success');
        elem.classList.add('error');
        if(elem.nextElementSibling && elem.nextElementSibling.classList.contains('validator-error')){
            return;
        }
        const errorDiv = document.createElement('div');
        errorDiv.textContent = 'Ошибка в поле ввода';
        errorDiv.classList.add('validator-error');
        elem.insertAdjacentElement('afterend', errorDiv);
    }

    showSuccess(elem){
        elem.classList.remove('error');
        elem.classList.add('success');
        if(elem.nextElementSibling && elem.nextElementSibling.classList.contains('validator-error')){
            elem.nextElementSibling.remove();
        }
    }

    appplyStyle(){
        const style = document.createElement('style');
        style.textContent = `

        input.error {
            background: red;
        }

        .validator-error {
            font-size: 13px;
            color: red;
            font-family: sans-serif;
        `;
        document.head.appendChild(style);
    }

    setPattern(){
        if(!this.pattern.phone){
            this.pattern.phone = /^\+?[78]([-()]*\d){10}/;
        }

        if(!this.pattern.email){
            this.pattern.email = /^\w+\@\w+\.\w{2,}$/;
        }
    }

}
document.querySelectorAll('form[name="user_form"]').forEach((item)=> {
    const valid = new Validator({
        selector: `#${item.id}`,
        pattern:{
            name:/[а-яё]/ig,
            email:/\w+\@\w+\.\w{2,}/,
            phone:/^\+?[78]([-()]*\d){10}/,
            message:/[а-яё]/ig,
        },
        method:{
            'form1-phone':[
                ['notEmpty'],
                ['pattern', 'phone']
            ],
            'form1-email':[
                ['notEmpty'],
                ['pattern', 'email']
            ],
            'form1-name':[
                ['notEmpty'],
                ['pattern', 'name']
            ],
            'form2-phone':[
                ['notEmpty'],
                ['pattern', 'phone']
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
            'form3-phone':[
                ['notEmpty'],
                ['pattern', 'phone']
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
});
// const valid = new Validator({
//     selector: '#form1',
//     pattern:{
//         name:/[а-яё]/ig,
//         email:/\w+\@\w+\.\w{2,}/,
//         phone:/^\+?[78]([-()]*\d){10}/,

//     },
//     method:{
//         'form1-phone':[
//             ['notEmpty'],
//             ['pattern', 'phone']
//         ],
//         'form1-email':[
//             ['notEmpty'],
//             ['pattern', 'email']
//         ],
//         'form1-name':[
//             ['notEmpty'],
//             ['pattern', 'name']
//         ],
//         'form2-phone':[
//             ['notEmpty'],
//             ['pattern', 'phone']
//         ],
//         'form2-email':[
//             ['notEmpty'],
//             ['pattern', 'email']
//         ],
//         'form2-name':[
//             ['notEmpty'],
//             ['pattern', 'name']
//         ],
//         'form2-message':[
//             ['notEmpty'],
//             ['pattern', 'name']
//         ],
//         'form3-phone':[
//             ['notEmpty'],
//             ['pattern', 'phone']
//         ],
//         'form3-email':[
//             ['notEmpty'],
//             ['pattern', 'email']
//         ],
//         'form3-name':[
//             ['notEmpty'],
//             ['pattern', 'name']
//         ],
//     }
// });
// valid.init();