function DanhSachSinhVien() {
    //thuộc tính
    this.mangSV = [];

    //Phương thức
    this.themSV = function (sv) {
        this.mangSV.push(sv);
    }

    //tìm kiếm vị trí sv theo mã
    // viTri = -1
    // duyệt mảng để so sánh "ma" với từng mã sinh viên trong mảng
    // Nếu tìm được return viTri = index (vi trí tìm thấy)
    // Nếu tìm không được return viTri = -1
    this.timViTri = function (ma) {
        var viTri = -1;
        this.mangSV.map(function (item, index) {
            if (item.maSV === ma) {
                viTri = index;
            }
        });
        return viTri;
    };

    this.xoaSV = function (ma) {
        var viTri = this.timViTri(ma);
        if (viTri >= 0) {
            //tìm thấy sv
            this.mangSV.splice(viTri, 1);
        }
    }

    this.capNhatSV = function (sv) {
        var viTri = this.timViTri(sv.maSV);
        if (viTri >= 0) {
            this.mangSV[viTri] = sv;
        }
    }

}



// prototype: giúp thêm thuôc tính , phương thức vào trong lớp đối tượng mà không cần chỉnh sửa trực tiếp
DanhSachSinhVien.prototype.timKiemSV = function (chuoiTK) {
    var mangKQ = [];
    var chuoiThuong = chuoiTK.toLowerCase();

    this.mangSV.map(function (item, index) {
        var tenThuong = item.tenSV.toLowerCase();
        var viTriChu = tenThuong.indexOf(chuoiThuong);

        if(viTriChu >=0){
            mangKQ.push(item);
        }
    });

    return mangKQ;
}

