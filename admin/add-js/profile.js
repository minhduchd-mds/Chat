$(document).ready(function (key) {

// =========== TOP USER ===========
    const id = localStorage.getItem('secretToken');

    if(id){
        const user_img = new Array();
        $('#user_img').on('change',function(e){
            const files = e.target.files;
            $.each(files, function(i, file){
              var reader = new FileReader();
              reader.readAsDataURL(file);
              // name.push(file.name);
              reader.onload = function(e){
                  user_img.push(e.target.result);
                  const template = '<img class="form-control rounded bg-light" src=" ' + e.target.result + ' " >';
                  $('#view-img-avatar').append(template);
              };
          });
      });

      // edit profile
      $('#profile-update').click(function (e) {
          e.preventDefault();
          var fullname = $('#edituser').val();
          var password = $('#profile-password').val();
          var email = $('#editemail').val();
          var description = $('#profile-description').val();
          var decentralization = $('#profile-title').val();
          var date = $('#profile-priority').val();

          var user = {
              'fullname' : fullname,
              'eamil': email,
              'password' : password,
              'images' : user_img,
              'description' : description,
              'decentralization' : decentralization,
              'date' : date

          };
          const account = 'https://api.mlab.com/api/1/databases/matrimony/collections/account/' + id + '?apiKey=GySvt0pxEYMX3O8Qu9hsQCLZv5r95Jig';
          const put = 'PUT';


          $.ajax({
              url: account,
              type: put,
              data: JSON.stringify(user),
              contentType: "application/json",
              success: function (key) {
                  // console.log(key)
                  window.location.href="profile.html";
                  // localStorage.removeItem('fullname');/

                  if(localStorage.removeItem('fullname')==fullname){

                  }else {
                      localStorage.setItem('fullname');
                  }

              }
          });

      } );
      profileuser();
      function profileuser(){
            // console.log(id);
            if(id){
                $.ajax({
                    url: 'https://api.mlab.com/api/1/databases/matrimony/collections/account/'+id+'?apiKey=GySvt0pxEYMX3O8Qu9hsQCLZv5r95Jig',
                }).done(function (data){
                    var media = '';
                    var user= '';
                    var description ='';
                    var profile ='';
                    localStorage.setItem('fullname', data.fullname);
                    localStorage.setItem('ism',data.images);
                    media +='<span class="float-left m-2 mr-4 user-avatar"><img src=" '+data.images+' " style="height: 100px; width: 100px;" alt="" class="rounded-circle img-thumbnail"></span>\n' +
                        '                                            <div class="media-body">\n' +
                        '\n' +
                        '                                                <h4 class="mt-1 mb-1 text-white"> '+data.fullname +' </h4>\n' +
                        '                                                <p class="font-13 text-white-50"> '+data.decentralization+' </p>\n' +
                        '\n' +
                        '                                                <ul class="mb-0 list-inline text-light">\n' +
                        '                                                    <li class="list-inline-item mr-3">\n' +
                        '                                                        <h5 class="mb-1">$ 25,184</h5>\n' +
                        '                                                        <p class="mb-0 font-13 text-white-50">Total Revenue</p>\n' +
                        '                                                    </li>\n' +
                        '                                                    <li class="list-inline-item">\n' +
                        '                                                        <h5 class="mb-1">5482</h5>\n' +
                        '                                                        <p class="mb-0 font-13 text-white-50">Number of Orders</p>\n' +
                        '                                                    </li>\n' +
                        '                                                </ul>';

                    user +=' <span class="account-user-avatar" id="user_imgages"  >' +
                        '                            <img src="'+ data.images+'" alt="user-image" class="rounded-circle">' +
                        '                                    </span>\n' +
                        '                                        <span>\n' +
                        '                                        <span class="account-user-name">'+data.fullname+' </span>\n' +
                        '                                        <span class="account-position">'+data.decentralization+'</span>\n' +
                        '                                    </span>';

                    description +=' '+data.description+' ';

                    profile +='<form class="p-2">\n' +
                        '\n' +
                        '                    <div class="row">\n' +
                        '                        <div class="col-md-6">\n' +
                        '                            <div class="form-group">\n' +
                        '                                <label for="edituser" class="data">Tên người dùng</label>\n' +
                        '                                <input type="text" class="form-control form-control-light" id="edituser"  placeholder=" '+data.fullname+'">\n' +
                        '                            </div>\n' +
                        '                        </div>\n' +
                        '                        <div class="col-md-6">\n' +
                        '                            <div class="form-group">\n' +
                        '                                <label for="editemail">Địa chỉ mail</label>\n' +
                        '                                <input type="text" class="form-control form-control-light" id="editemail"  placeholder="'+data.email+'">\n' +
                        '                            </div>\n' +
                        '                        </div>\n' +
                        '                    </div>\n' +
                        '                    <div class="row">\n' +
                        '                        <div class="col-md-6">\n' +
                        '                            <div class="form-group">\n' +
                        '                                <label for="profile-password">Thay đổi mật khẩu</label>\n' +
                        '                                <input type="password" class="form-control form-control-light" id="profile-password"  placeholder="Nhập mật khẩu">\n' +
                        '                            </div>\n' +
                        '                        </div>\n' +
                        '\n' +
                        '                        <div class="col-md-3">\n' +
                        '                            <div class="form-group">\n' +
                        '                                <label for="user_img">Hình ảnh</label>\n' +
                        '                                <input type="file" name="user_img" id="user_img" class="form-control form-control-light">\n' +
                        '                            </div>\n' +
                        '                        </div>\n' +
                        '                        <div class="col-md-3">\n' +
                        '                            <div class="form-group" id="view-img-avatar">\n' +
                        '\n' +
                        '                            </div>\n' +
                        '                        </div>\n' +
                        '                    </div>\n' +
                        '\n' +
                        '                    <div class="form-group">\n' +
                        '                        <label for="profile-description">Thông tin khác</label>\n' +
                        '                        <textarea class="form-control form-control-light" id="profile-description" placeholder="'+data.description+'" rows="3"></textarea>\n' +
                        '                    </div>\n' +
                        '\n' +
                        '                    <div class="row">\n' +
                        '                        <div class="col-md-6">\n' +
                        '                            <div class="form-group">\n' +
                        '                                <label for="profile-title">Chức danh</label>\n' +
                        '                                <select class="form-control form-control-light" id="profile-title">\n' +
                        '                                    <option value=" '+data.decentralization+'">Quản lý</option>\n' +
                        '                                    <option value="'+data.decentralization+' ">Kĩ thuật</option>\n' +
                        '                                </select>\n' +
                        '                            </div>\n' +
                        '                        </div>\n' +
                        '\n' +
                        '                        <div class="col-md-6">\n' +
                        '                            <div class="form-group">\n' +
                        '                                <label for="profile-priority">Ngày tháng</label>\n' +
                        '                                <input type="text" class="form-control form-control-light"  id="profile-priority" data-toggle="date-picker" data-single-date-picker="true">\n' +
                        '                            </div>\n' +
                        '                        </div>\n' +
                        '                    </div>\n' +
                        '\n' +
                        '                    <div class="text-right">\n' +
                        '                        <button type="button" class="btn btn-light" data-dismiss="modal">Thoát</button>\n' +
                        '                        <button type="submit" name="submit" id="profile-update" class="btn btn-primary">Cập nhập</button>\n' +
                        '                    </div>\n' +
                        '                </form>';
                    $('#media').html(media);
                    $('.userprofile').html(user);
                    $('#text-description').html(description);
                    $('#profile-modal').html(profile);
                });



                //   mot phien ban err Chat  messeages

                var myDataRef = new Firebase("https://matrimony-chat.firebaseio.com/");
                var count = 0;
                var sent_message_image = new Array();
                $('#sent-message').on('change',function(e){
                    var files = e.target.files;
                    $.each(files, function(i, file){
                        var reader = new FileReader();
                        reader.readAsDataURL(file);
                        // name.push(file.name);
                        reader.onload = function(e){
                            sent_message_image.push(e.target.result);
                            var template ='<img class="form-control rounded bg-light" src=" '+e.target.result+' " >';
                            // $('#view-img-avatar').append(template);
                        };
                    });
                });

                $("#messageInput").keypress(function (e){
                    var name =   localStorage.getItem('fullname');
                    if(e.keyCode == 13){ //Enter
                        var d = new Date();
                        // $("#name").html(name);
                        var text = $("#messageInput").val();
                        var minutes = d.getMinutes();

                        var userm =  {
                            id:id,
                            count: count,
                            name: name,
                            image: sent_message_image,
                            time: minutes,
                            text: text,
                            status: "1"
                        };
                        myDataRef.push(userm); //cho phép thêm nhiều bản ghi
                        $("#messageInput").val("");
                    }
                    count++;
                });
                myDataRef.on('child_added', function (snapshot){

                    var message = snapshot.val();

                    snapshot.forEach(function(childSnapshot) {
                    });
                    viewchat(message.name, message.text, message.image, message.time, message.id);

                });

                function viewchat(name, text,image,time,id){


                    var item = '';
                    var show ='';
                    var items = '';
                    var sent ='';
                    item +='<li>\n' +
                        '                        <span class="user-status online purple-skin">\n' +
                        // '                            <img src=" '+image+'" class="user-avartar">\n' +
                        '                        </span>\n' +
                        '                        <div class="client-info">\n' +
                        '                            <h3><a  href="#" title=""  onclick="showModal(\''+ id + '\')"> '+name+'  </a></h3>\n' +
                        '                            <p class="mb-0">'+text+'</p>\n' +
                        '                            <a href="#" title=""><i class="fa fa-comment-o"></i></a>\n' +
                        '<span class="ml-3">'+time+' phút</span>'+
                        '                        </div>\n' +
                        '                    </li>';

                    var names =   localStorage.getItem('fullname');
                    $('#user-list').append(item);
                    if(text != null){
                        sent +='<i class="mdi mdi-bell-ring"></i>'
                    }
                    show +=''+names+'';
                    items+='<div class="bubble chat-left">\n' +
                        ' <div class="titles">'+name+'</div>' +
                        ' <div class="message">'+text+'</div>' +
                        ' <div class="time">'+time+' phút</div>\n' +
                        '</div>';


                    $('<div/>').prepend(items).appendTo($("#show-model"));
                    $('.title-user').html(show);
                    $('.sent').html(sent);
                    // var emojis=["👍","👎","👋","😘","😜","😎","😬","😱","🤔","😲","🍪","🍩","🍿"];
                    //  var html ='';
                    //      for(i=0;i<emojis.length;i++){
                    //          var idsm = emojis[i];
                    //          html+="<span onclick=x(this)>"+emojis[i]+"</span>";
                    //          // $('#show-model').appendVal(emojis[i]);
                    //
                    //      }
                    //  $('[data-content]').html(html);

                    //  sent all messages chat
                    //  xử lý hàm khi tin nhắn nhận về

                    var messages = '';
                    var left = $('.item-left');
                    var right = $('.item-right');
                    var dmadf = new Array();
                    var iyems = {
                        id: id,
                        fullsname:name,
                        conten : text
                    };
                    var myJSON = JSON.stringify(iyems);
                    dmadf.push(myJSON);

                    var x = '';
                    var sds = localStorage.getItem('secretToken');

                    if(sds == myJSON){

                        console.log(myJSON.fullsname);

                    }
                    for (i = 0; i < iyems.length; i++) {
                        var a = iyems[i].id;



                    }
                    // for(var i = 0; i<items.length;i++){
                    //
                    //     if(dmadf==id){
                    //         messages +='<li class="list-inline-item mr-3">' +
                    //             '<p class="mb-0 font-13">'+text+'</p>' +
                    //             ' </li>';
                    //         console.log(messages)
                    //     }
                    //
                    // }
                    $('<div/>').prepend(messages).addClass('item-left').appendTo($(".list-messages"));


                }

            }
            else {
                localStorage.removeItem('secretToken','fullname');
                window.location.href = 'login.html';
            }
        }
      getlistmessages();
  }else {
        localStorage.removeItem('secretToken');
        localStorage.removeItem('fullname');
        localStorage.removeItem('ism');
        localStorage.removeItem('month');
        localStorage.removeItem('halfYear');
        localStorage.removeItem('year');
        window.location.href = "login.html";
  }
    $('#logout').on('click', function (e) {
        e.preventDefault();
        $('#logout').remove();
        localStorage.removeItem('secretToken');
        localStorage.removeItem('email');
        localStorage.removeItem('fullname');
        window.location.href = "login.html";
    });
  function getlistmessages() {


        $.ajax({
            url: 'https://api.mlab.com/api/1/databases/matrimony/collections/account?apiKey=GySvt0pxEYMX3O8Qu9hsQCLZv5r95Jig',
            type: 'GET',
            contentType: 'application/json; charset=utf-8',
            success: function (response) {
                // Get list messages item user
                var item ='';
                var arr = new Array();
                // Đưa id về một mảng từ một mảng => dùng  if  so sánh id userID và id khác muốn chát đưa ra cần chat
                // nếu viết thêm ,  tạo so sanh id
                $.each(response, function (id, data) {
                    var userId = data._id.$oid;
                    arr.push(userId);
                    // console.log(arr);

                    if(userId == arr){

                    }else {
                        item +='<div class="inbox-item">\n' +
                            '                                                    <div class="inbox-item-img"><img src="'+data.images+'" class="rounded-circle" alt=""></div>\n' +
                            '                                                    <p class="inbox-item-author">'+data.fullname+'</p>\n' +
                            // '                                                    <p class="inbox-item-text">I\'ve finished it! See you so...</p>\n' +
                            '                                                    <p class="inbox-item-date">\n' +
                            '                                                        <a href="#" onclick="showViewMessage(\''+ userId + '\')"  class="btn btn-sm btn-link text-info font-13"> Reply </a>\n' +
                            '                                                    </p>\n' +
                            '                                                </div>';
                        // console.log(userId);

                    }
                });

                $('#inbox-item').html(item);

                // Get messages view


            }
        });

    }
});


