$(function(){
    //initialising
    let audio = document.getElementById('audio');
    let img = document.getElementById('img');
    let songs=['1','2','3'];
    let i=0;
    let l=songs.length;
    
    //next
    $('.a').click(function(){
        $('img').removeClass("stop");
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
    
    //keyboard events
    $('body').on('keydown',function(e){
        //next
        if(e.keyCode===39){
            $('img').removeClass("stop");
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
        }
        //previous
        else if(e.keyCode===37){
            $('img').removeClass("stop");
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
        }
    });
    
    //previous
    $('.b').click(function(){
        $('img').removeClass("stop");
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

    //play
    $('.c').click(function(){
        audio.play();   
        $('img').addClass("rot");
        $('img').removeClass("stop");
        $(this).closest('li').addClass('hide');
        $('.fa-pause').closest('li').removeClass('hide');
    });
    
    //pause
    $('.fa-pause').click(function(){
        audio.pause();
        $('img').addClass("stop");//to pause the animation
        $(this).closest('li').addClass('hide');
        $('.fa-play').closest('li').removeClass('hide');
    });

    //to play/pause via the spacebar
    $( 'body' ).on( 'keydown', function ( e ) {
        if ( e.keyCode === 32 ) {
            if (audio.paused == true) {
                audio.play();
                $('img').addClass("rot");
                $('img').removeClass("stop");
                $('.fa-play').closest('li').addClass('hide');
                $('.fa-pause').closest('li').removeClass('hide');

            }else{
                audio.pause();
                $('img').addClass("stop");
                $('.fa-pause').closest('li').addClass('hide');
                $('.fa-play').closest('li').removeClass('hide');
            }
        }
    });

});
