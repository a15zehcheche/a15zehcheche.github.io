console.log("init");

$('document').ready(function () {

  const slider = $('.mapcontainer');
  let isDown = false;
  let startX;
  let startY
  let scrollLeft;
  let scrollTop;

  slider.mouseup(function () {
    isDown = false;

  }).mousedown(function (e) {
    isDown = true;
    //holizontal
    startX = e.pageX - slider.offset().left;
    scrollLeft = slider.scrollLeft();
    //vectial
    startY = e.pageY - slider.offset().top;
    scrollTop = slider.scrollTop();


  }).mousemove(function (e) {
    if (!isDown) return;
    e.preventDefault();
    //holizontal
    const x = e.pageX - slider.offset().left;
    const walkX = (x - startX) * 3; //scroll-fast
    slider.scrollLeft(scrollLeft - walkX)  //slider.scrollLeft =  scrollLeft - walk;
    //vectial
    const y =  e.pageY - slider.offset().top;
    const walkY = (y - startY) * 3; //scroll-fast
    slider.scrollTop(scrollTop - walkY) ;


  }).mouseleave(function () {
    isDown = false;
  })

  /*
  slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });
  slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
  });
  slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
  });
  slider.addEventListener('mousemove', (e) => {
    if(!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 3; //scroll-fast
    slider.scrollLeft = scrollLeft - walk;
    console.log( slider.scrollLeft);
    
  });*/


});