function showModal(id) {

    // var text = localStorage.getItem('me');
    // console.log(id,text)

}

function showViewMessage(userID) {
    var myDataRef = new Firebase("https://matrimony-chat.firebaseio.com/");
    var count = 0;
    var sent_message_image = new Array();
    $('#sent-message').on('change',function(e){
        var files = e.target.files;
        $.each(files, function(i, file){
            var reader = new FileReader();
            reader.readAsDataURL(file);
            // name.push(file.name);
            reader.onload = function(e){
                sent_message_image.push(e.target.result);
                var template ='<img class="form-control rounded bg-light" src=" '+e.target.result+' " >';
                // $('#view-img-avatar').append(template);
            };
        });
    });

    $("#messageInput").keypress(function (e){
        var name =   localStorage.getItem('fullname');
        // var img = localStorage.getItem('ism');
        if(e.keyCode == 13){ //Enter
            var d = new Date();
            // $("#name").html(name);
            var text = $("#messageInput").val();
            var minutes = d.getMinutes();

            var userm =  {
                id:user,
                count: count,
                name: name,
                image: sent_message_image,
                time: minutes,
                text: text,
                status: "1"
            };
            myDataRef.push(userm);
            $("#messageInput").val("");
        }
        count++;
    });
    myDataRef.on('child_added', function (snapshot){

        var messages = snapshot.val();

        Viewallmessage(messages.name, messages.text, messages.image, messages.time);

    });
    function Viewallmessage(name,text,image,time,id) {
        var messages = '';
        if(id == name && id==text){
            messages +='<li class="list-inline-item mr-3 bubble">' +
                '<p class="mb-0 font-13">'+text+'</p>' +
                ' </li>';
        }else if(userID == name && userID == text){
            console.log(name, text)
        }

        if(id){
            $('<div/>').prepend(messages).appendTo($(".list-messages"));
        }else if(userID){
            $(".list-messages").addClass('item-right');
            console.log('right',userID);

        }else {
            console.log('error messages');
        }

    }
}





