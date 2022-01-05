function fnFlexItemWidth(){
    let setBox = $('.flex-box>div');
    let conWidth = $('.container').width();
    let setWidth = (conWidth - 12) / 2;
    setBox.css({width:setWidth,});
}
function moveBox(item){
    $(item).css({
        transform:'translateX(0)',
        opacity: '1'
    })
}
// 각각 박스를 나오게 하는 함수
function loadEvent(leftBox, rightBox){
    moveBox(leftBox);
    moveBox(rightBox);
}

        
// 기존 section01 부분
function loadEventS(item1, item2, item3, item4, item5, item6, deTime){
    setTimeout(function(){
        loadEvent(item1, item2);
    },deTime);
    setTimeout(function(){
        loadEvent(item3, item4);
    },deTime+500);
    setTimeout(function(){
        loadEvent(item5, item6);
    },deTime+1000);
}