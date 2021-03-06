import React from 'react'
import ReactDOM from 'react-dom'
import SeasonDisplay from "./SeasonDisplay"
import Loader from "./Loader"

class App extends React.Component{
   state = {lat : null, errormessage : null}
    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({lat : position.coords.latitude}),
            err => this.setState({errormessage : err.message})
    
        );
    }
    renderContent(){
        if (this.state.errormessage && !this.state.lat){
            return <div>Error: {this.state.errormessage}</div>
        }
        if (!this.state.errormessage && this.state.lat){
            return <SeasonDisplay lat={this.state.lat}/>
        }
        return <Loader message="Please allow the location"/>
     }
    render(){
        return(
            <div className = "border_red">
                {this.renderContent()}
            </div>
        );
    }    
}

ReactDOM.render(<App/>, document.querySelector("#root"));