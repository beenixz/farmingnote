// 툴바의 메뉴 항목
const toolbarItems = [
    { name: "홈", link: "#" },
    { name: "추천", link: "#" },
    { name: "정보", link: "#" },
    { name: "커뮤니티", link: "#" },
    { name: "문의하기", link: "#" },
    { name: "블로그", link: "#" },
    { name: "사용자 계정", link: "#" },
    { name: "피드백", link: "#" },
];

// 툴바에 항목 추가
const toolbar = document.querySelector('.toolbar');
toolbarItems.forEach(item => {
    const link = document.createElement('a');
    link.href = item.link;
    link.textContent = item.name;
    toolbar.appendChild(link);
});

// 시도 목록
const cities = [
    "서울", "부산", "대전", "광주", "인천",
    "대구", "울산", "세종", "경기", "강원",
    "충북", "충남", "전북", "전남", "경북",
    "경남", "제주"
];

// 도 입력에 따른 시도 선택 동작
document.getElementById('province').addEventListener('input', function() {
    const cityLabel = document.getElementById('city-label');
    const citySelect = document.getElementById('city');

    if (this.value.trim() !== '') {
        cityLabel.style.display = 'block'; // 시도 레이블 보이기
        citySelect.style.display = 'block'; // 시도 선택 박스 보이기

        // 시도 선택 박스 초기화
        citySelect.innerHTML = '<option value="">- 시 선택 -</option>';
        cities.forEach(city => {
            const option = document.createElement('option');
            option.value = city;
            option.textContent = city;
            citySelect.appendChild(option);
        });
    } else {
        cityLabel.style.display = 'none'; // 시도 레이블 숨기기
        citySelect.style.display = 'none'; // 시도 선택 박스 숨기기
    }
});
