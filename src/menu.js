let content = document.getElementById("content");

function buildBody(){
    clearElement(document.getElementById('main-container'));

    let container = document.createElement('div');
    container.id = 'main-container';

    let home = document.createElement('div');
    home.id = 'home';

    let title = document.createElement('div');
    title.classList.add('title');
    title.innerText="Menu";
    
    home.appendChild(title);

    let menuList = document.createElement('div');
    menuList.classList.add('menu-list');

    home.appendChild(menuList);

    menuList.appendChild(createItem(false, 'Pizza', '$2.50', 'Tasty pizza'));
    menuList.appendChild(createItem(false, 'Hamburger', '$1.50', 'Very cheap hamburguer'));
    menuList.appendChild(createItem(false, 'Pasta', '$2.22', 'Pasta with lots of ingredients, like a lot of them, so the line of text is very, very, very long and takes lots and lots of space.'));
    menuList.appendChild(createItem(false, 'Dessert', '$1.50', 'A random dessert'));
    menuList.appendChild(createItem(false, 'Expensive Dessert', '$100.50', 'Unreasonably expensive'));
    menuList.appendChild(createItem(false, 'Everything', '$12.50', 'Everything in the whole world'));


    container.appendChild(home);

    content.appendChild(container);
}

function clearElement(elem){
    if(elem){
        content.removeChild(elem);
    }    
}

function createItem(pic, name, cost, description){
    let item = document.createElement('div');
    item.classList.add('item-container');

    let itemPic;

    if(!pic){
        itemPic = document.createElement('div');
        itemPic.classList.add('item-picture-placeholder');
        itemPic.innerText = "Placeholder";
    } else {
        itemPic = document.createElement('img');
        itemPic.setAttribute('src', pic);
        itemPic.classList.add('item-picture');
    }

    let itemContainer = document.createElement('div');
    itemContainer.classList.add("item-desc-container");

    let itemName = document.createElement('h3');
    itemName.classList.add('item-name');
    itemName.innerText = name;

    let itemCost = document.createElement('span');
    itemCost.classList.add('item-cost');
    itemCost.innerText = cost;

    itemName.appendChild(itemCost);

    let itemDescription = document.createElement('p');
    itemDescription.classList.add('item-description');
    itemDescription.innerText = description;

    itemContainer.appendChild(itemName);
    itemContainer.appendChild(itemDescription);

    item.appendChild(itemPic);
    item.appendChild(itemContainer);

    return item;
}

export {
    buildBody
};