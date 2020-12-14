class Form{
    constructor(){
        
    }
    display(){
        var title = createElement('h2')
        title.html("car racing gmae")
        title.position(150,0)
        var input = createInput('')
        input.position(150,160)
        var button = createButton('play')
        button.position(250,200)
        button.mousePreesed(function(){
            input.hide()
            button.hide()
            var name = input.value()
            playerCount += 1
            player.updateName(name)
            player.updateCount(playerCount)
        })
    }
}