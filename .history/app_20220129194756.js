var dataTag = document.querySelectorAll(".data__body--1");
var dataCopy = document.querySelectorAll(".data__body--2");
var arrayOfValue = [];
var numList = [];
var array;
var numArray = [];
var count0 = 0;
var count1 = 0;
var count2 = 0;
var count3 = 0;
var count4 = 0;
var count5 = 0;
var count6 = 0;
var count7 = 0;
var count8 = 0;
var count9 = 0;
var col_0 = document.querySelector("#data__0--1");
var col_1 = document.querySelector("#data__1--1");
var col_2 = document.querySelector("#data__2--1");
var col_3 = document.querySelector("#data__3--1");
var col_4 = document.querySelector("#data__4--1");
var col_5 = document.querySelector("#data__5--1");
var col_6 = document.querySelector("#data__6--1");
var col_7 = document.querySelector("#data__7--1");
var col_8 = document.querySelector("#data__8--1");
var col_9 = document.querySelector("#data__9--1");
var col_0_copy = document.querySelector("#data__0--2");
var col_1_copy = document.querySelector("#data__1--2");
var col_2_copy = document.querySelector("#data__2--2");
var col_3_copy = document.querySelector("#data__3--2");
var col_4_copy = document.querySelector("#data__4--2");
var col_5_copy = document.querySelector("#data__5--2");
var col_6_copy = document.querySelector("#data__6--2");
var col_7_copy = document.querySelector("#data__7--2");
var col_8_copy = document.querySelector("#data__8--2");
var col_9_copy = document.querySelector("#data__9--2");
var dateTag = document.querySelector("#data__footer--1");
var dateTagCopy = document.querySelector("#data__footer--2");
var date = new Date();
var dayInWeek = date.getDay();
var day = ("0" + date.getDate()).slice(-2);
var month = ("0" + (date.getMonth() + 1)).slice(-2);
var year = date.getFullYear();
switch (dayInWeek) {
  case 0:
    dateTag.innerHTML = `KQXS THÁI BÌNH - CHỦ NHẬT NGÀY ${day}/${month}/${year}`;
    dateTagCopy.innerHTML = `KQXS THÁI BÌNH - CHỦ NHẬT NGÀY ${day}/${month}/${year}`;
    break;
  case 1:
    dateTag.innerHTML = `KQXS THỦ ĐÔ - THỨ HAI NGÀY ${day}/${month}/${year}`;
    dateTagCopy.innerHTML = `KQXS THỦ ĐÔ - THỨ HAI NGÀY ${day}/${month}/${year}`;
    break;
  case 2:
    dateTag.innerHTML = `KQXS QUẢNG NINH - THỨ BA NGÀY ${day}/${month}/${year}`;
    dateTagCopy.innerHTML = `KQXS QUẢNG NINH - THỨ BA NGÀY ${day}/${month}/${year}`;
    break;
  case 3:
    dateTag.innerHTML = `KQXS BẮC NINH - THỨ TƯ NGÀY ${day}/${month}/${year}`;
    dateTagCopy.innerHTML = `KQXS BẮC NINH - THỨ TƯ NGÀY ${day}/${month}/${year}`;
    break;
  case 4:
    dateTag.innerHTML = `KQXS THỦ ĐÔ - THỨ NĂM NGÀY ${day}/${month}/${year}`;
    dateTagCopy.innerHTML = `KQXS THỦ ĐÔ - THỨ NĂM NGÀY ${day}/${month}/${year}`;
    break;
  case 5:
    dateTag.innerHTML = `KQXS HẢI PHÒNG - THỨ SÁU NGÀY ${day}/${month}/${year}`;
    dateTagCopy.innerHTML = `KQXS HẢI PHÒNG - THỨ SÁU NGÀY ${day}/${month}/${year}`;
    break;
  case 6:
    dateTag.innerHTML = `KQXS NAM ĐỊNH - THỨ BẢY NGÀY ${day}/${month}/${year}`;
    dateTagCopy.innerHTML = `KQXS NAM ĐỊNH - THỨ BẢY NGÀY ${day}/${month}/${year}`;
    break;
}

function showData() {
  let data1dienToan = document.querySelectorAll(".data1-header");
  let data2thanTai = document.querySelectorAll(".data2-header");
  let dienToanTag = document.querySelector(".input__dienToan");
  let thanTaiTag = document.querySelector(".input__thanTai");
  var dienToanvalue = dienToanTag.value;
  let motSo = dienToanvalue.slice(0, 1);
  let haiSo = dienToanvalue.slice(1, 3);
  let baSo = dienToanvalue.slice(3, dienToanvalue.length);
  for (i = 0; i < data1dienToan.length; i++) {
    data1dienToan[i].innerText = `${motSo} - ${haiSo} - ${baSo}`;
  }
  for (i = 0; i < data2thanTai.length; i++) {
    data2thanTai[i].innerText = `${thanTaiTag.value}`;
  }

  //không load lại trang khi submit
  var form_thanTai = document.querySelector("#form_thanTai");
  form_thanTai.addEventListener("submit", function (e) {
    e.preventDefault();
    dienToanTag.value = "";
    thanTaiTag.value = "";
  });
}

