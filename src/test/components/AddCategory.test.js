import React from 'react';
import '@testing-library/jest-dom'
import { shallow }from 'enzyme';
import { AddCategory } from '../../components/AddCategory';


describe('Pruebas sobre el componente AddCategory', () => {
   
    const setCategories= jest.fn();
    let wrapper = shallow( <AddCategory setCategories={setCategories} />)
    
    beforeEach(()=>{
        jest.clearAllMocks();
        wrapper = shallow( <AddCategory setCategories={setCategories} />)
    
    })

    test('should mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('should de cambiar la caja de texto ', () => {
        const input = wrapper.find('input');
        const value = 'hola mundo'
        input.simulate('change', { target: {value} });
    })

    test('NOT should postear la informacion con submit', () => {
        wrapper.find('form').simulate('submit', {preventDefault(){}})

        expect( setCategories ).not.toHaveBeenCalled();
    })

    test('should de cambiar la caja de texto ', () => {
        const value = 'hola mundo'
        wrapper.find('input').simulate('change',{target:{value}});
        wrapper.find('form').simulate('submit',{preventDefault(){}});
        expect(setCategories).toHaveBeenCalled();
        expect(setCategories).toHaveBeenCalledTimes(1);
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
        
        expect(wrapper.find('input').prop('value')).toBe('')
    })
    
    
    
});
