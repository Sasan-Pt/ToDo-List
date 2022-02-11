import {createReducer} from "@reduxjs/toolkit";
import {addtodo,deletetodo,edittodo} from './actions';

const todo=createReducer([],
    {
        [addtodo]:(state,{payload})=> [...state,payload],
        [deletetodo]:(state,{payload})=>{
             return  state.filter((x) => x.id !== payload)
        },
        [edittodo]:(state,{payload})=>{
            let  newTodos = [...state];
            let index = -1;
            for (let i = 0; i < newTodos.length; i++) {
                index++;
                if (newTodos[i].id === payload[0]) {
                    break;
                }
            }
            if (index !== -1) {
                newTodos[index] = {"id":payload[0],"todo":payload[1]};
                return newTodos;
            }
        }
        }
    );
 export default todo

