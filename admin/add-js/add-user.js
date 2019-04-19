$(document).ready(function () {
    var getuser = "https://tinder-69.appspot.com/api/v1/user/";

    var id = localStorage.getItem('secretToken');
   if(id){
       ADD();
   }else {
       localStorage.removeItem('secretToken');
       localStorage.removeItem('fullname');
       localStorage.removeItem('ism');
       localStorage.removeItem('month');
       localStorage.removeItem('halfYear');
       localStorage.removeItem('year');
       window.location.href = "login.html";
   }
});
function ADD() {
    $('#add-Users').on('submit', function (e) {

        var avatar = sessionStorage.getItem('avatar');
        var email = $('#email').val();
        var password = $('#password').val();
        var fullname = $('#fullname').val();
        var job = $('#Job').val();
        var phone = $('#phone').val();
        var maritalStatus = $('#maritalStatus option:selected').val();
        var educationLevel = $('#educationLevel option:selected').val();
        var birthday = $('#birthday').val();
        var gender = $('select#genderSDS').val();
        var hoppy = $('select#Hobby').val();
        var city = $('#cityId option:selected').val();
        var county = $('#countryId option:selected').val();
        var state = $('#stateId option:selected').val();

        var user = {
            "email": email,
            "password": password,
            "username": fullname,
            "avatar": avatar,
            "address": city +","+ state +","+ county,
            "phone": phone,
            "job": job,
            "birthday": birthday,
            "gender": gender,
            "hobby": hoppy,
            "album": "fileCollection",
            "maritalStatus": maritalStatus,
            "educationLevel": educationLevel
        };
        if (sessionStorage.getItem('listitem') != null) {
            var id = sessionStorage.getItem('listitem');
            var url = 'https://tinder-69.appspot.com/api/v1/user/';
            var type = 'PUT';
        } else {
            var url = 'https://tinder-69.appspot.com/api/v1/user/';
            var type = 'POST';
        }
        $.ajax({
            url: url,
            type: type,
            data: JSON.stringify(user),
            success: function (data) {
                window.location.href = "add-user.html";
                $.toast({
                    text: 'Đăng bài thành công',
                    position: 'top-right',
                    icon: 'success',
                    stack: false
                }).setTime(10000);
            }
        });
        e.preventDefault();

    });
    $('body').on('click', '#deleteuser', function (e) {
        e.preventDefault();
        var id =  $(this).data('ids');
        var url = 'https://tinder-69.appspot.com/api/v1/user/' +id;

        $.ajax({
            url: url,
            type: 'DELETE',
            async : true,
            timeout: 300000,
            success: function (data) {
                window.location.href = "add-user.html";
            }
        });
    });

    var count = 0;
    $.ajax({
        url: 'https://tinder-69.appspot.com/api/v1/user/',
        type: 'GET',
        success: function (dataz) {
            var list = '';

            $.each(dataz, function (key, data) {
                var stt = count;
                var ids = data.email;
                $.ajax({
                    url: "https://api.mlab.com/api/1/databases/matrimony/collections/dashboard/5cb9461fe7179a264cf2f4a8&u=true?apiKey=GySvt0pxEYMX3O8Qu9hsQCLZv5r95Jig",
                    type: 'PUT',
                    data: JSON.stringify({ "$set" : { "members" : stt }}),
                    contentType: 'application/json; charset=utf-8',
                    success: function (response) {
                    },
                    error: function (response, message) {
                    }
                });
                list += '<tr>\n' +
                    '                                                <td>' + stt + '</td>\n' +
                    '                                                <td class="cut-text-hidden" title="' + data.password + '">' + data.email + '</td>\n' +
                    // '                                                <td class="cut-text-hidden">' + data.password + '</td>\n' +
                    '                                                <td class="cut-text-hidden">' + data.username + '</td>\n' +
                    '                                                <td class="cut-text-hidden">' + data.age + '</td>\n' +
                    '                                                <td class="cut-text-hidden">' + data.birthday + '</td>\n' +
                    '                                                <td class="cut-text-hidden">' + data.gender + '</td>\n' +
                    '                                                <td class="cut-text-hidden">' + data.address + '</td>\n' +
                    '                                                <td class="cut-text-hidden demission">' + data.job + '</td>\n' +


                    '                                                <td class="table-user">\n' +
                    '                                                    <img src="  ' + data.avatar + '  "  class="mr-2 rounded-circle">\n' +
                    '                                                </td>\n' +
                    '\n' +
                    '\n' +
                    '                                                <td class="table-action">\n' +
                    '                                                    <a href="" id="editusre" data-ids="' + ids + '" class="action-icon"> <i class="mdi mdi-pencil"></i></a>\n' +
                    '                                                    <a href="" id="deleteuser" data-ids="' + ids + '"  class="action-icon"> <i class="mdi mdi-delete"></i></a>\n' +
                    '                                                </td>\n' +
                    '                                            </tr>'
                count++;
            });
            $('#List-user').html(list);

        }
    });



        // updete img , tải lên imgae nhiều file ,

    $('#avatar').on('change', function (e) {
            var files = e.target;
            var reader = new FileReader();
            reader.onload = function () {
                var dataURL = reader.result;
                sessionStorage.setItem('avatar', dataURL);
            };
            reader.readAsDataURL(files.files[0]);
        });

    var fileCollection = new Array();
    $('#update-img').on('change', function (e) {
            var files = e.target.files;

            $.each(files, function (i, file) {

                var reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = function (e) {
                    fileCollection.push(e.target.result);
                    var template = '<div id="remove" class="card mt-1 mb-0 shadow-none border border-light dz-processing dz-image-preview dz-success dz-complete">\n' +
                        '            <div class="p-2">\n' +
                        '                <div class="row align-items-center">\n' +
                        '                    <div class="col-auto">\n' +
                        '<img class="avatar-sm rounded bg-light" src="' + e.target.result + ' " style="width: 5rem;">' +
                        '                    </div>\n' +
                        '                    <div class="col pl-0">\n' +
                        '                        <a href="javascript:void(0);" class="text-muted font-weight-bold" data-dz-name="">' + file.name + '</a>\n' +
                        '                        <p class="mb-0" data-dz-size=""><strong>' + file.size + '</strong> </p>\n' +
                        '                    </div>\n' +
                        '                    <div class="col-auto">\n' +
                        '                        <!-- Button -->\n' +
                        '                        <a href="" class="btn btn-link btn-lg text-muted" id="delete-item" data-dz-remove="">\n' +
                        '                            <i class="dripicons-cross"></i>\n' +
                        '                        </a>\n' +
                        '                    </div>\n' +
                        '                </div>\n' +
                        '            </div>\n' +
                        '        </div>'
                    $('#views-img').append(image);
                };

            });
        });
}
function edituser(satarid) {
    var avatar = sessionStorage.getItem('avatar');
    var email = $('#email').val();
    var password = $('#password').val();
    var firtname = $('#firstName').val();
    var lastname = $('#lastName').val();
    var job = $('#Job').val();
    var phone = $('#phone').val();
    var maritalStatus = $('#maritalStatus option:selected').val();
    var educationLevel = $('#educationLevel option:selected').val();
    var birthday = $('#birthday').val();
    var gender =  $('select#genderSDS').val();
    var city =  $('#cityId option:selected').val();
    var county =  $('#countryId option:selected').val();
    var state =  $('#stateId option:selected').val();

    var user = {
        "email": email,
        "password": password,
        "firstName": firtname,
        "lastName": lastname,
        "avatar": avatar,
        "address":  city + state + county ,
        "phone": phone,
        "job": job,
        "birthday": birthday,
        "gender": gender,
        "maritalStatus": maritalStatus,
        "educationLevel": educationLevel
    };

    $.ajax({
        url: 'https://tinder-69.appspot.com/api/v1/user/',
        type: 'PUT',
        data: JSON.stringify(user),
        success: function (data) {
            sessionStorage.removeItem('avatar');
            window.location.href="profile.html";
        }
    });
}