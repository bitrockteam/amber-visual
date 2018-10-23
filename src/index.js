
import './index.scss';

console.log('Project started...');

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js').then(registration => {
      console.log('SW registered: ', registration);
    }).catch(registrationError => {
      console.log('SW registration failed: ', registrationError);
    });
  });
}


const warn = document.querySelector('.js-warning');
warn ? warn.style.display = 'none' : null;