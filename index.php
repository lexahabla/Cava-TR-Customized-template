<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

   <?php wp_head(); ?>
    <title>Cava Tercera Republica</title>

  </head>
  <body>
  
<div class="row">

<div class="nav" id="fondomenu">
					<div class="idiomas">
						<div class="lang" id="anular">
							<a href="#">
							<img src="img/idiomas.png" id="langImg" onclick="idiomasIn();langout();" alt="Mostra els idiomes del Web Cava Tercera República">
							</a>
						</div>
						<div class="lang2" id="anular2">
							<a href="#">
							<img src="img/idiomas2.png" id="lang2Img" onclick="idiomasOut();langin();" alt="Amaga els idiomas del Web Cava Tercera República">
							</a>
						</div>
						<div id="cat">
							<a href=""><img id="catImg"  src="img/catalan.png" alt="Web Cava Tercera República en Català" onmouseover="idiomasIn();" onmouseout="idiomasOut();langin();"></a>
						</div>
						<div id="cast">
							<a href="Cast/index.html"><img id="castImg"  src="img/castellano.png" alt="Web Cava Tercera República en Castellano" onmouseover="idiomasIn();" onmouseout="idiomasOut();langin();"></a>
						</div>
					
					</div>
    
    <nav class="navbar navbar-expand-lg bg-dark" id="menuResp">
        <button id="ham" class="navbar-toggler fixed-top" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>

        <div id="menuCaja">
            <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            
                <ul class="navbar-nav text-center ">
                    <li class="nav-item">
                    <a class="nav-link text-secondary" href="inici.html"> <span class="selected"><b>INICI</b></span> </a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link text-secondary" href="republica.html"><b>REPÚBLICA</b></a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link text-secondary	" href="origen.html"><b>ORIGEN</b></a>
                    </li>
                    <div id="xapa">
                    <a class="navbar-brand"  href="index.html"><img src="http://localhost/ficheros/WORDPRESS/cava_tercera_republica/wp-content/uploads/2021/10/xapa.png" alt="Xapa del cava Tercera República"></a>
                    </div>
                    <li class="nav-item">
                    <a class="nav-link text-secondary" href="cava.html"><b>CAVA</b></a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link text-secondary" href="tast.html"><b>TAST</b></a>
                    </li>
                     <li class="nav-item">
                    <a class="nav-link text-secondary" href="botiga.html"><b>BOTIGA</b></a>
                    </li>
                </ul>
            </div>

        </div>
    </nav>
</div>
</div>

    <!--menu-->

    <!--blog-->
    <div class="container">

      <h2 class="my-3 text-center text-primary">Tauler</h2>
      <hr>

      <div class="row">
         <!--entradas-->
        <div class="col-lg-9">

          <!--entrada-->
          <div class="card-body"> 
            <a href="single.html">
            <h2>Titulo de la entrada</h2>
           </a>
           <p class="small mb-0">Fecha: 22/06/21</p>
           <p class="small ">Autor: cava T.R.</p>
           <img src="img/imgX.jpg" alt="" class="img-fluid mb-3">
           <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error, optio animi inventore dolore ad,
              voluptatem facere velit quia dicta minus adipisci. Ducimus cum modi incidunt ratione. 
              Modi quia cum ad?</p>
              <a href="single.html" class="btn btn-primary">Mes info</a>

          </div>
          <!--entrada-->
          <!--entrada-->
          <div class="card-body"> 
            <a href="single.html">
            <h2>Titulo de la entrada</h2>
            </a>
            <p class="small mb-0">Fecha: 22/06/21</p>
            <p class="small ">Autor: cava T.R.</p>
            <img src="img/imgX.jpg" alt="" class="img-fluid mb-3">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error, optio animi inventore dolore ad,
              voluptatem facere velit quia dicta minus adipisci. Ducimus cum modi incidunt ratione. 
              Modi quia cum ad?</p>
              <a href="single.html" class="btn btn-primary">Mes info</a>

          </div>
          <!--entrada-->
          <!--paginacion-->
          <div class="card-body">
            <nav aria-label="Page navigation example">
              <ul class="pagination">
                <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                <li class="page-item active"><a class="page-link" href="#">1</a></li>
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item"><a class="page-link" href="#">Next</a></li>
              </ul>
            </nav>
          </div>

          <!--paginacion-->

       

        
        </div>
        <!--entradas-->

        <!--Aside-->
        <div class="col-lg-3">
          <div class="card-body">
          <h4>Widgets</h4>
          <hr>
          <img src="img/imgY.jpg" alt="" class="img-fluid">
        </div>
        </div>

        <!--Aside-->

      
      </div>
    </div>
    <!--blog-->

    <!--footer-->
    <footer class="container-fluid py-4 text-center text-light bg-dark">
      <h5>Cava Tercera Republica</h5>
    </footer>
    <!--footer-->

    <!-- Optional JavaScript; choose one of the two! -->

    <!-- Option 1: Bootstrap Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-kQtW33rZJAHjgefvhyyzcGF3C5TFyBQBA13V1RKPf4uH+bwyzQxZ6CmMZHmNBEfJ" crossorigin="anonymous"></script>

    <!-- Option 2: Separate Popper and Bootstrap JS -->
    <!--
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.2/dist/js/bootstrap.min.js" integrity="sha384-PsUw7Xwds7x08Ew3exXhqzbhuEYmA2xnwc8BuD6SEr+UmEHlX8/MCltYEodzWA4u" crossorigin="anonymous"></script>
    -->
    <?php wp_footer(); ?>
  </body>
</html>