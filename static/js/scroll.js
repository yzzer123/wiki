//滚动控制
function scrollMove(){
    var scrollInterval;
    function animate(to = 0, time = 300){
        window.clearInterval(scrollInterval);
        var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop || 0;
        var step = (scrollTop - to) / 100;
        scrollInterval = window.setInterval(function(){
            window.scrollTo(0, scrollTop - step);
            scrollTop -= step;
            //console.log(scrollTop);
            if((step <= 0 && scrollTop >= to) || (step > 0 && scrollTop <= to)){
                window.scrollTo(0, to);
                window.clearInterval(scrollInterval);
            }
        }, time / 100);
    }
    return animate;
}
var scrollM=scrollMove();

function scrollControl(n){
    scrollM(n,200);
}

window.onscroll = function (){
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    if(scrollTop>=300){
        document.getElementById("topButton").style.display='block';
    }
    else{
        document.getElementById("topButton").style.display='none';
    }
}