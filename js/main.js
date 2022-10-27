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

let containerMain = document.querySelector('.container_main'),
    fixedBar = document.querySelector('.fixed__bar');

if (screen.width > 1199) {
  addEventListener('scroll',()=>{
    if(window.pageYOffset > containerMain.offsetHeight ){
        fixedBar.classList.add("show__bar");
        fixedBar.classList.add("animate__show__bar");
        fixedBar.classList.remove("animate__hide__bar");
    } else{

      setTimeout(()=>{fixedBar.classList.remove("show__bar");},300)
        fixedBar.classList.remove("animate__show__bar");
        fixedBar.classList.add("animate__hide__bar");

    }

})
}
popupShow(fixedBar,menu__popup);
 let mainDot = document.querySelectorAll(".main_dot");
 let sliderOverflow = document.querySelector(".container_main__overflow");
 let parallax = document.querySelectorAll('.parallax');
 window.addEventListener('scroll',(e)=>{
     let offset = window.pageYOffset;
     parallax.forEach((item)=>{
         item.style.backgroundPositionY = offset * .3 + "px";
     });
 })
 mainDot.forEach((item,i)=>{
     if(item){
         item.addEventListener('click',(e)=>{
             console.log(e.target +"+"+ item[i])
             sliderOverflow.style.transform = `translateX(-1920 + ${item[i] + 1}px)`;
         })
     }
 })


 function SliderMain(){
  let slider = document.querySelector('.container_main'),
  sliderList = slider.querySelector('.slider'),
  sliderTrack = slider.querySelector('.container_main__overflow'),
  slides = slider.querySelectorAll('.parallax'),
  arrows = slider.querySelector('.slider-arrows'),
  prev = arrows.children[0],
  next = arrows.children[1],
  slideWidth = slides[0].offsetWidth,
  slideIndex = 0,
  posInit = 0,
  posX1 = 0,
  posX2 = 0,
  posY1 = 0,
  posY2 = 0,
  posFinal = 0,
  isSwipe = false,
  isScroll = false,
  allowSwipe = true,
  transition = true,
  nextTrf = 0,
  prevTrf = 0,
  lastTrf = --slides.length * slideWidth,
  posThreshold = slides[0].offsetWidth * 0.15,
  trfRegExp = /([-0-9.]+(?=px))/,
  swipeStartTime,
  swipeEndTime,
  timeOutSlide = true,
  getEvent = function() {
    return (event.type.search('touch') !== -1) ? event.touches[0] : event;
  },
  slide = function() {
    if (transition) {
      sliderTrack.style.transition = 'transform 1s';
    }
    sliderTrack.style.transform = `translate3d(-${slideIndex * slideWidth}px, 0px, 0px)`;
    prev.classList.toggle('disabled', slideIndex === 0);
    next.classList.toggle('disabled', slideIndex === --slides.length);
  },
  swipeStart = function() {
    let evt = getEvent();
    if (allowSwipe) {
      swipeStartTime = Date.now();
      transition = true;
      nextTrf = (slideIndex + 1) * -slideWidth;
      prevTrf = (slideIndex - 1) * -slideWidth;
      posInit = posX1 = evt.clientX;
      posY1 = evt.clientY;
      sliderTrack.style.transition = '';
      document.addEventListener('touchmove', swipeAction);
      document.addEventListener('mousemove', swipeAction);
      document.addEventListener('touchend', swipeEnd);
      document.addEventListener('mouseup', swipeEnd);
      sliderList.classList.remove('grab');
      sliderList.classList.add('grabbing');
    }
  },
  swipeAction = function() {
    let evt = getEvent(),
      style = sliderTrack.style.transform,
      transform = +style.match(trfRegExp)[0];
    posX2 = posX1 - evt.clientX;
    posX1 = evt.clientX;
    posY2 = posY1 - evt.clientY;
    posY1 = evt.clientY;
    if (!isSwipe && !isScroll) {
      let posY = Math.abs(posY2);
      if (posY > 7 || posX2 === 0) {
        isScroll = true;
        allowSwipe = false;
      } else if (posY < 7) {
        isSwipe = true;
      }
    }
    if (isSwipe) {
      if (slideIndex === 0) {
        if (posInit < posX1) {
          setTransform(transform, 0);
          return;
        } else {
          allowSwipe = true;
        }
      }
      // запрет ухода вправо на последнем слайде
      if (slideIndex === --slides.length) {
        if (posInit > posX1) {
          setTransform(transform, lastTrf);
          return;
        } else {
          allowSwipe = true;
        }
      }
      if (posInit > posX1 && transform < nextTrf || posInit < posX1 && transform > prevTrf) {
        reachEdge();
        return;
      }
      sliderTrack.style.transform = `translate3d(${transform - posX2}px, 0px, 0px)`;
    }
  },
  swipeEnd = function() {
    posFinal = posInit - posX1;
    isScroll = false;
    isSwipe = false;
    document.removeEventListener('touchmove', swipeAction);
    document.removeEventListener('mousemove', swipeAction);
    document.removeEventListener('touchend', swipeEnd);
    document.removeEventListener('mouseup', swipeEnd);
    sliderList.classList.add('grab');
    sliderList.classList.remove('grabbing');
    if (allowSwipe) {
      swipeEndTime = Date.now();
      if (Math.abs(posFinal) > posThreshold || swipeEndTime - swipeStartTime < 100) {
        if (posInit < posX1) {
          slideIndex--;
        } else if (posInit > posX1) {
          slideIndex++;
        }
      }
      if (posInit !== posX1) {
        allowSwipe = false;
        slide();
      } else {
        allowSwipe = true;
      }
    } else {
      allowSwipe = true;
    }
    console.log(slideIndex)
    if (slideIndex == 0) {
      mainDot[0].classList.add('active');
      mainDot[1].classList.remove('active');
      mainDot[2].classList.remove('active');
    } else if(slideIndex == 1){
      mainDot[0].classList.remove('active');
      mainDot[1].classList.add('active');
      mainDot[2].classList.remove('active');
    }
    else if(slideIndex == 2){
      mainDot[0].classList.remove('active');
      mainDot[1].classList.remove('active');
      mainDot[2].classList.add('active');
    }
  },
  setTransform = function(transform, comapreTransform) {
    if (transform >= comapreTransform) {
      if (transform > comapreTransform) {
        sliderTrack.style.transform = `translate3d(${comapreTransform}px, 0px, 0px)`;
      }
    }
    allowSwipe = false;
  },
  reachEdge = function() {
    transition = false;
    swipeEnd();
    allowSwipe = true;
  };
sliderTrack.style.transform = 'translate3d(0px, 0px, 0px)';
sliderList.classList.add('grab');
sliderTrack.addEventListener('transitionend', () => allowSwipe = true);
slider.addEventListener('touchstart', swipeStart);
slider.addEventListener('mousedown', swipeStart);
arrows.addEventListener('click', function(event) {
  let target = event.target;
  console.log('target');
  if (target.classList.contains('next')) {
    console.log('next')
    slideIndex++;


  } else if (target.classList.contains('prev')) {
    slideIndex--;
  } else {
    return;
  }
  slide();
});
document.addEventListener('mousedown',(e)=>{
  timeOutSlide = false;
// console.log('down' + timeOutSlide)


})
  document.addEventListener('mouseup', ()=>{
    timeOutSlide = true;
    // console.log('up')
  })
  document.addEventListener('touchstart',(e)=>{
    timeOutSlide = false;
  // console.log('down' + timeOutSlide)


  })
    document.addEventListener('touchend', ()=>{
      timeOutSlide = true;
      // console.log('up')
    })
function slideshowSlider(params) {
  if(timeOutSlide === true){
    // console.log('yes');
    if (slideIndex < 2) {
      slideIndex++;
      slide();
    }else{
      slideIndex = 0;
      slide();
    }
    if (slideIndex == 0) {
      mainDot[0].classList.add('active');
      mainDot[1].classList.remove('active');
      mainDot[2].classList.remove('active');
    } else if(slideIndex == 1){
      mainDot[0].classList.remove('active');
      mainDot[1].classList.add('active');
      mainDot[2].classList.remove('active');
    }
    else if(slideIndex == 2){
      mainDot[0].classList.remove('active');
      mainDot[1].classList.remove('active');
      mainDot[2].classList.add('active');
    }
    // console.log(slideIndex)
    // console.log(timeOutSlide)

}
}

setInterval(slideshowSlider,4000)


// setInterval(() => {

//   console.log('yes');
//   if (slideIndex < 2) {
//     slideIndex++;
//     slide();
//   }else{
//     slideIndex = 0;
//     slide();
//   }
//   if (slideIndex == 0) {
//     mainDot[0].classList.add('active');
//     mainDot[1].classList.remove('active');
//     mainDot[2].classList.remove('active');
//   } else if(slideIndex == 1){
//     mainDot[0].classList.remove('active');
//     mainDot[1].classList.add('active');
//     mainDot[2].classList.remove('active');
//   }
//   else if(slideIndex == 2){
//     mainDot[0].classList.remove('active');
//     mainDot[1].classList.remove('active');
//     mainDot[2].classList.add('active');
//   }
//   console.log(slideIndex)


// }, 4000);

function mainDotSlide() {
  mainDot[0].addEventListener('click',(e)=>{
    slideIndex = 0;
    slide();
    mainDot[0].classList.add('active');
    mainDot[1].classList.remove('active');
    mainDot[2].classList.remove('active');
    return slideIndex;
  })
  mainDot[1].addEventListener('click',(e)=>{
    slideIndex = 1;
    slide();
    mainDot[0].classList.remove('active');
    mainDot[1].classList.add('active');
    mainDot[2].classList.remove('active');
    return slideIndex;
  })
  mainDot[2].addEventListener('click',(e)=>{
    slideIndex = 2;
    slide();
    mainDot[0].classList.remove('active');
    mainDot[1].classList.remove('active');
    mainDot[2].classList.add('active');
    return slideIndex;
  })

}
mainDotSlide();
(function(){

window.addEventListener('scroll', scrollHandler, false);
window.addEventListener('touchmove', scrollHandler, false);
window.addEventListener('mousewheel', scrollHandler, false);

function scrollHandler(e) {
 var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
 console.log(scrollTop);
 if(scrollTop > 500) { // после 500px scroll не реагирует
    e.preventDefault();
    e.stopPropagation();
    console.log('stop')
    return false;
}
}  })
 }
 SliderMain()