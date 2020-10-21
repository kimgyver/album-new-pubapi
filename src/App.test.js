import React from "react";
import ReactDOM from 'react-dom';
import { shallow, mount } from "enzyme";
import App from "./App";
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Albums from "./Albums";
import Photos from "./Photos";
import { MemoryRouter } from "react-router-dom";

configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("renders correctly", () => {
  const wrapper = mount(<App />);
});

it("renders title of albums", () => {
  const wrapper = shallow(<Albums />);
  const title = <h3>Album List</h3>;
  expect(wrapper.contains(title)).toEqual(true);
});

it("accepts photos props", () => {  
  const wrapper = shallow(<MemoryRouter><Photos id={5} /></MemoryRouter>);
  expect(wrapper.props().children.props.id).toEqual(5);
});
