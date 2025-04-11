const $bigBall = document.querySelector('.cursor__ball--big');
const $smallBall = document.querySelector('.cursor__ball--small');
let $hoverables = [];

// Fungsi untuk menginisialisasi hoverables
function initHoverables() {
    $hoverables = document.querySelectorAll('.hoverable');
    console.log('Hoverable elements found:', $hoverables.length);
    
    // Hapus event listener lama jika ada
    $hoverables.forEach(element => {
        element.removeEventListener('mouseenter', onMouseHover);
        element.removeEventListener('mouseleave', onMouseHoverOut);
    });
    
    // Tambahkan event listener baru
    $hoverables.forEach(element => {
        element.addEventListener('mouseenter', onMouseHover);
        element.addEventListener('mouseleave', onMouseHoverOut);
    });
}

// Listeners
document.body.addEventListener('mousemove', onMouseMove);

// Inisialisasi saat DOM selesai dimuat
document.addEventListener('DOMContentLoaded', () => {
    initHoverables();
});

// Move the cursor
function onMouseMove(e) {
    gsap.to($bigBall, { 
        duration: 0.4,
        x: e.clientX - 15,
        y: e.clientY - 15
    });
    gsap.to($smallBall, {
        duration: 0.1,
        x: e.clientX - 5,
        y: e.clientY - 7
    });
}

// Hover an element
function onMouseHover() {
    console.log('Mouse enter');
    gsap.to($bigBall, {
        duration: 0.3,
        scale: 4
    });
}

function onMouseHoverOut() {
    console.log('Mouse leave');
    gsap.to($bigBall, {
        duration: 0.3,
        scale: 1
    });
}