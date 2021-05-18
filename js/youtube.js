// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.

function onYouTubeIframeAPIReady() {
    new YT.Player('player', {   //'player' 는 <div id = "player"><div> 이다. 아이디선택자 # 은 안써줌
        videoId: 'An6LvWQuj_8',  //유투브 영상 주소의 v= 뒤에 있는 것이 videoId
        playerVars: {
            autoplay: true,
            loop: true,
            playlist: 'An6LvWQuj_8' //반복 재생할 유투브 영상 ID 목록
        },
        events: {
            onReady: function(event){
                event.target.mute()   //음소거
            }
        }
    });
}


    //youtube iframe api