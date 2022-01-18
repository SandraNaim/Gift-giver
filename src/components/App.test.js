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
    const id = 1;

    beforeEach(() => {
      app.find("[data-test='add-btn']").simulate('click');
    })

    afterEach(() => {
      app.setState({gifts: []})
    })

    it('add new gift state', () => {
      expect(app.state().gifts).toEqual([{id}])
    })
  
    it('add a new gift to the gifts list', () => {
      expect(app.find("[data-test='gift-list']").children().length).toEqual(1);
    })

    describe('when the user wants to remove a gift', () => {
      beforeEach(() => {
        app.instance().removeGift(id)
      })

      it('remove gift', () => {
        expect(app.state().gifts).toEqual([])
      })
    })
  })

  it('check the Gift component', () => {
    expect(app.find("[data-test='gift-component']").exists()).toBe(true);
  })
 
})