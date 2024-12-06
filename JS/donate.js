// common function
function showSectionById(id) {
    document.getElementById('donation_part').classList.add('hidden');
    document.getElementById('history_list').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden');
};

document.getElementById('donation_tab').addEventListener('click', function () {
    showSectionById('donation_part');
});


document.getElementById('history_tab').addEventListener('click', function () {
    showSectionById('history_list')
});






let main_balance = parseFloat(document.getElementById('main_balance').innerText);
const modal_overlay = document.getElementById('modal_overlay');
const my_modal_1 = document.getElementById('my_modal_1');

// Noakhali Donation
document.getElementById('noakhali_donate_btn').addEventListener('click', function () {

    const noakhali_input = parseFloat(document.getElementById('noakhali_input').value);
    const noakhali_donate_current_amount = parseFloat(document.getElementById('noakhali_donate_current_amount').innerText);

    if (noakhali_input > main_balance) {
        alert('Insufficient balance! Please enter a smaller amount.');
        document.getElementById('noakhali_input').value = '';
        return;
    }

    if (noakhali_input <= 0 || isNaN(noakhali_input)) {
        document.getElementById('amount_error').classList.remove('hidden');
        return;
    }

    else {
        document.getElementById('amount_error').classList.add('hidden');
    }

    const noakhali_donate_amount = noakhali_donate_current_amount + noakhali_input;
    document.getElementById('noakhali_donate_current_amount').innerText = noakhali_donate_amount.toFixed(2);

    main_balance -= noakhali_input;
    document.getElementById('main_balance').innerText = main_balance.toFixed(2);

    document.getElementById('noakhali_input').value = '';

    // noakhali history list
    const noakhali_title = document.getElementById('noakhali_title');

    const history_item = document.createElement('div');
    history_item.className = ' p-8 rounded-lg border border-gray-200 ';
    history_item.innerHTML = `
  <h3 class= "text-xl font-bold" >${noakhali_input} Taka is ${noakhali_title.textContent} </h3>
   <p class="mt-4">Date: ${new Date()}</p>
   `

    const history_container = document.getElementById('history_list');
    history_container.insertBefore(history_item, history_container.firstChild);
    console.log('history list', history_container);

});

// Feni Donation
document.getElementById('feni_donate_btn').addEventListener('click', function () {
    const feni_input = parseFloat(document.getElementById('feni_input').value);
    const feni_donate_current_amount = parseFloat(document.getElementById('feni_donate_current_amount').innerText);

    if (feni_input > main_balance) {
        alert('Insufficient balance! Please enter a smaller amount.');
        document.getElementById('feni_input').value = '';
        return;
    }

    if (feni_input <= 0 || isNaN(feni_input)) {
        document.getElementById('amount_error2').classList.remove('hidden');
        return;
    } else {
        document.getElementById('amount_error2').classList.add('hidden');
    }

    const feni_donate_amount = feni_donate_current_amount + feni_input;
    document.getElementById('feni_donate_current_amount').innerText = feni_donate_amount.toFixed(2);

    main_balance -= feni_input;
    document.getElementById('main_balance').innerText = main_balance.toFixed(2);

    document.getElementById('feni_input').value = '';

    // feni history list
    const feni_title = document.getElementById('feni_title');

    const history_item = document.createElement('div');
    history_item.className = ' p-8 rounded-lg border border-gray-200 ';
    history_item.innerHTML = `
   <h3 class= "text-xl font-bold" >${feni_input} Taka is ${feni_title.textContent} </h3>
    <p class="mt-4">Date: ${new Date()}</p>
    `

    const history_container = document.getElementById('history_list');
    history_container.insertBefore(history_item, history_container.firstChild);
    console.log('history list', history_container)
});

// Quota Movement Donation
document.getElementById('qouta_donate_btn').addEventListener('click', function () {
    const qouta_input = parseFloat(document.getElementById('qouta_input').value);
    const qouta_donate_current_amount = parseFloat(document.getElementById('qouta_donate_current_amount').innerText);


    if (qouta_input > main_balance) {
        alert('Insufficient balance! Please enter a smaller amount.');
        document.getElementById('qouta_input').value = '';
        return;
    }

    if (qouta_input <= 0 || isNaN(qouta_input)) {
        document.getElementById('amount_error3').classList.remove('hidden');
        return;
    } else {
        document.getElementById('amount_error3').classList.add('hidden');
    }

    const qouta_donate_amount = qouta_donate_current_amount + qouta_input;
    document.getElementById('qouta_donate_current_amount').innerText = qouta_donate_amount.toFixed(2);

    main_balance -= qouta_input;
    document.getElementById('main_balance').innerText = main_balance.toFixed(2);

    document.getElementById('qouta_input').value = '';

    // qouta history list
    const qouta_title = document.getElementById('qouta_title');

    const history_item = document.createElement('div');
    history_item.className = ' p-8 rounded-lg border border-gray-200 ';
    history_item.innerHTML = `
   <h3 class= "text-xl font-bold" >${qouta_input} Taka is ${qouta_title.textContent} </h3>
    <p class="mt-4">Date: ${new Date()}</p>
    `

    const history_container = document.getElementById('history_list');
    history_container.insertBefore(history_item, history_container.firstChild);
    console.log('history list', history_container)
});



// history button part

// const footer_part = document.getElementById ('footer_tab');
const donation_part = document.getElementById('donation_part');
const donation_tab = document.getElementById('donation_tab');
const history_tab = document.getElementById('history_tab');

history_tab.addEventListener('click', function () {
    history_tab.classList.add(
        "bg-[#B4F461]"
    );
    history_tab.classList.remove(
        "text-[#111111B3]",
        "border"
    );
    donation_tab.classList.remove(
        "bg-[#B4F461]"
    );
    donation_tab.classList.add(
        "border",
        "border-[#1111114D",
        "text-[#111111B3]"

    );
    donation_part.classList.add(
        "hidden"
    );


});

donation_tab.addEventListener('click', function () {
    donation_tab.classList.add(
        "bg-[#B4F461]"
    );
    donation_tab.classList.remove(
        "text-[#111111B3]",
        "border"
    );
    history_tab.classList.remove(
        "bg-[#B4F461]"
    );
    history_tab.classList.add(
        "border",
        "border-[#1111114D",
        "text-[#111111B3]"
    );
    donation_part.classList.remove(
        "hidden"
    );
});
