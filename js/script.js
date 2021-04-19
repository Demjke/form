var checkBox1 = document.getElementById("radio-one");
var checkBox2 = document.getElementById("radio-two");
var btn1 = document.querySelector(".btn-one");
var btn2 = document.querySelector(".btn-two");
var label = document.querySelector(".form__goods-checkbox");
var temp = document.querySelector(".form__temp");
console.log(temp);
checkBox1.onclick = function () {
  btn1.classList.add("active");
  btn2.classList.remove("active");
};
checkBox2.onclick = function () {
  btn2.classList.add("active");
  btn1.classList.remove("active");
};
label.onclick = function () {
  temp.classList.toggle("active");
};
