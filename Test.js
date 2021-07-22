function check(course) {

    document.getElementById("price").innerHTML = "Giá khóa học: " + course;
}

//input validations
function vali(phone, email, fname, combo) {
    var phoneno = /((09|03|07|08|05)+([0-9]{8})\b)/g;
    var ema = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (fname.value == "") {
        document.getElementById("name").innerHTML = "Vui lòng nhập tên";

    }
    if (phone.value == "") {
        document.getElementById("phonenum").innerHTML = "Vui lòng nhập số điện thoại";

    }
    if (email.value == "") {
        document.getElementById("emai").innerHTML = "Vui lòng nhập email";

    }
    if (phone.value != "") {
        if (phoneno.test(phone.value) == false) {
            document.getElementById("phonenum").innerHTML = "Vui lòng nhập đúng định dạng";

        }
    }


    if (email.value != "") {
        if (ema.test(email.value) == false) {
            document.getElementById("emai").innerHTML = "Vui lòng nhập đúng định dạng";
        }
    }

    if (combo.value == "") {
        document.getElementById("com").innerHTML = "Vui lòng chọn khóa học";
    }
    if (phone.value.match(phoneno) && email.value.match(ema) && fname.value != "" && combo.value != "") {
        alert("Đăng Ký Thành Công");
        location.reload();

    }

}


function change() {
    document.getElementById("title").style.color = "yellow";
}

function reset() {
    document.getElementById("title").style.color = "white";
}