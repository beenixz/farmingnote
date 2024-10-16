let posts = []; // 게시글 정보를 저장할 배열

// DOM 요소
const postModal = document.getElementById('postModal');
const closeModal = document.getElementById('closeModal');
const newPostButton = document.getElementById('newPostButton');

// 게시글 업로드 이벤트 리스너
document.getElementById('postForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const title = document.getElementById('postTitle').value;
    const content = document.getElementById('postContent').value;

    // 현재 시각을 가져오는 함수
    const now = new Date();
    const timestamp = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    // 게시글 객체 생성
    const newPost = {
        title: title,
        content: content,
        timestamp: timestamp, // 시각 추가
        comments: [] // 댓글 배열 초기화
    };

    // 게시글 추가
    posts.push(newPost);
    displayPosts(); // 게시글 목록 갱신
    document.getElementById('postForm').reset(); // 폼 초기화
    closeModalFunction(); // 모달 닫기
});

// 게시글 및 댓글 표시 함수
function displayPosts() {
    const postList = document.getElementById('postList');
    postList.innerHTML = ''; // 기존 게시글 목록 초기화

    posts.forEach((post, index) => {
        const postDiv = document.createElement('div');
        postDiv.className = 'post';
        postDiv.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.content}</p>
            <p class="timestamp">${post.timestamp}</p> <!-- 시각 표시 -->
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
        posts[postIndex].comments.push(commentText); // 댓글 추가
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
    { name: "홈", link: "index.html" },
    { name: "추천", link: "recommend.html" },
    { name: "커뮤니티", link: "community.html" },
    { name: "사용자 계정", link: "login.html" },
    { name: "피드백", link: "feedback.html" }
];

// 툴바에 항목 추가
const toolbar = document.querySelector('.toolbar');
toolbarItems.forEach(item => {
    const link = document.createElement('a');
    link.href = item.link;
    link.textContent = item.name;
    toolbar.appendChild(link);
});
