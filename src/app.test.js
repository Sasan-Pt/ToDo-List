import App from "./App";
import {useAppSelector} from "./hooks";
import {testUseAppSelector} from "./test-app-selector";
import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({adapter: new Adapter()});

jest.mock("./hooks");

describe("App",()=>{
    beforeEach(()=>{
        useAppSelector.mockImplementation(testUseAppSelector);
    });

it("does render the parent div",()=>{
    const component=shallow(<App />);
    const wrapper = component.find(`[data-test='appComponent']`);
    expect(wrapper.length).toBe(1)
});
    it("does render the body",()=>{
        const component=shallow(<App />);
        const wrapper = component.find(`[data-test='bodycomponent']`);
        expect(wrapper.length).toBe(1)
    });
    it("does render the ol",()=>{
        const component=shallow(<App />);
        const wrapper = component.find(`[data-test='olTag']`);
        expect(wrapper.length).toBe(1)
    });
    it("does render Todolist component",()=>{
        const component=shallow(<App />);
        const wrapper = component.find(`[data-test='todoListComp']`);
        expect(wrapper.length).toBe(2)
    })

});
