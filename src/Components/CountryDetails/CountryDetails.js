import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const CountryDetails = () => {
  let { countryName } = useParams();
  const [country, setCountry] = useState([]);
  useEffect(() => {
    const url = `https://restcountries.eu/rest/v2/name/${countryName}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCountry(data));
  }, [countryName]);
  return (
    <div className="text-center">
      <h2>This is {countryName}</h2>
      {/* {country.map((population) =>  <h4>{population.population}</h4>)
      }
      {
        country.map(capital => <p>{capital.capital}</p>)
      } */}
      {country.map((details) => (
        <div details={details}>
          <h4>{details.capital}</h4>
          <p>{details.population}</p>
        </div>
      ))}
    </div>
  );
};

export default CountryDetails;
