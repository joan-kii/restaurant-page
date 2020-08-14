import { home } from './home';
import { navBar } from './navBar';
import { menu } from './menu';
import { about } from './about';
import { contact } from './contact'; 

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

const homeButton = document.getElementById('home');
homeButton.addEventListener('click', () => {
    mainContent.textContent = '';
    home();
});

const menuButton = document.getElementById('menu');
menuButton.addEventListener('click', () => {
    mainContent.textContent = '';
    menu();
});

const aboutButton = document.getElementById('about');
aboutButton.addEventListener('click', () => {
    mainContent.textContent = '';
    about();
});

const contactButton = document.getElementById('contact');
contactButton.addEventListener('click', () => {
    mainContent.textContent = '';
    contact();
});
