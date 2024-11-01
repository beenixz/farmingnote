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

// 지역 및 농산물 추천 데이터
const produceData = {
    locations: [
        "서울&경기", "부산", "대전", "인천", "대구", "울산", "세종", "강원",
        "충북", "충남", "전북", "전남", "경북", "경남"
    ],
    recommendations: {

"서울&경기": {
"1": ["무"],
"2": ["현미", "무", "도라지", "돼지감자", "고구마"],
"3": ["현미", "무", "도라지", "돼지감자", "고구마"],
"4": ["양배추", "상추"],
"5": ["상추", "방울토마토"],
"6": ["토마토", "고추"],
"7": ["옥수수", "참외"],
"8": ["수박", "고구마"],
"9": ["무", "배추"],
"10": ["양배추"],
"11": ["양송이버섯"],
"12": ["딸기"]
},
"부산": {
"1": ["양배추", "상추", "방울토마토", "토마토", "당근", "배추"],
"2": ["양배추", "상추", "방울토마토", "토마토", "당근", "배추"],
"3": ["양배추", "상추", "방울토마토", "토마토", "당근", "배추"],
"4": ["상추", "토마토", "고추"],
"5": ["딸기", "참외"],
"6": ["수박", "옥수수"],
"7": ["옥수수", "고구마"],
"8": ["배추", "호박"],
"9": ["무", "상추"],
"10": ["양배추", "무"],
"11": ["버섯", "배추"],
"12": ["귤", "감"]
},
"대전": {
"1": ["부추", "양송이버섯"],
"2": ["딸기", "부추"],
"3": ["호박", "오이"],
"4": ["상추", "토마토"],
"5": ["고추", "가지"],
"6": ["수박", "옥수수"],
"7": ["옥수수", "참외"],
"8": ["가지", "참외"],
"9": ["무", "배추"],
"10": ["양배추", "무"],
"11": ["양송이버섯"],
"12": ["딸기"]
},
"인천": {
"1": ["배도라지", "딸기"],
"2": ["토마토", "배도라지", "딸기"],
"3": ["고추", "수박"],
"4": ["상추", "토마토"],
"5": ["양배추", "고구마"],
"6": ["옥수수", "참외"],
"7": ["수박", "옥수수"],
"8": ["고구마", "참외"],
"9": ["무", "배추"],
"10": ["양배추"],
"11": ["버섯", "양송이버섯"],
"12": ["귤", "감"]
},
"대구": {
"1": ["단감", "미나리"],
"2": ["단감", "복숭아"],
"3": ["미나리", "호박"],
"4": ["복숭아", "참외"],
"5": ["토마토", "고추"],
"6": ["옥수수", "참외"],
"7": ["복숭아", "체리"],
"8": ["메론", "옥수수"],
"9": ["무", "배추"],
"10": ["양배추"],
"11": ["양송이버섯"],
"12": ["귤", "감"]
},
"울산": {
"1": ["상추", "시금치"],
"2": ["가지", "파프리카"],
"3": ["양배추", "상추"],
"4": ["오이", "호박"],
"5": ["고추", "토마토"],
"6": ["옥수수", "참외"],
"7": ["수박", "옥수수"],
"8": ["참외", "고구마"],
"9": ["무", "배추"],
"10": ["양배추"],
"11": ["버섯", "양송이버섯"],
"12": ["귤", "감"]
},
"세종": {
"1": ["케일", "근대"],
"2": ["브로콜리", "토마토"],
"3": ["오이", "당근"],
"4": ["상추", "딸기"],
"5": ["고추", "가지"],
"6": ["옥수수", "참외"],
"7": ["수박", "참외"],
"8": ["참외", "고구마"],
"9": ["무", "배추"],
"10": ["양배추"],
"11": ["버섯", "양송이버섯"],
"12": ["귤", "감"]
},
"강원": {
"1": ["상추", "콜라비"],
"2": ["비트", "당근"],
"3": ["호박", "파"],
"4": ["상추", "배추"],
"5": ["고추", "가지"],
"6": ["옥수수", "참외"],
"7": ["수박", "옥수수"],
"8": ["참외", "고구마"],
"9": ["무", "배추"],
"10": ["양배추"],
"11": ["버섯", "양송이버섯"],
"12": ["귤", "감"]
},
"충북": {
"1": ["치커리", "아스파라거스"],
"2": ["콜라드", "배추"],
"3": ["쑥갓", "토마토"],
"4": ["상추", "딸기"],
"5": ["고추", "가지"],
"6": ["옥수수", "참외"],
"7": ["수박", "옥수수"],
"8": ["참외", "고구마"],
"9": ["무", "배추"],
"10": ["양배추"],
"11": ["버섯", "양송이버섯"],
"12": ["귤", "감"]
},
"충남": {
"1": ["호두", "팥"],
"2": ["거봉포도", "표고버섯"],
"3": ["호두", "팥"],
"4": ["멜론", "배추"],
"5": ["고추", "가지"],
"6": ["옥수수", "참외"],
"7": ["수박", "옥수수"],
"8": ["참외", "고구마"],
"9": ["무", "배추"],
"10": ["양배추"],
"11": ["버섯", "양송이버섯"],
"12": ["귤", "감"]
},
"전북": {
"1": ["상추", "근대"],
"2": ["브로콜리", "양배추"],
"3": ["청경채", "당근"],
"4": ["상추", "딸기"],
"5": ["고추", "가지"],
"6": ["옥수수", "참외"],
"7": ["수박", "옥수수"],
"8": ["참외", "고구마"],
"9": ["무", "배추"],
"10": ["양배추"],
"11": ["버섯", "양송이버섯"],
"12": ["귤", "감"]
},
"전남": {
"1": ["케일", "콜라비"],
"2": ["아스파라거스", "셀러리"],
"3": ["방울토마토", "당근"],
"4": ["상추", "딸기"],
"5": ["피망", "고추"],
"6": ["옥수수", "참외"],
"7": ["수박", "옥수수"],
"8": ["참외", "고구마"],
"9": ["무", "배추"],
"10": ["양배추"],
"11": ["버섯", "양송이버섯"],
"12": ["귤", "감"]
},
"경북": {
"1": ["치커리", "비트"],
"2": ["대파", "오이"],
"3": ["호박", "파프리카"],
"4": ["상추", "딸기"],
"5": ["고추", "가지"],
"6": ["옥수수", "참외"],
"7": ["수박", "옥수수"],
"8": ["참외", "고구마"],
"9": ["무", "배추"],
"10": ["양배추"],
"11": ["버섯", "양송이버섯"],
"12": ["귤", "감"]
},
"경남": {
"1": ["콜라드", "상추"],
"2": ["브로콜리", "가지"],
"3": ["쑥갓", "양배추"],
"4": ["상추", "딸기"],
"5": ["토란", "참외"],
"6": ["옥수수", "고구마"],
"7": ["수박", "옥수수"],
"8": ["참외", "고구마"],
"9": ["무", "배추"],
"10": ["양배추"],
"11": ["버섯", "양송이버섯"],
"12": ["귤", "감"]
}}};

