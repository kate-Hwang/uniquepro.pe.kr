//J-Query header - exchange (Header that changes from section to section)

$(function () {
    const header = $('.header'); //헤더를 변수에 넣기
    const sub = $('.sub-mainpage'); //intro about kate 변수선언
    const port = $('.contents'); //포트폴리오 슬라이드 변수선언
    const greet = $('.about-Greetings'); //인사말 변수 선언
    const use = $('.about-useful');
    const page = $('.about-view-animation'); //색상이 변할 부분
    const footer = $('.contact-sc'); //연락망 변수 선언
    
    const headerOffsetTop = header.offset().top;
    const subOffsetTop = sub.offset().top; //sub section 변할 top값
    const portoffsetTop = port.offset().top; //port section 변할 top값
    const greetoffsettop =greet.offset().top;
    const useOffsetTop = use.offset().top;
    const pageOffsetTop = page.offset().top; //색상 변할 부분의 top값
    const footeroffesttop = footer.offset().top;//contact 변할 top값

    /* $(window).resize(function () { //반응형을 대비해 리사이즈시 top값을 다시계산
      pageOffsetTop = page.offset().top;
      portoffsettop = port.offset().top;
      greetoffsettop = greet.offset().top;
      footeroffesttop = footer.offset().top;

    }); */

    $(window).on('scroll', function () {

        header.addClass('line');

      if ($(window).scrollTop() >= headerOffsetTop && $(window).scrollTop() < subOffsetTop) {

        header.addClass('line');
        console.log('subpage', subOffsetTop);
      }
      
      if ($(window).scrollTop() >= portoffsetTop) {
          header.addClass('line-black');
          header.removeClass('line');
          console.log('header', headerOffsetTop);
      }
      /* if($(window).scrollTop() >= portoffsettop && $(window).scrollTop() < useOffsetTop ){      
        header.addClass('line');
        console.log('port',portoffsettop);
      }  */
      if ($(window).scrollTop() >= greetoffsettop) {
        header.removeClass('line');
        header.removeClass('line-black');
        console.log('header', headerOffsetTop);
    }
      if($(window).scrollTop() >= greetoffsettop && $(window).scrollTop() < useOffsetTop){
        header.removeClass('line');
        console.log('use',useOffsetTop);
      }
      if ($(window).scrollTop() >= useOffsetTop && $(window).scrollTop() < pageOffsetTop) {  //만약 스크롤이 page보다 밑에 내려가면
        header.removeClass('line');
        console.log('use', useOffsetTop);
      } 
      /*if ($(window).scrollTop() >= pageOffsetTop && $(window).scrollTop() < footeroffesttop) {  //만약 스크롤이 page보다 밑에 내려가면
        header.removeClass('down');
        header.removeClass('line');
        console.log('page', pageOffsetTop);
      }*/ 
      
      if ($(window).scrollTop() >= footeroffesttop ) {  //(contact) 만약 스크롤이 page보다 밑에 내려가면
        header.addClass('down');
        header.removeClass('line-black');
        header.removeClass('line');
        console.log('footer', footeroffesttop);
      } 


      // 스크롤탑 > pagescrolltop, 스크롤탑 < footerscrooltop 
      // 스크롤탑 < footersrolltop 


    });
  });






// $( document ).ready(function() {
//     const header = $('.header'); //헤더를 변수에 넣기
//     const page = $('.about-view-animation'); //색상이 변할 섹션,페이지 부분
//     const contact = $('.contact-sc');
    
//     const pageOffsetTop = page.offset().top; //색상 변할 부분의 top값 구하기'
//     const pagecontactOffsetTop = contact.offset().top;
    
//     $(window).on('scroll', function(){
//         console.log('스크롤');
//         console.log('페이지오프셋',pageOffsetTop);
//          if($(window).scrollTop() >= pageOffsetTop) { //만약 스크롤이 page보다 밑에 내려가면
//              console.log('hey');
//              header.addClass('down'); //클래스를 추가
//              //$('.header').removeClass({'border-bottom':'0.75px solid #fff'});
//          }else {//만약 아닐시
//             console.log('hey man');
//              header.removeClass('down'); //클래스 제거
//          }
         
//          if($(window).scrollTop() >= pagecontactOffsetTop) { //만약 스크롤이 page보다 밑에 내려가면
//             console.log('hey2',);
//             header.addClass('down'); //클래스를 추가
//             //$('.header').addClass({'border-bottom':'5px solid pink'});
//         }else {//만약 아닐시
//             console.log('hey2 wht-sup',);
//             header.removeClass('down'); //클래스 제거
//         }

         

//     });
//     console.log('header');

//     //반응형을 대비해 리사이즈시 top값을 다시 계산
//     $(window).resize(function(){
//         pageOffsetTop = page.Offset().Top;
//         pagecontactOffsetTop = contact.offset().top;
//     });
// });

//$("선택자").offset({ top: "속성값", left: "속성값" })

