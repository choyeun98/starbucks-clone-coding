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
    console.log(window.scrollY);
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