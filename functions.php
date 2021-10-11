<?php
// CSS JS 
function cava_tr_add_css_js(){
    wp_enqueue_style('style', get_stylesheet_uri());
    wp_enqueue_style('bootstrap', get_template_directory_uri() . '/css/bootstrap.min.css');
    wp_enqueue_script('popper', 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js', array ( 'jquery' ), '1.14', true);
    wp_enqueue_script('bootstrap-js', 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js', array ( 'popper' ), '4.3', true);
    wp_register_script('jquery-3.1.0', get_template_directory_uri().'/js/jquery-3.1.0.js'); 
    wp_enqueue_script('jquery-3.1.0');
}
add_action('wp_enqueue_scripts', 'cava_tr_add_css_js');
// CSS JS 

// POST THUMBNAILS
if ( function_exists( 'add_theme_support' ) ) {
    add_theme_support( 'post-thumbnails' );
}
 // POST THUMBNAILS

 //SIDEBAR
function cava_tr_widgets(){
register_sidebar(array(
    'id'  => 'widgets-right',
    'name'=>  __( 'widget-right' ),
    'description' => __('Arrosega el widget'),
    'before_widget' => ' <div class="card-body">',
    'after_widget'  => '</div>',
    'before_title'  => '<h4>',
    'after_title'   => '</h4><hr>'
));
}
add_action('widgets_init','cava_tr_widgets');
 //SIDEBAR