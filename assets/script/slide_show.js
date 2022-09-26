let offset = 0;
const slideShow = document.querySelector('.slideShow'),
  image = document.querySelectorAll('.imageSlide');

document.querySelector('.nextSlide').addEventListener('click', function() {
  offset += 1000;
  if (offset > ((image.length - 1) * 1000)) {
    offset = 0;
  }
  slideShow.style.left = -offset + 'px';
});

document.querySelector('.prevSlide').addEventListener('click', function() {
  offset -= 1000;
  if (offset < 0) {
    offset = (image.length - 1) * 1000;
  }
  slideShow.style.left = -offset + 'px';
});

function auto_slideShow(){
  setInterval(function(){
    offset += 1000;
  if (offset > ((image.length - 1) * 1000)) {
    offset = 0;
  }
  slideShow.style.left = -offset + 'px';
  }, 8000);
};

auto_slideShow();