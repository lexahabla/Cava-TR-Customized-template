// console.log('Hola');

const formularioBuscar = document.querySelectorAll('#searchform #s');
if(formularioBuscar){

  for(const iterator of formularioBuscar){

  iterator.className += 'form-control mb-2'; 
  }
   const BotonBuscar = document.querySelectorAll('#searchsubmit');
  
   for(const iterator of BotonBuscar){
    iterator.className += 'form-control btn btn-primary btn-block';
   }
}
 const listaEntradas = document.querySelector('.widget ul');
if(listaEntradas){
  listaEntradas.className += ' list-group';
  listaEntradas.querySelectorAll('li').forEach(item => {
      item.className += ' list-group-item';
  });
  
}

// Estilos comentarios
const botonComentarios = document.querySelector('.form-submit #submit');
if(botonComentarios){
  botonComentarios.className = 'btn btn-primary';
}

const inputTextArea = document.querySelector('.comment-form-comment textarea');
if(inputTextArea){
  inputTextArea.className = 'form-control';
  inputTextArea.setAttribute('placeholder', 'Ingresa aquí tu comentario*');
}

const comentariosNuevos = document.querySelector('#commentform');
if(comentariosNuevos
  && comentariosNuevos.querySelector('.comment-form-author label')
  && comentariosNuevos.querySelector('.comment-form-author input')
  && comentariosNuevos.querySelector('.comment-form-email label')
  && comentariosNuevos.querySelector('.comment-form-email input')
  && comentariosNuevos.querySelector('.comment-form-url label')
  && comentariosNuevos.querySelector('.comment-form-url input')
  ){

  comentariosNuevos.querySelector('.comment-form-author label').className = 'd-none';
  comentariosNuevos.querySelector('.comment-form-author input').className = 'form-control';
  comentariosNuevos.querySelector('.comment-form-author input').setAttribute('placeholder', 'Nombre*');

  comentariosNuevos.querySelector('.comment-form-email label').className = 'd-none';
  comentariosNuevos.querySelector('.comment-form-email input').className = 'form-control';
  comentariosNuevos.querySelector('.comment-form-email input').setAttribute('placeholder', 'Email*');

  comentariosNuevos.querySelector('.comment-form-url label').className = 'd-none';
  comentariosNuevos.querySelector('.comment-form-url input').className = 'form-control';
  comentariosNuevos.querySelector('.comment-form-url input').setAttribute('placeholder', 'Sitio web');

}

const botonEditarComentarios = document.querySelectorAll('.comment-edit-link');
if(botonEditarComentarios){
  botonEditarComentarios.forEach(boton => {
    boton.className = 'btn btn-outline-warning btn-sm'
  })
}

const botonResponderComentarios = document.querySelectorAll('.comment-reply-link');
if(botonResponderComentarios){
  botonResponderComentarios.forEach(boton => {
    boton.className = 'btn btn-outline-primary btn-sm'
  })
}


/*RECARGA--CTRL+F5----------------------------------------------------------------*/
window.onbeforeunload = window.scrollTo({ top: 0, behavior: 'smooth' });


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

