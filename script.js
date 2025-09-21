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
