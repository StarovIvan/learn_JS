'use strict';

const weekRu = ['понедельник' , 'вторник' , 'среда' , 'четверг' , 'пятница' , 'суббота' , 'воскресенье'];
const weekEn = ['monday', 'tyesday',  'wednesday',  'thursday',  'friday',  'saturday', 'sunday'];

let lang = prompt('Введите язык (ru или en)');

if(lang === 'en'){
    console.log(weekEn);
}else if(lang === 'ru') {
    console.log(weekRu);
} else {
    console.log('Поопробуйте ещё');
}


switch (lang){
    case 'ru':
        console.log(weekRu);
        break;
    case 'en':
        console.log(weekEn);
        break;
}

const multArray = {
    ru: weekRu,
    en: weekEn
};
    
console.log(multArray[lang]);



let namePerson = prompt('Введите имя');
const director = 'Директор';
const teacher = 'Преподаватель';
const student = 'Студент';

let nameShow = namePerson === 'Артём'  ? director : namePerson === 'Максим' ? teacher : student;
console.log(nameShow);