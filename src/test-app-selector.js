const state={
    todo:[{id:3,todo:"hi"},{id:4,todo:"yo"}]
};
console.log(state.todo)
export const testUseAppSelector=(f)=>f(state);
