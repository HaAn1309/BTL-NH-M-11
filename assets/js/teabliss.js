// animation initializing-AOS
AOS.init();

// header-top-options-------------------------------
function selectBoxHandler(selector) {
  const countryTop = document.querySelector(`#${selector}`);
  const selectBoxBody = document.querySelector(`#${selector} .slectbox-body`);
  if (selectBoxBody.style.display === "none") {
    selectBoxBody.style.display = "block";
    if (countryTop) {
      let countryOption = countryTop.querySelectorAll(".all-option"),
        countryBtn_text = countryTop.querySelector(".item-text");
      countryOption.forEach((option) => {
        option.addEventListener("click", () => {
          let selectedOption = option.querySelector(".item-text").innerText;
          // countrybtn-text
          countryBtn_text.innerHTML = selectedOption;
          selectBoxBody.style.display = "none";
        });
      });
    }
  } else {
    selectBoxBody.style.display = "none";
  }
}

// category submenu---------------------------------
let submenu = document.getElementById("subMenu");
let empt = document.querySelector(".empty");

function tooglmenu() {
  submenu.classList.toggle("open-dropdown");
  empt.classList.toggle("active");
}

// additional heights for submenu
function heightanimation(ele) {
  const els = document.querySelectorAll(`#${ele}`);
  els.forEach((item) => {
    const height = item.scrollHeight;
    item.style.setProperty("--max-height", `${height}px`);
  });
}
heightanimation("subMenu");

// hero-swiper-------------------------------------
var swiper = new Swiper(".hero-swiper", {
  spaceBetween: 30,
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  // autoplay: {
  //   delay: 2500,
  // },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// about-swiper-------------------------------------
var swiper = new Swiper(".about-swiper", {
  spaceBetween: 30,
  slidesPerView: 3,
  roundLengths: true,
  loop: true,
  loopAdditionalSlides: 30,
  // autoplay: {
  //   delay: 2500,
  // },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1260: {
      slidesPerView: 2.5,
    },
  },
});

// product-details-----------------------------------
var swiper = new Swiper(".product-bottom", {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 4,
});
var swiper2 = new Swiper(".product-top", {
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});

// product-size-dropdown-------------------------------
let pdSize = document.querySelector(".product-size");
if (pdSize) {
  (pdBtn = pdSize.querySelector(".size-section")),
    (pdOption = pdSize.querySelectorAll(".option")),
    (pdBtn_Text = pdSize.querySelector(".size-text")),
    (pdBtn_Text2 = pdSize.querySelector(".toggle-btn2"));

  pdOption.forEach((option) => {
    pdBtn.addEventListener("click", () => pdSize.classList.toggle("active"));
    option.addEventListener("click", () => {
      let selectedOption = option.querySelector(".option-text").innerText;
      let selectedOption2 = option.querySelector(".option-measure").innerText;
      // pdbtn-text2
      pdBtn_Text.innerHTML = selectedOption;
      pdBtn_Text2.innerHTML = selectedOption2;

      pdSize.classList.remove("active");
    });
  });
}

// range slider----------------------------------------
function priceslider() {
  if ($("#slider-tooltips").length > 0) {
    var tooltipSlider = document.getElementById("slider-tooltips");

    var formatForSlider = {
      from: function (formattedValue) {
        return Number(formattedValue);
      },
      to: function (numericValue) {
        return Math.round(numericValue);
      },
    };

    noUiSlider.create(tooltipSlider, {
      start: [40, 346],
      connect: true,
      format: formatForSlider,
      range: {
        min: 0,
        max: 400,
      },
    });
    var formatValues = [
      document.getElementById("slider-margin-value-min"),
      document.getElementById("slider-margin-value-max"),
    ];
    tooltipSlider.noUiSlider.on("update", function (values, handle, unencoded) {
      formatValues[0].innerHTML = "Price: " + "$" + values[0];
      formatValues[1].innerHTML = "$" + values[1];
    });
  }
}
priceslider();

// Dashboard-switch-----------------------------------
function switchDashboard() {
  const toggleBtn = document.querySelector(".switch-icon");
  toggleBtn.classList.toggle("active");
}

// modal-------------------------------------------
function modalAction(elemnt) {
  const moalMain = document.querySelector(elemnt);
  if (moalMain.classList.contains("active")) {
    moalMain.classList.remove("active");
  } else {
    moalMain.classList.add("active");
  }
}

// image-uploader

let uploadImg = document.querySelector("#upload-img");
let inputFile = document.querySelector("#input-file");
if (inputFile) {
  inputFile.onchange = function () {
    uploadImg.src = URL.createObjectURL(inputFile.files[0]);
  };
}

// image-uploader-2
let coverImg = document.querySelector("#cover-img");
let coverFile = document.querySelector("#cover-file");
if (coverFile) {
  coverFile.onchange = function () {
    coverImg.src = URL.createObjectURL(coverFile.files[0]);
  };
}

