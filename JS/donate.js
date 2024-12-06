const main_balance = parseFloat(document.getElementById('main_balance').innerText);

document.getElementById('noakhali_donate_btn').addEventListener('click', function () {

    

    const noakhali_input = parseFloat(document.getElementById('noakhali_input').value);
    const noakhali_donate_current_amount = parseFloat(document.getElementById('noakhali_donate_current_amount').innerText);

    if (noakhali_input > main_balance) {
        alert('Insufficient balance! Please enter a smaller amount.');
        document.getElementById('noakhali_input').value = '';
        return;
    }

    document.getElementById('noakhali_input').value = '';
    const amount_error = document.getElementById ('amount_error');

    
    if (noakhali_input <= 0 || isNaN (noakhali_input)) {
        amount_error.classList.remove ('hidden');
        return;
    }

    const noakhali_donate_amount = noakhali_donate_current_amount + noakhali_input;
    console.log(noakhali_donate_amount);
    document.getElementById('noakhali_donate_current_amount').innerText = noakhali_donate_amount;
    

    const remaining_balance = main_balance - noakhali_donate_amount;
    document.getElementById('main_balance').innerText = remaining_balance;

    
})
