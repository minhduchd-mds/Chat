$(document).ready(function (key) {
    var menberID = "https://tinder-69.appspot.com/api/v1/user/";
    var massages = "json/meassageList.json";
    var id = localStorage.getItem('email');

    // truyền từ bảng profile sang khi đã cập nhập xong profile > bao gồm weight,height,age,city,country lấy ra thích hợp để search

        if(id){

            seach();
            topmassage();
            math();
            clickProfile();
            arrayLike();
            $('#logout').on('click', function (e) {
                e.preventDefault();
                $('#logout').remove();
                localStorage.removeItem('email');
                sessionStorage.removeItem('likeid');
                sessionStorage.removeItem('id');
                window.location.href = "login.html";
            });

        }else {
            localStorage.removeItem('email');
            localStorage.removeItem('email');
            sessionStorage.removeItem('likeid');
            sessionStorage.removeItem('id');
            window.location.href = "login.html";
            sessionStorage.removeItem('clickmeasse');
        }
    // Seach
    function seach() {

        // nếu user là nam > tìm nữ  mà là nữ tìm nam đưa danh sách ưu tiên
        // var gender = $('#gender option:selected').val();
        // var age = ($(".age_from option:selected").text() * 1 + $(".age_to option:selected").text() * 1) / 2;
        // var city = $('#cityId option:selected').val();
        // var county = $('select#countryId').val();
        // var state = $('#stateId option:selected').val();

        // var dataSearch = {
        //     "gender": gender,
        //     "age": age,
        //     "address": city
        // };
        $.ajax({
            url: menberID,
            type: 'GET',
            success: function (data) {
                $.each(data, function (key, value) {
                    var online = value.status;
                    var id = value.email;
                    const gender = value.gender;
                    var email = localStorage.getItem('email');
                    if (online == 1) {
                        $('.messages ul li a.satatus > i').addClass('online');
                    } else if (online => 0) {
                        $('a.satatus').removeClass('online');
                    }
                    if (key === 12) {
                        $('#thumbMember').append('<div class="row justify-content-center mb-5">\n' +
                            '      <div class="col-md-12 text-center"> <a class="button  btn-lg btn-theme full-rounded animated right-icn"><span>Show More<i class="glyph-icon flaticon-hearts" aria-hidden="true"></i></span></a> </div>\n' +
                            '    </div>');
                        return false;
                    }
                    // lấy ra  id không trung vs id cửa người dùng đăng nhập vào
                   if(id !== email){

                       $('.thumbMember').append('<div class="col-sm-3 col-md-3 col-lg-3 text-center mb-3">\n' +
                           ' <div class="item-profile">\n' +
                           ' <div class="card">\n' +
                           ' <a  onclick="profileUser(\'' + id + '\')" class="btn">\n' +
                           ' <img src="' + value.avatar + '" class="img-fluid">\n' +
                           ' </a>\n' +
                           ' </div>\n' +
                           '  <div class="messages">\n' +
                           '        <ul>\n' +
                           '            <li><a href="" title="onlilne" data-id="' + online + '"  class="satatus" ><i class="fa fa-circle"></i></a></li>\n' +
                           '            <li><a  title="like"   class="btn" onclick="likeid(\'' + id + '\')"><i class="fa fa-heart-o like"></i></a></li>\n' +
                           '            <li><a href  onclick="messageUser(\'' + id + '\')" title="message" data-toggle="modal" data-target="#sentmessges" ><i  class="fa fa-commenting"></i></a></li>' +
                           '        </ul>\n' +
                           '    </div>' +
                           ' <div class="card-body">\n' +
                           ' <h5 href="" title=" ' + value.username + '  " class="title">' + value.username + '</h5>' +
                           ' <span>' + value.age + ' - ' + value.address + '</span>\n' +
                           ' </div>\n' +
                           ' </div>\n' +
                           ' </div>');

                   }
                });
            }
        });




        $('#search_user').click(function () {
            var gender = $('#gender option:selected').val();
            var age = $("#age option:selected").val();
            var nextage = $("#nextage option:selected").val();
            var city = $('#cityId option:selected').val();
            // var county = $('select#countryId').val();
            // var state = $('#stateId option:selected').val();

            $('#thumbMember').removeClass('thumbMember');

            $.ajax({
                url: menberID,
                type: 'GET',
                cache: false,
                // data: dataSearch,
            }).done(function (data) {

                // var arrage = new Array();
                // var over18 = arrage.filter(myFunction);
                function myFunction(vs, index, arrage) {
                    return vs > 18 && vs < 70;
                }
                // da search dc  can chinh sua them

                // var results = data.filter(function(row) {
                //     if (value.age === row.age && value.gender === row.gender && city === citys) {
                //         return true;
                //     }
                // });
                // results.forEach(function(result) {
                //     console.log(result.name + ' name');
                // })
                //
                var html = '';
                // var arrayUser = [];
                //
                //
                // var found_names = $.grep( arrayUser, function(v) {
                //     return  v.gender === gender;
                // });
                // console.log(found_names)

                $.each(data, function (key, value) {
                    // arrayUser.push(value);
                    var add = value.address;
                    var sadas = value.age;
                    var id = value.email;
                    // var addres =  city+","+state+","+county;
                    var citys = add.split(",")[0];

                    // if(add != null){
                    //     var states = add.split(",")[0];
                    // }
                    // if(add != null){
                    //     var countys = add.split(",")[0];
                    // }
                    var online = value.status;
                    if (online == 1) {
                        $('.messages ul li a.satatus > i').addClass('online');
                    } else if (online == 0) {
                        $('a.satatus').removeClass('online');
                    }

                    if (value.gender === gender) {
                         if(sadas > age && sadas < nextage){
                             if(citys === city){

                                 html += '<div class="col-sm-3 col-md-3 col-lg-3 text-center mb-3">\n' +
                                     ' <div class="item-profile">\n' +
                                     ' <div class="card">\n' +
                                     ' <a onclick="profileUser(\'' + id + '\')" class="btn">\n' +
                                     ' <img src="' + value.avatar + '" class="img-fluid">\n' +
                                     ' </a>\n' +
                                     ' </div>\n' +
                                     '  <div class="messages">\n' +
                                     '        <ul>\n' +
                                     '            <li><a  title="onlilne" data-id="' + online + '"  class="satatus"><i class="fa fa-circle"></i></a></li>\n' +
                                     '            <li><a  class="btn" title="like"  id="like"  onclick="likeid(\'' + id + '\')"><i class="fa fa-heart-o like"></i></a></li>\n' +
                                     '            <li><a href title="message"  onclick="messageUser(\'' + id + '\')" data-toggle="modal" data-target="#sentmessges" ><i  class="fa fa-commenting"></i></a></li>\n' +
                                     '        </ul>\n' +
                                     '    </div>' +
                                     ' <div class="card-body">\n' +
                                     ' <h5 href="" title=" ' + value.username + '" class="title"> ' + value.username + '</h5>' +
                                     ' <span>' + value.age + ' -' + value.gender + ' - ' + value.address + '</span>\n' +
                                     ' </div>\n' +
                                     ' </div>\n' +
                                     ' </div>';
                             } $('#thumbMember').html(html);
                             return html;

                         }

                    }


                });

            });
        });

    }
    //    Sent massages
    function topmassage() {

        $.ajax({
            url: massages,
            type: 'GET',
            dataType: 'json',
        }).success(function(data) {
                var htmls = '';
            var online = data.status;
            if(online == 1){
                $('.messages ul li a.satatus > i').addClass('online');
            }else if(online <= 2){
                $('a.satatus').removeClass('online');
            }
                $.each(data.exclude, function(key, value){

                    htmls +='<div class="recent-post media pd-3">\n' +
                        '                            <div class="media-left mr-2">\n' +
                        '                                <a href="#"><img alt="" class="media-object" src=" '+ value.image +' " style="width:70px; height:70px;"></a>\n' +
                        '                            </div>\n' +
                        '                            <div class="media-body">\n' +
                        '                                <a href="#"> '+ value.name +' </a>' +
                        '                                <span>  '+value.conten+' </span>' +
                        '                                <a href="" onclick="setmessage(\''+ value.id + '\')" class="sent btn btn-sm full-rounded btn-colored"><span>Tin nhắn miễn phí</span></a>' +
                        '                            </div>\n' +
                        '                        </div>';
                    $('#post-sent').append(htmls);
                });
        });
    }

    //    User get math
    function math() {

        const lik = localStorage.getItem('licked');
        $.ajax({
            url: 'https://api.mlab.com/api/1/databases/matrimony/collections/like/?apiKey=GySvt0pxEYMX3O8Qu9hsQCLZv5r95Jig',
            type: 'GET',
            // data: JSON.stringify(like),
            contentType: "application/json",
            success: function (data) {
                $.each(data, function (key, like) {
                    var l = like.email;
                    var likes = like._id.$oid;
                    if(lik == l){
                        $.ajax({
                            url: 'https://tinder-69.appspot.com/api/v1/user/' + l,
                            type: 'GET',
                            dataType: 'json',
                        }).done(function (value) {
                            var list = '';
                            // sessionStorage.setItem('_id',like);
                            list += '<div class="col-sm-3 col-md-3 col-lg-3 mb-4 item" data-id="'+likes+'">\n' +
                                '                <div class="post post-artical">\n' +
                                '                    <div class="post-image clearfix"><img class="img-fluid" src="' + value.avatar + '" alt=""></div>\n' +
                                '                    <div class="post-details">\n' +
                                '                        <div class="post-title">\n' +
                                '                            <h6 class="title text-uppercase mt-2"><a href="">' + value.username + '</a></h6>\n' +
                                '                        </div>\n' +
                                '                        <div class="post-icon">\n' +
                                '                            <div class="post-content">\n' +
                                '                                <a href="">' + value.age + ' + ' + value.address + '</a>\n' +
                                '                            </div>\n' +
                                '                        </div>\n' +
                                '                        <div class="post-meta">\n' +
                                '                            <a id="deleteLike" data-like="'+like+'" class="btn"><i aria-hidden="true" class="fa fa-heart-o" title="Không Thích"></i></a>\n' +
                                '                            <a class="btn"><i aria-hidden="true" class="fa fa-heart" title="Thích"></i></a>\n' +
                                '                            <a class="btn"><i class="fa fa-comments-o" title="Nhắn Tin"></i></a>\n' +
                                '                        </div>\n' +
                                '                    </div>\n' +
                                '\n' +
                                '                </div>\n' +
                                '            </div>';

                            // console.log(list)
                            $('#masonry').append(list);
                        });
                    }
                })
            }
        });
        // Delete Like
        $('body').on('click','#deleteLike', function (e) {
            var ids =  $(this).data('like');

            $('.item').filter(function() {
                return $(this).data('id') == ids
            }).addClass('ac').css('display','none').remove();

            var url = 'https://api.mlab.com/api/1/databases/matrimony/collections/like/'+ids+'?apiKey=GySvt0pxEYMX3O8Qu9hsQCLZv5r95Jig';
            $.ajax({
                url: url,
                type: 'DELETE',
                async : true,
                timeout: 200000,
                success: function (data) {

                }
            });


            e.preventDefault();
        });
    }
        // Click Profile
    function clickProfile() {
        var sd= sessionStorage.getItem('clicks');
        if(sd){
            $.ajax({
                url: 'https://tinder-69.appspot.com/api/v1/user/' +sd,
                type: 'GET',
                // contentType: "application/json",s
                success: function (data) {
                    var profileUser = '';
                   if(data.album != null){
                       var album = '<div class="carousel-inner">\n' +
                           '                                        <div class="carousel-item active">\n' +
                           '                                            <img src="'+data.avatar+'" alt="Los Angeles" width="346" height="300" class="img-fluid">\n' +
                           '</div>'+
                           // '                                        <div class="carousel-item">\n' +
                           // '                                            <img src="'+data.album+'" alt="" width="346" height="300" class="img-fluid">\n' +
                           // '                                        </div>\n' +
                           '                                    <a class="carousel-control-prev" href="#demo" data-slide="prev">\n' +
                           '                                        <span class="carousel-control-prev-icon"></span>\n' +
                           '                                    </a>\n' +
                           '                                    <a class="carousel-control-next" href="#demo" data-slide="next">\n' +
                           '                                        <span class="carousel-control-next-icon"></span>\n' +
                           '                                    </a>';
                   }
                    profileUser += '<tr>\n' +
                        '                                                <td class="cut-text-hidden">' + data.username + '</td>\n' +
                        '                                                <td class="cut-text-hidden">' + data.age + '</td>\n' +
                        '                                                <td class="cut-text-hidden">' + data.birthday + '</td>\n' +
                        '                                                <td class="cut-text-hidden">' + data.gender + '</td>\n' +
                        '                                                <td class="cut-text-hidden">' + data.address + '</td>\n' +
                        '                                                <td class="cut-text-hidden">' + data.job + '</td>\n' +
                        '                                            </tr>'

                    $('#Profile-user').append(profileUser);
                    $('#demo').append(album);
                }
            });
        }
    }

        console.log(check())
    function check() {
        var likd = $('#like');
        var ksdasd =  sessionStorage.getItem('licked');
        for (var i = 0; i < likd.length; i++) {
            likd[i].onclick = ksdasd;

        }
    }
    function arrayLike() {
        var email =  localStorage.getItem('email');
        var u =  localStorage.getItem('licked');
        if(u){
            // var like = {
            //     "email": email,
            //     "like": u
            // };
            // $.ajax({
            //     url: 'https://api.mlab.com/api/1/databases/matrimony/collections/like?apiKey=GySvt0pxEYMX3O8Qu9hsQCLZv5r95Jig',
            //     type: 'POST',
            //     data: JSON.stringify(like),
            //     contentType: "application/json",
            //     success: function (data) {

                // }
            // });
        }

    }

});
// post  su dung model
function setmessage(sentid) {
    $('#sent-blog').on('click',function (e) {
        console.log('click sent-blog')
        e.preventDefault();
        var mesasge = {
            'title' : $('#title-message').val(),
            'conten' : $('#conten-message').val(),
        };
        if(mesasge){
            $.ajax({
                url: json + sentid,
                type: 'POST',
                data: JSON.stringify(mesasge),
                contentType: 'application/json; charset=utf-8',
                success: function (response) {

                }
            });
        }else {
            return true;
        }
        return mesasge;
    })
}

function likeid(id) {
    var email =  localStorage.getItem('email');

    if(id || email){
        // var likes = [];
        count++;
        $('#count').html(count);

        var clickedNumbers = [];
        clickedNumbers.push(id);
        console.log(clickedNumbers)

        sessionStorage.setItem('licked', clickedNumbers); // set lượng like

    }else {
        localStorage.removeItem('licked');
    }
}

function profileUser(id) {
    sessionStorage.setItem('clicks',id);

    window.location.href="profile_user.html";
}
var  count = 0 ;


function messageUser(id) {
    sessionStorage.setItem('clickmeasse',id);
    window.location.href="chat.html";
}




