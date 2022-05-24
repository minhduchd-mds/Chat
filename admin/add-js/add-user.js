$(document).ready(function () {
    const getuser = "https://tinder-69.appspot.com/api/v1/user/";

    const id = localStorage.getItem('secretToken');
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
    // ADD();
});
function ADD() {
    $('#add-Users').on('submit', function (e) {

        let type;
        let url;
        const avatar = sessionStorage.getItem('avatar');
        const email = $('#email').val();
        const password = $('#password').val();
        const fullname = $('#fullname').val();
        const job = $('#Job').val();
        const phone = $('#phone').val();
        const maritalStatus = $('#maritalStatus option:selected').val();
        const educationLevel = $('#educationLevel option:selected').val();
        const birthday = $('#birthday').val();
        const gender = $('select#genderSDS').val();
        const hoppy = $('select#Hobby').val();
        const city = $('#cityId option:selected').val();
        const county = $('#countryId option:selected').val();
        const state = $('#stateId option:selected').val();

        const user = {
            "email": email,
            "password": password,
            "username": fullname,
            "avatar": avatar,
            "address": city + "," + state + "," + county,
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
            const id = sessionStorage.getItem('listitem');
            url = 'https://tinder-69.appspot.com/api/v1/user/';
            type = 'PUT';
        } else {
            url = 'https://tinder-69.appspot.com/api/v1/user/';
            type = 'POST';
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
        const id = $(this).data('ids');
        const url = 'https://tinder-69.appspot.com/api/v1/user/' + id;

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

    let count = 0;
    $.ajax({
        url: 'https://tinder-69.appspot.com/api/v1/user/',
        type: 'GET',
        success: function (dataz) {
            let list = '';

            $.each(dataz, function (key, data) {
                const stt = count;
                const ids = data.email;
                //  put danh sach thanh vien
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
                    '                                                <td scope="row">' + stt + '</td>\n' +
                    '                                                <td class="table-user">\n' +
                    '                                                    <img src=" ' + data.avatar + '  "  class="mr-2 rounded-circle" alt="' + data.username + '">'+ data.username +
                    '                                                </td>' +
                    '                                                <td class="cut-text-hidden" title="' + data.password + '">' + data.email + '</td>\n' +
                    '                                                <td class="cut-text-hidden">' + data.age + '</td>\n' +
                    '                                                <td class="cut-text-hidden">' + data.birthday + '</td>\n' +
                    '                                                <td class="cut-text-hidden">' + data.gender + '</td>\n' +
                    '                                                <td class="cut-text-hidden">' + data.address + '</td>\n' +
                    '                                                <td class="cut-text-hidden demission">' + data.job + '</td>\n' +
                    '\n' +
                    '\n' +
                    '                                                <td class="table-action">\n' +
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
        const files = e.target;
        const reader = new FileReader();
        reader.onload = function () {
            const dataURL = reader.result;
            sessionStorage.setItem('avatar', dataURL);
            };
            reader.readAsDataURL(files.files[0]);
        });

    const fileCollection = [];
    $('#update-img').on('change', function (e) {
        const files = e.target.files;

        $.each(files, function (i, file) {

                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = function (e) {
                    fileCollection.push(e.target.result);
                    var template = '<div id="remove" class="card mt-1 mb-0 shadow-none border border-light dz-processing dz-image-preview dz-success dz-complete">\n' +
                        '            <div class="p-2">\n' +
                        '                <div class="row align-items-center">\n' +
                        '                    <div class="col-auto">\n' +
                        '<img class="avatar-sm rounded bg-light" src="' + e.target.result + ' " style="width: 5rem;" alt="'+e.target.result+'">' +
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
function edituesr(satarid) {
    const avatar = sessionStorage.getItem('avatar');
    const email = $('#email').val();
    const password = $('#password').val();
    const firtname = $('#firstName').val();
    const lastname = $('#lastName').val();
    const job = $('#Job').val();
    const phone = $('#phone').val();
    const maritalStatus = $('#maritalStatus option:selected').val();
    const educationLevel = $('#educationLevel option:selected').val();
    const birthday = $('#birthday').val();
    const gender = $('select#genderSDS').val();
    const city = $('#cityId option:selected').val();
    const county = $('#countryId option:selected').val();
    const state = $('#stateId option:selected').val();

    const user = {
        "email": email,
        "password": password,
        "firstName": firtname,
        "lastName": lastname,
        "avatar": avatar,
        "address": city + state + county,
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
