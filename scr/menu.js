import { mainContent } from './index';

export function menu() {
    const divMenu = document.createElement('div');
    divMenu.className = 'divMenu';

    const menuGreasy = document.createElement('div');
    menuGreasy.className = 'menuGreasy';
    const imageGreasy = document.createElement('img');
    imageGreasy.setAttribute('src', './images/greasy-burguer.jpg');
    imageGreasy.setAttribute('width', '400px');
    imageGreasy.className = 'imageGreasy';
    menuGreasy.appendChild(imageGreasy);
    const textGreasy = document.createElement('p');
    textGreasy.className = 'textGreasy';
    textGreasy.innerText = 'Greasy burguer with greasy cheese.\nGreasy french fries and coke.\n12$';
    menuGreasy.appendChild(textGreasy);
    
    const menuSuperGreasy = document.createElement('div');
    menuSuperGreasy.className = 'menuSuperGreasy';
    const imageSuperGreasy = document.createElement('img');
    imageSuperGreasy.setAttribute('src', './images/super-greasy-burguer.jpg');
    imageSuperGreasy.setAttribute('width', '400px');
    imageSuperGreasy.className = 'imageSuperGreasy';
    menuSuperGreasy.appendChild(imageSuperGreasy);
    const textSuperGreasy = document.createElement('p');
    textSuperGreasy.className = 'textSuperGreasy';
    textSuperGreasy.innerText = 'Super greasy burguer with super greasy cheese.\nSuper greasy french fries and coke.\n18$';
    menuSuperGreasy.appendChild(textSuperGreasy);

    const menuVegan = document.createElement('div');
    menuVegan.className = 'menuVegan';
    const imageVegan = document.createElement('img');
    imageVegan.setAttribute('src', './images/vegan-burguer.jpg');
    imageVegan.setAttribute('width', '400px');
    imageVegan.className = 'imageVegan';
    menuVegan.appendChild(imageVegan);
    const textVegan = document.createElement('p');
    textVegan.className = 'textVegan';
    textVegan.innerText = 'Tofu burguer with lettuce and other green things.\nFresh tap water.\nFat free. Gluten free. Flavor free.\n35$';
    menuVegan.appendChild(textVegan);

    divMenu.appendChild(menuGreasy);
    divMenu.appendChild(menuSuperGreasy);
    divMenu.appendChild(menuVegan);
    mainContent.appendChild(divMenu);
}