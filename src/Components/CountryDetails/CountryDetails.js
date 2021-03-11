import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import './CountryDetails.css'
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
      {country.map((details) => (
        <div details={details}>
          <Card className="container details">
            <Card.Body>
              <Card.Title>
                <h1>{countryName}</h1>
              </Card.Title>
              <Card.Text>
                <h3>Capital: {details.capital}</h3>
                <h4>Population:{details.population}</h4>
                <p>Timezone: {details.timezones}</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default CountryDetails;
