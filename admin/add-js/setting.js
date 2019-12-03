$(document).ready(function () {
    var id = localStorage.getItem('secretToken');
    if(id){
        background();
    }else {
        localStorage.removeItem('secretToken','fullname');
        window.location.href = 'login.html';
    }
    function background() {
        $('#background-setting').on('click',function () {

        })
    }
});