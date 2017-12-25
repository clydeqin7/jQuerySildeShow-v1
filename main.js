var allButtons = $(' #buttons > span ')

        console.dir(allButtons.length)
for(let i=0; i<allButtons.length; i++){
    $(allButtons[i]).on('click', function(x){
        var index = $(x.currentTarget).index()
        var p = index * -300
        $('#images').css({
            transform:'translate(' + p +'px)'
        })
        n = index 
        allButtons.eq(n)
            .addClass('red')
            .siblings('.red').removeClass('red')
    })
}