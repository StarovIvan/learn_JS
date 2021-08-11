const books = document.querySelectorAll('.books');
const book = document.querySelectorAll('.book');
const adv = document.querySelector('.adv');



        // Восстановил порядок книг
book[0].before(book[1]);
book[3].before(book[4]);
book[5].after(book[2]);



        // изменил фоновую картинку
document.body.style.backgroundImage = 'url(./image/you-dont-know-js.jpg)';


        // Исправил заголовок в 3 книге
let titleBook3 = book[4].querySelector('a').textContent = 'Книга 3. this и Прототипы Объектов';
// 


// удалил рекламу 
adv.remove();



        // восстановил порядок глав во 2 и 5 книгах
let bookNumber2 = book[0].querySelectorAll('li');
bookNumber2[1].after(bookNumber2[3]);
bookNumber2[3].after(bookNumber2[6]);
bookNumber2[6].after(bookNumber2[8]);
bookNumber2[9].after(bookNumber2[2]);

let bookNumber5 = book[5].querySelectorAll('li');
bookNumber5[2].before(bookNumber5[9]);
bookNumber5[6].before(bookNumber5[2]);
bookNumber5[8].before(bookNumber5[5]);



        // добавил главу в 6 книге
let bookNumber6 = book[2].querySelectorAll('li');
let creElemBNum6 = document.createElement('li');
creElemBNum6.textContent = 'Глава 8: За пределами ES6';
bookNumber6[8].after(creElemBNum6);




