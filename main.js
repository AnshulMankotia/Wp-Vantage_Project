const navIcon=document.querySelector('.navIcon');
const mobileMenu=document.querySelector('.mobile-menu')
navIcon.addEventListener('click',() => {
    navIcon.classList.toggle('active')
    mobileMenu.classList.toggle('active')
})

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