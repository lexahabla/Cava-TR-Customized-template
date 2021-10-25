<?php get_header(); ?>
<div class="container">
<div class="row">
         <!--entradas-->
        <div class="col-lg-9">
            <h3 class="bg-primary text-white text-center py-3 mb-5">Resultats de la Cerca</h3>
                <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
                <!--entrada-->
                <div class="card-body "> 
                    <a href="<?php the_permalink(); ?>">
                    <h2><?php the_title(); ?></h2>
                </a>
                </div>
                <!--entrada-->
            <?php endwhile;  ?>
            <?php else: ?>   
                <h5>No s'han trobat el terme:  
                <?php printf(esc_html('%s'), get_search_query()); ?>
            </h5> 
               <?php get_search_form(); ?>
            <?php endif; ?> 
          
         
       
          <!--paginacion-->
          <div class="card-body">
           <?php get_template_part('template-parts/content', 'pagination'); ?>
          </div>

          <!--paginacion-->

       

        
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
</div>

     

<?php get_footer(); ?>