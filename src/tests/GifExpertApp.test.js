import React from 'react';
import {shallow} from 'enzyme';
import {GifExpertApp} from '../GifExpertApp'

describe('GifExpertApp tests', ()=>{
    test('it should render GifExpertApp properly', () => {
        const wrapper = shallow(<GifExpertApp />)
        expect(wrapper).toMatchSnapshot();
    });
})