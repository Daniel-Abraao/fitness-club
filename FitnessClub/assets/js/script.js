$(document).ready(function() {

    // ADICIONANDO CLASS ACTIVE AO MENU DE NAVEÇAÇÃO
        $(".ham-burger, .nav ul li a").click(function() {
            $('.nav').toggleClass('open');
            $('.ham-burger').toggleClass('active')
        })

    // ADCIONANDO FUNÇÃO DE ACCORDION
        $('.accordian-container').click(function() {
            $('.accordian-container').children('.body').slideUp();
            $('.accordian-container').removeClass('active');
            $('.accordian-container').children('.head').children('svg')
            .removeClass('fa fa-angle-down').addClass('fa fa-angle-up');
            
            $(this).children('.body').slideToggle();
            $(this).addClass('active')
            $(this).children('.head').children('svg')
            .removeClass('fa fa-angle-up').addClass('fa fa-angle-down');
        })


    // ADICIONANDO SCROOL DE ROLAGEM SUAVE
        $('.nav ul li a, .go-down').click(function(event) {
            
            if(this.hash != "") {

                event.preventDefault();

                var hash = this.hash;

                $('html, body').animate({
                    scrollTop: $(hash).offset().top
                },1000, function() {
                    window.location.hash = "Fitness"
                });

                $('.nav ul li a').removeClass('active')
                $(this).addClass('active')
            }
        })
})


// ACIONANDO BLIBIOTECA WOW
    wow = new WOW(
        {
        animateClass: 'animated',
        offset: 0,
        }
    );
    wow.init();

