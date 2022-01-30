
// Navigation Bar
let nav = document.querySelector(".navbar");
window.addEventListener("scroll", ()=>{
  if(document.documentElement.scrollTop > 20){
    nav.classList.add("nav-sticky")
  }else{
    nav.classList.remove("nav-sticky")
  }
});


// Toasts - Cửa sổ pop up
var toastTrigger = document.getElementById('liveToastBtn')
var toastLiveExample = document.getElementById('liveToast')
if (toastTrigger) {
  toastTrigger.addEventListener('click', function () {
    var toast = new bootstrap.Toast(toastLiveExample)

    toast.show()
  })
}

// Modal Send Email - Cửa sổ send email
var exampleModal = document.getElementById('exampleModal')
exampleModal.addEventListener('show.bs.modal', function (event) {
  // Button that triggered the modal
  var button = event.relatedTarget
  // Extract info from data-bs-* attributes
  var recipient = button.getAttribute('data-bs-whatever')
  // If necessary, you could initiate an AJAX request here
  // and then do the updating in a callback.
  //
  // Update the modal's content.
  var modalTitle = exampleModal.querySelector('.modal-title')
  var modalBodyInput = exampleModal.querySelector('.modal-body input')

  modalTitle.textContent = 'Gửi đóng góp đến cho ' + recipient
  modalBodyInput.value = recipient
})

// Thông báo gửi đóng góp thành công
var alertPlaceholder = document.getElementById('liveAlertPlaceholder')
var alertTrigger = document.getElementById('liveAlertBtn')

function alert(message, type) {
  var wrapper = document.createElement('div')
  wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'

  alertPlaceholder.append(wrapper)
}

if (alertTrigger) {
  alertTrigger.addEventListener('click', function () {
    alert('Cảm ơn bạn vì những đóng góp hữu ích ^^!!!', 'success')
  })
}

// Tooltips 
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})


// Navbar thu nho khi scroll
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("navbar").style.fontSize = "15px";
  } else {
    document.getElementById("navbar").style.fontSize = "22px";
  }
}

//dảk mode
let toggle_times = 0
function darkmode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
  toggle_times += 1;
  if (toggle_times % 2 == 0) {
    document.getElementById("news-vn-title").style.color = "var(--main-color-darkgray)";
    // document.getElementById("world-news-title").style.color = "var(--main-color-darkgray)";
    // lightmode_element("news-box");
    // lightmode_element("vn-news-box-2")
    // lightmode_element("vn-news-box-3")
    // lightmode_element("vn-news-box-4")
    console.log("light mode");
  } else {
    darkmode_element("news-vn-title");
    // document.getElementById("news-box").style.color = "white";
    // document.getElementById("news-box").style.color = "#243238";
    // Viet Nam news
    darkmode_element("vn-news-box-1");
    darkmode_element("vn-news-box-2");
    darkmode_element("vn-news-box-3");
    darkmode_element("vn-news-box-4");
    // quoc te news
    darkmode_element("world-news-box-1");
    darkmode_element("world-news-box-2");
    darkmode_element("world-news-box-3");
    darkmode_element("world-news-box-4");
    //video news
    darkmode_element("video-news-box-1");
    darkmode_element("video-news-box-2");
    darkmode_element("video-news-box-3");
    darkmode_element("video-news-box-4");

    // darkmode_element("news-title")
    console.log("dark mode")
  }
}

function darkmode_element (element) {
  document.getElementById(element).style.color = "white"
  document.getElementById(element).style.backgroundColor = "#243238"
}

function lightmode_element (element) {
  document.getElementById(element).style.color = "Black"
  document.getElementById(element).style.backgroundColor = "white"
}

