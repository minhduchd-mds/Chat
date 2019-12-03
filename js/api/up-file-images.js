$(document).ready(function () {
    $(document).on("click", ".imgupload1", function() {
        var a = $(this).attr("id");
        $(".avatar-position").val(""),
            $(".avatar-position").val(a),
            $(".avatar-view").click()
    }),
        $(document).on("click", ".imgupload2", function() {
            var a = $(this).attr("id");
            $(".avatar-position").val(""),
                $(".avatar-position").val(a),
                $(".avatar-view2").click()
        }),
        $(document).on("click", ".imgupload3", function() {
            var a = $(this).attr("id");
            $(".avatar-position").val(""),
                $(".avatar-position").val(a),
                $(".avatar-view3").click()
        }),
        $(document).on("click", ".imgupload4", function() {
            var a = $(this).attr("id");
            $(".avatar-position").val(""),
                $(".avatar-position").val(a),
                $(".avatar-view4").click()
        }),
        $(document).on("click", ".remove-bg", function(a) {
            a.stopPropagation();
            var i = $(this).attr("data-position");
            if ($(this).remove(),
            "2" == i) {
                var t = BASE_URL + "images/step/02.png";
                $(".imgupload" + i).attr("src", +t)
            }
            if ("3" == i) {
                t = BASE_URL + "images/step/03.png";
                $(".imgupload" + i).attr("src", +t)
            }
            if ("4" == i) {
                t = BASE_URL + "images/step/04.png";
                $(".imgupload" + i).attr("src", +t)
            }
            $.ajax({
                url: BASE_URL + "user/ajax_remove_gallery_image",
                type: "POST",
                data: {
                    position: i
                },
                success: function(a) {
                    var t = $.parseJSON(a);
                    $(".imgupload" + i).attr("src", t.url)
                }
            })
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
