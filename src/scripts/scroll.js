window.addEventListener('scroll', function () {
    const navbar = document.querySelector('#navbar');
    if (window.scrollY > 10) {
        navbar.classList.add('backdrop-blur-sm', 'bg-black/20', 'border-b' , 'border-b-[#040D12]');
    } else {
        navbar.classList.remove('backdrop-blur-sm', 'bg-black/20', 'border-b' , 'border-b-[#040D12]');
    }
    
    if (window.scrollY > 300) {
        document.getElementById('g-1').style.opacity = 0;
        document.getElementById('g-2').style.opacity = 1;
       
    } else if (window.scrollY > 500) {


    } else {
        document.getElementById('g-1').style.opacity = 1;
        document.getElementById('g-2').style.opacity = 0;
    }
  
});