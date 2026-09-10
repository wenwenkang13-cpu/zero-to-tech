const hour = new Date().getHours();
const greeting = document.getElementById('greeting');

if (hour < 6) {
  greeting.textContent = '凌晨好！';
} else if (hour < 12) {
  greeting.textContent = '早上好！';
} else if (hour < 18) {
  greeting.textContent = '下午好！';
} else {
  greeting.textContent = '晚上好！';
}

const btn = document.getElementById('btn');
const message = document.getElementById('message');
const greetings = ['欢迎来到零到技术！', '今天也要加油哦！', '很高兴认识你！'];

btn.addEventListener('click', () => {
  const text = greetings[Math.floor(Math.random() * greetings.length)];
  message.textContent = text;
});
