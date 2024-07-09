document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const faClose = document.getElementById('fa-close');
  const sidebar = document.getElementById('sidebar');
  const body = document.querySelector('body');

  // Toggle sidebar visibility on hamburger click
  hamburger.addEventListener('click', () => {
      sidebar.classList.toggle('show');
  });

   // Toggle sidebar visibility on hamburger click
   faClose.addEventListener('click', () => {
       sidebar.classList.toggle('show');
  });

  // Close sidebar when a link inside it is clicked
  sidebar.addEventListener('click', (e) => {
      if (e.target.tagName === 'A') {
          sidebar.classList.remove('show');
      }
  });

  // Close sidebar when clicking anywhere outside it
  body.addEventListener('click', (e) => {
      if (!sidebar.contains(e.target) && !hamburger.contains(e.target)) {
          sidebar.classList.remove('show');
      }
  });
});


// Event to make the page scrolls up when arrow icon is clicked

document.addEventListener('DOMContentLoaded', function() {
    var arrowUp = document.getElementById('arrow-up');

    arrowUp.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});



// Get the modals
var registrationModal = document.getElementById("registrationModal");
var thankYouModal = document.getElementById("thankYouModal");
var btns = document.querySelectorAll(".btn");
var spans = document.querySelectorAll(".close");

   // When the user clicks any button, open the registration modal 

btns.forEach((btn) => {
  btn.onclick = (event) => {
    setTimeout(() => {
      event.preventDefault();
    registrationModal.style.display = "block";
    }, 1000);
  }
});


   // When the user clicks on <span> (x), close the modal
spans.forEach(span => {
     span.onclick = function() {
       registrationModal.style.display = "none";
       thankYouModal.style.display = "none";
     }
});

   // When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
     if (event.target == registrationModal) {
       registrationModal.style.display = "none";
     }
     if (event.target == thankYouModal) {
       thankYouModal.style.display = "none";
     }
}

   // Handle form submission
var form = document.getElementById("registrationForm");
var submitBtn = document.getElementById("submitBtn");
form.onsubmit = function(event) {
  event.preventDefault();
  submitBtn.textContent = 'Please wait...'
  setTimeout(() => {
    registrationModal.style.display = "none";
    thankYouModal.style.display = "block";
  }, 2500);
}

window.addEventListener('scroll', function() {
    const nav = document.getElementById('nav');
    if (window.scrollY > 0) {
        nav.style.position = 'fixed';
        nav.style.width = 100;
        nav.style.backgroundColor = 'var(--tertiary-color)'
        
    } else {
        nav.style.position = '';
        nav.style.backgroundColor = ''
    }
});

