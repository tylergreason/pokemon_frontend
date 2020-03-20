import React from 'react' 

const pokeApi = "http://localhost:3000/pokemons"

export default class Pokemon extends React.Component {
    state = {
        pokemon: []
    }

    componentDidMount = () => {
        fetch(pokeApi, {
        method: 'GET', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
            'Access-Token': 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxOH0.OdsvZEfH4BRuRK5_Joz6AYtlQ-W8TcUgFwqzic1lq5I'
        }
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            this.setState({pokemon:data});
        })
        .catch((error) => {
        console.error('Error:', error);
        });
    }

    renderPokemon = () => {
        return this.state.pokemon.map(pokemon => {
            return <div key={pokemon.id}>{pokemon.name}</div>
        })
    }

    render() {
        return (
            <div>
                pokemon
                {this.renderPokemon()}
            </div>
        )
    }
}