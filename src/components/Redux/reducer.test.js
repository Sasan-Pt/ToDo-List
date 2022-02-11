import {addtodo,deletetodo,edittodo} from "./actions";
import todo from "./reducer"


describe("posts reducer",()=>{
    const newState=todo(undefined,{});
    expect(newState).toEqual([])
});
it('should return new state if receiving type',  ()=> {
    const posts={id: 0.6557669655683394, todo: "salam"};
    const newState=todo(undefined,addtodo(posts));
    expect(newState).toEqual([posts]);
});











