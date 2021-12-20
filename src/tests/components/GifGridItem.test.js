import React from 'react';
import {shallow} from 'enzyme';
import {GifGridItem} from '../../components/GifGridItem'

describe('GifGridItem tests', ()=>{
    test('it should render GifGridItem properly', ()=>{
        const wrapper = shallow(<GifGridItem />);
        expect(wrapper).toMatchSnapshot();
    });
})