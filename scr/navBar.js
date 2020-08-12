import { content } from './index'

export function navBar() {
    const topNav = document.createElement('div');
    topNav.className ='navBar';

    const linkNav = document.createElement('div');
    linkNav.className = 'linkNav';

    const logo = document.createElement('a');
    logo.className = 'logo';
    logo.textContent = 'SIX GUYS';

    const menu = document.createElement('a');
    menu.className ='menu';
    menu.textContent = 'Menu';

    const about = document.createElement('a');
    about.className = 'about';
    about.textContent = 'About Us';

    const contact = document.createElement('a');
    contact.className = 'contact';
    contact.textContent = 'Contact';

    content.appendChild(topNav);
    topNav.appendChild(logo);
    linkNav.appendChild(contact);
    linkNav.appendChild(about);
    linkNav.appendChild(menu);
    topNav.appendChild(linkNav);
};