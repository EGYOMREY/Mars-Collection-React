import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {PicturesContainer} from './PicturesContainer';
import MessageDisplayer from "../../../components/MessageDisplayer/MessageDisplayer";

configure({adapter: new Adapter()});
describe("<PicturesContainer />", () => {
	 let wrapper;
    
    beforeEach(() => {
        wrapper = shallow(<PicturesContainer />);
    });

	it("Should render an initial Message", () => {
		expect(wrapper.find(MessageDisplayer)).toHaveLength(1);
	});

	it("Should render a Message when there's an error", () => {
		wrapper.setProps({requestError: true, initialSearchBegan: true, loading: false, pictureData: false});
		expect(wrapper.find(MessageDisplayer)).toHaveLength(1);
	});

	it("Should render a Message when Loading", () => {
		wrapper.setProps({loading: true});
		expect(wrapper.find(MessageDisplayer)).toHaveLength(1);
	});

	it("Should render a Message when the search was successful", () => {
		wrapper.setProps({pictureData: true, loading: false});
		expect(wrapper.find(MessageDisplayer)).toHaveLength(1);
	});


});
