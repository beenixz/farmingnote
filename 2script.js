let users = []; // 사용자 정보를 저장할 배열

// 로그인 폼 이벤트 리스너
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // 로그인 체크
    const user = users.find(user => user.username === username && user.password === password);
    if (user) {
        alert('로그인 성공!');
    } else {
        document.getElementById('loginMessage').innerText = '사용자 이름 또는 비밀번호가 잘못되었습니다.';
    }
});

// 회원가입 폼 이벤트 리스너
document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const newUsername = document.getElementById('newUsername').value;
    const newPassword = document.getElementById('newPassword').value;

    // 사용자 중복 체크
    const existingUser = users.find(user => user.username === newUsername);
    if (existingUser) {
        document.getElementById('signupMessage').innerText = '이미 사용 중인 사용자 이름입니다.';
    } else {
        users.push({ username: newUsername, password: newPassword });
        alert('회원가입 성공! 로그인 해주세요.');
        toggleForms(); // 로그인 폼으로 전환
    }
});

// 폼 전환 함수
function toggleForms() {
    const loginContainer = document.getElementById('loginContainer');
    const signupContainer = document.getElementById('signupContainer');
    
    if (loginContainer.style.display === 'none') {
        loginContainer.style.display = 'block';
        signupContainer.style.display = 'none';
    } else {
        loginContainer.style.display = 'none';
        signupContainer.style.display = 'block';
    }
}

// 툴바의 메뉴 항목
const toolbarItems = [{ name: "홈", link: "index.html" },
{ name: "추천", link: "recommend.html" },
{ name: "커뮤니티", link: "community.html" },
{ name: "사용자 계정", link: "login.html" },
{ name: "피드백", link: "feedback.html" } ];

// 툴바에 항목 추가
const toolbar = document.querySelector('.toolbar');
toolbarItems.forEach(item => {
    const link = document.createElement('a');
    link.href = item.link;
    link.textContent = item.name;
    toolbar.appendChild(link);
});
