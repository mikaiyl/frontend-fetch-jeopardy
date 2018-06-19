'use strict'
// http://jservice.io/api/random?count=5

// the location of the api
const apiUrl = 'http://jservice.io/api'
const random = document.getElementById( 'foot' )

const appendTextToNode = function ( text, node ) {
    let p = document.createElement( 'p' )
    p.innerHTML = text
    node.appendChild( p )
}

const filter = function ( res ) {
    console.log( res )
    return res.json()
}

// get the random question
//
const getQuestion = function ( rand ) {
    fetch( apiUrl + '/random?count=5' )
        .then( res => filter( res ) )
        .then( json => {
            console.log(json)
            appendTextToNode( json[0].category, rand )
            appendTextToNode( json[0].question, rand )
            appendTextToNode( '<br>', rand )
            appendTextToNode( json[0].answer, rand )
        } )
}

getQuestion( random )
