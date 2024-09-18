// // Get form element by id
// const registerForm = document.querySelector('#login');
// // Handle form submit event
// registerForm.addEventListener('submit', function (event) {
//     event.preventDefault();
//     // Collect form data
//     const formData = new FormData(registerForm);
//     // Send data to backend
//     // Display success message to user
//     const messageH1 = document.querySelector('#success');
// messageH1.textContent = 'Account login successful';
// });

// Write fullName function
function fullName(firstName, lastName) {
    // return firstName + lastName; 
    return `${firstName} ${lastName}`;
}

const myName = fullName('Amanda', ' Tagoe');
console.log(myName);
