function fnFlexItemWidth(){
    let setBox = $('.flex-box>div');
    let conWidth = $('.container').width();
    let setWidth = (conWidth - 12) / 2;
    setBox.css({width:setWidth,});
}

function loadEvent1(){
    let sec1_1 = $('.sec01 .box01');
    let sec1_2 = $('.sec01 .box02');

    sec1_1.css({
        transform:'translateX(0)',
        opacity: '1'
    })
    sec1_2.css({
        transform:'translateX(0)',
        opacity: '1'
    })
}

function loadEvent2(){
    let sec1_3 = $('.sec01 .box03');
    let sec1_4 = $('.sec01 .box04');

    sec1_3.css({
        transform:'translateX(0)',
        opacity: '1'
    })
    sec1_4.css({
        transform:'translateX(0)',
        opacity: '1'
    })
}

function loadEvent3(){
    let sec1_5 = $('.sec01 .box05');
    let sec1_6 = $('.sec01 .box06');

    sec1_5.css({
        transform:'translateX(0)',
        opacity: '1'
    })
    sec1_6.css({
        transform:'translateX(0)',
        opacity: '1'
    })
}
