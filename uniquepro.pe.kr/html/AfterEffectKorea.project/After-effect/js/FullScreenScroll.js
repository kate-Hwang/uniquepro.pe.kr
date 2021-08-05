//우측 페이저 버튼 JS CODE
    $(function () {
        let menu1 = $('#pager>ul>li');
        let contents = $('#container > section');
       
        menu1.click(function (event) {
        event.preventDefault();
        
        let tg = $(this);
        let i = tg.index();
        
        let section = contents.eq(i);
        let tt = section.offset().top;
            
        $('html, body').stop().animate({scrollTop: tt});
        });
        
    $(window).scroll(function(){let sct = $(window).scrollTop();});
        
    });

//마우스휠 JS코드
    (function($){
        $.aniPage=function(e,type){
            if(e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0){
                $('body, html').animate({
                    scrollTop:$(window).scrollTop()-$(window).height()
                },500,function(){
                        $.aniOk = 0;
                });
            }
            else{
                $('body, html').animate({
                    scrollTop:$(window).scrollTop()+$(window).height()
                },500,function(){
                        $.aniOk = 0;
                });
            }
        };
    })(jQuery);
    $(function(){
        $(".sctin").height($(window).height());
        $.aniOk=0;
        $(window).scrollTop(0);
    });
    $(document).on("mousewheel DOMMouseScroll",function(e){
        e.preventDefault();
        if($.aniOk == 0){
            $.aniPage(e,e.type);
            $.aniOk = 1;
        }
    });

//수직위치에 따른 페이지 버튼 변화

        $(window).scroll(function () {
        let sct = $(window).scrollTop();
            if(sct>=800){
                $("#pager").fadeIn(500);
            }else if(sct<=800){
                $("#pager").fadeOut(500);
            }
        });

//스크롤시 해당 위치에 따라 버튼색이 변화하는 구성
$(window).scroll(function () {
    let sct2 = $(window).scrollTop();
    if(sct2>=900){
        $("#pager li a").css("background","none");
        $("#pager li:nth-child(2) a").css("background","#eeeeee");
    }
    if(sct2>=1800){
        $("#pager li a").css("background","none");
        $("#pager li:nth-child(3) a").css("background","#eeeeee");
    }
    if(sct2>=2700){
        $("#pager li a").css("background","none");
        $("#pager li:nth-child(4) a").css("background","#eeeeee");
    }
    if(sct2>=3600){
        $("#pager li a").css("background","none");
        $("#pager li:nth-child(5) a").css("background","#eeeeee");
    }
    if(sct2>=4500){
        $("#pager li a").css("background","none");
        $("#pager li:nth-child(6) a").css("background","#eeeeee");
    }
    if(sct2>=5400){
        $("#pager li a").css("background","none");
        $("#pager li:nth-child(7) a").css("background","#eeeeee");
    }
    
});