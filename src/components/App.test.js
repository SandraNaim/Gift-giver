import React from "react";
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  
  const app = shallow(<App />);

  it('renders correctly', () => {
    expect(app).toMatchSnapshot();
  })

  it('initialize a state of an empty gifts array', () => {
    expect(app.state().gifts).toEqual([]);
  })

  describe('after clicking the `add-btn`', () => {
    beforeEach(() => {
      app.find("[data-test='add-btn']").simulate('click');
    })

    afterEach(() => {
      app.setState({gifts: []})
    })

    it('add new gift state', () => {
      expect(app.state().gifts).toEqual([{id: 1}])
    })
  
    it('add a new gift to the gifts list', () => {
      expect(app.find("[data-test='gift-list']").children().length).toEqual(1);
    })
  })
 
})