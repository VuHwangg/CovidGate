
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
if (toastTrigger5) {
  toastTrigger5.addEventListener('click', function () {
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
