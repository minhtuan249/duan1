let check_username = /^[a-zA-Z0-9._-]{3,16}$/;
let check_password = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d$]{8,}$/;
let check_email = /^[A-Za-z0-9._%+=]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let check_phone = /^\+?(\d{1,3})?(\d{3})[-.\s]?(\d{3})[-.\s]?(\d{4})$/;

function checkNull(txt) {
    return txt.value.length === 0;
}

function checkGender(radio) {
    let rt = false;
    for (let i = 0; i < radio.length; i++) {
        if (radio[i].checked) {
            rt = true;
            break;
        }
    }
    return rt;
}

function checkReg(txt, reg) {
    return reg.test(txt.value);
}

function validform(f) {
    // Kiểm tra Username
    if (checkNull(f.username)) {
        alert(f.username.name + " phải được nhập");
        f.username.focus();
        return;
    }
    if (!checkReg(f.username, check_username)) {
        if (f.username.value.length < 3 || f.username.value.length > 16) {
            alert("Username phải có độ dài từ 3 đến 16 ký tự");
        } else {
            alert("Username chỉ được chứa các ký tự chữ cái, số, dấu chấm, gạch dưới hoặc gạch ngang");
        }
        f.username.value = "";
        f.username.focus();
        return;
    }

    // Kiểm tra Password
    if (checkNull(f.password)) {
        alert("Mật khẩu phải được nhập");
        f.password.focus();
        return;
    }
    if (!checkReg(f.password, check_password)) {
        if (f.password.value.length < 8) {
            alert("Mật khẩu phải có ít nhất 8 ký tự");
        } else {
            alert("Mật khẩu phải bao gồm ít nhất một chữ cái và một chữ số");
        }
        f.password.value = "";
        f.password.focus();
        return;
    }

    // Kiểm tra Gender
    if (!checkGender(f.gender)) {
        alert("Gender phải được chọn");
        return;
    }

    // Kiểm tra Phone
    if (checkNull(f.phone)) {
        alert("Phone phải được nhập");
        f.phone.focus();
        return;
    }
    if (!checkReg(f.phone, check_phone)) {
        alert("Số điện thoại không hợp lệ. Vui lòng nhập theo định dạng hợp lệ (ví dụ: +1234567890, 123-456-7890, 123 456 7890)");
        f.phone.value = "";
        f.phone.focus();
        return;
    }

    // Kiểm tra Email
    if (checkNull(f.email)) {
        alert("Email phải được nhập");
        f.email.focus();
        return;
    }
    if (!checkReg(f.email, check_email)) {
        alert("Email không hợp lệ. Vui lòng nhập địa chỉ email đúng định dạng (ví dụ: example@domain.com)");
        f.email.value = "";
        f.email.focus();
        return;
    }
    if(document.getElementById('accept').checked==false){
        alert("Bạn phải đồng ý với chính sách và điều khoản sử dụng");
        return false;
    }
    document.getElementById('successMessage').style.display = 'block'; // Hiển thị thông báo

}


// Set time hiển thị chào mừng 
setTimeout(function() {
    document.querySelector('.welcome-message').style.display = 'none';
}, 3000);

function enableCheckbox(){
    document.getElementById('accept').disabled=false;
}



