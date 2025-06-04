// simple typed text effect for the hero title
const text = 'BachEnd \u2014 Brains behind Bytes';
const typed = document.getElementById('typed-text');
let index = 0;
function type() {
    if (!typed) return;
    if (index < text.length) {
        typed.textContent += text.charAt(index);
        index++;
        setTimeout(type, 80);
    }
}
window.addEventListener('DOMContentLoaded', type);
