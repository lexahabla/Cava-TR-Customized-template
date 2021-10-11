<?php get_header(); ?>

      <div class="row">
         <!--entradas-->
        <div class="col-lg-9">

          

          <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
          <!--entrada-->
          <div class="card-body"> 
            <a href="<?php the_permalink(); ?>">
            <h2><?php the_title(); ?></h2>
           </a>
           <p class="small mb-0">Fecha: <?php the_time('F j, Y'); ?> </p>
           <p class="small mb-0">Autor: <?php the_author(); ?></p>
           <p class="small ">
            Categorias: <?php the_category(' / '); ?>
            Etiquetas: <?php the_tags('', ' / ', '') ?>
          </p>
           <!-- <img src="img/imgX.jpg" alt="" class="img-fluid mb-3"> -->
          <?php
          if ( has_post_thumbnail() ) {
          the_post_thumbnail('post-thumbnails', array(
            'class' => 'img-fluid mb-3'
          ));
          }
          ?>
           <?php the_excerpt(); ?> 
              <a href="<?php the_permalink(); ?>" class="btn btn-primary">Mes info</a>

          </div>
          <!--entrada-->
          <?php endwhile;  endif; ?> 
         
       
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
<?php get_footer(); ?>