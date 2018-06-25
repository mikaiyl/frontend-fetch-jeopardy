'use strict'

function Board ( height, width, parentElement ) {
    this.height = Number( height )
    this.width = Number( width )

    this.parentElement = parentElement

    // setup board html and css and append to
    // parent div.
    this.html = document.createElement( 'div' )
    this.html.classList.add( 'board' )
    this.html.style.display = 'grid'
    this.html.style.width = '920px'

    this.parentElement.appendChild( this.html )
}

Board.prototype = {

    /*
    *  Populate this.html with cells.
    *  To simplify the code instead of creating 2d
    *  arrays, there is one array and helpers to make
    *  it easier to simulate a 2d array.
    * */

    setup: function () {
        // one array to rule them all
        this.board = new Array()
        for ( let rowindex = 0; rowindex < this.height; rowindex += 1 ) {
            for ( let index = 0; index < this.width; index += 1 ) {
                let cell = new Cell( rowindex, index, '$' + ( rowindex + 1 ) * 200 )
                cell.getHTML().addEventListener( 'click', cell.handleEvent.bind(cell) )
                this.board.push( cell )
                this.html.appendChild( this.board[ this.board.length - 1 ].getHTML() )
            }
        }
        // return this for chaining
        return this
    },

    update: function ( cellValues ) {
        // one array to rule them all
        for ( let rowindex = 0; rowindex < this.height; rowindex += 1 ) {
            for ( let index = 0; index < this.width; index += 1 ) {
                    this.findCell( rowindex, index ).setData( cellValues[ index ][ rowindex ].question )
            }
        }
        // return this for chaining
        return this
    },


    forEach: function ( func ) {
        // one array to rule them all
        for ( let rowindex = 0; rowindex < this.height; rowindex += 1 ) {
            for ( let index = 0; index < this.width; index += 1 ) {
                func( this.findCell( rowindex, index ) )
            }
        }
        // return this for chaining
        return this
    },

    /* 2d array for fallback purposes.
    fill: function () {
        // create array of objects to be appended to the page
        this.board2d = new Array( this.height ).fill().map( function( row, rowIndex ) {
            return new Array( this.width ).fill().map(
                function( _, cellIndex ) {
                    return new Cell( rowIndex, cellIndex, cellIndex )
                }.bind( this ) )
            }.bind( this ) )
        // append array of elements to the board
        this.board2d.forEach( ( row, rowIndex ) => {
            row.forEach( ( cell ) => {
                this.html.appendChild( cell.getHTML() )
            } )
        } )
        // return this for chaining
        return this
    }, * */

    /*
    *  FindCell allows searching the single array.
    * */

    findCell: function ( row, col ) {
        let r = Number( row ) * this.width
        debugger
        if ( this.board ) {
            return this.board[ r + Number( col ) ]
        } else {
            return 'index not found'
        }
    },

    getRows: function ( rows ) {
        let rowArray = new Array()

        if ( rows > 0 ) {
            for ( let cell of this.grid ) {
                if ( cell.row === rows ) {
                    rowArray.push( cell )
                }
            }
        } else if ( rows.length > 0 ) {
            for ( let cell of this.grid ) {
                rows.forEach( ( row ) => {
                    if ( cell.row === row ) {
                        rowArray.push( cell )
                    }
                })
            }
        }
        return rowArray
    },

    getSurroundingByCoords: function ( row, col ) {
        let surroundingCoords = [
            [ 0, 1 ], [ 1, 1 ], [ 1, 0 ], [ 0, -1 ], [ -1, -1 ], [ -1, 0 ], [ -1, 1 ], [ 1, -1 ] ]

        let surroundingArray = new Array()
        for ( let [ rOffset, cOffset ] of surroundingCoords ) {
            surroundingArray.push( this.findCell( Number( row ) + rOffset, Number( col ) + cOffset ) )
        }

        return surroundingArray
    },

    getSurroundingByCell: function ( cell ) {
        // if (  )
        let row = Number( cell.html.style.boardRow )
        let col = Number( cell.html.style.gridColumn )

        let surroundingCoords = [
            [ 0, 1 ], [ 1, 1 ], [ 1, 0 ], [ 0, -1 ], [ -1, -1 ], [ -1, 0 ], [ -1, 1 ], [ 1, -1 ] ]

        let surroundingArray = new Array()
        for ( let [ rOffset, cOffset ] of surroundingCoords ) {
            surroundingArray.push( this.findCell( Number( row ) + rOffset, Number( col ) + cOffset ) )
        }

        return surroundingArray
    },

}