// 드롭다운에 지역 추가
const locationSelect = document.getElementById('location');
produceData.locations.forEach(location => {
    const option = document.createElement('option');
    option.value = location;
    option.textContent = location;
    locationSelect.appendChild(option);
});

const produceDetails = {
    "무": {
        name: "무", 
        scientificName: "Raphanus sativus", 
        image: "무.jpeg",
        sowingTime: "3월 - 4월", 
        harvestTime: "6월 - 7월", 
        temperature: "15-20", 
        features: "아삭하고 시원한 맛이 특징입니다."
    },
    "현미": {
        name: "현미", 
        scientificName: "Oryza sativa", 
        image: "현미.jpeg",
        sowingTime: "5월", 
        harvestTime: "10월", 
        temperature: "20-30", 
        features: "영양가가 높은 곡물입니다."
    },
    "도라지": {
        name: "도라지", 
        scientificName: "Platycodon grandiflorus", 
        image: "도라지.jpeg",
        sowingTime: "4월 - 5월", 
        harvestTime: "9월", 
        temperature: "10-25", 
        features: "영양가가 풍부하고 약용 효과가 있습니다."
    },
    "돼지감자": {
        name: "돼지감자", 
        scientificName: "Helianthus tuberosus", 
        image: "돼지감자.jpeg",
        sowingTime: "4월", 
        harvestTime: "10월", 
        temperature: "15-25", 
        features: "맛이 좋고 소화에 도움을 줍니다."
    },
    "고구마": {
        name: "고구마", 
        scientificName: "Ipomoea batatas", 
        image: "고구마.jpeg",
        sowingTime: "5월", 
        harvestTime: "10월", 
        temperature: "20-30", 
        features: "달콤하고 영양가가 높습니다."
    },
    "양배추": {
        name: "양배추", 
        scientificName: "Brassica oleracea var. capitata", 
        image: "양배추.jpeg",
        sowingTime: "3월 - 4월", 
        harvestTime: "6월 - 7월", 
        temperature: "15-20", 
        features: "비타민 C가 풍부합니다."
    },
    "상추": {
        name: "상추", 
        scientificName: "Lactuca sativa", 
        image: "상추.jpeg",
        sowingTime: "3월 - 5월", 
        harvestTime: "5월 - 6월", 
        temperature: "10-20", 
        features: "신선한 맛과 아삭한 식감이 특징입니다."
    },
    "방울토마토": {
        name: "방울토마토", 
        scientificName: "Solanum lycopersicum var. cerasiforme", 
        image: "방울토마토.jpeg",
        sowingTime: "4월", 
        harvestTime: "7월 - 9월", 
        temperature: "20-30", 
        features: "달콤하고 즙이 많습니다."
    },
    "토마토": {
        name: "토마토", 
        scientificName: "Solanum lycopersicum", 
        image: "토마토.jpeg",
        sowingTime: "4월", 
        harvestTime: "7월 - 9월", 
        temperature: "20-30", 
        features: "다양한 요리에 사용됩니다."
    },
    "당근": {
        name: "당근", 
        scientificName: "Daucus carota", 
        image: "당근.jpeg",
        sowingTime: "3월 - 4월", 
        harvestTime: "6월 - 10월", 
        temperature: "15-20", 
        features: "비타민 A가 풍부하고 아삭한 식감입니다."
    },
    "배추": {
        name: "배추", 
        scientificName: "Brassica rapa subsp. pekinensis", 
        image: "배추.jpeg",
        sowingTime: "4월 - 5월", 
        harvestTime: "10월 - 11월", 
        temperature: "15-20", 
        features: "김치의 주재료로 사용됩니다."
    },
    "양송이버섯": {
        name: "양송이버섯", 
        scientificName: "Agaricus bisporus", 
        image: "양송이버섯.jpeg",
        sowingTime: "상시", 
        harvestTime: "상시", 
        temperature: "15-20", 
        features: "다양한 요리에 활용됩니다."
    },
    "딸기": {
        name: "딸기", 
        scientificName: "Fragaria × ananassa", 
        image: "딸기.jpeg",
        sowingTime: "3월 - 4월", 
        harvestTime: "5월 - 6월", 
        temperature: "15-25", 
        features: "달콤하고 상큼한 과일입니다."
    },
    "단감": {
        name: "단감", 
        scientificName: "Danjong persimmon", 
        image: "단감.jpeg",
        sowingTime: "4월", 
        harvestTime: "10월", 
        temperature: "15-25", 
        features: "달콤하고 부드러운 과일입니다."
    },
    "부추": {
        name: "부추", 
        scientificName: "Allium tuberosum", 
        image: "부추.jpeg",
        sowingTime: "3월 - 5월", 
        harvestTime: "상시", 
        temperature: "10-20", 
        features: "향이 강하고 다양한 요리에 사용됩니다."
    },
    "양송이": {
        name: "양송이", 
        scientificName: "Agaricus bisporus", 
        image: "양송이.jpeg",
        sowingTime: "상시", 
        harvestTime: "상시", 
        temperature: "15-20", 
        features: "부드러운 식감과 고소한 맛이 특징입니다."
    },
    "배도라지": {
        name: "배도라지", 
        scientificName: "Raphanus sativus var. longipinnatus", 
        image: "도라지.jpeg",
        sowingTime: "4월", 
        harvestTime: "9월", 
        temperature: "15-25", 
        features: "아삭한 식감과 독특한 맛이 특징입니다."
    },
    "고추": {
        name: "고추", 
        scientificName: "Capsicum frutescens", 
        image: "고추.jpeg",
        sowingTime: "4월", 
        harvestTime: "8월 - 10월", 
        temperature: "20-30", 
        features: "매운 맛으로 다양한 요리에 사용됩니다."
    },
    "수박": {
        name: "수박", 
        scientificName: "Citrullus lanatus", 
        image: "path/to/watermelon.jpg",
        sowingTime: "5월", 
        harvestTime: "7월 - 8월", 
        temperature: "25-30", 
        features: "시원하고 달콤한 여름 과일입니다."
    },
    "옥수수": {
        name: "옥수수", 
        scientificName: "Zea mays", 
        image: "path/to/corn.jpg",
        sowingTime: "4월", 
        harvestTime: "8월", 
        temperature: "20-30", 
        features: "단맛이 강한 여름 작물입니다."
    },
    "귤": {
        name: "귤", 
        scientificName: "Citrus reticulata", 
        image: "path/to/tangerine.jpg",
        sowingTime: "봄", 
        harvestTime: "11월 - 12월", 
        temperature: "15-25", 
        features: "상큼한 맛이 특징인 과일입니다."
    },
    "감": {
        name: "감", 
        scientificName: "Danjong persimmon", 
        image: "path/to/persimmon.jpg",
        sowingTime: "4월", 
        harvestTime: "10월", 
        temperature: "15-25", 
        features: "달콤하고 부드러운 과일입니다."
    },
    "케일": {
        name: "케일", 
        scientificName: "Brassica oleracea var. sabellica", 
        image: "path/to/kale.jpg",
        sowingTime: "3월 - 5월", 
        harvestTime: "6월 - 11월", 
        temperature: "15-25", 
        features: "영양가가 높고 건강식으로 인기가 많습니다."
    },
    "콜라비": {
        name: "콜라비", 
        scientificName: "Brassica oleracea var. gongylodes", 
        image: "path/to/kohlrabi.jpg",
        sowingTime: "3월 - 4월", 
        harvestTime: "6월 - 9월", 
        temperature: "15-20", 
        features: "아삭한 식감과 단맛이 특징입니다."
    },
    "아스파라거스": {
        name: "아스파라거스", 
        scientificName: "Asparagus officinalis", 
        image: "path/to/asparagus.jpg",
        sowingTime: "3월", 
        harvestTime: "5월 - 6월", 
        temperature: "15-25", 
        features: "영양가가 높고 다양한 요리에 활용됩니다."
    },
    "셀러리": {
        name: "셀러리", 
        scientificName: "Apium graveolens", 
        image: "path/to/celery.jpg",
        sowingTime: "3월 - 4월", 
        harvestTime: "6월 - 9월", 
        temperature: "10-20", 
        features: "아삭한 식감과 건강에 좋은 성분이 많습니다."
    },
    "비트": {
        name: "비트", 
        scientificName: "Beta vulgaris", 
        image: "path/to/beet.jpg",
        sowingTime: "4월", 
        harvestTime: "8월 - 10월", 
        temperature: "15-25", 
        features: "달콤하고 색이 선명한 뿌리채소입니다."
    },
    "대파": {
        name: "대파", 
        scientificName: "Allium fistulosum", 
        image: "path/to/green_onion.jpg",
        sowingTime: "3월 - 4월", 
        harvestTime: "6월 - 10월", 
        temperature: "10-20", 
        features: "향이 강하고 다양한 요리에 사용됩니다."
    },
    "오이": {
        name: "오이", 
        scientificName: "Cucumis sativus", 
        image: "path/to/cucumber.jpg",
        sowingTime: "5월", 
        harvestTime: "7월 - 9월", 
        temperature: "20-30", 
        features: "아삭하고 시원한 여름 채소입니다."
    },
    "호박": {
        name: "호박", 
        scientificName: "Cucurbita pepo", 
        image: "path/to/pumpkin.jpg",
        sowingTime: "5월", 
        harvestTime: "9월 - 10월", 
        temperature: "20-30", 
        features: "달콤한 맛과 다양한 요리에 사용됩니다."
    },
    "파프리카": {
        name: "파프리카", 
        scientificName: "Capsicum annuum", 
        image: "path/to/paprika.jpg",
        sowingTime: "4월", 
        harvestTime: "7월 - 9월", 
        temperature: "20-30", 
        features: "비타민 C가 풍부하고 색상이 다양합니다."
    },
    "토란": {
        name: "토란", 
        scientificName: "Colocasia esculenta", 
        image: "path/to/taro.jpg",
        sowingTime: "4월", 
        harvestTime: "9월 - 10월", 
        temperature: "20-30", 
        features: "부드러운 식감과 독특한 맛이 특징입니다."
    },
    "참외": {
        name: "참외", 
        scientificName: "Cucumis melo", 
        image: "path/to/chamoe.jpg",
        sowingTime: "5월", 
        harvestTime: "7월 - 8월", 
        temperature: "20-30", 
        features: "달콤하고 시원한 여름 과일입니다."
    },
    "미나리": {
        name: "미나리", 
        scientificName: "Oenanthe javanica", 
        image: "path/to/minari.jpg",
        sowingTime: "봄", 
        harvestTime: "여름", 
        temperature: "15-25", 
        features: "향이 좋고 다양한 요리에 활용됩니다."
    },
    "콜라드": {
        name: "콜라드", 
        scientificName: "Brassica oleracea L.", 
        image: "path/to/cola_de.jpg",
        sowingTime: "3월 - 5월", 
        harvestTime: "6월 - 11월", 
        temperature: "15-25", 
        features: "영양가가 높고 다양한 요리에 사용됩니다."
    }
};

       


