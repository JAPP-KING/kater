$(document).ready(function() {

    $('.container .container-contenido .tipo-contenido .btn').click(function() {

        let filter = $(this).attr('data-filter');

        if (filter == 'todos') {
            $('.container-contenido .caja').show('400')
        } else {
            $('.container-contenido  .caja').not('.' + filter).hide('200');
            $('.container-contenido  .caja').filter('.' + filter).show('400');
        }

    });

});