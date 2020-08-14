import { mainContent } from './index';

export function contact() {
    const divContact = document.createElement('div');
    divContact.className = 'divContact';

    const mapContact = document.createElement('div');
    mapContact.innerHTML = '<iframe width="400" height="400" src="https://maps.google.com/maps?q=Five%20Guys%20Enterprises%2C%20LLC%2010718%20Richmond%20Highway%2C%20Lorton%2C%20VA%2022079%20USAncisco&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>';
    mapContact.className = 'mapContact';
    mapContact.id = 'map';

    const textContact = document.createElement('p');
    textContact.className = 'textContact';
    textContact.innerText = 'We are in many places around the world.\n\
    Just put "five guys" in google search box.\n\
    Five Guys Enterprises, LLC 10718 Richmond Highway,\n\
    Lorton, VA 22079 USA.\n866-345-GUYS (4897)';

    divContact.appendChild(mapContact);
    divContact.appendChild(textContact);
    mainContent.appendChild(divContact);
};
