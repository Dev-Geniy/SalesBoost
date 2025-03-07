document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const answer = button.nextElementSibling;
        const isOpen = answer.classList.contains('open');

        // Закрываем все ответы
        document.querySelectorAll('.faq-answer').forEach(item => {
            item.classList.remove('open');
        });

        // Если текущий ответ был закрыт, открываем его
        if (!isOpen) {
            answer.classList.add('open');
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section"); // Выбираем все секции

    function checkVisibility() {
        sections.forEach((section) => {
            const rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                section.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", checkVisibility);
    checkVisibility(); // Проверяем при загрузке
});


// Добавляем класс show на секцию отзывов, когда она появляется на экране
window.addEventListener('scroll', function () {
    const reviewsSection = document.getElementById('reviews');
    const rect = reviewsSection.getBoundingClientRect();
    if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        reviewsSection.classList.add('show');
    }
});

// ПРОГРЕСС ПРОКРУТКИ
let progressBar = document.getElementById('progress-bar');
let scrollTimeout; // Таймер для задержки

window.addEventListener('scroll', function() {
    let scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    let scrollPosition = window.scrollY;
    let scrollPercentage = (scrollPosition / scrollHeight) * 100;

    // Обновляем ширину прогресс-бара в зависимости от прокрутки
    progressBar.style.width = scrollPercentage + '%';
    
    // Убираем класс "inactive" и добавляем класс "active" во время прокрутки
    progressBar.classList.add('active');
    progressBar.classList.remove('inactive');
    
    // Очистим таймер, если прокрутка происходит
    clearTimeout(scrollTimeout);

    // Устанавливаем таймер для уменьшения яркости через 1 секунду после завершения прокрутки
    scrollTimeout = setTimeout(function() {
        progressBar.classList.remove('active');
        progressBar.classList.add('inactive');
    }, 1000); // 1 секунда задержки после завершения прокрутки
});

// Когда страница загружается, прогресс-бар будет менее ярким
window.addEventListener('load', function() {
    progressBar.classList.add('inactive'); // Начальное состояние: тусклый прогресс-бар
});

// Ждём 10 секунд после загрузки страницы, чтобы показать кнопку
window.onload = function() {
    setTimeout(function() {
        const button = document.getElementById('telegram-button');
        button.style.opacity = 0.6; // Плавно появляется
    }, 10000); // 10000 миллисекунд = 10 секунд
};

// НАВИГАЦИЯ
// Функция для открытия/закрытия меню
function toggleMenu() {
    const menu = document.querySelector(".nav-links");
    menu.classList.toggle("show");
    
    // Добавляем анимацию подсветки при открытии меню
    const burgerButton = document.querySelector(".burger-menu");
    burgerButton.classList.add("glowing");
    
    // Убираем подсветку после 3 секунд
    setTimeout(() => {
        burgerButton.classList.remove("glowing");
    }, 3000);
}

// Функция для закрытия меню после клика на ссылку
function closeMenu() {
    document.querySelector(".nav-links").classList.remove("show");
}

