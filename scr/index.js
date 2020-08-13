import { home } from './home';
import { navBar } from './navBar';
import { menu } from './menu';

const content = document.getElementById('content');
export const navContent = document.createElement('div');
navContent.id = 'navContent';
export const mainContent = document.createElement('div');
mainContent.id = 'mainContent';
mainContent.className = 'mainContent';


content.appendChild(navContent);
content.appendChild(mainContent);

navBar();
home();

const logoButton = document.getElementById('logo');
logoButton.addEventListener('click', () => {
    mainContent.textContent = '';
    home();
});

const menuButton = document.getElementById('menu');
menuButton.addEventListener('click', () => {
    mainContent.textContent = '';
    menu();
});

/* const aboutButton = document.getElementById('about');
aboutButton.addEventListener('click', () => {
    content.textContent = '';
    navBar();
    about();
});

const contactButton = document.getElementById('contact');
contactButton.addEventListener('click', () => {
    content.textContent = '';
    navBar();
    contact();
});*/
