//function showMessage(){
   // alert('xin chào')
//}
/* let i=10;
let f=20.5;
let b=true;
let s='Hà Nội';
document.write('i='  +i);
document.write('<br/>');
document.write('f='  +f);
document.write('<br/>');
document.write('b='  +b);
document.write('<br/>');
document.write('s='  +s);
document.write('<br/>');*/
/*let a=20;
let b=10;
let c=a*b;
document.write('diện tích=' +c);*/
/* let a=prompt("nhập số a");
let b=prompt("nhập số b");
let c=parseInt(a);
let d=parseInt(b);
let DT=c*d;
document.write('chiều dai=' +a)
document.write('<br/>')
document.write('chiều rộng=' +b)
document.write('<br/>')
document.write('diện tích ='+DT)*/
//bài tập tính tổng
/*let a=parseInt(prompt('Hóa'));
let b=parseInt(prompt('Lý'));
let c=parseInt(prompt('Sinh học'));
let TB=(a+b+c)/3
let T= a+b+c;
document.write('Tổng điểm trung bình 3 môn=' +TB);
document.write('<br/>');
document.write('Tổng số điểm của 3 môn=' +T); */
// bài tập tính độ C
/* let C=parseInt(prompt('ĐỘ c'));
let F=(9*C)/5+32;
document.write('Fahrenheit=' +F);*/
//bài tập tính chu vi hình tròn
/*let R=parseInt(prompt('Bán kính r'));
let D=R*2;
const =Math.PI
let C=2*R*p;
let S=(R*R)*p;
document.write('Đường kính hình tròn  =' +D)
document.write('<br/>');
document.write('chu vi hình tròn  =' +C);
document.write('<br>');
document.write('Diện tích hình tròn  =' +S);*/










//let a=prompt('Hóa');
//let b=prompt('Lý');
//let c=prompt('Sinh học');
/*let a=parseInt(prompt('nhập số'));
if (a>0) {
    if (a%2==0) {
        alert('đây là số dương chẵn');
    } else {
        alert('đây là số dương lẻ');
    }
} else if(a==0){
    alert('đây là số 0');
}else {
    if (a % 2 == 0) {
        alert('đây là số âm chẵn');
    } else {
        alert('đây là số âm lẻ');
    }*/
/*function Convert(){
    let a = document.getElementById("a").value;
    let From = document.getElementById("Form").value;
    let to = document.getElementById("to").value;
    let er;
    if (From === "VND"){
        if (to === "USD"){
            er = 1/23000;
        }
        else if (to === "EUR"){
            er = 1/26000;
        }
        else er = 1;
    }
    if (From === "USD"){
        if (to === "VND"){
            er = 23000;
        }
        else if (to === "EUR"){
            er = 23/26;
        }
        else er = 1;
    }
    if (From === "EUR"){
        if (to === "USD"){
            er = 26/23;
        }
        else if (to === "VND"){
            er = 26000;
        }
        else er = 1;
    }
    document.getElementById("result").innerHTML = "Result: " + a * er;
}/*
       /* let imgObj = null;
        imgObj =  document.getElementById('myImage');
        function init() {
            imgObj = document.getElementById('myImage');
            imgObj.style.position = 'relative';
            imgObj.style.left = '0px';
        }
        function moveRight() {
            imgObj.style.left = parseInt(imgObj.style.left) + 10 + 'px';
        }
        window.onload = init; */
   /* function dayOfMonth() {
    let month =parseInt(document.getElementById("month").value);
    let day;
    switch (month){
        case 2:
            document.getElementById("result").innerHTML= "Tháng "+month+" có 28 hoặc 29 ngày";
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            document.getElementById("result").innerHTML= "Tháng "+month+" có 30 ngày";
            break;
        default:
            document.getElementById("result").innerHTML= "Tháng "+month+" có 31 ngày";
    }
} */

/*let a=parseInt(prompt(''));
  let b=parseInt(prompt(''));
  let c= a%b;
  if (c===0) {
      document.write('true');
  } else {
      document.write('false');
  }*/
/* let  a=parseInt(prompt(''))
 if (a>=16) {
     document.write('Đủ tuổi ')
 } else {
     document.write('không đủ tuổi')
 } */



let bg = document.getElementById("background");

function changeImg(a) {
    placeImage(a, a.id);
}

function placeImage(a, b) {
    if (a.name == 1) {
        a.src = "img/panda_swap_part" + b + "x1.jpg";
        a.name = 2;
        check(bg);
    } else if (a.name == 2) {
        a.src = "img/funny-cat1_part" + b + "x1.jpg";
        a.name = 3
        check(bg);
    } else if (a.name == 3) {
        a.src = "img/monkey_part" + b + "x1.jpg";
        a.name = 1
        check(bg);
    }
}

function check(a) {
    let isRight = false;
    if (document.getElementById("1").name == document.getElementById("2").name) {
        if (document.getElementById("2").name == document.getElementById("3").name) {
            if (document.getElementById("3").name == document.getElementById("4").name) {
                if (document.getElementById("4").name == document.getElementById("5").name) {
                    isRight = true;
                }
            }
        }
    }
    if (isRight)
        a.style.backgroundColor = "red";
    else a.style.backgroundColor = "white";
}




