import React from "react";
import { Card, Col } from "react-bootstrap";

interface Props {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  // characters: Character[];
  created: string;
}
const EpisodeList: React.FC<Props> = (props) => {
  const { id, name, air_date, episode } = props;

  return (
    <>
      <div>
        <Col style={{ padding: "0.5%", margin: "0.5%" }}>
          <Card style={{ width: "20rem", height: "10rem" }} bg={"info"}>
            <Card.Header
              style={{
                color: "#7ACD74",
                fontFamily: "fantasy",
                textAlign: "center",
              }}
            >
              {name}
            </Card.Header>
            <Card.Body>
              <Card.Title style={{ textAlign: "center" }}>{episode}</Card.Title>
              <Card.Text style={{ textAlign: "center" }}>
                <strong>Air_date: </strong>
                {air_date}

                <br />
                <strong>ID:</strong>
                {id}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </div>
    </>
  );
};
export default EpisodeList;

// 2017-11-10T12:56:33.798Z
