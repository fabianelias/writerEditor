(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('select').material_select();
    $('.modal-trigger').leanModal();
    $('.tooltipped').tooltip({delay: 50});
    $('.carousel.carousel-slider').carousel({fullWidth: true});
    $('.carousel').carousel();
    $('.slider').slider({full_width: true});//slider init
    $('.slider').slider();

    $(window).scroll(function() {
        posicionarMenu();
    });

    /* images */
    var username = $("#username").val();

    var shaObj = new jsSHA(username.toString()+'0', "TEXT");
    var hash = shaObj.getHash('SHA-512','HEX','1');
    var data = new Identicon(hash, 31).toString();
    var img = 'data:image/png;base64,' + data + ''

    document.getElementById('imageProfile').src = img;

    $('.carousel.carousel-slider').carousel({fullWidth: true});

  }); // end of document ready
})(jQuery); // end of jQuery name space

function posicionarMenu() {
    var altura_del_header = $('#headInf').outerHeight(true)-10;
    var altura_del_menu = $('.docs-header').outerHeight(true);
    if ($(window).scrollTop() >= altura_del_header){
        $('#menuAPI').addClass('navfixed');
        $("#headInf").addClass('navbar-fixed');
    } else {
      $("#headInf").removeClass('navbar-fixed');
        $('#menuAPI').removeClass('navfixed');
    }
}

function avatars(ids){
console.log(ids);
  var shaObj = new jsSHA(ids.toString()+'0', "TEXT");
  var hash = shaObj.getHash('SHA-512','HEX','1');
  var data = new Identicon(hash, 31).toString();
  var img = 'data:image/png;base64,' + data + ''

  document.getElementById(''+ids+'').src = img;
}
