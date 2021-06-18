loadVideos();
document.getElementById('button2').addEventListener('click', loadUsers);

function loadUsers(){
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'participantdb.php', true);

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

function loadVideos(){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'videodb.php', true);

    xhr.onload = function(){
      if(this.status == 200){
        var users = JSON.parse(this.responseText);
        
        // var output = '';
        
        // for(var i in users){
        //   output += '<ul>' +
        //     '<li>id: '+users[i].id+'</li>' +
        //     '<li>videoPath: '+users[i].video_path+'</li>' +
        //     '</ul>';
        // }

        video1 = users[0].video_path;
        video2 = users[1].video_path;
        video3 = users[2].video_path;
        video4 = users[3].video_path;
        document.getElementById('play1stwebcam').src = video1;
        document.getElementById('play2ndwebcam').src = video2;
        document.getElementById('play3rdwebcam').src = video3;
        document.getElementById('play4thwebcam').src = video4;
        document.getElementById('1stselect').value = video1;
        document.getElementById('2ndselect').value = video2;
        document.getElementById('3rdselect').value = video3;
        document.getElementById('4thselect').value = video4;
        document.getElementById('streamVideo').src = video2;
      }
      
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