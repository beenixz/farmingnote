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
        },
    "포도": {
        name: "포도", 
            scientificName: "Vitis vinifera", 
            image: "포도.jpg",
            sowingTime: "4월", 
            harvestTime: "8월 - 10월", 
            temperature: "20-30", 
            features: "달콤하고 즙이 많은 과일입니다.",
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
            image: "사과.jpg",
            sowingTime: "봄", 
            harvestTime: "9월 - 11월", 
            temperature: "15-25", 
            features: "상큼하고 아삭한 식감이 특징입니다.",
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
            image: "모과.jpg",
            sowingTime: "봄", 
            harvestTime: "10월", 
            temperature: "15-25", 
            features: "향이 강하고 과육이 부드럽습니다.",
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
            image: "바나나.jpg",
            sowingTime: "상시", 
            harvestTime: "상시", 
            temperature: "25-30", 
            features: "부드럽고 달콤한 맛이 특징입니다.",
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
            image: "배.jpg",
            sowingTime: "봄", 
            harvestTime: "9월 - 10월", 
            temperature: "15-25", 
            features: "아삭하고 달콤한 과일입니다.",
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
        "복숭아": {
            name: "복숭아", 
            scientificName: "Prunus persica", 
            image: "복숭아.jpg",
            sowingTime: "봄", 
            harvestTime: "7월 - 9월", 
            temperature: "15-25", 
            features: "부드럽고 달콤한 과일입니다.",
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
            image: "체리.jpg",
            sowingTime: "봄", 
            harvestTime: "6월 - 7월", 
            temperature: "15-25", 
            features: "달콤하고 즙이 많은 과일입니다.",
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
            image: "파인애플.jpg",
            sowingTime: "상시", 
            harvestTime: "상시", 
            temperature: "25-30", 
            features: "달콤하고 신맛이 조화를 이룹니다.",
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
            image: "감.jpg",
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
        "망고": {
            name: "망고", 
            scientificName: "Mangifera indica", 
            image: "망고.jpg",
            sowingTime: "봄", 
            harvestTime: "6월 - 9월", 
            temperature: "25-30", 
            features: "달콤하고 부드러운 과일입니다.",
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
            image: "레몬.jpg",
            sowingTime: "봄", 
            harvestTime: "11월 - 2월", 
            temperature: "15-25", 
            features: "상큼하고 신맛이 특징입니다.",
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
            image: "파프리카.jpg",
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
        "아보카도": {
            name: "아보카도", 
            scientificName: "Persea americana", 
            image: "아보카도.jpg",
            sowingTime: "봄", 
            harvestTime: "가을", 
            temperature: "20-30", 
            features: "크리미한 식감과 고소한 맛이 특징입니다.",
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
            image: "망고스틴.jpg",
            sowingTime: "봄", 
            harvestTime: "여름", 
            temperature: "25-30", 
            features: "달콤하고 상큼한 맛이 특징입니다.",
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
            image: "천혜향.jpg",
            sowingTime: "봄", 
            harvestTime: "11월 - 12월", 
            temperature: "15-25", 
            features: "달콤하고 향이 뛰어난 과일입니다.",
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
            image: "파파야.jpg",
            sowingTime: "봄", 
            harvestTime: "여름", 
            temperature: "25-30", 
            features: "부드럽고 달콤한 과일입니다.",
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
            image: "라임.jpg",
            sowingTime: "봄", 
            harvestTime: "11월 - 2월", 
            temperature: "15-25", 
            features: "신맛이 강하고 상큼한 과일입니다.",
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
            image: "석류.jpg",
            sowingTime: "봄", 
            harvestTime: "9월 - 11월", 
            temperature: "15-25", 
            features: "달콤하고 즙이 많은 과일입니다.",
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
            image: "자몽.jpg",
            sowingTime: "봄", 
            harvestTime: "11월 - 3월", 
            temperature: "15-25", 
            features: "쓴맛과 단맛이 조화롭습니다.",
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
            image: "수박.jpg",
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
        "참외": {
            name: "참외", 
            scientificName: "Cucumis melo", 
            image: "참외.jpg",
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
        "당근": {
            name: "당근", 
            scientificName: "Daucus carota", 
            image: "당근.jpg",
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
        "호박": {
            name: "호박", 
            scientificName: "Cucurbita pepo", 
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

// 검색 버튼 클릭 시 검색 기능
document.getElementById('search-btn').addEventListener('click', function() {
    const searchTerm = document.getElementById('search').value.trim(); // 입력값 가져오기
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = ""; // 이전 결과 초기화

    // 농산물 세부 정보에서 검색어에 해당하는 항목 찾기
    if (produceDetails[searchTerm]) {
        const detail = produceDetails[searchTerm];
        resultDiv.innerHTML = `
            <img src="${detail.image}" alt="${detail.name}" style="width: 100%; height: auto; border: 2px solid #ccc; border-radius: 5px;">
            <h4>${detail.name} (${detail.scientificName})</h4>
            <p><strong>파종 시기:</strong> ${detail.sowingTime}</p>
            <p><strong>수확 시기:</strong> ${detail.harvestTime}</p>
            <p><strong>온도:</strong> ${detail.temperature}°C</p>
            <p><strong>특징:</strong> ${detail.features}</p>
            <p><strong>계:</strong> ${detail.classification.kingdom}</p>
            <p><strong>목:</strong> ${detail.classification.order}</p>
            <p><strong>과:</strong> ${detail.classification.family}</p>
            <p><strong>속:</strong> ${detail.classification.genus}</p>
        `;
    } else {
        resultDiv.innerHTML = "<p>검색 결과가 없습니다.</p>";
    }
});
//
