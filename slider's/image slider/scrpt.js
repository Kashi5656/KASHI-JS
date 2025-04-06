
    const images = document.querySelectorAll('.slider img');
    const leftBtn = document.querySelector('.left');
    const rightBtn = document.querySelector('.right');
    let current = 0;
    let timeout;

    function showImage(index) {
      images[current].classList.remove('active');
      current = (index + images.length) % images.length;
      images[current].classList.add('active');

      // Restart auto-slide timer
      clearTimeout(timeout);
      timeout = setTimeout(showNextImage, 3000);
    }

    function showNextImage() {
      showImage(current + 1);
    }

    function showPrevImage() {
      showImage(current - 1);
    }

    leftBtn.addEventListener('click', showPrevImage);
    rightBtn.addEventListener('click', showNextImage);

    // Start auto sliding
    timeout = setTimeout(showNextImage, 3000);
 