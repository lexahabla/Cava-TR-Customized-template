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
           <?php get_template_part('template-parts/content', 'pagination'); ?>
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