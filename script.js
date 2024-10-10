document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const region = document.getElementById('region').value;
    const temperature = document.getElementById('temperature').value;
    
    // 간단한 추천 로직 (예시)
    let recommendedProduce = [];
    
    if (temperature > 20) {
        recommendedProduce = ['토마토', '오이', '피망'];
    } else if (temperature > 10) {
        recommendedProduce = ['배추', '무', '시금치'];
    } else {
        recommendedProduce = ['당근', '양파', '감자'];
    }
    
    // 결과 출력
    document.getElementById('result').innerHTML = `
        <h3>${region}에서 추천하는 농산물:</h3>
        <ul>
            ${recommendedProduce.map(item => `<li>${item}</li>`).join('')}
        </ul>
    `;
});
