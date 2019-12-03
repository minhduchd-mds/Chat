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


});