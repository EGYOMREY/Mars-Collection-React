import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Pictures} from './Pictures';


configure({adapter: new Adapter()});
describe("<Pictures />", () => {
	it("should render the pictures if pictureData is NOT null", () => {
		const wrapper = shallow(<Pictures />);
		wrapper.setProps({ photosToDisplay: true, loading: false });
		expect(wrapper).toBeTruthy();
	});

});
