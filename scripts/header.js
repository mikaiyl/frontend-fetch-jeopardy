function Header( height, width, parentElement ) {
    Board.call( this, height, width, parentElement )

}

Header.prototype = Object.create( Board.prototype )
Header.prototype.constructor = Header
