$(document).ready(function () {
    var register = "https://tinder-69.appspot.com/api/v1/user/";
    var login = "https://tinder-69.appspot.com/api/v1/login";
    var forgot = "https://api.mlab.com/api/1/databases/matrimony/collections/messages?apiKey=GySvt0pxEYMX3O8Qu9hsQCLZv5r95Jig";
    // // ========== Login SC ==========

    $('#btnLoginuser').click(function (e) {

        var isValidEmail = true;
        var isValidPassword = true;
        var email = $('#emailLogin').val();
        var password = $('#passLogin').val();
        if(email.length === 0){
            isValidEmail = false;
            $('.error-msgs').text('Nhap email');
        }else {
            isValidEmail = true;
            $('.error-msgs').remove();
        }
        if(password.length === 0){
            isValidPassword = false;
            $('.error-msg').text('Nhap password');
        }else {
            isValidPassword = true;
            $('.error-msg').remove();
        }
        if(isValidEmail && isValidPassword) {
            var meberdata = {
                'email': email,
                'password': password
            };
            if(meberdata){
                $.ajax({
                    url: login,
                    type: 'POST',
                    data: JSON.stringify(meberdata),
                    success: function (data) {
                        window.location.href = 'serach.html';
                        localStorage.setItem('email', email);
                    },
                    error: function (response, message) {
                        $('#Error-user').html('Email hoặc password sai. Vui lòng nhập lại ',message).css('color', '#c3bebe');
                    }
                });
            }
        }else {

        }
        e.preventDefault();
    });
    // // ========== Register SC ==========
    $('#btnregister').click( function (e) {

        // vanidate
        var isValidEmail = true;
        var isValidPassword = true;
        var email = $('#email').val();
        var password = $('#password').val();
        if(email.length === 0){
            isValidEmail = false;
            $('.error-msgs').text('Nhap email');
        }else {
            isValidEmail = true;
            $('.error-msgs').remove();
        }
        if(password.length === 0){
            isValidPassword = false;
            $('.error-msg').text('Nhap password');
        }else {
            isValidPassword = true;
            $('.error-msg').remove();
        }
        if(isValidEmail && isValidPassword){
            var data = {
                "email": email,
                "password": password
            };
            if(data){
                $.ajax({
                    url: register,
                    type: 'POST',
                    data: JSON.stringify(data),
                    // contentType: "application/json; charset=utf-8",
                    success: function (res) {
                        window.location.href = 'login.html';
                    },
                    error: function () {
                        alert('Error')
                    }
                });
            }
        }else {

        }
        e.preventDefault();
    });

    //============== Forgot Password ========

    $('#btnforgetPassword').on('click',function (e) {

        var EmailPhone = true;
        var emailPhones = $('#emailPhone').val();
        if(emailPhones.length === 0){
            EmailPhone  = false;
            $('.error').text('Nhập email hoặc phone');
        }else {
            EmailPhone = true;
            $('.error').remove();
        }
        if (EmailPhone) {
            var emailPhone = {

                "title":"Tìm lại password",
                "name" : "",
                "email": emailPhones,
                "messages":"",
                "date": (new Date())

            };

            if (emailPhone) {
                $.ajax({
                    url: forgot,
                    type: 'POST',
                    data: JSON.stringify(emailPhone),
                    contentType: 'application/json; charset=utf-8',
                    success: function (data) {
                        window.location.href = 'login.html';
                    },
                    error: function (response, message) {
                        $('#Error-emailPhone').html('Không tìm thấy email', message).css('color', '#c3bebe');
                    }
                });
            } else {
                return false;
            }
            e.preventDefault();
        }
    });
});
