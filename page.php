<?php get_header(); ?>

    <div class="row">
         <!--entradas-->
        <div class="col-lg-12">

          

          <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
          <!--entrada-->
          
          
            
         
         
           <!-- <img src="img/imgX.jpg" alt="" class="img-fluid mb-3"> -->
           <?php
          if ( has_post_thumbnail() ) {
          the_post_thumbnail('post-thumbnails', array(
            'class' => 'img-fluid mb-3'
          ));
          }
          ?>
           <?php the_content(); ?>  
          
          <!--entrada-->
          <?php endwhile;  endif; ?> 
        </div>
        <!--entradas-->

     

      
      </div>
    </div>
    <!--blog-->
<?php get_footer(); ?>