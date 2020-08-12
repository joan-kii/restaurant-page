import { content } from './index';

export function home() {
    const divHome = document.createElement('div');
    divHome.className = 'divHome';

    const homeTitle = document.createElement('h1');
    homeTitle.className = 'homeTitle';
    homeTitle.innerText = 'Welcome to Six Guys!';

    const homeContent = document.createElement('p');
    homeContent.className = 'homeContent';
    homeContent.innerText = '"Just like Five Guys, but better.\n One more guy, makes the difference."';

    content.appendChild(divHome);
    divHome.appendChild(homeTitle);
    divHome.appendChild(homeContent);
};