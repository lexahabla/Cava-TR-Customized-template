<?php get_header(); ?>


          

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
       
        <!--entradas-->

     

      
  
    <!--blog-->
<?php get_footer(); ?>