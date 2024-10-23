let posts = []; // 게시글 정보를 저장할 배열
const randomNicknames = [
    "멜로디", "블루스카이", "레인보우", "화이트팬더", "미니마우스",
    "썬플라워", "스카이워커", "드림캐쳐", "핑크팬더", "스노우화이트",
    "스타더스트", "에메랄드", "하늘빛", "코스모스", "러블리햇",
    "미스터리", "아이스크림", "체리블라썸", "문라이트", "해피트리",
    "블랙홀", "썬더볼트", "퍼플헤이즈", "그린티", "아쿠아마린",
    "푸른바다", "실버스타", "골든드래곤", "화이트러너", "리틀프린세스",
    "푸른하늘", "발리비치", "스윗초콜렛", "핫초코", "스마일리",
    "루비레드", "미스테리어스", "롤리팝", "블루밍", "라벤더",
    "블랙코코아", "민트초코", "아이리쉬", "라이트닝", "골드피쉬",
    "체리쿼츠", "푸른별", "피치파이", "스노우볼", "화이트로즈",
    "썸머레인", "그레이스", "미드나잇", "블랙베리", "코코넛",
    "화이트골드", "스파클링", "퍼플드림", "핑크로즈", "오션블루",
    "다이아몬드", "그린라이트", "레몬트리", "코튼캔디", "블루밍가든",
    "자스민", "마법사", "레드벨벳", "루나틱", "페어리",
    "실버문", "체리핑크", "스위트드림", "블루오션", "로즈마리",
    "아이스바", "썬샤인", "화이트크리스탈", "블랙스완", "아메리카노",
    "레드핑크", "스파이더맨", "하트비트", "다크호스", "스카이뷰",
    "루비", "핑크하트", "트로피컬", "블루베리", "자몽나무",
    "시크릿가든", "스노우플레이크", "브라운슈가", "플레인요거트", "딸기우유",
    "아이보리", "포레스트", "오로라", "바이올렛", "블루베이"
];

// 사용자 아이디를 랜덤 닉네임으로 설정
let userId = randomNicknames[Math.floor(Math.random() * randomNicknames.length)];

const postModal = document.getElementById('postModal');
const closeModal = document.getElementById('closeModal');
const newPostButton = document.getElementById('newPostButton');

// 게시글 업로드 이벤트 리스너
document.getElementById('postForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const title = document.getElementById('postTitle').value;
    const content = document.getElementById('postContent').value;
    const fileInput = document.getElementById('postFile');
    const file = fileInput.files[0]; // 첨부파일 가져오기

    const now = new Date();
    const timestamp = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    const newPost = {
        title: title,
        content: content,
        timestamp: timestamp,
        comments: [],
        file: file ? URL.createObjectURL(file) : null, // 파일 URL 생성
        fileName: file ? file.name : null, // 파일 이름 저장
        userId: userId // 사용자 아이디 추가
    };

    posts.push(newPost);
    displayPosts();
    document.getElementById('postForm').reset();
    closeModalFunction();
});

// 게시글 및 댓글 표시 함수
function displayPosts() {
    const postList = document.getElementById('postList');
    postList.innerHTML = '';

    posts.forEach((post, index) => {
        const postDiv = document.createElement('div');
        postDiv.className = 'post';
        postDiv.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.content}</p>
            <p class="timestamp">${post.timestamp}</p>
            <p class="userId">${post.userId}</p> <!-- 사용자 아이디 표시 -->
            ${post.file ? `<a href="${post.file}" download="${post.fileName}">첨부파일 다운로드</a>` : ''} <!-- 첨부파일 다운로드 링크 -->
            <button onclick="toggleCommentForm(${index})">댓글 달기</button>
            <div class="commentForm" id="commentForm${index}" style="display:none;">
                <input type="text" placeholder="댓글 작성" id="commentInput${index}">
                <button onclick="addComment(${index})">등록</button>
            </div>
            <div class="comments" id="comments${index}"></div>
        `;
        postList.appendChild(postDiv);
    });
}

// 댓글 달기 폼 토글 함수
function toggleCommentForm(index) {
    const commentForm = document.getElementById(`commentForm${index}`);
    commentForm.style.display = commentForm.style.display === 'none' ? 'block' : 'none';
}

// 댓글 추가 함수
function addComment(postIndex) {
    const commentInput = document.getElementById(`commentInput${postIndex}`);
    const commentText = commentInput.value;

    if (commentText) {
        // 랜덤 닉네임 선택
        const randomNickname = randomNicknames[Math.floor(Math.random() * randomNicknames.length)];
        const formattedComment = `${randomNickname} : ${commentText}`; // 닉네임과 댓글 형식

        posts[postIndex].comments.push(formattedComment); // 댓글 추가
        displayComments(postIndex); // 댓글 목록 갱신
        commentInput.value = ''; // 입력 필드 초기화
    }
}

// 댓글 표시 함수
function displayComments(postIndex) {
    const commentsDiv = document.getElementById(`comments${postIndex}`);
    commentsDiv.innerHTML = ''; // 기존 댓글 목록 초기화

    posts[postIndex].comments.forEach(comment => {
        const commentDiv = document.createElement('div');
        commentDiv.className = 'comment';
        commentDiv.innerText = comment;
        commentsDiv.appendChild(commentDiv);
    });
}

// 모달 열기
newPostButton.addEventListener('click', function() {
    postModal.style.display = 'block';
});

// 모달 닫기
closeModal.addEventListener('click', function() {
    closeModalFunction();
});

// 모달 닫기 함수
function closeModalFunction() {
    postModal.style.display = 'none';
}

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
