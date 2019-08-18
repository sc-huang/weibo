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

