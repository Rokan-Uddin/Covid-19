import React from 'react';
import CountUp from 'react-countup';
const Card=(props)=> {
		return(			
		<div className="row">
      <div className=" col-12 col-sm-3">
          <div className="card">
          <div className="card-body">
            <h5 className="card-title text-center text-secondary">Confirmed</h5>
             <h3 className="mb-5 card-text text-center text-primary"><CountUp end={props.confirmed} /> </h3>
          </div>
          </div>
      </div>
      <div className="col-12 col-sm-3">
          <div className="card">
          <div className="card-body">
            <h5 className="card-title text-center text-secondary">Recovered</h5>
            <h3 className="card-text text-center text-success"><CountUp end={props.recovered} /> </h3>
            <p className="text-secondary text-center">({(Number(props.recovered/props.confirmed).toFixed(2))*100}%) </p>
          </div>
          </div>      
      </div>
      <div className=" col-12 col-sm-3">
          <div className="card">
          <div className="card-body">
            <h5 className="card-title text-center text-secondary">Active</h5>
             <h3 className="card-text text-center text-warning"><CountUp end={props.confirmed-props.recovered} /> </h3>
            <p className="text-secondary text-center">({(((props.confirmed-props.recovered)/props.confirmed).toFixed(2))*100}%) </p>
          </div>
          </div>
      </div>
      <div className="col-12 col-sm-3" >
          <div className="card">
          <div className="card-body">
            <h5 className="card-title text-center text-secondary">Deaths</h5>
            <h3 className="card-text text-center text-danger" ><CountUp end={props.deaths} /> </h3>
            <p className="text-secondary text-center">({(Number(props.deaths/props.confirmed).toFixed(4))*100}%) </p>
          </div>
          </div>
      </div> 
    </div>
			);
}
export default Card;