function customColumn() {
  let valueInput = document.querySelector("#input__custom--column");
  let column = document.querySelector(`#col-${valueInput.value}`);
  let column_copy = document.querySelector(`#col-${valueInput.value}-copy`);
  console.log(column);
  Object.assign(column.style, {
    columns: 2,
    webkitColumns: 2,
    mozColumns: 2,
    width: "35px",
  });
  Object.assign(column_copy.style, {
    columns: 2,
    webkitColumns: 2,
    mozColumns: 2,
    width: "35px",
  });

  //nút submit không load lại trang
  var formElement = document.querySelector("#form_custom");
  formElement.addEventListener("submit", function (e) {
    e.preventDefault();
    valueInput.value = "";
  });
}

document.addEventListener("keydown", function (e) {
  if (e.which == 80) {
    confirm("Bố/Mẹ nhớ kiểm tra đã điền thần tài chưa nhé");
  }
});

// api url
const api_url =
  "https://www.xskt.vip/api/front/open/lottery/history/list/1/miba";

// Defining async function
async function getapi(url) {
  // Storing response
  const response = await fetch(url);

  // Storing data in form of JSON
  var posts = await response.json();
  show(posts);
  loop(numList);
}
// Calling that async function
getapi(api_url);

// Function to define innerHTML for HTML table
function show(posts) {
  // lấy vùng data
  array = posts.t.issueList[0].detail;
  //Giải mã JSON --> JS
  data = JSON.parse(array);

  for (let i = 2; i < data.length; i++) {
    var childArray = data[i].split(`,`);
    data[i] = childArray;
  }

  //Đưa hết vào 1 mảng arrayOfValue
  for (i = 0; i < data.length; i++) {
    if (Array.isArray(data[i])) {
      for (j = 0; j < data[i].length; j++) {
        arrayOfValue.push(data[i][j]);
      }
    } else {
      arrayOfValue.push(data[i]);
    }
  }

  //fill dữ liệu
  for (i = 0; i < dataTag.length; i++) {
    dataTag[i].innerText = arrayOfValue[i];
    dataCopy[i].innerText = arrayOfValue[i];
  }

  //lấy 2 số cuối dãy và đưa hết vào mảng numList

  for (i = 0; i < arrayOfValue.length; i++) {
    numList.push(
      arrayOfValue[i].slice(arrayOfValue[i].length - 2, arrayOfValue[i].length)
    );
  }
  numList = numList.sort();
  return numList;
}

function loop(numList) {
  for (i = 0; i < numList.length; i++) {
    if (numList[i] < 10) {
      col_0.innerHTML += `<li>${numList[i]}</li>`;
      col_0_copy.innerHTML += `<li>${numList[i]}</li>`;
      count0++;
    } else if (numList[i] < 20) {
      col_1.innerHTML += `<li>${numList[i]}</li>`;
      col_1_copy.innerHTML += `<li>${numList[i]}</li>`;
      count1++;
    } else if (numList[i] < 30) {
      col_2.innerHTML += `<li>${numList[i]}</li>`;
      col_2_copy.innerHTML += `<li>${numList[i]}</li>`;
      count2++;
    } else if (numList[i] < 40) {
      col_3.innerHTML += `<li>${numList[i]}</li>`;
      col_3_copy.innerHTML += `<li>${numList[i]}</li>`;
      count3++;
    } else if (numList[i] < 50) {
      col_4.innerHTML += `<li>${numList[i]}</li>`;
      col_4_copy.innerHTML += `<li>${numList[i]}</li>`;
      count4++;
    } else if (numList[i] < 60) {
      col_5.innerHTML += `<li>${numList[i]}</li>`;
      col_5_copy.innerHTML += `<li>${numList[i]}</li>`;
      count5++;
    } else if (numList[i] < 70) {
      col_6.innerHTML += `<li>${numList[i]}</li>`;
      col_6_copy.innerHTML += `<li>${numList[i]}</li>`;
      count6++;
    } else if (numList[i] < 80) {
      col_7.innerHTML += `<li>${numList[i]}</li>`;
      col_7_copy.innerHTML += `<li>${numList[i]}</li>`;
      count7++;
    } else if (numList[i] < 90) {
      col_8.innerHTML += `<li>${numList[i]}</li>`;
      col_8_copy.innerHTML += `<li>${numList[i]}</li>`;
      count8++;
    } else if (numList[i] < 100) {
      col_9.innerHTML += `<li>${numList[i]}</li>`;
      col_9_copy.innerHTML += `<li>${numList[i]}</li>`;
      count9++;
    }
  }
}
