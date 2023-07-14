//사이드바 기능//
// jQuery
// $('.gnb-main-item').hover(function(){
//   // gnb-main-item에 hover했을 때,
//   // .sub class를 찾아서 slideDown()
//   $(this).find('.sub').stop().slideDown(300);
//   $(this).children('a').addClass('active');
// }, function(){
//   $(this).find('.sub').stop().slideUp(300);
//   $(this).children('a').removeClass('active');
// })


// Vanilla JS
let gnbItems = document.querySelectorAll('.gnb-main-item');

gnbItems.forEach(function(item){
  let subMenu = item.querySelector('.sub');

  item.addEventListener('mouseover', function(){
    subMenu.classList.add('active');
    //gnb-main-item a on 클래스 추가시
    //메인메뉴 바뀐 색으로 유지해줌(hover기능작동)
    this.querySelector('a').classList.add('active');
    //sub메뉴에 hover 기능을 했을때 유지하고,보여주게해줌//('active')('on')//
  })
  item.addEventListener('mouseleave',function () {
    subMenu.classList.remove('active');
    this.querySelector('a').classList.remove('active');

    this.querySelector('a').classList.add('is-active');
    this.querySelector('span').classList.remove('is-active');
  })
  //sub메뉴가 보이지않게 max-height = 0 을 설정해줌//
  //sub메뉴을 보여주지않게 하는//
  
})

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



