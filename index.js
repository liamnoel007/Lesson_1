let btn = document.querySelector('.header_user_profile');

let modale = document.querySelector('.header_user_modale');

btn.addEventListener('click', () => {
  modale.classList.toggle('active');
});
