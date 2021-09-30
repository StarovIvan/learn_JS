class Validator{
    constructor({selector, pattern ={}, method}){
        this.form = document.querySelector(selector);
        this.pattern = pattern;
        this.method = method;
        this.elementsForm = [...this.form.elements].filter((item)=> {
            return item.tagName.toLowerCase() !== 'button' && item.type !== 'button';
        });
        this.error = new Set();
    }

    init(){
        
        this.setPattern();
        this.applyStyle();
        this.elementsForm.forEach((elem)=> {
            elem.addEventListener('change', this.checkIt.bind(this));
        });
        // this.applyStyle();
        this.form.addEventListener('submit', (event)=> {
            if(this.error.size > 0){
                event.preventDefault();
                return false;
            }
        });
        
    }

    isValid(elem){
        const validatorMethod = {
            notEmpty(elem) {
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
        // if(elem.nextElementSibling){
        //     return;
        // }
        // const errorDiv = document.createElement('div');
        
        // errorDiv.textContent = 'Введите корректно данные';
        // errorDiv.classList.add('validator-error');
        // // errorDiv.style.cssText = `
        // // color: red;`;
        // elem.insertAdjacentElement('afterend', errorDiv);
        
            // console.log(elem.nextElementSibling.classList.contains('validator-error'));
            
                // const errorDiv = document.createElement('div');
                // errorDiv.textContent = 'В этом поле ошибка';
                // errorDiv.classList.add('validator-error');
            
                // elem.insertAdjacentElement('afterend', errorDiv);
           

    }

    showSuccess(elem){
        elem.classList.remove('error');
        elem.classList.add('success');
        if(elem.nextElementSibling){
            elem.nextElementSibling.remove();
        }
    }

    setPattern(){
        if(!this.pattern.name){
            this.pattern.name = /[а-яё\s]/ig;
        }

        if(!this.pattern.email){
            this.pattern.email = /^\w+\@\w+\.\w{2,}$/;
        }

        if(!this.pattern.phone){
            this.pattern.phone = /[0-9\+]/g;
        }
        
    }

    applyStyle(){
        const style = document.createElement('style');
        style.textContent= `
        input.error{
            background: #ff0000;
        }

        input.success{
            background: 
            #31f7dd
            ;
        }
        `;
        document.head.appendChild(style);
    }
}