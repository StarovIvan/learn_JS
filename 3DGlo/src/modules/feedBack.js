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
        },
        getFirstCapitalLetter: function(str){
            return str.replace(/(\.\s*|^)[а-яёa-z]/g, function(x) {return x.toUpperCase();});
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
        },
        messageBlock: function(str){
            return /[а-яё\s\B\.\,]/i.test(str);
        }
    },
};

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

    // ввод номера телефона
    const numberValidality = (selector)=> {
        document.querySelectorAll(selector)
    }

    // сообщение в блоке "ваше сообщение"
    const yourMessage = document.querySelector('input[placeholder="Ваше сообщение"]');
    yourMessage.addEventListener('keydown', (event)=> {
        if(!helper.checks.messageBlock(event.key) || event.key === 'b' || event.key === 'B'){
            return event.preventDefault();
        }
    });

    yourMessage.addEventListener('blur', (event)=> {
        event.target.value = helper.replaces.getFirstCapitalLetter(event.target.value);
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
    // numberValidality('input[name="user_phone"]');
    nameValidity('input[placeholder="Ваше имя"]');
    emailValidity('input[type="email"]');
};

export default feedBack