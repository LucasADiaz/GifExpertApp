import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');


describe('pruebas en el componente GifGrid', () => {
    
    const category = 'One Punch'
    
    test('should  mostrarse correctamente', () => {
        
        useFetchGifs.mockReturnValue({
            data:[],
            loading: true
        });

        const wrapper = shallow(<GifGrid category={category} />)
        expect( wrapper ).toMatchSnapshot();
    });

    test('should debe regresar la informacion | debe mostrar item cuando se cargan imagenes | useFetchGifs', () => {
        
        const gifs = [{
            id:'ABC',
            url: 'https://localhost/cualquier/cosa.jpg',
            title: 'cualquier cosa'
        },{
            id:'123',
            url: 'https://localhost/cualquier/cosa.jpg',
            title: 'cualquier cosa'
        }]

        useFetchGifs.mockReturnValue({
            data:[],
            loading: false
        })
        const wrapper = shallow(<GifGrid category={category} />)
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('p').exists() ).toBe(false)
        // expect( wrapper.find('GifGridItem').length ).toBe(gifs.length)
    })
    
    
});
