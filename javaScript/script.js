// Event to make the page scrolls up when clicked

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

   // Get all buttons that open the registration modal
   var btns = document.querySelectorAll(".btn");

   // Get the <span> elements that close the modals
   var spans = document.querySelectorAll(".close");

   // When the user clicks any button, open the registration modal 
   btns.forEach((btn) => {
     btn.onclick = (event) => {
       event.preventDefault();
       registrationModal.style.display = "block";
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
   form.onsubmit = function(event) {
     event.preventDefault();
     registrationModal.style.display = "none";
     thankYouModal.style.display = "block";
   }