import React from "react";
import { useHistory } from "react-router-dom";
import "./Country.css";
import { Card, Button } from "react-bootstrap";
const Country = (props) => {
  const { flag, name, capital } = props.country;
  let history=useHistory();
  const handleCountry= (name) =>{
    const url= `country/${name}`
history.push(url);
  }
  return (
    <div className="country-container ">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={flag} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{capital}</Card.Text>
          <Button variant="primary" onClick={() =>handleCountry(name)}>Show details!</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Country;
