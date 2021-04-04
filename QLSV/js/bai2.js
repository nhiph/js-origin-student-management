// mãng danh sách sinh viên
//Global Variable
//danhSachSV: thể hiện của lớp DanhSachSinhVien
var danhSachSV = new DanhSachSinhVien();
var validation = new Validation();

getLocalStorage();

// bắt sự kiện click "btnThemSV"
document.getElementById("btnThemSV").addEventListener("click", function () {
  console.log("run");
  // lấy tất cả giá trị của các ô input
  var txtMaSV = document.getElementById("txtMaSV").value;
  var txtTenSV = document.getElementById("txtTenSV").value;
  var txtEmail = document.getElementById("txtEmail").value;
  var txtPass = document.getElementById("txtPass").value;
  var txtNgaySinh = document.getElementById("txtNgaySinh").value;
  var khSV = document.getElementById("khSV").value;
  var txtDiemToan = document.getElementById("txtDiemToan").value;
  var txtDiemLy = document.getElementById("txtDiemLy").value;
  var txtDiemHoa = document.getElementById("txtDiemHoa").value;

  //Kiểm tra dữ liệu
  var isValid = true;
  // &: cộng giá trị (chuỗi) binary
  //&&: so sánh (AND) giá trị boolean
  // true => 1 (bit)
  // false => 0 (bit)
  // 1 & 1 = 1 => true & true = true
  //1 & 0 = 0 => true & false = false

  //kiểm tra Mã SV
  //không được để trống và không được trùng
  isValid &= validation.checkEmpty(txtMaSV, "spanMaSV", "Mã SV không được để trống") && validation.checkID(txtMaSV, "spanMaSV", "Mã SV không được trùng", danhSachSV.mangSV);

  //kiểm tra tên SV
  isValid &= validation.checkEmpty(txtTenSV, "spanTenSV", "Tên SV không được để trống") && validation.checkName(txtTenSV, "spanTenSV", "Tên SV không hợp lệ");

  //kiểm tra email
  isValid &= validation.checkEmpty(txtEmail, "spanEmailSV", "Email không được để trống") && validation.checkEmail(txtEmail, "spanEmailSV", "Email không hợp lệ");

  //kiểm tra pass
  isValid &= validation.checkEmpty(txtPass, "spanMatKhau", "Pass không được để trống") && validation.checkLength(txtPass, "spanMatKhau", "Pass phải có độ dài 6-8",6,8);

  //kiểm tra khóa học
  isValid &= validation.checkDropDown("khSV", "spanKhoaHoc", "Khóa học phải được chọn");


  // isValid == true
  if (isValid) {
    // tạo đối tượng sinhviên từ lớp đối tượng SinhViên
    //new: tạo thể hiện(instance) của lớp đối tượng (để truy xuất tới các thuộc tính, phương thức)
    var sv = new SinhVien(txtMaSV, txtTenSV, txtEmail, txtPass, txtNgaySinh, khSV, txtDiemToan, txtDiemLy, txtDiemHoa); // sv = {  }
    // console.log("sv : ", sv);
    console.table(sv);
    sv.tinhDTB();
    danhSachSV.themSV(sv);
    console.log(danhSachSV.mangSV);
    hienThiDS(danhSachSV.mangSV);
    setLocalStorage();
  }

});

function hienThiDS(dssv) {
  //content chứa các thẻ tr (tr chứa thông tin 1 sv)
  var content = "";
  dssv.map(function (item, index) {
    // ``: string template
    // item.tinhDTB();
    content += `
      <tr>
        <td>${item.maSV}</td>
        <td>${item.tenSV}</td>
        <td>${item.email}</td>
        <td>${item.ngaySinh}</td>
        <td>${item.khoaHoc}</td>
        <td>${item.dtb}</td>
        <td>
          <button class="btn btn-danger" onclick="xoaSinhVien('${item.maSV}')" >Xóa</button>
          <button class="btn btn-info" onclick="hienChiTietSV('${item.maSV}')" >Xem</button>
        </td>
      </tr>
    `;
  });

  document.getElementById("tbodySinhVien").innerHTML = content;
}

