function sliderNature(sliderItem,sliderListItem,sliderTrackItem,slidesItem,arrowsItem) {
    let padding;
    if (screen.width < 1201) {
        padding = 15;
      }else{
        padding = 30;
      };
    // let slider = document.querySelector('.container__nature__slider'),
    // sliderList = slider.querySelector('.container_nature__overflow'),
    // sliderTrack = slider.querySelector('.slider-track'),
    // slides = slider.querySelectorAll('.nature__slide'),
    // arrows = slider.querySelector('.container__nature__slider__dots '),
    let slider = document.querySelector(`${sliderItem}`),
    sliderList = slider.querySelector(`${sliderListItem}`),
    sliderTrack = slider.querySelector(`${sliderTrackItem}`),
    slides = slider.querySelectorAll(`${slidesItem}`),
    arrows = slider.querySelector(`${arrowsItem}`),
    prev = arrows.children[0],
    next = arrows.children[1],
    slideWidth = slides[0].offsetWidth + padding,
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
    posThreshold = slides[0].offsetWidth * 0.35,
    trfRegExp = /([-0-9.]+(?=px))/,
    swipeStartTime,
    swipeEndTime,
    getEvent = function() {
      return (event.type.search('touch') !== -1) ? event.touches[0] : event;
    },
    slide = function() {
      if (transition) {
        sliderTrack.style.transition = 'transform .5s';
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
        if (slideIndex === (slides.length = slides.length -2)) {
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
      console.log(slideIndex)

      if (allowSwipe) {
        swipeEndTime = Date.now();
        if (Math.abs(posFinal) > posThreshold || swipeEndTime - swipeStartTime < 300) {
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

    if (target.classList.contains('next') && !(slideIndex === (slides.length = slides.length -2))) {



        slideIndex++;


    } else if (target.classList.contains('prev')) {
      slideIndex--;
    } else {
      return;
    }

    slide();
  });
}
sliderNature('.container__nature__slider','.container_nature__overflow','.slider-track','.nature__slide','.container__nature__slider__dots ');

function infoHTML() {
  if (screen.width < 1536) {
    let sliderTrack = document.querySelector(".container__hotel-info__fb__block__overflow__slider-track"),
    sliderTrackSb = document.querySelector(".container__hotel-info__sb__block__overflow__slider-track"),
        sliderItem = document.querySelectorAll(".container__hotel-info__fb__block__overflow__slider");
        sliderTrack.innerHTML = `
        <div class="container__hotel-info__fb__block__overflow__slider">
        <img draggable="false"  src="./assets/img/Rectangle29-min.jpg" alt="Кровать в комнате">
    </div>
    <div class="container__hotel-info__fb__block__overflow__slider">
    <img draggable="false"  src="./assets/img/Rectangle32-min.jpg" alt="Диван в комнате">
    <img draggable="false"  src="./assets/img/Rectangle31-min.jpg" alt="Диван в комнате">
    </div>
    <div class="container__hotel-info__fb__block__overflow__slider">
        <img draggable="false"  src="./assets/img/Rectangle30-min.jpg" alt="Кровать в комнате">
    </div>
        `
        sliderTrackSb.innerHTML =`

        <div class="container__hotel-info__sb__block__overflow__slider">
        <img  draggable="false" src="./assets/img/Rectangle322-min.jpg" alt="Кровать в комнате">
        </div>
        <div class="container__hotel-info__sb__block__overflow__slider">
        <img  draggable="false" src="./assets/img/Rectangle33-min.jpg" alt="Диван в комнате">
        <img draggable="false"  src="./assets/img/Rectangle34-min.jpg" alt="Кровать в комнате">
        </div>

    <div class="container__hotel-info__sb__block__overflow__slider">
        <img  draggable="false" src="./assets/img/Rectangle331-min.jpg" alt="Диван в комнате">
        <img  draggable="false" src="./assets/img/Rectangle38-min.jpg" alt="Диван в комнате">
    </div>
    <div class="container__hotel-info__sb__block__overflow__slider">
        <img  draggable="false" src="./assets/img/Rectangle37-min.jpg" alt="Кровать в комнате">
    </div>
    <div class="container__hotel-info__sb__block__overflow__slider">
        <img draggable="false"  src="./assets/img/Rectangle39-min.jpg" alt="Кровать в комнате">
    </div>
    <div class="container__hotel-info__sb__block__overflow__slider">
        <img draggable="false"  src="./assets/img/Rectangle401-min.jpg" alt="Диван в комнате">
        <img draggable="false"  src="./assets/img/Rectangle43-min.jpg" alt="Диван в комнате">
    </div>
    <div class="container__hotel-info__sb__block__overflow__slider">
        <img draggable="false"  src="./assets/img/Rectangle42-min.jpg" alt="Кровать в комнате">
    </div>
        `

  }else{

  };
}
infoHTML();
function sliderInfo(sliderItem,sliderListItem,sliderTrackItem,slidesItem,arrowsItem) {
  let padding;
  if (screen.width < 1199) {
      padding = 15;
    }else{
      padding = 0;
    };
  // let slider = document.querySelector('.container__nature__slider'),
  // sliderList = slider.querySelector('.container_nature__overflow'),
  // sliderTrack = slider.querySelector('.slider-track'),
  // slides = slider.querySelectorAll('.nature__slide'),
  // arrows = slider.querySelector('.container__nature__slider__dots '),
      // let slider = document.querySelector('.container__hotel-info__fb'),
      // sliderList = slider.querySelector('.container__hotel-info__fb__block__overflow'),
      // sliderTrack = slider.querySelector('.container__hotel-info__fb__block__overflow__slider-track'),
      // slides = slider.querySelectorAll('.container__hotel-info__fb__block__overflow__slider'),
      // arrows = slider.querySelector('.container__hotel-info__fb__block__dots'),
  let slider = document.querySelector(`${sliderItem}`),
  sliderList = slider.querySelector(`${sliderListItem}`),
  sliderTrack = slider.querySelector(`${sliderTrackItem}`),
  slides = slider.querySelectorAll(`${slidesItem}`),
  arrows = slider.querySelector(`${arrowsItem}`),

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
  posThreshold = slides[0].offsetWidth * 0.35,
  trfRegExp = /([-0-9.]+(?=px))/,
  swipeStartTime,
  swipeEndTime,
  getEvent = function() {
    return (event.type.search('touch') !== -1) ? event.touches[0] : event;
  },
  slide = function() {
    if (transition) {
      sliderTrack.style.transition = 'transform .5s';
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
      if (slideIndex === (slides.length = slides.length -1)) {
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
      if (Math.abs(posFinal) > posThreshold || swipeEndTime - swipeStartTime < 300) {
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

  if (target.classList.contains('next') && !(slideIndex === (slides.length = slides.length - 1 ))) {



      slideIndex++;


  } else if (target.classList.contains('prev')) {
    slideIndex--;
  } else {
    return;
  }

  slide();
});
}
sliderInfo('.container__hotel-info__fb','.container__hotel-info__fb__block__overflow','.container__hotel-info__fb__block__overflow__slider-track','.container__hotel-info__fb__block__overflow__slider','.container__hotel-info__fb__block__dots');
sliderInfo('.container__hotel-info__sb','.container__hotel-info__sb__block__overflow','.container__hotel-info__sb__block__overflow__slider-track','.container__hotel-info__sb__block__overflow__slider','.container__hotel-info__sb__block__dots');




      function slideShow() {
        let slideItems = document.querySelectorAll('.container__hotel-gallery__slide');
        let transForm = 0;
        let arr = [];
        let index = 0;
        let ind = index;
        let timeInterval = 1000;
        // element.style.transition = 'transform linear 3.2s'
        function arrayStart() {
          for (let i = 0; i < slideItems.length; i++) {
            arr.push(slideItems[i]);
         };
        };
        arrayStart()

      function timer() {
        let k=7;//шаг
        for (; k < 8;k++) {
          for(i=0;i<k;i++){
            arr.push(arr.shift())
           };
        }
        moveSlide();
      }
      function moveSlide() {

        for (ind = 0; ind < arr.length; ind++) {
          const element = arr[ind];
          transForm = ind * (element.offsetWidth);
          // console.log(ind)
          if (ind == 0 || ind == arr.length ) {
            element.style.opacity = "0";
          }else{
            element.style.opacity = "1";
          }

          element.style.transform = `translate3d(${transForm}px, 0px ,0)`;

        }
      }
      moveSlide();
      timeInterval = 3000;
      setInterval(timer,timeInterval)
      setTimeout( (e)=>{slideItems.forEach((element)=>{
        element.style.transition = 'transform linear 3.1s'
      })},0)


      //  window.addEventListener('scroll',(e)=>{
      //   // setInterval(timer,timeInterval)
      //   if(e.target){

      //     c++;
      //     //  timeInterval = 700;
      //      console.log(timeInterval);
      //      if (c == c + 25) {

      //      }
      //     //
      //    }
      //    return timeInterval;
      //  })
      }
      slideShow();
      function slideShowText() {
        let slideItems = document.querySelectorAll('.container__hotel-benefits__block_head');
        let transForm = 0;
        let arr = [];
        let index = 0;
        let ind = index;
        let timeInterval = 8000;

        function arrayStart() {
          for (let i = 0; i < slideItems.length; i++) {
            arr.push(slideItems[i]);
         };
        };
        arrayStart()

      function timer() {
        let k=7;//шаг

        for (; k < 9;k++) {

          // console.log(k + "d")

          for(i=0;i<k;i++){
            arr.unshift(arr.pop())
            // console.log(arr)
            // moveSlide()



           };
        }
        moveSlide()
        //  console.log(arr);
      }
      function moveSlide() {

        for (ind = 0; ind < arr.length; ind++) {
          const element = arr[ind];
          transForm = ind * (element.offsetWidth + 30);
          // console.log(ind)
          if (ind == 0 || ind == 1 || ind == arr.length || ind == (arr.length - 1) ) {
            element.style.opacity = "0";
          }else{
            element.style.opacity = "1";
          }
          element.style.transition = 'transform linear 8s'
          element.style.transform = `translate3d(${transForm}px, 0px ,0)`;

        }
      }
      // timeInterval = 4000;
      timer();
      setInterval(timer,timeInterval)
      //  window.addEventListener('scroll',(e)=>{
      //   // setInterval(timer,timeInterval)
      //   if(e.target){

      //     c++;
      //     //  timeInterval = 700;
      //      console.log(timeInterval);
      //      if (c == c + 25) {

      //      }
      //     //
      //    }
      //    return timeInterval;
      //  })
      }
      slideShowText();