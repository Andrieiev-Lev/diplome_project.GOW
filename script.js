const swiper = new Swiper('.swiper', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
  },
  slidesPerView:3,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
 
const faqButton = document.querySelectorAll('.faq-card-question-right')
faqButton.forEach(function(element,index){
  element.addEventListener('click',function(){
          element.parentElement.nextElementSibling.nextElementSibling.classList.toggle('show-answer')
          element.classList.toggle('cross')
    })
})

const overlay = document.querySelector('.overlay')
const cross = document.querySelector('.overlay-modal-cross')
cross.addEventListener('click',function(){
  overlay.style.display='none'
})

const button = document.querySelectorAll('.editions-cards-div-button')
const price = document.querySelector('.overlay-modal-form-price-item')
button.forEach(element => {
  element.addEventListener('click',function(){
    overlay.style.display='flex'
    price.textContent=element.previousElementSibling.textContent
  })
});

    const video = document.querySelector('video');

 document.getElementById('showVideo').addEventListener('click', () => {
    video.src = 'Бог Війни - Рагнарок ТРЕЙЛЕР УКРАЇНСЬКОЮ (God of War Ragnarok) @HUMANWASDGames.mp4';
    video.controls = true;

    video.style.display = 'flex'
    document.getElementById('videoContainer').appendChild(video);
  });