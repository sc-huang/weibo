var kits = {};

kits.dispatchZero = function (num) {
  if (num < 10) {
    num = "0" + num;
  }
  return num;
}

//把方法都放到对象的身上
kits.formatDate = function () {
  var date = new Date();
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  month = this.dispatchZero(month)
  var day = date.getDate();
  day = this.dispatchZero(day)

  var hour = date.getHours();
  hour = this.dispatchZero(hour)

  var minute = this.dispatchZero(date.getMinutes());
  var second = this.dispatchZero(date.getSeconds());
  return year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second;
}


kits.randomInt = function (n, m) {
  return Math.floor(Math.random() * (m - n + 1) + n);
}


kits.randomHexColor = function () {
  var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f']
  var color = '#'
  for (i = 0; i < 6; i++) {
    color += arr[Math.floor(Math.random() * 16)]
  }
  return color

}

kits.randomColor = function () {
  kits.randomInt()
  var r = radomInt(0, 255);
  var g = randonInt(0, 255);
  var b = randomInt(0, 255);
  return "rgb(" + r + "," + g + ",+" + b + ")";
}

//常见给id的方式
//当前时间戳+大的随机数
kits.getId = function () {
  // 返回一个不容易重复的id
  let date = new Date();
  let time = date.getTime();//得到的是从1970.1.1到现在位置的毫秒数
  //然后在得到一个足够大的随机数，把毫秒和随机数相连，作为新的id
  let r = this.randomInt(100000, 999999);
  //把两个数字连起来
  let id = time + "" + r;
  return id;

}

//****** */本地存储******
// 7.getLocalDataArray(key)  从localStorage里面根据指定的键(key)获取一个数组或空[]
kits.getLocalDataArray = function (key) {
  let json = localStorage.getItem(key)
  let arr = JSON.parse(json)
  arr = arr || []
  return arr
}

//8. saveLocalDataArray(key,arr)   将一个数组(arr)以指定的键(key)存储到localStorage里面
kits.saveLocalDataArray = function (key, arr) {
  arr = JSON.stringify(arr)
  localStorage.setItem(key, arr)
}

// 9.后：appendDataIntoArray(key,data)  向localStorage里面指定键(key)的数组数据-后-追加一个数据对象（data）
kits.appendDataIntoArray = function (key, data) {
  let arr = kits.getLocalDataArray(key)
  arr.push(data)
  kits.saveLocalDataArray(key, arr)
}

//10. 前 ： beforeDataIntoArray(key,data)  向localStorage里面指定键(key)的数组数-前-据追加一个数据对象（data）
kits.beforeDataIntoArray = function (key, data) {
  let arr = kits.getLocalDataArray(key)
  arr.unshift(data)
  kits.saveLocalDataArray(key, arr)
}
// 11.deleteLocalDataById(key,id)   根据对应的id从localStorage中指定键(key)的数组中删除一条数据
kits.deleteLocalDataById = function (key, id) {
  let arr = kits.getLocalDataArray(key)
  arr.forEach((e, i) => {
    if (e.id == id) {
      arr.splice(i, 1)
    }
  });
  kits.saveLocalDataArray(key, arr)
}

// 12.modifyLocalDataById(key,id,data)  根据id修改localStorage里面的指定键(key)的数组数据
kits.modifyLocalDataById = function (key, id, data) {
  let arr = kits.getLocalDataArray(key)
  arr.forEach((e, i) => {
    if (e.id == id) {
      arr.splice(i, 1, data)
    }
  })
  kits.saveLocalDataArray(key, arr)

}
