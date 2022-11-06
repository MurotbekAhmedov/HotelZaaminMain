let popup = document.querySelector(".header__menu__bar"),
    menu__popup = document.querySelector(".menu__popup");
let html = document.querySelector('html'),
    menu_link = document.querySelectorAll('.menu_link');
function popupShow(popupBlock, menuPopup) {
    popupBlock.addEventListener('click',(e)=>{
        if(popupBlock.classList.contains('show__menu')){

            setTimeout(()=>{   popupBlock.classList.remove("show__menu");}, 800);

            menuPopup.classList.remove("animate__show");
            html.style.overflow = 'visible';
            setTimeout(()=>{  menuPopup.classList.remove("show__popup");}, 800);
        }else{
          html.style.overflow = 'hidden';
            popupBlock.classList.add("show__menu");
           
            menuPopup.classList.add("show__popup");
            setTimeout(()=>{menuPopup.classList.add("animate__show")}, 0);
        }


    })
    menu_link.forEach((item)=>{
      item.addEventListener('click',(e)=>{
        setTimeout(()=>{   popupBlock.classList.remove("show__menu");}, 800);
        menuPopup.classList.remove("animate__show");
        html.style.overflow = 'visible';
        setTimeout(()=>{  menuPopup.classList.remove("show__popup");}, 800);
    })})
}
popupShow(popup,menu__popup);
function parallax() {
    let parallax = document.querySelectorAll(`.parallax`);
    let parrent = document.querySelector(`.container_main`);
    parallax.forEach((item)=>{
        item.style.backgroundPositionY = window.pageYOffset * .1 + "px";
      //  console.log(offset)
   });
 window.addEventListener('scroll',(e)=>{
     let offset = window.pageYOffset - parrent.offsetTop;
     parallax.forEach((item)=>{
          item.style.backgroundPositionY = offset * .2 + "px";
        //  console.log(offset)
     });
 })
}
parallax();
function parallaxT() {
    let parallax = document.querySelectorAll(`.nature-parallax`);
    let parrent = document.querySelector(`.container_nature`);
 window.addEventListener('scroll',(e)=>{
     let offset = window.pageYOffset - parrent.offsetTop;
     parallax.forEach((item)=>{
          item.style.backgroundPositionY = offset * .2 + "px";
        //  console.log(offset)
     });
 })
}

function parallaxTH() {
    let parallax = document.querySelectorAll(`.container__hotel-benefits__picture__overflow`);
    let parrent = document.querySelector(`.container__hotel-benefits`);
 window.addEventListener('scroll',(e)=>{
     let offset = window.pageYOffset - parrent.offsetTop;
     parallax.forEach((item)=>{
          item.style.backgroundPositionY = offset * .14 + "px";
        //  console.log(offset)
     });
 })
}
parallax();
parallaxT();
parallaxTH();
if (screen.width < 1199) {
    function parallax() {
        let parallax = document.querySelectorAll(`.parallax`);
        let parrent = document.querySelector(`.container_main`);
     window.addEventListener('scroll',(e)=>{
         let offset = window.pageYOffset - parrent.offsetTop;
         parallax.forEach((item)=>{
              item.style.backgroundPositionY = offset * .3 + "px";
            //  console.log(offset)
         });
     })
    }
    parallax();
    function parallaxT() {
        let parallax = document.querySelectorAll(`.nature-parallax`);
        let parrent = document.querySelector(`.container_nature`);
     window.addEventListener('scroll',(e)=>{
         let offset = window.pageYOffset - parrent.offsetTop;
         parallax.forEach((item)=>{
              item.style.backgroundPositionY = offset * .0 + "px";
            //  console.log(offset)
         });
     })
    }

    function parallaxTH() {
        let parallax = document.querySelectorAll(`.container__hotel-benefits__picture__overflow`);
        let parrent = document.querySelector(`.container__hotel-benefits`);
     window.addEventListener('scroll',(e)=>{
         let offset = window.pageYOffset - parrent.offsetTop;
         parallax.forEach((item)=>{
              item.style.backgroundPositionY = offset * .05 + "px";
             console.log(parrent.offsetTop + "a"+ window.pageYOffset)
         });
     })
    }

    parallax();
    parallaxT();
    parallaxTH();
  }else{

  };
  window.addEventListener("DOMContentLoaded", function(){
    let popupClose = document.querySelector(".popup_order__close"),
    popupBody = document.querySelector(".popup_order__body"),
    popupContainer = document.querySelector(".popup_order"),
    popupShow = document.querySelectorAll(".popup__show");

    function popupCloseEvent(){
      popupContainer.classList.add("hide_order")
      popupContainer.classList.remove("show_order")
      setTimeout(() =>{ popupBody.classList.remove("show")},100)
      setTimeout(() =>{popupContainer.style.display = "none"},800)

    }
    if (!popupContainer) return;
    function popupEvent(params) {
      popupShow.forEach((item)=>{
        item.addEventListener("click",(e)=>{
          popupContainer.style.display = "block";
          setTimeout(() =>{ popupContainer.classList.remove("hide_order")},100)
          setTimeout(() =>{ popupContainer.classList.add("show_order")},200)
          setTimeout(() =>{ popupBody.classList.add("show")},200);


        })
      })

      popupClose.addEventListener("click", (e) => {

        popupCloseEvent()


      })
    }
    popupEvent();
  });
// parallax('nature-parallax', 'container__nature')