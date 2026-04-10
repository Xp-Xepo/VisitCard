#XpXepo Portfolio

Персональный сайт-портфолио — минималистичный, мрачный и атмосферный.

![Preview](preview.png)

## ✨ Особенности

- **Glitch-эффект** на заголовке с периодическими искажениями
- **Интерактивный терминал** в стиле kitty (Arch Linux) с neofetch-подобным выводом
- **Анимация печати** — фразы печатаются и стираются в реальном времени
- **Вращающиеся цитаты** с плавными переходами
- **Hover-эффекты** на карточках с бликом и свечением
- **Копирование по клику** — Discord и Email копируются в буфер обмена
- **Полностью адаптивный** дизайн для всех устройств

## 🛠️ Технологии

| Технология | Описание |
|-----------|----------|
| **HTML5** | Семантическая разметка |
| **CSS3** | Анимации, градиенты, grid/flexbox |
| **JavaScript** | Интерактивность, typing effect, Intersection Observer |
| **Google Fonts** | Inter — основной шрифт |

## 📂 Структура проекта

```
litlkaka/
├── index.html          # Главная страница
├── style.css           # Стили и анимации
├── script.js           # Логика и интерактивность
└── df1c98a24d0196f58fa5449ab0a2f6c2.gif  # Аватар
```

## 🚀 Быстрый старт

1. **Склонируйте репозиторий:**
   ```bash
   git clone https://github.com/Xp-Xepo/litlkaka.git
   cd litlkaka
   ```

2. **Откройте `index.html` в браузере** или используйте локальный сервер:
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Node.js (http-server)
   npx http-server -p 8000
   ```

3. **Откройте** `http://localhost:8000`

## 🎨 Кастомизация

### Изменение цветов
Откройте `style.css` и измените CSS-переменные в `:root`:

```css
:root {
    --bg-primary: #000000;
    --accent-primary: #ffffff;
    /* ... другие переменные */
}
```

### Изменение текста в терминале
В `script.js` отредактируйте массив `typingTexts`:

```javascript
const typingTexts = [
    'Ваша фраза 1',
    'Ваша фраза 2',
    // ...
];
```

### Изменение цитат
В `script.js` отредактируйте массив `quotes`:

```javascript
const quotes = [
    { text: 'Ваша цитата', author: '— автор' },
    // ...
];
```

### Изменение контактов
В `index.html` найдите секцию `#contact` и замените ссылки/текст:

- GitHub: `https://github.com/ВАШ-НИК`
- Discord: никнейм в `onclick="copyToClipboard('...')"`
- Email: адрес в `onclick="copyToClipboard('...')"`

## 📱 Адаптивность

| Устройство | Размер экрана |
|-----------|--------------|
| Desktop   | 1200px+      |
| Tablet    | 768px — 1199px |
| Mobile    | < 768px      |

##  Лицензия

MIT License — используйте как хотите.

## 📬 Контакты

- **GitHub:** [@Xp-Xepo](https://github.com/Xp-Xepo)
- **Discord:** `xpxepo`
- **Email:** mmirilikov@gmail.com

---

> *"Люди, которые кричат о своей праведности, — самые отвратительные"*
