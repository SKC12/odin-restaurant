import * as menuTab from './menu.js';
import * as contactTab from './contact.js';


let content = document.getElementById("content");


const buildHome = () => {
    buildTopBar(content);
    buildBody(content);
    buildBotBar(content);


};

function buildTopBar(elem){
    let bar = document.createElement('div');
    bar.id = 'top-bar';

    let home = document.createElement('div');
    home.classList.add('bar-button');
    home.id="home-button";
    home.innerText = 'Home';
    home.addEventListener('click', buildBody);
    
    let menu = document.createElement('div');
    menu.classList.add('bar-button');
    menu.id="menu-button";
    menu.innerText = 'Menu';
    menu.addEventListener('click', ()=> menuTab.buildBody());

    let contact = document.createElement('div');
    contact.classList.add('bar-button');
    contact.id="contact-button";
    contact.innerText = 'Contact';
    contact.addEventListener('click', ()=> contactTab.buildBody());


    bar.appendChild(home);
    bar.appendChild(menu);
    bar.appendChild(contact);

    elem.appendChild(bar);
}

function buildBody(){
    clearElement(document.getElementById('main-container'));

    let container = document.createElement('div');
    container.id = 'main-container';

    let home = document.createElement('div');
    home.id = 'home';

    let title = document.createElement('div');
    title.classList.add('title');
    title.innerText="My Very Fine Restaurant";

    let desc = document.createElement('div');
    desc.classList.add('item');
    desc.innerText = "The very best restaurant in the region, according to my mom and all other family members. Come if you want to eat food and drink drinks. Extra text to make space. Yay.";
    
    let hours = document.createElement('div');
    hours.classList.add('item');
    hours.innerText = `Hours

    Sunday: 8am - 8pm    
    Monday: 6am - 6pm    
    Tuesday: 6am - 6pm    
    Wednesday: 6am - 6pm    
    Thursday: 6am - 10pm    
    Friday: 6am - 10pm    
    Saturday: 8am - 10pm`

    let loc = document.createElement('div');
    loc.classList.add('item');
    loc.innerText = `Location

    My Street, Number 245, my City, my State`;

    home.appendChild(title);
    home.appendChild(desc);
    home.appendChild(hours);
    home.appendChild(loc);

    container.appendChild(home);

    content.appendChild(container);
}

function buildBotBar(elem){
    let bar = document.createElement('div');
    bar.id = 'bottom-bar';

    let p1 = document.createElement('p');
    p1.innerText = "A restaurant by SKC";

    let p2 = document.createElement('p');
    p2.innerText = "Test2";

    let p3 = document.createElement('p');
    p3.innerText = "Test3";

    bar.appendChild(p1);
    //bar.appendChild(p2);
    //bar.appendChild(p3);

    elem.appendChild(bar);
    
}

function clearElement(elem){
    if(elem){
        content.removeChild(elem);
    }    
}

export {
    buildHome,
    buildBody};