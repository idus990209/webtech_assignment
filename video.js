
document.getElementById('button2').addEventListener('click', loadUsers);

function loadUsers(){
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'participants.json', true);

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

    play1stwebcam.addEventListener("click", function() {
        document.getElementById("streamVideo").src = "video/1stwebcam.mp4";
    });
    play2ndwebcam.addEventListener("click", function() {
        document.getElementById("streamVideo").src = "video/2ndwebcam.mp4";
    });
    play3rdwebcam.addEventListener("click", function() {
        document.getElementById("streamVideo").src = "video/3rdwebcam.mp4";
    });
    play4thwebcam.addEventListener("click", function() {
        document.getElementById("streamVideo").src = "video/4thwebcam.mp4";
    });

    btnChangeVideo.addEventListener("click", function(){
        var choosenVideo = document.getElementById("streamVideoSelect").value;
        document.getElementById("streamVideo").src = choosenVideo;
    });

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