import React from 'react';
import CountUp from 'react-countup';
const Card=(props)=> {
		return(			
		<div className="row">
      <div className="col-sm-4">
          <div className="card">
          <div className="card-body">
            <h5 className="card-title text-center">Confirmed</h5>
             <p className="card-text text-center">{props.confirmed}</p>
            <p className="card-text text-center">
            {console.log(props.confirmed)}
            <CountUp start={0} end={props.confirmed} duration={2.75} separator="," />            
            </p>
          </div>
          </div>
      </div>
      <div className="col-sm-4">

          <div className="card">
          <div className="card-body">
            <h5 className="card-title text-center">Recovered</h5>
            <p className="card-text text-center">{props.recovered}</p>
          </div>
          </div>
        
      </div>
      <div className="col-sm-4" >
                        <div className="card">
          <div className="card-body">
            <h5 className="card-title text-center">Deaths</h5>
            <p className="card-text text-center">{props.deaths}</p>
          </div>
          </div>
    </div> </div>
			);
	
}
export default Card;