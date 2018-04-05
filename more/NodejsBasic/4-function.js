function tinhtong(a,b){
  return a+b;
}

var x = tinhtong(3,8);
console.log(x);



function hello(){
  console.log("Hello");
}

//ham goi ham
function goiHam(fn){
  fn();
}

//su dung
goiHam(hello);


var tong = function(){
  console.log("Android");
}

tong();
