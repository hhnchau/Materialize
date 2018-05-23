function KhoaHoc(ten, hocphi){
  this.Ten = ten;
  this.HocPhi = hocphi
}

KhoaHoc.prototype.mota = function(){
  console.log("Hello" + this.HocPhi);
}

var hp = new KhoaHoc("Lap trinh Android", 80000);

hp.mota();
