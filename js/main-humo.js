let popup = document.querySelector(".header__menu__bar"),
    menu__popup = document.querySelector(".menu__popup");
function popupShow(popupBlock, menuPopup) {
    popupBlock.addEventListener('click',(e)=>{
        if(popupBlock.classList.contains('show__menu')){
            // popupBlock.classList.remove("show__menu");
            setTimeout(()=>{   popupBlock.classList.remove("show__menu");}, 800);
            // menu__popup.classList.remove("show__popup");
            menuPopup.classList.remove("animate__show");
            setTimeout(()=>{  menuPopup.classList.remove("show__popup");}, 800);
        }else{
            popupBlock.classList.add("show__menu");
            menuPopup.classList.add("show__popup");
            setTimeout(()=>{menuPopup.classList.add("animate__show")}, 0);
        }


    })

}
popupShow(popup,menu__popup);
function parallax() {
    let parallax = document.querySelectorAll(`.parallax`);
    let parrent = document.querySelector(`.container_main`);
 window.addEventListener('scroll',(e)=>{
     let offset = window.pageYOffset - parrent.offsetTop;
     parallax.forEach((item)=>{
          item.style.backgroundPositionY = offset * .1 + "px";
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
          item.style.backgroundPositionY = offset * .14 + "px";
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
// parallax('nature-parallax', 'container__nature')