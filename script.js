// Get the orb elements
const orb1 = document.querySelector('.orb-1');
const orb2 = document.querySelector('.orb-2');
const orb3 = document.querySelector('.orb-3');

// Function to handle mouse movement
document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    // Calculate how far the mouse is from the top-left corner of the screen
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    // Calculate the distance of the mouse from the center
    const deltaX = (mouseX - centerX) / 20;
    const deltaY = (mouseY - centerY) / 20;

    // Apply parallax effect to each orb
    orb1.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
    orb2.style.transform = `translate(${deltaX / 2}px, ${deltaY / 2}px)`;
    orb3.style.transform = `translate(${deltaX / 3}px, ${deltaY / 3}px)`;

    // Optionally, limit the movement of the orbs to prevent them from going off-screen
    orb1.style.transform = `translate(${Math.min(Math.max(deltaX, -150), 150)}px, ${Math.min(Math.max(deltaY, -150), 150)}px)`;
    orb2.style.transform = `translate(${Math.min(Math.max(deltaX / 2, -100), 100)}px, ${Math.min(Math.max(deltaY / 2, -100), 100)}px)`;
    orb3.style.transform = `translate(${Math.min(Math.max(deltaX / 3, -50), 50)}px, ${Math.min(Math.max(deltaY / 3, -50), 50)}px)`;
});
