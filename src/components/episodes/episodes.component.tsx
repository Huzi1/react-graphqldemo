import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import moment from "moment-timezone";
interface Props {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  // characters: Character[];
  created: string;
}
const EpisodeList: React.FC<Props> = (props) => {
  const { id, name, air_date, episode, created } = props;
  // const momentTz = moment(air_date);
  // console.log(moment.tz("Australia/Sydney").format("MMMM Do YYYY"));
  return (
    <>
      <Col style={{ padding: "0.5%", margin: "0.5%" }}>
        <Card style={{ width: "15rem" }} bg={"info"}>
          <Card.Title
            style={{
              color: "#7ACD74",
              fontFamily: "fantasy",
              textAlign: "center",
            }}
          >
            {name}
          </Card.Title>
          <Card.Subtitle className="mb-2 " style={{ textAlign: "center" }}>
            {episode}
          </Card.Subtitle>
          <Card.Text>
            <p
              style={{
                padding: "1em0",
                margin: "0",
                textAlign: "center",
              }}
            >
              <strong>Air_date: </strong>
              {air_date}

              <br />
              <strong>ID:</strong>
              {id}
            </p>
          </Card.Text>
        </Card>
      </Col>
    </>
  );
};
export default EpisodeList;

// 2017-11-10T12:56:33.798Z
