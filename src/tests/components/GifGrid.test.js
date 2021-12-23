import { GifGrid } from '../../components/GifGrid';
import { shallow } from 'enzyme'
import React from 'react'
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('GifGrid tests', ()=>{
    test('it should render properly', ()=>{
        useFetchGifs.mockReturnValue({
            data:[],
            loading: true
        });
        const category = 'Goku';
        const wrapper = shallow(<GifGrid category={category} />);
        expect(wrapper).toMatchSnapshot();
    });

    test('it should show items when imgs are loaded through useFetchGifs', ()=>{
        const gifs = [
            {
                id: 'ABC',
                url: 'https://localhost/any.jpg',
                title: 'Any title'
            },
            {
                id: '123',
                url: 'https://localhost/any.jpg',
                title: 'Any title'
            }
        ];
        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });
        const category = 'Goku';
        const wrapper = shallow(<GifGrid category={category} />);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
    })
})