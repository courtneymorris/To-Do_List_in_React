import React, { Component } from "react";

import ToDoListWrapper from "./to-do-list-wrapper";
import Header from "./header";
import Footer from "./footer";

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <h1>To-Do List</h1>

        <Header />
        <ToDoListWrapper />
        <Footer />
      </div>
    );
  }
}
