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
        features: "아삭하고 시원한 맛이 특징입니다.",
        classification: {
            kingdom: "식물계",
            phylum: "속씨식물문",
            class: "쌍떡잎식물강",
            order: "십자화목",
            family: "십자화과",
            genus: "무속"
        }
    },
    "현미": {
        name: "현미", 
        scientificName: "Oryza sativa", 
        image: "현미.jpeg",
        sowingTime: "5월", 
        harvestTime: "10월", 
        temperature: "20-30", 
        features: "영양가가 높은 곡물입니다.",
        classification: {
            kingdom: "식물계",
            phylum: "속씨식물문",
            class: "단자엽식물강",
            order: "벼목",
            family: "벼과",
            genus: "벼속"
        }
    },
    "도라지": {
        name: "도라지", 
        scientificName: "Platycodon grandiflorus", 
        image: "도라지.jpeg",
        sowingTime: "4월 - 5월", 
        harvestTime: "9월", 
        temperature: "10-25", 
        features: "영양가가 풍부하고 약용 효과가 있습니다.",
        classification: {
            kingdom: "식물계",
            phylum: "속씨식물문",
            class: "쌍떡잎식물강",
            order: "초롱꽃목",
            family: "초롱꽃과",
            genus: "도라지속"
        }
    },
    "돼지감자": {
        name: "돼지감자", 
        scientificName: "Helianthus tuberosus", 
        image: "돼지감자.jpeg",
        sowingTime: "4월", 
        harvestTime: "10월", 
        temperature: "15-25", 
        features: "맛이 좋고 소화에 도움을 줍니다.",
        classification: {
            kingdom: "식물계",
            phylum: "속씨식물문",
            class: "쌍떡잎식물강",
            order: "국화목",
            family: "국화과",
            genus: "해바라기속"
        }
    },
    "고구마": {
        name: "고구마", 
        scientificName: "Ipomoea batatas", 
        image: "고구마.jpeg",
        sowingTime: "5월", 
        harvestTime: "10월", 
        temperature: "20-30", 
        features: "달콤하고 영양가가 높습니다.",
        classification: {
            kingdom: "식물계",
            phylum: "속씨식물문",
            class: "쌍떡잎식물강",
            order: "메꽃목",
            family: "메꽃과",
            genus: "메꽃속"
        }
    },
    "양배추": {
        name: "양배추", 
        scientificName: "Brassica oleracea var. capitata", 
        image: "양배추.jpeg",
        sowingTime: "3월 - 4월", 
        harvestTime: "6월 - 7월", 
        temperature: "15-20", 
        features: "비타민 C가 풍부합니다.",
        classification: {
            kingdom: "식물계",
            phylum: "속씨식물문",
            class: "쌍떡잎식물강",
            order: "십자화목",
            family: "십자화과",
            genus: "브라시카속"
        }
    },
    "상추": {
        name: "상추", 
        scientificName: "Lactuca sativa", 
        image: "상추.jpeg",
        sowingTime: "3월 - 5월", 
        harvestTime: "5월 - 6월", 
        temperature: "10-20", 
        features: "신선한 맛과 아삭한 식감이 특징입니다.",
        classification: {
            kingdom: "식물계",
            phylum: "속씨식물문",
            class: "쌍떡잎식물강",
            order: "국화목",
            family: "국화과",
            genus: "상추속"
        }
    },
    "방울토마토": {
        name: "방울토마토", 
        scientificName: "Solanum lycopersicum var. cerasiforme", 
        image: "방울토마토.jpeg",
        sowingTime: "4월", 
        harvestTime: "7월 - 9월", 
        temperature: "20-30", 
        features: "달콤하고 즙이 많습니다.",
        classification: {
            kingdom: "식물계",
            phylum: "속씨식물문",
            class: "쌍떡잎식물강",
            order: "가지목",
            family: "가지과",
            genus: "토마토속"
        }
    },
    "토마토": {
        name: "토마토", 
        scientificName: "Solanum lycopersicum", 
        image: "토마토.jpeg",
        sowingTime: "4월", 
        harvestTime: "7월 - 9월", 
        temperature: "20-30", 
        features: "다양한 요리에 사용됩니다.",
        classification: {
            kingdom: "식물계",
            phylum: "속씨식물문",
            class: "쌍떡잎식물강",
            order: "가지목",
            family: "가지과",
            genus: "토마토속"
        }
    },
    "당근": {
        name: "당근", 
        scientificName: "Daucus carota", 
        image: "당근.jpeg",
        sowingTime: "3월 - 4월", 
        harvestTime: "6월 - 10월", 
        temperature: "15-20", 
        features: "비타민 A가 풍부하고 아삭한 식감입니다.",
        classification: {
            kingdom: "식물계",
            phylum: "속씨식물문",
            class: "쌍떡잎식물강",
            order: "미나리목",
            family: "미나리과",
            genus: "당근속"
        }
    },
    "배추": {
        name: "배추", 
        scientificName: "Brassica rapa subsp. pekinensis", 
        image: "배추.jpeg",
        sowingTime: "4월 - 5월", 
        harvestTime: "10월 - 11월", 
        temperature: "15-20", 
        features: "김치의 주재료로 사용됩니다.",
        classification: {
            kingdom: "식물계",
            phylum: "속씨식물문",
            class: "쌍떡잎식물강",
            order: "십자화목",
            family: "십자화과",
            genus: "브라시카속"
        }
    },
    "양송이버섯": {
        name: "양송이버섯", 
        scientificName: "Agaricus bisporus", 
        image: "양송이버섯.jpeg",
        sowingTime: "상시", 
        harvestTime: "상시", 
        temperature: "15-20", 
        features: "다양한 요리에 활용됩니다.",
        classification: {
            kingdom: "균계",
            phylum: "자낭균문",
            class: "자낭균강",
            order: "자낭균목",
            family: "자낭균과",
            genus: "아가리쿠스속"
        }
    },
    "딸기": {
        name: "딸기", 
        scientificName: "Fragaria × ananassa", 
        image: "딸기.jpeg",
        sowingTime: "3월 - 4월", 
        harvestTime: "5월 - 6월", 
        temperature: "15-25", 
        features: "달콤하고 상큼한 과일입니다.",
        classification: {
            kingdom: "식물계",
            phylum: "속씨식물문",
            class: "쌍떡잎식물강",
            order: "장미목",
            family: "장미과",
            genus: "딸기속"
        }
    },
    "단감": {
        name: "단감", 
        scientificName: "Danjong persimmon", 
        image: "단감.jpeg",
        sowingTime: "4월", 
        harvestTime: "10월", 
        temperature: "15-25", 
        features: "달콤하고 부드러운 과일입니다.",
        classification: {
            kingdom: "식물계",
            phylum: "속씨식물문",
            class: "쌍떡잎식물강",
            order: "감목",
            family: "감과",
            genus: "감속"
        }
    },
    "부추": {
        name: "부추", 
        scientificName: "Allium tuberosum", 
        image: "부추.jpeg",
        sowingTime: "3월 - 5월", 
        harvestTime: "상시", 
        temperature: "10-20", 
        features: "향이 강하고 다양한 요리에 사용됩니다.",
        classification: {
            kingdom: "식물계",
            phylum: "피자식물문",
            class: "외떡잎식물강",
            order: "백합목",
            family: "붓꽃과",
            genus: "양파속"
        }
    },
    "양송이": {
        name: "양송이", 
        scientificName: "Agaricus bisporus", 
        image: "양송이.jpeg",
        sowingTime: "상시", 
        harvestTime: "상시", 
        temperature: "15-20", 
        features: "부드러운 식감과 고소한 맛이 특징입니다.",
        classification: {
            kingdom: "균계",
            phylum: "자낭균문",
            class: "자낭균강",
            order: "자낭균목",
            family: "자낭균과",
            genus: "아가리쿠스속"
        }
    },
    "배도라지": {
        name: "배도라지", 
        scientificName: "Raphanus sativus var. longipinnatus", 
        image: "도라지.jpeg",
        sowingTime: "4월", 
        harvestTime: "9월", 
        temperature: "15-25", 
        features: "아삭한 식감과 독특한 맛이 특징입니다.",
        classification: {
            kingdom: "식물계",
            phylum: "속씨식물문",
            class: "쌍떡잎식물강",
            order: "십자화목",
            family: "십자화과",
            genus: "무속"
        }
    },
    "고추": {
        name: "고추", 
        scientificName: "Capsicum frutescens", 
        image: "고추.jpeg",
        sowingTime: "4월", 
        harvestTime: "8월 - 10월", 
        temperature: "20-30", 
        features: "매운 맛으로 다양한 요리에 사용됩니다.",
        classification: {
            kingdom: "식물계",
            phylum: "속씨식물문",
            class: "쌍떡잎식물강",
            order: "가지목",
            family: "가지과",
            genus: "고추속"
        }
    },
    "수박": {
        name: "수박", 
        scientificName: "Citrullus lanatus", 
        image: "수박.jpeg",
        sowingTime: "5월", 
        harvestTime: "7월 - 8월", 
        temperature: "25-30", 
        features: "시원하고 달콤한 여름 과일입니다.",
        classification: {
            kingdom: "식물계",
            phylum: "속씨식물문",
            class: "쌍떡잎식물강",
            order: "박과목",
            family: "박과",
            genus: "수박속"
        }
    },
    "옥수수": {
        name: "옥수수", 
        scientificName: "Zea mays", 
        image: "찰옥수수.jpeg",
        sowingTime: "4월", 
        harvestTime: "8월", 
        temperature: "20-30", 
        features: "단맛이 강한 여름 작물입니다.",
        classification: {
            kingdom: "식물계",
            phylum: "속씨식물문",
            class: "단자엽식물강",
            order: "벼목",
            family: "벼과",
            genus: "옥수수속"
        }
    },
    "귤": {
        name: "귤", 
        scientificName: "Citrus reticulata", 
        image: "귤.jpg",
        sowingTime: "봄", 
        harvestTime: "11월 - 12월", 
        temperature: "15-25", 
        features: "상큼한 맛이 특징인 과일입니다.",
        classification: {
            kingdom: "식물계",
            phylum: "속씨식물문",
            class: "쌍떡잎식물강",
            order: "무환자목",
            family: "운향과",
            genus: "귤속"
        }
    },
    "감": {
        name: "감", 
        scientificName: "Danjong persimmon", 
        image: "단감.jpg",
        sowingTime: "4월", 
        harvestTime: "10월", 
        temperature: "15-25", 
        features: "달콤하고 부드러운 과일입니다.",
        classification: {
            kingdom: "식물계",
            phylum: "속씨식물문",
            class: "쌍떡잎식물강",
            order: "감목",
            family: "감과",
            genus: "감속"
        }
    },
    "케일": {
        name: "케일", 
        scientificName: "Brassica oleracea var. sabellica", 
        image: "케일.jpeg",
        sowingTime: "3월 - 5월", 
        harvestTime: "6월 - 11월", 
        temperature: "15-25", 
        features: "영양가가 높고 건강식으로 인기가 많습니다.",
        classification: {
            kingdom: "식물계",
            phylum: "속씨식물문",
            class: "쌍떡잎식물강",
            order: "십자화목",
            family: "십자화과",
            genus: "브라시카속"
        }
    },
    "콜라비": {
        name: "콜라비", 
        scientificName: "Brassica oleracea var. gongylodes", 
        image: "콜라비.jpg",
        sowingTime: "3월 - 4월", 
        harvestTime: "6월 - 9월", 
        temperature: "15-20", 
        features: "아삭한 식감과 단맛이 특징입니다.",
        classification: {
            kingdom: "식물계",
            phylum: "속씨식물문",
            class: "쌍떡잎식물강",
            order: "십자화목",
            family: "십자화과",
            genus: "브라시카속"
        }
    },
    "아스파라거스": {
        name: "아스파라거스", 
        scientificName: "Asparagus officinalis", 
        image: "아스파라거스.jpeg",
        sowingTime: "3월", 
        harvestTime: "5월 - 6월", 
        temperature: "15-25", 
        features: "영양가가 높고 다양한 요리에 활용됩니다.",
        classification: {
            kingdom: "식물계",
            phylum: "속씨식물문",
            class: "외떡잎식물강",
            order: "아스파라거스목",
            family: "아스파라거스과",
            genus: "아스파라거스속"
        }
    },
    "샐러리": {
        name: "샐러리", 
        scientificName: "Apium graveolens", 
        image: "샐러리.jpeg",
        sowingTime: "3월 - 4월", 
        harvestTime: "6월 - 9월", 
        temperature: "10-20", 
        features: "아삭한 식감과 건강에 좋은 성분이 많습니다.",
        classification: {
            kingdom: "식물계",
            phylum: "속씨식물문",
            class: "쌍떡잎식물강",
            order: "미나리목",
            family: "미나리과",
            genus: "미나리속"
        }
    },
    "비트": {
        name: "비트", 
        scientificName: "Beta vulgaris", 
        image: "비트.jpeg",
        sowingTime: "4월", 
        harvestTime: "8월 - 10월", 
        temperature: "15-25", 
        features: "달콤하고 색이 선명한 뿌리채소입니다.",
        classification: {
            kingdom: "식물계",
            phylum: "속씨식물문",
            class: "쌍떡잎식물강",
            order: "자근목",
            family: "자근과",
            genus: "비트속"
        }
    },
    "대파": {
        name: "대파", 
        scientificName: "Allium fistulosum", 
        image: "대파.jpeg",
        sowingTime: "3월 - 4월", 
        harvestTime: "6월 - 10월", 
        temperature: "10-20", 
        features: "향이 강하고 다양한 요리에 사용됩니다.",
        classification: {
            kingdom: "식물계",
            phylum: "피자식물문",
            class: "외떡잎식물강",
            order: "백합목",
            family: "백합과",
            genus: "양파속"
        }
    },
    "오이": {
        name: "오이", 
        scientificName: "Cucumis sativus", 
        image: "오이.jpeg",
        sowingTime: "5월", 
        harvestTime: "7월 - 9월", 
        temperature: "20-30", 
        features: "아삭하고 시원한 여름 채소입니다.",
        classification: {
            kingdom: "식물계",
            phylum: "속씨식물문",
            class: "쌍떡잎식물강",
            order: "박과목",
            family: "박과",
            genus: "오이속"
        }
    },
    "호박": {
        name: "호박", 
        scientificName: "Cucurbita pepo", 
        image: "호박.jpeg",
        sowingTime: "5월", 
        harvestTime: "9월 - 10월", 
        temperature: "20-30", 
        features: "달콤한 맛과 다양한 요리에 사용됩니다.",
        classification: {
            kingdom: "식물계",
            phylum: "속씨식물문",
            class: "쌍떡잎식물강",
            order: "박과목",
            family: "박과",
            genus: "호박속"
        }
    },
    "파프리카": {
        name: "파프리카", 
        scientificName: "Capsicum annuum", 
        image: "파프리카.jpeg",
        sowingTime: "4월", 
        harvestTime: "7월 - 9월", 
        temperature: "20-30", 
        features: "비타민 C가 풍부하고 색상이 다양합니다.",
        classification: {
            kingdom: "식물계",
            phylum: "속씨식물문",
            class: "쌍떡잎식물강",
            order: "가지목",
            family: "가지과",
            genus: "고추속"
        }
    },
    "토란": {
        name: "토란", 
        scientificName: "Colocasia esculenta", 
        image: "토란.jpg",
        sowingTime: "4월", 
        harvestTime: "9월 - 10월", 
        temperature: "20-30", 
        features: "부드러운 식감과 독특한 맛이 특징입니다.",
        classification: {
            kingdom: "식물계",
            phylum: "속씨식물문",
            class: "외떡잎식물강",
            order: "천남성과",
            family: "천남성과",
            genus: "토란속"
        }
    },
    "참외": {
        name: "참외", 
        scientificName: "Cucumis melo", 
        image: "참외.jpeg",
        sowingTime: "5월", 
        harvestTime: "7월 - 8월", 
        temperature: "20-30", 
        features: "달콤하고 시원한 여름 과일입니다.",
        classification: {
            kingdom: "식물계",
            phylum: "속씨식물문",
            class: "쌍떡잎식물강",
            order: "박과목",
            family: "박과",
            genus: "오이속"
        }
    },
    "미나리": {
        name: "미나리", 
        scientificName: "Oenanthe javanica", 
        image: "미나리.jpeg",
        sowingTime: "봄", 
        harvestTime: "여름", 
        temperature: "15-25", 
        features: "향이 좋고 다양한 요리에 활용됩니다.",
        classification: {
            kingdom: "식물계",
            phylum: "속씨식물문",
            class: "쌍떡잎식물강",
            order: "미나리목",
            family: "미나리과",
            genus: "미나리속"
        }
    },
    "콜라드": {
        name: "콜라드", 
        scientificName: "Brassica oleracea L.", 
        image: "콜라드.jpeg",
        sowingTime: "3월 - 5월", 
        harvestTime: "6월 - 11월", 
        temperature: "15-25", 
        features: "영양가가 높고 다양한 요리에 사용됩니다.",
        classification: {
            kingdom: "식물계",
            phylum: "속씨식물문",
            class: "쌍떡잎식물강",
            order: "십자화목",
            family: "십자화과",
            genus: "브라시카속"
        }
    }
};

