const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function(){
    searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function(){
    searchInputEl.setAttribute('placeholder', '통합검색');
    searchEl.classList.add('focused');
});

searchInputEl.addEventListener('blur', function(){
    searchInputEl.setAttribute('placeholder', '');
    searchEl.classList.remove('focused');
});



const badgeEl = document.querySelector('header .badges');
// _.throttle(함수, 시간)
window.addEventListener('scroll', _.throttle(function(){
    if (window.scrollY > 500) {
        //배지 숨기기
        //gsap.to(요소, 지속시간(초), 옵션);
        gsap.to(badgeEl, .6, {
            opacity : 0,
            display : 'none'
        })
    } else {
        //배지 보이기
        gsap.to(badgeEl, .6, {
            opacity : 1,
            display : 'block'
        })
    }
}, 300)); 



//main visual
const fadeEls = document.querySelectorAll('.visual .fade-in'); //가져올 객체가 여러개 이므로 queryselectorall 이다.
fadeEls.forEach(function(fadeEl, index){   //index 는 0에서 부터 시작(foreach 되는 fadeEl의 순서)
    //gsap.to(요소, 지속시간(초), 옵션);
    gsap.to(fadeEl, 1, {
        delay : (index + 1) * .7,   //0.7, 1.4, 2.1, 2.8
        opacity : 1
    });
});



//new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
    direction: 'vertical',  //수직
    autoplay: true,  
    loop: true        //반복 재생 여부
});
new Swiper('.promotion .swiper-container',{
    //direction: 'horizontal' 수평정렬이 기본값이기 때문에 따로 명시 안해도 됨
    slidesPerView: 3, //한번에 보여줄 슬라이드 개수
    spaceBetween: 10, //슬라이드 사이 여백
    centeredSlides: true, //1번 슬라이드가 가운데 보이기
    loop: true,
    autoplay: {
        delay: 5000 //단위 밀리세컨드 / 5초
    },
    pagination: {
        el: '.promotion .swiper-pagination',
        clickable: true
    },
    navigation: {
        nextEl: '.promotion .swiper-next',
        prevEl: '.promotion .swiper-prev'
    }
});



//toggle제어
const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function(){
    isHidePromotion = !isHidePromotion  //!은 반대값
    if (isHidePromotion){
        promotionEl.classList.add('hide');
    } else {
        promotionEl.classList.remove('hide');
    }
});