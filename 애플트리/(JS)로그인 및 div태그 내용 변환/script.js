let on_of=true; // 한번만div의 내용이 바뀔 수 있게 제어 하는 변수
// JavaScript를 사용하여 div 태그 내용을 변경하는 함수
function APP_div() {
    // div 태그의 내용을 변경
    if(on_of)
    {
        on_of=false;
       
        // 유튜브 애플 광고가 나올 수 있게 div 태그의 내용 바뀌 치기
        document.getElementById('myDiv').innerHTML = `
     <iframe id="video"  width="600px" height="400px" 
      src="https://www.youtube.com/embed/rkOMUCfeaDo?si=QQrUiz0UFlBybPkY" 
      title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; 
      encrypted-media; gyroscope; picture-in-picture; web-share">
            애플광고
     </iframe>`; 
    }
}

function computer_div()
{
        // div 태그의 내용을 변경
    if(on_of)
    {
        on_of=false;
     // 유튜브 노트북 광고가 나올 수 있게 div 태그의 내용 바뀌 치기
     document.getElementById('yourDiv').innerHTML = `
     <iframe width="600px" height="400px" 
      src="https://www.youtube.com/embed/qcnXXhEiCVY?si=K72HkRBmgS-P70B3" 
      title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; 
      encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
    }
}

 // LOGIN/LOGOUT 클릭 시 호출되는 함수
 function toggleLogin() {
    // 만약 로그인 상태라면
    if (isLoggedIn()) {
      // 로그아웃 처리
      logout();
      showLogin();
    } else {
      // 로그인 창 띄우기
      let userInput = prompt("이름, 학번, 학과를 입력하세요 (콤마로 구분):");
      let userInfo = userInput.split(',');

      if (userInfo.length === 3) {
        let name = userInfo[0].trim();
        let studentID = userInfo[1].trim();
        let department = userInfo[2].trim();

        alert("로그인 성공!\n이름: " + name + "\n학번: " + studentID + "\n학과: " + department);

        // 로그인 처리 및 정보 저장
        login(name, studentID, department);
        showLogout();
      } else {
        alert("잘못된 입력입니다. 이름, 학번, 학과를 정확히 입력하세요.");
      }
    }
  }

  // 로그인 상태 확인 함수
  function isLoggedIn() {
    return sessionStorage.getItem('loginInfo') !== null;
  }

  // 로그인 처리 및 정보 저장 함수
  function login(name, studentID, department) {
    let loginInfo = { name, studentID, department };
    sessionStorage.setItem('loginInfo', JSON.stringify(loginInfo));
    // 로그인 정보 표시
    document.querySelector('#top_menu h4').innerHTML = '이름: ' + name + '<br>학번: ' + studentID + '<br>학과: ' + department;
  }

  // 로그아웃 처리 및 정보 삭제 함수
  function logout() {
    sessionStorage.removeItem('loginInfo');
    // 로그인 정보 초기화
    document.querySelector('#top_menu h4').innerHTML = '';
  }

  // 로그인 상태일 때 UI 변경 함수
  function showLogout() {
    let loginLink = document.querySelector('#top_menu a');
    loginLink.innerHTML = 'LOGOUT';
  }

  // 로그아웃 상태일 때 UI 변경 함수
  function showLogin() {
    let loginLink = document.querySelector('#top_menu a');
    loginLink.innerHTML = 'LOGIN';
  }

  // 페이지 로딩 시 자동으로 로그인 상태 확인 및 UI 변경
  function checkLoginStatus() {
    if (isLoggedIn()) {
      let { name, studentID, department } = JSON.parse(sessionStorage.getItem('loginInfo'));
      // 로그인 정보 표시
      document.querySelector('#top_menu h4').innerHTML = '이름: ' + name + '<br>학번: ' + studentID + '<br>학과: ' + department;
      showLogout();
    } else {
      showLogin();
    }
  }


   // 페이지 로딩 시 자동으로 로그인 상태 확인
   document.window.onload = function () {
    checkLoginStatus();
  }


