import React from 'react' 


const TeamCard = (props) => {

    return (<div 
            style={{backgroundColor:'rgba(100,100,100,0.2)'}}
            onClick={() => props.teamCardClick(props.team)}
            // onClick={() => console.log(props.team)}
    >
            <h2>{props.team.name}</h2>
            <p>{props.team.description}</p>
            {props.renderListPokemonCardSmall(props.team.pokemons)}
        </div>)
}
export default TeamCard