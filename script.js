const orb1 = document.querySelector('.orb-1');
const orb2 = document.querySelector('.orb-2');
const orb3 = document.querySelector('.orb-3');

document.addEventListener('mousemove', (e) => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;

  const deltaX = (mouseX - centerX) / 20;
  const deltaY = (mouseY - centerY) / 20;

  orb1.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
  orb2.style.transform = `translate(${deltaX / 2}px, ${deltaY / 2}px)`;
  orb3.style.transform = `translate(${deltaX / 3}px, ${deltaY / 3}px)`;
});