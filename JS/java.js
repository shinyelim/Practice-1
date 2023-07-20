//사이드바 기능(미디어쿼리에서만)//
let openBtn = document.querySelector('.gnb-open-btn');
let closeBtn = document.querySelector('.sidebar-btn');
let sidebar = document.querySelector('.sidebar');

openBtn.addEventListener('click', function () {
  sidebar.classList.add('active');
})

closeBtn.addEventListener('click', function(){
  sidebar.classList.remove('active');
})


//slide 다른 slide 넘어가기 기능//
let buttons = document.querySelectorAll('.slide-btn li');
let slideList = document.querySelector('.slide-list');
//buttons(변수)를 배열(li*3)을 foreach을 반복
//forEach 매개변수 1.반복한 값 2.index 값을 넘겨줌//
buttons.forEach(function (button,index) {       //<-(slide 넘어가기 기능시작하는 함수)
  button.addEventListener('click',function () {
    //0,1,2(index) * (0,100,200)
    //두번째이미지: -1 * 100 + 'vw' => -100vw
    let translateValue = -index * 100 + 'vw';
    slideList.style.transform = `translateX(${
      translateValue
    })`;
    buttons.forEach(function (otherBtn) {
      otherBtn.classList.remove('active');  //<= buttons안에있는 클래스들한테 active가 안 생김
      //클릭된 클래스한테만 active class add
      
    
    })
    button.classList.add('.active');
  })
})


//팝업창 24시간동안 페이지에서 열지 않기/


