<?php get_header(); ?>

      <div class="row">
         <!--entradas-->
        <div class="col-lg-9">

          

          <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
          <!--entrada-->
          <div class="card-body"> 
          
            <h2><?php the_title(); ?></h2>
         
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
           <?php the_content(); ?>  
          </div>
          <!--entrada-->
          <?php endwhile;  endif; ?> 
        </div>
        <!--entradas-->

      <!--Aside-->  
      <?php 
      get_sidebar();
      ?>
      <!--Aside-->    
      

      
      </div>
    </div>
    <!--blog-->
<?php get_footer(); ?>