import React from "react";
import { Card, CardGroup } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import typeS from "../../assets/typeS.png";
import reactImage from "../../assets/reactImage.png";
import apollo from "../../assets/apollo.png";
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

      <p
        style={{
          color: "#7ACD74",
          fontFamily: "fantasy",
          textAlign: "center",
        }}
      >
        Typescript Graphql Client with fetchMore infinite scroll
      </p>
      <div>
        <Container>
          <CardGroup>
            <Card>
              <Card.Img variant="top" src={typeS} />
              <Card.Body>
                <Card.Title>Typescript</Card.Title>
                <Card.Text>
                  Typescript is a stirct syntactical superset of Javascript.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" src={reactImage} />
              <Card.Body>
                <Card.Title>React</Card.Title>
                <Card.Text>
                  ReactJS is a popular frontend library, it is fast scalable and
                  simple.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" src={apollo} />
              <Card.Body>
                <Card.Title>Apollo client for Graphql</Card.Title>
                <Card.Text>
                  Apollo Client is a comprehensive state management library for
                  Javascript that enables you to manage both local and remote
                  data with GraphQL.
                </Card.Text>
              </Card.Body>
            </Card>
          </CardGroup>
        </Container>
        <Container style={{ padding: "2%" }}>
          <Row>
            <Col>
              <h2
                style={{
                  fontSize: "2em",
                  margin: "0.67em 0",
                  color: "#7ACD74",
                  fontFamily: "fantasy",
                  textAlign: "center",
                }}
              >
                About Me
              </h2>
              <p
                style={{
                  fontSize: "1em",
                  margin: "0.67em 0",
                  color: "#7ACD74",
                  fontFamily: "fantasy",
                  textAlign: "center",
                }}
              >
                <strong>
                  {" "}
                  " I am a full stack software developer based in Melbourne,
                  Australia. I like to explore new languages, frameworks and
                  cloud services. I am a recent graduate from RMIT University in
                  masters of information technology specialized in software
                  engineering "
                </strong>
              </p>
              <div style={{ textAlign: "center" }}>
                <a href="https://github.com/Huzi1">
                  <img
                    alt="Github"
                    src="https://img.icons8.com/nolan/64/github.png"
                  />
                </a>
                <a href="https://www.linkedin.com/in/yamin-huzaifa">
                  <img
                    alt="Linkedin"
                    src="https://img.icons8.com/nolan/64/linkedin.png"
                  />
                </a>
                <a href="https://twitter.com/huzaifa_saleem1">
                  <img
                    alt="twitter"
                    src="https://img.icons8.com/nolan/64/twitter.png"
                  />
                </a>
                <a href="https://www.yaminhuzaifa.xyz">
                  <img
                    alt="Portfolio website"
                    src="https://img.icons8.com/nolan/64/new-contact.png"
                  />
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
export default Home;
