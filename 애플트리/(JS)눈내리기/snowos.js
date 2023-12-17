// createSnowflake 함수 정의: 눈송이를 생성하는 함수
function createSnowflake() {
    // div 엘리먼트 생성
    const snowflake = document.createElement('div');
    
    // 생성된 div에 'snowflake' 클래스 추가
    snowflake.className = 'snowflake';
    
    // 랜덤으로 생성된 left 값 설정 (화면의 가로폭을 기준으로)
    snowflake.style.left = `${Math.random() * 100}vw`;
    
    // snowflake-container 클래스를 가진 엘리먼트에 눈송이 추가
    document.querySelector('.snowflake-container').appendChild(snowflake);
    
    // 눈송이 애니메이션 반복이 끝날 때마다 이벤트 처리
    snowflake.addEventListener('animationiteration', () => {
        // 현재 눈송이 제거
        snowflake.remove();
        
        // 새로운 눈송이 생성 (재귀 호출)
        createSnowflake();
    });
}

// 일정 시간 간격으로 createSnowflake 함수 호출: 눈송이 생성 간격 조절
setInterval(createSnowflake, 900);
