/**
 * Lưu trữ thông tin chung của sinh viên
 * 
 */

// tạo lớp đối tượng sinh viên
// ES5: khai báo lớp đối tượng bằng từ khóa function
// pascal case: SinhVien
function SinhVien(
    maSV,
    tenSV,
    email,
    matKhau,
    ngaySinh,
    khoaHoc,
    toan,
    ly,
    hoa
  ) {
    // property
    //this: giup instance truy xuất đến thuộc tính, phương thức
    //this đại diện cho SinhVien
    // key : value,
    this.maSV = maSV; 
    this.tenSV = tenSV;
    this.email = email;
    this.matKhau = matKhau;
    this.ngaySinh = ngaySinh;
    this.khoaHoc = khoaHoc;
    this.toan = toan;
    this.ly = ly;
    this.hoa = hoa;
    this.dtb = 0;

    // methods
    this.tinhDTB = function () {
      this.dtb = ((+this.toan + +this.ly + +this.hoa) / 3).toFixed(2);
    };
  }
  