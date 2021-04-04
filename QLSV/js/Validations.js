function Validation(){
    this.checkEmpty = function(inputVal,spanID,message){
        // trim(): xóa dấu khoảng trắng trước và sau nội dung chữ
        if(inputVal.trim() != ""){
            //dữ liệu hợp lệ
            document.getElementById(spanID).innerHTML  = "";
            return true;
        }else{
            //dữ liệu không hợp lệ
            document.getElementById(spanID).innerHTML = message;
            return false;
        }
    }

    this.checkID = function(inputVal,spanID,message,mangSV){
        //Kiểm tra mã có tồn tại trong mảng SV chưa
        var isExist = false;
        //some: duyệt mảng, trả kết quả so sánh (true/ false)
        isExist = mangSV.some(function(item){
            return item.maSV === inputVal;
        });
        if(isExist){
            //nếu isExist là true => mã bị trùng
            document.getElementById(spanID).innerHTML = message;
            return false;
        }else{
            // mã không trùng => hợp lệ
            document.getElementById(spanID).innerHTML = "";
            return true;
        }

    }

    this.checkName = function(inputVal,spanID,message){
        // C1: dùng đối tượng RegExp
        var namePattern = new RegExp("^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" + "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" + "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\\s]+$");

        if(namePattern.test(inputVal)){
            //tên hợp lệ
            document.getElementById(spanID).innerHTML  = "";
            return true;
        }else{
            document.getElementById(spanID).innerHTML  = message;
            return false;
        }

    }

    this.checkEmail = function(inputVal,spanID,message){
        // C2: sử dụng trực tiếp biểu thức

        var emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if(inputVal.match(emailPattern)){
            //Đúng định dạng email
            document.getElementById(spanID).innerHTML  = "";
            return true;
        }else{
            document.getElementById(spanID).innerHTML  = message;
            return false;
        }
    }

    this.checkLength = function(inputVal,spanID,message,min,max){
        if(inputVal.length >= min && inputVal.length <=max){
            //dữ liệu hợp lệ 
            document.getElementById(spanID).innerHTML  = "";
            return true;
        }else{
            document.getElementById(spanID).innerHTML  = message;
            return false;
        }
    }

    this.checkDropDown = function(selectID,spanID,message){
        if(document.getElementById(selectID).selectedIndex != 0){
            //có chọn các khóa học
            document.getElementById(spanID).innerHTML  = "";
            return true;
        }else{
            document.getElementById(spanID).innerHTML  = message;
            return false;
        }
    }
}