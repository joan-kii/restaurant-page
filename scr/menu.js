import { content } from './index';

export function menu() {
    const menuGreasy = document.createElement('div');
    menuGreasy.className = 'menuGreasy';
    const imageGreasy = document.createElement('img');
    imageGreasy.className = 'imageGreasy';
    menuGreasy.appendChild(imageGreasy);
    const textGreasy = document.createElement('p');
    textGreasy.className = 'textGreasy';
    textGreasy.innerText = 'Greasy burguer with greasy cheese.\nGreasy french fries and coke.\n12$';
    menuGreasy.appendChild(textGreasy);
    
    const menuSuperGreasy = document.createElement('div');
    menuSuperGreasy.className = 'menuSuperGreasy';
    const imageSuperGreasy = document.createElement('img');
    imageSuperGreasy.className = 'imageSuperGreasy';
    menuSuperGreasy.appendChild(imageSuperGreasy);
    const textSuperGreasy = document.createElement('p');
    textSuperGreasy.className = 'textSuperGreasy';
    textSuperGreasy.innerText = 'Super greasy burguer with super greasy cheese.\nSuper greasy french fries and coke.\n18$';
    menuSuperGreasy.appendChild(textSuperGreasy);

    const menuVegan = document.createElement('div');
    menuVegan.className = 'menuVegan';
    const imageVegan = document.createElement('img');
    imageVegan.className = 'imageVegan';
    menuVegan.appendChild(imageVegan);
    const textVegan = document.createElement('p');
    textVegan.className = 'textVegan';
    textVegan.innerText = 'Tofu burguer with lettuce.\nNo sauce. No salt. No flavor.\n35$';
    menuVegan.appendChild(textVegan);

    content.appendChild(menuGreasy);
    content.appendChild(menuSuperGreasy);
    content.appendChild(menuVegan);
}