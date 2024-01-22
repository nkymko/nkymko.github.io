window.addEventListener('scroll', function () {
    if (window.scrollY > 500 && window.scrollY < 1800) {
        // document.getElementById('g-1').style.opacity = 0;
        // document.getElementById('g-2').style.opacity = 1;
        // document.getElementById('g-3').style.opacity = 0;

        document.getElementById('my-pic').classList.remove('grayscale');
       
    } else if (window.scrollY > 1800) {
        document.getElementById('g-1').style.opacity = 0;
        document.getElementById('g-2').style.opacity = 1;
        // document.getElementById('g-3').style.opacity = 1;

        document.getElementById('exp-1').classList.remove('grayscale');
        document.getElementById('exp-2').classList.remove('grayscale');

    } else {
        document.getElementById('g-1').style.opacity = 1;
        document.getElementById('g-2').style.opacity = 0;
        // document.getElementById('g-3').style.opacity = 0;

        document.getElementById('my-pic').classList.add('grayscale');
        document.getElementById('exp-1').classList.add('grayscale');
        document.getElementById('exp-2').classList.add('grayscale');
    }
  
});