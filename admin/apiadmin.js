$(document).ready(function () {
    var List = "../json/post.json";
    var Toplist = "../json/toplist.json";
    var Login  = "https://api.mlab.com/api/1/databases/matrimony/collections/account?apiKey=GySvt0pxEYMX3O8Qu9hsQCLZv5r95Jig";

    var   Dashboard  = "http://demo4522112.mockable.io/dashboard";




    // // ========== Login SC ==========

   $('#btnlogin').click(function (e) {
       e.preventDefault();
       var email = $('#emailaddress').val();
       var passsword = $('#passwords').val();
       $.ajax({
           url: Login,
           type: 'GET',
           // data: JSON.stringify(Dashboards),
           contentType: 'application/json; charset=utf-8',
               success: function (response) {

               $.each(response, function (id, data) {

                   if(email == data.eamil && passsword == data.password){
                       // id.push(data._id.$oid);
                       window.location.href = 'index.html';
                       localStorage.setItem('secretToken', data._id.$oid);
                       localStorage.setItem('fullname', data.fullname);

                   }else {
                       var error ='';
                       error +='<p class="text-muted mb-4">Nhập lại email hoặc password đã sai .</p>'
                   }
                   $('#error').html(error);
               });
           },
           error: function (response, message) {
               alert('Có lỗi xảy ra. ' + message);
           }
       });
   });
    // //========== SIGN UP =========
    $('#signup').click(function (e) {
        e.preventDefault();
        var customer  = {
            'fullname': $('#fullname').val(),
            'email': $('#emailaddress').val(),
            'password': $('#passwordsign').val(),
            'images' : 'data',
            'description' : 'description',
            'decentralization' : 'decentralization',
            'date' : 'date',
            'satatus' : '1'
        };
        $.ajax({
            url: Login,
            type: 'POST',
            data: JSON.stringify(customer),
            contentType: 'application/json; charset=utf-8',
            success: function (response) {
                window.location.href = 'login.html';
            },
            error: function (response, message) {
            }
        });
    });
    // //============= Logout ========

    $('#logout').on('click', function (e) {
        e.preventDefault();
        $('#logout').remove();
       localStorage.removeItem('secretToken','fullname');
        localStorage.removeItem('fullname');
       setTimeout(window.location.href = "login.html", 2000);
    });





    // Dashboard
    Listbirth();
    function Listbirth() {

        $.ajax({
            url: Dashboard,
            type: 'GET',
            contentType: 'application/json; charset=utf-8',
            success: function (res) {
                var members = res.members;
                var couples =res.couples;
                var billTotal =res.billTotal;
                var count_month =res.count_month;
                var bill_month =res.bill_month;
                var count_halfYear =res.count_halfYear;
                var bill_halfYear =res.bill_halfYear;
                var count_year =res.count_year;
                var bill_year =res.bill_year;


                $('#menberid').html(members);
                $('#couples').html(couples);
                var Bill =  new Intl.NumberFormat('Vn-De', { style: 'currency', currency: 'VND' }).format(billTotal);
                $('#billTotal').html(Bill);

                var Billmonth =  new Intl.NumberFormat('Vn-De', { style: 'currency', currency: 'VND' }).format(bill_month);
                $('.bill_month').html(Billmonth);
                $('#count_month').html(count_month);

                var BillmonthhalfYear =  new Intl.NumberFormat('Vn-De', { style: 'currency', currency: 'VND' }).format(bill_halfYear);
                $('.bill_halfYear').html(BillmonthhalfYear);
                $('#count_halfYear').html(count_halfYear);

                var BillYear =  new Intl.NumberFormat('Vn-De', { style: 'currency', currency: 'VND' }).format(bill_year);
                $('.bill_year').html(BillYear);
                $('#count_year').html(count_year);

            }
        });
    }



    // POST Blog
    sessionStorage.removeItem('listitem');
    // view to list file > json array
    var imgs = new Array();
    $('#update-img').on('change',function(e){
        var files = e.target.files;
        $.each(files, function(i, file){
            var reader = new FileReader();
            reader.readAsDataURL(file);
            // name.push(file.name);
            reader.onload = function(e){
                imgs.push(e.target.result);
                var template ='<div id="remove" class="card mt-1 mb-0 shadow-none border border-light dz-processing dz-image-preview dz-success dz-complete">\n' +
                    '            <div class="p-2">\n' +
                    '                <div class="row align-items-center">\n' +
                    '                    <div class="col-auto">\n' +
                    '<img class="avatar-sm rounded bg-light" src="'+e.target.result+' " style="width: 5rem;">'+
                    '                    </div>\n' +
                    '                    <div class="col pl-0">\n' +
                    '                        <a href="javascript:void(0);" class="text-muted font-weight-bold" data-dz-name="">'+file.name+'</a>\n' +
                    '                        <p class="mb-0" data-dz-size=""><strong>'+file.size+'</strong> </p>\n' +
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
                $('#views-img').append(template);
            };
        });
    });
    // post blog
    $('#add-blog').on('submit', function (e) {
            e.preventDefault();
          var title = $('#titleid').val();
          var conten = $('#contenr').val();
          var urlimages = $('#urlimage').val();
          var fullDate = $('#dash-daterange').val();

          // upfile img   mot mang , data/img


          var blog = {
              "title": title,
              "text": conten,
              "urlimages":urlimages,
              "date" : fullDate,
              "images": imgs
          };

          if(sessionStorage.getItem('listitem') != null){
            var id = sessionStorage.getItem('listitem');
            var url = 'https://api.mlab.com/api/1/databases/matrimony/collections/blog/'+id+'?apiKey=GySvt0pxEYMX3O8Qu9hsQCLZv5r95Jig';
            var type = 'PUT';
          }else{
            var url ='https://api.mlab.com/api/1/databases/matrimony/collections/blog?apiKey=GySvt0pxEYMX3O8Qu9hsQCLZv5r95Jig';
            var type = 'POST';
          }
          $.ajax({
              url: url,
              type: type,
              data: JSON.stringify(blog),
              contentType: "application/json",
              success: function (data) {
                  window.location.href="blog.html";
                  $.toast({
                      text: 'Đăng bài thành công',
                      position: 'top-right',
                      icon: 'success',
                      stack: false
                  })
              }
          });


      });
    //edit id table blog
    $('body').on('click', '#eidtblog', function (e) {
        e.preventDefault();
        sessionStorage.setItem('listitem', $(this).data('id'));
        $('#titleid').val($(this).data('title'));
        $('#contenr').val($(this).data('text'));
        $('#urlimage').val($(this).data('urlimages'));
        $('#update-img').val($(this).data('images'))
    });
    //delete id table blog
    $('body').on('click', '#deleteblog', function (e) {
        e.preventDefault();
        var id =  $(this).data('id');
        var url = 'https://api.mlab.com/api/1/databases/matrimony/collections/blog/'+id+'?apiKey=GySvt0pxEYMX3O8Qu9hsQCLZv5r95Jig';

        $.ajax({
            url: url,
            type: 'DELETE',
            async : true,
            timeout: 300000,
            success: function (data) {
                window.location.href="blog.html";
                $.toast({
                    text: 'Đăng bài thành công',
                    position: 'top-right',
                    icon: 'success',
                    stack: false
                })
            }
        });
    });
    // get list table blog
    Getlistblog();
    var count = 0;
    function Getlistblog() {
        $.ajax({
            url: 'https://api.mlab.com/api/1/databases/matrimony/collections/blog?apiKey=GySvt0pxEYMX3O8Qu9hsQCLZv5r95Jig',
        }).done(function (data){
            var list ='';
            $.each(data, function (key, data) {
                var stt = count;
                var  id = data._id.$oid;
                list +='<tr>\n' +
                    '                                                <td>'+stt+'</td>\n' +
                    '                                                <td class="cut-text-hidden">'+ data.title +'</td>\n' +
                    '                                                <td class="cut-text-hidden demission">' + data.text +'</td>\n' +
                    '                                                <td class="table-user">\n' +
                    '                                                    <img src="  '+data.urlimages+'  "  class="mr-2 rounded-circle">\n' +
                    '                                                </td>\n' +
                    '\n' +
                    '\n' +
                    '                                                <td class="table-action">\n' +
                    '                                                    <a href="" id="eidtblog" data-id="'+id+'" data-title=" '+ data.title+' " data-text ="'+data.text+'" data-urlimages=" '+data.urlimages+' " data-img="'+data.images+' " class="action-icon"> <i class="mdi mdi-pencil"></i></a>\n' +
                    '                                                    <a href="" id="deleteblog" data-id="'+id+'" data-title=" '+ data.title+' " data-text ="'+data.text+'" data-urlimages=" '+data.urlimages+' " class="action-icon"> <i class="mdi mdi-delete"></i></a>\n' +
                    '                                                </td>\n' +
                    '                                            </tr>'
                count++;
            });

            $('#listblog').html(list);
        });



    }






    // Search
    $('#submitsearch').on("click", function () {
        var search = $('#searchapi').val();
        $.ajax({
            url: List,
            type: 'GET',
            contentType: 'application/json; charset=utf-8',
            async: false,
            dataType: 'Json',
            success: function (data, status, jqXHR) {
                // console.log(data)
                // alert(data)
                for(var i = 0 ; i <data.length ; i++){

                    var email = data[i].email;
                    var age = data[i].age;
                    var country = data[i].country;
                    var city = data[i].city;
                    var list = '';
                    var k = 50;
                        list +=' '+ email +  age + ' ';


                    // console.log(list)

                }
                // $('#ListDecember').html(list);
            }
        });
    });
    $("#searchapi").keypress(function(){

            var country = $("input[name=searchapi]").val();
            var url = "http://demo4522112.mockable.io/menber";
            var customer = {

                "email": email,
                "country": country

            }
            $.ajax({
                url: url,
                type: 'GET',
                contentType: "application/json; charset=utf-8",
                async: false,
                data: JSON.stringify(customer),
                success: function(data) {

                    // for(var i=0;i<data.length;i++){
                    //     var email = data[i].email;
                    //     var age = data[i].age;
                    //     var country = data[i].country;
                    //     var city = data[i].city;
                    //     var list = '';
                    //     var k = 50;
                    //
                    //
                    //         list +='<p>'+ country+  email + '</p> ';
                    //
                    //     alert(list)
                    //     console.log(list)
                    // }
                    // $("#output").html(list);
                }
            });
    });


    
//    ============== paymen data table thang 1 

datatime();
    function datatime() {

        $.ajax({
            url: List,
            type: 'GET',
            dataType:"json",
            // data: Dashboards,
            contentType:"application/json; charset=utf-8",
            success: function(response){
                var moth = '';
                var harhyerd = '';
                var year = '';

                for (var i = 0; i < response.length; i++) {
                    var id = i;
                    var username = response[i].username;
                    var image = response[i].image;
                    var email = response[i].email;
                    var createAt =response[i].createAt;
                    var updateAt = response[i].updateAt;

                    if(id <= 5){
                        moth +='<tr>' +
                        '<td class="table-user">'+ id +' </td>' +
                        '<td class="table-user">' +
                        '<img src=" '+ image +' " alt="table-user" class="mr-2 rounded-circle">\n' +
                        ''+ username +'' +
                        '</td>' + '<td> '+ email+'</td>' +
                        '<td> '+ createAt+'</td>' +
                        '<td>'+updateAt +'</td>' +
                        '</tr>';
                    }
                    if(id <= 5){
                        harhyerd +='';
                    }
                    if(id <= 5){
                        year +='';
                    }



                }
                $('#moth').html(moth);

            },
            error: function() {

            }
        });
        // Top LIST
        $.ajax({
            url: Toplist,
            type: 'GET',
            dataType: "json",
            // data: Dashboards,
            contentType: "application/json; charset=utf-8",
            success: function (re) {
                var toplist = '';
                for (var i = 0; i < re.length; i++) {

                    var username = re[i].username;
                    var id = re[i].id;
                    var money = re[i].money;
                    var createAt = re[i].createAt;
                    var qyt = re[i].qyt;
                    var total = qyt * money;
                    var newDate = new Date();
                    var moneys =  new Intl.NumberFormat('Vn-De', { style: 'currency', currency: 'VND' }).format(money);
                    var totals =  new Intl.NumberFormat('Vn-De', { style: 'currency', currency: 'VND' }).format(total);


                    // noinspection JSAnnotator
                    var day_to_limit = ((newDate.toLocaleDateString())+ (newDate.getMonth())); // tinh sai
                    if (id <= 5) {
                        toplist += '<tr>\n' +
                            '                                                    <td>\n' +
                            '                                                        <h5 class="font-14 mb-1 font-weight-normal">'+username+'</h5>\n' +
                            '                                                        <span class="text-muted font-13">'+createAt+'</span>\n' +
                            '                                                    </td>\n' +
                            '                                                    <td>\n' +
                            '                                                        <h5 class="font-14 mb-1 font-weight-normal">'+moneys+'</h5>\n' +
                            '                                                        <span class="text-muted font-13">1 Tháng</span>\n' +
                            '                                                    </td>\n' +
                            '                                                    <td>\n' +
                            '                                                        <h5 class="font-14 mb-1 font-weight-normal">'+qyt+'</h5>\n' +
                            '                                                        <span class="text-muted font-13">Số lượng</span>\n' +
                            '                                                    </td>\n' +
                            '                                                    <td>\n' +
                            '                                                        <h5 class="font-14 mb-1 font-weight-normal">'+totals+'</h5>\n' +
                            '                                                        <span class="text-muted font-13">Tổng</span>\n' +
                            '                                                    </td>\n' +
                            '                                                    <td>\n' +
                            '                                                        <h5 class="font-14 mb-1 font-weight-normal">'+day_to_limit+'</h5>\n' +
                            '                                                        <span class="text-muted font-13">Ngày hết hạn </span>\n' +
                            '                                                    </td>\n' +
                            '                                                </tr>';
                    }
                }
                $('#toplist').html(toplist);
            },
            error: function () {

            }
        });
    }

//    ============== Edit text
//     edittext();
//     function edittext() {
//         $('#froala-editor').froalaEditor();
//     }
});
