import React, { useEffect, useState } from 'react';
import axios from 'axios';

const myPara = {
  display: "inline-flex",
}

const Countries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get('https://restcountries.com/v3.1/all');
        const data = response.data;
        setCountries(data);
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    };
    
    fetchCountries();
  }, []);

  return (
    <div>
      <h1>Country Name & Currency </h1>
      <ul>
        {countries.map((country, index) => (
          
          <li className='main' key={index}>
            <p>Country: {country.name.common}</p>       
                 
            {country.currencies ? (
              <ul>
                {Object.keys(country.currencies).map((currency, index) => (
                  <p key={index}>
                    Currency Name: {country.currencies[currency].name} | Currency: {currency} |  Symbol: {country.currencies[currency].symbol}
                  </p>
                ))}
              </ul>
            ) : (
              <p>No Currencies information available</p>
            )
            }
            
            <p>Country Lat & Long: {country.latlng.join(", ")}</p>
            <p>Country TLD: 
              {country.tld}
              <ul>
              <li>cca2: {country.cca2}</li>
              <li>ccn2: {country.ccn2}</li>
              <li>cca3: {country.cca3}</li>
              <li>Independent: {country.independent}</li>
              <li>Status: {country.status}</li>
              <li>unMember: {country.unMember}</li>
              </ul>
            </p> 
            
            <p>Country Capital: {country.capital}</p>
            <p>Country altSpellings: {country.altSpellings.join(", ")}</p>
            <p>Country Region: {country.region}</p>
            <p>Country SubRegion: {country.subregion}</p>
           

            {country.translations ? (
              <p>Translations:
                {Object.keys(country.translations).map((translation, index) => (
                  <ul>
                    <li style={myPara} key={index}>
                      <strong>Official: </strong> {country.translations[translation].official} , 
                      <strong>Common: </strong> {country.translations[translation].common}
                      </li>
                  </ul>
                ))}</p>
            ) : ( <p>No Language information available</p> )}

            {country.languages ? (
              <p>Currency Languages:
                {Object.keys(country.languages).map((language, index) => (
                  <p style={myPara} key={index}>{country.languages[language]}</p>
                ))}</p>
            ) : ( <p>No Language information available</p> )}

              {country.idd ? (
              <p>Currency Idd:
                {Object.keys(country.idd).map((ids, index) => (
                  <ul>
                    <li style={myPara} key={index}>
                    <strong>Root:</strong>{country.idd[ids]}
                    
                    </li>
                  </ul>
                ))}</p>
            ) : ( <p>No Language information available</p> )}
            
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Countries;
