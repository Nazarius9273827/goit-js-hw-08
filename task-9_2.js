document.addEventListener('DOMContentLoaded', () => {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const saveBtn = document.getElementById('saveBtn');

    const savedData = JSON.parse(localStorage.getItem('formData')) || {};
    if (savedData.name) nameInput.value = savedData.name;
    if (savedData.email) emailInput.value = savedData.email;

    saveBtn.addEventListener('click', () => {
        const formData = {
            name: nameInput.value,
            email: emailInput.value
        };
        localStorage.setItem('formData', JSON.stringify(formData));
        alert('Дані збережено!');
    });
});