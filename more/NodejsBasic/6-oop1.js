//khai bao giong static
var person = {
  ho : "Pham",
  ten: "Khoa",
  chaomung : function(){
    console.log("Hello" + this.ho + " " + this.ten);
  }
}

person.chaomung();

console.log(person["ten"]);
