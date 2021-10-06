import countTime from './modules/countTime.js'
import toggleMenu from './modules/toggleMenu.js'
import showBtn from './modules/showBtn.js'
import tabs from './modules/tabs.js'
import slider from './modules/slider.js'
import teams from './modules/teams.js'
import feedBack from './modules/feedBack.js'
import calculated from './modules/calculated.js'
import sendForm from './modules/sendForm.js'


// таймер 
countTime()
// меню бургер
toggleMenu();
// модальное окно
showBtn();
// табы 
tabs();
// слайдер
slider();
// замена фотографий
teams();
// БЛОК С ОБРАТНОЙ СВЯЗЬЮ
feedBack();
// калькулятор
calculated(200);
// отправка формы
sendForm();