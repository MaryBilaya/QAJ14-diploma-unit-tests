# Login Form Unit Tests (TypeScript + Mocha + Chai)

Учебный проект с unit-тестами для класса валидации логин-формы.

## 📌 Цель проекта
- проектировать правила валидации логина и пароля.
- умение выделять бизнес-логику в отдельный класс.
- писать unit-тесты на TypeScript с использованием Mocha и Chai.
- покрывать позитивные, негативные и пограничные значения ввода.

## Что тестируется
в файле src/login_form.ts реализован класс LoginForm:
* хранит значения username и password;
* содержит методы-помощники для проверки:
  - пустые поля (isUsernameEmpty и isPasswordEmpty);
  - входит ли длина в допустимый диапазон:
    - username: от 8 до 20 символов;
    - password: от 10 до 25 символов;
  - корректен ли формат:
    - username - только латинские буквы, цифры и подчеркивание;
    - password - должен содержать буквы, цифры и хотя бы один символ !@#$%&*?_;
* метод isFormValid() выполняет общую проверку формы;
* метод login() возвращает объект LoginResult.
  В зависимости от ошибки метд возвращает понятное сообщение:
  - пустой логин / пароль;
  - неверная длина логина / пароля;
  - неверный формат логина / пароля;
  - либо "Login successful" при корректно заполненной форме

## 🧰 Стек технологий
- Typescript
- Mocha - test runner
- Chai - библиотека asserts
- tsconfig.json для запуска тестов на Typescript

## 📂 Структура проекта
```text
├─ config/
│  ├─ mocharc.json            # конфигурация mocha
├─ src  
│  ├─ login_form.ts           # бизнес-логика login-формы
├─ test  
│  ├─ login_form.spec.ts      # unit-тесты для login-формы
├─ .prettierrc                # правила форматирования кода      
├─ package.json               # скрипты, зависимости            
├─ tsconfig.json              # настройки Typescript
└─ README.md
``` 

# 🚀 Запуск проекта
## Клонирование репозитория
* git clone https://github.com/MaryBilaya/QAJ14-diploma-unit-tests.git
* cd QAJ14-diploma-unit-tests

## Установка зависимостей
npm install

## Запуск автотестов
npm test

Скрипт test в package.json настроен на запуск Mocha с конфигурацией из config/mocharc.json.

## Что покрыто автотестами
Positive cases:
1. setting and getting username/password
2. isUsernameEmpty/isPasswordEmpty return FALSE when the fields are filled in
3. verification of a correctly completed form
4. login return success: the login form has been completed correctly
5. Checking the format of valid username
6. Checking the format of valid password
Boundaries values:
1. checking the boundary values for username field: 7 chars
2. checking the boundary values for username field: 8 chars
3. checking the boundary values for username field: 9 chars
4. checking the boundary values for username field: 19 chars
5. checking the boundary values for username field: 20 chars
6. checking the boundary values for username field: 21 chars
7. checking the boundary values for password field: 9 chars
8. checking the boundary values for password field: 10 chars
9. checking the boundary values for password field: 11 chars
10. checking the boundary values for password field: 24 chars
11. checking the boundary values for password field: 25 chars
12. checking the boundary values for password field: 26 chars
Negative cases:
1. short username length and valid password length
2. long username length and valid password length
3. short password length and valid username length
4. long password length and valid username length
5. username and password are empty
6. entered empty username and valid password
7. entered empty password and valid password
8. Invalid username format and valid password format
9. Invalid password format and valid username format
