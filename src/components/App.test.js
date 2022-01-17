import React from "react";
import { shallow } from 'enzyme';
import App from './App';

const app = shallow(<App />);


it('renders correctly', () => {
  expect(app).toMatchSnapshot();
})

it('initialize a state of an empty gifts array', () => {
  expect(app.state().gifts).toEqual([]);
})

it('add new gift after clicking on the button', () => {
  app.find("[data-test='add-btn']").simulate('click');
  expect(app.state().gifts).toEqual([{id: 1}])
})

it('add a new gift to the gifts list after clicking the add button', () => {
  app.find("[data-test='add-btn']").simulate('click');
  expect(app.find("[data-test='gift-list']").children().length).toEqual(2);
})