import React from "react";
import "./app.component.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../sidenav/navbar.component";
import Slider from "../slider/slider.component";
import Routes from "../routes/routes.component";
import { Row, Col } from "react-bootstrap";

const App: React.FC = () => {
  return (
    <>
      <Row style={{ margin: "2%" }}>
        <Slider />
      </Row>

      <Navbar />
      <Routes />
    </>
  );
};
export default App;
