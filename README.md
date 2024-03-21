## Модуль регистрации

### Описание

Данный модуль предоставляет функционал для регистрации пользователей. Включает в себя готовый сервер и заглушку клиента для демонстрации работы модуля.

### Установка

1. Клонируйте репозиторий:
   ```
   git clone https://github.com/wilbemax/Try-auth.git
   ```
2. Перейдите в каталог с проектом:
   ```
   cd Try-auth
   ```
3. Установите зависимости:
   ```
   npm install
   ```

### Начало работы

У нас есть две папки

```
cd server
```

```
cd client
```

В папке сервера настройте все необходимое в файле .env

```
<!-- Порт запуска сервера -->
PORT = 5000

<!-- Подключение к базе данных (в нашем случае mongoDB) -->
DB_URL = mongodb+srv://

<!-- Кодировка токенов -->
JWT_ACCESS_SECRET = //qbiSiEuU4RKQAoGe
JWT_REFRESH_SECRET = //XAkRkRDB18ObiNWJ

<!-- Конфигурация почты для внешних приложений -->
SMTP_HOST = "smtp.mail"
SMTP_PORT = 587
SMTP_USER = ваш_email
SMTP_PASSWORD = пароль_для_внешних_приложений

<!-- Конфигурация API -->

API_URL = http://localhost:5000
CLIENT_URL = http://localhost:5173


```

### Запуск сервера

```bash
npm run dev
```

### Запуск клиента

```bash
npm run dev
```

### API

```javascript
/login // войти в аккаунт
/logout // выйти из аккаунта
/activate/:link // динамическая ссылка для активации по почте
/refresh // проверить, жив ли refresh токен
/users // Список всех пользователей
```

### Вклад в разработку

Мы приветствуем ваши вклады в развитие этого модуля. Если вы обнаружили ошибку или у вас есть предложения по улучшению, пожалуйста, создайте issue или отправьте pull request.


## Registration Module

### Description

This module provides functionality for user registration. It includes a ready-made server and a client stub to demonstrate the module's operation.

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/wilbemax/Try-auth.git
   ```
2. Navigate to the project directory:
   ```
   cd Try-auth
   ```
3. Install dependencies:
   ```
   npm install
   ```

### Getting Started

We have two folders

```
cd server
```

```
cd client
```

In the server folder, configure everything you need in the .env file

```
<!-- Server startup port -->
PORT = 5000 

<!-- Database connection (in our case mongoDB) -->
DB_URL = mongodb+srv://

<!-- Token encoding -->
JWT_ACCESS_SECRET = //qbiSiEuU4RKQAoGe
JWT_REFRESH_SECRET = //XAkRkRDB18ObiNWJ

<!-- Email configuration for external applications -->
SMTP_HOST = "smtp.mail"
SMTP_PORT = 587
SMTP_USER = your_email
SMTP_PASSWORD = password_for_external_apps 

<!-- API configuration -->

API_URL = http://localhost:5000
CLIENT_URL = http://localhost:5173


```

### Running the Server

```bash
npm run dev
```

### Running the Client

```bash
npm run dev
```

### API

```javascript
/login // log into the account
/logout // log out of the account 
/activate/:link // dynamic link for email activation 
/refresh // check if the refresh token is alive
/users // List of all users 
```

### Contributing

We welcome contributions to the development of this module. If you find a bug or have suggestions for improvement, please create an issue or submit a pull request.