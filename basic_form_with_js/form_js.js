// I believe JS convention is to use camel casing
// Accessing the DOM (Document object model)
const myForm = document.querySelector('#my_form')
const nameInput = document.querySelector('#name')
const emailInput = document.querySelector('#email')
const msg = document.querySelector('.msg')
const userList = document.querySelector('#users')
const body = document.body
const header = document.querySelector('#form_header')
const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
// Need to define an event listener to tell when a user has clicked a button
// Args - the input to listen for and what to do when that action is performed
myForm.addEventListener('submit', onSubmit);

function onSubmit(e){
    // Prevents the default behavior of submit
    e.preventDefault();

    if(nameInput.value === '' || emailInput.value === ''){
        // This statement dynamically links to the css file associated with this page and uses it to style the message
        msg.classList.add('error')
        msg.innerHTML = 'Please enter all fields';
        // Removes the error message after 3 seconds
        setTimeout(() => msg.remove(), 3000);
    } else {

        // Creates and assigns a value to list elements
        const li = document.createElement('li')
        li.appendChild(document.createTextNode(`${nameInput.value} | ${emailInput.value}`))

        // Appends those values to the ul created in the html file
        userList.appendChild(li);

        // Changes the colors for 3 seconds based on the first letter of the name
        const firstChar = nameInput.value.toLowerCase().charAt(0);
        const indexOfFirstChar = alphabet.indexOf(firstChar);
        let styleClass = '';
        if(indexOfFirstChar >= 0 & indexOfFirstChar < 9){
            body.classList.add('blue');
            header.classList.add('blue');
            styleClass = 'blue';
        }
        else if(indexOfFirstChar >= 9 & indexOfFirstChar < 18){
            body.classList.add('green');
            header.classList.add('green');
            styleClass = 'green';
        } else {
            body.classList.add('purple');
            header.classList.add('purple');
            styleClass = 'purple';
        }

        // Changes the style for 2.5 seconds
        setTimeout(function () {
            body.classList.remove(styleClass);
            header.classList.remove(styleClass);
            }, 2500);
        body.classList.add('body');
        header.classList.add('form_header');

        // Once appended, clear the input fields
        nameInput.value = '';
        emailInput.value = '';
    }
}