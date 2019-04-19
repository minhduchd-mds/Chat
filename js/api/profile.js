$(document).ready(function () {

    // Lay ra secretToken id cua user
    var id =  localStorage.getItem('email');

    if(id){

        $.ajax({
            url: 'https://tinder-69.appspot.com/api/v1/user/'+id,
            // contentType: "application/json"
        }).done(function (data){

            var profile = '';
            var avatar = '';

            var add = data.address;
            // add.split(",")[0]
            if(add != null){
                var city = add.split(",")[0];
            }
            if(add != null){
                var state = add.split(",")[0];
            }
            if(add != null){
                var county = add.split(",")[0];
            }
            avatar +='<img src=" '+data.avatar +' " alt="avatar">';
            var photo = '';



            photo +='<li>\n' +
                '                                            <a href="" class="product-groups-item">\n' +
                '                                                <img src=" ' + data.album + ' " class="img-fluid" alt="album"/>\n' +
                '                                            </a>\n' +
                '                                        </li>';

            profile +=' <form id="Users" method="get">' +
                '                        <div class="row">\n' +
                '                            <div class="form-group  col-md-6">\n' +
                '                                <label for="fullname">Họ và tên</label>\n' +
                '<h5 class="viewsa">'+data.username+'</h5>'+
                '                                <input type="text" id="fullname" class="form-control" value="'+data.username+'" required>\n' +
                '                            </div>\n' +
                '                            <div class="form-group  col-md-6">\n' +
                '                                <label for="gender">Giới tính </label>\n' +
                '<h5 class="viewsa">'+data.gender+'</h5>'+
                '                                <select name="" id="gender"  class="custom-select" required>\n' +
                '                                    <option  value="' + data.gender + '">' + data.gender + '</option>\n' +
                '                                    <option  value="Nam">Nam</option>\n' +
                '                                    <option  value="Nữ">Nữ</option>\n' +
                '                                </select>\n' +
                '                            </div>\n' +
                '\n' +
                '                            <div class="form-group col-md-6">\n' +
                '                                <label for="birthday">Sinh nhật </label>\n' +
                '<h5 class="viewsa">'+data.birthday+'</h5>'+
                '                                <input type="text" class="form-control" id="birthday" value="'+data.birthday+'" data-toggle="input-mask" data-mask-format="00/00/0000" maxlength="10">\n' +
                '                            </div>\n' +
                '\n' +
                '                            <div class="form-group col-md-6">\n' +
                '                                <label for="phone">Điện thoại</label>\n' +
                '<h5 class="viewsa">'+data.phone+'</h5>'+
                '                                <input type="text" class="form-control" id="phone" value="'+data.phone+'" data-toggle="input-mask" data-mask-format="(00) 00000000" maxlength="14" required="">\n' +
                '                            </div>\n' +
                '                            <div class="form-group col-md-6">\n' +
                '                                <label for="maritalStatus">Tình trạng hôn nhân </label>\n' +
                '<h5 class="viewsa">'+data.maritalStatus+'</h5>'+
                '                                <select id="maritalStatus" class="custom-select age_from" required>\n' +
                '                                    <option selected="" value="'+ data.maritalStatus +'" class="a">'+ data.maritalStatus +'</option>\n' +
                '                                    <option value="Độc thân" class="a">Độc thân</option>\n' +
                '                                    <option  value="Có con riêng" class="a">Có con riêng</option>\n' +
                '                                    <option value="Ly thân" class="a">Ly thân</option>\n' +
                '                                </select>\n' +
                '                            </div>\n' +
                '                            <div class="form-group col-md-6">\n' +
                '                                <label for="educationLevel">Trình độ</label>\n' +
                '<h5 class="viewsa">'+data.educationLevel+'</h5>'+
                '                                <select id="educationLevel" class="custom-select age_from">\n' +
                '                                    <option selected="" value="' + data.educationLevel + '" class="a">' + data.educationLevel + '</option>' +
                '                                    <option value="Giáo sư" class="a">Giáo sư</option>\n' +
                '                                    <option  value="Tiến sỹ" class="a">Tiến sỹ </option>\n' +
                '                                    <option value="Đại học" class="a">Đại học</option>\n' +
                '                                    <option value="Cao đẳng" class="a">Cao đẳng</option>\n' +
                '                                    <option value="Trung cấp" class="a">Trung cấp</option>\n' +
                '                                    <option value="Học sinh" class="a">Học sinh</option>\n' +
                '                                    <option value="Không học vấn" class="a">Không học vấn</option>\n' +
                '                                </select>\n' +
                '                            </div>\n' +
                '                                <div class="form-group col-md-6">\n' +
                '                                    <label for="countryId">Chọn quốc gia</label>\n' +
                '<h5 class="viewsa">'+county+'</h5>'+
                '                                    <select name="country" class="custom-select countries" id="countryId" required>\n' +
                '                                        <option value="' + county + '">' + county + '</option>\n' +
                '                                        <option value="Việt Nam">Việt Nam</option>\n' +
                '                                        <option value="Americas">Americas</option>\n' +
                '                                        <option value="Europe">Europe</option>\n' +
                '                                        <option value="Asia">Asia</option>\n' +
                '                                        <option value="Southeast Asia">Southeast Asia</option>\n' +
                '                                    </select>\n' +
                '                                </div>\n' +
                '                            <div class="form-group col-md-6">\n' +
                '                                <label for="stateId">Tỉnh/Thành phố</label>\n' +
                '<h5 class="viewsa">'+state+'</h5>'+
                '                                <select name="state" class="custom-select states" id="stateId" required>\n' +
                '                                    <option selected="" value=" ' + state + ' ">' + state + '</option>\n' +
                '                                    <option value="Hà Nội">Hà Nội</option>\n' +
                '                                    <option value="Hồ Chí Minh">Hồ Chí Minh</option>\n' +
                '                                    <option value="Đà Nẵng">Đà Nẵng</option>\n' +
                '                                    <option value="Cà Mau">Cà Mau</option>\n' +
                '                                    <option value="Hải Phòng">Hải Phòng</option>\n' +
                '                                    <option value="Quảng Ninh">Quảng Ninh</option>\n' +
                '                                    <option value="Hải Dương">Hải Dương</option>\n' +
                '                                    <option value="Phú Thọ">Phú Thọ</option>\n' +
                '                                    <option value="Hà Nam">Hà Nam</option>\n' +
                '                                    <option value="Nam Định">Nam Định</option>\n' +
                '                                    <option value="Thái Bình">Thái Bình</option>\n' +
                '                                    <option value="Sơn La">Sơn La</option>\n' +
                '                                    <option value="Cao Bằng">Cao Bằng</option>\n' +
                '                                    <option value="Hoà Bình">Hoà Bình</option>\n' +
                '                                    <option value="Thanh Hoá">Thanh Hoá</option>\n' +
                '                                    <option value="Quảng Trị">Quảng Trị</option>\n' +
                '                                    <option value="Quảng Ngãi">Quảng Ngãi</option>\n' +
                '                                    <option value="Nghệ An">Nghệ An</option>\n' +
                '                                    <option value="Phan Thiết">Phan Thiết</option>\n' +
                '                                    <option value="Tây Ninh">Tây Ninh</option>\n' +
                '                                    <option value="Phú Quốc">Phú Quốc</option>\n' +
                '                                    <option value="Tây Nguyên">Tây Nguyên</option>\n' +
                '                                    <option value="Huế">Huế</option>\n' +
                '                                    <option value="Cần thơ">Cần thơ</option>\n' +
                '                                    <option value="Đà Lạt">Đà Lạt</option>\n' +
                '                                </select>\n' +
                '                            </div>\n' +
                '                            <div class="form-group col-md-6">\n' +
                '                                <label for="cityId">Quận/Huyện </label>\n' +
                '<h5 class="viewsa">'+city+'</h5>'+
                '                                <select name="city" class="custom-select cities" id="cityId" required>\n' +
                '                                    <option selected="" value="' + city + '">' + city + '</option>\n' +
                '                                    <option value="Cầu Giấy">Cầu Giấy</option>\n' +
                '                                    <option value="Mai Dịch">Mai Dịch</option>\n' +
                '                                    <option value="Ba Đình">Ba Đình</option>\n' +
                '                                    <option value="Bắc Từ Liêm">Bắc Từ Liêm</option>\n' +
                '                                    <option value="Nam Từ Liêm">Nam Từ Liêm</option>\n' +
                '                                    <option value="Hai Bà Trưng">Hai Ba Trưng</option>\n' +
                '                                    <option value="Tây Hồ">Tây Hồ </option>\n' +
                '                                    <option value="Đống Đa">Đống Đa</option>\n' +
                '                                </select>\n' +
                '                            </div>\n' +
                '                            <div class="form-group col-md-6">\n' +
                '                                <label for="Hobby">Sở thích </label>\n' +
                '<h5 class="viewsa">'+data.hobby+'</h5>'+
                '                                <select id="Hobby" class="custom-select age_from" required="">\n' +
                '                                    <option selected=""  value="' + data.hobby + '" class="a">' + data.hobby + '</option>\n' +
                '                                    <option value="Thích chó" class="a">Thích chó </option>\n' +
                '                                    <option value="Thích mèo" class="a">Thích mèo</option>\n' +
                '                                    <option value="Thích động vật có vú" class="a">Thích động vật có vú </option>\n' +
                '                                    <option value="Thích Nghe nhạc" class="a">Thích Nghe nhạc</option>\n' +
                '                                    <option value="Thích thiết kế" class="a">Thích thiết kế</option>\n' +
                '                                    <option value="Không thích gì" class="a">Không thích gì </option>\n' +
                '                                </select>\n' +
                '                            </div>\n' +
                '                            <div class="form-group col-md-6">\n' +
                '                                <label for="Job">Công Việc </label>\n' +
                '<h5 class="viewsa">'+data.job+'</h5>'+
                '                                <select id="Job" class="custom-select age_from" required="">\n' +
                '                                    <option selected="" value="' + data.job + '" class="a">' + data.job + '</option>\n' +
                '                                    <option value="Làm xây dựng" class="a">Làm xây dựng </option>\n' +
                '                                    <option value="Tài chính" class="a">Tài chính </option>\n' +
                '                                    <option value="Giáo viên" class="a">Giáo viên </option>\n' +
                '                                    <option value="Kế toán" class="a">Kế toán </option>\n' +
                '                                    <option value="Công nghệ thông tin" class="a">Công nghệ thông tin </option>\n' +
                '                                    <option value="Thiết kế " class="a">Thiết kế </option>\n' +
                '                                    <option value="SEO" class="a">SEO </option>\n' +
                '                                    <option value="Lao động tự do " class="a">Lao động tự do</option>\n' +
                '                                    <option value="Sinh viên" class="a">Sinh viên </option>\n' +
                '                                    <option value="Nội trợ" class="a">Nội trợ </option>\n' +
                '                                    <option value="Shipber" class="a">Shipber</option>\n' +
                '                                </select>\n' +
                '                            </div>\n' +
                '                            <div class="form-group col-md-6">\n' +
                '                                <label for="avatar">Tải lên hình đại diện</label>\n' +

                '                                <input type="file" class="form-control"  accept=\'image/*\' id="avatar" required="">\n' +
                '                                <span id="avatar-img"/>\n' +
                '                            </div>\n' +
                '                            <div class="form-group col-md-12">\n' +
                '                                <label for="user_img">Tải lên hình ảnh </label>\n' +
                '<input type="file" name="file" id="user_img" class="form-control form-control-light" multiple>' +
                '                                <div id="ghgjh" class="col-sm-12 mt-3">\n' +
                                                    '<ul  class="nav" id="view-img"></ul>\n' +
                '                                </div>\n' +
                '                            </div>\n' +
                '<a class="button btn-theme full-rounded btn nextBtn btn-lg mt-2 animated right-icn" id="postprofile"><span><i class="fa fa-upload"></i>Chỉnh sửa thông tin</span></a>'+
                '                        </div>\n' +
                '                    </form>';
            $('.profile-user-show').html(profile);
            $('#photo').html(photo);
            $('.product-groups-avatar').html(avatar);
            $('.form-control,.custom-select,#profile-list-submit').hide();


            // var user_img = new Array();
            // $('#user_img').on('change',function(e){
            //     var files = e.target.files;
            //     $.each(files, function(i, file){
            //         var reader = new FileReader();
            //         reader.readAsDataURL(file);
            //         reader.onload = function(e){
            //             user_img.push(e.target.result);
            //             var image = '<li class="nav-item">\n' +
            //                 '<a class="nav-link">' +
            //                 '                                <img  src="' + e.target.result + '" class="img-thumbnail">\n' +
            //                 '                                <span class="btn remove"><i style="color: #fff" class="fa fa-remove"></i></span>\n' +
            //                 '</a>' +
            //                 '                            </li>';
            //             $('#view-img').append(image);
            //         };
            //     });
            // });
            // $('body').on('click','.remove',function () {
            //
            //     var val = $(this).closest('.nav-item').find('.nav-link');
            //     // var index = fileCollection.findIndex(function(item) {return item.src == val})
            //     var index = user_img.findIndex(function(item)
            //     {
            //         val.remove();
            //         return item.src == val;
            //
            //     });
            //
            //     user_img.splice(index, 1);
            // });
            $('#postprofile').on('click',function (e) {
                $('.form-control,.custom-select,#profile-list-submit').show();
                $('#postprofile,.viewsa').hide();
                e.preventDefault();
            });
            $('#editprofiel').on('click',function (e) {
                var avatar = sessionStorage.getItem('avatar');
                var url = sessionStorage.getItem('urlTest');
                var fullname = $('#fullname').val();
                var job = $('#Job').val();
                var phone = $('#phone').val();
                var maritalStatus = $('#maritalStatus option:selected').val();
                var educationLevel = $('#educationLevel option:selected').val();
                var birthday = $('#birthday').val();
                var gender = $('#gender option:selected').val();
                var hoppy = $('#Hobby option:selected').val();
                var city = $('#cityId option:selected').val();
                var county = $('#countryId option:selected').val();
                var state = $('#stateId option:selected').val();


                var user = {
                    "email": id,
                    "username": fullname,
                    "avatar": avatar,
                    "address": city +","+ state +","+ county,
                    "phone": phone,
                    "job": job,
                    "birthday": birthday,
                    "gender": gender,
                    "hobby": hoppy,
                    "album": url,
                    "maritalStatus": maritalStatus,
                    "educationLevel": educationLevel
                };
                $.ajax({
                    url: 'https://tinder-69.appspot.com/api/v1/user/',
                    type: 'PUT',
                    data: JSON.stringify(user),
                    // contentType: "application/json",
                    success: function (data) {
                        sessionStorage.removeItem('avatar');
                        window.location.href="profile.html";
                    }
                });
                e.preventDefault();
            });


            $('#avatar').on('change', function (e) {

                var files = e.target;
                var reader = new FileReader();
                reader.onload = function(){
                    var dataURL = reader.result;
                    var avatars = '';

                    avatars +='<img src=" '+dataURL +' " height="100" width="100">';
                    sessionStorage.setItem('avatar',dataURL);
                    $('#avatar-img').html(avatars);
                };
                reader.readAsDataURL(files.files[0]);
            });
            PhotoFireBase();
            function PhotoFireBase() {

                var config = {
                    apiKey: "AIzaSyD67Yh-Q35CnMP1c2T5SQE8eBohx8QUIj4",
                    authDomain: "chat-5ddd7.firebaseapp.com",
                    databaseURL: "https://chat-5ddd7.firebaseio.com",
                    projectId: "chat-5ddd7",
                    storageBucket: "chat-5ddd7.appspot.com",
                    messagingSenderId: "850707411995"
                };
                firebase.initializeApp(config);

                var auth = firebase.auth();
                var storageRef = firebase.storage().ref();

                function handleFileSelect(evt) {
                    evt.stopPropagation();
                    evt.preventDefault();
                    var file = evt.target.files[0];

                    var metadata = {
                        'contentType': file.type
                    };

                    // Push to child path.
                    // [START oncomplete]
                    storageRef.child('images/' + file.name).put(file, metadata).then(function(snapshot) {
                        // Let's get a download URL for the file.
                        snapshot.ref.getDownloadURL().then(function(url) {
                            sessionStorage.setItem('urlTest',url);
                            console.log('File available at', url);
                            // [START_EXCLUDE]
                            // document.getElementById('linkbox').innerHTML = '<img src="' +  url + '">Click For File</img>';
                            // [END_EXCLUDE]
                        });
                    }).catch(function(error) {
                        // [START onfailure]
                        console.error('Upload failed:', error);
                        // [END onfailure]
                    });
                    // [END oncomplete]
                }

                window.onload = function() {
                    $('#user_img').addEventListener('change', handleFileSelect, false);
                    $('#user_img').disabled = true;

                    auth.onAuthStateChanged(function(user) {
                        if (user) {
                            console.log('Anonymous user signed-in.', user);
                            document.getElementById('file').disabled = false;
                        } else {
                            console.log('There was no anonymous session. Creating a new anonymous user.');
                            // Sign the user in anonymously since accessing Storage requires the user to be authorized.
                            auth.signInAnonymously().catch(function(error) {
                                if (error.code === 'auth/operation-not-allowed') {
                                    window.alert('Anonymous Sign-in failed. Please make sure that you have enabled anonymous ' +
                                        'sign-in on your Firebase project.');
                                }
                            });
                        }
                    });
                }

            }
        });
    }else {
        localStorage.removeItem('email');
        sessionStorage.removeItem('avatar');
        window.location.href = "login.html";
        $('#photo').remove(photo);

    }


});


