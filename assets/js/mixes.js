document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('audio-player');
    let currentBtn = null;
  
    document.querySelectorAll('.mix-card').forEach(card => {
      const btn = card.querySelector('.play-btn');
      const src = card.dataset.src;
  
      btn.addEventListener('click', e => {
        e.stopPropagation();
        // if you click the same card twice, toggle pause/play
        if (audio.src.endsWith(src) && !audio.paused) {
          audio.pause();
          btn.textContent = '▶';
        } else {
          // if switching tracks, reset previous button
          if (currentBtn && currentBtn !== btn) {
            currentBtn.textContent = '▶';
          }
          audio.src = src;
          audio.play();
          btn.textContent = '❚❚';
          currentBtn = btn;
        }
      });
    });
  
    // when track ends, reset button
    audio.addEventListener('ended', () => {
      if (currentBtn) currentBtn.textContent = '▶';
    });
  });