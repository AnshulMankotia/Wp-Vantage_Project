const navIcon = document.querySelector('.navIcon');
const mobileMenu = document.querySelector('.mobile-menu');
const overlay = document.querySelector('.overlay');

navIcon.addEventListener('click', () => {
    navIcon.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    overlay.classList.toggle('active'); // Add this line to toggle the overlay
    document.body.classList.toggle('active');
});
overlay.addEventListener('click', () => {
  navIcon.classList.remove('active');
  mobileMenu.classList.remove('active');
  overlay.classList.remove('active'); // Remove the overlay class
  document.body.classList.remove('active');
});


const listItems = document.querySelectorAll('.listItems a');

listItems.forEach((listItem) => {
  listItem.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    navIcon.classList.remove('active');
    document.body.classList.remove('active');
  });
});


const accordion = document.getElementsByClassName('tab');
for (let i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener('click', function() {
    // Remove "active" class from all tabs
    // for (let j = 0; j < accordion.length; j++) {
    //   if (j !== i) {
    //     accordion[j].classList.remove('active');
    //   }
    // }
    // Toggle "active" class on the clicked tab
    this.classList.toggle('active');
  });
}
