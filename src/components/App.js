import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { max_number } from "../helper";
import Gift from "./Gift";

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
    const max_id = max_number(ids)
    gifts.push({id: max_id+1})
    this.setState({ gifts })
  }
  removeGift = (id) => {
    const gifts = this.state.gifts.filter(gift => gift.id !== id)
    this.setState({ gifts })
  }

  render(){
    return(
      <div>
        <h2>Gift Givers</h2>
        <div data-test="gift-list">
          <div data-test="gift-component">{
            this.state.gifts.map((gift) => {
              return(
                <Gift 
                  key={gift.id}
                  gift={gift}
                  removeGift={this.removeGift}
                />
              )
            })
          }</div>
        </div>
        <Button data-test="add-btn" onClick={this.addGifts}>Add gifts</Button>
      </div>
    )
  }
}

export default App;
