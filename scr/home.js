import {content} from './index';

export function home() {
    let homeContent = document.createElement('div');
    homeContent.className = 'homeContent';
    homeContent.innerText = 'Just like Five Guys but better. One more guy, makes the difference.';
    content.appendChild(homeContent);
};


<h1>Welcome to Six Guys</h1>