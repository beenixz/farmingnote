// 툴바의 메뉴 항목
const toolbarItems = [
    { name: "추천", link: "index.html" },
    { name: "농작물 사전", link: "diy.html" },
    { name: "농업 기술", link: "tech.html" }
];

// 툴바에 항목 추가
const toolbar = document.querySelector('.toolbar');
toolbarItems.forEach(item => {
    const link = document.createElement('a');
    link.href = item.link;
    link.textContent = item.name;
    toolbar.appendChild(link);
});

document.querySelectorAll('.page-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const page = this.getAttribute('data-page');
        
        // 모든 페이지 숨기기
        document.querySelectorAll('.page').forEach(p => {
            p.style.display = 'none';
        });
        
        // 선택한 페이지만 보이기
        document.getElementById('page' + page).style.display = 'block';
    });
});
// Swiper 설정
const swiper = new Swiper('.swiper-container', {
    slidesPerView: 3, // 한 번에 3개의 슬라이드 표시
    spaceBetween: 20, // 슬라이드 간의 간격
    loop: true, // 무한 루프
    speed: 600, // 슬라이드 전환 속도 (밀리초 단위)
    effect: 'slide', // 슬라이드 전환 효과
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        // 반응형 설정
        768: {
            slidesPerView: 2, // 768px 이상일 때 2개 슬라이드 표시
        },
        480: {
            slidesPerView: 1, // 480px 이상일 때 1개 슬라이드 표시
        }
    }
});
//
