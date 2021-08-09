import React from "react";
import  "./SeasonDisplay.css";
const findSeason  =(Lat , month)=>{
    if (month>2 && month<9){
    return Lat>0 ? "summer" : "winter";}
else{
    return Lat>0 ? "winter" : "summer";
}
};

const seasonConfig={
    summer:{
        text:"let's hit the beach",
        iconName: "sun"
    },
    winter:{
        text:"burr , it is chilly",
        iconName: "snowflake"
    }
};
const SeasonDisplay =props=>{
    const season = findSeason(props.Lat , new Date().getMonth)
    
    const {text  , iconName}=seasonConfig[season];
   

    return (<div className={`season-display ${season}`}>
    <i className={`${iconName} icon-left massive icon`} />
    <div className="season-text"><h1> {text} </h1></div>
    <i className={`${iconName} icon-right massive icon`} />
    </div>
    );
}
export default SeasonDisplay;