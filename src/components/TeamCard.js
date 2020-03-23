import React from 'react' 
// import PokemonCardSmall from './PokemonCardSmall'

const TeamCard = (props) => {

    return <div>
            {console.log(props.team.pokemons)}
            <h2>{props.team.name}</h2>
            <p>{props.team.description}</p>
            {props.renderListPokemonCardSmall(props.team.pokemons)}
        </div>
}
export default TeamCard

// team:
// id: 7
// name: "Maine ogres"
// description: "["ex", "nisi", "neque", "qui", "voluptas", "eveniet", "rerum", "aperiam", "et", "quisquam"]"
// created_at: "2020-03-23T15:31:11.281Z"
// updated_at: "2020-03-23T15:31:11.281Z"
// user_id: 3
// pokemons: Array(3)
// 0:
// id: 19
// name: "kingler"
// number: 99
// created_at: "2020-03-23T15:31:03.694Z"
// updated_at: "2020-03-23T15:31:03.694Z"
// types: [{…}]
// moves: (74) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
// abilities: (3) [{…}, {…}, {…}]
// natures: [{…}]
// active_moves: (4) [{…}, {…}, {…}, {…}]
// __proto__: Object