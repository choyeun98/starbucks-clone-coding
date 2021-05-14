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
// _.throttle(함수, 시간)