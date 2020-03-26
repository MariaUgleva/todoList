import React, { Component } from "react";
import Notes from "./Notes";
import { withoutIndex } from "./utils";
import { createStore } from 'redux';
import allState from './store/state';

var store = createStore(allState);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
     notes: allState()
    }
  }

  onNoteDelete = (indexToRemove) => {
    this.setState(oldState => {
      return {
        notes: withoutIndex(oldState.notes, indexToRemove)
      };
    });
  };
  onNoteCreate = newNoteText => {
    if (newNoteText !== '') {
      this.setState(oldState => {
        return {
          notes: (oldState.notes).concat(newNoteText)
        }
      })
    }
  }
  render() {
    return (
        <Notes
          notes={this.state.notes}
          onDelete={this.onNoteDelete}
          onCreate={this.onNoteCreate} />
    )
  }
}

export default App;
