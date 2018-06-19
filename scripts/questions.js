function Questions( height, width, parentElement ) {
    Board.call( this, height, width, parentElement )

}

Questions.prototype = Object.create( Board.prototype )
Questions.prototype.constructor = Questions
