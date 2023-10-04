const loadApiUrl = (nombre, telefono, email) => {

    const space = '%20';
    const newLine = '%0A';
    const comma = ',';
    
    const nameSender = `, soy${space}${nombre}`;
    const telephoneSender = `${space}puedes contactarme tambien en ${telefono}`;
    const emailSender = `${space}tambien${space}puedes${space}contactarme${space}en${space}mi${space}correo${space}${email}`;
    const official = '+595994220097';
    const apiWhatsappUrl = `https://api.whatsapp.com/send?phone=${official}&text=`;
    
    let message = `Hola`;
    const bodyMessage = `${newLine}Me${space}gustaria${space}conocer${space}el${space}paseo${space}de${space}los${space}mitos`;

    if (nombre != '') {
        message += nameSender;
    }

    message += bodyMessage;

    if (telefono != '') {
        message += comma + telephoneSender;
    }

    if (email != '') {
        message += comma + emailSender
    }

    return apiWhatsappUrl+message

}

document.getElementById('enviar').onclick = function () {
    
    location.href = loadApiUrl(document.getElementById('name').value, document.getElementById('telephone').value, document.getElementById('email').value);

}
