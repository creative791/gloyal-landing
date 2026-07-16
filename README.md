# gloyal — лендинг

Лендинг инструмента ретаргетинга gloyal (Mobio). SPA: Vite + React + TypeScript + Tailwind CSS v4 + GSAP.

## Сборка

Требуется Node.js 18+.

```bash
npm install
npm run build
```

Готовая статика — в папке **`dist/`**. Её содержимое выкладывается в корень веб-сервера. Бэкенд не нужен.

## Настройка сервера (обязательно)

Сайт — SPA с двумя страницами: `/` и `/policy`. Сервер должен отдавать `index.html` для любого пути (SPA-fallback), иначе `/policy` вернёт 404 при прямом заходе.

**nginx:**

```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

**Apache (.htaccess):**

```apache
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
```

## Локальная разработка

```bash
npm run dev   # http://localhost:5173
```

## Примечания

- Счётчик Яндекс.Метрики (id 110763163) подключён в `index.html`.
- `netlify.toml` — конфиг прежнего тестового хостинга, на своём сервере не используется (можно игнорировать).
- Шрифты (Alumni Sans, Inter) грузятся с Google Fonts.
