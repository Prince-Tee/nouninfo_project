// Mobile menu toggle
const mobileMenu = document.getElementById('mobile-menu');
const navList = document.querySelector('.nav-list');

mobileMenu.addEventListener('click', () => {
    navList.classList.toggle('showing');
});

// Countdown Timer Script
const countdownDate = new Date("2024-08-31T00:00:00").getTime();

const countdownFunction = () => {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

    if (distance < 0) {
        document.getElementById("countdown-timer").innerText = "EXPIRED";
    }
};

setInterval(countdownFunction, 1000);


// Date and time
const updateDateTime = () => {
    const now = new Date();
    const dateTimeStr = now.toLocaleString();
    document.getElementById("date-time").innerText = dateTimeStr;
};

setInterval(updateDateTime, 1000);

// News carousel
let currentNewsIndex = 0;
const newsItems = document.querySelectorAll('.news-item');

const showNextNews = () => {
    newsItems[currentNewsIndex].classList.remove('active');
    currentNewsIndex = (currentNewsIndex + 1) % newsItems.length;
    newsItems[currentNewsIndex].classList.add('active');
};

setInterval(showNextNews, 5000); // Change news every 3 seconds



