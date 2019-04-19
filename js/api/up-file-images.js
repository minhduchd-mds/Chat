$(document).ready(function () {
    var ms = new Array();
    $('#image-css').on('change',function(e){
        var icon = e.target.files;
        $.each(icon, function(i, icons){
             ms.push(m);
            var reader = new FileReader();
            reader.readAsDataURL(icons);
            reader.onload = function(e){
                var m = e.target.result;
               
                $.ajax({
                    url: '',
                    type: 'POST',
                    data: JSON.stringify(ms),
                    contentType: "application/json",
                    success: function (data) {
                    }
                });
            };
        });
        return icon;
    });
    $.ajax({
        url: url,
        type: 'GET',

    }).done(function (imag) {
        var imgone = '<div class="col-md-9 pr-15">\n' +
            '                                                <label id="image-css">\n' +
            '                                                    <input  id="open-file" type="file" multiple="">\n' +
            '                                                    <img  class="img-center w-100" src=" '+imag.url+' " alt="">\n' +
            '                                                </label>\n' +
            '                                                    <span onclick="removeimg(\''+id +'\')" class="showdelate close">' +
            '<i class="fa fa-times" ></i>'+
            '</span>\n' +
            '                                            </div>\n' +
            '                                            <div class="col-md-3">\n' +
            '                                                <div class="row">\n' +
            '                                                    <div class="col-md-12"><img class="img-center" src=" '+imag[1].url+' " alt="">' +
            '                                                    <span  class="showdelate close">' +
            '<i class="fa fa-times" ></i>'+
            '</span>\n' +
            ' </div>\n' +
            '                                                </div>\n' +
            '                                                <div class="row">\n' +
            '                                                    <div class="col-md-12 mt-3"> <img class="img-center" src=" '+imag[2].url+' " alt=""> ' +
            '                                                    <span  class="showdelate close">' +
            '<i class="fa fa-times" ></i>'+
            '</span>\n' +
            '</div>\n' +
            '                                                </div>\n' +
            '                                                <div class="row">\n' +
            '                                                    <div class="col-md-12 mt-3"> <img class="img-center" src=" '+imag[3].url+' " alt="">' +
            '                                                    <span  class="showdelate close">' +
            '<i class="fa fa-times"></i>'+
            '</span>\n' +
            ' </div>\n' +
            '                                                </div>\n' +
            '                                            </div>';
        $('img.img-center').hide();
        $('span.showdelate').hide();
        $('#showimg').html(imgone);
    });

    $('#showimg').on('click','.close',function () {

    })




});
