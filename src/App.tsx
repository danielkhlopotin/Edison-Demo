import React from "react";
import logo from "./logo.svg";
import "./App.css";
import UserCard from "./components/card";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <UserCard></UserCard>
      </header>
    </div>
  );
}

export default App;
