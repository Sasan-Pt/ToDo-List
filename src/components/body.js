import React from 'react';
import {addtodo} from '../components/Redux/actions'
import PropTypes from 'prop-types';
import {useAppDispatch} from "../hooks";
import styles from "./body.module.css"


function Body(props) {
    const dispatch=useAppDispatch();
    const ToggleAction=(e)=>{
        e.preventDefault();
        if(e.target.username.value.length===0){
            return null
        }else {
            dispatch(addtodo({id:Math.random(),todo:e.target.username.value}))
            cancelCourse()
        }

    };

    const test=()=>{
        if(props.emitEvent){
            props.emitEvent();
        }
    };
    const cancelCourse = () => {
        document.getElementById("test").reset();
    }
    return (
        <form onSubmit={ToggleAction} className={styles.background} id="test" >
            <p data-test="paratest" id="test" className={styles.borderdown}>TO-DO-LIST</p>
            <div className={styles.borderdownsec}></div>
            <div className={styles.container}>
            <input id="username" placeholder={"Add your To-Do"}  data-test="inputtest"  className={styles.input}/>
            <button data-test="buttontest"  type="submit" onClick={()=>test()} className={styles.button} > Add a Todo</button>
            </div>
        </form>
    );

}
Body.propTypes = {
    buttonText: PropTypes.string,
    emitEvent: PropTypes.func
};


export default Body;
