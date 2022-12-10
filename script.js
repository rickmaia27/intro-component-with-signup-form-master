let fname = document.getElementById('fname');
let lname = document.getElementById('lname');
let email = document.getElementById('email');
let password = document.getElementById('password');

// let erro = document.getElementById('erro')

function alert() {
    if (fname.value == '') {
        $('#erro1').removeClass('hide');
        $(fname).attr('placeholder', '');
    } else {
        $('#erro1').addClass('hide');
    }


    if (lname.value == '') {
        $('#erro2').removeClass('hide');
        $(lname).attr('placeholder', '');
    } else {
        $('#erro2').addClass('hide');
    }

    if (validaEmail(email.value) == false) {
        email.value = '';
        $('#erro3').removeClass('hide');
        $(email).attr('placeholder', 'email@example/com').addClass('edit-placeholder');
    } else {
        $('#erro3').addClass('hide');
    }

    if (password.value == '') {
        $('#erro4').removeClass('hide');
        $(password).attr('placeholder', '');
    } else {
        $('#erro4').addClass('hide');
    }
}

function validaEmail(email) {
  var regex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
  return regex.test(email);
}