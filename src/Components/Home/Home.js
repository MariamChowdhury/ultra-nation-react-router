import React, { useEffect, useState } from "react";
import Country from "../Country/Country";

const Home = () => {
  const [country, setCountry] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((res) => res.json())
      .then((data) => setCountry(data));
  }, []);
  return (
    <div className=" container">
      <h1 className="text-center my-5">Total Countries: {country.length}</h1>
      {country.map((country) => (
        <Country country={country}></Country>
      ))}
    </div>
  );
};

export default Home;