//INDEX----------------------------------------------------------------------------------------------------//
function index1200()
{

	$(window).scroll(function(event){
	var st = $(this).scrollTop();
	console.log(st);

		var img1 = document.getElementById("logo");
		var img1alpha = document.getElementById("logoImg");
		var img2 = document.getElementById("dones");
		var img2alpha2 = document.getElementById("donesImg2");
		var img3 = document.getElementById("copes");
		var img3alpha = document.getElementById("copesImg");
		var img4 = document.getElementById("gel");
		var img4alpha = document.getElementById("gelImg");


		if(window.matchMedia("(min-width: 1200px)").matches && st > 400 ){

			img1.style.left ="0px";
			img1.style.transition = "left 2s ease";
			img1.style.transitionDelay = "0.5s";
			
			img1alpha.style.opacity = "1";
			img1alpha.style.transition = "opacity 2s ease";
			img1alpha.style.transitionDelay = "0.5s";

			img2.style.left ="0px";
			img2.style.transition = "left 2s ease";
			img2.style.transitionDelay = "1s";

			img2alpha2.style.opacity ="1";
			img2alpha2.style.transition = "opacity 2s ease";
			img2alpha2.style.transitionDelay = "1s";
		
		}

		if( window.matchMedia("(min-width: 1200px)").matches && st > 1800 ){

			img3.style.left ="0px";
			img3.style.transition = "left 2s ease";

			img3alpha.style.opacity = "1";
			img3alpha.style.transition = "opacity 2s ease";

			img4.style.left ="0px";
			img4.style.transition = "left 2s ease";
			img4.style.transitionDelay = "0.5s";

			img4alpha.style.opacity = "1";
			img4alpha.style.transition = "opacity 2s ease";
			img4alpha.style.transitionDelay = "1s";

		}

		if(window.matchMedia("(min-width: 992px) and (max-width:1999px)").matches && st > 400 ){

			img1.style.left ="0px";
			img1.style.transition = "left 2s ease";
			img1.style.transitionDelay = "0.5s";
			
			img1alpha.style.opacity = "1";
			img1alpha.style.transition = "opacity 2s ease";
			img1alpha.style.transitionDelay = "0.5s";

			img2.style.left ="0px";
			img2.style.transition = "left 2s ease";
			img2.style.transitionDelay = "1s";

			img2alpha2.style.opacity ="1";
			img2alpha2.style.transition = "opacity 2s ease";
			img2alpha2.style.transitionDelay = "1s";
		
		}

		if( window.matchMedia("(min-width: 992px) and (max-width:1999px)").matches && st > 1600 ){

			img3.style.left ="0px";
			img3.style.transition = "left 2s ease";

			img3alpha.style.opacity = "1";
			img3alpha.style.transition = "opacity 2s ease";

			img4.style.left ="0px";
			img4.style.transition = "left 2s ease";
			img4.style.transitionDelay = "0.5s";

			img4alpha.style.opacity = "1";
			img4alpha.style.transition = "opacity 2s ease";
			img4alpha.style.transitionDelay = "1s";

		}

		if(window.matchMedia("(min-width: 768px) and (max-width: 991px)").matches  && st > 300){

			img1.style.left ="0px";
			img1.style.transition = "left 2s ease";

			img1alpha.style.opacity = "1";
			img1alpha.style.transition = "opacity 2s ease";

			img2.style.left ="0px";
			img2.style.transition = "left 2s ease";
			img2.style.transitionDelay = "0.5s";

			img2alpha2.style.opacity ="1";
			img2alpha2.style.transition = "opacity 2s ease";
			img2alpha2.style.transitionDelay = "0.5s";
		}

		if(window.matchMedia("(min-width: 768px) and (max-width: 991px)").matches && st > 1200){

			img3.style.left ="0px";
			img3.style.transition = "left 2s ease";

			img3alpha.style.opacity = "1";
			img3alpha.style.transition = "opacity 2s ease";

			img4.style.left ="0px";
			img4.style.transition = "left 2s ease";
			img4.style.transitionDelay = "0.5s";

			img4alpha.style.opacity = "1";
			img4alpha.style.transition = "opacity 2s ease";
			img4alpha.style.transitionDelay = "1s";

		}


		if(window.matchMedia("(min-width: 576px) and (max-width:767px)").matches && st > 150){

			img1.style.left ="0px";
			img1.style.transition = "left 2s ease";

			img1alpha.style.opacity = "1";
			img1alpha.style.transition = "opacity 2s ease";

			img2.style.left ="0px";
			img2.style.transition = "left 2s ease";
			img2.style.transitionDelay = "0.5s";

			img2alpha2.style.opacity ="1";
			img2alpha2.style.transition = "opacity 2s ease";
			img2alpha2.style.transitionDelay = "0.5s";
		}


		if(window.matchMedia("(min-width: 576px) and (max-width:767px)").matches && st > 1000){
			img3.style.left ="0px";
			img3.style.transition = "left 2s ease";

			img3alpha.style.opacity = "1";
			img3alpha.style.transition = "opacity 2s ease";

			img4.style.left ="0px";
			img4.style.transition = "left 2s ease";
			img4.style.transitionDelay = "0.5s";

			img4alpha.style.opacity = "1";
			img4alpha.style.transition = "opacity 2s ease";
			img4alpha.style.transitionDelay = "1s";
		}


		if(window.matchMedia("(min-width:415px) and (max-width:575px)").matches && st > 600)
		{

			img1.style.left ="0px";
			img1.style.transition = "left 2s ease";

			img1alpha.style.opacity = "1";
			img1alpha.style.transition = "opacity 2s ease";
		}
		
		if(window.matchMedia("(min-width:415px) and (max-width:575px)").matches && st > 1300)
		{

			img2.style.left ="0px";
			img2.style.transition = "left 2s ease";
			

			img2alpha2.style.opacity ="1";
			img2alpha2.style.transition = "opacity 2s ease";
			
		}

		if(window.matchMedia("(min-width:415px) and (max-width:575px)").matches && st > 2600)
		{
		
			img3.style.left ="0px";
			img3.style.transition = "left 2s ease";

			img3alpha.style.opacity = "1";
			img3alpha.style.transition = "opacity 2s ease";
		}

		if(window.matchMedia("(min-width:415px) and (max-width:575px)").matches && st > 3100)
		{

			img4.style.left ="0px";
			img4.style.transition = "left 2s ease";
		

			img4alpha.style.opacity = "1";
			img4alpha.style.transition = "opacity 2s ease";
		
		}

		if(window.matchMedia("(min-width:321px) and (max-width: 414px)").matches && st > 400){
		
			img1.style.left ="0px";
			img1.style.transition = "left 2s ease";

			img1alpha.style.opacity = "1";
			img1alpha.style.transition = "opacity 2s ease";
		}

		

		if(window.matchMedia("(min-width:321px) and (max-width: 414px)").matches && st > 700){
		
			img2.style.left ="0px";
			img2.style.transition = "left 2s ease";

			img2alpha2.style.opacity ="1";
			img2alpha2.style.transition = "opacity 2s ease";

		}

		if(window.matchMedia("(min-width:321px) and (max-width: 414px)").matches && st > 1900){

			img3.style.left ="0px";
			img3.style.transition = "left 2s ease";

			img3alpha.style.opacity = "1";
			img3alpha.style.transition = "opacity 2s ease";
		}

		if(window.matchMedia("(min-width:321px) and (max-width: 414px)").matches && st > 2200){

			img4.style.left ="0px";
			img4.style.transition = "left 2s ease";
			
			img4alpha.style.opacity = "1";
			img4alpha.style.transition = "opacity 2s ease";

		}


		if(window.matchMedia("(min-width:0px) and (max-width: 320px)").matches && st > 200){
		
			img1.style.left ="0px";
			img1.style.transition = "left 2s ease";

			img1alpha.style.opacity = "1";
			img1alpha.style.transition = "opacity 2s ease";
		}

		

		if(window.matchMedia("(min-width:0px) and (max-width: 320px)").matches && st > 600){
		
			img2.style.left ="0px";
			img2.style.transition = "left 2s ease";

			img2alpha2.style.opacity ="1";
			img2alpha2.style.transition = "opacity 2s ease";

		}

		if(window.matchMedia("(min-width:0px) and (max-width: 320px)").matches && st > 1600){

			img3.style.left ="0px";
			img3.style.transition = "left 2s ease";

			img3alpha.style.opacity = "1";
			img3alpha.style.transition = "opacity 2s ease";
		}

		if(window.matchMedia("(min-width:0px) and (max-width: 320px)").matches && st > 2000){

			img4.style.left ="0px";
			img4.style.transition = "left 2s ease";
			
			img4alpha.style.opacity = "1";
			img4alpha.style.transition = "opacity 2s ease";

		}

	});

}
//INDEX----------------------------------------------------------------------------------------------------//