// DOM 요소 정의
const form = document.getElementById('form');
const resultDiv = document.getElementById('result');
const detailDiv = document.getElementById('detail');
const xboxx = document.getElementById('boxx')

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
                <img src="${detail.image}" alt="${detail.name}" style="width: 100%; height: auto; border: 2px solid #ccc; border-radius: 5px;">
                <h4 style="text-align:">${detail.name} (${detail.scientificName})</h4>
                <p style="text-align: left;"><strong>파종 시기:</strong> ${detail.sowingTime}</p>
                <p style="text-align: left;"><strong>수확 시기:</strong> ${detail.harvestTime}</p>
                <p style="text-align: left;"><strong>온도:</strong> ${detail.temperature}°C</p>
                <p style="text-align: left;"><strong>특징:</strong> ${detail.features}</p>
                <p style="text-align: left;"><strong>계:</strong> ${detail.classification.kingdom}</p>
                <p style="text-align: left;"><strong>목:</strong> ${detail.classification.order}</p>
                <p style="text-align: left;"><strong>과:</strong> ${detail.classification.family}</p>
                <p style="text-align: left;"><strong>속:</strong> ${detail.classification.genus}</p>
            `;
            detailDiv.style.display = 'block'; // 세부정보 표시
            xboxx.style.display = 'block'
        }
    }
});

window.onload = function () {
    var el = document.getElementById("boxx");
    el.onclick = xbox;
}

function xbox() {
    document.getElementById("boxx").style.display="none";
    document.getElementById("detail").style.display="none";
}
