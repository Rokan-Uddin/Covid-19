import React from 'react';
import CountUp from 'react-countup';
const Card=(props)=> {
		return(			
		<div className="row">
      <div className=" col-12 col-sm-4">
          <div className="card">
          <div className="card-body">
            <h5 className="card-title text-center text-secondary">Confirmed</h5>
             <h3 className="card-text text-center text-primary"><CountUp end={props.confirmed} /> </h3>
                       
            
          </div>
          </div>
      </div>
      <div className="col-sm-4">

          <div className="card">
          <div className="card-body">
            <h5 className="card-title text-center text-secondary">Recovered</h5>
            <h3 className="card-text text-center text-success"><CountUp end={props.recovered} /> </h3>
          </div>
          </div>
        
      </div>
      <div className="col-sm-4" >
          <div className="card">
          <div className="card-body">
            <h5 className="card-title text-center text-secondary">Deaths</h5>
            <h3 className="card-text text-center text-danger" ><CountUp end={props.deaths} /> </h3>
          </div>
          </div>
    </div> </div>
			);
}
export default Card;