
    /*Wave ripple JQUERY - Engine*/
    console.log('aa1');
    $('.faceimage').ripples({
        resolution: 256,
        perturbance: 0.04
    });

    $(".faceimage span").on('mousedown',function(e){
        e.offsetX = 400;
        e.offsetY = 200;
    });

    setTimeout(function () {
        $(".faceimage span").fadeIn(500);
        $(".faceimage span").trigger('mousedown');
    });