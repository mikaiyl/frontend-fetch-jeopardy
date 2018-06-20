'use strict'

function Game( players, gameBoard ) {
    this.board = gameBoard
    this.players = players

    this.main = document.getElementById( 'main' )

    let [ headDiv, gameDiv, footDiv ] = main.children
    this.headDiv = headDiv
    this.gameDiv = gameDiv
    this.footDiv = footDiv

    this.apiCluesURL = 'http://jservice.io/api/clues'

    // this.questions = new Array( 6 ).fill().map( a => new Array() )
    this.categories = [ 5, 10, 16, 20, 25, 31 ]

    this.categoryHeaderDiv = new Header( 1, 6, this.headDiv ).setup()
    this.questionsDiv = new Questions( 5, 6, this.gameDiv ).setup( this.questions )
}

function parseJSON( json, catIndex ) {
    // debugger
    // this.questions[ catIndex ].push( json.pop() )
    return json.pop()
}

Game.prototype = {

    getQuestions: function( numOfQuestions, questionValues ) {
        let values = [ 200, 400, 600, 800, 1000 ]

        this.questions = new Array( 6 ).fill().map( a => new Array() )
        for ( let catIndex in this.categories ) {
            for ( let valueIndex in values ) {

                fetch( this.apiCluesURL + '?category=' + this.categories[ catIndex ] + '&value=' + values[ valueIndex ] )
                    .then( res => res.json() )
                    .then( json => parseJSON.bind( this, json, catIndex )() )
                    .then( popped => console.log(this.questionsDiv.findCell( valueIndex, catIndex ).setData( popped.question ) ) )
            }
        }
        return this.questions
    },

}


