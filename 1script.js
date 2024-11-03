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
"11": ["배추"],
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
"11": ["양송이버섯"],
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
"11": ["양송이버섯"],
"12": ["귤", "감"]
},
"세종": {
"1": ["케일", ""],
"2": ["브로콜리", "토마토"],
"3": ["오이", "당근"],
"4": ["상추", "딸기"],
"5": ["고추", "가지"],
"6": ["옥수수", "참외"],
"7": ["수박", "참외"],
"8": ["참외", "고구마"],
"9": ["무", "배추"],
"10": ["양배추"],
"11": ["양송이버섯"],
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
"11": ["양송이버섯"],
"12": ["귤", "감"]
},
"충북": {
"1": ["아스파라거스"],
"2": ["콜라드", "배추"],
"3": ["토마토"],
"4": ["상추", "딸기"],
"5": ["고추", "가지"],
"6": ["옥수수", "참외"],
"7": ["수박", "옥수수"],
"8": ["참외", "고구마"],
"9": ["무", "배추"],
"10": ["양배추"],
"11": ["양송이버섯"],
"12": ["귤", "감"]
},
"충남": {
"1": ["호두", "팥"],
"2": ["거봉"],
"3": ["호두", "팥"],
"4": ["멜론", "배추"],
"5": ["고추", "가지"],
"6": ["옥수수", "참외"],
"7": ["수박", "옥수수"],
"8": ["참외", "고구마"],
"9": ["무", "배추"],
"10": ["양배추"],
"11": ["양송이버섯"],
"12": ["귤", "감"]
},
"전북": {
"1": ["상추", ""],
"2": ["브로콜리", "양배추"],
"3": ["청경채", "당근"],
"4": ["상추", "딸기"],
"5": ["고추", "가지"],
"6": ["옥수수", "참외"],
"7": ["수박", "옥수수"],
"8": ["참외", "고구마"],
"9": ["무", "배추"],
"10": ["양배추"],
"11": ["양송이버섯"],
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
"11": ["양송이버섯"],
"12": ["귤", "감"]
},
"경북": {
"1": ["비트"],
"2": ["대파", "오이"],
"3": ["호박", "파프리카"],
"4": ["상추", "딸기"],
"5": ["고추", "가지"],
"6": ["옥수수", "참외"],
"7": ["수박", "옥수수"],
"8": ["참외", "고구마"],
"9": ["무", "배추"],
"10": ["양배추"],
"11": ["양송이버섯"],
"12": ["귤", "감"]
},
"경남": {
"1": ["콜라드", "상추"],
"2": ["브로콜리", "가지"],
"3": ["양배추"],
"4": ["상추", "딸기"],
"5": ["토란", "참외"],
"6": ["옥수수", "고구마"],
"7": ["수박", "옥수수"],
"8": ["참외", "고구마"],
"9": ["무", "배추"],
"10": ["양배추"],
"11": ["양송이버섯"],
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
        features: "아삭아삭한 식감을 가지고 있고 제철무는 이 단맛이 강하여 그냥 먹어도 무방할 정도. 물이 많은 식재료라 익히면 물컹물컹해지며 무 특유의 시원한 맛이 있어 시원하고 맑은 국물을 낼 때 콩나물과 함께 선택되는 식재료이다.",
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
        features: "현미는 백미보다 탄수화물 함량ㆍ칼로리는 낮고 단백질ㆍ지방ㆍ미네랄ㆍ비타민 B 등이 더 많이 든 것이 특징이다. 현미엔 백미보다 칼슘이 5배, 비타민이 5배 더 들어있다. 식물성 지방은 2.5배나 함유돼 있다.",
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
        features: "도라지는 약간 쌉쌀하거나 쓴맛이 특징입니다. 이 같이 쓴맛을 내는 성분은 알칼로이드류와 배당체류로서 이 쓴맛이 사포닌 성분과 함께 기관지 평활근을 활성화시켜서 가래 배출을 돕고 염증을 개선하는데 도움을 줍니다.",
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
        features: "소화가 되지 않는 이눌린이라는 성분이 많아 식이섬유로 작용하여 장 건강에 좋다고 한다. 즙을 내거나 볶아서 말릴 경우 먹으면 하루 종일 뱃속이 꾸륵거리며 변비를 강제로 몰아내는 매우 기분 더럽고 신비한 변비퇴치효과가 있다. 또한 이 성분 및 여러 점액질 성분이 많아 미끌미끌하다.",
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
        features: "고구마는 탄수화물이 많은 식품으로 주식으로도 쓰인다. 그밖에도 지방과 단백질, 비타민C, 비타민E, 칼륨, 티아민, 철분 등이 풍부하게 들어있다. 섬유질이 풍부하여 다이어트에 효과적이며 변비 예방에도 도움을 준다.",
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
        features: " 양배추는 부위별로 영양소 함유량이 다른데, 겉 잎에는 비타민 A와 철분, 칼슘이 풍부하고, 하얀 속잎에는 비타민 B군과 비타민 C 함량이 높다. 또한 위궤양 치료, 위 건강에 효과적인 비타민 U 성분은 양배추 속으로 들어갈수록 높아지는데, 특히 심지 부위에 가장 많다.",
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
        image: "상추.jpg",
        sowingTime: "3월 - 5월", 
        harvestTime: "5월 - 6월", 
        temperature: "10-20", 
        features: "특징 및 의의 상추는 베타카로틴과 루테인이 풍부하여 시력 보호, 섬유질이 풍부하고 락투카리움 성분들이 함유되어 있어 숙면 유도, 철분과 엽산이 풍부하여 빈혈 예방 등에 효과가 있다. 주로 샐러드나 쌈, 겉절이, 비빔밥 등 재료로 활용된다. 전라도 지역에서는 상추튀김을 해 먹기도 한다.",
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
        features: "방울토마토는 쌍떡잎식물 통화식물속 가지과의 한해살이풀인 토마토의 일종으로 일반 토마토보다 크기가 작고 육질이 단단하다. 방울토마토는 보통 5~9월에 생산되는데, 열매의 크기는 지름 2.5~5㎝ 무게 15~50g으로 빛깔은 붉은색, 짙은 붉은색, 노란색 등이다.",
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
        features: "세계 10대 건강식품 중 하나로 선정된 토마토는 햇빛이 강렬한 여름에 감칠맛을 내는 글루탐산과 라이코펜이 풍부해 가장 맛있고 영양가도 높다. 흔히 볼 수 있는 토마토, 익을수록 라이코펜과 비타민 C가 풍부해진다. 비타민 C와 무기질, 베타카로틴이 일반 토마토보다 풍부하다.",
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
        features: "당근은 특유의 향긋한 향과 달콤한 맛, 그리고 주홍빛 색깔이 특징입니다. 당근은 샐러드에 넣어 생으로 먹거나 볶음 요리와 찜 요리로 먹습니다. 여름과 가을에 각각 한 번씩 수확할 수 있는 두해살이풀로 베타카로틴 성분이 풍부해 눈 건강에 좋고 노화 방지 및 암 예방에도 좋습니다.",
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
        features: "배추는 사람에게 이로운 작물입니다. 대표적인 담황색 채소로 다른 채소에 비해 수분이 많고 비타민A와 비타민C, 칼슘이 풍부합니다. 비타민 성분들은 배추의 초록잎 부분에 많은데 배춧잎 하나로 비타민C 1일 필요량을 섭취할 수 있을 정도로 풍부합니다.",
        classification: {
            kingdom: "식물계",
            phylum: "속씨식물문",
            class: "쌍떡잎식물강",
            order: "십자화목",
            family: "십자화과",
            genus: "브라시카속"
        }
    },
    "딸기": {
        name: "딸기", 
        scientificName: "Fragaria × ananassa", 
        image: "딸기.jpeg",
        sowingTime: "3월 - 4월", 
        harvestTime: "5월 - 6월", 
        temperature: "15-25", 
        features: "단맛과 신맛이 잘 조화되고 맛이 산뜻하며 향기가 좋은 장미과 다년초입니다. 비타민C가 과일 중에서는 가장 많으며 딸기의 빨간색은 안토시안으로 잼, 젤리, 제과 원료등으로 가공되기도 합니다.",
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
        features: "조생종인 대안 단감은 과실 크기는 250~300g으로 크다. 형태는 부유처럼 둥글지만 약간 한쪽으로 기운 편이다. 과육은 담황색이며 육질은 연하고 과즙이 많다. 당도는 13% 정도이고 맛은 담백하다.",
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
        features: "땅 속에 짧은 뿌리줄기가 있고 많은 비늘줄기를 만들어서 포기 모양이 된다. 잎은 각 비늘줄기에 여러 장이 붙어 있고 길이 15~20 cm, 폭 3~10 mm이다. 잎은 편평하고 등쪽에 모서리가 있으며 잎끝은 둥글다. 짙은 녹색이고 부드러우며, 특유의 냄새가 난다.",
        classification: {
            kingdom: "식물계",
            phylum: "피자식물문",
            class: "외떡잎식물강",
            order: "백합목",
            family: "붓꽃과",
            genus: "양파속"
        }
    },
    "양송이버섯": {
        name: "양송이버섯", 
        scientificName: "Agaricus bisporus", 
        image: "양송이.jpeg",
        sowingTime: "상시", 
        harvestTime: "상시", 
        temperature: "15-20", 
        features: "양송이 특유의 아삭한 식감과 향이 좋은 점이 특징이다. 여기에다 모양이 균일하고 단단하며, 병해충에 견디는 능력이 높아 고품질 친환경 버섯으로 재배하는데 적합한 품종으로 인정받고 있다. 대의 길이는 평균 50.79∼54.80mm이며 굵기는 27.67∼32.47mm이다.",
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
        features: "도라지는 약간 쌉쌀하거나 쓴맛이 특징입니다. 이 같이 쓴맛을 내는 성분은 알칼로이드류와 배당체류로서 이 쓴맛이 사포닌 성분과 함께 기관지 평활근을 활성화시켜서 가래 배출을 돕고 염증을 개선하는데 도움을 줍니다.",
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
        features: "고추는 매운 신미종과 맵지 않은 감미종으로 구분된다. 건고추의 경우가 풋고추나 피망에 비하여 성분함량이 다소 높은데, 이는 수분이 감소되면서 다른 성분의 함량이 상대적으로 증가한 것이다. 고추에는 특히 비타민 A와 전구물질인 카로틴의 함량이 높고 비타민 C의 함량도 높은 편이다.",
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
        features: "수박은 박과에 속하는 덩굴성 한해살이풀이다. 원줄기가 지상으로 벋으면서 자라는데 전체에 백색 털이 있고 마디에 덩굴손이 있다. 잎은 난형 또는 난상 긴 타원형이며 길이 10∼18㎝로서 불규칙한 톱니가 있다. 과육은 수분이 많고 달며 적색이지만 황색 또는 백색인 것도 있다.",
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
        features: "이름도 중국음의 위수수에서 유래했다. 높이는 1∼3m에 달하며 줄기는 굵고 껍질이 단단하고 속이 차 있다. 잎은 어긋나며 길이가 1m 정도에 달하고 표면에 털이 있다. 옥수수는 산간지방에서는 주식이 되기도 하고, 평지에서는 간식으로 이용된다.",
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
        features: "귤은 감귤나무의 열매로 모양은 둥글납작하고 빛깔은 주황색 혹은 붉은색이다. 수분이 풍부하고 맛이 시큼하면서도 달며 껍질을 벗기기 편리한 것과 같은 여러 장점들을 지니고 있어서 인류에게 오랜 기간 사랑 받고 있다. 사과처럼 겨울 제철 과일이다. 같이 주스로 갈아 먹어도 맛있다.",
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
        features: "감은 당분이 11~14%로 다른 과일에 비해 상당히 높고 주로 6%의 포도당, 2~3%의 과당으로 구성되어 있어 소화 흡수가 잘 된다. 설사가 심할 때 곶감을 먹으면 설사를 멎게 하는데, 이는 감의 떫은맛을 내는 탄닌(tannin) 때문이다.",
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
        features: "케일은 비타민A, C, 칼슘이 풍부해서 서양에서는 채소가 적은 겨울에 즐겨 이용한다. 잎은 불결구이므로 짧은 줄기 끝에 로젯트형의 잎이 착생되고 이 잎을 수확하거나 잎을 한 장씩 절취해서 이용한다. 식용 또는 사료용으로 이용된다.",
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
        features: "콜라비는 양배추와 순무를 교배한 채소로 양배추 특유의 단맛과 순무의 단단한 조직력을 모두 갖고 있다. 우리가 주로 먹는 부분은 줄기로 수분 함량이 90% 이상에 모양은 무와 비슷하지만, 무 특유의 맵고 아린 맛 대신 단맛이 나는 것이 특징이다.",
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
        features: "고급 채소로 통하는 아스파라거스는 숙취에 좋은 아미노산의 일종인 아스파라긴산이 처음 발견된 채소이다. 씁쓰름하면서도 담백한 맛과 아삭한 식감이 특징으로 생으로 먹거나 데치기, 굽기, 튀김 등의 조리법을 통해 샐러드 등 다양한 메뉴에 활용되고 있다.",
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
        features: "초여름부터 가을까지가 맛있고 잎에 광택이 있고 줄기는 두껍고 심줄이 또렷이 박혀 있는 것이 좋다. 특유의 향기와 아삭아삭한 씹는 맛을 살려야 하는 채소로 반드시 심줄이 단단한 부분은 제거하고 요리를 하여야 한다.",
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
        features: "비트는 비교적 재배가 쉽고 식물체 전체를 식용할 수 있어 인기있는 채소입니다. 비트 뿌리에는 당분함량이 많고 비타민 A와 칼륨이 풍부하게 들어 있습니다. 비트를 절단하면 베타시아닌(betacyanin)의 아름다운 홍색 둥근 무늬가 나타나므로 샐러드 등의 장식용으로 쓰인다.",
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
        name: "대대파", 
        scientificName: "Allium fistulosum", 
        image: "대파.jpeg",
        sowingTime: "3월 - 4월", 
        harvestTime: "6월 - 10월", 
        temperature: "10-20", 
        features: "대파는 매운 맛과 쓴 맛이 강하며, 익히면 단 맛이 강해지는 등[2] 다양한 맛과 강한 향을 보유하고 있기에 여러 요리에 널리 쓰인다. 대파는 오래 익히면 맛과 향이 사라지기 때문에 파 자체를 삶아 먹는 것은 적당하지 않지만 국물을 먹는 용도로 우려내는 것으로는 적합하다.",
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
        features: "오이는 조직의 96% 정도가 수분으로 이루어져 있으며, 청량감이 크고 아삭거리는 식감이 특징입니다. 비타민C가 함유되어 있어 피부 미용과 보습효과가 좋으며, 칼륨이 들어 있어 수분과 함께 이뇨 작용을 도와 숙취 해소에 도움이 되고, 나트륨의 배출도 돕는다고 합니다.",
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
        features: "속은 결이 거칠고 끈끈한 섬유질로 이루어져 있으며 열매 가운데에 씨가 들어 있다. 열매의 무게는 대개 7-14kg 정도이지만 90kg이 넘게 나가는 것도 있다. 열매는 대개 오렌지색을 띠며, 노란색·녹색·흰색 등 다른 색깔을 띠는 것도 많다. 익으면 바깥면이 주로 짙은 황갈색을 띤다.",
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
        features: "파프리카(paprik), 혹은 단고추(sweet pepper), 종고추(bell pepper)라고도 불리우는 얼핏 피망과 비슷한 모양의 유럽산 고추로서 피망보다 크기가 크고(180~260g 1개) 과육이 두터우며(6~10mm), 독특하고 싱그러운 향과 단맛(당고7~11)이 특징이다.",
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
        features: "토란은 토양을 가리지 않고 병충해에 강해 어디서나 쉽게 잘 자라고, 모양은 감자와 비슷하지만 쫄깃하고 부드러운 식감을 갖고 있다. 탄수화물과 단백질이 주성분이며 칼륨을 함유하고 있다. 칼륨을 함유하고 있어 체내의 나트륨 배출을 도와준다.",
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
        features: "과실색깔이 짙은 황색을 띄고 골이 깊으며 과형이 짧은 원통형으로 당도가 높고 육질이 아삭아삭한 과실이 참외에서 가장 이상적인 과실이다. 과실의 크기는 400∼500g 정도가 가장 보기가 좋다.",
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
        features: "미나리는 비타민 A, B1, B2, C가 다량으로 함유되어 있는 알칼리성 식품이다. 단백질, 철분, 칼슘, 인 등의 다양한 무기질과 섬유질이 풍부하다. 잎과 줄기에 독특한 향기가 있어 대한민국에서는 찌개에 넣거나, 삶거나 데쳐 나물로 먹는 등 여러 가지 음식 재료로 쓰인다.",
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
        features: "콜라드그린은 케일과 같은 과에 속하면서 케일보다는 부드러운 식감을 지니고 있어 쌈으로 먹기에 좋은 식재료이다. 콜라드 그린에는 다량의 비타민과 무기질, 루테인, 칼륨, 식이섬유 등의 영양성분이 풍부하게 들어 있다.",
        classification: {
            kingdom: "식물계",
            phylum: "속씨식물문",
            class: "쌍떡잎식물강",
            order: "십자화목",
            family: "십자화과",
            genus: "브라시카속"
        }
    },
    "포도": {
        name: "포도", 
            scientificName: "Vitis vinifera", 
            image: "포도.jpeg",
            sowingTime: "4월", 
            harvestTime: "8월 - 10월", 
            temperature: "20-30", 
            features: "이 포도는 4가지 특징을 가지고 있는데, 작은 포도알, 깊은 적갈색, 두꺼운 껍질, 많은씨앗이 그것이다. 씨앗은 타닌 함량을 풍부하게 하고, 두꺼운 껍질은 색깔을 깊이있게 나타낸다. 영 와인 일때는 떫은 맛이 강해서 거칠지만 오크통 숙성을 통해 맛이 부드러워진다.",
            classification: {
                kingdom: "식물계",
                phylum: "속씨식물문",
                class: "쌍떡잎식물강",
                order: "포도목",
                family: "포도과",
                genus: "포도속"
            }
        },
        "사과": {
            name: "사과", 
            scientificName: "Malus domestica", 
            image: "사과.jpeg",
            sowingTime: "봄", 
            harvestTime: "9월 - 11월", 
            temperature: "15-25", 
            features: "과육은 기본적으로 노란색에서 연두색[2]이며, 맛은 품종마다 다르다. 일반적으로 한국에서 말하는 사과 맛은 달콤새콤 + 아삭아삭하게 씹히는 탄력이 있고 단단한 과육의 식감을 말한다. 종마다 다르지만 잘 익은 사과는 껍질이 벗겨지지 않은 상태에서도 청량감이 있는 좋은 냄새가 난다.",
            classification: {
                kingdom: "식물계",
                phylum: "속씨식물문",
                class: "쌍떡잎식물강",
                order: "장미목",
                family: "장미과",
                genus: "사과속"
            }
        },
        "모과": {
            name: "모과", 
            scientificName: "Cydonia oblonga", 
            image: "모과.jpeg",
            sowingTime: "봄", 
            harvestTime: "10월", 
            temperature: "15-25", 
            features: "나무에 달리는 참외 비슷한 열매라 하여 목과(木瓜) 또는 목과(木果)라 쓰기도 한다. 산미가 강하고 단단하며 향기가 강한 열매로, 가을에 노랗게 익는다. 과육을 꿀에 재워서 정과를 만들어 먹기도 하고, 과실주 또는 차로 끓여 먹기도 한다.",
            classification: {
                kingdom: "식물계",
                phylum: "속씨식물문",
                class: "쌍떡잎식물강",
                order: "장미목",
                family: "장미과",
                genus: "모과속"
            }
        },
        "바나나": {
            name: "바나나", 
            scientificName: "Musa acuminata", 
            image: "바나나.jpeg",
            sowingTime: "상시", 
            harvestTime: "상시", 
            temperature: "25-30", 
            features: "바나나는 주로 식용을 목적으로 재배되어, 간식으로 이용되거나 가공 곡식, 과일 칵테일, 샐러드, 케이크, 파이 등에 재료로 쓰인다. 이 과일에는 탄수화물이 풍부하고, 인, 칼륨, 비타민A, 비타민C가 들어 있다. 뿐만 아니라 수용성 식이섬유가 풍부하여 변비 예방 및 개선에 도움을 준다.",
            classification: {
                kingdom: "식물계",
                phylum: "피자식물문",
                class: "외떡잎식물강",
                order: "생강목",
                family: "바나나과",
                genus: "바나나속"
            }
        },
        "배": {
            name: "배", 
            scientificName: "Pyrus pyrifolia", 
            image: "배.jpeg",
            sowingTime: "봄", 
            harvestTime: "9월 - 10월", 
            temperature: "15-25", 
            features: "배는 80~90%가 수분으로 비타민과 섬유소가 풍부하다. 특히 소화에 도움이 되며 변비에도 좋다. 또한 기관지에 도움되는 과일로서 유명한데, 루테올린 성분이 가래를 없애주고 기침을 완화시켜 준다. 천식과 기관지염에 좋으며 감기에도 좋은데 배즙으로 섭취해도 좋다.",
            classification: {
                kingdom: "식물계",
                phylum: "속씨식물문",
                class: "쌍떡잎식물강",
                order: "장미목",
                family: "장미과",
                genus: "배속"
            }
        },
        "귤": {
            name: "귤", 
            scientificName: "Citrus reticulata", 
            image: "귤.jpeg",
            sowingTime: "봄", 
            harvestTime: "11월 - 12월", 
            temperature: "15-25", 
            features: "귤은 감귤나무의 열매로 모양은 둥글납작하고 빛깔은 주황색 혹은 붉은색이다. 수분이 풍부하고 맛이 시큼하면서도 달며 껍질을 벗기기 편리한 것과 같은 여러 장점들을 지니고 있어서 인류에게 오랜 기간 사랑 받고 있다. 사과처럼 겨울 제철 과일이다. 같이 주스로 갈아 먹어도 맛있다.",
            classification: {
                kingdom: "식물계",
                phylum: "속씨식물문",
                class: "쌍떡잎식물강",
                order: "무환자목",
                family: "운향과",
                genus: "귤속"
            }
        },
        "복숭아": {
            name: "복숭아", 
            scientificName: "Prunus persica", 
            image: "복숭아.jpeg",
            sowingTime: "봄", 
            harvestTime: "7월 - 9월", 
            temperature: "15-25", 
            features: "복숭아 나무의 열매인 복숭아는 모양이 둥글고 빛깔이 다양한 식용 과일이다. 과육은 흰색, 불그스름한 색, 노란색 등을 띤다. 우리나라에서 재배되고 있는 복숭아 나무의 품종으로는 백도, 황도, 대구보 등을 들 수 있으며 그 밖에 창방조생, 기도백도, 중진백도 등을 들 수 있다.",
            classification: {
                kingdom: "식물계",
                phylum: "속씨식물문",
                class: "쌍떡잎식물강",
                order: "장미목",
                family: "장미과",
                genus: "복숭아속"
            }
        },
        "체리": {
            name: "체리", 
            scientificName: "Prunus avium", 
            image: "체리.jpeg",
            sowingTime: "봄", 
            harvestTime: "6월 - 7월", 
            temperature: "15-25", 
            features: "체리는 진정한 의미의 계절 과일로서, 짧은 기간 내에만 먹을 수 있지만, 그 맛이 탁월한 계절 과일이다. 미국 북서부 체리 수확기는 6월 중순에서 8월 중하순까지이다. 미국 북서부 체리는 크고, 포동포동하며, 촉촉하고 달콤한 모양과 맛으로 유명하다.",
            classification: {
                kingdom: "식물계",
                phylum: "속씨식물문",
                class: "쌍떡잎식물강",
                order: "장미목",
                family: "장미과",
                genus: "복숭아속"
            }
        },
        "파인애플": {
            name: "파인애플", 
            scientificName: "Ananas comosus", 
            image: "파인애플.jpeg",
            sowingTime: "상시", 
            harvestTime: "상시", 
            temperature: "25-30", 
            features: "파인애플에는 탄수화물과 단백질, 지방을 비롯해 섬유질, 비타민 B, C, 엽산, 칼륨, 마그네슘 등 영양소가 골고루 들어있다. 특히 비타민 C와 망간이 풍부하게 들어있는데, 비타민 C는 면역 건강과 철분 흡수, 성장과 발달을 돕고, 망간은 항산화 효과 및 신진대사를 돕는다.",
            classification: {
                kingdom: "식물계",
                phylum: "피자식물문",
                class: "외떡잎식물강",
                order: "파인애플목",
                family: "파인애플과",
                genus: "파인애플속"
            }
        },
        "감": {
            name: "감", 
            scientificName: "Danjong persimmon", 
            image: "감.jpeg",
            sowingTime: "4월", 
            harvestTime: "10월", 
            temperature: "15-25", 
            features: "감은 당분이 11~14%로 다른 과일에 비해 상당히 높고 주로 6%의 포도당, 2~3%의 과당으로 구성되어 있어 소화 흡수가 잘 된다. 설사가 심할 때 곶감을 먹으면 설사를 멎게 하는데, 이는 감의 떫은맛을 내는 탄닌(tannin) 때문이다.",
            classification: {
                kingdom: "식물계",
                phylum: "속씨식물문",
                class: "쌍떡잎식물강",
                order: "감목",
                family: "감과",
                genus: "감속"
            }
        },
        "망고": {
            name: "망고", 
            scientificName: "Mangifera indica", 
            image: "망고.jpeg",
            sowingTime: "봄", 
            harvestTime: "6월 - 9월", 
            temperature: "25-30", 
            features: "탄수화물, 단백질, 지방은 사과와 비슷한 수준이며 당분이 많기 때문에 단맛이 강합니다. 비타민 A는 사과보다 18배나 많고비타민 C와 엽산도사과보다 8~10배 정도로 많아 비타민의 급원이라고 할 수 있습니다. 망고는 폴리페놀, 플라보노이드, 비타민 C의 항산화 물질이 풍부합니다.",
            classification: {
                kingdom: "식물계",
                phylum: "속씨식물문",
                class: "쌍떡잎식물강",
                order: "탱자목",
                family: "탱자과",
                genus: "망고속"
            }
        },
        "레몬": {
            name: "레몬", 
            scientificName: "Citrus limon", 
            image: "레몬.jpeg",
            sowingTime: "봄", 
            harvestTime: "11월 - 2월", 
            temperature: "15-25", 
            features: "레몬은 신맛, 생생한 노란색, 높은 비타민 C 함량으로 유명한 감귤류의 일종으로 산성 특성과 상쾌한 향으로 인해 요리, 음료 및 청소 용도 등으로 널리 사용됩니다. 레몬 나무는 중소 크기이며 일반적으로 3미터에서 6미터까지 자랍니다.",
            classification: {
                kingdom: "식물계",
                phylum: "속씨식물문",
                class: "쌍떡잎식물강",
                order: "무환자목",
                family: "운향과",
                genus: "레몬속"
            }
        },
        "파프리카": {
            name: "파프리카", 
            scientificName: "Capsicum annuum", 
            image: "파프리카.jpeg",
            sowingTime: "4월", 
            harvestTime: "7월 - 9월", 
            temperature: "20-30", 
            features: "파프리카(paprik), 혹은 단고추(sweet pepper), 종고추(bell pepper)라고도 불리우는 얼핏 피망과 비슷한 모양의 유럽산 고추로서 피망보다 크기가 크고(180~260g 1개) 과육이 두터우며(6~10mm), 독특하고 싱그러운 향과 단맛(당고7~11)이 특징이다.",
            classification: {
                kingdom: "식물계",
                phylum: "속씨식물문",
                class: "쌍떡잎식물강",
                order: "가지목",
                family: "가지과",
                genus: "고추속"
            }
        },
        "아보카도": {
            name: "아보카도", 
            scientificName: "Persea americana", 
            image: "아보카도.jpeg",
            sowingTime: "봄", 
            harvestTime: "가을", 
            temperature: "20-30", 
            features: "아보카도가 '숲에서 나는 고기'라 불리기도 하는 것은 식감이 버터처럼 부드럽고 풍미가 좋은 까닭이다. 과일임에도 불구하고 풍부한 지방과 단백질을 지녔는데, 지방 함량이 20% 가까이 되면서 대부분 불포화지방이라 건강에 유익하다는 것도 아보카도가 지닌 특징 중 하나다.",
            classification: {
                kingdom: "식물계",
                phylum: "속씨식물문",
                class: "쌍떡잎식물강",
                order: "Laurales",
                family: "Lauraceae",
                genus: "Persea"
            }
        },
        "망고스틴": {
            name: "망고스틴", 
            scientificName: "Garcinia mangostana", 
            image: "망고스틴.jpeg",
            sowingTime: "봄", 
            harvestTime: "여름", 
            temperature: "25-30", 
            features: "미얀마에서는 맹구스틴이라고 한다. 날씨에 민감하며 자라는 속도가 매우 더딘 편이다. 키는 9.5 m까지 자라며 한 나무에서 한 계절에 1000개 이상의 열매를 얻는다. 잎은 암녹색으로 두껍고광택이 나며 길이가 15~25 cm이고, 장밋빛의 큰 꽃이 핀다.",
            classification: {
                kingdom: "식물계",
                phylum: "속씨식물문",
                class: "쌍떡잎식물강",
                order: "클라우드목",
                family: "클라우드과",
                genus: "Garcinia"
            }
        },
        "천혜향": {
            name: "천혜향", 
            scientificName: "Citrus unshiu", 
            image: "천혜향.jpeg",
            sowingTime: "봄", 
            harvestTime: "11월 - 12월", 
            temperature: "15-25", 
            features: "껍질이 벗기기 쉽고 양낭막이 얇아 부드럽다. 당도와 산도가 매우 풍부한 고급 감귤류로, 카르티노이드 성분이 함유되어 있어 뛰어난 항산화 효과 있는 것으로 알려졌다. 또한 알칼리 식품으로 신진대사를 원할히 하며, 피부와 점막을 튼튼히 하여 감기예방에도 효과가 있다.",
            classification: {
                kingdom: "식물계",
                phylum: "속씨식물문",
                class: "쌍떡잎식물강",
                order: "무환자목",
                family: "운향과",
                genus: "귤속"
            }
        },
        "파파야": {
            name: "파파야", 
            scientificName: "Carica papaya", 
            image: "파파야.jpeg",
            sowingTime: "봄", 
            harvestTime: "여름", 
            temperature: "25-30", 
            features: "파파야(Carica papaya)는 열대 환경에서 자라는 다년생 식물이다. 줄기는 나무가 되지 않고 넘어지면 곧바로 썩어 나무와 풀의 중간 성질을 지니게 된다. 과일은 녹색에서 노란색으로 익으며 단맛이 강하다. 과육을 얇게 잘라 말려서 먹기도 한다.",
            classification: {
                kingdom: "식물계",
                phylum: "속씨식물문",
                class: "이판식물강",
                order: "카리카목",
                family: "카리카과",
                genus: "Carica"
            }
        },
        "라임": {
            name: "라임", 
            scientificName: "Citrus aurantiifolia", 
            image: "라임.jpeg",
            sowingTime: "봄", 
            harvestTime: "11월 - 2월", 
            temperature: "15-25", 
            features: "대표적인 귤열매로, 과육은 황록색이며, 연하며 즙이 많고 신맛이 나고, 레몬보다 덜 달다. 열매는 피클로 만들고, 즙은 케이크, 음료수·음식 등의 풍미를 내는 재료로 쓰이며, 생선구이 등을 양념할 때도 쓰인다.",
            classification: {
                kingdom: "식물계",
                phylum: "속씨식물문",
                class: "쌍떡잎식물강",
                order: "무환자목",
                family: "운향과",
                genus: "귤속"
            }
        },
        "석류": {
            name: "석류", 
            scientificName: "Punica granatum", 
            image: "석류.jpeg",
            sowingTime: "봄", 
            harvestTime: "9월 - 11월", 
            temperature: "15-25", 
            features: "석류는 9~10월에 노란색 또는 노란빛이 도는 붉은색으로 익는데, 열매는 크기가 오렌지만하고 부드러운 가죽질의 껍질로 덮여 있다. 안쪽은 여러 개의 방이 있고 각 방에는 가늘고 투명한 소낭이 들어 있는데, 소낭은 붉은색을 띠는 즙이 많은 과육으로 이루어졌으며 씨를 둘러싼다.",
            classification: {
                kingdom: "식물계",
                phylum: "속씨식물문",
                class: "쌍떡잎식물강",
                order: "석류목",
                family: "석류과",
                genus: "Punica"
            }
        },
        "자몽": {
            name: "자몽", 
            scientificName: "Citrus × paradisi", 
            image: "자몽.jpeg",
            sowingTime: "봄", 
            harvestTime: "11월 - 3월", 
            temperature: "15-25", 
            features: "신맛, 단맛에 약간의 쓴맛이 특징적인 자몽은 감귤 속에 속하는 열매다. 자몽은 비타민 c, 구연산 등이 풍부해 따뜻한 차나 시원한 주스 재료로 인기가 많다. 자몽 한 개에는 일일 섭취 권장량을 넘는 비타민 c가 가득 담겨 있다.",
            classification: {
                kingdom: "식물계",
                phylum: "속씨식물문",
                class: "쌍떡잎식물강",
                order: "무환자목",
                family: "운향과",
                genus: "귤속"
            }
        },
        "수박": {
            name: "수박", 
            scientificName: "Citrullus lanatus", 
            image: "수박.jpeg",
            sowingTime: "5월", 
            harvestTime: "7월 - 8월", 
            temperature: "25-30", 
            features: "수박은 박과에 속하는 덩굴성 한해살이풀이다. 원줄기가 지상으로 벋으면서 자라는데 전체에 백색 털이 있고 마디에 덩굴손이 있다. 잎은 난형 또는 난상 긴 타원형이며 길이 10∼18㎝로서 불규칙한 톱니가 있다. 과육은 수분이 많고 달며 적색이지만 황색 또는 백색인 것도 있다.",
            classification: {
                kingdom: "식물계",
                phylum: "속씨식물문",
                class: "쌍떡잎식물강",
                order: "박과목",
                family: "박과",
                genus: "수박속"
            }
        },
        "참외": {
            name: "참외", 
            scientificName: "Cucumis melo", 
            image: "참외.jpeg",
            sowingTime: "5월", 
            harvestTime: "7월 - 8월", 
            temperature: "20-30", 
            features: "과실색깔이 짙은 황색을 띄고 골이 깊으며 과형이 짧은 원통형으로 당도가 높고 육질이 아삭아삭한 과실이 참외에서 가장 이상적인 과실이다. 과실의 크기는 400∼500g 정도가 가장 보기가 좋다.",
            classification: {
                kingdom: "식물계",
                phylum: "속씨식물문",
                class: "쌍떡잎식물강",
                order: "박과목",
                family: "박과",
                genus: "오이속"
            }
        },
        "당근": {
            name: "당근", 
            scientificName: "Daucus carota", 
            image: "당근.jpeg",
            sowingTime: "3월 - 4월", 
            harvestTime: "6월 - 10월", 
            temperature: "15-20", 
            features: "당근은 특유의 향긋한 향과 달콤한 맛, 그리고 주홍빛 색깔이 특징입니다. 당근은 샐러드에 넣어 생으로 먹거나 볶음 요리와 찜 요리로 먹습니다. 여름과 가을에 각각 한 번씩 수확할 수 있는 두해살이풀로 베타카로틴 성분이 풍부해 눈 건강에 좋고 노화 방지 및 암 예방에도 좋습니다.",
            classification: {
                kingdom: "식물계",
                phylum: "속씨식물문",
                class: "쌍떡잎식물강",
                order: "미나리목",
                family: "미나리과",
                genus: "당근속"
            }
        },
        "호박": {
            name: "호박", 
            scientificName: "Cucurbita pepo", 
            image: "호박.jpeg",
            sowingTime: "5월", 
            harvestTime: "9월 - 10월", 
            temperature: "20-30", 
            features: "속은 결이 거칠고 끈끈한 섬유질로 이루어져 있으며 열매 가운데에 씨가 들어 있다. 열매의 무게는 대개 7-14kg 정도이지만 90kg이 넘게 나가는 것도 있다. 열매는 대개 오렌지색을 띠며, 노란색·녹색·흰색 등 다른 색깔을 띠는 것도 많다. 익으면 바깥면이 주로 짙은 황갈색을 띤다.",
            classification: {
                kingdom: "식물계",
                phylum: "속씨식물문",
                class: "쌍떡잎식물강",
                order: "박과목",
                family: "박과",
                genus: "호박속"
            }
        },
        "셀러리": {
            name: "셀러리", 
            scientificName: "Apium graveolens", 
            image: "셀러리.jpeg",
            sowingTime: "3월 - 4월", 
            harvestTime: "6월 - 9월", 
            temperature: "10-20", 
            features: "초여름부터 가을까지가 맛있고 잎에 광택이 있고 줄기는 두껍고 심줄이 또렷이 박혀 있는 것이 좋다. 특유의 향기와 아삭아삭한 씹는 맛을 살려야 하는 채소로 반드시 심줄이 단단한 부분은 제거하고 요리를 하여야 한다.",
            classification: {
                kingdom: "식물계",
                phylum: "속씨식물문",
                class: "쌍떡잎식물강",
                order: "미나리목",
                family: "미나리과",
                genus: "미나리속"
            }
        },
        "브로콜리": {
            name: "브로콜리", 
            scientificName: "Brassica oleracea var. italica", 
            image: "브로콜리.jpeg",
            sowingTime: "3월 - 5월", 
            harvestTime: "6월 - 10월", 
            temperature: "15-20", 
            features: "브로콜리는 교목으로서 많이 쓰이며 향기가 많이 나고 푸른 빛이 아름답다. 나무처럼 생겨나서 두껍고 질긴 가운데 부분을 주로 하고 피어나는 모양이다. 꽃 부분을 먹는 배추 중 한 종류가 이탈리아에서 품종개량되어 지금의 모습이 되었다. 콜리플라워는 브로콜리의 개량종이다.",
            classification: {
                kingdom: "식물계",
                phylum: "속씨식물문",
                class: "쌍떡잎식물강",
                order: "십자화목",
                family: "십자화과",
                genus: "브라시카속"
            }
        },    
    "멜론": {
    "name": "멜론", 
    "scientificName": "Cucumis melo", 
    "image": "멜론.jpeg",
    "sowingTime": "4월 - 6월", 
    "harvestTime": "7월 - 9월", 
    "temperature": "20-30", 
    "features": "과육은 녹색이거나 노란빛이 도는 분홍색으로, 맛이 달콤하고 사향 냄새를 풍긴다. 유럽에서 많이 재배하는 캔털루프멜론은 껍질이 사마귀혹처럼 울퉁불퉁하고 녹색을 띤다. 과육은 노란빛을 띤 오렌지색으로 달다. 감로멜론은 초록빛이 도는 흰색을 띠는 매끈한 껍질과 달콤한 녹색 과육이 특징이다.",
    "classification": {
        "kingdom": "식물계",
        "phylum": "속씨식물문",
        "class": "쌍떡잎식물강",
        "order": "박달나무목",
        "family": "박과",
        "genus": "무속"
    }
},
"팥": {
    "name": "팥", 
    "scientificName": "Vigna angularis", 
    "image": "팥.jpeg",
    "sowingTime": "5월 - 6월", 
    "harvestTime": "9월 - 10월", 
    "temperature": "20-25", 
    "features": "팥에는 비타민 중에서 B군이 풍부하기 때문에 탄수화물의 소화흡수 및 피로감 개선, 기억력 감퇴 예방에 도움을 주고, 사포닌과 콜린 함량이 많아 혈중 중성지방 조절에 도움을 준다. 팥은 몸 안의 붓기와 노폐물 제거에 효과적인 곡물로 체중관리에 도움을 주는 것으로 알려져 있다.",
    "classification": {
        "kingdom": "식물계",
        "phylum": "속씨식물문",
        "class": "쌍떡잎식물강",
        "order": "콩과",
        "family": "콩과",
        "genus": "완두속"
    }
},
"호두": {
    "name": "호두", 
    "scientificName": "Juglans regia", 
    "image": "호두.jpeg",
    "sowingTime": "3월 - 4월", 
    "harvestTime": "9월 - 10월", 
    "temperature": "15-20", 
    "features": "특징 및 의의 호두는 양질의 단백질과 소화 흡수가 잘되는 지방 성분을 다량 함유하고 있는 등 영양이 우수한 알칼리성 식품이다. 호두에 함유된 지방은 다가불포화지방산, 리놀레산, 리놀렌산 등으로 이루어져 있어 성인병 예방에 도움을 줄 뿐만 아니라 피부도 윤택하게 해 주는 효능이 있다.",
    "classification": {
        "kingdom": "식물계",
        "phylum": "속씨식물문",
        "class": "쌍떡잎식물강",
        "order": "호두목",
        "family": "호두과",
        "genus": "Juglans"
    }
},
"가지": {
    "name": "가지", 
    "scientificName": "Solanum melongena", 
    "image": "가지.jpeg",
    "sowingTime": "4월 - 6월", 
    "harvestTime": "7월 - 10월", 
    "temperature": "20-30", 
    "features": "대개 '가지'라 하면 가지의 열매를 지칭하며, 검은 자줏빛의 두껍고 질긴 외피와 스펀지 같은 촉감의 연한 노랑/연두 혹은 흰 과육으로 이루어졌다. 신선한 가지는 열매 꼭지 부분에 가시가 있어 취급에 주의를 요하기도 한다. 검은 빛깔의 껍질에는 안토시아닌이 많이 들어있다.",
    "classification": {
        "kingdom": "식물계",
        "phylum": "속씨식물문",
        "class": "쌍떡잎식물강",
        "order": "가지목",
        "family": "가지과",
        "genus": "Solanum"
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
