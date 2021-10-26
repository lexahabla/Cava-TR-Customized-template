<!doctype html>
<html <?php language_attributes(); ?>>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    
   <?php wp_head(); ?>
  

  </head>
  <body <?php body_class(); ?>>
  <div class="bgone">
  <header>
  
					<!-- <div class="idiomas">
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
					
					</div> -->
    
    <nav class="navbar navbar-expand-lg navbar-dark col-12" id="fondomenu"> 
        <div id="container-fluid">
          <button id="ham" class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
          </button>

       
            <!-- <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            
                <ul class="navbar-nav">
                    <li class="nav-item">
                    <a class="nav-link text-secondary" href="inici.html"> <span class="selected"><b>INICI</b></span> </a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link text-secondary" href="republica.html"><b>REPÚBLICA</b></a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link text-secondary	" href="origen.html"><b>ORIGEN</b></a>
                    </li>
                    
                    <li class="nav-item">
                    <a class="nav-link text-secondary" href="cava.html"><b>CAVA</b></a>
                    </li>
                    <div id="xapa">
                    <a class="navbar-brand"  href="index.html"><img src="http://localhost/ficheros/WORDPRESS/cava_tercera_republica/wp-content/uploads/2021/10/xapa.png" alt="Xapa del cava Tercera República"></a>
                    </div>
                    <li class="nav-item">
                    <a class="nav-link text-secondary" href="tast.html"><b>TAST</b></a>
                    </li>
                     <li class="nav-item">
                    <a class="nav-link text-secondary" href="botiga.html"><b>BOTIGA</b></a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link text-secondary" href="botiga.html"><b>CONTACTAR</b></a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link text-secondary" href="botiga.html"><b>TAULER</b></a>
                    </li>
                </ul>
            </div> -->
            <?php
          wp_nav_menu( array(
              'theme_location'    => 'menu-principal',
              'depth'             => 2,
              'container'         => 'div',
              'container_class'   => 'collapse navbar-collapse',
              'container_id'      => 'navbarSupportedContent',
              'menu_class'        => 'nav navbar-nav justify-content-center',
              'fallback_cb'       => 'WP_Bootstrap_Navwalker::fallback',
              'walker'            => new WP_Bootstrap_Navwalker(),
          ) );
          ?>
        </div>
    </nav>
  </header>

    
 
    <!--menu-->

    <!--blog-->
    <div class="container-fluid">
