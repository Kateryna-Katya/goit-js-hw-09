const formData = { email: "", message: "" };

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');

function saveToLocalStorage() {
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function loadFromLocalStorage() {
    const savedData = localStorage.getItem('feedback-form-state');
    if (savedData) {
        const parsedData = JSON.parse(savedData);
        formData.email = parsedData.email || "";
        formData.message = parsedData.message || "";
        emailInput.value = formData.email;
        messageInput.value = formData.message;
    }
}

function onInput(event) {
    formData[event.target.name] = event.target.value.trim();
    saveToLocalStorage();
}

function onSubmit(event) {
    event.preventDefault();
    if (formData.email === "" || formData.message === "") {
        return;
    }

    localStorage.removeItem('feedback-form-state');
    form.reset();
    formData.email = "";
    formData.message = "";
}

form.addEventListener('input', onInput);
form.addEventListener('submit', onSubmit);
document.addEventListener('DOMContentLoaded', loadFromLocalStorage);
