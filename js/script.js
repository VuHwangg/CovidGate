
// Navigation Bar
let nav = document.querySelector(".navbar");
window.addEventListener("scroll", ()=>{
  if(document.documentElement.scrollTop > 20){
    nav.classList.add("nav-sticky")
  }else{
    nav.classList.remove("nav-sticky")
  }
});
<<<<<<< HEAD


=======
>>>>>>> 64a57f1c26366920e9b0207f9e55d131b10b10f5

// Toasts - Cửa sổ pop up
var toastTrigger1 = document.getElementById('liveToastBtn1')
var toastTrigger2 = document.getElementById('liveToastBtn2')
var toastTrigger3 = document.getElementById('liveToastBtn3')
var toastTrigger4 = document.getElementById('liveToastBtn4')
var toastTrigger5 = document.getElementById('liveToastBtn5')
var toastTrigger6 = document.getElementById('liveToastBtn6')
var toastLiveExample = document.getElementById('liveToast')
if (toastTrigger1) {
  toastTrigger1.addEventListener('click', function () {
    var toast = new bootstrap.Toast(toastLiveExample)

    toast.show()
  })
}
if (toastTrigger2) {
  toastTrigger2.addEventListener('click', function () {
    var toast = new bootstrap.Toast(toastLiveExample)

    toast.show()
  })
}
if (toastTrigger3) {
  toastTrigger3.addEventListener('click', function () {
    var toast = new bootstrap.Toast(toastLiveExample)

    toast.show()
  })
}
if (toastTrigger4) {
  toastTrigger4.addEventListener('click', function () {
    var toast = new bootstrap.Toast(toastLiveExample)

    toast.show()
  })
}
if (toastTrigger6) {
  toastTrigger6.addEventListener('click', function () {
    var toast = new bootstrap.Toast(toastLiveExample)

    toast.show()
  })
}

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
