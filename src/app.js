import React, { Suspense } from "react";
import { Container } from "react-bootstrap";
import { AppContextProvider } from "./context/app.context";
import CustomSpinner from "./components/spinner/spinner.component";
import Routes from "./routes";
import "regenerator-runtime/runtime";
import "./app.scss";

const App = () => {
  return (
    <AppContextProvider>
      <Container fluid>
        <Suspense fallback={<CustomSpinner />}>
          <Routes />
        </Suspense>
      </Container>
    </AppContextProvider>
  );
};

export default App;
