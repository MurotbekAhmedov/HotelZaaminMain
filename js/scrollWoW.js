function WOW(){

  const animItems = document.querySelectorAll('._anim-items');

  if(animItems.length > 0){
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll(params) {
      for (let index = 0; index < animItems.length; index++) {
        const animItem = animItems[index];
        const animItemHeight = animItem.offsetHeight;
        const animItemOffset = offset(animItem).top;
        const animStart = 4;


        let animItemPoint = window.innerHeight - animItemHeight / animStart;

        if(animItemHeight > window.innerHeight){
          animItemPoint = window.innerHeight - window.innerHeight / animStart;

        }


       if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
         animItem.classList.add('_active_scroll');
       }
       else{
         if (!animItem.classList.contains('_anim-no-hide')) {
           animItem.classList.remove('_active')

         }

        }
      }
    }
      function offset(el) {
        const rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top:rect.top + scrollTop, left: rect.left + scrollLeft}

      }

      setTimeout(() => {
        animOnScroll();
      } , 300);


    }
}


    window.addEventListener("load", () => {
      const preloaders = document.getElementById("perexod");


      setTimeout(function () {
        if (screen.width > 1199) {
          WOW();
        }

      }, 2500);
    });
 function WOWHF(){

   const animItems = document.querySelectorAll('._anim-itemsHF');
   let wowItem = document.querySelector('.wow__item');
   if(animItems.length > 0){
     window.addEventListener('scroll', animOnScroll);
     function animOnScroll(params) {
       for (let index = 0; index < animItems.length; index++) {
         const animItem = animItems[index];
         const animItemHeight = animItem.offsetHeight;
         const animItemOffset = offset(animItem).top;
         const animStart = 1;
         let point = 0;


         let animItemPoint = window.innerHeight - animItemHeight / animStart;

         if(animItemHeight > window.innerHeight){
           animItemPoint = window.innerHeight - window.innerHeight / animStart;

         }


        if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight) ) {
          animItem.classList.add('_active_scrollHF');
        }
        else if( (pageYOffset - animItemOffset) > animItemHeight ){
          animItem.classList.remove('_active_scrollHF')
        }
         else{
          if (animItem.classList.contains('_anim-no-hideHF')) {
            animItem.classList.remove('_active_scrollHF')

          }

         }
        // else if((pageYOffset > (animItemOffset - animItemPoint)-500) ){
        //   if (!animItem.classList.contains('_anim-no-hideHF')) {
        //     animItem.classList.remove('_active_scrollHF')
        //     animItem.classList.add('_active_scrollHFback')

        //   }

        //  }
        if (animItem.classList.contains('_active_scrollHF')) {
          point = pageYOffset - animItemOffset;
          // wowItem.style.transform = `translateY(100px)`;
          wowItem.style.transform = `translateY(${-(pageYOffset - animItemOffset)/1}px)`;
          console.log( (pageYOffset - animItemOffset) +'   i   '+(window.innerHeight))
        }
         console.log( point+'asdsdasdas')
       }

     }
       function offset(el) {
         const rect = el.getBoundingClientRect(),
         scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
         scrollTop = window.pageYOffset || document.documentElement.scrollTop;
         return { top:rect.top + scrollTop, left: rect.left + scrollLeft}

       }

       setTimeout(() => {
         animOnScroll();
       } , 300);


     }
 }


     window.addEventListener("load", () => {
       const preloaders = document.getElementById("perexod");


       setTimeout(function () {
         if (screen.width > 1199) {
           WOWHF();
         }

       }, 2500);
     });
