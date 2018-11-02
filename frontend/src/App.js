import React, { Component } from "react";
import axios from "axios";
import "./App.css";

const API_SERVER = "http://localhost:5000";

class App extends Component {
  state = {
    q: "",
    currentGifs: []
  };

  componentWillMount() {
    this.renderGifs({ target: { value: "Google" } });
  }

  renderGifs(e) {
    let q = e.target.value;

    axios
      .get(`${API_SERVER}/giphy?q=${q}`)
      .then(response => {
        console.log("---------- calling ---------");
        this.setState({
          currentGifs: response.data.data
        });
      })
      .catch(e => console.log(e.message));
  }

  render() {
    return (
      <React.Fragment>
        <div className="">Search</div>
        <input type="text" onChange={e => this.renderGifs(e)} />

        <div className="">
          {this.state.currentGifs.map((item, index) => {
            return (
              <div key={index}>
                {item.title}
                <img src={item.images.original.url} alt={item.title} height={80} width={80} />
              </div>
            );
          })}
        </div>
      </React.Fragment>
    );
  }
}

export default App;