// localStorage
//Lưu danh sách SV xuống localStorage (offline)
//localStorage: đối tượng của js giúp gọi phương thức local
//JSON: đối tượng js hỗ trợ kiểu dữ liệu JSON
// stringify: chuyển kiểu mảng sang JSON
function setLocalStorage() {
  localStorage.setItem("DSSV", JSON.stringify(danhSachSV.mangSV));
}

//parse: chuyển JSON sang kiểu mảng
function getLocalStorage() {
  if (localStorage.getItem("DSSV") != null) {
    danhSachSV.mangSV = JSON.parse(localStorage.getItem("DSSV"));
    hienThiDS(danhSachSV.mangSV);
  }

}

function xoaSinhVien(ma) {
  danhSachSV.xoaSV(ma);
  hienThiDS(danhSachSV.mangSV);
  setLocalStorage();
}

function hienChiTietSV(ma) {
  document.getElementById("txtMaSV").disabled = true;
  var viTri = danhSachSV.timViTri(ma);
  if (viTri >= 0) {
    //tìm thấy sv
    //Hiển thị lên form
    document.getElementById("txtMaSV").value = danhSachSV.mangSV[viTri].maSV;
    document.getElementById("txtTenSV").value = danhSachSV.mangSV[viTri].tenSV;
    document.getElementById("txtEmail").value = danhSachSV.mangSV[viTri].email;
    document.getElementById("txtPass").value = danhSachSV.mangSV[viTri].matKhau;
    document.getElementById("txtNgaySinh").value = danhSachSV.mangSV[viTri].ngaySinh;
    document.getElementById("khSV").value = danhSachSV.mangSV[viTri].khoaHoc;
    document.getElementById("txtDiemToan").value = danhSachSV.mangSV[viTri].toan;
    document.getElementById("txtDiemLy").value = danhSachSV.mangSV[viTri].ly;
    document.getElementById("txtDiemHoa").value = danhSachSV.mangSV[viTri].hoa;
  }
}

function capNhatSinhVien() {
  // lấy tất cả giá trị của các ô input
  var txtMaSV = document.getElementById("txtMaSV").value;
  var txtTenSV = document.getElementById("txtTenSV").value;
  var txtEmail = document.getElementById("txtEmail").value;
  var txtPass = document.getElementById("txtPass").value;
  var txtNgaySinh = document.getElementById("txtNgaySinh").value;
  var khSV = document.getElementById("khSV").value;
  var txtDiemToan = document.getElementById("txtDiemToan").value;
  var txtDiemLy = document.getElementById("txtDiemLy").value;
  var txtDiemHoa = document.getElementById("txtDiemHoa").value;

  var sv = new SinhVien(txtMaSV, txtTenSV, txtEmail, txtPass, txtNgaySinh, khSV, txtDiemToan, txtDiemLy, txtDiemHoa);
  sv.tinhDTB();

  danhSachSV.capNhatSV(sv);
  hienThiDS(danhSachSV.mangSV);
  setLocalStorage();

}

function resetForm() {
  document.getElementById("formQLSV").reset();
  document.getElementById("txtMaSV").disabled = false;

}

// document.getElementById("btnSearch").onclick = function(){
//    var chuoiTK = document.getElementById("txtSearch").value.trim();
//    var mangKQ =  danhSachSV.timKiemSV(chuoiTK);

//    hienThiDS(mangKQ);
// }

document.getElementById("txtSearch").addEventListener("keydown",function(){
  var chuoiTK = document.getElementById("txtSearch").value.trim();
   var mangKQ =  danhSachSV.timKiemSV(chuoiTK);

   hienThiDS(mangKQ);
});
