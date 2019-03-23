import React from 'react';

export default (props)=>{
    return(
        <button style={{backgroundColor: props.color}} onClick={()=>console.log(props.children)}>
            {props.children}
        </button>
    )
}