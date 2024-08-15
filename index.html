var eqName = document.getElementById("eqName");
let eqWeight = document.getElementById("eqWeight");
let eqWidth = document.getElementById("eqWidth");
let impact1 = document.getElementById("impact1");
let impact2 = document.getElementById("impact2");
var form = document.getElementById("form");
let resultArea = document.querySelector(".comment");

var modalContent = document.querySelector(".modal-content");
var modalText = document.querySelector("#modalText");
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];


const excavator =[
  {eqName: 'excavator'  , eqWeight: 160, eqWidth: 120, eqLength: 240, eqContact: 40},
  {eqName: 'B/H03 DX60' , eqWeight:  60, eqWidth: 120, eqLength: 240, eqContact: 40},
  {eqName: 'B/H06 DX140', eqWeight: 140, eqWidth: 120, eqLength: 240, eqContact: 40},
  {eqName: 'B/H08 DX240', eqWeight: 240, eqWidth: 120, eqLength: 240, eqContact: 40},
];



// input value check ------------------
function inputCheck(){
 
  if (eqName.value=='' || eqWeight.value=='' || eqWidth.value=='' || (impact1.checked==false && impact2.checked==false)){
    modal.style.display = "block";
    modalText.innerHTML = `All fields are required!`;

  }else{
    calCulate();
  }

}
//--------------------------------------------------------------

// When the user clicks on <span> (x), close the modal-----------
span.onclick = function() {
  modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
//--------------------------------------------------------------



// This is MAIN calculating function  ----------------------
function calCulate(){
  let p =  [eqName.value, eqWeight.value, eqWidth.value];
  if(impact1.checked){
    p.push("Option1");
  }else if(impact2.checked){
    p.push("Option2");
  }

  let bmi = Number(p[2])/(Number(p[1])/100*Number(p[1])/100);
      
  let result = '';
  if(bmi<18.5){
    result = '여유가 있어요';
     }else if(18.5<=bmi&&bmi<=24.9){
    result = '적정함';
     }else if(25<=bmi&&bmi<=29.9){
    result = '초과 됨으로 재검토 필요1';
     }else if(30<=bmi&&bmi<=34.9){
    result = '초과 됨으로 재검토 필요2';
     }else if(35<=bmi){
    result = '초과 됨으로 재검토 필요3';
     }
  


resultArea.style.display = "block";
document.querySelector(".comment").innerHTML = `${p[0]} 장비하중은 <span id="comment">${result}</span>`;
document.querySelector("#result").innerHTML = bmi.toFixed(2);
document.querySelector(".esult").innerHTML = bmi.toFixed(2);
document.querySelector(".egogo").innerHTML = p[0];
document.querySelector(".op1").innerHTML = p[3];
}





// 드랍다운 목록선택 효과 ----------------------------------------------------------------
var x, i, j, l, ll, selElmnt, a, b, c;
/*look for any elements with the class "custom-select":*/
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  /*for each element, create a new DIV that will act as the selected item:*/
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /*for each element, create a new DIV that will contain the option list:*/
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    /*for each option in the original select element,
    create a new DIV that will act as an option item:*/
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /*when an item is clicked, update the original select box,
        and the selected item:*/
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
    // 여기에 추가로 내가 이벤트 발생하게 만들었음 -----------------------------------------------------//
    c.addEventListener("click", handleChange);
    c.addEventListener("click", inputWindow);
    //----------------------------------------------------------------------------------------------//

  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
      /*when the select box is clicked, close any other select boxes,
      and open/close the current select box:*/
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");

    });


}
function closeAllSelect(elmnt) {
  /*a function that will close all select boxes in the document,
  except the current select box:*/
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }

}
/*if the user clicks anywhere outside the select box,
then close all select boxes:*/
document.addEventListener("click", closeAllSelect);


//-------------------------------------------------------------------------


//-------- Equipment Info ---------------------------------------


//------------ Choose Equipment Auto fill info -------------
function handleOnChange(e) {
  // // 선택된 데이터 가져오기
  // const equip = e.value;
  console.log(e.value);
  // // 데이터 출력
  // document.getElementById('eqName').value
  //   = excavator[equip].eqName;

}





// select 요소 참조 자동입력 기능
function handleChange() {
  // value 값 가져오기
  const a = document.getElementById('eQ').value;
  // 자동입력
  document.getElementById('eqName').value = excavator[a].eqName;
  document.getElementById('eqWeight').value = excavator[a].eqWeight;
  document.getElementById('eqWidth').value = excavator[a].eqWidth;
  document.getElementById('eqLength').value = excavator[a].eqLength;
  document.getElementById('eqContact').value = excavator[a].eqContact;

  // 상태를 콘솔에 표시
  console.log(`선택된 장비는 ${excavator[a].eqName} 입니다.`);

}

function inputWindow() {
  const a = document.getElementById('eQ').value;
  const b = document.querySelectorAll('div.container-hide');
  console.log(b)
  for (let i = 0; i < 3; i++) {
    if (a == 0) {
      b[i].classList.add('expand');
    } else {
      b[i].classList.remove('expand');
    }
  }
}
