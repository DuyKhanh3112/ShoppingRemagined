function validateContact() {
    var message = document.f.message;
    var name = document.f.name;
    var email = document.f.email;

    var name_pattern = /^[A-Za-z_]+$/;
    var email_pattern = /^[A-Za-z]\w*(\.\w+)*\@\w+(\.\w{2,3})+$/;


    if (message == '') {
        document.getElementById('messageC').innerHTML = 'Um...yea, you have to write something to send this form';
        message.focus();
        return false;
    }

    if (name.value == '') {
        document.getElementById('nameC').innerHTML = 'Come on, you have a first name, don\'t you?';
        name.focus();
        return false;
    } else if (name_pattern.test(name.value) == false) {
        document.getElementById('nameC').innerHTML = 'Your name must consist of at least 2 characters';
        name.focus();
        return false;
    }

    if (email.value == '') {
        document.getElementById('emailC').innerHTML = 'No email, no message';
        email.focus();
        return false;
    } else if (email_pattern.test(email.value) == false) {
        document.getElementById('emailC').innerHTML = 'Invalid email';
        email.focus();
        return false;
    }
}