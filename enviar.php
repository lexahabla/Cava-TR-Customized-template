<?php

if(isset($_POST['enviar'])){
    
    if(!empty($_POST['name']) && !empty($_POST['email']) && !empty($_POST['consulta'])){
       
        $nombre = $_POST['name'];
        $email = $_POST['email'];
        $mensaje = $_POST['consulta'];
        $para = 'info@cavatercerarepublica.com';
        $titulo = 'Consulta Web';
        $header = 'From: ' . $email;
        $msjCorreo = "Nombre: $nombre\n E-Mail: $email\n Mensaje:\n $mensaje";
        $mensaje ="mensaje guai ";
        $mail = mail($para, $titulo, $msjCorreo, $header);
   
      if($mail){
           echo "<script language='javascript'>
           $( document ).ready(function() {
            $('#contactar').modal('toggle')
        });
           </script>";

    } 
    }
} 

?>

<div class="modal fullscreen-modal fade" id="contactar">
			<div class="modal-dialog">
				<div class="modal-content">
					<!-- Header de l ventana -->
					<div class="modal-header">
						<h4 class="modal-title">Missatge enviat</h4><button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
					</div>
					<!-- Contenido de la ventana -->
					<div class="modal-body">
						<p style="text-align:left;">
							La vostra consulta s'ha procesat correctament, tindreu una resposta el més aviat possible.
							Gracies per contactar amb nosaltres.
							Per més informació podeu trucar al 934514150.</p>
					</div>
						<div class="comprar">
					</div>
					<!-- Footer de la ventana -->
					<div class="modal-footer">
						<a href="index"><input type="button" class="btn btn-default" data-dismiss="modal">Tancar</a>
							<!-- <button type="button" class="btn btn-primary" >Guardar cambios</button> -->
					</div>
				</div>
			</div>
		</div>