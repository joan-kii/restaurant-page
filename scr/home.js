import { content } from './index';

export function home() {
    let homeTitle = document.createElement('h1');
    homeTitle.className = 'homeTitle';
    homeTitle.innerText = 'Welcome to Six Guys!';

    let homeContent = document.createElement('p');
    homeContent.className = 'homeContent';
    homeContent.innerText = '"Just like Five Guys, but better.\n One more guy, makes the difference."';

    content.appendChild(homeTitle);
    content.appendChild(homeContent);
};