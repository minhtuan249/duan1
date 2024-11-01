let clickCount = 0; // Đếm số lượng nhấn vào link hình ảnh

function incrementClickCount() {
    clickCount++;
    document.getElementById("clickCount").textContent = clickCount;
}

// Lấy lại và hiển thị giá trị clickCount khi tải lại web
function loadClickCount() {
    const savedClickCount = localStorage.getItem("clickCount");
    if (savedClickCount) {
        clickCount = parseInt(savedClickCount, 10); // Biến chuỗi thành số nguyên
        document.getElementById("clickCount").textContent = clickCount;
    }
}

// Tìm kiếm tên sản phẩm
function searchProduct() {
    const input = document.getElementById('search').value.toLowerCase(); // Nhập tên tìm kiếm, sau đó biến đổi thành chữ thường
    const products = document.getElementsByClassName('items1'); // Lấy tất cả phần tử có class items1
    let found = false; // Biến để kiểm tra xem có sản phẩm nào khớp hay không
    for (let i = 0; i < products.length; i++) {
        const h3 = products[i].getElementsByTagName('h3')[0]; // byTagName: Lấy tất cả phần tử là h3, số 0 là thẻ h3 đầu tiên
        if (h3.innerHTML.toLowerCase().includes(input)) {
            products[i].style.display = ''; // Hiển thị sản phẩm nếu khớp
            found = true; // Nếu tìm thấy sản phẩm khớp
        } else {
            products[i].style.display = 'none'; // Ẩn sản phẩm nếu không khớp
        }
    }
    if (!found) {
        alert('Sản phẩm không tồn tại'); // Hiển thị thông báo nếu không tìm thấy sản phẩm
    }
}

// Hàm hiện tất cả các phần tử
function showAll() {
    const products = document.getElementsByClassName("items1");
    for (let i = 0; i < products.length; i++) {
        products[i].style.display = ""; // Hiện tất cả sản phẩm
        products[i].classList.remove("deleted"); // Bỏ lớp 'deleted' để sản phẩm không bị mờ
        products[i].querySelector(".delete-btn").style.display = "inline"; // Hiện nút Xóa
        products[i].querySelector(".restore-btn").style.display = "none"; // Ẩn nút Hiện
    }
    updateCounts(); // Cập nhật số liệu sau khi hiển thị tất cả
}

// Chỉnh sửa thông tin sản phẩm
function editProduct(productId) {
    const product = document.getElementById(productId);
    const h3 = product.getElementsByTagName("h3")[0];
    const p1 = product.getElementsByTagName("p")[0];
    const newH3 = prompt("Chỉnh sửa tên sản phẩm", h3.innerHTML);
    const newP = prompt("Chỉnh sửa giá", p1.innerHTML);
    if (newH3 !== null) h3.innerHTML = newH3;
    if (newP !== null) p1.innerHTML = newP;
    updateCounts();
}

// Xóa phần tử
function deleteProduct(productId) {
    const product = document.getElementById(productId);
    product.classList.add("deleted"); // Thêm class deleted vào id đó
    product.querySelector(".delete-btn").style.display = "none"; // Ẩn nút Xóa
    product.querySelector(".restore-btn").style.display = "inline"; // Hiện nút Hiện
    updateCounts(); // Cập nhật số liệu sau khi xóa
}

//Khôi phục sản phẩm
function restoreProduct(productId) {
    const product = document.getElementById(productId);
    product.classList.remove("deleted");
    product.querySelector(".delete-btn").style.display = "inline"; // Hiện nút Xóa
    product.querySelector(".restore-btn").style.display = "none"; // Ẩn nút Hiện
    updateCounts(); // Cập nhật số liệu sau khi khôi phục
}

//Hiển thị thanh thống kê
function updateCounts() {
    const products = document.getElementsByClassName("items1");
    let totalCount = products.length; //Tổng số lượng có class là items1
    let deletedCount = 0;
    let availableCount = 0;
    for (let i = 0; i < products.length; i++) {
        if (products[i].classList.contains("deleted")) {
            deletedCount++;
        } else {
            availableCount++;
        }
    }
    document.getElementById("totalCount").textContent = totalCount;
    document.getElementById("deletedCount").textContent = deletedCount;
    document.getElementById("availableCount").textContent = availableCount;
}

document.addEventListener("DOMContentLoaded", function () {
    loadClickCount();
    updateCounts(); // Cập nhật số liệu khi tải trang
});




// slideshow
// Chạy hình ảnh nhấn
let index = 1;
hideImage();
document.getElementById(index).style.display = "block";

setInterval(function () {
  next();
}, 2000);

function next() {
  if (index == 4) {
    index = 0;
  }
  index++;
  showImage(index);
}
function pre() {
  if (index == 1) {
    index = 5;
  }
  index--;
  showImage(index);
}

function showImage(index) {
  hideImage();
  let img = document.getElementById(index);
  img.style.display = "flex";
}

function hideImage() {
  let img1 = document.getElementById("1");
  let img2 = document.getElementById("2");
  let img3 = document.getElementById("3");
  let img4 = document.getElementById("4");

  // ẩn tất cả các hình
  img1.style.display = "none";
  img2.style.display = "none";
  img3.style.display = "none";
  img4.style.display = "none";
}


function changeParagraphBackgroundColor() {
  var colors = ['#FFFFFF', '#F5F5F5', '#E8E8E8', '#DCDCDC', '#F0F0F0']; // Các màu trắng và xám rất nhạt
  var paragraphs = document.querySelectorAll('h2'); // Chọn tất cả các thẻ p có class là color-change
  
  paragraphs.forEach(function(paragraph) {
    var randomColor = colors[Math.floor(Math.random() * colors.length)];
    paragraph.style.backgroundColor = randomColor;
  });
}

setInterval(changeParagraphBackgroundColor, 1000); // Đổi màu mỗi giây




