import { mainContent } from './index';

export function contact() {
    const divContact = document.createElement('div');
    divContact.className = 'divContact';

    const mapContact = document.createElement('iframe');
    mapContact.setAttribute('src', 'https://www.google.es/maps/place/Five+Guys/@38.8687664,-77.1465025,18z/data=!3m2!4b1!5s0x89b7b4631d7078c1:0x7edf0a3a97ed0175!4m5!3m4!1s0x89b7b4631dfbb2ff:0xdcec5bf488e11a82!8m2!3d38.8687664!4d-77.1454082')
    mapContact.className = 'mapContact';

    const textContact = document.createElement('p');
    textContact.className = 'textContact';
    textContact.textContent = 'Many places around the world.\n\
    Just put "five guys" in google search box.\n\
    Five Guys Enterprises, LLC 10718 Richmond Highway,\n\
    Lorton, VA 22079 USA.\n\
    866-345-GUYS (4897)';

    divContact.appendChild(mapContact);
    divContact.appendChild(textContact);
    mainContent.appendChild(divContact);
    
}