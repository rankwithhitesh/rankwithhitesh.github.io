/* MOBILE MENU */

const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}

/* DYNAMIC YEAR */

const year = document.getElementById('year');

if (year) {
  year.innerHTML = new Date().getFullYear();
}

/* POPUP */

const popup = document.getElementById('popup');
const closePopup = document.getElementById('close-popup');

/* SHOW POPUP AFTER 7 SECONDS */

window.addEventListener('load', () => {

  console.log('WINDOW LOADED');

  setTimeout(() => {

    console.log('POPUP SHOULD OPEN');

    if (popup) {
      popup.classList.add('active');
      console.log('ACTIVE CLASS ADDED');
    } else {
      console.log('POPUP NOT FOUND');
    }

  }, 7000);

});

/* CLOSE POPUP BUTTON */

if (closePopup && popup) {

  closePopup.addEventListener('click', () => {
    popup.classList.remove('active');
  });

}

/* CLOSE WITH ESC KEY */

document.addEventListener('keydown', (e) => {

  if (e.key === 'Escape' && popup) {
    popup.classList.remove('active');
  }

});

/* CLOSE WHEN CLICK OUTSIDE */

if (popup) {

  popup.addEventListener('click', (e) => {

    if (e.target === popup) {
      popup.classList.remove('active');
    }

  });

}

/* SUCCESS MESSAGE */

function showSuccessMessage() {

  const popupBox = document.querySelector('.popup-box');

  if (popupBox) {

    popupBox.innerHTML = `
      <button class="popup-close" id="close-popup-success">
        ×
      </button>

      <h2 style="margin-bottom:15px;">
        Thank You 🚀
      </h2>

      <p style="color:#9f9f9f; line-height:1.8;">
        You have successfully subscribed to Rank With Hitesh.
        Check your inbox for SEO updates and blogging tips.
      </p>
    `;

    const closeBtn = document.getElementById('close-popup-success');

    if (closeBtn) {

      closeBtn.addEventListener('click', () => {

        if (popup) {
          popup.classList.remove('active');
        }

      });

    }

  }

}

console.log('SCRIPT LOADED');
console.log(popup);
