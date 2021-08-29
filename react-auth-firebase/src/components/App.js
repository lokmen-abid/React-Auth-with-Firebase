import React from "react";
import { Container } from "react-bootstrap";
import { AuthProvider } from "../contexts/AuthContext";
import Singup from "./Singup";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashbord from "./Dashbord";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute"


function App() {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Router>
          <AuthProvider>
            <Switch>
             <PrivateRoute exact path="/" component={Dashbord} />
              <Route path="/signup" component={Singup} />
              <Route path="/login" component={Login} />
*            </Switch>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  );
}

export default App;
