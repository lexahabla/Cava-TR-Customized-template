// console.log('Hola');

const formularioBuscar = document.querySelector('#searchform #s');

formularioBuscar.className += 'form-control mb-2'; 
const BotonBuscar = document.querySelector('#searchsubmit');
BotonBuscar.className += 'form-control btn btn-primary btn-block';
const listaEntradas = document.querySelector('.widget ul');
console.log(listaEntradas);
listaEntradas.className += ' list-group';
listaEntradas.querySelectorAll('li').forEach(item => {
    item.className += ' list-group-item';
});



/*SCROLL-------------------------------------------------------------------*/
function scroll(){
 
    var firstScrollTop = 0;
    var colorMenu = document.getElementById("fondomenu");
    
    
    jQuery(function ($) {
      
      $(window).scroll(function(event){
      var st = $(this).scrollTop();
      console.log(st);
        if(st > 99  && window.matchMedia("(min-width: 992px)").matches){
            // upscroll code 
         colorMenu.style.backgroundColor = "#000000";
          colorMenu.style.transition = "all 2s ease";
        }
        if(st == 0  && window.matchMedia("(min-width: 992px)").matches){
           // upscroll code 
       colorMenu.style.backgroundColor = "transparent";
       colorMenu.style.transition = "all 2s ease";
       
    
       firstScrollTop = st;
      }
    if(st == 0 && window.matchMedia("(max-width: 991px)").matches){
    // upscroll code 
    colorMenu.style.backgroundColor = "#000000";
   
    firstScrollTop = st;
  }
      
    });
    
  });
}