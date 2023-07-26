document.addEventListener('DOMContentLoaded', function() {
  var videoContainers = document.querySelectorAll('.video-container');

  // Adiciona o evento de clique em cada container de vídeo
  videoContainers.forEach(function(container) {
    var overlayId = container.querySelector('.video').getAttribute('data-overlay');
    var overlay = document.getElementById(overlayId);
    var video = container.querySelector('.video');

    overlay.addEventListener('click', function() {
      // Inicia o vídeo
      video.play();
      video.controls = true;

      // Esconde o overlay definindo o display como 'none'
      overlay.style.display = 'none';
    });
  });
});

