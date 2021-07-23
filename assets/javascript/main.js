var boxMsg = document.getElementById('box-msg');
var btnYes = document.querySelector('.yes');
var btnNo = document.querySelector('.no');
var outPut = document.querySelector('.output');
var yourName = document.querySelector('.your-name');
// boxMsg.draggable = true
var local = boxMsg.getBoundingClientRect();

btnYes.addEventListener('click', function() {
    alert (`Cảm ơn bạn ${yourName.value} đã đồng ý :)) `);
})

btnNo.addEventListener('click',clickNo);

function clickNo() {
    var temp =randomnumber();
    boxMsg.style.animation = 'opc linear .5s'
    if(temp%2 ==0 && temp%3!=0) {
        boxMsg.style.marginTop = `${temp/4}px`;
        boxMsg.style.marginRight = `${temp}px`;
    } else if (temp%2 ==0 && temp%3==0){
        boxMsg.style.marginBottom = `${temp}px`;
        boxMsg.style.marginLeft = `${temp}px`;
    }else{
        boxMsg.style.marginTop = `${temp}px`;
        boxMsg.style.marginLeft = `${temp}px`;
    }
    function randomnumber() {
        return Math.floor(Math.random()*600);
    }
    function randomArr(arr) {
        return Math.floor(Math.random()*case1.length);
    }
}



yourName.addEventListener('keyup', function (e) {
    outPut.innerHTML = e.target.value;
})

var modal = document.querySelector('.modal');
var pass = document.querySelector('.pass');
var sendBtn = document.querySelector('.btn-send');
var formSend = document.querySelector('.send-form');
pass.addEventListener('input', (e) => {
    var passWord = e.target.value;
    sendBtn.onclick = function() {  
        if (passWord == 'truong'  ) {
            modal.classList.add('close');
            alert('Hello bạn!')
        }else {
            modal.classList.remove('close');
            alert('Mật khẩu không chính xác!')
            sendBtn.type = 'reset';
        }
    }

})

