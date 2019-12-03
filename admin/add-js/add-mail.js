$(document).ready(function () {
    var contacr  = "https://api.mlab.com/api/1/databases/matrimony/collections/messages?apiKey=GySvt0pxEYMX3O8Qu9hsQCLZv5r95Jig";
    // var countUrl  = "https://api.mlab.com/api/1/databases/matrimony/collections/album?apiKey=GySvt0pxEYMX3O8Qu9hsQCLZv5r95Jig";

    var getuser = "https://tinder-69.appspot.com/api/v1/user/";

    var id = localStorage.getItem('secretToken');
    if(id){
        Notification();
        CountMail();
    }else {
        localStorage.removeItem('secretToken');
        localStorage.removeItem('fullname');
        localStorage.removeItem('ism');
        localStorage.removeItem('month');
        localStorage.removeItem('halfYear');
        localStorage.removeItem('year');
        window.location.href = "login.html";
    }
    function CountMail() {
        var inboxCount = sessionStorage.getItem('');
        var draftCount = sessionStorage.getItem('');
        var setMailCount = sessionStorage.getItem('');
        var deleteCount = sessionStorage.getItem('deleteCount');

        var Count = {
            "inboxCount":inboxCount,
            "draftCount":draftCount,
            "setMailCount":setMailCount,
            "deleteCount":deleteCount
        };
        var id = '5cb5ea655d0e656d021c222a';
        if(id){
            $.ajax({
                url: "https://api.mlab.com/api/1/databases/matrimony/collections/album/'+id+'?apiKey=GySvt0pxEYMX3O8Qu9hsQCLZv5r95Jig",
                type: 'PUT',
                data: JSON.stringify(Count),
                contentType: "application/json",
                success: function (data) {

                }
            });
        }

        $('.deleteCount').append(deleteCount);
    }
    function Notification() {
        $.ajax({
            url: contacr,
            type: 'GET',
            contentType: 'application/json; charset=utf-8',
            success: function (response) {
                $.each(response, function (id, data) {
                    var id = data._id.$oid;
                    // sessionStorage.setItem('contact',id);
                    var getmailUser = ' <tr class="unread">\n' +
                        '                                            <td class="mail-select">\n' +
                        '                                                <div class="checkbox checkbox-primary m-r-15">\n' +
                        '                                                    <input data-id="'+id+'"  name="checkboxId" type="checkbox">\n' +
                        '                                                </div>\n' +
                        '\n' +
                        '                                                <i class="fa fa-star m-r-15 text-muted"></i>\n' +
                        '\n' +
                        '                                                <i class="fa fa-circle m-l-5 text-warning"></i>\n' +
                        '                                            </td>\n' +
                        '\n' +
                        '                                            <td>\n' +
                        '                                                <a href=""  class="email-name">'+data.email+'</a>\n' +
                        '                                            </td>\n' +
                        '                                            <td>\n' +
                        '                                                <a href=""  class="email-name">'+data.title+'</a>\n' +
                        '                                            </td>\n' +
                        '                                            <td class="hidden-xs">\n' +
                        '                                                <a href="" class="email-msg">'+data.messages+'</a>\n' +
                        '                                            </td>\n' +
                        '                                            <td class="text-right">'+data.date+'</td>\n' +
                        '                                        </tr>'
                    $('.getMail').append(getmailUser);
                });

            }
        });
        count = 0;
        $('body').on('click','#deleteMail',function (e) {

            var check = $('input[name=checkboxId]');
            check.each(function () {
                if (this.checked) {

                    var id = $(this).data('id');
                    var url = 'https://api.mlab.com/api/1/databases/matrimony/collections/messages/'+id+'?apiKey=GySvt0pxEYMX3O8Qu9hsQCLZv5r95Jig';

                    $.ajax({
                        url: url,
                        type: 'DELETE',
                        async : true,
                        timeout: 300000,
                        success: function (data) {
                            window.location.href="mailbox.html";
                        }
                    });
                }
            });

            sessionStorage.setItem('deleteCount',count);
            e.preventDefault();
            count++;
        })
    }
});

