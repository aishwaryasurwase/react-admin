import { Admin, Resource } from "react-admin";
import Dashboard from "./Dashboard";
import React from "react";
import "./App.css";
import { UserList } from "./users";
import dataProvider from "./dataProvider";

function App() {
  return (
    <div className="App">
      <Admin dashboard={Dashboard} dataProvider={dataProvider}>
        <Resource name="users" list={UserList} />
      </Admin>
    </div>
  );
}

export default App;
