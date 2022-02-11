import React from "react";
import Adapter from "enzyme-adapter-react-16"
import {shallow,configure} from "enzyme";
import * as reactRedux from 'react-redux'
import TodoList from "./TodoList";


configure({adapter: new Adapter()});

const findByTestAtrr = (component, attr) => {
    const wrapper = component.find(`[data-test='${attr}']`);
    return wrapper;
};

const setUp=(props={})=>{
    const component=shallow(<TodoList {...props}/>);
    return component;
};
describe("testing form component",()=>{
    describe("each form element",()=> {
        const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch');
        let component;

        beforeEach(() => {
            component = setUp();
            useDispatchMock.mockClear();

        });
        it('testing use dispatch', () => {
            const dummyDispatch = jest.fn();
            useDispatchMock.mockReturnValue(dummyDispatch);
            expect(dummyDispatch).not.toHaveBeenCalled()
        });
        it('should render li Tag',  () =>{
            const component=shallow(<TodoList />);
            const wrapper = component.find(`[data-test='LiTag']`);
            expect(wrapper.length).toBe(1)

        });
        it('should render p tag on render',  () =>{
            const component=shallow(<TodoList />);
            const wrapper = component.find(`[data-test='pTag']`);
            expect(wrapper.length).toBe(1)
        });
        it('should render p tag on render',  () =>{
            const component=shallow(<TodoList />);
            const wrapper = component.find(`[data-test='pTag']`);
            expect(wrapper.length).toBe(1)
        })
    })
});

