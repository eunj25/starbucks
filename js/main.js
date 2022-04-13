const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function (){
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function(){
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색')
})

searchInputEl.addEventListener('blur', function(){
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '')
})

const bedgeEl = document.querySelector('header .bedges');
const toTopEl = document.querySelector('#to-top')

// _.throttle(함수, 시간)
window.addEventListener('scroll', _.throttle(function(){
  console.log(window.scrollY);
  if (window.scrollY > 500){
    // 배지 숨기기
    //gsap.to(요소, 지속시간, 옵셥)
    gsap.to(bedgeEl, .6, {
      opacity : 0 ,
      display : 'none'
    }) 
    // bedgeEl.style.display = 'none';

    gsap.to(toTopEl, .2, {
      x: 0
    })
  } else {
    // 배지 나타내기
    gsap.to(bedgeEl, .6, {
      opacity : 1 ,
      display : 'block'
    })
    // bedgeEl.style.display = 'block';

    gsap.to(toTopEl, .2, {
      x: 100
    })
  }
}, 300));

toTopEl.addEventListener('click', function(){
  gsap.to(window, .7, {
    scrollTo: 0
  })
});

// visual fade
const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl, index){
  //gsap.to(요소, 지속시간, 옵셥)
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7,
    opacity: 1
  })
});

new Swiper('.notice-line .swiper-container', {
  // Optional parameters
  direction: 'vertical',
  autoplay: true, 
  loop: true
});

new Swiper('.promotion .swiper-container', {
  // Optional parameters
  slidesPerView: 3,
  spaceBetween: 10,
  centeredSlides: true,
  autoplay: {
    delay: 5000
  }, 
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});

new Swiper('.awards .swiper-container', {
  slidesPerView: 5,
  spaceBetween: 30,
  autoplay: true, 
  loop: true,
  navigation: {
    nextEl: ".awards .swiper-next",
    prevEl: ".awards .swiper-prev"
  }
});

const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-ptomotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function(){
  isHidePromotion = !isHidePromotion
  if (isHidePromotion){
    // 숨김 처리
    promotionEl.classList.add('hide');
  } else {
    // 보임 처리
    promotionEl.classList.remove('hide');
  }
});

// $(function() {
//   $('.toggle-ptomotion').click(function(){
//     $('.promotion').addClass('active')
//   })
// });

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}
function floatingObject(selector, delay, size) {
  gsap.to(selector, 
    random(1.5, 2.5), 
    {
      y: size,
      repeat: -1, // 무한 반복 
      yoyo: true, // 무한 반복
      ease: Power1.easeInOut,
      delay: random(0, delay)
    }
  );
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);

const spyEls = document.querySelectorAll('section.scroll-spy')
spyEls.forEach(function(spyEl){
   new ScrollMagic
    .Scene({
      triggerElement: spyEl, //보여짐 여부를 감시할 요소
      triggerHook: .8
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
});

const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();