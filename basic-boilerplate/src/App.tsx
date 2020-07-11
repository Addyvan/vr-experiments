import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

import {
  Container,
} from "reactstrap";

import ThreeContainer from "./components/ThreeContainer";

import Overlay from "./components/Overlay";

const App : React.FC<any> = () => {
  return (
    <div id="container">
      <ThreeContainer />
      {/* <div id="ui">
        <Container fluid>
          <Overlay />
        </Container>
      </div> */}
    </div>
  );
}

export default App;
