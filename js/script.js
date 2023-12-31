function runTypingEffect() {
  const text = 'I am Justin Maddox.';
  const typingElement = document.getElementById('typing-text');
  const typingDelay = 100;

  typeText(text, typingElement, typingDelay);
}

function typeText(text, typingElement, delay) {
  for (let i = 0; i < text.length; i++) {
    setTimeout(() => {
      typingElement.textContent += text.charAt(i);
    }, delay * i);
  }
}

function userScroll() {
  const upButton = document.querySelector('.up-button');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      upButton.classList.remove('invisible');
    } else {
      upButton.classList.add('invisible');
    }
  });
}

document.addEventListener('DOMContentLoaded', runTypingEffect);
document.addEventListener('DOMContentLoaded', userScroll);
