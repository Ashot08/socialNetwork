import React from "react";

export const Input = (props) => {
    return <div>
        <input {...props.input} placeholder={props.placeholder}/>
        {props.meta.error && props.meta.touched && <span>{props.meta.error}</span>}
    </div>
}
