import './styles.css';
// import Icon from './assets/icons/favicon.ico';
import sausage_image from './assets/images/simple-fried-sausage_trans.png';
// import cheeseburger from './assets/images/cheesburger.png';

import home_page from './assets/pages/home_page';

console.log('test');
console.log('new line');

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}


document.addEventListener('DOMContentLoaded', (event) => {
  const div = document.querySelector('#title');

  div.addEventListener('click', function () {
    this.style.animation = 'explode 0.5s ease-out forwards';
    setTimeout(() => this.remove(), 500); // Adjust timeout to match animation duration

    // Sausages!
    const sausagesContainer = document.getElementById('sausages');
    sausagesContainer.innerHTML = ''; // Clear previous sausages
    const h1Rect = this.getBoundingClientRect(); // Get position of the h1

    for (let i = 0; i < 150; i++) { // Create 10 sausages
      const sausage = document.createElement('div');
      sausage.classList.add('sausage');
      sausage.style.left = `${h1Rect.left + (h1Rect.width / 2) - 25}px`; // Center horizontally
      sausage.style.top = `${h1Rect.top + (h1Rect.height / 2) - 10 + window.scrollY}px`; // Center vertically, adjust for scroll
      sausagesContainer.appendChild(sausage);

      // Create a new img element
      var img = document.createElement('img');
      img.src = sausage_image;
      img.alt = 'sausage';
      sausage.appendChild(img);

      // Calculate random angle for both direction and rotation
      const angle = Math.random() * 360;
      const distance = Math.random() * 10000 + 50;
      const rotation = Math.random() * 360;

      // Updated animation for spin and fade out
      sausage.style.visibility = 'visible;'

      // Mutate transform attribute at end of callstack
      // so the browser doesn't optimising away the transition.
      setTimeout(() => {
        sausage.style.transform =
          `translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px) 
          rotate(${rotation}deg)`;
        sausage.style.opacity = '0'; // Fade out
      }, 0);

      // Ensure the sausage fades and moves smoothly
      setTimeout(() => sausage.remove(), 750); // Remove sausage from DOM after animation completes
    }
  });
});
