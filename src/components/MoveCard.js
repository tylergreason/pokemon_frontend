import React from 'react' 


const MoveCard = (props) => {

    return (
        <div 
            style={
                {backgroundColor:'rgba(100,100,100,0.2)',
                border:'1px solid black'    
            }
            }
            // onClick={() => props.teamCardClick(props.team)}
        >
            <h4>{props.move.name}</h4>
        </div>)
}
export default MoveCard