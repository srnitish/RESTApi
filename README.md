import React, { useEffect, useState } from 'react';
import axios from 'axios';

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
          <li key={index}>
            <p>Country: {country.name.common}</p>
            
            {country.currencies ? (
              <ul>
                {Object.keys(country.currencies).map((currencyCode, index) => (
                  <li key={index}>
                    Name: {country.currencies[currencyCode].name} | Currency: {currencyCode} |  Symbol: {country.currencies[currencyCode].symbol}
                  </li>
                ))}
              </ul>
            ) : (
              <p>No currency information available</p>
            )
            }
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Countries;
