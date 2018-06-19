const main = document.getElementById( 'main' )

const [ head, game, foot ] = main.children

let header = new Header( 1, 6, head ).setup()
let qSection = new Questions( 5, 6, game ).setup()
