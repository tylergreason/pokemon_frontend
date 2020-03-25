import React, { Component } from 'react'
import { Card, Label, Image, List, Divider } from 'semantic-ui-react' 

// const PokemonCardSmall = (props) => {
class PokemonCardSmall extends Component {


    renderAttributes = (attributes) => {
        return attributes.map(attribute => <label >{attribute.name}/</label>)
    }
    renderTypes = (types) => {
        return <Card.Meta>
            {types.map(type => {
                return <Label>{type.name}</Label>
                }
                )}
        </Card.Meta>
    }

    renderMoves = (moves) => {
        return <List horizontal> 
            {moves.map(move => {
                return <List.Item>
                    <Label>
                        {move.name}
                    </Label>
                </List.Item> 
            })}
        </List>
    }

    render (){
        return(
        <Card 
            // onClick={() => this.props.handleClick(this.props.pokemon)}
            onClick={() => this.props.handleClick(this.props.pokemon)}
        >
            <Card.Content>
            <Card.Header>{this.props.pokemon.name}</Card.Header>
            <Image src={this.props.pokemon.image_url} size='medium' centered/>

            {this.renderTypes(this.props.pokemon.types)}
            <Card.Meta>

            {/* <p>Types: </p>
            <React.Fragment>{this.renderAttributes(this.props.pokemon.types)}</React.Fragment> */}
            </Card.Meta>
            <Divider />
            {this.renderMoves(this.props.pokemon.active_moves)}
            {/* <p>Moves: </p>
            <React.Fragment>{this.renderAttributes(this.props.pokemon.active_moves)}</React.Fragment> */}
            </Card.Content>
        </Card>
        )
    }
}

export default PokemonCardSmall