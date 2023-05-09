const contentPokemonDetail = document.getElementById('pokemonDetail')
let myPokemons = [];

function retornaPokemons(pokemon) {
    return pokemon
}


let pokemonLiList = [];
let countlimit = 0;
function getPokemonClicked() {
    countlimit += 10;
    pokeApi.getPokemons(0, countlimit)

        .then((pokemons = []) => {
            for (let i = 0; i < pokemons.length; i++) {
                const pokemonId = pokemons[i].number;
                const pokemonLi = document.getElementById(pokemonId)
                pokemonLiList[i] = pokemonLi
            }

            for (const key in pokemonLiList) {
                pokemonLiList[key].addEventListener('click', () => {
                    contentPokemonDetail.innerHTML = convertPokemonDetailsToHtml(pokemons[key])
                    window.scrollTo(0, 100);
                })

            }
        })
}

function createTableType(pokemon){
    let types = [];

    let newHtml = '';

    types = pokemon.types.map((type) => type);

    for (const key in types) {
        newHtml +=
        `
            <tr class="types">
                <td>${types[key]}</td>
            </tr>
        `
    }
    return newHtml;
}

function createTableAbility(pokemon) {
    let abilities = [];

    let newHtml = '';

    abilities = pokemon.abilities.map((ability) => ability);


    for (const key in abilities) {
        newHtml +=
        `
            <tr class="types">
                <td>${abilities[key]}</td>
            </tr>
        
        `
    }
    return newHtml;
}

function createTableStats(pokemon) {
    let statsNames = []
    let statsValues = []
    let newHtml = '';
    statsNames = pokemon.statsname.map((statname) => statname)
    statsValues = pokemon.stats.map((stat) => stat.base_stat)



    for (const key in statsNames) {
        newHtml +=
            `
            <tr class="types">
                <td>${statsNames[key]} &#129046;</td>
                <td>${statsValues[key]}</td>
            </tr>
            `
    }
    return newHtml;
}


function convertPokemonDetailsToHtml(pokemon) {
    return `
        <div class="pokemonDetail ${pokemon.type}">
            <span class="numberDetail">#${pokemon.number}</span>
            <span class="nameDetail">${pokemon.name}</span>
            <img src="${pokemon.photo}" class="photo" alt="${pokemon.name}">
            
            <div class="pokemonDetail">
            <table class="tableDetail">
                <tr>
                    <th>Type:</th>
                    ${createTableType(pokemon)}
                </tr>
                <tr>
                    <th>Abilities:</th>
                    ${createTableAbility(pokemon)}
                </tr>
                <tr id="pokemonStats">
                    <th>Stats:</th>
                    ${createTableStats(pokemon)}
                </tr>
                
            </table>   
            </div>
        </div>
    `
}


