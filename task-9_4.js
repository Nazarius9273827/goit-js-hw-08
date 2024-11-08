document.addEventListener('DOMContentLoaded', loadContacts);

function loadContacts() {
    const contacts = JSON.parse(localStorage.getItem('contacts')) || [];
    contacts.forEach(contact => renderContact(contact));
}

function saveContacts() {
    const contacts = Array.from(document.querySelectorAll('#contactList li')).map(li => ({
        firstName: li.querySelector('.firstName').innerText,
        lastName: li.querySelector('.lastName').innerText,
        phone: li.querySelector('.phone').innerText,
        email: li.querySelector('.email').innerText
    }));
    localStorage.setItem('contacts', JSON.stringify(contacts));
}

function renderContact(contact) {
    const li = document.createElement('li');
    
    li.innerHTML = `
        <span class="firstName">${contact.firstName}</span> 
        <span class="lastName">${contact.lastName}</span> 
        <span class="phone">${contact.phone}</span> 
        <span class="email">${contact.email}</span> 
        <span class="edit">Редагувати</span> 
        <span class="delete">Видалити</span>
    `;
    
    li.querySelector('.edit').addEventListener('click', () => editContact(contact, li));

    li.querySelector('.delete').addEventListener('click', () => deleteContact(contact, li));

    document.getElementById('contactList').appendChild(li);
}

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const email = document.getElementById('email').value.trim();

    if (firstName && lastName && phone && email) {
        const contact = { firstName, lastName, phone, email };
        renderContact(contact);
        saveContacts();
        this.reset();
    }
});

function editContact(contact, li) {
    const newFirstName = prompt('Редагувати ім\'я:', contact.firstName);
    const newLastName = prompt('Редагувати прізвище:', contact.lastName);
    const newPhone = prompt('Редагувати телефон:', contact.phone);
    const newEmail = prompt('Редагувати електронну адресу:', contact.email);

    if (newFirstName && newLastName && newPhone && newEmail) {
        contact.firstName = newFirstName;
        contact.lastName = newLastName;
        contact.phone = newPhone;
        contact.email = newEmail;

        li.querySelector('.firstName').innerText = newFirstName;
        li.querySelector('.lastName').innerText = newLastName;
        li.querySelector('.phone').innerText = newPhone;
        li.querySelector('.email').innerText = newEmail;

        saveContacts();
    }
}

function deleteContact(contact, li) {
    if (confirm(`Ви впевнені, що хочете видалити контакт ${contact.firstName} ${contact.lastName}?`)) {
        li.remove();
        saveContacts();
    }
}