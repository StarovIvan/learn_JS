'use strict';
function DomElement(selector , height, width, bg, fontSize, position, left, up){
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
    this.position = position;
    this.left = left;
    this.up =  up;

}


DomElement.prototype.createElements = function(){
    let selec = this.selector.charAt(0);

    if(selec === '.'){
        let text = '';
        let newDiv = document.createElement("div");
        newDiv.classList.add('block');
        newDiv.innerHTML =` <h1>${text}</h1>`;

        newDiv.style.height = this.height;
        newDiv.style.width = this.width;
        newDiv.style.background = this.bg;
        newDiv.style.fontSize = this.fontSize;
        newDiv.style.position = this.position;
        newDiv.style.left = this.left;
        newDiv.style.left = this.left;
        newDiv.style.up = this.up;
        document.body.append(newDiv);

    } else if(selec === '#'){
        let text = '';
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

// const createBlock = new DomElement('.block', '100px', '100px', 'blue', '30px','absolute');
// const createId = new DomElement('#id', '40px', '170px', 'red', '25px');

// createBlock.createElements();
// createId.createElements();

let createBlock = new DomElement('.block', '100px', '100px', 'red', '30px' ,'absolute');
createBlock.createElements();
document.addEventListener('keydown', function(event){
    let createBlock;
    switch(event.code){

    }
    // if(event.code === 'ArrowRight'){
    //     createBlock = new DomElement('.block', '100px', '100px', 'red', '30px' ,'absolute', '100px');
    //     createBlock.createElements();
    // } else if(event.code === 'ArrowDown'){
    //     createBlock = new DomElement('.block', '100px', '100px', 'red', '30px' ,'absolute', '100px' , '100px');
    //     createBlock.createElements();
    // }
});