import React from "react";
import "./app.component.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../sidenav/navbar.component";
import Slider from "../slider/slider.component";
import Routes from "../routes/routes.component";
import { Row } from "react-bootstrap";
import { ApolloProvider } from "@apollo/react-hooks";
import client from "../../common/apollo/apollo-client";

const App: React.FC = () => {
  return (
    <>
      <ApolloProvider client={client}>
        <Row style={{ margin: "2%" }}>
          <Slider />
        </Row>

        <Navbar />
        <Routes />
      </ApolloProvider>
    </>
  );
};
export default App;
