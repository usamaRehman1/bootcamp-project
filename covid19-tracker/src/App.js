import React, { useState, useEffect } from 'react';
import { Card, Chart, CountryPicker } from './component';
import LOGO from './corona.png';
import { FetchData } from './apis/apis'
import './app.css'

function App() {

  const [data , setData] = useState({})
  const [country , setCountry] = useState({})

  useEffect(async () => {
    const getDataHere = await FetchData();
    setData(getDataHere)
  }, [])

  const handelCountryChange = async (_country) => {
    const fetchDataHere = await FetchData(_country);
    setData(fetchDataHere)
    setCountry(_country)
  } 

  console.log("Data =>", data)
  
  return (
    <div>
      <img src={LOGO} className="coronaLogo" alt="corona logo"/>
      <Card data={data}/>
      <CountryPicker handelCountryChange={handelCountryChange}/>
      <Chart data={data} country={country}/>
    </div>
  );
}

export default App;
