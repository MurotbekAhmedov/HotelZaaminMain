window.addEventListener("DOMContentLoaded",()=>{


  let popupClose = document.querySelector(".popup_order__close"),
  popupBody = document.querySelector(".popup_order__body"),
  popupContainer = document.querySelector(".popup_order"),
  formAccept = document.querySelector(".form__accept"),
  formProcessed = document.querySelector(".form__processed"),
  popupShow = document.querySelector(".popup__show");

  function popupCloseEvent(){
    popupContainer.classList.add("hide_order")
    popupContainer.classList.remove("show_order")
    setTimeout(() =>{ popupBody.classList.remove("show")},100)
    setTimeout(() =>{popupContainer.style.display = "none"},800)
  }

   // Form

 const forma = document.getElementById("form"),
 formModal = document.getElementById("form__modal");
//  formCompany = document.getElementById("formCompany");
// function formModals(form){
//   form.addEventListener("submit", formSend);
//   //  formModal.addEventListener("submit", formSend);

//   async function formSend(e) {
//   e.preventDefault();
//   let error = formValidate(form);
//   let formData = new FormData(form);

//   if (error === 0) {
//     formProcessed.classList.add("active");
//   //  var object = {};
//   //  formData.forEach(function (value, key) {
//   //    object[key] = value;
//   //  });
//   //  var json = JSON.stringify(object);
//    let response = await fetch(
//      "sendmail.php",
//      {
//        method: "POST",

//        headers:{
//          'content-type':'application/json',
//        },
//        body: formData,
//      }
//    );

//    if (response.ok) {
//     formProcessed.classList.remove("active")
//     let result = await response.json();
//     formAccept.classList.add("active")
//     form.reset();
//     popupCloseEvent();
//     setTimeout(function () {formAccept.classList.remove("active")},2000)
//   } else {
//     alert("Ошибка");
//     popupCloseEvent();
//   }
//   } else {
//   alert("Заполните все обязательные поля!");

//   }
//   }
//   //  sendForm =formSend;

//   function formValidate(form) {
//   let error = 0;
//   let formReq = document.querySelectorAll("._requ");
//   for (let index = 0; index < formReq.length; index++) {
//    const input = formReq[index];
//    formRemoveError(input);
//    if (input.classList.contains("_emailen")) {
//      if (emailTest(input)) {
//        formAddError(input);
//        error++;
//      }
//    } else {
//      if (input.value === "") {
//        formAddError(input);
//        error++;
//      }
//    }
//   }
//   return error;
//   }

//   function formAddError(input) {
//   input.parentElement.classList.add("_error");
//   input.classList.add("_error");
//   }
//   function formRemoveError(input) {
//   input.parentElement.classList.remove("_error");
//   input.classList.remove("_error");
//   }

//   function emailTest(input) {
//   return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
//   }


//   }

//   formModals(formModal);
function formModals(form){
  form.addEventListener("submit", formSend);
  //  formModal.addEventListener("submit", formSend);

  async function formSend(e) {
  e.preventDefault();
  let error = formValidate(form);
  let formData = new FormData(form);

  if (error === 0) {
    formProcessed.classList.add("active");
   var object = {};
   formData.forEach(function (value, key) {
     object[key] = value;
   });
   var json = JSON.stringify(object);
   let response = await fetch(
     "https://humo.glitch.me/post",
     {
       method: "POST",

       headers:{
         'content-type':'application/json',
       },
       body: json,
     }
   );

   if (response.ok) {
    formProcessed.classList.remove("active")
    let result = await response.json();
    formAccept.classList.add("active")
    form.reset();
    popupCloseEvent();
    setTimeout(function () {formAccept.classList.remove("active")},2000)
  } else {
    alert("Ошибка");
    popupCloseEvent();
  }
  } else {
  alert("Заполните все обязательные поля!");

  }
  }
  //  sendForm =formSend;

  function formValidate(form) {
  let error = 0;
  let formReq = document.querySelectorAll("._requ");
  for (let index = 0; index < formReq.length; index++) {
   const input = formReq[index];
   formRemoveError(input);
   if (input.classList.contains("_emailen")) {
     if (emailTest(input)) {
       formAddError(input);
       error++;
     }
   } else {
     if (input.value === "") {
       formAddError(input);
       error++;
     }
   }
  }
  return error;
  }

  function formAddError(input) {
  input.parentElement.classList.add("_error");
  input.classList.add("_error");
  }
  function formRemoveError(input) {
  input.parentElement.classList.remove("_error");
  input.classList.remove("_error");
  }

  function emailTest(input) {
  return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
  }


  }

  formModals(formModal);

  })
