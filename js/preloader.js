var images = document.images,
images_total_count = images.length,
images_loaded_count = 0;
const load = document.querySelector(".load");
for(var i = 0; i < images_total_count; i++){
  image_clone=new Image();
  image_clone.onload = image_loaded;
  image_clone.onerror = image_loaded;
  image_clone.src = images[i].src;


 console.log(i)
}

setInterval((e)=>{
    let count = Math.round((((100/images_total_count)* images_loaded_count) ));
    count++;
    if (count > 100) {
        count =100;
        load.style.transition = "all ease 1s"
    }
    load.innerHTML = `${count}`;},10)

function image_loaded(){
  images_loaded_count++;
   let count = (((100/images_total_count)* images_loaded_count) );
//   load.innerHTML = `${count}`;

  if( images_loaded_count >= images_total_count){
    // count = 100;
    load.innerHTML = `${count}`;
    console.log(count)
    console.log(images_loaded_count)
    console.log( images_total_count)

  }
}
// image_loaded();
 window.addEventListener('DOMContentLoaded', () =>{
//  const load = document.querySelector(".load");
//  load.style.width ="20%";
 })
 window.addEventListener("load", () => {

//    const load = document.querySelector(".load");
 const preloaders = document.getElementById("preloader");
//  function disableScrolling(){
//  var x=window.deltaX;
//  var y=window.deltaY;
//  window.onscroll=function(){window.scrollTo(x, y);};
//  }
//  disableScrolling()
//  function enableScrolling(){
//  window.onscroll=function(){};
//  }
//  load.style.width ="100%"
 setTimeout(function () {
 preloaders.classList.add("hide");
//  enableScrolling()
 }, 1000);
 setTimeout(function () {
 preloaders.classList.add("display-hide");
 preloaders.classList.remove('show')
 preloaders.classList.remove('hide')

 }, 2000);
 });
