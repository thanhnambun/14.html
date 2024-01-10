var chieu_dai = parseFloat(prompt("Nhập giá trị chiều dài:"));
var chieu_rong = parseFloat(prompt("Nhập giá trị chiều rộng:"));

var T = (chieu_dai + chieu_rong) / 2;
var s = chieu_dai * chieu_rong;

console.log("tổng: " + T);
console.log("diênj tích: " + s);