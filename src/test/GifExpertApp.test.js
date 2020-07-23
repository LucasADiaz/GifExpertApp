import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme';
import { GifExpertApp } from '../GifExpertApp';


describe('Pruebas en GifExpertApp', () => {
    test('should ser igual al snap', () => {
        const wrapper = shallow(<GifExpertApp  />)
        expect( wrapper ).toMatchSnapshot();
    })

    test('should de mostrar lista de categorias', () => {
        const categories = ['One Punch', 'Dragon Ball']
        const wrapper = shallow(<GifExpertApp defaultCategories={categories} />)
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length)
    })
    
    
});

