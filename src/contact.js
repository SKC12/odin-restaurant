let content = document.getElementById("content");

function buildBody(){
    clearElement(document.getElementById('main-container'));

    let container = document.createElement('div');
    container.id = 'main-container';

    let home = document.createElement('div');
    home.id = 'home';

    let title = document.createElement('div');
    title.classList.add('title');
    title.innerText="Contact Us";
    
    home.appendChild(title);

    let contactList = document.createElement('div');
    contactList.classList.add('contact-list');

    home.appendChild(contactList);

    let phoneContact = document.createElement('div');
    phoneContact.classList.add('contact-form');

    let phoneContactTitle = document.createElement('h3');
    phoneContactTitle.classList.add('contact-title');
    phoneContactTitle.innerText = 'Telephone:'

    let phoneContactNumbers = document.createElement('p');
    phoneContactNumbers.classList.add('contact-text');
    phoneContactNumbers.innerText = `55 9112 0101
    55 9112 0202`

    phoneContact.appendChild(phoneContactTitle);
    phoneContact.appendChild(phoneContactNumbers);

    let emailContact = document.createElement('div');
    emailContact.classList.add('contact-form');

    let emailContactTitle = document.createElement('h3');
    emailContactTitle.classList.add('contact-title');
    emailContactTitle.innerText = 'E-Mail:'

    let email = document.createElement('p');
    email.classList.add('contact-text');
    email.innerText = `myemail@emailprovider.com`

    emailContact.appendChild(emailContactTitle);
    emailContact.appendChild(email);

    contactList.appendChild(phoneContact);
    contactList.appendChild(emailContact);  

    container.appendChild(home);

    content.appendChild(container);
}

function clearElement(elem){
    if(elem){
        content.removeChild(elem);
    }    
}

export {
    buildBody
}