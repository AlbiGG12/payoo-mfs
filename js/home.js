// add money to the account

// step1 add eventhandler
document.getElementById('btn-add-money')
    .addEventListener('click', function (event) {
        event.preventDefault();

        // step 2 get money to be added to the account
        const addMoneyInput = document.getElementById('input-add-money').value;
        console.log(addMoneyInput);


        // get the pin number 
        const pinNumberInput = document.getElementById('input-pin-number').value;
        console.log(pinNumberInput);

    })