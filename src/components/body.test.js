import React from "react";
import Adapter from "enzyme-adapter-react-16"
import {shallow,configure} from "enzyme";
import Body from "./body";
import * as reactRedux from 'react-redux'

configure({adapter: new Adapter()});

const findByTestAtrr = (component, attr) => {
    const wrapper = component.find(`[data-test='${attr}']`);
    return wrapper;
};

const setUp=(props={})=>{
    const component=shallow(<Body {...props}/>);
    return component;
};
describe("testing form component",()=>{
   describe("each form element",()=>{
       const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');
       const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch');
       let component;

       beforeEach(()=>{
           component=setUp();
           useSelectorMock.mockClear();
           useDispatchMock.mockClear();

       });
       it('testing use dispatch', () => {
           // ARRANGE
           const dummyDispatch = jest.fn();
           useDispatchMock.mockReturnValue(dummyDispatch);
           expect(dummyDispatch).not.toHaveBeenCalled()});
       it('should render a paragraph',  ()=> {
           const wrapper=findByTestAtrr(component,"paratest");
           expect(wrapper.length).toBe(1)
       });
       it('should render the input',  ()=> {
           const wrapper=findByTestAtrr(component,"inputtest");
           expect(wrapper.length).toBe(1)
       });
       it('should render the input',  ()=> {
           const wrapper=findByTestAtrr(component,"buttontest");
           expect(wrapper.length).toBe(1)

       });

   })
});
describe("test",()=>{
    let mockFunc;
    let wrapper;
    beforeEach(()=>{
        mockFunc = jest.fn();
        const props = {
            buttonText: 'Example Button Text',
            emitEvent: mockFunc
        };
        wrapper = shallow(<Body {...props} />);
    })
    it("button working on click",()=>{
        const button = findByTestAtrr(wrapper, 'buttontest');
        button.simulate('click');
        const callback = mockFunc.mock.calls.length;
        expect(callback).toBe(1);
    });


})
