fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    .then(jsonData => jsonData.json())
    .then(data => printIt(data))

let printIt = (data) => {
    return
}