// countdown.js - Phiên bản cải tiến
function CountDown(endDate, options = {}) {
  // Các phần tử DOM
  const selectDay = document.getElementById("day");
  const selectHour = document.getElementById("hour");
  const selectMinute = document.getElementById("minute");
  const selectSecond = document.getElementById("second");
  
  // Kiểm tra phần tử DOM tồn tại
  if (!selectDay || !selectHour || !selectMinute || !selectSecond) return;

  // Cấu hình mặc định
  const defaults = {
    expiredText: 'Flash Sale đã kết thúc!',
    onExpired: null,
    onTick: null,
    leadingZero: true
  };
  
  const config = {...defaults, ...options};

  // Hàm định dạng số với số 0 đứng đầu
  const formatNumber = num => config.leadingZero && num < 10 ? `0${num}` : num;

  // Hàm cập nhật giao diện
  const updateDisplay = (days, hours, minutes, seconds) => {
    selectDay.textContent = formatNumber(days);
    selectHour.textContent = formatNumber(hours);
    selectMinute.textContent = formatNumber(minutes);
    selectSecond.textContent = formatNumber(seconds);
    
    // Thêm hiệu ứng khi số thay đổi
    [selectDay, selectHour, selectMinute, selectSecond].forEach(el => {
      el.classList.add('tick');
      setTimeout(() => el.classList.remove('tick'), 500);
    });
  };

  // Hàm xử lý khi hết giờ
  const handleExpired = () => {
    const flashSaleContent = document.querySelector('.flash-sale-content');
    if (flashSaleContent) {
      flashSaleContent.innerHTML = `
        <h2 class="wrapper-heading">Flash Sale đã kết thúc</h2>
        <p class="wrapper-details">Hãy theo dõi để không bỏ lỡ chương trình tiếp theo!</p>
      `;
    }
    
    if (typeof config.onExpired === 'function') {
      config.onExpired();
    }
  };

  // Tính toán thời gian
  const calculateTime = () => {
    const now = new Date();
    const targetDate = new Date(endDate);
    const distance = targetDate - now;

    if (distance <= 0) {
      clearInterval(timer);
      handleExpired();
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    updateDisplay(days, hours, minutes, seconds);
    
    if (typeof config.onTick === 'function') {
      config.onTick({days, hours, minutes, seconds, distance});
    }
  };

  // Khởi chạy ngay lập tức để tránh delay ban đầu
  calculateTime();
  
  // Cập nhật mỗi giây
  const timer = setInterval(calculateTime, 1000);

  // Trả về hàm clear để có thể dừng khi cần
  return () => clearInterval(timer);
}

// Khởi tạo bộ đếm ngược với ngày kết thúc
// Thời gian mặc định là 24 giờ từ thời điểm hiện tại
const defaultEndDate = new Date();
defaultEndDate.setDate(defaultEndDate.getDate() + 1); // 1 ngày sau

const clearCountdown = CountDown(defaultEndDate.toISOString(), {
  onExpired: () => {
    console.log('Flash Sale đã kết thúc!');
    // Có thể thêm các hành động khác khi hết giờ
  },
  onTick: (time) => {
    // console.log('Time remaining:', time);
    // Có thể thêm hiệu ứng khi thời gian sắp hết
    if (time.hours === 0 && time.minutes < 30) {
      document.querySelector('.countdown-section').classList.add('urgent');
    }
  }
});

// Nếu cần dừng bộ đếm ngược (ví dụ khi chuyển trang)
// clearCountdown();
const endDate = new Date();
endDate.setDate(endDate.getDate() + 1); // 3 ngày sau
CountDown(endDate.toISOString());




// Function to load cart data
function loadCart() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartContainer = document.getElementById('cart-container');
    if (cartContainer) {
        cartContainer.innerHTML = '';
        if (cart.length === 0) {
            cartContainer.innerHTML = '<p>Giỏ hàng trống</p>';
        } else {
            cart.forEach(item => {
                const itemElement = document.createElement('div');
                itemElement.innerHTML = `
                    <p>${item.name} - ${item.price} VNĐ</p>
                `;
                cartContainer.appendChild(itemElement);
            });
        }
    }
}
 // Load cart data on cart page
if (window.location.pathname.endsWith('cart.html')) {
    loadCart();
}

// Load cart data on checkout page
if (window.location.pathname.endsWith('checkout.html')) {
    const checkoutCart = JSON.parse(localStorage.getItem('checkout')) || [];
    const checkoutContainer = document.getElementById('checkout-container');
    if (checkoutContainer) {
        checkoutCart.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.innerHTML = `<p>${item.name} - ${item.price} VNĐ</p>`;
            checkoutContainer.appendChild(itemElement);
        });
    }
}

// Function to transfer cart to checkout
function checkout() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (cart.length === 0) {
        alert("Giỏ hàng đang trống. Vui lòng thêm sản phẩm trước khi thanh toán.");
        return;
    }
    localStorage.setItem('checkout', JSON.stringify(cart)); // Lưu giỏ hàng sang key 'checkout'
    window.location.href = 'checkout.html'; // Chuyển hướng sang trang checkout
}
// Function to load checkout data
function loadCheckout() {
    const checkoutCart = JSON.parse(localStorage.getItem('checkout')) || [];
    const checkoutContainer = document.getElementById('checkout-container');
    if (checkoutContainer) {
        checkoutContainer.innerHTML = ''; // Xóa nội dung cũ nếu có
        if (checkoutCart.length === 0) {
            checkoutContainer.innerHTML = '<p>Không có sản phẩm nào trong giỏ hàng để thanh toán.</p>';
        } else {
            checkoutCart.forEach(item => {
                const itemElement = document.createElement('div');
                itemElement.innerHTML = `
                    <p>${item.name} - ${item.price} VNĐ</p>
                `;
                checkoutContainer.appendChild(itemElement);
            });
        }
    }
}

// Load checkout data on checkout page
if (window.location.pathname.endsWith('checkout.html')) {
    loadCheckout();
}