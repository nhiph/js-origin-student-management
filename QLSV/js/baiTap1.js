// bắt sự kiện click nút "Hiển Thị Thông Tin"
document.getElementById("btnHienThiTT").addEventListener("click", function () {
  console.log("run");
  // lấy dữ liệu người dùng nhập vào từ ô input
  var txtMaSV = document.getElementById("txtMaSV").value;
  var txtTenSV = document.getElementById("txtTenSV").value;
  var loaiSV = document.getElementById("loaiSV").value;
  var txtDiemToan = document.getElementById("txtDiemToan").value;
  var txtDiemVan = document.getElementById("txtDiemVan").value;

  //   tạo đối tượng ( object ) sinh viên
  var sv = {
    // property
    maSV: txtMaSV,
    tenSV: txtTenSV,
    loaiSV: loaiSV,
    diemToan: txtDiemToan,
    diemVan: txtDiemVan,
    // method
    tinhDiemTrungBinh: function (toan, van) {
      var dtb = (+toan + +van) / 2;
      return dtb;
    },
    xepLoai: function (dtb) {
      if (dtb >= 5) {
        return "Qua Môn";
      } else {
        return "Học Lại";
      }
    },
  };

  // hiển thị thông tin lên màn hình
  document.getElementById("spanTenSV").innerHTML = sv.tenSV;
  document.getElementById("spanMaSV").innerHTML = sv.maSV;
  document.getElementById("spanLoaiSV").innerHTML = sv.loaiSV;
  var dtb = sv.tinhDiemTrungBinh(sv.diemToan, sv.diemVan);
  console.log(dtb);
  document.getElementById("spanDTB").innerHTML = dtb;
  var loaiHocLuc = sv.xepLoai(dtb);
  document.getElementById("spanXepLoai").innerHTML = loaiHocLuc;
});
