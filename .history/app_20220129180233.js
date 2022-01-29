//Khai báo các biến cần thiết:
var arrayOfValue = [];

const api_url =
  "https://www.xskt.vip/api/front/open/lottery/history/list/1/miba";

async function getapi(url) {
  const response = await fetch(url);

  var posts = await response.json();
  show(posts);
  loop(numList);
}
getapi(api_url);

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
  console.log(arrayOfValue);
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


//Khai bóa các function sử dụng:
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
  