// DOM 요소 정의
const form = document.getElementById('form');
const resultDiv = document.getElementById('result');
const detailDiv = document.getElementById('detail');

// 추천 버튼 클릭 시 농산물 추천
form.addEventListener('submit', function(event) {
    event.preventDefault(); // 기본 폼 제출 방지

    const location = document.getElementById('location').value;
    const month = document.getElementById('month').value; // 월 선택

    if (location && month) {
        const recommendations = produceData.recommendations[location][month];

        if (recommendations) {
            resultDiv.innerHTML = `<h3>${location}에서 추천하는 농산물</h3><ul>${
                recommendations.map(prod => `<li class="produce-item" style="cursor: pointer;">${prod}</li>`).join('')
            }</ul>`;

            // 세부정보 초기화
            detailDiv.style.display = 'none';
            detailDiv.innerHTML = ''; // 세부정보 초기화
        } else {
            resultDiv.innerHTML = `<h3>${location}에서 추천할 농산물이 없습니다.</h3>`;
        }
    } else {
        resultDiv.innerHTML = `<h3>모든 필드를 입력해 주세요.</h3>`;
    }
});

resultDiv.addEventListener('click', function(event) {
    if (event.target.classList.contains('produce-item')) {
        const produceName = event.target.textContent;
        const detail = produceDetails[produceName];

        if (detail) {
            detailDiv.innerHTML = `
                <img src="${detail.image}" alt="${detail.name}" style="width: 100%; height: auto;">
                <h4>${detail.name} (${detail.scientificName})</h4>
                <p><strong>파종 시기:</strong> ${detail.sowingTime}</p>
                <p><strong>수확 시기:</strong> ${detail.harvestTime}</p>
                <p><strong>온도:</strong> ${detail.temperature}°C</p>
                <p><strong>세부 특징:</strong> ${detail.features}</p>
            `;
            detailDiv.style.display = 'block'; // 세부정보 표시
        }
    }
});
