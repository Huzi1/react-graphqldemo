import React, { useState } from "react";
import { Characters } from "../../generated/types";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
interface Props {
  gender?: String | null;
  id?: number | null;
  image?: string | null;
  species?: String | null;
  status?: String | null;
  type?: String | null;
  name?: String | null;
}

const CharacetersList: React.FC<Props> = (props) => {
  const { gender, id, image, species, status, type, name } = props;

  return (
    <>
      <Col style={{ padding: "0.5%", margin: "0.5%" }}>
        <Card style={{ width: "15rem" }} bg={"Light"}>
          <Card.Img variant="top" src={image || " "} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
              <p>
                <strong>Gender: </strong> {gender}
                <br />
                <strong>Id: </strong> {id}
                <br />
                <strong>Species: </strong> {species}
              </p>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">
              <strong>Status: </strong>
              {status}
            </small>
          </Card.Footer>
        </Card>
      </Col>
    </>
  );
};

export default CharacetersList;
