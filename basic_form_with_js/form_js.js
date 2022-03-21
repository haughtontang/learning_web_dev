// I believe JS convention is to use camel casing
// Accessing the DOM (Document object model)
const myForm = document.querySelector('#my_form')
const nameInput = document.querySelector('#name')
const emailInput = document.querySelector('#email')
const msg = document.querySelector('.msg')
const userList = document.querySelector('#users')
const varArray = [myForm, nameInput, emailInput, msg, userList]

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

        // Once appended, clear the input fields
        nameInput.value = '';
        emailInput.value = '';
    }
}