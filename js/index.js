/*
 * 功能：图片无缝轮播
 *
 */ 
$(function(){
    //获取第一个元素节点
    var firstA = $('.content div a').first().clone();
    //获取每个元素节点的高度
    var a_width = $(".content div a").width();
    //将获取到的第一个节点放在div容器里
    $('.content div').append(firstA).width(a_width);
    //定义一个计数器，用来记录整个过程
    var i = 0;
    //定义一个计时器
    var timer;
    autoPlay();
    //动画执行函数
    function autoPlay(){
        timer = setInterval(function(){
            i++;
            moveA(i);
        },2000);
    }
    //下一张
    $('.right_img').click(function(){
        i++;
        moveA(i);
        clearInterval(timer);
    });
    //上一张  
    $('.left_img').click(function(){
        i--;
        moveA(i);
        clearInterval(timer);
    });
    //判断当前图片的位置
    function moveA(num){
        if(i == $(".content div a").length){
            i = 1;
            $(".content div").css({left:0});
        }
        if(i == -1){
            i = $(".content div a").length - 2;
            $('.content div').css({left:($(".content div a").length-1)*-a_width});
        }
        $('.content div').stop().animate({left:i*-a_width},1000);
        if(i == ($(".content div a").length - 1)){
            $('.radio span').eq(0).addClass('left1_rad').siblings().removeClass('left1_rad'); 
        }else{
            $('.radio span').eq(i).addClass('left1_rad').siblings().removeClass('left1_rad'); 
        }
    }
    //获取鼠标冒泡事件
    $(".content").mousemove(function(){
        clearInterval(timer);
    }).mouseout(function(){
        autoPlay();
    })
    //点击锚点获取相应的图片
    $('.radio span').click(function(){
        i = $(this).index();
        moveA(i);
        clearInterval(timer);
    });
});