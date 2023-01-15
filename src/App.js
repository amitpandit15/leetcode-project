import React from "react";
import Table from "./Table";

function App() {
  return (
    <div>
      <h1>Admin Page</h1>
      <h2>Added Questions</h2> 
      <Table/>
      <div>
        <h2>Number of Question</h2>
        <input type={Number}></input>
      </div>
    </div>
  );
}

export default App;
