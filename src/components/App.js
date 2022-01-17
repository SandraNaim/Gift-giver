import React, { Component } from "react";
import { Button } from "react-bootstrap";

class App extends Component {
  constructor(){
    super();
    this.state = {
      gifts: []
    }
  }

  addGifts = () => {
    const { gifts } = this.state
    const ids = gifts.map((gift) => gift.id)
    const max_id = ids.length > 0 ? Math.max(...ids) : 0
    gifts.push({id: max_id+1})
    this.setState({ gifts })
  }

  render(){
    return(
      <div>
        <h2>Gift Givers</h2>
        <div data-test="gift-list">
          {
            this.state.gifts.map((gift) => {
              return<div key={gift.id}></div>
            })
          }
        </div>
        <Button data-test="add-btn" onClick={this.addGifts}>Add gifts</Button>
      </div>
    )
  }
}

export default App;
