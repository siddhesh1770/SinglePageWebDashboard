import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import React from "react";
import LandingPage from "./screens/LandingPage/LandingPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MyBoard from "./screens/MyBoard/MyBoard";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" component={LandingPage} />
          <Route path="/myboard" component={MyBoard} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
