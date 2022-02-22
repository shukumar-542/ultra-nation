
import './App.css';
import { useEffect, useState } from 'react';
import Countries from './components/Countries/Countries';



function App() {
  const [countries,setCountries] =useState([]);
  useEffect(()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => {setCountries(data)
    //  const userName = data.map(user =>user.name); 
    //  console.log(userName);
    })
    
  },[])
  return (
    <div className="App">
     <h1>total country :{countries.length}</h1>
       
        <ul>
          {countries.map(country =><Countries country ={country} key={country.cca3} ></Countries>)}
        </ul>
      
    </div>
  );
}

export default App;
