function animateValue(element, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const current = Math.floor(progress * (end - start) + start);
        element.textContent = current + element.dataset.suffix;
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// Memulai animasi ketika elemen terlihat
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const element = entry.target;
            const endValue = parseInt(element.dataset.value);
            animateValue(element, 0, endValue, 1500);
            observer.unobserve(element);
        }
    });
});

// progress bar
window.onscroll = function() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("progressBar").style.width = scrolled + "%";
};
// end progress bar


// Mengamati semua elemen statistik
document.querySelectorAll('.statistics-item h2').forEach((element) => {
    observer.observe(element);
});

// Fungsi untuk mendapatkan salam berdasarkan waktu
function getGreeting() {
    const hour = new Date().getHours();
    
    if (hour >= 5 && hour < 11) {
        return "Selamat Pagi";
    } else if (hour >= 11 && hour < 15) {
        return "Selamat Siang";
    } else if (hour >= 15 && hour < 19) {
        return "Selamat Sore";
    } else {
        return "Selamat Malam";
    }
}

// Fungsi untuk memperbarui salam
function updateGreeting() {
    const greetingElement = document.querySelector('.hero-title');
    if (greetingElement) {
        const greeting = getGreeting();
        greetingElement.innerHTML = `${greeting} ! <br>Saya<span class="text-color"> Galang</span>`;
    }
}

// Memperbarui salam setiap menit
setInterval(updateGreeting, 60000);

// Memanggil fungsi saat halaman dimuat
document.addEventListener('DOMContentLoaded', updateGreeting);

