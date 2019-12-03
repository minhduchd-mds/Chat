// Design Minh Duc
$(document).ready(function (key) {
    var menberID = "https://tinder-69.appspot.com/api/v1/user/";
    var id = localStorage.getItem('email');

    // truyền từ bảng profile sang khi đã cập nhập xong profile > bao gồm weight,height,age,city,country lấy ra thích hợp để search

        if(id){
            seach();
            topmassage();
            math();
            clickProfile();
            $('#logout').on('click', function (e) {
                e.preventDefault();
                $('#logout').remove();
                localStorage.removeItem('email');
                sessionStorage.removeItem('likeid');
                sessionStorage.removeItem('id');
                sessionStorage.removeItem('sentId');
                sessionStorage.removeItem('clickmeasse');
                window.location.href = "login.html";

            });

        }else {
            localStorage.removeItem('email');
            sessionStorage.removeItem('likeid');
            sessionStorage.removeItem('id');
            sessionStorage.removeItem('clickmeasse');
            window.location.href = "login.html";
        }
    // Seach
    function seach() {


        setTimeout(function () {
            $('#love-loading').css('display', 'none');
        },0);
        $.ajax({
            url: menberID,
            type: 'GET',
            success: function (data) {
                setTimeout(function () {

                    $.each(data, function (key, value) {
                        var online = value.status;
                        var id = value.email;
                        const gender = value.gender;
                        var email = localStorage.getItem('email');
                        if (online === 0) {
                            $('.messages ul li a.satatus > i').addClass('online');
                        } else if (online === 1) {
                            $('a.satatus').removeClass('online');
                        }
                        if (key === 20) {
                            $('#thumbMember').append('<div class="row justify-content-center mb-5">\n' +
                                '      <div class="col-md-12 text-center"> <a id="nextPage" class="button  btn-lg btn-theme full-rounded animated right-icn"><span>Show More<i class="glyph-icon flaticon-hearts" aria-hidden="true"></i></span></a> </div>\n' +
                                '    </div><div id="ajaxloader" style="display:none"><img class="center-block" src="images/loading.gif" alt=""></div>');
                            $('#thumbMember').on('click', '#nextPage' ,function (e) {
                                $("#ajaxloader").show();
                                if(key === 24){
                                    $("#ajaxloader").hide();
                                }
                                e.preventDefault();
                            });
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
                    $('#load').hide();
                    $('#preloader').hide();
                },2000);


            }
        });




        $('#search_user').click(function () {
            $('#love-loading').show();
            $('#preloader').hide();

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
            }).done(function (data) {


                // da search dc  can chinh sua them

                var html = '';

                $.each(data, function (key, value) {
                    // arrayUser.push(value);
                    var add = value.address;
                    var sadas = value.age;
                    var id = value.email;
                    var citys = add.split(",")[0];

                    // if(add != null){
                    //     var states = add.split(",")[0];
                    // }
                    // if(add != null){
                    //     var countys = add.split(",")[0];
                    // }
                    var online = value.status;
                    if (online === 0) {
                        $('.messages ul li a.satatus > i').addClass('online');
                    } else if (online === 1) {
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
                             }
                             $('#love-loading').hide();
                             $('#thumbMember').html(html);
                             $('#gender option:selected').val(gender);
                             $("#age option:selected").val(age);
                             $('#cityId option:selected').val(city);
                         }
                    }
                });

            });
        });

    }
    //    Sent massages
    function topmassage() {

        // $.ajax({
        //     url: massages,
        //     type: 'GET',
        //     dataType: 'json',
        // }).success(function(data) {
        //         var htmls = '';
        //     var online = data.status;
        //     if(online == 1){
        //         $('.messages ul li a.satatus > i').addClass('online');
        //     }else if(online <= 2){
        //         $('a.satatus').removeClass('online');
        //     }
        //         $.each(data.exclude, function(key, value){
        //
        //             htmls +='<div class="recent-post media pd-3">\n' +
        //                 '                            <div class="media-left mr-2">\n' +
        //                 '                                <a href="#"><img alt="" class="media-object" src=" '+ value.image +' " style="width:70px; height:70px;"></a>\n' +
        //                 '                            </div>\n' +
        //                 '                            <div class="media-body">\n' +
        //                 '                                <a href="#"> '+ value.name +' </a>' +
        //                 '                                <span>  '+value.conten+' </span>' +
        //                 '                                <a href="" onclick="setmessage(\''+ value.id + '\')" class="sent btn btn-sm full-rounded btn-colored"><span>Tin nhắn miễn phí</span></a>' +
        //                 '                            </div>\n' +
        //                 '                        </div>';
        //             $('#post-sent').append(htmls);
        //         });
        // });
    }

    //    User get math
    function math() {

        const lik = sessionStorage.getItem('licked');
        var email =  localStorage.getItem('email');

        $.ajax({
            url: 'https://api.mlab.com/api/1/databases/matrimony/collections/like/?apiKey=GySvt0pxEYMX3O8Qu9hsQCLZv5r95Jig',
            type: 'GET',
            // data: JSON.stringify(like),
            contentType: "application/json",
            success: function (data) {
                $.each(data, function (key, like) {
                    var l = like.IdLike;
                    var likes = like._id.$oid;

                   if(l){
                       $.ajax({
                           url: 'https://tinder-69.appspot.com/api/v1/user/' + l,
                           type: 'GET',
                           contentType: 'json',
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

    //     console.log(check())
    // function check() {
    //     var likd = $('#like');
    //     var ksdasd =  sessionStorage.getItem('licked');
    //     for (var i = 0; i < likd.length; i++) {
    //         likd[i].onclick = ksdasd;
    //
    //     }
    // }

});
// post  su dung model
function setmessage(sentid) {
    sessionStorage.setItem('sentId', sentid);
    window.location.href('chat.html');
}

function likeid(id) {
    var email =  localStorage.getItem('email');

    if(id || email){
        count++;
        $('#count').html(count);

        var like = {
            "count" : count,
            "emailUSER": email,
            "IdLike": id
        };
        $.ajax({
            url: 'https://api.mlab.com/api/1/databases/matrimony/collections/like?apiKey=GySvt0pxEYMX3O8Qu9hsQCLZv5r95Jig',
            type: 'POST',
            data: JSON.stringify(like),
            contentType: "application/json",
            success: function (data) {

            }
        });
        sessionStorage.setItem('licked', id); // set lượng like

    }else {
        alert("error")
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




