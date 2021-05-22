
const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');
// _.throttle(함수, 시간)
window.addEventListener('scroll', _.throttle(function(){
    if (window.scrollY > 500) {
        //배지 숨기기
        //gsap.to(요소, 지속시간(초), 옵션);
        gsap.to(badgeEl, .6, {
            opacity : 0,
            display : 'none'
        });
        //scroll up 버튼 보이기
        gsap.to(toTopEl, .2, {    //요소를 변수로 지정해 가져와도 되지만 gsap은 css선택자만 적어도 알아서 찾는다
            x: 0
        });
    } else {
        //배지 보이기
        gsap.to(badgeEl, .6, {
            opacity : 1,
            display : 'block'
        });
        //scroll up 버튼 숨기기
        gsap.to(toTopEl, .2, {    //요소를 변수로 지정해 가져와도 되지만 gsap은 css선택자만 적어도 알아서 찾는다
            x: 100
        });
    }
}, 300)); 

//scroll up 버튼 event
toTopEl.addEventListener('click', function(){
    gsap.to(window, .7, {
        scrollTo: 0 //gsap 의 scrollToPlugin 을 따로 가져왔기 때문에 실행됨
    });
});


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


new Swiper('.awards .swiper-container', {
    autoplay: true,
    loop: true,
    spaceBetween: 30,
    slidesPerView: 5,
    navigation: {
        prevEl: '.awards .swiper-prev',
        nextEl: '.awards .swiper-next'
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



// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
    // `.toFixed()`를 통해 반환된 문자 데이터를,
    // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
    return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}
function floatingObject(selector, delay, size){
     //gsap.to(요소, 지속시간(초), 옵션);
    gsap.to(selector, random(1.5, 2.5), {
        y: size,  //세로로 움직이는 범위
        repeat: -1, //무한반복(-1의 의미는 gsap에서만 기능함)
        yoyo: true,  //애니메이션이 진행된만큼 다시 돌아오게함
        ease: Power1.easeInOut,  //gsap easing, 애니메이션이 좀더 자연스럽게 움직이게 해줌
        delay: random(0, delay)
    });
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);

console.log((Math.random() * 4).toFixed(3)); //toFixed(3)은 소수점아래3자리까지 나타내겠단 뜻



const spyEls = document.querySelectorAll('.scroll-spy');
spyEls.forEach(function(spyEl){
    new ScrollMagic
        .Scene({
            triggerElement: spyEl,  //보여짐 여부를 감시할 요소를 지정
            triggerHook: 0.8
        })
        .setClassToggle(spyEl, 'show')
        .addTo(new ScrollMagic.Controller());
});


