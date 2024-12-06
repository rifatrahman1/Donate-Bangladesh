const main_balance = parseFloat(document.getElementById('main_balance').innerText);

document.getElementById('noakhali_donate_btn').addEventListener('click', function () {

console.log('button clicked')

    const noakhali_input = parseFloat(document.getElementById('noakhali_input').value);
    const noakhali_donate_current_amount = parseFloat(document.getElementById('noakhali_donate_current_amount').innerText);

    if (noakhali_input > main_balance) {
        alert('Insufficient balance! Please enter a smaller amount.');
        document.getElementById('noakhali_input').value = '';
        return;
    }

    document.getElementById('noakhali_input').value = '';
    const amount_error = document.getElementById('amount_error');


    if (noakhali_input <= 0 || isNaN(noakhali_input)) {
        amount_error.classList.remove('hidden');
        return;
    }

    const noakhali_donate_amount = noakhali_donate_current_amount + noakhali_input;
    document.getElementById('noakhali_donate_current_amount').innerText = noakhali_donate_amount;


    const remaining_balance = main_balance - noakhali_donate_amount;
    document.getElementById('main_balance').innerText = remaining_balance;

    console.log('button clicked')

})





// document.addEventListener('DOMContentLoaded', function () {
//     // Ensure all elements are loaded before running the code
//     const main_balance_elem = document.getElementById('main_balance');
//     const noakhali_donate_btn = document.getElementById('noakhali_donate_btn');
//     const noakhali_input_elem = document.getElementById('noakhali_input');
//     const noakhali_donate_current_amount_elem = document.getElementById('noakhali_donate_current_amount');
//     const amount_error = document.getElementById('amount_error');

//     // Check if all required elements exist
//     if (!main_balance_elem || !noakhali_donate_btn || !noakhali_input_elem || !noakhali_donate_current_amount_elem || !amount_error) {
//         console.error('One or more DOM elements are missing!');
//         return;
//     }

//     // Get main balance from the DOM
//     const main_balance = parseFloat(main_balance_elem.innerText);
//     if (isNaN(main_balance)) {
//         alert('Error: Invalid balance value');
//         return;
//     }

//     // Set event listener for the donate button
//     noakhali_donate_btn.addEventListener('click', function () {

//         // Get input value and current donate amount
//         const noakhali_input = parseFloat(noakhali_input_elem.value);
//         const noakhali_donate_current_amount = parseFloat(noakhali_donate_current_amount_elem.innerText);

//         // Validate if the input value is greater than main balance
//         if (noakhali_input > main_balance) {
//             alert('Insufficient balance! Please enter a smaller amount.');
//             noakhali_input_elem.value = '';  // Clear input field
//             return;
//         }

//         // Clear input after donation is processed
//         noakhali_input_elem.value = '';

//         // Validate if input is a valid number greater than 0
//         if (noakhali_input <= 0 || isNaN(noakhali_input)) {
//             amount_error.classList.remove('hidden');  // Show error message
//             return;
//         }

//         // Calculate new donate amount
//         const noakhali_donate_amount = noakhali_donate_current_amount + noakhali_input;
//         noakhali_donate_current_amount_elem.innerText = noakhali_donate_amount;

//         // Calculate remaining balance
//         const remaining_balance = main_balance - noakhali_donate_amount;
//         main_balance_elem.innerText = remaining_balance;

//         // Hide error message if input is valid
//         amount_error.classList.add('hidden');
//     });
// });
