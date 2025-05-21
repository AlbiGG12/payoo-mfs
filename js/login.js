// s1 add event handler
document.getElementById('button-login').addEventListener('click', function (event) {
    // s2
    event.preventDefault();
    console.log('login button click');

    // s3 get the phone number
    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;

    console.log(phoneNumber, pinNumber);



    if (phoneNumber === '1234' && pinNumber === '1234') {
        window.location.href = 'payoo.html';
    }

    else {
        alert('Wrong Information')
    }
})