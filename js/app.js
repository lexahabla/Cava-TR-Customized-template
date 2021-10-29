

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



