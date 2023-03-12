import { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/css/style.css";

import Home from "./components/home.component";

class App extends Component {
    render() {
        return (
            <Router>
                <Routes>
                    <Route path="/" exact element={<Home />} />
                </Routes>
            </Router>
        );
    }
}
export default App;