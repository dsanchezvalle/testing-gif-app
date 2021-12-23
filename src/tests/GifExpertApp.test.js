import React from 'react';
import {shallow} from 'enzyme';
import {GifExpertApp} from '../GifExpertApp'

describe('GifExpertApp tests', ()=>{
    test('it should render GifExpertApp properly', () => {
        const wrapper = shallow(<GifExpertApp />)
        expect(wrapper).toMatchSnapshot();
    });

    test('it should render a list of categories', () => {
        const categories = ['Goku', 'Pokemon'];
        console.log(categories.length)
        const wrapper = shallow(<GifExpertApp defaultCategories={categories} />);
        expect(wrapper).toMatchSnapshot();
        //console.log(wrapper.find('GifGrid').debug());
        expect(wrapper.find('GifGrid').length).toBe(categories.length);
    })
})