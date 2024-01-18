document.addEventListener('DOMContentLoaded', function() {
    var loginButton = document.getElementById('loginButton');
    var video = null;
  
    loginButton.addEventListener('click', function() {
      video = document.createElement('video');
      video.src = 'hamza...mp4';
      video.autoplay = true;
      video.style.width = '100vw';
      video.style.height = '100vh';
      video.style.objectFit = 'cover';
  
      document.body.appendChild(video);
  
      if (video.requestFullscreen) {
        video.requestFullscreen();
      } else if (video.mozRequestFullScreen) { // Firefox
        video.mozRequestFullScreen();
      } else if (video.webkitRequestFullscreen) { // Chrome, Safari and Opera
        video.webkitRequestFullscreen();
      } else if (video.msRequestFullscreen) { // IE/Edge
        video.msRequestFullscreen();
      }
    });
  
    document.addEventListener('keydown', function(event) {
      if (video !== null) {
        document.body.removeChild(video);
        video = null;
      }
    });
  });