//
$(document).ready(function () {
    if (sessionStorage.getItem('user') == null) {
    $("#modalName").modal();
    }
});

$(function () {
    var u;
    $('#submit').click(function () {
        sessionStorage.setItem("user", $("#name").val());
        u = sessionStorage.getItem('user');
        $('#userName').html(u);
    });
});

var u = sessionStorage.getItem('user');
$('#userName').html(u);


// visitor counter
var n = localStorage.getItem('counter');
if (n === null) {
    n = 1;
}
n++;
localStorage.setItem("counter", n);
document.getElementById('counterVisitor').innerHTML = 'Visitors: ' + n;