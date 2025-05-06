
const orb1 = document.querySelector('.orbgoglowyyes.orb-1');
const orb2 = document.querySelector('.orbgoglowyyes.orb-2');
const orb3 = document.querySelector('.orbgoglowyyes.orb-3');

function updateOrbsPosition(event) {
  const mouseX = event.clientX;
  const mouseY = event.clientY;


  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;


  const orb1X = (mouseX / windowWidth) * 100 - 50;
  const orb1Y = (mouseY / windowHeight) * 100 - 50;
  orb1.style.transform = `translate(-50%, -50%) translate(${orb1X * 0.5}px, ${orb1Y * 0.5}px)`;


  const orb2X = (mouseX / windowWidth) * 100 - 50;
  const orb2Y = (mouseY / windowHeight) * 100 - 50;
  orb2.style.transform = `translate(-50%, -50%) translate(${orb2X * 0.2}px, ${orb2Y * 0.2}px)`;


  const orb3X = (mouseX / windowWidth) * 100 - 50;
  const orb3Y = (mouseY / windowHeight) * 100 - 50;
  orb3.style.transform = `translate(-50%, -50%) translate(${orb3X * 0.1}px, ${orb3Y * 0.1}px)`;
}

window.addEventListener('mousemove', updateOrbsPosition);
