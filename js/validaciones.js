function validarFormulario() {
    var name = document.getElementById('name').value;
    if (name == "") {
        document.querySelector('.status').innerHTML = "La casilla Nombre no es valida";
        return false;
    }
    var email = document.getElementById('email').value;
    if (email == "") {
        document.querySelector('.status').innerHTML = "La casilla correo no puede estar vacia";
        return false;
    } else {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(email)) {
            document.querySelector('.status').innerHTML = "El formato de correo no es valido!!";
            return false;
        }
    }
    var numero = document.getElementById('numero').value;
    if (numero == "") {
        document.querySelector('.status').innerHTML = "El número no es valido";
        return false;
    }

    if (numero <= 9999999 || numero > 99999999) {
        document.querySelector('.status').innerHTML = "El número no es valido (Recuerde solo poner los 8 digitos)";
        return false;
    }
    var message = document.getElementById('message').value;
    if (message == "") {
        document.querySelector('.status').innerHTML = "El mensaje no puede ir vacio";
        return false;
    }

    if (message.length < 28) {
        document.querySelector('.status').innerHTML = "El mensaje es muy corto";
        return false;

    }

    var status = document.querySelector('.status')
    status.setAttribute("class", "pb-4 green-text rounded status");
    document.querySelector('.status').innerHTML = "Enviando...";
    document.getElementById('contact-form').submit();
}