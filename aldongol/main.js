document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.slider-track');
    const slides = document.querySelectorAll('.slide');
    
    //
    track.appendChild(slides[0].cloneNode(true)); 
    track.insertBefore(slides[slides.length-1].cloneNode(true), slides[0]);
 
    let pos = 1;
    track.style.transform = `translateX(-70%)`;
 
    function slide(dir) {
        pos += dir;
        track.style.transition = 'transform 0.3s';
        track.style.transform = `translateX(-${pos * 70}%)`;
 
        setTimeout(() => {
            if (pos === 0) pos = slides.length;
            if (pos > slides.length) pos = 1;
            track.style.transition = 'none';
            track.style.transform = `translateX(-${pos * 70}%)`;
        }, 300);
    }
 
    document.querySelector('.prev').onclick = () => slide(-1);
    document.querySelector('.next').onclick = () => slide(1); 
 });