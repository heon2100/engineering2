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
  {eqName: 'excavator'  , eqWeight: 240, axDis: 3650, eqWidth: 2990, eqLength: 3260, eqContact: 600},
  {eqName: 'B/H03 DX60' , eqWeight:  60, axDis: 1650, eqWidth: 1590, eqLength: 1500, eqContact: 400},
  {eqName: 'B/H06 DX140', eqWeight: 140, axDis: 2650, eqWidth: 2090, eqLength: 2800, eqContact: 500},
  {eqName: 'B/H08 DX240', eqWeight: 240, axDis: 3650, eqWidth: 2990, eqLength: 3260, eqContact: 600},
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
  let input =  [eqName.value, eqWeight.value, axDis.value, eqWidth.value, eqLength.value, eqContact.value, db_Height.value, db_Density.value, db_Porosity.value, thk1.value, thk2.value, thk3.value, thk4.value];
  let out = ['out_eqName','out_eqWeight', 'out_axDis', 'out_eqWidth', 'out_eqLength', 'out_eqContact', 'impact', 'out_db_Height','out_db_Density','out_db_Porosity','out_thk1','out_thk2','out_thk3','out_thk4'];
  if(impact1.checked){
    input.splice(6,0, 1.3);
  }else if(impact2.checked){
    input.splice(6,0, 1.4);;
  }


  //------ 이거 이제 이해함 삯제해도 될듯 --------//
  let bmi = Number(input[2])/(Number(input[5])/100*Number(input[8])/100);

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
  console.log(bmi)
  console.log(`${input[0]} 장비하중은 <span id="comment">${result}</span>`)
  resultArea.style.display = "block";
  document.querySelector(".comment").innerHTML = `${input[0]} 장비하중은 <span>${result}</span>`;
  document.querySelector("#result").innerHTML = bmi.toFixed(2);
 //------ 이거 이제 이해함 삯제해도 될듯 --------//


  // 여기가 테이블에 입력값 넣는 거임.
  for (let i=0; i<input.length; i++) {
    document.getElementById(out[i]).innerHTML = input[i];
  }
  // 식 값 넣기.. 같은 숫자는 계속 넣는 방법 없나.. 
  document.getElementById('eqWeight_1').innerHTML = input[1];
  document.getElementById('impact_1').innerHTML = input[6];
  document.getElementById('axDis_1').innerHTML = input[2];
  document.getElementById('eqWidth_1').innerHTML = input[3];
  document.getElementById('wEW').innerHTML = ((input[1]*input[6])/(input[2]*input[3])*1000000).toFixed(1);

  document.getElementById('eqWeight_2').innerHTML = input[1];
  document.getElementById('impact_2').innerHTML = input[6];
  document.getElementById('eqContact_2').innerHTML = input[5];
  document.getElementById('axDis_2').innerHTML = input[2];
  document.getElementById('wEI').innerHTML = ((input[1]*input[6])/(2*input[2]*input[5])*1000000).toFixed(1);

  document.getElementById('eqContact_3').innerHTML = input[5];
  document.getElementById('axDis_3').innerHTML = input[2];
  document.getElementById('eqWidth_3').innerHTML = input[3];
  document.getElementById('axDis_4').innerHTML = input[2];
  document.getElementById('eq_C_3').innerHTML = ((2*input[5]*input[2])/(input[3]*input[2])).toFixed(2);



  // 계산한 값들 넣기

  let ws = input[7]*input[8]*input[9];
  document.getElementById('ws').innerHTML = ws.toFixed(2);
  console.log(input[7],input[8], input[9])


  for (let i=0; i<4; i++) {
    document.getElementById(`wd${i+1}`).innerHTML = input[10+i]*24/1000;
  }


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
  // Input 값 자동입력
  document.getElementById('eqName').value = excavator[a].eqName;
  document.getElementById('eqWeight').value = excavator[a].eqWeight;
  document.getElementById('axDis').value = excavator[a].axDis;
  document.getElementById('eqWidth').value = excavator[a].eqWidth;
  document.getElementById('eqLength').value = excavator[a].eqLength;
  document.getElementById('eqContact').value = excavator[a].eqContact;



  // 장비선택 상태를 콘솔에 표시
  if (a==0) {
    console.log(`선택된 장비는 직접 입력하셔야 합니다`);
  } else {
    console.log(`선택된 장비는 ${excavator[a].eqName} 입니다.`);
  }
}

function inputWindow() {
  const a = document.getElementById('eQ').value;
  const b = document.querySelector('div.container-hide');
    if (a == 0) {
      b.classList.add('expand');
    } else {
      b.classList.remove('expand');
    }
}
