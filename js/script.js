
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

var scrollSpy = new bootstrap.ScrollSpy(document.body, {
  target: '#navbar-example'
})

// Modal Send Email - Cửa sổ send email
var sendMailModal = document.getElementById('send-mail-modal')
sendMailModal.addEventListener('show.bs.modal', function (event) {
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
