import React from 'react';

const Countries = (props) => {
      // console.log(props.country);
      const {name,population,region, flags}= props.country;
      const flagStyle ={height:"50px"};
      const countryStyle = {
            border :'1px solid red', 
            margin: '10px',
            padding :'10px',
           
            
            }
      return (
            <div style={countryStyle}>
                  
                  <p>Country name : {name.common} </p>
                  <img style={flagStyle} src={flags.png} alt=""></img>
                  <p> population: {population}</p>
                  <p> Region :{region}</p>
                  
            </div>
      );
};

export default Countries;