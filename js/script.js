$(document).ready(()=>{ //quando lê a pagina
    $('.bg-dark').on('click', ()=>{
        let ativo = $('.hamburguerAtivo').length

        if(ativo == 1) {
            $('.ul-mobile').removeClass('open')
            $('.ul-mobile').addClass('close')
            setTimeout(()=>{
                $('.hamburguer').removeClass('hamburguerAtivo')
                $('.bg-dark').fadeOut()
                $('.ul-mobile').fadeOut()
                setTimeout(()=>{
                    $('.ul-mobile').removeClass('close')
                }, 400)
            }, 200)
        }

        $('.modal').fadeOut()
        $('.bg-dark').fadeOut()

    })

    $('.close-modal').click(()=>{
        $('.modal').fadeOut()
        $('.bg-dark').fadeOut()
    })

    $('.menu-hamburguer-wrap').on('click', ()=>{ //dispara após o clique no menu-hamburguer

        let ativo = $('.hamburguerAtivo').length

        if(ativo != 1) {
            $('.hamburguer').addClass('hamburguerAtivo')
            $('.bg-dark').fadeIn()
            setTimeout(()=>{
                $('.ul-mobile').fadeIn()
                $('.ul-mobile').addClass('open')
            }, 200)
        } else {
            $('.ul-mobile').removeClass('open')
            $('.ul-mobile').addClass('close')
            setTimeout(()=>{
                $('.hamburguer').removeClass('hamburguerAtivo')
                $('.bg-dark').fadeOut()
                $('.ul-mobile').fadeOut()
                setTimeout(()=>{
                    $('.ul-mobile').removeClass('close')
                }, 400)
            }, 200)
        }

    }) //fim do disparo no clique no menu hamburguer

    $('.btn-marked, .btn-marked-mobile').on('click', ()=>{ //disparo botão de marcação
        let ativo = $('.marcado').length

        if(ativo != 2) {
            $('.btn-marked').addClass('marcado')
            $('.btn-marked-mobile').addClass('marcado')
        } else {
            $('.btn-marked').removeClass('marcado')
            $('.btn-marked-mobile').removeClass('marcado')
        }
    })


    $('.btn').on('click', ()=>{
        
        $('.modal').fadeIn()
        $('.bg-dark').fadeIn()
    })


})