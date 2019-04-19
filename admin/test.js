$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
    /*function like dislike and report */
    $("a.like,a.dis-like,a.report-user,.profile-details a.like,.profile-details a.dis-like").click(function(e){
        e.preventDefault();
        var Ajaxurl=$(this).attr('href');
        $.ajax({
            url:Ajaxurl,
            success:function(response){
                console.log(response);
                //show there
                $(".success_msg").css("display","block");
                $(".success_msg").html(response);
            },
            beforeSend:function(){
                $("#ajaxloader").show();
            },
            complete:function(){
                $("#ajaxloader").hide();
            }
        });
        $(this).parents('.userblock').fadeOut();
        return false;
    });










    // up file gallery
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
        $(document).on("click", ".imgupload5", function() {
            var a = $(this).attr("id");
            $(".avatar-position").val(""),
                $(".avatar-position").val(a),
                $(".avatar-view5").click()
        }),
        $(document).on("click", ".imgupload6", function() {
            var a = $(this).attr("id");
            $(".avatar-position").val(""),
                $(".avatar-position").val(a),
                $(".avatar-view6").click()
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
            if ("5" == i) {
                t = BASE_URL + "images/step/05.png";
                $(".imgupload" + i).attr("src", +t)
            }
            if ("6" == i) {
                t = BASE_URL + "images/step/06.png";
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

});