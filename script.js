const swiper = new Swiper('.swiper', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
  },
  slidesPerView: 3,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

const faqButton = document.querySelectorAll('.faq-card-question-right')
faqButton.forEach(function (element, index) {
  element.addEventListener('click', function () {
    element.parentElement.nextElementSibling.nextElementSibling.classList.toggle('show-answer')
    element.classList.toggle('cross')
  })
})

const overlay = document.querySelector('.overlay')
const cross = document.querySelector('.overlay-modal-cross')
cross.addEventListener('click', function () {
  overlay.style.display = 'none'
})

const button = document.querySelectorAll('.editions-cards-div-button')
const price = document.querySelector('.overlay-modal-form-price-item')
button.forEach(element => {
  element.addEventListener('click', function () {
    overlay.style.display = 'flex'
    price.textContent = element.previousElementSibling.textContent
  })
});

const video = document.querySelector('video');

document.getElementById('showVideo').addEventListener('click', () => {
  video.src = 'Бог Війни - Рагнарок ТРЕЙЛЕР УКРАЇНСЬКОЮ (God of War Ragnarok) @HUMANWASDGames.mp4';
  video.controls = true;

  video.style.display = 'flex'
  document.getElementById('videoContainer').appendChild(video);
});

// create swither
const switcher = document.querySelectorAll('.explore-card-circle-bg')
const PcMinimum = [
  'Intel i5-2500k (4 core 3.3 GHz) or AMD Ryzen 3 1200 (4 core3.1 GHz)',
  '8 GB',
  'Windows 10 64-bit',
  'NVIDIA GTX 960 (4 GB) or AMD R9 290X (4 GB)',
  '5.1',
  '5.1',
  '70 GB',
  '4 GB',
]
const PcRecomended = [
  'Intel i5-2500k (5 core 3.4 GHz) or AMD Ryzen 3 2200 (5 core3.4 GHz)',
  '16 GB',
  'Windows 20 64-bit',
  'NVIDIA GTX 960 (8 GB) or AMD R9 290X (8 GB)',
  '5.6',
  '5.5',
  '90 GB',
  '7 GB',
]
const PsStandard = [
  'PS4',
  '20.4.2018',
  'Sony Interactive Entertainment Europe',
  'Action, Adventure',
  'English, Polish, Russian',
  'English, Dutch, Polish, Russian, Turkish',
]
const PsLimited = [
  'PS5',
  '21.6.2022',
  'Sony Interactive Entertainment Europe',
  'Action, Adventure',
  'English, Dutch, Polish, Russian',
  'English, Dutch, Polish, Russian, Turkish, French',
]
const PC = document.querySelectorAll('.PC-settings')
const PS = document.querySelectorAll('.PS-settings')
switcher.forEach(function (element, index) {
  element.addEventListener('click', function () {
    element.firstElementChild.classList.toggle('active')
     const PC = document.querySelectorAll('.PC-settings')
const PS = document.querySelectorAll('.PS-settings')
switcher.forEach(function (element, index) {
  element.addEventListener('click', function () {
    element.firstElementChild.classList.toggle('active')  
    let current
    for (let index = 0; index < element.parentElement.nextElementSibling.children.length; index++) {
      if(element.parentElement.nextElementSibling.children[index].classList.contains('explore-card-cont-right')){
        current = element.parentElement.nextElementSibling.children[index]
      }
      else{
        null
      } 
    }
    for (let index = 0; index < current.children[0].children.length; index++) {
      console.log(current.children[0].children[index].children[0])
    }
 
  })
})
  })
})