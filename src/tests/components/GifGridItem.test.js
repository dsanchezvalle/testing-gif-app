import React from 'react';
import {shallow} from 'enzyme';
import {GifGridItem} from '../../components/GifGridItem'

describe('GifGridItem tests', ()=>{
    const title = 'Test title';
    const url = 'https://localhost/test.jpg';
    const wrapper = shallow(<GifGridItem title={title} url={url} />);
    
    test('it should render GifGridItem properly', ()=>{
        expect(wrapper).toMatchSnapshot();
    });

    test('it should display a paragraph with the title', () => {
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);
    });

    test('it should have an image with img url and alt text', ()=>{
        const img = wrapper.find('img');
        expect(img.prop('alt')).toBe(title);
        expect(img.prop('src')).toBe(url);
    });

    test('it should have an animate_fadeIn class', ()=>{
        //console.log(wrapper.props())
        expect(wrapper.hasClass('animate__fadeIn')).toEqual(true); 
    })


})