$(document).ready(function () {

    const id = localStorage.getItem('secretToken');
    if(id){
        creatAcc();
        loginAcc();
        $('#logout').on('click', function (e) {
            e.preventDefault();
            $('#logout').remove();
            localStorage.removeItem('secretToken');
            localStorage.removeItem('fullname');
            localStorage.removeItem('ism');
            localStorage.removeItem('month');
            localStorage.removeItem('halfYear');
            localStorage.removeItem('year');
            window.location.href = "login.html";
        });
    }else {
        localStorage.removeItem('secretToken');
        localStorage.removeItem('fullname');
        localStorage.removeItem('ism');
        localStorage.removeItem('month');
        localStorage.removeItem('halfYear');
        localStorage.removeItem('year');
        window.location.href = "login.html";
    }
   function creatAcc() {
       $('#add-Payment').on('submit',function (e) {
           const email = $('#email').val();
           const password = $('#password').val();
           const firtname = $('#firstName').val();
           const lastname = $('#lastName').val();
           const price = $('#price').val();
           const phone = $('#phone').val();
           const birthday = $('#birthday').val();
           const city = $('#cityId option:selected').val();
           const county = $('#countryId option:selected').val();
           const state = $('#stateId option:selected').val();
           const user = {
               "email": email,
               "password": password,
               "fullname": {first: firtname, last: lastname},
               "birthday": birthday,
               "address": {city: city, state: state, county: county},
               "price": price,
               "amount": 0,
               "boost": 0,
               "total_amount": "0",
               "product_name": "",
               "created_at": new Date(),
               "key": phone

           };
           $.ajax({
               url: 'https://api.mlab.com/api/1/databases/matrimony/collections/payment/?apiKey=GySvt0pxEYMX3O8Qu9hsQCLZv5r95Jig',
               type: 'POST',
               data: JSON.stringify(user),
               contentType: "application/json",
               success: function (data) {
                   window.location.href="add-payment.html";
               }
           });
           e.preventDefault();
       });
       $('body').on('click', '#delete', function (e) {
           e.preventDefault();
           const id = $(this).data('id');
           const url = 'https://api.mlab.com/api/1/databases/matrimony/collections/payment/' + id + '?apiKey=GySvt0pxEYMX3O8Qu9hsQCLZv5r95Jig';

           $.ajax({
               url: url,
               type: 'DELETE',
               async : true,
               timeout: 300000,
               success: function (data) {
                   window.location.href="add-payment.html";
                   $.toast({
                       text: 'Đăng bài thành công',
                       position: 'top-right',
                       icon: 'success',
                       stack: false
                   })
               }
           });
       });
       Getlist();
       let count = 0;

       function Getlist() {
           $.ajax({
               url: 'https://api.mlab.com/api/1/databases/matrimony/collections/payment/?apiKey=GySvt0pxEYMX3O8Qu9hsQCLZv5r95Jig',
           }).done(function (data) {
               let list = '';
               $.each(data, function (key, data) {
                   const stt = count;
                   const id = data._id.$oid; // mlab _id.$oid
                   const price = new Intl.NumberFormat('Vn-De').format(data.price);
                   const pricer = new Intl.NumberFormat('Vn-De').format(data.total_amount);
                   const total_momeny = new Intl.NumberFormat('Vn-De').format(data.price - data.total_amount);
                   list += '<tr>\n' +
                       '                                                <td>' + stt + '</td>\n' +
                       '                                                <td class="cut-text-hidden">' + data.email + '</td>\n' +
                       '                                                <td class="cut-text-hidden">' + price + ' đ</td>\n' +
                       '                                                <td class="cut-text-hidden">' + pricer + 'đ</td>\n' +
                       '                                                <td class="cut-text-hidden">' + total_momeny + 'đ</td>\n' +
                       '                                                <td class="cut-text-hidden"><span class="badge badge-primary">' + data.amount + '</span></td>\n' +
                       '                                                <td class="cut-text-hidden"><span class="badge badge-primary">' + data.boost + '</span></td>\n' +
                       '                                                <td class="cut-text-hidden">' + data.product_name +'</td>\n' +
                       '                                                <td class="table-action">\n' +
                       '                                                    <a href="" id="delete" data-id="'+id+'" class="action-icon"> <i class="mdi mdi-delete"></i></a>\n' +
                       '                                                </td>\n' +
                       '                                            </tr>'
                   count++;
               });
               $('#acc-payment').html(list);
           });
       }

   } 
   function loginAcc() {
       $('#btnlogin').on('click',function (e) {
           let isValidEmail = true;
           let isValidPassword = true;
           const email = $('#emailaddress').val();
           const password = $('#password').val();

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
           const md5 = $.md5(password, true);
           if(isValidEmail && isValidPassword) {
               const meberdata = {
                   "email": email,
                   "password": md5,
               };
               if(meberdata){
                   $.ajax({
                       url: 'https://api.mlab.com/api/1/databases/matrimony/collections/payment/?apiKey=GySvt0pxEYMX3O8Qu9hsQCLZv5r95Jig',
                       type: 'GET',
                       contentType: 'application/json; charset=utf-8',
                       success: function (response) {

                           $.each(response, function (id, data) {

                               let error;
                               if(email === data.eamil && password === data.password){
                                   window.location.href = 'add-payment.html';
                                   localStorage.setItem('secretToken', data._id.$oid);
                                   localStorage.setItem('fullname', data.fullname);

                               }else {
                                   error = '';
                                   error +='<p class="text-muted mb-4">Nhập lại email hoặc password đã sai .</p>'
                               }
                               $('#error').html(error);
                           });
                       },
                       error: function (response, message) {
                           alert('Có lỗi xảy ra. ' + message);
                       }
                   });
               }
           }
           e.preventDefault();
       });
   }
   function checkPayACC() {

   }
});
