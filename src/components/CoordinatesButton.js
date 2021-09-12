import React from "react"
class CoordinatesButton extends React.Component{

    getCoordinates = (event) =>{
        return ([event.clientX,event.clientY])
    }
    
    render(){
        return(
            <button 
            onClick={(e) => this.props.onReceiveCoordinates(this.getCoordinates(e))}>Coordinates Button</button>
        )
    }
}
export default CoordinatesButton;