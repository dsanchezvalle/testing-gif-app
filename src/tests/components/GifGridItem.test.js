import React from 'react';
import {shallow} from 'enzyme';
import {GifGridItem} from '../../components/GifGridItem'

describe('GifGridItem tests', ()=>{
    const title = 'Test title';
    const url = 'https://localhost/test.jpg';
    
    test('it should render GifGridItem properly', ()=>{
        const wrapper = shallow(<GifGridItem title={title} url={url} />);
        expect(wrapper).toMatchSnapshot();
    });
})