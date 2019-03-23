import React from 'react';

export default (props)=>{
    return(
        <input onChange={props.onChange} placeholder={"Type your name here"}>
        </input>
    )
}