function validatePassword() {
    var password = document.getElementById('userpass').value;
    var confirmPassword = document.getElementById('confirmPassword').value;


    if ( confirmPassword != '' && (password != confirmPassword)) {
        document.getElementById('confirmPassword').style.backgroundColor = 'rgb(233, 152, 152)'
    }
    else {
        document.getElementById('confirmPassword').style.backgroundColor = 'rgb(255, 255, 255)'

    }
}


