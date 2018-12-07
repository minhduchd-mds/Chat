$(document).ready(function () {
    var url = "https://www.youtube.com/watch?v=Zb2tvvMYD1U";
    var dd = "https://player.vimeo.com/video/272297929";

    var link4 ='';
    var link1 ='';
    var link2 ='';
    var emojis=["https://www.youtube.com/embed/XCWfg_S4Bmc","https://player.vimeo.com/video/272297929"];

    $.each(emojis, function(i){

        switch (i) {

            case '1':
                i = emojis;
                 link1 ='<iframe width="560" height="315" src=" '+ i+'" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>\n';
                break;
            case '2':
                 link2 ='<iframe width="560" height="315" src=" '+ emojis+'" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>\n';
                break;
            case '3':
               link4 ='<video width="400" height="225" controls  poster="http://www.webestools.com/page/media/videoTag/BigBuckBunny.png">\n' +
                    '\t<source src=" '+i+' " type="video/mp4">\n' +
                    '</video>';
                break;

            default:
                break;

        }
        $("#link4").html(link4);

    });
    var udsds ='';
    var link3 = '';
    var link5 = '';
    for(i=0;i<emojis.length;i++){

        if(emojis[i] == emojis[0]){
             udsds  ='<a href="" onclick=x('+emojis[0]+')><iframe width="560"  height="315" src=" '+ emojis[i]+'" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></a>';

        }else if(emojis[i] == emojis[1]){
            link3  ='<a href="" onclick=x('+emojis[1]+')><iframe src=" '+ emojis[i]+' " width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></a>';

        }
             link5 ='<video width="400" height="225" controls >\n' +
            '\t<source src=" '+ emojis[i]+' " type="video/mp4">\n' +
            '</video>';

        }
        $('#link').html(udsds);
        $('#link1').html(link3);
        $('#link5').html(link5);

});