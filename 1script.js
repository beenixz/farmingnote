// 툴바의 메뉴 항목
const toolbarItems = [
    { name: "추천", link: "index.html" },
    { name: "커뮤니티", link: "community.html" },
];

// 툴바에 항목 추가
const toolbar = document.querySelector('.toolbar');
toolbarItems.forEach(item => {
    const link = document.createElement('a');
    link.href = item.link;
    link.textContent = item.name;
    toolbar.appendChild(link);
});

// 지역 및 농산물 추천 데이터
const produceData = {
    locations: [
        "서울", "부산", "대전", "광주", "인천",
        "대구", "울산", "세종", "경기", "강원",
        "충북", "충남", "전북", "전남", "경북",
        "경남"
    ],
    recommendations: {
        "서울": {
            "10": ["상추", "시금치", "무"],
            "20": ["토마토", "오이", "가지"],
            "30": ["고추", "피망", "수박"]
        },
        "부산": {
            "10": ["무", "배추", "파"],
            "20": ["파프리카", "당근", "토마토"],
            "30": ["고추", "오이", "수박"]
        },
        "대전": {
            "10": ["상추", "시금치", "무"],
            "20": ["토마토", "배추", "가지"],
            "30": ["고추", "수박", "참외"]
        },
        "광주": {
            "10": ["무", "배추", "상추"],
            "20": ["파프리카", "토마토", "호박"],
            "30": ["고추", "수박", "참외"]
        },
        "인천": {
            "10": ["상추", "시금치", "무"],
            "20": ["토마토", "오이", "가지"],
            "30": ["고추", "수박", "피망"]
        },
        "대구": {
            "10": ["무", "배추", "파"],
            "20": ["파프리카", "당근", "토마토"],
            "30": ["고추", "오이", "수박"]
        },
        "울산": {
            "10": ["상추", "시금치", "무"],
            "20": ["토마토", "배추", "가지"],
            "30": ["고추", "수박", "참외"]
        },
        "세종": {
            "10": ["상추", "시금치", "무"],
            "20": ["토마토", "오이", "당근"],
            "30": ["고추", "피망", "수박"]
        },
        "경기": {
            "10": ["상추", "시금치", "무"],
            "20": ["토마토", "오이", "가지"],
            "30": ["고추", "수박", "배추"]
        },
        "강원": {
            "10": ["상추", "시금치", "무"],
            "20": ["당근", "호박", "토마토"],
            "30": ["고추", "수박", "참외"]
        },
        "충북": {
            "10": ["상추", "시금치", "무"],
            "20": ["당근", "배추", "토마토"],
            "30": ["고추", "오이", "수박"]
        },
        "충남": {
            "10": ["상추", "시금치", "무"],
            "20": ["토마토", "가지", "배추"],
            "30": ["고추", "수박", "참외"]
        },
        "전북": {
            "10": ["상추", "시금치", "무"],
            "20": ["당근", "토마토", "배추"],
            "30": ["고추", "오이", "수박"]
        },
        "전남": {
            "10": ["상추", "시금치", "무"],
            "20": ["배추", "파프리카", "토마토"],
            "30": ["고추", "수박", "참외"]
        },
        "경북": {
            "10": ["상추", "시금치", "무"],
            "20": ["토마토", "당근", "가지"],
            "30": ["고추", "수박", "피망"]
        },
        "경남": {
            "10": ["상추", "시금치", "무"],
            "20": ["토마토", "배추", "파프리카"],
            "30": ["고추", "수박", "참외"]
        },
        "제주": {
            "10": ["상추", "시금치", "무"],
            "20": ["토마토", "오이", "당근"],
            "30": ["고추", "수박", "파프리카"]
        }
    }
};

// 드롭다운에 지역 추가
const locationSelect = document.getElementById('location');
produceData.locations.forEach(location => {
    const option = document.createElement('option');
    option.value = location;
    option.textContent = location;
    locationSelect.appendChild(option);
});

// 추천 버튼 클릭 시 농산물 추천
document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); // 기본 폼 제출 방지

    const location = document.getElementById('location').value;
    const temperature = document.getElementById('temperature').value;

    const resultDiv = document.getElementById('result');

    if (location && temperature) {
        const tempKey = Math.floor(temperature / 10) * 10; // 온도를 10단위로 나누기
        const recommendations = produceData.recommendations[location][tempKey];

        if (recommendations) {
            resultDiv.innerHTML = `<h3>${location}에서 추천하는 농산물</h3><ul>${recommendations.map(prod => `<li>${prod}</li>`).join('')}</ul>`;
        } else {
            resultDiv.innerHTML = `<h3>${location}에서 추천할 농산물이 없습니다.</h3>`;
        }
    } else {
        resultDiv.innerHTML = `<h3>모든 필드를 입력해 주세요.</h3>`;
    }
});
