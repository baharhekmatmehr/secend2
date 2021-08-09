import React from "react";
import reactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";
import  "./SeasonDisplay.css";
class App extends React.Component{
    
   state ={Lat: null , errorMassage:""}

    componentDidMount(){
         window.navigator.geolocation.getCurrentPosition(
            position =>this.setState({Lat: position.coords.latitude}),
            err=> this.setState({errorMassage: err.message})
        );
    }
    renderContent () {
        if(this.state.errorMassage && !this.state.Lat){
            return<div> Error:{this.state.errorMassage}</div>
        }
        if(this.state.Lat && !this.state.errorMassage){
            return <SeasonDisplay Lat= {this.state.Lat}/>
        }
        
        return <Spinner massage="please accept location request"/>
       
    }
    render(){
        return(
    <div className="border-red">
        {this.renderContent()}
    </div>
        );
    }
}
reactDOM.render(<App /> , document.querySelector("#root"))