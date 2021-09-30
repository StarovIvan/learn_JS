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
                return event.preventDefault();
            }
            
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
        elem.classList.add('error');
        if(elem.nextElementSibling && elem.nextElementSibling.classList.contains('validator-error')){
            return;
        }
        const errorDiv = document.createElement('div');
        errorDiv.textContent = 'ввод только русских букв';
        errorDiv.classList.add('validator-error');
        elem.insertAdjacentElement('afterend', errorDiv);
    }

    showSuccess(elem){
        elem.classList.remove('error');
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
            font-weight:bold;
            text-transform: lowercase;
            font-family: sans-serif;
            color: red;
        }
        `;
        document.head.appendChild(style);
    }

    setPattern(){
        this.pattern.name = /[а-яё]/ig;
    }
}
document.querySelectorAll('form[name="user_form"]').forEach((item)=>{

    const valid = new Validator({
        selector: `#${item.id}`,
        pattern:{
            name:/[а-яё]/ig
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
            'form2-message':[
                ['notEmpty'],
                ['pattern', 'name']
            ],

        }
    });
    valid.init();
});