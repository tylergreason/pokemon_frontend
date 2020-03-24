import React, { Component } from 'react' 

// const PokemonCardSmall = (props) => {
class PokemonCardSmall extends Component {

    renderAttributes = (attributes) => {
        return attributes.map(attribute => <label >{attribute.name}/</label>)
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
            <React.Fragment>{this.renderAttributes(this.props.pokemon.types)}</React.Fragment>
            <p>Moves: </p>
            <React.Fragment>{this.renderAttributes(this.props.pokemon.active_moves)}</React.Fragment>
        </div>
        )
    }
}

export default PokemonCardSmall