import { mainContent } from './index'

export function about() {
        const divAbout = document.createElement('div');
        divAbout.className = 'divAbout';

        const imageAbout = document.createElement('img');
        imageAbout.setAttribute('src', './images/five-guys.jpg');
        imageAbout.className = 'imageAbout';

        const textAbout = document.createElement('p');
        textAbout.className = 'textAbout';
        textAbout.textContent = 'Mom always told us:\n\
        "If you can\'t give a good haircut or if you can\'t serve a good drink at a bar,\n\
        try to serve a greasy burger. That\'s a great way to make money in America.\"\n\
        Now we make a huge amount of money.'

        divAbout.appendChild(imageAbout);
        divAbout.appendChild(textAbout);
        mainContent.appendChild(divAbout);
};