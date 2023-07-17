//find:자식클래스 및 하위태그를 찾을때 쓰는 함수//
//children():find랑 같은 기능을 하지만 오직 자식클래스만 찾을 수 있다.
//index/eq(클래스순서)
/*$('.main-menu-li,.submenu-wrapper').hover(function () {
  $('.submenu-wrapper').stop().slideDown(500);
}), function () {
  $('.submenu-wrapper').stop().slideUp(500);
} 
$('.subMnu-list > li').hover (function () {
  function z(params) {
    
  }
})*/
 /*$('.main-menu li, .submenu-wrapper').hover(function () {
  $('.submenu-wrapper').stop().slideDown(400);
 },function () {
  $('.submenu-wrapper').stop().slideeUp(400);
 })*/ 
 //메뉴바 slide 밑으로 내려오기 기능

 $('.submenu-list > li').hover(function(){
  // .submenu-list > li 4개 중 hover된
  // 자신의 index 번호를 i라는 변수에 저장
  let i = $(this).index();
  // eq() : 인덱스 번호로 어떤 요소를 찾을 때 사용
  $('.main-menu').find('a').eq(i).addClass('on');
}, function(){
  let i = $(this).index();
  $('.main-menu').find('a').eq(i).removeClass('on');
})
 



/*$('.main-menu li, .submenu-wrapper').hover(function(){
  // hover시 실행 할 함수
  $('.submenu-wrapper').stop().slideDown(500);
}, function(){
  // leave 됐을 때 실행 할 함수
  $('.submenu-wrapper').stop().slideUp(500);
})

$('.submenu-list > li').hover(function(){
  // .submenu-list > li 4개 중 hover된
  // 자신의 index 번호를 i라는 변수에 저장
  let i = $(this).index();
  // eq() : 인덱스 번호로 어떤 요소를 찾을 때 사용
  $('.main-menu').find('a').eq(i).addClass('on');
}, function(){
  let i = $(this).index();
  $('.main-menu').find('a').eq(i).removeClass('on');
})*/
