import React, { useState} from 'react';
import {deletetodo,edittodo} from "./Redux/actions";
import {useDispatch} from 'react-redux';
import styles from "./todolist.module.css"



const TodoList = (props) => {
    const dispatch=useDispatch();
    const togglehandler=(e)=>{
        dispatch(deletetodo(e));
    };
    const edithandler=()=>{
        setBedit(!bedit);
    };
    const UpdateHandler=(e)=>{
        if(e[1].length===0){
            setBedit(!bedit);
            return null

        }else {
            dispatch(edittodo(e));
            setBedit(!bedit)
        }


    };
    const [bedit,setBedit]=useState(false);
    const [upvalue,setUpvalue]=useState("");
    const inputHandler=(e)=>{
        setUpvalue(e.target.value)
    };
    return (

            <li data-test="LiTag" className={styles.mainlist}>
                {bedit?<input data-test="inputTag" className={styles.input} defaultValue={props.value} onChange={(e)=>inputHandler(e)}/>:<div data-test="pTag" className={styles.paragraph}>{props.value}</div>}
                <button onClick={()=>togglehandler(props.id) } className={styles.button}>delete</button>
                {bedit
                    ?
                    <button className={styles.leftspace} onClick={()=>UpdateHandler([props.id,upvalue])}>Update</button>
                        :
                    <button className={styles.leftspace} onClick={()=>edithandler()}>Edit</button>
                }
            </li>

    );
};

export default TodoList;
