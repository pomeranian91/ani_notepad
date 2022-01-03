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

// 전환이 자연스러운 네브바
let radioglider = document.querySelector('.navradio__glider')
document.querySelector('.radiobtn1').onclick =function(){
    radioglider.style.transform = "translate(0,0)"
    document.querySelector('.radiobtn1').style.color = "red";
    document.querySelector('.radiobtn2').style.color = "black";
    document.querySelector('.radiobtn3').style.color = "black";
};

document.querySelector('.radiobtn2').onclick =function(){
    radioglider.style.transform = "translate(100%,0)"
    document.querySelector('.radiobtn1').style.color = "black";
    document.querySelector('.radiobtn2').style.color = "red";
    document.querySelector('.radiobtn3').style.color = "black";

};

document.querySelector('.radiobtn3').onclick =function(){
    radioglider.style.transform = "translate(200%,0)"
    document.querySelector('.radiobtn1').style.color = "black";
    document.querySelector('.radiobtn2').style.color = "black";
    document.querySelector('.radiobtn3').style.color = "red";
};