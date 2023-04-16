import React from "react";
import logo from "./logo.svg";
import "./App.css";
import UserCard from "./components/UserCard";
import CardHolder from "./components/CardHolder";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Awesome People</h1>
        {/* <UserCard></UserCard> */}
        <CardHolder></CardHolder>
      </header>
    </div>
  );
}

export default App;
