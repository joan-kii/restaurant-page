import { home } from './home';
import { navBar } from './navBar';
import { menu } from './menu';

export const content = document.getElementById('content');

navBar();
home();

const logoButton = document.getElementById('logo');
logoButton.addEventListener('click', () => {
    content.textContent = '';
    navBar();
    home();
    console.log('logo')
});

const menuButton = document.getElementById('menu');
menuButton.addEventListener('click', () => {
    content.textContent = '';
    navBar();
    menu();
    console.log('menu')
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
});/*  */