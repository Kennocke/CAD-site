"use strict";
window.addEventListener("load", function() {
  var btn = document.querySelectorAll('.but'), 
  three = document.querySelectorAll(".three")[0],
  btn2 = document.querySelectorAll('.button-prev, .button-next'),
  slider2 = document.querySelectorAll('.slider-window')[0];

  var count = 0;
  var count1 = 0;
  var count2 = 0, count3 = 0;

 // var runSlide = startSlide(2500);


  for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('mouseover', function() {
      btn[i].classList.add('but-1');
      if (i != count1) {
        btn[count1].classList.remove('but-1');  
      }
      //clearInterval(runSlide);
      three.className = 'three';
      three.classList.add('three-' + i);
      count = i;
      count1 = i;
      /*
      setTimeout(function() {
        runSlide = startSlide(1000)
      }, 1000)*/
    
    });
 }
  /*
  function startSlide(time) {
    return setInterval(function() {
      if (count == btn.length) {
        count = 0;
      }
      three.className = 'three';
      three.classList.add('three-' + count);
      count++;
    }, time || 1000);
  }
  */
//Сделать отдельные события для каждой кнопки и счётчик учитывающий колличество блоков
//Потом изменять его при нажатии. Условиями проверять начало и конец.
  for (let i = 0; i < btn2.length; i++) {
    btn2[i].addEventListener('click', function() {
      slider2.className = 'slider-window';
      slider2.classList.add('slide-' + i);
      count2 = i;
      count3 = i;  
    })
  }
});