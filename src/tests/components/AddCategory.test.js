import React from 'react';
import { AddCategory } from '../../components/AddCategory'
import { shallow } from 'enzyme'

describe('AddCategory tests', () => {
    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories}  />);

    beforeEach(()=>{
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories}  />);
    });

    test('AddCategory should render properly', ()=>{
        expect(wrapper).toMatchSnapshot();
    });

    test('input should change', ()=>{
        const input = wrapper.find('input');
        const value = "Hello world!";
        input.simulate('change', {target: {value}});
        const inputAfter = wrapper.find('input');
        expect(inputAfter.prop('value')).toBe(value);
        //You can test with an extra paragraph that the value changed.
    });

    test('it should not post info on submit', () => {
        //const prevDef = jest.fn();

        wrapper.find('form').simulate('submit', {preventDefault(){}});
        expect(setCategories).not.toHaveBeenCalled();
    });

    test('it should call setCategories and reset input', ()=>{
        const value = 'Test value';
        wrapper.find('input').simulate('change', {target:{value}});
        wrapper.find('form').simulate('submit', {preventDefault(){}});
        expect(setCategories).toHaveBeenCalled();
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
        //expect(setCategories).toHaveBeenCalledTimes(2);
        expect(wrapper.find('input').prop('value')).toBe('');

    })

});