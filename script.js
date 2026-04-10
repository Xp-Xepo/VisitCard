// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Animate skill bars on scroll
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
};

const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progressBar = entry.target;
            const progress = progressBar.getAttribute('data-progress');
            progressBar.style.width = progress + '%';
        }
    });
}, observerOptions);

document.querySelectorAll('.skill-progress').forEach(bar => {
    skillObserver.observe(bar);
});

// Animate elements on scroll
const fadeElements = document.querySelectorAll('.about-card, .skill-card, .contact-card');

const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

fadeElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    fadeObserver.observe(element);
});

// Add active state to nav links on scroll
const sections = document.querySelectorAll('section[id]');

const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${id}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}, {
    threshold: 0.3,
    rootMargin: '0px 0px -50% 0px'
});

sections.forEach(section => {
    navObserver.observe(section);
});

// Typing effect for terminal
const typingTexts = [
    'Люди, которые кричат о своей праведности, — самые отвратительные',
    'Моя социальная жизнь = null',
    'console.log("где смысл жизни?")',
    'Я не сплю, потому что код не компилируется...',
    'git commit -m "ещё одна попытка найти счастье"'
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingElement = document.getElementById('typing-text');

function typeText() {
    const currentText = typingTexts[textIndex];
    
    if (isDeleting) {
        typingElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
    }
    
    let typeSpeed = isDeleting ? 30 : 60;
    
    if (!isDeleting && charIndex === currentText.length) {
        typeSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % typingTexts.length;
        typeSpeed = 500;
    }
    
    setTimeout(typeText, typeSpeed);
}

typeText();

// Quote rotation
const quotes = [
    { text: 'Код — это поэзия, написанная в темноте', author: '— неизвестный разработчик' },
    { text: 'Баги — это не ошибки, это скрытые фичи', author: '— оптимист-программист' },
    { text: 'Лучший код — это тот, который не нужно писать', author: '— ленивый разработчик' },
    { text: 'Сон — это баг, а не фича', author: '— ночной кодер' }
];

let currentQuote = 0;
const quoteText = document.getElementById('quote-text');
const quoteAuthor = document.getElementById('quote-author');
const quoteDots = document.querySelectorAll('.quote-dot');

function showQuote(index) {
    quoteText.style.opacity = '0';
    quoteAuthor.style.opacity = '0';
    
    setTimeout(() => {
        quoteText.textContent = quotes[index].text;
        quoteAuthor.textContent = quotes[index].author;
        quoteText.style.opacity = '1';
        quoteAuthor.style.opacity = '1';
    }, 500);
    
    quoteDots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
    
    currentQuote = index;
}

quoteDots.forEach(dot => {
    dot.addEventListener('click', () => {
        showQuote(parseInt(dot.dataset.index));
    });
});

// Auto-rotate quotes
setInterval(() => {
    const nextQuote = (currentQuote + 1) % quotes.length;
    showQuote(nextQuote);
}, 5000);

// Add hover effect to buttons
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-3px) scale(1.02)';
    });

    button.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Copy to clipboard function
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        // Show visual feedback
        const toast = document.createElement('div');
        toast.className = 'copy-toast';
        toast.textContent = 'Скопировано!';
        document.body.appendChild(toast);
        
        setTimeout(() => {
            toast.remove();
        }, 2000);
    });
}

// Console greeting
console.log('%cПривет! Добро пожаловать на сайт XpXepo!', 'color: #9d4edd; font-size: 20px; font-weight: bold;');
console.log('%cЕсли есть вопросы - свяжитесь со мной!', 'color: #c77dff; font-size: 14px;');
