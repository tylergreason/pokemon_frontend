import React, { Component } from 'react' 

// const PokemonCardSmall = (props) => {
class PokemonCardSmall extends Component {

    renderAttributes = (attributes) => {
        return attributes.map(attribute => <label key={attribute.id}>{attribute.name}</label>)
    }

    render (){
        return(
        <div 
            style={{border: '5px solid black', width:'25%'}}
            // onClick={() => this.props.handleClick(this.props.pokemon)}
            onClick={() => this.props.handleClick(this.props.pokemon)}
        >
            <h3>{this.props.pokemon.name}</h3>
            <img src={this.props.pokemon.image_url}/>
            <p>Types: </p>
            <ul>{this.renderAttributes(this.props.pokemon.types)}</ul>
            <p>Moves: </p>
            <ul>{this.renderAttributes(this.props.pokemon.active_moves)}</ul>
        </div>
        )
    }
}

export default PokemonCardSmall