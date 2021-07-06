$(function(){
    let audio = document.getElementById('audio');
    let img = document.getElementById('img');
    let songs=['1','2','3'];
    let i=0;
    let l=songs.length;
    
    $('audio').addClass('no');
    $('.a').click(function(){
        if(i==l-1){
            i=0;
        }
        else{
            i++;
        }
        audio.src=`./Audio/${songs[i]}.mp3`;
        img.src=`./Images/${songs[i]}.jpg`;
        audio.play();
        if(audio.paused){}
        else{
            $('.fa-play').closest('li').addClass('hide');
            $('.fa-pause').closest('li').removeClass('hide');
        }
        $('img').addClass("rot");
    });
    $('.b').click(function(){
        if(i==0){
            i=l-1;
        }
        else{
            i--;
        }
        audio.src=`./Audio/${songs[i]}.mp3`;
        img.src=`./Images/${songs[i]}.jpg`;
        audio.play();   
        if(audio.paused){}
        else{
            $('.fa-play').closest('li').addClass('hide');
            $('.fa-pause').closest('li').removeClass('hide');
        }
        $('img').addClass("rot");
    });

    $('.c').click(function(){
        audio.play();   
        $('img').addClass("rot");
        $('img').removeClass("stop");
        $(this).closest('li').addClass('hide');
        $('.fa-pause').closest('li').removeClass('hide');
    });
    
    $('.fa-pause').click(function(){
        audio.pause();
        $('img').addClass("stop");
        $(this).closest('li').addClass('hide');
        $('.fa-play').closest('li').removeClass('hide');
    });
    if(audio.paused){
        $('img').addClass("stop");
        $('.fa-play').closest('li').removeClass('hide');
        $('.fa-pause').closest('li').addClass('hide');
    }else{}

});