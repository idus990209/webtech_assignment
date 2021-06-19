
loadVideos();
document.getElementById('button2').addEventListener('click', loadUsers);

function loadVideos() {
    window.onload = function () {
        $.ajax({
            url: "controller/Question1RestController.php?query=videos",
            method: 'GET',
            processData: false,
            header: {
                'Content-Type': 'application/json',
            },
            success: (resultJson) => {
                var video1 = resultJson[0].video_path;
                var video2 = resultJson[1].video_path;
                var video3 = resultJson[2].video_path;
                var video4 = resultJson[3].video_path;

                document.getElementById('play1stwebcam').src = video1;
                document.getElementById('play2ndwebcam').src = video2;
                document.getElementById('play3rdwebcam').src = video3;
                document.getElementById('play4thwebcam').src = video4;
                document.getElementById('1stselect').value = video1;
                document.getElementById('2ndselect').value = video2;
                document.getElementById('3rdselect').value = video3;
                document.getElementById('4thselect').value = video4;
                document.getElementById('streamVideo').src = video2;
                

                btnChangeVideo.addEventListener("click", function(){
                    var choosenVideo = document.getElementById("streamVideoSelect").value;
                    document.getElementById("streamVideo").src = choosenVideo;
                });
        
                play1stwebcam.addEventListener("click", function() {
                    document.getElementById("streamVideo").src = video1;
                });
                play2ndwebcam.addEventListener("click", function() {
                    document.getElementById("streamVideo").src = video2;
                });
                play3rdwebcam.addEventListener("click", function() {
                    document.getElementById("streamVideo").src = video3;
                });
                play4thwebcam.addEventListener("click", function() {
                    document.getElementById("streamVideo").src = video4;
                });

            }
        })
    }
}

function loadUsers(){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'controller/Question1RestController.php?query=participants', true);
  
    xhr.onload = function(){
      if(this.status == 200){
        var users = JSON.parse(this.responseText);
        
        var output = '';
        
        for(var i in users){
          output += '<button>' + users[i].name+'</button><br>';
        }
  
        document.getElementById('users').innerHTML = output;
      }
    }
  
    xhr.send();
}

var myVideo = document.getElementById("streamVideo");
btnPlay.addEventListener("click", function(){
    if (myVideo.paused)
        myVideo.play();
});
btnPause.addEventListener("click", function(){
    if (myVideo.play)
        myVideo.pause();
    });
        
function btnPlayPause() {
    if (myVideo.paused)
        myVideo.play();
    else
        myVideo.pause();
}

function btnMuteUnmute(){
    if (myVideo.muted)
        myVideo.muted = false;
    else
        myVideo.muted = true;
}