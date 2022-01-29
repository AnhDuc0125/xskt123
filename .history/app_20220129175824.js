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
