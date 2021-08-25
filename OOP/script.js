'use strict';
function DomElement(selector , height, width, bg, fontSize){
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
}


DomElement.prototype.createElements = function(){
    let selec = this.selector.charAt(0);

    if(selec === '.'){
        let text = prompt('введите текст');
        let newDiv = document.createElement("div");
        newDiv.classList.add('block');
        newDiv.innerHTML =` <h1>${text}</h1>`;

        newDiv.style.height = this.height;
        newDiv.style.width = this.width;
        newDiv.style.background = this.bg;
        newDiv.style.fontSize = this.fontSize;

        document.body.append(newDiv);

    } else if(selec === '#'){
        let text = prompt('введите текст');
        let newP = document.createElement("p");
        newP.id = 'best';
        newP.innerHTML = text;

        newP.style.height = this.height;
        newP.style.width = this.width;
        newP.style.background = this.bg;
        newP.style.fontSize = this.fontSize;

        document.body.append(newP);
    }
};

const createBlock = new DomElement('.block', '60px', '270px', 'blue', '30px');
const createId = new DomElement('#id', '40px', '170px', 'red', '25px');

createBlock.createElements();
createId.createElements();