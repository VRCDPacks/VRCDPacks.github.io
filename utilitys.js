const orb1 = document.querySelector('.orb-1');
const orb2 = document.querySelector('.orb-2');
const orb3 = document.querySelector('.orb-3');

document.addEventListener('mousemove', (e) => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;
  const deltaX = (mouseX - centerX) / 25;
  const deltaY = (mouseY - centerY) / 25;

  if (orb1) orb1.style.transform = `translate(-50%, -50%) translate(${deltaX}px, ${deltaY}px)`;
  if (orb2) orb2.style.transform = `translate(-50%, -50%) translate(${deltaX / 2}px, ${deltaY / 2}px)`;
  if (orb3) orb3.style.transform = `translate(-50%, -50%) translate(${deltaX / 3}px, ${deltaY / 3}px)`;
});

function handleSecurityFeatures() {
  document.onkeydown = function(e) {
    if ((e.ctrlKey && e.shiftKey && e.keyCode === 'I'.charCodeAt(0)) || 
        (e.ctrlKey && e.keyCode === 'U'.charCodeAt(0)) || 
        e.ctrlKey) {
        return false;
    }
  };

  const threshold = 160;
  const checkDevTools = () => {
    const devToolsWidth = window.outerWidth - window.innerWidth > threshold;
    const devToolsHeight = window.outerHeight - window.innerHeight > threshold;
    if (devToolsWidth || devToolsHeight) {
      window.location.href = 'DToolsDetected.html';
      setTimeout(() => window.close(), 1000);
    }
  };

  checkDevTools();
  setInterval(checkDevTools, 500);
}

document.addEventListener('DOMContentLoaded', handleSecurityFeatures);

function showMessage(message, color = 'green') {
  const messageDiv = document.getElementById('message');
  messageDiv.textContent = message;
  messageDiv.style.color = color;
}

function toggleAddUserForm() {
  const form = document.getElementById('addUserForm');
  form.style.display = form.style.display === 'none' ? 'block' : 'none';
}

function toggleDeleteUserForm() {
  const form = document.getElementById('deleteUserForm');
  form.style.display = form.style.display === 'none' ? 'block' : 'none';
}

window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-RLQN4T7679');