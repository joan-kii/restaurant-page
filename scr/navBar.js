import { navContent } from './index'

export function navBar() {
    const topNav = document.createElement('div');
    topNav.className ='navBar';

    const linkNav = document.createElement('div');
    linkNav.className = 'linkNav';

    const logo = document.createElement('a');
    logo.className = 'logo';
    logo.id = 'logo';
    logo.textContent = 'SIX GUYS';

    const home = document.createElement('a');
    home.className = 'home';
    home.id = 'home';
    home.textContent = 'Home';

    const menu = document.createElement('a');
    menu.className = 'menu';
    menu.id = 'menu';
    menu.textContent = 'Menu';

    const about = document.createElement('a');
    about.className = 'about';
    about.id = 'about';
    about.textContent = 'About Us';

    const contact = document.createElement('a');
    contact.className = 'contact';
    contact.id = 'contact';
    contact.textContent = 'Contact';

    navContent.appendChild(topNav);
    topNav.appendChild(logo);
    linkNav.appendChild(contact);
    linkNav.appendChild(about);
    linkNav.appendChild(menu);
    linkNav.appendChild(home);
    topNav.appendChild(linkNav);
};