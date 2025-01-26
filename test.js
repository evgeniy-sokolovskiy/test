// Простая проверка, что скрипт сработал
console.log('Удаленный скрипт загружен и выполнен!');

// Добавление элемента на страницу для наглядности
const testDiv = document.createElement('div');
testDiv.textContent = 'Удаленный скрипт работает!';
testDiv.style.position = 'fixed';
testDiv.style.bottom = '20px';
testDiv.style.right = '20px';
testDiv.style.backgroundColor = 'green';
testDiv.style.color = 'white';
testDiv.style.padding = '10px';
testDiv.style.borderRadius = '5px';
document.body.appendChild(testDiv);
