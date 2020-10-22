import React, { Component } from "react";
import "./App.css";
import { TextField, IconButton, Fab } from "@material-ui/core";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import Chit from "./components/chit";
import Modal from "react-modal";
import ReceiptIcon from "@material-ui/icons/Receipt";
//
//
Modal.setAppElement("#root");
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chits: [],
      input: "",
      open: false,
    };
    // this.pickRandom = this.pickRandom.bind(this);
  }

  render() {
    return (
      <div className="App">
        <Modal
          style={{
            overlay: { backgroundColor: "rgba(0, 0, 0, 0.75)" },
            content: { textAlign: "center" },
          }}
          isOpen={this.state.open}
          onRequestClose={() => {
            this.setState({ open: false });
          }}
        >
          <h2>
            {
              this.state.chits[
                Math.floor(Math.random() * Math.floor(this.state.chits.length))
              ]
            }
          </h2>
        </Modal>
        <Fab
          color="primary"
          aria-label="add"
          style={{
            position: "fixed",
            bottom: "4vw",
            right: "4vw",
          }}
          onClick={() => {
            if (this.state.chits.length > 0) {
              this.setState({ open: true });
            }
          }}
        >
          <ReceiptIcon />
        </Fab>
        <h1>Random Chit Picker</h1>
        <form className="chitMakerForm">
          <TextField
            id="chitMaker"
            label="Chit"
            value={this.state.input}
            placeholder="Enter chit here"
            // value={}
            onChange={(e) => {
              // e.preventDefault();
              this.setState({ input: e.target.value });
              // console.log(this.state.input);
            }}
          />
          <IconButton
            aria-label="Add"
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              if (
                this.state.input !== "" &&
                this.state.input !== " " &&
                this.state.input !== undefined &&
                this.state.input !== null
              ) {
                this.setState({
                  chits: [...this.state.chits, this.state.input],
                });
                this.setState({ input: "" });
              }
              console.log(this.state.chits);
            }}
          >
            <AddCircleIcon />
          </IconButton>
        </form>
        {this.state.chits.map((chit) => (
          <Chit chit={chit} />
        ))}
      </div>
    );
  }
}

export default App;
