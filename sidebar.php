<div class="col-lg-3">
    <!-- <div class="card-body">
    <h4>Widgets</h4>
    <hr>
    <img src="img/imgY.jpg" alt="" class="img-fluid">
    </div> -->

    <?php if ( is_active_sidebar( 'widgets-right' ) ) : ?>
        <?php dynamic_sidebar( 'widgets-right' ); ?>
    <?php else : ?>
        <!-- Time to add some widgets! -->
    <?php endif; ?>

</div>