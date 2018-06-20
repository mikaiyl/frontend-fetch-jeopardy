'use strict'

function Cell ( row, col, value = '' ) {
    this.value = value
    this.row = Number( row )
    this.col = Number( col )
}

Cell.prototype = {

    /*
    *  Edit this function to create the css for the elemtnts your
    *  grid to be made up of.
    * */

    getHTML: function ( value ) {
        if ( this.html ) return this.html
        if ( value ) this.value = value

        // html attributes data etc
        this.html = document.createElement( 'div' )
        this.html.textContent = this.value

        // css values
        this.html.style.gridRow = this.row + 1
        this.html.style.gridColumn = this.col + 1
        this.html.style.backgroundColor = 'blue'
        this.html.style.margin = '5px'
        this.html.style.height = '50px'
        this.html.style.width = '70px'
        this.html.classList.add( 'cell' )

        return this.html
    },

    setValue: function ( value ) {
        this.value = value
        this.html.textContent = this.value
        return this
    },

    getData: function () {
        return this.data
    },

    setData: function ( data ) {
        this.data = data
        return this
    },

    setClass: function ( newClass ) {
        this.html.classList.add( newClass )
        return this
    },

    removeClass: function ( oldClass ) {
        this.html.classList.remove( oldClass )
        return this
    },

    handleEvent: function ( event ) {
        console.log(event)
        if ( event.type === 'click' && this.data ) {
            debugger
            if ( !this.questionAsked ) {
                this.questionAsked = true
                this.setValue( this.getData() )
            }
        }
    },

}

