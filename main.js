// 파란점우르르
function random(low,high){
    return Math.random()*(high - low)+low;
}
console.log(random(3,10));

/* 클릭시 배경 랜덤 변경 */
function backcolor(){
    let backcolorcode = "#" + Math.round(Math.random() * 0xffffff).toString(16);
    document.querySelector('.randombackground').style.backgroundColor = backcolorcode
}
document.querySelector('.btn__changeback--ico').onclick = function(){
backcolor();
};
