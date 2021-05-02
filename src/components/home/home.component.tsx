import React from "react";
import { Card, CardGroup } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import typeS from "../../assets/typeS.png";
import reactImage from "../../assets/reactImage.png";
const Home: React.FC = () => {
  return (
    <>
      <h1
        style={{
          color: "#7ACD74",
          fontFamily: "fantasy",
          textAlign: "center",
        }}
      >
        About App
      </h1>
      <br />
      <div>
        <Container>
          <CardGroup>
            <Card>
              <Card.Img variant="top" src={typeS} />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img variant="top" src={reactImage} />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This card has supporting text below as a natural lead-in to
                  additional content.{" "}
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img variant="top" src={reactImage} />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This card has even longer
                  content than the first to show that equal height action.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
          </CardGroup>
        </Container>
      </div>
      <p
        style={{
          color: "#7ACD74",
          fontFamily: "fantasy",
          textAlign: "center",
        }}
      >
        Typescript Graphql Client with infinite scroll
      </p>
    </>
  );
};
export default Home;
